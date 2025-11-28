# Context Files Giải thích

**Vũ khí Bí mật của Terminal AI**

Context files là THE feature làm cho terminal AI 10x tốt hơn browser AI. Hướng dẫn này giải thích mọi thứ.

## Vấn đề Browser

**Sự bực bội của Chuck:**
> "Mày trong browser. Mày đang hỏi questions, research mode. Mày đang dive sâu vào project. Không thể thấy scroll bar của mình nữa. Và đây là chat thứ năm của mày vì ChatGPT mất context của nó hoặc óc nó."

**Điều gì sai:**
- Infinite scrolling (mất track của conversation)
- Multiple scattered chats (context phân tán qua 20 tabs)
- Copy/paste chaos (cố gắng lưu important parts)
- Re-explaining context mỗi new chat
- Không có cách để "save" project state của mày

## Giải pháp Terminal: Context Files

### Context Files là gì?

**Câu trả lời đơn giản:** Markdown files nói cho AI biết project của mày là gì.

**Mỗi tool có file riêng:**
- Gemini CLI: `gemini.md`
- Claude Code: `claude.md`
- Codex: `agents.md`

### Sự ma thuật

**Mỗi lần mày khởi chạy AI trong directory:**
1. Tool tìm context file của nó
2. Loads nó tự động
3. Ngay hiểu project của mày
4. Không cần re-explaining!

**Aha moment của Chuck:**
> "Nó có thể truy cập Obsidian vault của mày, tất cả notes của mày, vì những chỉ là files ngồi đó trên hard drive của mày."

## Context Files hoạt động như thế nào

### Visual Representation

```
my-project/
├── gemini.md          ← Gemini đọc cái này
├── claude.md          ← Claude đọc cái này
├── agents.md          ← Codex đọc cái này
├── project-files/
│   ├── research.md
│   ├── outline.md
│   └── draft.md
```

**Khi mày khởi chạy:**
```bash
cd my-project
gemini

# Loading context from gemini.md... ✓
```

### Anatomy của một Context File

**Example `claude.md`:**

```markdown
# Project: Coffee Blog Series

## Overview
Tạo comprehensive blog series về coffee brewing methods,
targeted tại home coffee enthusiasts.

## Current Phase
Research hoàn tất, writing first draft

## Key Files
- research/coffee-methods.md - Compiled research
- outlines/series-outline.md - 5-part series structure
- drafts/part-1.md - First draft (in progress)

## Decisions Made
- Focus trên pour-over, French press, và espresso
- Tránh super technical chemistry details
- Include beginner-friendly equipment recommendations

## Next Steps
1. Hoàn thành part-1.md draft
2. Get feedback trên tone/style
3. Create equipment recommendations list

## Reference Documents
- Brand guidelines trong guidelines.md
- Target audience research trong audience-profile.md
```

### Cần Include gì

**✅ NÊN include:**
- Project overview
- Current phase/status
- Key files và purpose của chúng
- Major decisions đã làm
- Next steps
- Links đến reference documents

**❌ ĐỪNG include:**
- Full project content (chỉ reference files)
- Conversation history (để AI build natural)
- Temporary notes (giữ focused)

## Tạo Context Files

### Method 1: Để AI Làm (Được khuyên dùng)

**Gemini CLI:**
```bash
cd your-project
gemini
> /init
```

**Claude Code:**
```bash
cd your-project
claude
> /init
```

**Điều gì xảy ra:**
1. AI scans directory của mày
2. Đọc files của mày
3. Hỏi clarifying questions
4. Tạo context file

**Cách tiếp cận của Chuck:**
> "Hãy xem nó. Và trong khi chúng ta không làm nhiều trong project này, nó biết chuyện gì đang diễn ra."

### Method 2: Manual Creation

```bash
# Tạo thủ công
nano gemini.md

# Hoặc dùng AI của mày để giúp!
gemini
> Tạo gemini.md file mô tả project này
```

## Sử dụng Context Files

### Fresh Session = Full Context

**Killer demo từ video:**

1. **Session đầu tiên:**
   ```bash
   gemini
   > Nghiên cứu coffee brewing methods và tạo blog outline
   > /init
   ```

2. **Đóng và mở lại (NEW session):**
   ```bash
   gemini
   # Context loaded tự động
   > Viết intro cho blog post 1 trong coffee series
   ```

**Phản ứng của Chuck:**
> "Tao không cho nó context gì cả. Nó chỉ biết. Đây là chat session mới."

### Cập nhật Context

**Khi mày làm việc, cập nhật file:**

