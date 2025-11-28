# Hướng dẫn Claude Code Đầy đủ

**Video Timestamp:** 8:44-14:26

Claude Code là công cụ AI terminal của Anthropic - công cụ hàng ngày của Chuck. Nó là công cụ mạnh nhất được đề cập trong video.

## Tại sao Claude Code?

Endorsement của Chuck:
> "Tao dùng Claude Code cho gần như mọi thứ. Nó là default của tao. Và đây là lý do: nó có feature thay đổi cuộc chơi - **agents**."

> "Nếu mày chỉ có thể trả tiền cho một AI subscription, Claude Pro là cái tao sẽ chọn, đặc biệt cho feature cuối cùng tao sắp chỉ ra." *(Output Styles)*

**Tốt nhất cho:**
- Professional workflows với AI agents
- Complex multi-step tasks
- Custom personalities (Output Styles)
- Planning mode cho strategic thinking
- Maximum control và customization

**Yêu cầu:** Claude Pro subscription ($20/tháng)

## Cài đặt

### Tất cả Platforms (npm)

```bash
# Cài đặt global
npm install -g @anthropic-ai/claude-code

# Hoặc với sudo nếu cần
sudo npm install -g @anthropic-ai/claude-code
```

### Verify Cài đặt

```bash
claude --version
```

## Lần chạy Đầu tiên & Thiết lập

### Khởi chạy Cơ bản

```bash
# Điều hướng đến project của mày
cd coffee-project

# Khởi chạy Claude Code
claude
```

### Login Ban đầu

Lần đầu tiên:
1. Được nhắc login với tài khoản Claude Pro
2. Mở browser để xác thực
3. Chọn directory permissions (phê duyệt truy cập current folder)

**Permission prompt:**
```
📁 Cho phép Claude Code truy cập /Users/you/coffee-project? (y/n)
```

**Quan điểm của Chuck:** "Nó là bảo mật trước tiên. Nó hỏi permission cho hầu hết mọi thứ, và điều đó tốt."

## Tổng quan Giao diện

### TUI (Terminal User Interface)

```
┌─ Claude Code ──────────────────────────────────────┐
│ 💭 Thinking...                                      │
│                                                     │
│ [Câu hỏi của mày ở đây]                        │
│                                                     │
│ [Response của Claude]                             │
│                                                     │
│ Context: 42% used (85,234 tokens)          │
│ Mode: Normal | Thinking: ON                        │
└─────────────────────────────────────────────────────┘
```

### Toggle Thinking Mode

Nhấn **TAB** để bật/tắt thinking:

```
Thinking: OFF  →  Nhấn TAB  →  Thinking: ON
```

**Thinking mode:** Xem process suy luận nội bộ của Claude

## Context Files: claude.md

### Khởi tạo Context

```bash
> /init
```

Cùng concept như Gemini, nhưng tạo `claude.md`:

```markdown
# Project: Coffee Project

## Overview
[Claude phân tích directory của mày và tạo context]

## Files
- best-coffee-method.md
- coffee-blog-outline.md

## Goals
[Project objectives]
```

### Xem Context Usage

```bash
> /context
```

**Hiển thị breakdown chi tiết:**
```
Context Usage: 85,234 tokens (42% used)

Loaded Files:
- claude.md (1,234 tokens)
- best-coffee-method.md (2,456 tokens)
- coffee-blog-outline.md (890 tokens)

Conversation: 80,654 tokens
```

**Quan sát của Chuck:**
> "Với Claude, điều đó không thực sự quan trọng quá nhiều miễn là mày biết cách dùng feature mạnh nhất của họ: **agents**."

## Agents: Game-Changer

### Agents là gì?

**Từ video:**
> "Claude như, 'Cool, tao có task, nhưng nó không phải cho tao. Tao sẽ delegate task này cho một trong nhân viên hoặc đồng nghiệp của tao.' Đây là một Claude instance khác... Anh ta đang cho nó bộ instructions tươi và hiểu này: một **fresh context window**."

**Key concept:** Agents là các Claude instance riêng biệt với:
- Fresh context window (200K tokens mỗi cái)
- Specialized instructions
- Custom tool access
- Independent memory

### Tạo Agent Đầu tiên của Mày

**Video Timestamp:** 10:41-11:20

```bash
> /agents
```

**Menu xuất hiện:**
```
┌─ Agent Management ─────────────────────────┐
│ 1. Create new agent                        │
│ 2. View agents                             │
│ 3. Edit agent                              │
│ 4. Delete agent                            │
└─────────────────────────────────────────────┘
```

