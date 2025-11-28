# Hướng dẫn Multi-Tool Workflow

**Video Timestamp:** 18:03-19:25

**Ultimate Power Move:** Dùng Gemini CLI, Claude Code, và Codex đồng thời trên cùng project.

## Tại sao Dùng Multiple AI Tools?

**Triết lý của Chuck:**
> "Tao sẽ dùng tất cả AI. Tao sẽ dùng AI tốt nhất. Không ai có thể ngăn cản tao."

### Mỗi AI Có Strengths

**Gemini CLI:**
- Fast web research
- Current information (web search built-in)
- Quick iterations

**Claude Code:**
- Deep analysis và planning
- Long-form writing
- Agents cho specialized tasks

**Codex (ChatGPT):**
- High-level analysis
- Strategic thinking
- Different perspective

### Chiến lược của Chuck

**Từ video:**
> "Tao thấy ChatGPT rất tốt ở phân tích things từ high view. Gemini và Claude rất tốt ở work, deep work."

## Setup: Hai Simple Steps

### Step 1: Same Directory

**Tất cả AI tools phải làm việc từ SAME project folder:**

```bash
cd ~/my-project
```

**Mở multiple terminal tabs/windows:**

```bash
# Terminal Tab 1: Claude
cd ~/my-project
claude

# Terminal Tab 2: Gemini
cd ~/my-project
gemini

# Terminal Tab 3: Codex
cd ~/my-project
codex
```

**Result:** Tất cả ba AIs có thể truy cập cùng files!

### Step 2: Sync Context Files

**Đảm bảo những files này có nội dung giống hệt:**
- `claude.md`
- `gemini.md`
- `agents.md` (cho Codex)

**Method của Chuck:**
```bash
# Trong Claude terminal
> Đọc claude.md và sync nó đến gemini.md và agents.md.
   Đảm bảo tất cả ba files có identical project context.
```

**Verification:**
```bash
# Trong project directory
diff claude.md gemini.md
diff claude.md agents.md

# Should show: "Files are identical" hoặc no output
```

## Sức mạnh: Parallel Workflows

**Video Timestamp:** 18:45-19:01

### Demo Live của Chuck

**Command:**
```bash
# Trong Claude terminal
> Viết hook cho video này, authority angle.
   Viết nó đến authority-hook.md

# Trong Gemini terminal
> Viết hook trên discovery angle.
   Viết nó đến discovery-hook.md

# Trong Codex terminal
> Review cả hai hooks và so sánh strengths của chúng
```

**Điều gì xảy ra:**
- Claude: Viết authority-focused hook
- Gemini: Viết discovery-focused hook
- Codex: Phân tích và so sánh cả hai

**Quan sát của Chuck:**
> "Chúng đều dùng cùng context, different roles. Mày có ba AI khác nhau làm việc trên cùng thứ cùng lúc. Không copying và pasting. Chúng có thể thấy work của nhau."

## Real-World Workflow Examples

### Example 1: Content Creation

**Scenario:** Viết technical blog post

```bash
# TERMINAL 1: Claude (long-form writing)
claude
> Viết introduction section cho ZFS storage blog post.
   Lưu đến sections/intro.md

# TERMINAL 2: Gemini (research)
gemini
> Nghiên cứu latest ZFS performance benchmarks.
   Compile findings trong research/zfs-benchmarks.md

# TERMINAL 3: Codex (review)
codex
> Review intro trong sections/intro.md và kiểm tra xem nó align
   với benchmarks research. Suggest improvements.
```

**Result:**
- Claude viết deep content
- Gemini gathers current data
- Codex đảm bảo quality và alignment

### Example 2: Homelab Planning

**Scenario:** Thiết kế homelab setup mới