```bash
> Update gemini.md để reflect:
   - Research phase hoàn tất
   - First draft bắt đầu
   - Quyết định: Focus trên pour-over method trước tiên
```

**Hoặc cập nhật thủ công:**
```bash
nano gemini.md
# Edit và lưu
```

**Session tiếp theo tự động loads updates!**

## Real-World Example: Project Video của Chuck

**Video Timestamp:** 5:48-6:09

### Setup

```bash
cd ~/Projects/531-ai-terminal
ls
```

**Files có sẵn:**
```
gemini.md
claude.md
agents.md
531-script.md
research/
  ├── claude-code-research.md
  ├── gemini-cli-research.md
  └── opencode-research.md
```

### Workflow

**Chuck mở fresh Gemini session:**

```bash
gemini

# Loads gemini.md tự động
```

**Hỏi với ZERO additional context:**
```bash
> Chúng ta đang ở đâu trong project?
```

**Gemini trả lời:**
```
Dựa trên project files của mày:

Current Status: Script writing phase (100% hoàn tất)
- Tất cả segments hoàn tất (307 lines, ~17 min runtime)
- Hook hoàn tất
- Sẵn sàng cho filming

Key Files:
- 531-script.md (script hoàn tất)
- research/ folder (comprehensive research trên tất cả tools)
- session-summary.md (session history)

Next Steps:
- Script polish tùy chọn
- HOẶC tiến đến filming
```

**Sự kinh ngạc của Chuck:**
> "Mày có thấy điều này không? Điều này đã hoàn toàn thay đổi cách tao tạo hoặc làm bất kỳ cái gì bây giờ."

## Multi-Tool Context Syncing

**Video Timestamp:** 18:28-18:40

### Thách thức

Mày muốn dùng:
- Gemini CLI
- Claude Code
- Codex

Tất cả trên SAME project... làm sao mày giữ context đồng bộ?

### Giải pháp của Chuck

**Two-step process:**

#### Step 1: Same Directory

```bash
# Tất cả AI tools phải làm việc từ SAME project folder:
cd my-project

# Terminal Tab 1
gemini

# Terminal Tab 2
claude

# Terminal Tab 3
codex
```

#### Step 2: Sync Context Files

**Đảm bảo những files này có nội dung giống hệt:**
- `gemini.md`
- `claude.md`
- `agents.md`

**Method của Chuck:**
```bash
# Dùng một AI để sync others
claude

> Đọc claude.md và update cả gemini.md và agents.md
   để match, đảm bảo tất cả ba context files được synchronized
```

**Result:**
```
my-project/
├── gemini.md    ← Cùng nội dung
├── claude.md    ← Cùng nội dung
├── agents.md    ← Cùng nội dung
```

### Tại sao Cái này Hoạt động

**Từ Chuck:**
> "Mọi thứ tao đang làm, nói chuyện với ba AI khác nhau trên một project... Nó không tied trong browser. Nó không tied trong GUI. Nó chỉ là folder này ngay đây trên hard drive của tao."

**Mỗi AI:**
- Đọc context file của riêng nó
- Thấy cùng project state
- Làm việc trên cùng files
- Không copy/paste giữa tools!

## Advanced Context Strategies

### 1. Layered Context

**Structure:**
```
project/
├── claude.md              ← Main context
├── docs/
│   ├── framework.md       ← Reference trong claude.md
│   ├── brand-guide.md     ← Reference trong claude.md
│   └── audience.md        ← Reference trong claude.md
```

**Trong claude.md:**
```markdown
## Reference Documents
Cho detailed guidelines, xem:
- docs/framework.md - Scriptwriting framework
- docs/brand-guide.md - Brand voice guidelines
- docs/audience.md - Target audience research
```

**AI đọc main context, pulls trong references khi cần.**

### 2. Session Summaries

**Chuck dùng agent cho cái này (từ video):**

```bash
> @script-session-closer run

# Agent làm:
# 1. Summarizes current session
# 2. Updates context files (tất cả ba!)
# 3. Updates session-summary.md
# 4. Commits đến git
```

**Result:** Session tiếp theo picks up EXACTLY nơi mày dừng lại.

### 3. Multiple Projects

**Giữ chúng riêng biệt:**

```bash
~/coffee-project/
  ├── gemini.md      ← Coffee project context

~/video-script/
  ├── gemini.md      ← Video project context

~/homelab-docs/
  ├── gemini.md      ← Homelab context
```

**Không cross-contamination!**

### 4. Decision Log

**Track major decisions trong context:**