#### Tạo Agent từng bước

**Từ demo của Chuck:**

1. **Chọn "Create new agent"**

2. **Chọn scope:**
   ```
   📁 Project-specific agent (coffee-project)
   🌍 Personal agent (available everywhere)
   ```
   Chuck chọn: "Just this project"

3. **Mô tả agent:**
   ```
   Name: homelab-guru
   Description: Expert trong homelab hardware, networking, và infrastructure
   ```

4. **Cấu hình:**
   ```
   Tools: [x] All tools
   Model: Sonnet 4.5
   Color: Auto
   ```

5. **Nhấn Enter để lưu, ESC để exit**

**Agent được tạo!**

### Sử dụng Agents

#### Triển khai một Agent

**Example của Chuck:**

```bash
> @homelab-guru
  Nghiên cứu document và tạo buying guide.
  Đảm bảo mày reference research chúng ta làm trong @nas-rec-folder
```

**Điều gì xảy ra:**
1. Claude chính thấy task
2. Delegate đến `homelab-guru` agent
3. Agent được fresh 200K context window
4. Agent làm việc độc lập
5. Trả về kết quả đến Claude chính

**Visual trong terminal:**
```
┌─ Agent: homelab-guru ──────────────────────┐
│ 🔍 Nghiên cứu NAS solutions...             │
│ 📊 Context: 15% used (30,000 tokens)       │
└─────────────────────────────────────────────┘
```

#### Reference Files với @

```bash
# Reference specific files
> @homelab-guru tạo summary của @nas-comparison.md

# Reference folders
> @homelab-guru review tất cả documents trong @research-folder
```

### Multiple Agents Đồng thời

**Video Timestamp:** 13:50-14:04

**Demo đáng kinh ngạc của Chuck:**

```bash
> Triển khai @homelab-guru để nghiên cứu proxmox servers tốt nhất.
  Cùng lúc đó, dùng general agent để tìm pizza place tốt nhất ở Dallas.
  Và một @homelab-guru khác để tìm graphics card tốt nhất cho gaming.
  Đặt tất cả lại trong comprehensive report.
```

**Điều gì xảy ra:**
- Agent 1: Proxmox server research
- Agent 2: Pizza recommendations
- Agent 3: Graphics card research
- Claude chính: Compile tất cả kết quả

**Phản ứng của Chuck:**
> "Tao cảm thấy mạnh mẽ ngay bây giờ. Điều này vui quá!"

### Pre-Built Agents từ Video

#### 1. Homelab Guru
```bash
Agent: homelab-guru
Purpose: Network equipment, server recommendations, homelab setup
Tools: All
Model: Sonnet
```

#### 2. Brutal Critic
```bash
Agent: brutal-critic
Purpose: Ruthlessly review scripts/outlines chống lại NetworkChuck framework
Personality: Intentionally harsh, framework-focused
Tools: Read, Web Search
Model: Sonnet
```

**Use case của Chuck:**
> "Tao muốn nó super mean. Để khi NÓ nói tao làm tốt, tao biết nó thực sự tốt."

#### 3. Gemini Research Agent
```bash
Agent: gemini-research
Purpose: Dùng Gemini CLI trong headless mode cho research tasks
Tools: Bash (để chạy gemini -p)
Model: Sonnet
```

**Example của Chuck:**
```bash
> @gemini-research tìm AI terminal videos tốt nhất trên YouTube
```

Agent chạy:
```bash
gemini -p "tìm top 10 AI terminal videos trên YouTube"
```

## Output Styles: Custom Personalities

**Video Timestamp:** 16:31-17:27

**Khám phá của Chuck:**
> "Tao xấu hổ khi nói tao vừa tìm ra cái này trong khi làm video này."

### Output Styles là gì?

**System prompts** điều khiển:
- Cách Claude trả lời
- Persona và tone
- Domain expertise
- Task-specific behaviors

### Xem Output Styles

```bash
> /output-style
```

**Default styles:**
```
📋 Available Output Styles:
- code (default) - Optimized cho software development
- concise - Brief, to-the-point responses
- detailed - Comprehensive explanations
```

### Tạo Custom Output Style

**Demo của Chuck:**

```bash
> /output-style new
```

**Prompt:**
```
Name: homelab-expert
Description: Mày là homelab expert được thiết kế để giúp tao tạo
best homelab possible.
```

