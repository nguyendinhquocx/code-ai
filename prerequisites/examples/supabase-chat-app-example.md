# Example: Supabase Chat App

Ví dụ thực tế về Phase -1 flow cho một chat app với Supabase

---

## 📝 USER REQUEST

```
User: "Làm app chat realtime với Supabase.
       User có thể gửi messages, xem history, typing indicators."
```

---

## 🔍 PHASE -1: AUTO-DETECTION

### AI Analysis

```markdown
Analyzing request...

Keywords detected:
- "supabase" → Match: Supabase service
- "chat realtime" → Match: Realtime features
- "messages" → Database table needed
- "typing indicators" → Realtime channel needed

Services identified:
1. Supabase (REQUIRED)
   - Database (PostgreSQL)
   - Realtime subscriptions
   - Authentication (implied for chat)

Optional services: None detected
```

---

## 📋 PHASE -1: INTERACTIVE CHECKLIST

### AI Presents

```markdown
═══════════════════════════════════════════════════════════
📋 PRE-REQUISITES CHECKLIST: Supabase Chat App
═══════════════════════════════════════════════════════════

Thời gian setup: ~5-10 phút
Chi phí: FREE (Supabase Free tier)

## ✅ REQUIRED RESOURCES

### Supabase Configuration
- [ ] **SUPABASE_URL** - Project URL
      Where: Supabase Dashboard → Settings → API
      Format: https://xxxxx.supabase.co

- [ ] **SUPABASE_ANON_KEY** - Public API key
      Where: Supabase Dashboard → Settings → API
      Format: eyJxxx...

**Chưa có Supabase account?**
→ Gõ "guide supabase" để tao hướng dẫn chi tiết

### Database Tables
- [ ] **messages** table
      Columns: id, content, user_id, created_at

- [ ] **typing_status** table (realtime)
      Columns: user_id, room_id, is_typing, updated_at

**Tao có thể tạo tables tự động. OK không? [Y/n]**

═══════════════════════════════════════════════════════════

Gõ:
- "ready" - Tao đã có Supabase keys
- "guide supabase" - Hướng dẫn setup
- "auto" - Tự động setup tables sau khi có keys
═══════════════════════════════════════════════════════════
```

---

## 🎬 SCENARIO 1: User chưa có Supabase

### User Response
```
User: "guide supabase"
```

### AI Response
```markdown
═══════════════════════════════════════════════════════════
🎯 HƯỚNG DẪN SETUP SUPABASE TỪ ĐẦU
═══════════════════════════════════════════════════════════

Thời gian: ~5 phút

BƯỚC 1: Tạo Account
────────────────────
1. Vào https://supabase.com
2. Click "Start your project"
3. Sign up với GitHub (khuyến nghị)

BƯỚC 2: Tạo Project
────────────────────
1. Click "New Project"
2. Name: "chat-app"
3. Password: [Tạo & LƯU LẠI]
4. Region: "Southeast Asia (Singapore)"
5. Click "Create" → Đợi 2 phút

BƯỚC 3: Lấy Keys
────────────────────
1. Settings → API
2. Copy:
   - Project URL: https://xxxxx.supabase.co
   - anon public key: eyJxxx...

BƯỚC 4: Paste cho tao
────────────────────

SUPABASE_URL=https://xxxxx.supabase.co
SUPABASE_ANON_KEY=eyJxxx...

═══════════════════════════════════════════════════════════

Xong rồi paste vào nhé!
```

### User Completes Setup

```
User (5 phút sau):

SUPABASE_URL=https://abcdef123.supabase.co
SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFiY2RlZjEyMyIsInJvbGUiOiJhbm9uIiwiaWF0IjoxNjk...
```

### AI Validates

```markdown
Validating...

✅ SUPABASE_URL:
   - Format: ✅ Valid (https://*.supabase.co)
   - Connection: ✅ Accessible (200 OK)

✅ SUPABASE_ANON_KEY:
   - Format: ✅ Valid JWT
   - Auth: ✅ Key works (GET /rest/v1/ → 200 OK)

Saving to .env.local... ✅

═══════════════════════════════════════════════════════════

Giờ tạo database tables.

Tao có thể tạo tự động bằng SQL scripts. OK không? [Y/n]
```

### User Confirms

```
User: "Y"
```

### AI Auto-creates Tables

```markdown
Executing SQL scripts...

Script 1: Create messages table
───────────────────────────────────────
CREATE TABLE messages (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  content TEXT NOT NULL,
  user_id UUID REFERENCES auth.users(id),
  room_id TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_messages_room ON messages(room_id);
CREATE INDEX idx_messages_created ON messages(created_at DESC);

Result: ✅ Table created


Script 2: Create typing_status table
───────────────────────────────────────
CREATE TABLE typing_status (
  user_id UUID NOT NULL,
  room_id TEXT NOT NULL,
  is_typing BOOLEAN DEFAULT false,
  updated_at TIMESTAMP DEFAULT NOW(),
  PRIMARY KEY (user_id, room_id)
);

-- Enable realtime
ALTER PUBLICATION supabase_realtime ADD TABLE typing_status;

Result: ✅ Table created


Script 3: Setup Row Level Security
───────────────────────────────────────
-- Messages: Anyone can read, authenticated can insert
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read messages"
  ON messages FOR SELECT
  USING (true);

CREATE POLICY "Authenticated can insert messages"
  ON messages FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

Result: ✅ RLS configured

═══════════════════════════════════════════════════════════
```

