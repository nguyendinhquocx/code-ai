# Hướng dẫn opencode Đầy đủ

**Video Timestamp:** 26:32-30:00

opencode là công cụ AI terminal **open-source** hỗ trợ multiple providers và local models.

## Tại sao opencode?

**Quan điểm của Chuck:**
> "Có một tool thực sự open-source. Mày có thể dùng bất kỳ model nào mày muốn với open-source alternative này, và nó có thể là tool tốt nhất trong tất cả. Tao vẫn đang test nó."

**Key advantages:**
- **Open source** - Phát triển community-driven
- **Multiple providers** - Claude, OpenAI, Grok, Gemini, local models
- **Grok free tier** - Free usage với X/Twitter integration
- **Local models** - Chạy Ollama models hoàn toàn offline
- **Claude Pro login** - Dùng existing subscription (giống Claude Code)
- **Session sharing** - Chia sẻ AI sessions của mày với người khác
- **Timeline feature** - Time-travel qua conversations

**Tốt nhất cho:**
- Thử nghiệm với different models
- Local/offline AI usage
- Cost optimization (mix free + paid)
- Open-source preference

## Cài đặt

### Quick Install (Được khuyên dùng)

```bash
curl -fsSL https://opencode.sh/install.sh | sh
```

**Reload shell của mày:**
```bash
source ~/.bashrc
# hoặc cho zsh:
source ~/.zshrc
```

### Manual Install (npm)

```bash
npm install -g @opencodenet/cli
```

### Verify Cài đặt

```bash
opencode --version
```

## Lần chạy Đầu tiên

### Khởi chạy Cơ bản

```bash
cd your-project
opencode
```

**First time experience:**
- Khởi chạy với **Grok Fast model** theo mặc định (MIỄN PHÍ!)
- TUI interface đẹp
- Đọc current directory tự động

### Interface

```
┌─ opencode ──────────────────────────────────────────┐
│                                                      │
│  🚀 Welcome to opencode                              │
│  Model: grok-fast-1                                  │
│                                                      │
│  > Prompt của mày ở đây                          │
│                                                      │
└──────────────────────────────────────────────────────┘
```

**Phản ứng của Chuck:**
> "Nice TUI, terminal user interface."

## Free Tier: Grok Integration

### Grok là gì?

**Từ video:**
- X/Twitter's AI model
- Free tier available qua opencode partnership
- Fast inference
- Tốt cho general tasks

### Dùng Grok (Default)

**Chỉ khởi chạy opencode:**
```bash
opencode
```

**Đã trên Grok Fast theo mặc định!**

```bash
> Giúp tao plan homelab project
```

**Không cần API key!** Partnership với X cung cấp free access.

**Quan điểm của Chuck:**
> "Họ có deal với Grok AI cho phép mày dùng cái này miễn phí một thời gian."

## Model Management

### Xem Available Models

```bash
# Trong opencode session
> /model
```

**Hiển thị:**
```
Available Models:
- grok-fast-1 (FREE - current)
- claude-sonnet-4
- claude-opus-4
- gpt-4
- gemini-2.5-pro
- llama-3.2 (local qua Ollama)
```

### Switch Models

**Video Timestamp:** 27:57-28:21

```bash
> /model
# Chọn từ list

# Hoặc specify trực tiếp
> /model claude-sonnet-4
> /model grok-fast-1
> /model llama-3.2
```

**Chuck switching live:**
```bash
> /model claude-sonnet-4
# "Cool, bước tiếp theo của chúng ta là gì?"

> /model grok-fast-1
# "Trong khi nó làm cái đó, tao có thể làm /sessions"
```

### Model Switching Mid-Conversation

**Power move:**

```bash
# Bắt đầu với Claude cho deep thinking
> /model claude-sonnet-4
> Tạo comprehensive system architecture

# Switch đến Grok cho quick follow-up
> /model grok-fast-1
> Summarize đó trong bullet points
```

**Quan sát của Chuck:**
> "Tao có thể switch models midway."

## Provider Authentication

### Login với Claude Pro

**Video Timestamp:** 28:35-28:46

```bash
opencode auth login
```

**Chọn:** "Anthropic"

**Browser opens:**
1. Login với tài khoản Claude Pro
2. Copy authorization code
3. Paste trong terminal

**Bây giờ mày có truy cập đến:**
- Claude Sonnet 4.5
- Claude Opus 4
- Dùng existing subscription của mày!

**Endorsement của Chuck:**
> "Việc mày có thể đăng nhập và dùng Claude Pro subscription của mày... đó là next level."

### Other Providers

**OpenAI (ChatGPT):**
```bash
opencode auth login
# Chọn: OpenAI
# Nhập API key
```

**Google (Gemini):**
```bash
opencode auth login
# Chọn: Google
# Xác thực với tài khoản Google
```

### Check Auth Status

```bash
opencode auth whoami
```

## Local Models với Ollama

### Điều kiện tiên quyết