```markdown
## Decision Log

### 2025-10-15: Brew Method Selection
**Quyết định:** Focus trên pour-over chủ yếu
**Lý do:** Most beginner-friendly, popular, equipment accessible
**Impact:** Affects equipment recommendations và tutorial structure

### 2025-10-20: Series Length
**Quyết định:** 5 parts thay vì 3
**Lý do:** Quá nhiều content để compress, tốt hơn đi sâu
**Impact:** Updated outline, adjusted timeline
```

## Context File Best Practices

### ✅ NÊN

1. **Update thường xuyên** - Sau major work sessions
2. **Be concise** - Đừng dump toàn bộ project
3. **Reference files** - Đừng duplicate content
4. **Track decisions** - Tại sao mày chọn cái gì quan trọng
5. **Sync qua tools** - Nếu dùng multiple AIs
6. **Version control** - Commit đến git

### ❌ ĐỪNG

1. **Include sensitive data** - Context files có thể đọc được
2. **Copy/paste mọi thứ** - Reference thay thế
3. **Để nó stale** - Update khi project evolves
4. **Over-explain** - AI thông minh, be concise
5. **Quên sync** - Khi dùng multiple tools

## Context vs Conversation

### Hiểu Difference

**Context Window:**
- Current conversation messages
- Loaded files
- Context file content
- **Limited size** (200K tokens)

**Context File:**
- Project knowledge
- Persistent qua sessions
- **Unlimited size** (trong lý do)
- "Memory" của project của mày

### Example

**Session 1 (85K tokens dùng):**
```
Conversation: 80K tokens
Context file: 2K tokens
Loaded files: 3K tokens
```

**Session 2 (NEW session, 2K tokens dùng):**
```
Conversation: 0K tokens (fresh start!)
Context file: 2K tokens (loaded tự động)
Loaded files: 0K tokens (chưa load)
```

**Sự ma thuật:** Context file cho mày project knowledge KHÔNG burning conversation tokens.

## Triết lý "It's Just a Folder"

**Quan điểm quan trọng nhất của Chuck:**
> "Tao có thể copy và paste folder đó bất cứ đâu. Tất cả work, tất cả decisions, tất cả context - nó là của tao."

### Điều này Có nghĩa là gì

**Project của mày = Một folder chứa:**
- Context files
- Work products
- Reference documents
- Research
- Drafts

**Không vendor lock-in:**
- Works với bất kỳ AI tool (hỗ trợ context files)
- Stored local (mày sở hữu nó)
- Portable (copy đến bất kỳ machine)
- Version controlled (dùng git)

**Sự tự do của Chuck:**
> "Nếu AI mới, greater, better nào ra, tao sẵn sàng cho nó vì tất cả stuff của tao ngay đây trên hard drive của tao."

## Khắc phục sự cố

### Context File Không Load

```bash
# Kiểm tra mày ở đúng directory
pwd
ls *.md

# Verify filename (case-sensitive)
ls gemini.md    # ✓ Đúng
ls Gemini.md    # ✗ Sai
ls GEMINI.md    # ✗ Sai

# Tạo lại nếu cần
> /init
```

### Context Có vẻ Outdated

```bash
# AI có thể đang cache version cũ
> Reload gemini.md và re-read project

# Hoặc restart session
exit
gemini
```

### Multiple Context Files Xung đột

**Khi dùng multiple AIs, đảm bảo synced:**

```bash
# Dùng một AI để sync
claude
> Đọc claude.md và làm gemini.md và agents.md giống hệt
```

### Quá nhiều Context

**Nếu context file becomes huge (>5K words):**

1. **Move details đến separate docs**
2. **Reference chúng trong main context**
3. **Giữ main context concise**

## Summary: Tại sao Context Files Thắng

| Browser AI | Terminal AI + Context Files |
|------------|----------------------------|
| Infinite scroll hell | Clean context file |
| Re-explain every session | Auto-loads trên launch |
| 20 scattered chats | One project folder |
| Copy/paste nightmare | Direct file access |
| Vendor lock-in | Mày sở hữu mọi thứ |

**Quyết định của Chuck:**
> "Tao sở hữu context của tao. Không có gì làm tao bực mình hơn khi ChatGPT cố giam tao, cho tao vendor lock-in. Không, tao reject cái đó."

## Tiếp theo là gì?

**Bây giờ mày hiểu context files:**

➡️ [Multi-Tool Workflow](08-multi-tool-workflow.md) - Dùng context files qua multiple AIs

➡️ [Productivity Workflows](11-productivity-workflows.md) - Real examples dùng context files

---

[← Quay lại Claude Code](04-claude-code.md) | [Tiếp theo: Multi-Tool Workflow →](08-multi-tool-workflow.md)