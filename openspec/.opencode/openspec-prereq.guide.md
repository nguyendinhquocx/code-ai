---
description: Hiển thị hướng dẫn setup chi tiết cho service cụ thể
---

## Usage

```
/prereq.guide [service_name]
```

Examples:
```
/prereq.guide supabase
/prereq.guide openai
/prereq.guide stripe
/prereq.guide           (list all available guides)
```

## Flow

### 1. Parse Service Name

```
IF no service specified:
  Show list of available guides

IF service specified:
  Load guide file
```

### 2. List Available Guides

Nếu user không specify service:

```markdown
HƯỚNG DẪN SETUP SERVICES

Các guides có sẵn:

## Cloud Services

- supabase - Supabase (database + realtime)
  Time: ~5 phút | Cost: FREE
  File: prerequisites/guides/supabase-setup.md

- firebase - Firebase (alternative to Supabase)
  Time: ~5 phút | Cost: FREE
  File: prerequisites/guides/firebase-setup.md

## AI Services

- openai - OpenAI API (GPT models)
  Time: ~3 phút | Cost: Pay-as-you-go
  File: prerequisites/guides/openai-setup.md

- anthropic - Anthropic Claude API
  Time: ~3 phút | Cost: Pay-as-you-go
  File: prerequisites/guides/anthropic-setup.md

## Payment

- stripe - Stripe payment processing
  Time: ~10 phút | Cost: FREE (test mode)
  File: prerequisites/guides/stripe-setup.md

## Database

- mongodb - MongoDB Atlas
  Time: ~5 phút | Cost: FREE (M0 tier)
  File: prerequisites/guides/mongodb-setup.md

- postgres - PostgreSQL local
  Time: ~10 phút | Cost: FREE
  File: prerequisites/guides/postgres-local.md

## Authentication

- auth0 - Auth0 authentication
  Time: ~10 phút | Cost: FREE (7000 users)
  File: prerequisites/guides/auth0-setup.md

## Storage

- s3 - AWS S3 object storage
  Time: ~15 phút | Cost: Pay-as-you-go
  File: prerequisites/guides/s3-setup.md

## Email

- sendgrid - SendGrid email service
  Time: ~5 phút | Cost: FREE (100/day)
  File: prerequisites/guides/sendgrid-setup.md

- resend - Resend email API
  Time: ~3 phút | Cost: FREE (3000/month)
  File: prerequisites/guides/resend-setup.md

---

Để xem guide cụ thể, gõ:
/prereq.guide [service_name]

Ví dụ: /prereq.guide supabase
```

### 3. Load & Display Guide

Nếu user specify service:

```
Loading guide: [service_name]...

[Read file: d:\pcloud\workspace\code\ai\prerequisites\guides\[service]-setup.md]

[Display full content]
```

Guide format (example):

```markdown
HƯỚNG DẪN SETUP SUPABASE

Thời gian: ~5 phút
Chi phí: FREE (Free tier)
Link: https://supabase.com

---

BƯỚC 1: Tạo Account

1.1. Truy cập Supabase
   Vào https://supabase.com
   Click "Start your project"

1.2. Sign Up
   Recommended: Sign up với GitHub
   - Click "Continue with GitHub"
   - Authorize Supabase
   - Xác nhận email

Checkpoint: Đã vào Supabase dashboard

---

BƯỚC 2: Tạo Project

2.1. New Project
   Click "New Project"
   Chọn Organization

2.2. Điền Thông tin
   Name: [tên project]
   Password: [tạo password MẠNH - LƯU LẠI]
   Region: Southeast Asia (Singapore)
   Plan: Free

2.3. Create
   Click "Create"
   Đợi ~2 phút

Checkpoint: Project dashboard loaded

---

BƯỚC 3: Lấy API Keys

3.1. Vào Settings
   Click Settings (sidebar)
   Click "API"

3.2. Copy Keys
   Project URL: https://xxxxx.supabase.co
   anon public key: eyJxxx...

Checkpoint: Có 2 values

---

BƯỚC 4: Cung cấp cho AI

Paste vào chat:

SUPABASE_URL=https://xxxxx.supabase.co
SUPABASE_ANON_KEY=eyJxxx...

AI sẽ validate và lưu vào .env.local

---

[Full guide với troubleshooting, best practices, etc.]
```

### 4. Post-Display Actions

Sau khi show guide:

```
Guide displayed: [service_name]

Mày muốn:
(1) Setup ngay (interactive)
(2) Đọc thêm troubleshooting
(3) Xem guide khác
(4) Quay lại

Chọn: [1/2/3/4]

IF 1: Chạy /prereq.setup [service]
IF 2: Show troubleshooting section
IF 3: Show available guides list
IF 4: Exit
```

## Guide Features

Mỗi guide phải có:

1. **Quick Summary** (đầu file):
   - Time estimate
   - Cost
   - Link chính

2. **Step-by-step** với checkpoints:
   - Từng bước rõ ràng
   - Checkpoint sau mỗi section
   - Screenshots (nếu cần)

3. **Troubleshooting**:
   - Common errors
   - Solutions
   - Debug steps

4. **Best Practices**:
   - Security notes
   - Performance tips
   - Cost optimization

5. **Next Steps**:
   - Validation commands
   - Usage examples
   - Links hữu ích

## Service Name Mapping

```
Aliases supported:

supabase:
  - supabase
  - supa
  - postgres

openai:
  - openai
  - gpt
  - chatgpt

stripe:
  - stripe
  - payment

mongodb:
  - mongodb
  - mongo
  - atlas

etc.
```

## Error Handling

### Guide không tồn tại
```
Guide cho "[service]" không tìm thấy.

Có thể mày muốn:
- supabase
- openai
- stripe

Hoặc xem tất cả: /prereq.guide

Contribute guide: [link to repo]
```

### Guide chưa hoàn thành
```
Guide cho "[service]" đang được viết.

Tạm thời xem:
- Official docs: [link]
- Community guide: [link]

Hoặc request guide đầy đủ tại [link]
```

## Special Features

### Interactive mode
```
/prereq.guide supabase --interactive

Tao sẽ dẫn mày qua từng bước và check progress.

Sẵn sàng bắt đầu? [Y]

[Step by step với user confirmation mỗi step]
```

### Quick reference
```
/prereq.guide supabase --quick

QUICK REFERENCE: Supabase

Cần:
- SUPABASE_URL
- SUPABASE_ANON_KEY

Get from:
  supabase.com → Project → Settings → API

Paste format:
  SUPABASE_URL=https://xxx.supabase.co
  SUPABASE_ANON_KEY=eyJxxx...

Full guide: /prereq.guide supabase
```

### Search guides
```
/prereq.guide search "database"

Guides matching "database":
- supabase (Postgres database + realtime)
- mongodb (NoSQL database)
- postgres (Local PostgreSQL)
- firebase (Firestore database)

Refine search hoặc chọn guide.
```

## Output

Command này chỉ DISPLAY, không tạo files.

User có thể copy/paste commands từ guide.

## LƯU Ý

- Guides phải updated với service changes
- Luôn có troubleshooting section
- Security warnings rõ ràng (nào là secret key, nào là public)
- Links phải chính xác và working
- Screenshots nên có nhưng không bắt buộc (text-based guide ưu tiên)
