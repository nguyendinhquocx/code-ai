# Phase -1 Integration Guide

Hướng dẫn integrate Pre-requisites Discovery vào workflows hiện có

---

## 🎯 OVERVIEW

Phase -1 được insert TRƯỚC Phase 0 của bất kỳ workflow nào:

```
USER REQUEST
    ↓
Phase -1: Pre-requisites Discovery ⭐ (NEW)
    ↓
Phase 0: Setup & Understanding
    ↓
Phase 1-N: Execute workflow
    ↓
DONE
```

---

## 📋 INTEGRATION VÀO DATA ANALYST WORKFLOW

### Location
File: `data analyst/data analyst vn/workflow/workflow-analytics-tong-quan.md`

### Trigger Conditions

Phase -1 chạy khi detect:
- External data sources (APIs, databases)
- Cloud storage (S3, GCS)
- Authentication services
- Real-time data connections

### Example Scenario

```
User: "Phân tích data từ Supabase, realtime dashboard"

Phase -1 Detects:
- Supabase (database connection)
- Realtime subscription (websocket)

Phase -1 Checklist:
✅ SUPABASE_URL
✅ SUPABASE_ANON_KEY
✅ Database table schema
✅ RLS policies

→ Setup xong → Proceed Phase 0
```

### Modified Workflow

```yaml
# workflow-analytics-tong-quan.md

## PHASE -1: PRE-REQUISITES (NEW)

**Duration**: 3-10 minutes
**Trigger**: Auto-detect từ user requirements

### Steps:
1. Analyze user request for external dependencies
2. Detect required services/resources
3. Present interactive checklist
4. Guide setup if needed
5. Validate connections
6. Store configs

### Output:
- `.env.local` với keys
- `config/prerequisites.yaml` với validation status
- Ready to proceed ✅

---

## PHASE 0: SETUP & UNDERSTANDING

(Existing content...)
```

---

## 📋 INTEGRATION VÀO SPECKIT WORKFLOW

### Location
File: `speckit/speckit claude code vn/.claude/commands/speckit.specify.md`

### Trigger Conditions

Phase -1 chạy khi detect từ feature description:
- External services mentions
- API integrations
- Third-party platforms
- Authentication/payment

### Example Scenario

```
User: "/speckit.specify Tạo app chat với Supabase và OpenAI"

Phase -1 Detects:
- Supabase (database + realtime)
- OpenAI (AI chat)

Phase -1 Checklist:
Required:
✅ SUPABASE_URL
✅ SUPABASE_ANON_KEY

Optional:
☐ OPENAI_API_KEY (for AI features)

User decision: Setup OpenAI now? [Y/skip/later]
→ User: "skip"

→ Proceed to generate spec
```

### Modified Workflow

```markdown
# speckit.specify.md

## Outline

1. **Parse user input** (feature description)

2. **Phase -1: Pre-requisites Discovery** (NEW)
   - Analyze feature description for external dependencies
   - Detect services: Supabase, OpenAI, Stripe, etc.
   - Interactive checklist
   - Guide setup
   - Validate & store
   - Confirm ready

3. **Generate short name** for branch
   (Existing step 1...)

4. **Check branches** and create
   (Existing step 2...)

5. **Generate spec** with resources confirmed
   (Existing steps...)
```

---

## 🤖 AI AGENT PROMPTS

### Detect Phase -1 Trigger

```markdown
## Check Pre-requisites Needed

Trước khi bắt đầu workflow chính, check xem có cần Phase -1 không:

**Auto-detect từ keywords:**
- Load `prerequisites/templates/detection-rules.yaml`
- Parse user request với regex patterns
- Match keywords → Detect services

**Example:**
User: "Làm app chat với Supabase"
→ Match: "supabase" keyword
→ Trigger Phase -1
→ Load guide: prerequisites/guides/supabase-setup.md

**If no external dependencies:**
→ Skip Phase -1
→ Proceed Phase 0 directly
```

### Run Phase -1 Flow

```markdown
## Phase -1 Execution

### Step 1: Analyze & Detect
```python
# Pseudo-code
detected_services = detect_services(user_request)
# Returns: ['supabase', 'openai']

for service in detected_services:
    load_requirements(service)
    # From detection-rules.yaml
```

### Step 2: Present Checklist
```markdown
Load template: prerequisites/templates/prerequisites-template.yaml
Generate checklist with:
- Required resources (checkboxes)
- Optional resources
- Guides available
- Estimated setup time
```

### Step 3: Interactive Setup
```markdown
For each missing resource:
  IF user has it:
    → Collect value
    → Validate
    → Store
  ELSE:
    → Offer guide
    → Load: prerequisites/guides/{service}-setup.md
    → Show step-by-step
    → Wait for user to complete
    → Collect values
    → Validate & store
```

### Step 4: Validation
```markdown
For each resource:
  1. Format validation (regex)
  2. Connection test (API call)
  3. Mark status in config