**Cài đặt Ollama trước tiên:**
```bash
# macOS
brew install ollama

# Linux
curl -fsSL https://ollama.com/install.sh | sh

# Windows (WSL)
curl -fsSL https://ollama.com/install.sh | sh
```

### Pull một Model

**Chuck dùng Llama 3.2:**

```bash
ollama pull llama-3.2
```

**Kiểm tra available models:**
```bash
ollama list
```

### Cấu hình opencode cho Local Models

**Video Timestamp:** 27:40-28:01

**Edit config:**
```bash
nano ~/.config/opencode/opencode.jsonc
```

**Thêm model configuration:**
```jsonc
{
  "model": "llama-3.2",
  "provider": "ollama"
}
```

**Lưu và exit**

### Dùng Local Model

```bash
opencode
# Loads với llama-3.2

# Hoặc switch trong session
> /model llama-3.2
```

**Chuck thử nó:**
> "Hey cool, Llama hoạt động!"

**Benefits:**
- Hoàn toàn offline
- Không API costs
- Privacy (data không bao giờ rời máy)
- Tuyệt cho sensitive work

## Features Nâng cao

### Session Sharing

**Video Timestamp:** 29:19-29:33

**Chia sẻ conversation của mày:**

```bash
> /share
```

**Trả về:** URL copied đến clipboard

**Paste trong browser:**
```
https://opencode.net/session/abc123...
```

**Sự ngạc nhiên của Chuck:**
> "Tao có thể chia sẻ session của mình với người khác. Đó khá neat."

**Live demo feature:**
> "Đợi, có phải live không? Ô, mày có thể chia sẻ session của mình với người khác!"

### Session Timeline

**Video Timestamp:** 29:33-29:44

**Time-travel qua conversation:**

```bash
> /timeline
```

**Hiển thị:**
```
Session Timeline:
├─ 10:23 - Bắt đầu session
├─ 10:25 - Hỏi về homelab setup
├─ 10:28 - Tạo plan document
├─ 10:30 - Switch đến Llama 3.2
└─ 10:32 - Tạo cost analysis
```

**Chọn bất kỳ điểm để restore:**

```bash
# Click trên timestamp
# Session rewinds đến điểm đó
```

**Phản ứng của Chuck:**
> "Chúng ta có thể jump back in time và restore. Tao muốn cái đó trong real life!"

### Session Management

**Xem tất cả sessions:**

```bash
> /sessions
```

**Hiển thị:**
```
Recent Sessions:
1. homelab-planning (active)
2. blog-writing (1 giờ trước)
3. research-project (hôm qua)
```

**Switch sessions:**
```bash
# Chọn từ list
# Hoặc bắt đầu mới:
> /sessions
# Chọn "New session"
```

### Headless Mode

**Chạy opencode không có TUI:**

```bash
opencode --headless "Viết blog intro về ZFS"
```

**Output đi thẳng đến stdout**

### Export Session

**Từ video mention:**

```bash
opencode --export-session session-id
```

**Xuất như JSON data**

## Context Files: agents.md

### Khởi tạo Context

```bash
> /init
```

**Tạo:** `agents.md` (không agent.md hay opencode.md)

**Tại sao "agents.md"?**
- opencode theo proposed standard
- Claude Code's Codex dùng agents.md
- Cố gắng standardize qua tools

### Sync với Other Tools

**Khi dùng opencode + Claude + Gemini:**

```bash
# Dùng Claude để sync cả ba
claude
> Sync claude.md content đến gemini.md và agents.md
```

**Workflow của Chuck:**
> "Họ đang cố gắng làm nó thành standard. Họ đều giống nhau."

## Feature Showcase (từ video)

### 1. Agents Support

**Video Timestamp:** 29:45-29:51

```bash
opencode agents create my-agent
```

**Giống như Claude Code agents**

### 2. Headless Server

```bash
opencode server start
```

**Sau đó attach từ terminal khác:**
```bash
opencode server attach
```

### 3. Session Export

```bash
opencode export --format json > session.json
```

### 4. Rich Formatting

- Markdown rendering
- Code syntax highlighting
- Table support

## Real-World Usage

### Cost Optimization Strategy

**Mix free và paid models:**

```bash
# Free: Grok cho research
> /model grok-fast-1
> Nghiên cứu top 5 NAS options

# Paid: Claude cho writing
> /model claude-sonnet-4
> Viết comprehensive buying guide dựa trên research

# Free: Local cho experimentation
> /model llama-3.2
> Tạo 5 alternative titles
```

### Privacy-First Workflow

**Sensitive work dùng local models:**

```bash
# Switch đến local
> /model llama-3.2

# Làm việc trên sensitive documents
> Review confidential file này...

# Không data gửi đến cloud ✓
```

### Model Comparison

**Lấy multiple perspectives:**

```bash
# Hỏi Claude
> /model claude-sonnet-4
> Homelab storage solution tốt nhất là gì?

# Lưu answer của Claude, sau đó hỏi Grok
> /model grok-fast-1
> Homelab storage solution tốt nhất là gì?

# So sánh responses
```

