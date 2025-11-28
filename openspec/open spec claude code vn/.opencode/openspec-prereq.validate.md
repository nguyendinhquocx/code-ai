---
description: Validate lại tất cả resources đã configured cho OpenSpec project
---

## Mục đích

Re-validate tất cả resources trong `.env.local` và `config/prerequisites.yaml` để đảm bảo vẫn hoạt động.

## Khi nào dùng

- Sau khi rotate API keys
- Lâu rồi không chạ project (credentials có thể expired)
- Before creating proposal/applying changes
- Debug connection issues
- Sau khi update services

## Flow

### 1. Load Configs

```
Loading configs...

Found:
- .env.local ([X] keys)
- config/prerequisites.yaml ([Y] services)

Validate level:
(1) Quick - Format check only (< 5 giây)
(2) Standard - Format + connection test (< 30 giây)
(3) Deep - Full validation với permissions (< 60 giây)

Chọn: [1/2/3] (default: 2)
```

### 2. Validation Process

For each service trong config:

**Quick validation** (level 1):
```
[Service Name]

Checking [KEY_1]:
  Format: [Checking pattern...]
  Format: OK / FAIL [reason]

Checking [KEY_2]:
  Format: OK / FAIL [reason]

Service: PASS / FAIL
```

**Standard validation** (level 2):
```
[Service Name]

Checking [KEY_1]:
  Format: OK
  Connection: [Testing...]
  Connection: OK (200) / FAIL (error details)
  Response time: [X]ms

Checking [KEY_2]:
  Format: OK
  Connection: OK (200)
  Response time: [X]ms

Service: PASS / FAIL
```

**Deep validation** (level 3):
```
[Service Name]

Checking [KEY_1]:
  Format: OK
  Connection: OK (200)
  Permissions: [Testing read/write...]
  Permissions: READ: OK, WRITE: OK / FAIL

  [Nếu database]:
    Tables: [Checking schema...]
    Tables: messages (OK), typing_status (OK)

  [Nếu API]:
    Rate limit: [X]/[Y] requests remaining
    Quota: [X]% used

Checking [KEY_2]:
  ...

Service: PASS / FAIL với detailed report
```

### 3. Report Results

```markdown
VALIDATION REPORT

Executed: [Timestamp]
Level: [Quick/Standard/Deep]

---

## Tổng quan

Total services: [X]
Passed: [Y]
Failed: [Z]
Warnings: [W]

Overall status: [PASS/FAIL/WARNING]

---

## Chi tiết

### [Service 1] - PASS

All checks passed

Resources:
- [KEY_1]: OK (validated [timestamp])
  Connection: 200 OK ([X]ms)

- [KEY_2]: OK
  Connection: 200 OK ([X]ms)

Last validated: [Previous timestamp]
Status: HEALTHY

---

### [Service 2] - FAIL

Validation failed

Resources:
- [KEY_1]: FAIL
  Error: Invalid API key (401 Unauthorized)

  Possible reasons:
  - Key đã revoked
  - Key expired
  - Typo trong .env.local

  Action:
    (1) Check service dashboard
    (2) Regenerate key
    (3) Update .env.local

- [KEY_2]: OK
  Connection: 200 OK

Status: UNHEALTHY - Cần fix

---

### [Service 3] - WARNING

Passed nhưng có warnings

Resources:
- [KEY]: OK
  Connection: 200 OK

  Warnings:
  - Rate limit: 95% used (19/20 requests)
  - Quota: 80% used (800MB/1GB)
  - Key sẽ expire trong 7 ngày

  Recommended:
  - Monitor usage
  - Consider upgrade plan
  - Rotate key trước khi expire

Status: HEALTHY với warnings

---

## Actions Required

[Nếu tất cả PASS]:
  Tất cả resources healthy
  No action needed

  Có thể proceed với OpenSpec workflow

[Nếu có FAIL]:
  Services sau cần fix:

  1. [Service]: [Issue]
     Action: [Specific steps]

  2. [Another service]: [Issue]
     Action: [Steps]

  Sau khi fix, chạy lại /prereq.validate

[Nếu có WARNING]:
  Services có warnings:

  - [Service]: [Warning details]
    Recommended: [Actions]

  Warnings không block development nhưng nên address sớm.

---

## Updated Files

- config/prerequisites.yaml (updated validation timestamps)
```

### 4. Update Config

Sau validation, update `config/prerequisites.yaml`:

```yaml
services:
  supabase:
    resources:
      - key: SUPABASE_URL
        validated: true
        validated_at: "[NEW TIMESTAMP]"
        validation_result: "OK (200)"

  openai:
    resources:
      - key: OPENAI_API_KEY
        validated: false
        validated_at: "[NEW TIMESTAMP]"
        validation_result: "FAIL (401 Unauthorized)"
        validation_error: "Invalid API key"
```

## Validation Methods

### Supabase
```
URL check:
  GET {SUPABASE_URL}/rest/v1/
  Headers: apikey: {SUPABASE_ANON_KEY}

  Expect: 200 OK

Deep check:
  Query tables:
  SELECT table_name FROM information_schema.tables

  Check RLS policies
```

### OpenAI
```
Quick:
  Pattern check: sk-* hoặc sk-proj-*

Standard:
  GET https://api.openai.com/v1/models
  Headers: Authorization: Bearer {KEY}

  Expect: 200 OK với models list

Deep:
  POST https://api.openai.com/v1/chat/completions
  (Test actual API call với minimal request)
```

### Stripe
```
Standard:
  GET https://api.stripe.com/v1/products
  Headers: Authorization: Bearer {SECRET_KEY}

  Expect: 200 OK

Deep:
  Check webhook endpoint configured
  Verify webhook secret
```

## Error Details

Provide actionable errors:

```
BAD:
  Connection failed

GOOD:
  Connection failed: 401 Unauthorized

  Lý do có thể:
  - API key invalid hoặc expired
  - Key bị revoke trong dashboard
  - Typo khi copy/paste

  Cách fix:
  1. Vào [Service] dashboard
  2. Kiểm tra key status
  3. Nếu cần, regenerate key mới
  4. Update .env.local với key mới
  5. Chạy lại /prereq.validate
```

## Output Options

```
Sau validation, mày muốn:

(1) View full report (như trên)
(2) View summary only (chỉ PASS/FAIL)
(3) View failures only (chỉ services fail)
(4) Export report to file (prerequisites-report.md)

Chọn: [1/2/3/4]
```

## Special Cases

### All services down
```
Không thể connect đến bất kỳ service nào.

Có thể do:
- Internet connection issue
- VPN blocking APIs
- Firewall rules

Kiểm tra network rồi thử lại.
```

### Partial failures
```
Warning: Một số services OK, một số fail.

Project có thể chạy với degraded mode:
- Core features: OK (Supabase connected)
- Optional features: FAIL (OpenAI không connect)

Continue development? Một số features sẽ không work.
```

## Performance

- Quick validation: < 5 giây (no API calls)
- Standard validation: < 30 giây (1-2 API calls per service)
- Deep validation: < 60 giây (multiple API calls, schema checks)

Parallel validation cho multiple services để nhanh hơn.

## LƯU Ý

- Command này SAFE - chỉ READ và TEST
- Không modify credentials
- Không tốn quota (chỉ lightweight API calls)
- Update timestamps trong config
- Có thể chạy bất cứ lúc nào