Example:
SUPABASE_URL:
  Format: ✅ Matches https://*.supabase.co
  Connection: ✅ GET {url}/rest/v1/ → 200 OK
  Status: validated ✅
```

### Step 5: Storage
```markdown
1. Write .env.local:
   - All secrets (API keys, passwords)
   - Format: KEY=value

2. Write config/prerequisites.yaml:
   - Non-sensitive configs
   - Validation status
   - Timestamps

3. Create .env.example:
   - Template without actual values
   - For documentation
```

### Step 6: Confirm Ready
```markdown
Present summary:

✅ All required resources: Ready
☐ Optional resources: 2 skipped, 1 configured
✅ Validation: Passed
✅ Configs saved: .env.local, config/prerequisites.yaml

Ready to proceed to Phase 0? [Y/n]

If Y → Continue workflow
If n → Ask what's missing → Re-run relevant steps
```
```

---

## 🔧 SLASH COMMANDS

Tạo commands mới:

### `/prereq` Commands

```markdown
# File: .claude/commands/prereq.check.md
---
description: Check prerequisites for current project
---

Analyze current project và check:
1. Load config/prerequisites.yaml (nếu có)
2. Detect missing resources
3. Show status report
4. Offer to setup missing items

Output format:
✅ Supabase: Configured & validated
⚠️ OpenAI: Missing (optional)
❌ Stripe: Required but not configured

Action: [setup missing / validate all / skip]
```

```markdown
# File: .claude/commands/prereq.setup.md
---
description: Interactive prerequisites setup
---

Run Phase -1 flow:
1. Detect services from project files
2. Present checklist
3. Guide setup
4. Validate & store
5. Confirm ready
```

```markdown
# File: .claude/commands/prereq.validate.md
---
description: Validate existing prerequisites
---

Load .env.local và config/prerequisites.yaml
For each resource:
  - Re-run validation (format + connection)
  - Update status
  - Report results

Output:
✅ SUPABASE_URL: Valid (200 OK)
❌ OPENAI_API_KEY: Invalid (401 Unauthorized)

Action: [fix errors / skip]
```

```markdown
# File: .claude/commands/prereq.guide.md
---
description: Show setup guide for a service
---

Usage: /prereq.guide [service]

Example: /prereq.guide supabase
→ Display: prerequisites/guides/supabase-setup.md

Available guides:
- supabase
- openai
- stripe
- firebase
- mongodb
```

---

## 📁 FILE STRUCTURE

Sau khi Phase -1 complete:

```
project/
├── .env.local                          # ⭐ Secrets (gitignored)
├── .env.example                        # Template
├── config/
│   └── prerequisites.yaml              # ⭐ Validation status
├── prerequisites/                      # ⭐ Framework files
│   ├── README.md
│   ├── templates/
│   ├── guides/
│   └── examples/
├── [workflow-specific files...]
```

---

## 🎯 BEST PRACTICES

### 1. Smart Detection
- Parse user request first
- Load detection-rules.yaml
- Match keywords with confidence scoring
- Ask user if ambiguous

### 2. Prioritized Flow
```
REQUIRED resources:
→ Setup first, block if missing

OPTIONAL resources:
→ Offer alternatives
→ Allow skip
→ Can setup later
```

### 3. Resume Capability
```
Session 1: User starts, setup 50%, exits
Session 2: User returns
→ Detect config/prerequisites.yaml exists
→ Load checkpoint
→ Show: "Resume Phase -1? Items done: X/Y"
→ Continue from where stopped
```

### 4. Validation Levels
```
QUICK (default):
- Format check
- Basic connection test

DEEP (/prereq.validate --deep):
- Full API test
- Permissions check
- Database schema validation
```

### 5. Error Handling
```
If validation fails:
1. Show clear error message
2. Offer troubleshooting steps
3. Link to guide section
4. Allow retry or skip (if optional)
5. Don't block workflow indefinitely
```

---

## 🚀 ROLLOUT PLAN

### Phase 1: Core Framework (DONE)
- ✅ Templates created
- ✅ Guides written (Supabase, OpenAI)
- ✅ Detection rules defined

### Phase 2: Commands (TODO)
- [ ] Create `/prereq.*` commands
- [ ] Test with real projects
- [ ] Refine user experience

### Phase 3: Integration (TODO)
- [ ] Update Data Analyst workflow
- [ ] Update Speckit workflow
- [ ] Update AGENTS.md triggers

### Phase 4: Documentation (TODO)
- [ ] Add examples
- [ ] Create video guides (optional)
- [ ] FAQ section

---

## 📚 EXAMPLES

See: `prerequisites/examples/` for full working examples:
- `supabase-chat-app/` - Supabase + React
- `openai-integration/` - OpenAI API usage
- `multi-service/` - Supabase + OpenAI + Stripe

---

**Ready to integrate?** Start with Phase 2: Create slash commands.