```bash
# TERMINAL 1: Claude (planning)
claude
> Tạo detailed homelab architecture plan.
   Include network diagram, hardware specs, và budget.
   Lưu đến homelab-plan.md

# TERMINAL 2: Gemini (current prices/availability)
gemini
> Nghiên cứu current pricing cho enterprise NAS systems.
   Kiểm tra availability của hardware trong homelab plan.
   Lưu đến pricing-research.md

# TERMINAL 3: Codex (risk analysis)
codex
> Review homelab-plan.md và identify potential issues:
   - Single points of failure
   - Budget overruns
   - Compatibility problems
   Lưu analysis đến risk-assessment.md
```

### Example 3: Video Script Writing (Process của Chuck)

**Video Timestamp:** 18:41-19:25

**Workflow thực tế của Chuck:**

```bash
# TERMINAL 1: Claude với script-writing output style
claude
> Tiếp tục làm việc trên Segment 3 của AI Terminal script.
   Reference outline tại outline.md

# TERMINAL 2: Gemini với research focus
gemini
> Verify technical accuracy của Claude Code section.
   Cross-check commands và features với official docs.

# TERMINAL 3: Codex cho high-level review
codex
> Đọc current script tại script.md.
   Evaluate narrative flow và retention strategy.
   Có deliver trên hook promise không?
```

**Cách tiếp cận của Chuck:**
> "Tao đang dùng cả ba ngay bây giờ để làm việc trên video script này."

## File-Based Collaboration

### Cách AIs "Thấy" Work của Nhau

**Bí mật:** Mọi thứ chỉ là files!

```
my-project/
├── claude.md              ← Shared context
├── gemini.md              ← Shared context
├── agents.md              ← Shared context
├── research/
│   ├── topic-a.md        ← Gemini viết cái này
│   └── topic-b.md        ← Gemini viết cái này
├── drafts/
│   ├── section-1.md      ← Claude viết cái này
│   └── section-2.md      ← Claude viết cái này
└── reviews/
    └── analysis.md       ← Codex viết cái này
```

**Khi Claude hỏi:**
```bash
> Review research trong research/ folder
```

**Claude thấy:**
- Files Gemini tạo
- Content chính xác của chúng
- Timestamps
- Mọi thứ!

**Không copy/paste. Không export/import. Chỉ files.**

## Specialized Roles Strategy

### Gán Mỗi AI một Role

**Dựa trên strengths từ video:**

#### Claude → Deep Work
```bash
# Long-form writing
# Complex planning
# Agent deployment
# Custom output styles
```

#### Gemini → Research & Speed
```bash
# Web research
# Fast iterations
# Current information
# Quick file creation
```

#### Codex → Analysis & Review
```bash
# High-level strategy
# Quality review
# Competitive analysis
# Meta-thinking
```

### Role Assignment trong Thực tế

**Trong context files của mày:**

**claude.md:**
```markdown
# Project: Technical Blog Series

## Claude's Role
Primary writer cho long-form content.
- Draft tất cả blog posts
- Tạo detailed technical explanations
- Deploy agents cho specialized sections
```

**gemini.md:**
```markdown
# Project: Technical Blog Series

## Gemini's Role
Research và verification specialist.
- Gather current technical information
- Verify accuracy của claims
- Find supporting examples và case studies
```

**agents.md:**
```markdown
# Project: Technical Blog Series

## Codex's Role
Strategic reviewer và analyst.
- Review drafts cho clarity và flow
- Ensure technical accuracy
- Validate chống lại target audience needs
```

## Context Syncing Strategies

### Manual Sync

**Sau major changes:**

```bash
# Update tất cả ba thủ công
nano claude.md
nano gemini.md
nano agents.md
```

**Hoặc dùng một AI để update others:**

```bash
# Trong Claude terminal
> Tao vừa làm major updates đến claude.md (thêm new project phase).
   Update gemini.md và agents.md để match.
```

### Automated Sync (Method của Chuck)

**Dùng Claude agent:**

```bash
# Trong Claude terminal
> @context-sync-agent
   Đọc claude.md và sync đến gemini.md và agents.md.
   Đảm bảo tất cả ba files là identical.
```

**Agent làm:**
1. Đọc `claude.md`
2. Overwrites `gemini.md` với cùng content
3. Overwrites `agents.md` với cùng content
4. Xác nhận sync complete

