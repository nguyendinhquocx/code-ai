---
description: Kiểm tra resources cần thiết cho project OpenSpec
---

## Mục đích

Kiểm tra tất cả external services/resources cần thiết cho project và report trạng thái hiện tại.

## Flow

### 1. Detect Services

```
Analyzing OpenSpec project...

Checking prerequisites framework...

[IF framework không tìm thấy tại prerequisites/]:
  Prerequisites framework not found.

  Commands /prereq.* require framework.

  Options:
  (1) Setup framework (see docs)
  (2) Exit

  [Exit command]

[IF framework found]:
  ✓ Framework detected

  [Load detection rules: prerequisites/templates/detection-rules.yaml]

  [Scan sources]:
  - openspec/changes/*.md (pending proposals)
  - openspec/specs/*.md (current specs)
  - .env.local (configured resources)
  - config/prerequisites.yaml (tracked status)
```

### 2. Parse & Match

```
Detected keywords:
- "supabase" → Supabase service
- "openai" → OpenAI API service
- [more matches...]

Matched services:
- Supabase (database + realtime)
- OpenAI (AI API)
```

### 3. Check Status

For each service:

```
Checking [Service]...

Resources required:
- [KEY_1]: [Description]
- [KEY_2]: [Description]

Status:
[KEY_1]: ✓ Found (validated 2025-11-27 14:30)
[KEY_2]: ✗ Missing

Service status: INCOMPLETE
```

### 4. Report

```markdown
RESOURCES CHECK REPORT

Project: [Name từ openspec/project.md]
Checked: [Timestamp]

---

## Tổng quan

Total services: [X]
Ready: [Y]
Incomplete: [Z]
Not configured: [W]

Overall status: [READY/INCOMPLETE/NOT_READY]

---

## Chi tiết

### [Service 1] - READY

All resources configured và validated

Resources:
- [KEY_1]: ✓ (validated [timestamp])
- [KEY_2]: ✓ (validated [timestamp])

Last check: [timestamp]
Status: HEALTHY

---

### [Service 2] - INCOMPLETE

Thiếu một số resources

Resources:
- [KEY_1]: ✓
- [KEY_2]: ✗ Missing

Action needed:
  Chạy /prereq.setup để configure thiếu resources
  Hoặc /prereq.guide [service] để xem hướng dẫn

---

### [Service 3] - NOT CONFIGURED

Chưa setup

Resources needed:
- [KEY_1]
- [KEY_2]

Estimated setup time: ~[X] phút

Action:
  Run /prereq.setup để bắt đầu setup
  Hoặc /prereq.guide [service] để xem guide trước

---

## Actions Required

[Nếu tất cả READY]:
  Tất cả resources sẵn sàng

  Có thể proceed với:
  - /openspec proposal (tạo proposal mới)
  - /openspec apply (triển khai changes)

[Nếu có INCOMPLETE hoặc NOT_READY]:
  Services cần setup:

  1. [Service]: Missing [keys]
     → Run: /prereq.setup

  2. [Another service]: Not configured
     → Run: /prereq.guide [service]

  Hoặc setup tất cả:
    /prereq.setup

---

## Next Steps

Mày muốn:
(1) Setup missing resources (/prereq.setup)
(2) Xem guide cụ thể (/prereq.guide [service])
(3) Validate lại (/prereq.validate)
(4) Continue without setup (một số features có thể không work)

Chọn: [1/2/3/4]
```

## Detection Sources

### From Changes (proposals)
```
Scan: openspec/changes/*/proposal.md
Scan: openspec/changes/*/specs/*/spec.md

Tìm keywords trong:
- "Tại sao" section
- "Cái gì Thay đổi" section
- Requirements text
```

### From Specs (current capabilities)
```
Scan: openspec/specs/*/spec.md

Tìm keywords trong:
- Requirement descriptions
- Scenario descriptions
```

### From Config
```
Read: .env.local (nếu có)
Read: config/prerequisites.yaml (nếu có)

Load existing resources đã configured
```

## Output Format

Command này chỉ READ và REPORT, không modify files.

Output:
- Markdown report
- Service status list
- Action recommendations
- Next steps options

## Use Cases

### Case 1: New project (chưa setup gì)
```
Input: /prereq.check
Output:
  No services detected
  No resources configured

  Project có vẻ chưa cần external services.

  Nếu mày cần setup services:
    /prereq.setup
```

### Case 2: Project với services (đã setup)
```
Input: /prereq.check
Output:
  Detected: Supabase, OpenAI

  Supabase: READY (all keys valid)
  OpenAI: READY (key valid)

  Overall: READY

  Có thể proceed với development.
```

### Case 3: Incomplete setup
```
Input: /prereq.check
Output:
  Detected: Supabase, OpenAI

  Supabase: READY
  OpenAI: NOT CONFIGURED

  Overall: INCOMPLETE

  Action: Setup OpenAI với /prereq.setup
```

### Case 4: Outdated validation
```
Input: /prereq.check
Output:
  Detected: Supabase

  Supabase: READY
    Warning: Last validated 30 days ago
    Recommend: Re-validate với /prereq.validate
```

## Special Behaviors

### Auto-scan on command
```
Nếu project lớn (nhiều specs/changes):

  Scanning project...
  [Progress indicator]

  Found [X] specs, [Y] changes
  Detected [Z] services
```

### Smart detection
```
Nếu detect service nhưng không chắc:

  Possible service: [Service name]
  Keywords matched: [list]
  Confidence: [%]

  Confirm detection? [Y/n/skip]
```

## LƯU Ý

- Command này SAFE - chỉ đọc files, không modify
- Có thể chạy bất cứ lúc nào
- Không tốn quota (không gọi APIs)
- Fast execution (< 5 giây cho project nhỏ-medium)
