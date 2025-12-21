---
description: Setup interactively tất cả resources cần thiết cho OpenSpec project
---

## Mục đích

Interactive setup cho tất cả external services/resources cần thiết.

## Flow

### 1. Detect Services

Tương tự `/prereq.check`:
- Analyze OpenSpec project (changes + specs)
- Load detection rules
- Identify services cần thiết

### 2. Present Checklist

```markdown
SETUP RESOURCES: OpenSpec Project

Tao phát hiện project cần các services sau:

## BẮT BUỘC

### [Service 1]
Thời gian setup: ~[X] phút
Chi phí: [FREE/PAY-AS-YOU-GO]

Resources cần:
- [KEY_1] - [Description]
- [KEY_2] - [Description]

### [Service 2]
...

## TÙY CHỌN

### [Optional Service]
Lý do: [Why needed]
Resources cần:
- [KEY] - [Description]

---

Tổng thời gian estimate: ~[X] phút

Mày muốn:
(1) Setup tất cả
(2) Chỉ setup required
(3) Chọn từng service
(4) Xem guide trước

Chọn: [1/2/3/4]
```

### 3. Interactive Setup Flow

For each service user chọn:

**Step 3.1: Check existing**
```
Checking [Service]...

[Nếu đã có]:
  Phát hiện [Service] đã configured
  - [KEY]: Có (validated [timestamp])

  Validate lại? [Y/skip]

  IF skip: Tiếp service kế
  IF Y: Run validation → Continue

[Nếu chưa có]:
  Continue setup steps
```

**Step 3.2: Collect resources**
```
Setup [Service]

Mày đã có [Service] account và keys chưa? [Y/n]

IF Y:
  Paste resources theo format:

  SERVICE_KEY_1=value1
  SERVICE_KEY_2=value2

  [Đợi user input]

IF n:
  Chưa có account. Tao hướng dẫn setup:

  [Load guide: d:\pcloud\workspace\code\ai\prerequisites\guides\[service]-setup.md]
  [Display full guide chi tiết]

  Sau khi setup xong, paste keys vào:
  [Đợi user input]
```

**Step 3.3: Validate**
```
Validating [Service] resources...

Checking [KEY_1]:
  Format: [Đang kiểm tra...]
  Format: OK / FAIL [với reason]

  Connection: [Đang test...]
  Connection: OK (200) / FAIL [với details]

Checking [KEY_2]:
  ...

[Nếu tất cả OK]:
  [Service] validation: PASSED

[Nếu có lỗi]:
  Validation failed:
  - [KEY]: [Error message]

  Options:
  (1) Nhập lại
  (2) Skip (nếu optional)
  (3) Xem guide lại

  Chọn: [1/2/3]
```

**Step 3.4: Storage**
```
Lưu [Service] configs...

Created/Updated:
  - .env.local (secrets)
  - config/prerequisites.yaml (status)

[Service] setup: COMPLETE
```

**Step 3.5: Auto-setup** (nếu có)
```
[Service] hỗ trợ auto-setup cho:
- Database tables
- Webhooks
- Default configs

Tao có thể setup tự động. OK? [Y/n]

IF Y:
  [Show preview]
  [Execute]
  [Report kết quả]

IF n:
  [Provide manual instructions]
```

### 4. Summary

Sau khi setup tất cả services:

```markdown
SETUP HOÀN THÀNH

Đã cấu hình:
- [Service 1]: READY
- [Service 2]: READY

Đã bỏ qua:
- [Optional Service]: SKIPPED

Files đã tạo:
- .env.local (gitignored - KHÔNG commit)
- .env.example (template)
- config/prerequisites.yaml (trạng thái)

[Nếu có auto-setup]:
- sql/schema.sql (database backup)
- [other generated files]

---

Next Steps:

1. Verify .env.local đã được add vào .gitignore
2. Backup .env.local ra nơi an toàn
3. Có thể bắt đầu với OpenSpec workflow

Chạy `/prereq.check` để verify lại trạng thái.
```

## Resume Capability

Nếu user thoát giữa chừng:

```
Session 1:
  User: /prereq.setup
  AI: Setup service 1... [User thoát]

Session 2:
  User: /prereq.setup
  AI: Phát hiện setup chưa xong.

      Đã setup:
      - Service 1: COMPLETE

      Còn lại:
      - Service 2: PENDING
      - Service 3: PENDING

      Resume từ Service 2? [Y/restart]
```

## Error Handling

### Network errors
```
Connection test failed: Network error

Có thể do:
- Không có internet
- Service đang down
- Firewall blocking

Thử lại? [Y/skip/later]
```

### Invalid credentials
```
Validation failed: Invalid API key

Key có thể:
- Bị typo khi paste
- Đã revoked
- Chưa activate

Muốn:
(1) Nhập lại
(2) Xem guide để check
(3) Skip service này
```

### Rate limits
```
API rate limit exceeded during validation

Đợi [X] giây rồi thử lại? [Y/skip]
```

## Special Behaviors

### Smart defaults
```
Phát hiện environment: development

Tao recommend:
- Use test keys cho Stripe (không charge thật)
- Enable verbose logging
- Disable rate limiting

Apply defaults? [Y/customize]
```

### Batch operations
```
Tính năng cần 3 services tương tự:
- Supabase (database)
- Firebase (alternative)
- MongoDB (another option)

Mày chỉ cần 1 trong 3.

Chọn:
(1) Supabase (recommended - đã có guide)
(2) Firebase
(3) MongoDB
(4) So sánh trước khi chọn
```

## Output Files

Command này TẠO/UPDATE:
- `.env.local`
- `.env.example`
- `config/prerequisites.yaml`
- Auto-generated files (nếu có)

## LƯU Ý

- Interactive - cần user input nhiều lần
- Có thể mất 5-30 phút tùy số services
- Safe to interrupt - có resume capability
- Tạo files gitignored by default
- Validate trước khi save