### AI Summary

```markdown
✅ PHASE -1 COMPLETE

Summary:
────────
✅ Supabase URL & keys: Configured
✅ Database tables: Created (messages, typing_status)
✅ Realtime: Enabled on typing_status
✅ RLS Policies: Configured
✅ Configs saved: .env.local, config/prerequisites.yaml

Files created:
- .env.local (gitignored)
- .env.example (template)
- config/prerequisites.yaml (status tracking)
- sql/schema.sql (backup của scripts)

═══════════════════════════════════════════════════════════

🚀 READY TO PROCEED TO PHASE 0

Proceed with app development? [Y]
```

---

## 🎬 SCENARIO 2: User đã có Supabase

### User Response
```
User: "ready"

SUPABASE_URL=https://myproject.supabase.co
SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### AI Fast-track

```markdown
Validating...

✅ SUPABASE_URL: Valid & accessible
✅ SUPABASE_ANON_KEY: Valid & working

Checking existing database...

Found tables:
- messages ✅ (schema matches requirements)
- typing_status ❌ (not found)

═══════════════════════════════════════════════════════════

Cần tạo:
- typing_status table

Tao có thể tạo tự động. OK? [Y/n]

(Nếu Y → Create missing table → Done ✅)
```

---

## 📁 GENERATED FILES

### .env.local
```bash
# Environment Variables
# Generated: 2025-11-27T20:30:00Z
# DO NOT COMMIT THIS FILE

# Supabase Configuration
SUPABASE_URL=https://abcdef123.supabase.co
SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### .env.example
```bash
# Environment Variables Template
# Copy this to .env.local and fill in values

# Supabase Configuration
# Get from: https://supabase.com/dashboard → Settings → API
SUPABASE_URL=your_project_url_here
SUPABASE_ANON_KEY=your_anon_key_here
```

### config/prerequisites.yaml
```yaml
project: "Supabase Chat App"
created_at: "2025-11-27T20:30:00Z"
phase: "completed"

services:
  supabase:
    status: "ready"
    required: true
    resources:
      - key: SUPABASE_URL
        value_from: .env.local
        validated: true
        validated_at: "2025-11-27T20:32:00Z"
        validation_result: "✅ Connection successful (200 OK)"

      - key: SUPABASE_ANON_KEY
        value_from: .env.local
        validated: true
        secret: false

database:
  tables:
    - name: "messages"
      status: "created"
      created_at: "2025-11-27T20:35:00Z"
      sql_file: "sql/create_messages.sql"

    - name: "typing_status"
      status: "created"
      created_at: "2025-11-27T20:35:30Z"
      sql_file: "sql/create_typing_status.sql"

completion:
  all_required_ready: true
  validated: true
  ready_to_proceed: true
  completed_at: "2025-11-27T20:36:00Z"
```

### sql/schema.sql
```sql
-- Database Schema Backup
-- Generated: 2025-11-27T20:35:00Z

-- Messages table
CREATE TABLE messages (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  content TEXT NOT NULL,
  user_id UUID REFERENCES auth.users(id),
  room_id TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_messages_room ON messages(room_id);
CREATE INDEX idx_messages_created ON messages(created_at DESC);

-- Typing status table (realtime)
CREATE TABLE typing_status (
  user_id UUID NOT NULL,
  room_id TEXT NOT NULL,
  is_typing BOOLEAN DEFAULT false,
  updated_at TIMESTAMP DEFAULT NOW(),
  PRIMARY KEY (user_id, room_id)
);

ALTER PUBLICATION supabase_realtime ADD TABLE typing_status;

-- RLS Policies
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read messages"
  ON messages FOR SELECT
  USING (true);

CREATE POLICY "Authenticated can insert messages"
  ON messages FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);
```

---

## ⏱️ TOTAL TIME

- **Scenario 1** (Chưa có Supabase): ~8 phút
  - User setup Supabase: 5 phút
  - AI validate & create tables: 3 phút

- **Scenario 2** (Đã có Supabase): ~2 phút
  - AI validate: 30 giây
  - AI create missing tables: 1.5 phút

---

## 🎯 SUCCESS CRITERIA

Phase -1 considered successful khi:

✅ All required resources validated
✅ Database schema created
✅ Realtime features enabled
✅ RLS policies configured
✅ Configs saved to files
✅ User confirmed ready

→ Proceed to Phase 0: App development ✅

---

## 📚 NEXT STEPS

Sau Phase -1:

**Phase 0**: Setup project structure
- Create React app / Next.js
- Install Supabase client
- Setup auth context
- Create routing

**Phase 1-N**: Implement features
- Chat UI
- Message sending
- Realtime subscriptions
- Typing indicators

All with resources READY từ Phase -1! 🚀
