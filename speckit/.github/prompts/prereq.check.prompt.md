---
description: Kiểm tra resources cần thiết cho project hiện tại
---

## Mục đích

Phân tích project và detect resources/services cần thiết, kiểm tra trạng thái sẵn sàng.

## Flow

### 1. Phân tích Project

Đọc files trong project:
- `package.json` / `requirements.txt` - Dependencies
- `.env.example` - Expected environment variables
- `README.md` - Setup instructions
- `config/prerequisites.yaml` - Trạng thái resources (nếu có)
- Source code - Import statements, API calls

### 2. Detect Services

Load detection rules:
```
File: d:\pcloud\workspace\code\ai\prerequisites\templates\detection-rules.yaml
```

Match patterns:
- Dependencies trong package files
- Environment variables
- API endpoints trong code
- Database connections
- Third-party service mentions

### 3. Kiểm tra Trạng thái

For each detected service:

**Nếu có `config/prerequisites.yaml`**:
- Load status từ file
- Kiểm tra resources đã configured chưa
- Validate lại nếu cần

**Nếu không có config**:
- Check `.env.local` có keys không
- Detect từ environment variables
- Mark as "chưa cấu hình" nếu thiếu

### 4. Report Kết quả

```markdown
KIỂM TRA RESOURCES: [Project Name]

## Trạng thái Tổng quan

Đã cấu hình: [X/Y services]
Thiếu: [Z services]
Sẵn sàng: [YES/NO]

---

## Chi tiết Services

### [Service Name] - [BẮT BUỘC/TÙY CHỌN]

Trạng thái: [Đã cấu hình/Thiếu/Lỗi]

Resources:
- [RESOURCE_KEY]: [Có/Thiếu/Lỗi format]
  Validated: [Ngày giờ hoặc "Chưa validate"]
  Connection: [OK/FAIL với details]

Nếu thiếu:
  Action: Chạy `/prereq.setup` để cấu hình
  Hoặc: Gõ "guide [service]" để xem hướng dẫn

---

### [Another Service]
...

---

## Hành động Tiếp theo

[Nếu tất cả OK]:
  Tất cả resources sẵn sàng
  Có thể bắt đầu development

[Nếu thiếu resources]:
  Cần setup [X] services

  Options:
  (1) /prereq.setup - Setup interactively
  (2) guide [service] - Xem hướng dẫn chi tiết
  (3) /prereq.validate - Re-validate existing resources

[Nếu có lỗi validation]:
  Resources sau cần fix:
  - [Service]: [Error message]

  Chạy /prereq.validate để kiểm tra lại
```

## Special Cases

### Project chưa có dependencies
```
Project không detect services bên ngoài.

Đây là project thuần local hoặc chưa có dependencies.
Không cần Phase -1 Pre-requisites.
```

### Resources đã có nhưng outdated
```
Phát hiện resources đã cấu hình nhưng lâu rồi:
- [Service]: Validated [X days ago]

Muốn validate lại? [Y/n]
```

### Multiple environments detected
```
Phát hiện nhiều env files:
- .env.local (development)
- .env.production (production)

Check environment nào? [local/production/all]
```

## Output Files

Command này KHÔNG tạo/sửa files, chỉ READ và REPORT.

## Example Output

```
KIỂM TRA RESOURCES: Chat App

## Trạng thái Tổng quan

Đã cấu hình: 1/2 services
Thiếu: 1 service
Sẵn sàng: KHÔNG

---

## Chi tiết Services

### Supabase - BẮT BUỘC

Trạng thái: Đã cấu hình

Resources:
- SUPABASE_URL: Có
  Validated: 2025-11-27 20:30:00
  Connection: OK (200)

- SUPABASE_ANON_KEY: Có
  Validated: 2025-11-27 20:30:00
  Connection: OK

Location: .env.local, config/prerequisites.yaml

---

### OpenAI - TÙY CHỌN

Trạng thái: Thiếu

Resources:
- OPENAI_API_KEY: Thiếu

Lý do cần: AI-powered chat features

Action:
  Chạy `/prereq.setup` để cấu hình
  Hoặc gõ "guide openai"
  Hoặc skip nếu không cần AI features

---

## Hành động Tiếp theo

Cần setup OpenAI (optional).

Options:
(1) /prereq.setup - Setup OpenAI ngay
(2) Skip - Bỏ qua, làm sau
(3) Continue - Tiếp tục development (AI features sẽ disabled)
```

## LƯU Ý

- Command này safe, chỉ READ
- Không modify files
- Không call external APIs (chỉ validate nếu có flag)
- Fast execution (< 2 giây)