**Example phức tạp hơn (script-writing style thực tế của Chuck):**

```bash
Name: networkchuck-scriptwriter
Description:
Mày là AI assistant chuyên viết NetworkChuck YouTube scripts.
Mày hiểu:
- Hook psychology và CTR optimization
- Viewer retention patterns
- NetworkChuck's energetic, coffee-fueled voice
- Educational entertainment balance
- "You" voice (viewer as hero)

Luôn:
- Giữ lines ngắn và punchy
- Thêm coffee transitions giữa segments
- Dùng "Let's go!" tại key moments
- Giải thích topics phức tạp đơn giản
- Thêm pattern breaks mỗi 20-40 giây
```

### Kích hoạt Output Style

```bash
> /output-style

# Chọn từ list, hoặc nó kích hoạt trên lần chạy tiếp theo
```

**Verify:**
```
Current Output Style: networkchuck-scriptwriter ✓
```

**Sử dụng thực tế của Chuck:**
> "Tao đang dùng output style ngay bây giờ để làm video này. Đây là nó trông như thế nào. Nó khá intense, optimized cho cái tao làm."

### Scope: Project vs Global

**Project-specific:**
- Sống trong `.claude/output-styles/` trong current project
- Chỉ available trong project này

**Global:**
- Sống trong `~/.config/claude/output-styles/`
- Available trong tất cả projects

## Planning Mode

**Video Timestamp:** 17:39-17:54

### Kích hoạt Planning Mode

Nhấn **Shift+Tab** để toggle:

```
Mode: Normal  →  Shift+Tab  →  Mode: Planning
```

### Nó hoạt động như thế nào

1. Mày đưa task cho Claude
2. Claude tạo detailed plan
3. Mày review và phê duyệt
4. Claude thực thi plan

**Example:**

```bash
> Refactor authentication system để dùng JWT tokens
```

**Planning mode response:**
```
📋 Plan:
1. Review current authentication implementation
2. Install jsonwebtoken package
3. Create JWT utility functions
4. Update login endpoint
5. Add token verification middleware
6. Update protected routes
7. Add token refresh logic
8. Update tests

Phê duyệt plan này? (y/n/edit)
```

Gõ `y` để thực thi, hoặc `edit` để sửa.

**Quan điểm của Chuck:**
> "Điều này sẽ đặt một plan được suy nghĩ rất kỹ lại, và sau đó mày phê duyệt nó. Và sau đó nó chỉ làm nó."

## Features Nâng cao

### Resume Previous Session

**Từ video:** "Vâng, mày có thể làm cái đó."

```bash
# Resume session cuối cùng
claude -r

# Chọn từ recent sessions
```

### Dangerous Mode (Skip Permissions)

**Video Timestamp:** 14:36-14:52

```bash
# Khởi chạy không có permission prompts
claude --dangerously-skip-permissions
```

Cảnh báo: Claude sẽ thực thi actions mà không hỏi

**Quan điểm của Chuck:**
> "Đây là Claude không có training wheels."

**Dùng khi:**
- Mày tin tưởng instructions của mày hoàn toàn
- Mày muốn maximum speed
- Mày đang làm repetitive tasks

### Kết hợp Flags

```bash
# Resume session trước + dangerous mode
claude -r --dangerously-skip-permissions
```

## Real-World Workflows

### 1. Outline Review với Brutal Critic

**Video Timestamp:** 12:56-13:05

```bash
# Làm việc trên YouTube script
> @brutal-critic review outline của tao tại @outline.md
```

**Agent khởi chạy với fresh context:**
- Đọc outline.md
- Áp dụng NetworkChuck framework
- Trả về ruthless critique

**Kết quả của Chuck:** "8.2/10 - Không tệ!"

### 2. Cross-Tool Research

**Video Timestamp:** 16:06-16:17

```bash
> Tìm AI terminal videos tốt nhất trên YouTube.
  Dùng @gemini-research agent.
```

**Điều gì xảy ra:**
- Claude triển khai gemini-research agent
- Agent chạy: `gemini -p "search YouTube cho AI terminal videos"`
- Gemini trả về top 10 results
- Claude compile vào report

**Quan sát của Chuck:**
> "Chúng ta đang có AI dùng AI ngay bây giờ!"

### 3. Context-Protected Reviews

**Video Timestamp:** 12:27-12:35

**Vấn đề:** Conversation chính của mày 85K tokens sâu với outline

**Giải pháp:** Triển khai fresh agent với 200K tokens