### Git-Based Sync

**Cho ultimate control:**

```bash
# Sau mỗi session, commit context files
git add *.md
git commit -m "Update project context: research phase complete"

# Tất cả terminals pull latest
git pull
```

**Mỗi AI tự động loads updated context trên lần chạy tiếp theo.**

## Communication Patterns

### Cross-AI References

**Gemini tạo file → Claude dùng nó:**

```bash
# GEMINI TERMINAL
gemini
> Nghiên cứu ZFS performance. Lưu đến zfs-research.md

# CLAUDE TERMINAL (moments sau)
claude
> Đọc zfs-research.md và viết blog intro incorporating
   những performance numbers đó. Lưu đến blog-intro.md
```

### Review Loops

**Claude viết → Codex review → Claude revises:**

```bash
# CLAUDE TERMINAL
claude
> Viết authentication section. Lưu đến auth-section.md

# CODEX TERMINAL
codex
> Review auth-section.md cho security concerns.
   Lưu feedback đến reviews/auth-feedback.md

# CLAUDE TERMINAL
claude
> Đọc reviews/auth-feedback.md và revise auth-section.md
   để address security concerns.
```

### Parallel Tasks

**Tất cả ba làm việc đồng thời:**

```bash
# CLAUDE: Long task
> Tạo comprehensive system architecture document

# GEMINI: Quick research
> Tìm 5 examples của similar architectures trong production

# CODEX: Analysis
> Phân tích current requirements và identify gaps
```

**Tất cả chạy cùng lúc, không chờ!**

## Advanced: Cross-Tool Agents

**Video Timestamp:** 16:06-16:17

### Claude Agent Dùng Gemini

**Demo của Chuck:**

```bash
# Trong Claude terminal
> @gemini-research tìm best AI terminal videos trên YouTube
```

**Điều gì xảy ra:**
1. Claude triển khai `gemini-research` agent
2. Agent chạy: `gemini -p "search YouTube cho top AI terminal videos"`
3. Gemini thực hiện search (tốt hơn ở current info)
4. Trả về results đến Claude agent
5. Claude compile final report

**Sự kinh ngạc của Chuck:**
> "Chúng ta đang có AI dùng AI ngay bây giờ!"

### Tạo Gemini Research Agent

**Trong Claude:**

```bash
> /agents
# Tạo new agent

Name: gemini-research
Description: Dùng Gemini CLI trong headless mode cho research tasks.
              Gemini excels tại web search và current information.

Instructions:
Mày là research specialist dùng Gemini CLI để gather information.

Khi được đưa research task:
1. Format nó như clear search query
2. Chạy: gemini -p "your search query here"
3. Compile và summarize results

Mày có truy cập Bash tool để chạy gemini command.

Tools: Bash, Read, Write
Model: Sonnet
```

**Usage:**
```bash
> @gemini-research What là latest Proxmox features?
> @gemini-research Tìm pricing cho enterprise SSDs
> @gemini-research Nghiên cứu zero-trust network solutions
```

## Quản lý Multiple Terminal Windows

### Terminal Layouts

**Setup của Chuck (visible trong video):**

```
┌─────────────────┬─────────────────┬─────────────────┐
│  CLAUDE         │  GEMINI         │  CODEX          │
│                 │                 │                 │
│  Deep work      │  Research       │  Analysis       │
│  Writing        │  Web search     │  Review         │
│  Agents         │  Fast iteration │  Strategy       │
└─────────────────┴─────────────────┴─────────────────┘
```

**Tools cho multi-terminal:**
- **tmux** (Linux/Mac) - Terminal multiplexer
- **Windows Terminal** (Windows) - Native tabs/panes
- **iTerm2** (Mac) - Split panes
- **Terminator** (Linux) - Multiple terminals

### Quick Switching

**tmux example:**

```bash
# Bắt đầu tmux session cho project
tmux new -s ai-project

# Window 1: Claude
claude

# Tạo new window: Ctrl+B, C
# Window 2: Gemini
gemini

# Tạo new window: Ctrl+B, C
# Window 3: Codex
codex

# Switch windows: Ctrl+B, [0-9]
```

