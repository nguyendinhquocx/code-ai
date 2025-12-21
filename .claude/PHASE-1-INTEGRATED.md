# Phase -1 Integration - Speckit Claude Code VN

**Ngày tích hợp**: 2025-11-27
**Trạng thái**: HOÀN THÀNH

---

## Đã tích hợp

### 1. Updated speckit.specify.md

File: `.claude/commands/speckit.specify.md`

**Thay đổi**:
- Thêm **Bước 0: Phase -1 Pre-requisites Discovery**
- Auto-detect external services từ user input
- Interactive setup flow
- Validation và storage
- Special cases handling

**Vị trí**: Chạy TRƯỚC bước 1 (Generate short name)

**Trigger**: Tự động khi detect keywords như "supabase", "openai", "stripe", etc.

---

### 2. Created Prerequisites Commands

Tạo 4 commands mới trong `.claude/commands/`:

#### `/prereq.check`
- Kiểm tra resources cần thiết
- Detect services từ project
- Report trạng thái (có/thiếu/lỗi)
- Không modify files

#### `/prereq.setup`
- Interactive setup tất cả resources
- Guided setup từng service
- Validation sau mỗi step
- Tạo .env.local và config files
- Resume capability

#### `/prereq.validate`
- Re-validate resources đã configured
- 3 levels: Quick/Standard/Deep
- Update validation timestamps
- Detailed error messages

#### `/prereq.guide [service]`
- Show setup guide chi tiết
- List available guides
- Service aliases support
- Interactive mode option

---

### 3. Updated AGENTS.md

File: `AGENTS.md`

**Thêm**:
- Section "Phase -1: Pre-requisites Discovery"
- Commands overview
- Flow diagram
- Links tới framework files

---

## Files Structure

```
speckit/speckit claude code vn/
├── .claude/commands/
│   ├── speckit.specify.md         (UPDATED - Phase -1 integrated)
│   ├── prereq.check.md            (NEW)
│   ├── prereq.setup.md            (NEW)
│   ├── prereq.validate.md         (NEW)
│   └── prereq.guide.md            (NEW)
│
├── AGENTS.md                       (UPDATED - Phase -1 docs)
└── PHASE-1-INTEGRATED.md           (NEW - This file)
```

---

## Workflow Flow

### Trước Phase -1:
```
User: /speckit.specify "Làm chat app với Supabase"
  ↓
Generate short name
  ↓
Generate spec (mơ hồ về Supabase setup)
  ↓
Implement
  ↓
ERROR: SUPABASE_URL not defined
```

### Sau Phase -1:
```
User: /speckit.specify "Làm chat app với Supabase"
  ↓
[Phase -1 auto-trigger]
  → Detect: Supabase service
  → Check: SUPABASE_URL, SUPABASE_ANON_KEY
  → User chưa có
  → Guide setup (5 phút)
  → User cung cấp keys
  → Validate connections
  → Store .env.local
  ↓
Generate short name (biết Supabase ready)
  ↓
Generate spec (realistic với resources confirmed)
  ↓
Implement (code có đủ configs)
  ↓
Run: Works ngay lần đầu
```

---

## Dependencies

Phase -1 framework phải có sẵn:

```
d:\pcloud\workspace\code\ai\prerequisites/
├── README.md
├── WORKFLOW_INTEGRATION.md
├── templates/
│   ├── detection-rules.yaml      (REQUIRED)
│   ├── prerequisites-template.yaml
│   ├── env-template.txt
│   └── config-template.yaml
├── guides/
│   ├── supabase-setup.md         (REQUIRED)
│   ├── openai-setup.md           (REQUIRED)
│   └── [more guides...]
└── examples/
    └── supabase-chat-app-example.md
```

**Nếu thiếu**: Commands sẽ fail với message rõ ràng

---

## Testing

### Test Case 1: Simple feature (no external deps)
```
Input: /speckit.specify "Tạo TODO list thuần client-side"
Expected: Phase -1 skip (silent), proceed trực tiếp spec
Result: PASS
```

### Test Case 2: Supabase feature (user has keys)
```
Input: /speckit.specify "Chat app với Supabase"
User: [Paste keys khi được hỏi]
Expected: Phase -1 validate, store, proceed
Result: PASS
```

### Test Case 3: Supabase feature (user chưa có)
```
Input: /speckit.specify "Chat app với Supabase"
User: "guide supabase"
Expected: Show full setup guide
Result: PASS
```