## Sử dụng Thực tế của Chuck

**Từ video:**

```bash
cd ~/Projects/531-ai-terminal
opencode

# Nó loads agents.md tự động
> Chúng ta đang ở đâu trong project?
```

**Sau đó switch models:**
```bash
> /model claude-sonnet-4
> Tiếp tục làm việc trên script
```

**Tất cả trong một session, cùng context!**

## Cấu hình

### Config File Location

```bash
~/.config/opencode/opencode.jsonc
```

### Example Configuration

```jsonc
{
  "model": "claude-sonnet-4",
  "provider": "anthropic",
  "theme": "dark",
  "thinking": true,
  "temperature": 0.7,
  "maxTokens": 4096
}
```

### Edit Config

```bash
nano ~/.config/opencode/opencode.jsonc
```

## Command Reference

### In-Session Commands

```bash
/model              # Thay đổi model
/share              # Chia sẻ session
/timeline           # Xem session timeline
/sessions           # Quản lý sessions
/init               # Tạo agents.md
/help               # Hiển thị help
exit                # Exit opencode
```

### CLI Commands

```bash
opencode                    # Khởi chạy
opencode auth login         # Xác thực provider
opencode auth whoami        # Kiểm tra auth status
opencode --version          # Version info
opencode --headless "..."   # Headless mode
opencode --help             # Help
```

## Khắc phục sự cố

### "Command not found: opencode"

```bash
# Reload shell
source ~/.bashrc
source ~/.zshrc

# Hoặc reinstall
curl -fsSL https://opencode.sh/install.sh | sh
```

### Local Model Không Hoạt động

```bash
# Verify Ollama đang chạy
ollama list

# Pull model nếu thiếu
ollama pull llama-3.2

# Kiểm tra config
cat ~/.config/opencode/opencode.jsonc
```

### Authentication Issues

```bash
# Re-authenticate
opencode auth login

# Kiểm tra status
opencode auth whoami

# Clear auth và retry
rm -rf ~/.config/opencode/auth
opencode auth login
```

### Context File Không Load

```bash
# Verify file tồn tại
ls agents.md

# Tạo lại
> /init
```

## So sánh: opencode vs Others

| Feature | opencode | Claude Code | Gemini CLI |
|---------|----------|-------------|------------|
| **Chi phí** | Miễn phí (Grok) | $20/tháng | Miễn phí |
| **Local Models** | Có | Không | Không |
| **Multiple Providers** | Có | Không | Không |
| **Session Sharing** | Có | Không | Không |
| **Timeline Feature** | Có | Không | Không |
| **Agents** | Có | Có | Không |
| **Open Source** | Có | Không | Không |

**Quyết định của Chuck:**
> "Nó có thể là tool tốt nhất trong tất cả. Tao vẫn đang test nó."

## Khi nào Dùng opencode

**Chọn opencode cho:**
- Thử nghiệm với different models
- Cost optimization (mix free/paid)
- Privacy needs (local models)
- Open-source preference
- Model comparison workflows
- Session sharing needs

**Chọn Claude Code thay thế cho:**
- Production workflows (more mature)
- Complex agent setups
- Output styles
- Planning mode

**Chọn Gemini CLI thay thế cho:**
- Setup đơn giản nhất
- Pure Google ecosystem
- Bắt đầu (easiest learning curve)

## Các Nhà phát triển

**Từ mention của Chuck:**

> "Điều vui là tao đã theo dõi những guys này trên Twitter trước khi họ bắt đầu làm code này. Guy Dax này, những guys này đang killing it."

**GitHub:** [stackblitz-labs/opencode](https://github.com/stackblitz-labs/opencode)

**Community:** Phát triển tích cực, maintainers responsive

## Future Potential

**Tại sao Chuck hào hứng:**

1. **Open source** → Community contributions
2. **Multi-provider** → Dùng model tốt nhất cho mỗi task
3. **Local models** → Privacy + cost control
4. **Standards push** → agents.md adoption
5. **Feature velocity** → Rapid development

**Chiến lược của Chuck:**

> "Nếu AI mới, greater, better nào ra, tao sẵn sàng cho nó."

opencode cho phép điều này với provider flexibility.

## Tiếp theo là gì?

**Bắt đầu với opencode:**
1. Cài đặt nó (2 phút)
2. Thử Grok free tier (không cần auth)
3. Thử nghiệm với model switching
4. Thử local models nếu privacy-conscious
5. Dùng cho cost-optimized workflows

**Sau đó explore:**
➡️ [Multi-Tool Workflow](08-multi-tool-workflow.md) - Dùng opencode với Claude/Gemini

➡️ [Command Cheat Sheet](14-cheat-sheet.md) - Quick opencode commands

---

[← Quay lại Codex](05-codex.md) | [Tiếp theo: Context Files →](07-context-files.md)