## Workflow Optimization Tips

### 1. Primary AI cho Context Updates

**Chọn MỘT AI để maintain context files:**

```bash
# Claude là "source of truth"
# Chỉ Claude updates context files
# Others sync từ Claude's version
```

**Tại sao:** Prevents conflicts, single source of truth

### 2. Clear File Naming

**Làm nó obvious ai tạo cái gì:**

```
research-gemini-zfs-performance.md    ← Gemini research
draft-claude-section-1.md             ← Claude draft
review-codex-analysis.md              ← Codex review
```

### 3. Session Start Ritual

**Mỗi work session:**

```bash
# 1. Pull latest (nếu dùng git)
git pull

# 2. Kiểm tra context sync
diff claude.md gemini.md

# 3. Khởi chạy tất cả ba AIs
# Terminal 1: claude
# Terminal 2: gemini
# Terminal 3: codex

# 4. Verify mỗi loaded context
# (Kiểm tra context indicators trong mỗi terminal)
```

### 4. Session End Ritual

**Cách tiếp cận của Chuck (dùng agent):**

```bash
# Trong Claude terminal
> @script-session-closer run
```

**Agent làm:**
- Summarizes session
- Updates tất cả context files
- Syncs gemini.md và agents.md
- Commits đến git

**Manual version:**

```bash
# 1. Update context files
> Update claude.md với progress hôm nay

# 2. Sync đến other files
> Copy claude.md content đến gemini.md và agents.md

# 3. Commit
git add .
git commit -m "Session end: [what mày accomplished]"
git push
```

## Triết lý "It's Just a Folder"

**Key insight của Chuck:**

> "Mọi thứ tao đang làm, nói chuyện với ba AI khác nhau trên một project... Nó không tied trong browser. Nó không tied trong GUI. Nó chỉ là folder này ngay đây trên hard drive của tao."

### Điều này Enables

```
my-project/     ← Đây là TẤT CẢ mày cần
├── claude.md
├── gemini.md
├── agents.md
└── all-your-work-files/
```

**Mày có thể:**
- Copy đến computer khác
- Backup dễ dàng
- Version control với git
- Switch AI tools bất cứ lúc nào
- Chia sẻ với team (chỉ folder!)

**Sự tự do của Chuck:**

> "Tao có thể copy và paste folder đó bất cứ đâu. Tất cả work, tất cả decisions, tất cả context - nó là của tao. Tao sở hữu context của tao."

## Khắc phục sự cố

### AIs Có vẻ Out of Sync

```bash
# Kiểm tra context files
diff claude.md gemini.md

# Re-sync
claude
> Sync tất cả context files từ claude.md
```

### File Conflicts

**Hai AIs editing cùng file:**

```bash
# Solution: Gán clear responsibilities
# Claude: sections/1.md
# Gemini: research/1.md
# Không bao giờ overlap!
```

### Context Drift

**Theo thời gian, conversations diverge:**

```bash
# Regular re-sync
# Mỗi 30-60 phút:
> @context-sync-agent run
```

## Summary: Multi-Tool Benefits

| Single AI | Multi-Tool Workflow |
|-----------|---------------------|
| Một perspective | Ba perspectives |
| Một strength | Combined strengths |
| Sequential tasks | Parallel tasks |
| Một context window | Ba independent contexts |
| Vendor lock-in risk | Tool agnostic |

**Quyết định của Chuck:**

> "Tao sẽ dùng AI tốt nhất. Không ai có thể ngăn cản tao. Nếu AI mới greater better nào ra, tao sẵn sàng cho nó."

## Tiếp theo là gì?

**Làm chủ multi-tool workflow:**

➡️ [Productivity Workflows](11-productivity-workflows.md) - Real examples dùng multiple AIs

➡️ [AI Agents Deep Dive](09-agents.md) - Advanced agent strategies

---

[← Quay lại Context Files](07-context-files.md) | [Tiếp theo: AI Agents →](09-agents.md)