# Bảng Cheat Lệnh

Tham khảo nhanh cho tất cả AI terminal tools được đề cập trong video.

## Lệnh Cài đặt

### Gemini CLI
```bash
# Linux/macOS/WSL (npm)
npm install -g @google/generative-ai-cli

# Với sudo (nếu permission error)
sudo npm install -g @google/generative-ai-cli

# macOS (Homebrew)
brew install gemini-cli
```

### Claude Code
```bash
# Tất cả platforms (npm)
npm install -g @anthropic-ai/claude-code

# Với sudo
sudo npm install -g @anthropic-ai/claude-code
```

### Codex (ChatGPT CLI)
```bash
# Lệnh cài đặt
npm install -g @openai/codex-cli

# Hoặc theo OpenAI documentation
```

### opencode
```bash
# Installation (một lệnh - từ video)
curl -fsSL https://opencode.sh/install.sh | sh

# Reload shell
source ~/.bashrc
# hoặc
source ~/.zshrc
```

## Lệnh Khởi chạy

### Khởi chạy Cơ bản
```bash
gemini              # Khởi chạy Gemini CLI
claude              # Khởi chạy Claude Code
codex               # Khởi chạy Codex
opencode            # Khởi chạy opencode
```

### Khởi chạy với Flags
```bash
# Claude Code
claude -r                               # Resume session trước
claude --dangerously-skip-permissions   # Bỏ qua safety prompts
claude -r --dangerously-skip-permissions  # Cả hai flags kết hợp

# Gemini CLI
gemini -p "prompt của mày ở đây"           # Headless mode (một lần)

# opencode
opencode --model claude-sonnet-4       # Specify model
```

## Lệnh Trong Session

### Gemini CLI
```bash
/init               # Tạo gemini.md context file
/tools              # Hiển thị tools có sẵn
/help               # Hiển thị help
exit                # Exit Gemini (hoặc Ctrl+C)
```

### Claude Code
```bash
/init               # Tạo claude.md context file
/context            # Hiển thị context usage details
/agents             # Agent management menu
/output-style       # Output style management
exit                # Exit Claude (hoặc Ctrl+C)
```

**Keyboard shortcuts:**
```bash
Tab                 # Toggle thinking mode
Shift+Tab           # Toggle planning mode
Ctrl+C              # Interrupt/exit
Ctrl+O              # Xem agent details (khi agent đang chạy)
```

### opencode
```bash
/model              # Thay đổi AI model
/share              # Chia sẻ session hiện tại
/timeline           # Xem session timeline
/sessions           # Xem tất cả sessions
exit                # Exit opencode
```

## Thiết lập Project

### Tạo Project Mới
```bash
# Workflow tiêu chuẩn
mkdir my-project
cd my-project

# Khởi chạy AI và tạo context
gemini
> /init

# Verify context file được tạo
ls *.md
```

### Thiết lập Multi-Tool Project
```bash
# Tạo project
mkdir my-project
cd my-project

# Khởi chạy tất cả ba context files
# Terminal 1
gemini
> /init

# Terminal 2
claude
> /init

# Terminal 3
codex
> /init

# Sync context files
claude
> Đọc claude.md và làm gemini.md và agents.md giống hệt
```

## Quản lý Context File

### Tạo Context Files
```bash
# Để AI tạo nó
> /init

# Tạo thủ công
nano gemini.md      # Edit thủ công
nano claude.md
nano agents.md
```

### Cập nhật Context
```bash
# Hỏi AI cập nhật
> Update gemini.md với: [updates của mày]

# Edit thủ công
nano gemini.md
```

### Sync Context Files
```bash
# Dùng Claude để sync
claude
> Đọc claude.md và làm gemini.md và agents.md giống hệt
```

### Xem Context
```bash
# Xem nội dung file
cat gemini.md
cat claude.md
cat agents.md

# Trong Claude, kiểm tra context usage
> /context
```

## Lệnh Agent (Claude Code)

### Agent Management
```bash
> /agents                      # Mở agent menu
> /agents                      # Sau đó: "Create new agent"
> /agents                      # Sau đó: "View agents"
> /agents                      # Sau đó: "Edit agent"
> /agents                      # Sau đó: "Delete agent"
```

### Triển khai Agents
```bash
> @agent-name làm một task
> @homelab-guru nghiên cứu NAS options
> @brutal-critic review script của tao
```

### Multi-Agent Tasks
```bash
> @agent1 task A, @agent2 task B, và compile results
```

## Output Styles (Claude Code)

### Quản lý Output Styles
```bash
> /output-style                # Xem styles có sẵn
> /output-style new            # Tạo style mới
> /output-style                # Chọn active style
```

### Tạo Output Style
```bash
> /output-style new

# Sau đó mô tả style:
Name: my-expert
Description: Mày là expert trong [domain]...
```

## Lệnh File Operations

### Tạo Files
```bash
# Hỏi AI tạo
> Tạo file tên project-plan.md với [content]

# Tạo thủ công
nano project-plan.md
```

### Đọc Files
```bash
# AI đọc files tự động khi được mention
> Đọc project-plan.md và summarize

# Reference với @
> Review @project-plan.md
```

### Cập nhật Files
```bash
# AI cập nhật
> Update project-plan.md để thêm [new section]

# Edit thủ công
nano project-plan.md
```

### List Files
```bash
# Lệnh terminal
ls
ls -la

# Lệnh AI
> Files nào trong directory này?
> Hiển thị tất cả markdown files
```

## Git Integration

### Initialize Repository
```bash
git init
git add .
git commit -m "Initial commit"
```

### Commits Thường xuyên
```bash
# Sau work session
git add .
git commit -m "Session summary: [what mày làm]"
git push
```