```bash
> @brutal-critic review work hiện tại của tao
```

**Tại sao điều này quan trọng:**
- Context chính: 85K tokens (cluttered với iterations)
- Agent context: 0K tokens (fresh eyes)
- Không bias từ conversation trước

**Quan điểm của Chuck:**
> "Tao muốn một tách cà phê tươi. Sẵn sàng đi. Fresh eyes."

## Mẹo từ Chuck

### 1. Bảo vệ Context của Mày

> "Tao dùng agents mọi lúc để **bảo vệ context của tao** và tránh bất kỳ loại weird bias nào."

**Chiến lược:** Delegate reviews, research, và analysis cho agents

### 2. Một Project = Một Claude Session

```bash
# Terminal Tab 1: Video script
cd ~/video-project
claude

# Terminal Tab 2: Homelab docs
cd ~/homelab-project
claude
```

### 3. Đặt tên Agents theo Function

**Tên tốt:**
- `homelab-guru`
- `brutal-critic`
- `research-assistant`
- `code-reviewer`

**Tên xấu:**
- `agent1`
- `test`
- `bob`

### 4. Đưa Agents Specific Instructions

**Mơ hồ:**
```
Mày là helpful.
```

**Cụ thể:**
```
Mày là homelab expert chuyên về enterprise NAS solutions.
Khi làm recommendations:
- Cân nhắc budget constraints
- Giải thích technical trade-offs
- Cung cấp specific product recommendations
- Include pricing và availability
```

## Agent Management

### List Tất cả Agents

```bash
> /agents
```

**Xem:**
- Project agents (local đến current directory)
- Personal agents (available ở mọi nơi)

### Edit một Agent

```bash
> /agents
# Chọn "Edit agent"
# Chọn agent
# Sửa instructions
```

### Delete một Agent

```bash
> /agents
# Chọn "Delete agent"
# Xác nhận
```

## Hidden Features

### Paste Images

**Từ video:**
> "Mày có thể paste images vào terminal của mày."

```bash
# Trong Claude Code session
> Phân tích screenshot này
[Paste image]
```

### Custom Hooks

**Từ mention trong video:**
> "Họ có prompts, hooks, custom status lines."

Nâng cao: Tạo event-triggered actions

### Status Line Customization

Tùy chỉnh terminal status bar với project info

## Khắc phục sự cố

### "Not authorized" Error

Đảm bảo mày có:
1. Active Claude Pro subscription
2. Đã đăng nhập đúng: `claude auth login`

### Agent Không Hoạt động

```bash
# Verify agent tồn tại
> /agents

# Kiểm tra agent configuration
> /agents
# Chọn "View agents"
```

### Context Không Load

```bash
# Tạo lại context file
> /init
```

### Permission Denied trên Files

```bash
# Khởi chạy lại với directory phê duyệt
claude
# Phê duyệt file access khi được nhắc
```

## Giá cả

**Yêu cầu:** Claude Pro ($20/tháng)

**Bao gồm:**
- Truy cập Claude Code terminal tool
- Dùng existing web subscription của mày
- Không cần API key riêng
- Unlimited-ish usage (fair use policy)

**Đề xuất của Chuck:**
> "Nếu mày đã trả tiền cho Claude Pro, bắt đầu từ $20 bucks một tháng, mày có thể đăng nhập vào terminal với subscription này và dùng nó. Vâng, mày không cần dùng API keys."

## So sánh: Gemini vs Claude

| Feature | Gemini CLI | Claude Code |
|---------|------------|-------------|
| **Giá** | Miễn phí | $20/tháng |
| **Agents** | Không | Có |
| **Output Styles** | Không | Có |
| **Planning Mode** | Không | Có |
| **Context Window** | 200K | 200K (per agent!) |
| **Tốt nhất cho** | Bắt đầu | Công việc chuyên nghiệp |

**Quyết định của Chuck:**
> "Gemini thậm chí không gần bằng tốt nhất."

## Tiếp theo là gì?

**Làm chủ những features này:**
1. Tạo 2-3 specialized agents cho công việc của mày
2. Thiết kế custom output style
3. Thực hành delegating tasks đến agents
4. Thử planning mode trên complex tasks

**Sau đó explore:**
➡️ [Multi-Tool Workflow](08-multi-tool-workflow.md) - Dùng Claude + Gemini + Codex đồng thời

---

[← Quay lại Gemini CLI](03-gemini-cli.md) | [Tiếp theo: Codex →](05-codex.md)