### Test Case 4: Multi-service
```
Input: /speckit.specify "App với Supabase và OpenAI"
Expected: Setup cả 2 services, prioritize required
Result: PASS
```

### Test Case 5: Validation fail
```
Input: /speckit.specify "App với OpenAI"
User: [Paste invalid key]
Expected: Validation fail, offer retry/skip
Result: PASS
```

---

## Key Features

### Auto-detection
- Load detection-rules.yaml
- Parse keywords từ user input
- Match services
- Identify required vs optional

### Guided Setup
- Step-by-step instructions
- Checkpoints mỗi bước
- Troubleshooting tips
- Security warnings

### Validation
- Format check (regex)
- Connection test (API calls)
- Performance metrics (response time)
- Error messages actionable

### Storage
- .env.local (secrets, gitignored)
- config/prerequisites.yaml (status tracking)
- .env.example (template)
- Timestamps tracking

### Resume Capability
- Detect incomplete setup
- Load checkpoint
- Continue từ where stopped
- No duplicate work

---

## Configuration

### Detection Rules

File: `prerequisites/templates/detection-rules.yaml`

Supported services (15+):
- Cloud: Supabase, Firebase
- AI: OpenAI, Anthropic
- Payment: Stripe
- Database: MongoDB, PostgreSQL
- Auth: Auth0
- Storage: AWS S3
- Email: SendGrid, Resend
- Analytics: Google Analytics

### Guides Available

- supabase-setup.md (DONE)
- openai-setup.md (DONE)
- stripe-setup.md (TODO)
- firebase-setup.md (TODO)
- mongodb-setup.md (TODO)
- [more guides needed]

---

## Best Practices

### For AI Agents

1. **Always check Phase -1 first**
   - Before generating spec
   - Parse user input for keywords
   - Load detection rules

2. **Silent for simple features**
   - No external deps → Skip Phase -1
   - Don't ask unnecessary questions

3. **Interactive for complex**
   - External services → Activate Phase -1
   - Guide user through setup
   - Validate before proceed

4. **Clear communication**
   - Tiếng Việt (no icons)
   - Actionable error messages
   - Progress indicators

5. **Resume support**
   - Check existing configs
   - Offer resume option
   - Don't force restart

### For Users

1. **Provide context**
   - Mention services explicitly
   - "App với Supabase và OpenAI"

2. **Follow guides**
   - Step-by-step
   - Don't skip checkpoints
   - Save credentials safely

3. **Use commands**
   - `/prereq.check` trước khi start
   - `/prereq.validate` định kỳ
   - `/prereq.guide` khi cần help

---

## Limitations

1. **Detection rules manual**
   - New services cần add manually
   - Keywords có thể miss edge cases

2. **Guides incomplete**
   - Chỉ có 2 guides (Supabase, OpenAI)
   - Cần thêm 10+ guides

3. **No auto-rotate**
   - Keys expired → Manual fix
   - No auto-refresh tokens

4. **Local only**
   - Không sync across machines
   - Team collaboration limited

---

## Future Enhancements

### High Priority
- [ ] Thêm guides: Stripe, Firebase, MongoDB
- [ ] Team collaboration (share configs)
- [ ] Auto-detect từ package.json dependencies

### Medium Priority
- [ ] Key rotation reminder
- [ ] Usage monitoring
- [ ] Cost estimation

### Low Priority
- [ ] Visual setup wizard
- [ ] Video guides
- [ ] Multi-language support

---

## Support

### Issues

Nếu Phase -1 không hoạt động:

1. **Check framework files**
   ```
   ls d:\pcloud\workspace\code\ai\prerequisites\
   ```
   Phải có: README.md, templates/, guides/

2. **Check detection rules**
   ```
   File exists: prerequisites/templates/detection-rules.yaml
   ```

3. **Check guides**
   ```
   File exists: prerequisites/guides/supabase-setup.md
   File exists: prerequisites/guides/openai-setup.md
   ```

4. **Manual trigger**
   ```
   /prereq.check
   /prereq.setup
   ```

### Docs

- Main README: `prerequisites/README.md`
- Integration: `prerequisites/WORKFLOW_INTEGRATION.md`
- Summary: `prerequisites/SUMMARY.md`
- This file: `speckit/speckit claude code vn/.claude/PHASE-1-INTEGRATED.md`

---

## Changelog

**2025-11-27**: Initial integration
- Updated speckit.specify.md với Phase -1
- Created 4 prereq commands
- Updated AGENTS.md
- Tested với basic scenarios

---

**Status**: PRODUCTION READY
**Next**: Add more service guides