### Cách tiếp cận của Chuck (Tự động)

```bash
# Dùng session-closer agent
> @script-session-closer run

# Agent tự động:
# - Summarizes session
# - Updates context files
# - Commits đến git
```

## Multi-Terminal Workflows

### Mở Multiple Terminals
```bash
# Terminal 1: Claude
cd ~/my-project
claude

# Terminal 2: Gemini
cd ~/my-project
gemini

# Terminal 3: Codex
cd ~/my-project
codex
```

### tmux (Nâng cao)

```bash
# Bắt đầu tmux session
tmux new -s ai-work

# Tạo windows
Ctrl+B, C           # New window
Ctrl+B, [0-9]       # Switch đến window N
Ctrl+B, "           # Split horizontal
Ctrl+B, %           # Split vertical
```

## Lệnh opencode Riêng

### Model Management
```bash
# Xem available models
> /model

# Switch đến model cụ thể
> /model claude-sonnet-4
> /model grok-fast
> /model llama-3.2
```

### Cấu hình
```bash
# Edit config file
nano ~/.config/opencode/opencode.jsonc

# Example config cho local model
{
  "model": "llama-3.2"
}
```

### Authentication
```bash
# Login với Claude Pro
opencode auth login
# Chọn "Anthropic"
# Paste auth code từ browser

# Verify login
opencode auth whoami
```

### Session Management
```bash
> /sessions         # Xem tất cả sessions
> /timeline         # Xem current session timeline
> /share            # Tạo shareable link
```

## Lệnh Nâng cao

### Headless Mode
```bash
# Gemini one-shot command
gemini -p "Nghiên cứu ZFS performance và lưu đến report.md"

# Claude với pipe
echo "Phân tích file này" | claude

# Chain commands
gemini -p "Nghiên cứu topic" && claude -r
```

### Agent như Tool
```bash
# Claude agent dùng Gemini
> @gemini-research tìm latest Docker security updates

# Agent chạy:
gemini -p "tìm latest Docker security updates"
```

### Obsidian Integration
```bash
# Điều hướng đến vault của mày
cd ~/Obsidian/MyVault

# Khởi chạy AI
gemini

# Làm việc với notes
> Đọc daily note của hôm nay và summarize tasks
> Tạo note mới về [topic] với backlinks đến related notes
```

## Lệnh Khắc phục sự cố

### Permission Issues
```bash
# Reinstall với sudo
sudo npm install -g @google/generative-ai-cli

# Fix permissions
sudo chown -R $USER /usr/local/lib/node_modules
```

### Command Not Found
```bash
# Reload shell
source ~/.bashrc
# hoặc
source ~/.zshrc

# Hoặc đóng và mở lại terminal
```

### Context File Issues
```bash
# Verify mày ở đúng directory
pwd
ls *.md

# Recreate nếu cần
> /init
```

### Clear Cache/Reset
```bash
# Claude Code
rm -rf ~/.config/claude-code

# Gemini CLI
rm -rf ~/.config/gemini-cli

# opencode
rm -rf ~/.config/opencode
```

## Common Workflows

### Research & Write
```bash
# Step 1: Research (Gemini)
gemini
> Nghiên cứu [topic] và compile findings

# Step 2: Write (Claude)
claude
> Đọc research.md và viết comprehensive blog post

# Step 3: Review (Codex)
codex
> Review blog-post.md cho accuracy và clarity
```

### Project Kickoff
```bash
# Tạo project
mkdir project-name
cd project-name

# Initialize
gemini
> /init
> Giúp tao plan project này: [description]

# Track với git
git init
git add .
git commit -m "Project initialized"
```

### Daily Work Session
```bash
# Bắt đầu
cd ~/current-project
claude

# Kiểm tra status
> Chúng ta đang ở đâu trong project?

# Làm việc
> [Tasks của mày]

# End session
> @script-session-closer run
# Hoặc thủ công:
git add .
git commit -m "Session: [summary]"
```

## Quick Tips

### Keyboard Shortcuts
```bash
Ctrl+C              # Interrupt AI / Exit
Ctrl+D              # Exit (alternative)
Tab                 # Toggle thinking (Claude)
Shift+Tab           # Toggle planning (Claude)
Ctrl+O              # Check agent status (Claude)
```

### Speed Tips
```bash
# Dùng dangerous mode (khi an toàn)
claude --dangerously-skip-permissions

# Dùng headless cho quick tasks
gemini -p "quick question"

# Triển khai agents cho parallel work
> @agent1 task A, @agent2 task B
```

### Organization Tips
```bash
# Một directory cho project
~/projects/project-a/
~/projects/project-b/

# Consistent context file naming
gemini.md, claude.md, agents.md

# Dùng git cho mọi thứ
git commit regularly
```

## Emergency Commands

### Kill Stuck Process
```bash
# Tìm process ID
ps aux | grep gemini
ps aux | grep claude

# Kill nó
kill -9 [PID]

# Hoặc dùng Ctrl+C twice nhanh
```

### Reset Everything
```bash
# Xóa config directories
rm -rf ~/.config/gemini-cli
rm -rf ~/.config/claude-code
rm -rf ~/.config/opencode

# Reinstall
npm install -g @google/generative-ai-cli
npm install -g @anthropic-ai/claude-code
curl -fsSL https://opencode.sh/install.sh | sh
```

## Official Documentation Links

```bash
# Gemini CLI
https://ai.google.dev/gemini-api/docs/cli

# Claude Code
https://docs.anthropic.com/claude/docs/claude-code

# opencode
https://github.com/stackblitz-labs/opencode

# Codex
https://platform.openai.com/docs/tools/codex
```

---

**In trang này cho tham khảo nhanh!**

[← Quay lại README](../README.md)