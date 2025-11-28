# Hướng dẫn Setup Supabase

**Thời gian**: ~5 phút
**Chi phí**: FREE (Free tier: 500MB database, 1GB file storage, 50MB bandwidth)
**Link**: https://supabase.com

---

## ⚡ Quick Summary

Mày cần 2 thứ:
1. **SUPABASE_URL** - Project URL
2. **SUPABASE_ANON_KEY** - Public API key

---

## 📋 BƯỚC 1: Tạo Account

### 1.1. Truy cập Supabase
```
→ Vào https://supabase.com
→ Click "Start your project"
```

### 1.2. Sign Up
```
Recommended: Sign up với GitHub
- Click "Continue with GitHub"
- Authorize Supabase
- Xác nhận email (check inbox)

Alternative: Email/Password
- Nhập email
- Tạo password
- Verify email
```

**✅ Checkpoint**: Mày đã vào được Supabase dashboard

---

## 📋 BƯỚC 2: Tạo Project

### 2.1. New Project
```
→ Click "New Project"
→ Chọn Organization (nếu chưa có, tạo mới)
```

### 2.2. Điền Thông tin
```
Name: [Tên project, ví dụ: "chat-app"]
Database Password: [Tạo password MẠNH]
  ⚠️ LƯU PASSWORD NÀY LẠI - Cần cho direct database access

Region: Chọn "Southeast Asia (Singapore)"
  → Gần Việt Nam nhất, latency thấp

Pricing Plan: Free
```

### 2.3. Create
```
→ Click "Create new project"
→ Đợi ~2-3 phút (project đang khởi tạo)
→ Màn hình sẽ show progress bar
```

**✅ Checkpoint**: Project dashboard đã load xong

---

## 📋 BƯỚC 3: Lấy API Keys

### 3.1. Vào Settings
```
→ Click icon ⚙️ (Settings) ở sidebar bên trái
→ Click "API" trong menu Settings
```

### 3.2. Copy Keys
```
Trong màn hình API Settings:

1. Project URL:
   → Section "Project URL"
   → Copy URL: https://xxxxx.supabase.co

2. API Keys:
   → Section "Project API keys"
   → Tìm "anon public" key
   → Click "Copy" (icon clipboard)
   → Key format: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

⚠️ KHÔNG lấy "service_role" key - cái đó là secret key
```

**✅ Checkpoint**: Mày đã có 2 values:
- `SUPABASE_URL=https://xxxxx.supabase.co`
- `SUPABASE_ANON_KEY=eyJxxx...`

---

## 📋 BƯỚC 4: Cung cấp cho AI

### Paste vào chat theo format:

```
SUPABASE_URL=https://xxxxx.supabase.co
SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

AI sẽ:
- ✅ Validate format
- ✅ Test connection
- ✅ Lưu vào `.env.local`

---

## 🗄️ DATABASE SETUP (Nếu cần)

### Tạo Tables

Nếu project cần database tables, AI sẽ hỏi:

**Option 1: Auto-setup** (Khuyến nghị)
```
AI: "Tao có thể tạo tables tự động. OK không? [Y/n]"
Mày: "Y"
→ AI run SQL scripts → Tables created ✅
```

**Option 2: Manual setup**
```
AI sẽ cung cấp SQL scripts:

1. Vào Supabase Dashboard
2. Click "SQL Editor" (sidebar trái)
3. Click "New query"
4. Paste SQL script AI cung cấp
5. Click "Run" (hoặc Ctrl+Enter)
6. Check "Success" message

Example SQL:
CREATE TABLE messages (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  content TEXT NOT NULL,
  user_id UUID REFERENCES auth.users(id),
  created_at TIMESTAMP DEFAULT NOW()
);
```

---

## 🔐 SECURITY NOTES

### RLS (Row Level Security)

Supabase mặc định enable RLS. Nếu tables bị "403 Forbidden":

```
1. Vào "Authentication" → "Policies"
2. Tạo policy cho table:
   - Table: [tên table]
   - Policy name: "Enable read for all"
   - Target: ALL
   - Check: true

Hoặc disable RLS (KHÔNG khuyến nghị production):
ALTER TABLE messages DISABLE ROW LEVEL SECURITY;
```

### API Keys Safety

- ✅ `anon public` key - An toàn cho client-side
- ❌ `service_role` key - KHÔNG bao giờ expose client-side
- ⚠️ Database password - Chỉ dùng cho direct connection

---

## 🐛 TROUBLESHOOTING

### Issue: "Failed to create project"
```
→ Check email đã verify chưa
→ Đợi thêm 2-3 phút (server busy)
→ Try again hoặc choose khác region
```

### Issue: "Connection failed"
```
→ Check SUPABASE_URL có đúng format không
→ Check có typo trong key không
→ Đợi 1-2 phút sau khi tạo project (backend đang init)
```

### Issue: "Table not found"
```
→ Vào SQL Editor check table đã tạo chưa
→ Run: SELECT * FROM information_schema.tables;
→ Nếu chưa có, chạy lại CREATE TABLE script
```

### Issue: "403 Forbidden khi query"
```
→ Check RLS policies
→ Tạo policy hoặc disable RLS cho dev
```

---

## 📚 NEXT STEPS

Sau khi setup xong:

1. **Validate**: AI sẽ test connection
2. **Store**: Keys lưu vào `.env.local`
3. **Proceed**: Tiếp tục Phase 0 của workflow

---

## 🔗 USEFUL LINKS

- Dashboard: https://app.supabase.com
- Docs: https://supabase.com/docs
- SQL Reference: https://supabase.com/docs/guides/database
- API Reference: https://supabase.com/docs/reference/javascript
- RLS Guide: https://supabase.com/docs/guides/auth/row-level-security

---

**Gặp vấn đề?** Gõ "help supabase [issue]" để được support.
