# Hướng dẫn Khắc phục sự cố

## Vấn đề Cài đặt

### "Command not found" sau khi cài đặt

**Vấn đề:** Đã cài tool nhưng terminal không nhận ra lệnh

**Giải pháp:**
```bash
# 1. Reload shell configuration
source ~/.bashrc     # cho bash
source ~/.zshrc      # cho zsh

# 2. Đóng và mở lại terminal

# 3. Kiểm tra xem thực sự đã cài chưa
which gemini
which claude
which opencode

# 4. Verify PATH bao gồm npm global packages
echo $PATH | grep npm
```

### "Permission denied" trong khi cài đặt

**Vấn đề:** Lỗi npm permissions

**Giải pháp:**
```bash
# Option 1: Dùng sudo (quick fix)
sudo npm install -g @google/generative-ai-cli

# Option 2: Fix npm permissions (proper fix)
sudo chown -R $USER /usr/local/lib/node_modules
sudo chown -R $USER /usr/local/bin
```

### "Node.js not found"

**Vấn đề:** npm commands fail, Node.js không được cài

**Giải pháp:**
1. Cài Node.js từ [nodejs.org](https://nodejs.org/)
2. Chọn phiên bản LTS (Long Term Support)
3. Restart terminal sau khi cài

## Vấn đề Xác thực

### Không thể login vào Gemini CLI

**Giải pháp:**
```bash
# 1. Đảm bảo browser mở cho OAuth
# Kiểm tra xem browser có được set làm default không

# 2. Thử incognito/private browser window
# Đôi khi cached auth gây issues

# 3. Xóa Gemini config và thử lại
rm -rf ~/.config/gemini-cli
gemini
```

### Claude Code authentication thất bại

**Giải pháp:**
```bash
# 1. Verify Claude Pro subscription đang active
# Kiểm tra tại claude.ai

# 2. Xóa auth cache
rm -rf ~/.config/claude-code/auth

# 3. Re-authenticate
claude auth login
```

### opencode provider authentication issues

**Giải pháp:**
```bash
# 1. Kiểm tra auth status
opencode auth whoami

# 2. Re-login
opencode auth login

# 3. Đối với Claude Pro: đảm bảo chọn provider đúng
# Chọn "Anthropic" không "OpenAI"

# 4. Kiểm tra API key validity (nếu dùng API keys)
```

## Vấn đề Context File

### Context file không load tự động

**Giải pháp:**
```bash
# 1. Verify filename đúng (case-sensitive!)
ls gemini.md     # ✓ Đúng
ls Gemini.md     # ✗ Sai
ls GEMINI.md     # ✗ Sai

# 2. Đảm bảo mày ở đúng directory
pwd
# Should show project directory của mày

# 3. Tạo lại nếu cần
> /init

# 4. Kiểm tra xem file có trống không
cat gemini.md
```

### Multiple context files không đồng bộ

**Vấn đề:** Dùng Claude + Gemini + Codex, context files khác nhau

**Giải pháp:**
```bash
# Dùng một AI để sync tất cả files
claude
> Đọc claude.md và copy content chính xác đến gemini.md và agents.md

# Verify chúng match
diff claude.md gemini.md
diff claude.md agents.md
```

### Context có vẻ cũ/outdated

**Giải pháp:**
```bash
# 1. Exit và restart session (forces reload)
exit
gemini  # hoặc claude/codex

# 2. Cập nhật context file thủ công
nano gemini.md
# Làm changes của mày
# Lưu và exit
# Restart session

# 3. Hỏi AI cập nhật context
> Update gemini.md để reflect progress mới nhất của chúng ta
```

## Vấn đề Agent (Claude Code)

### Không thể tạo agent

**Giải pháp:**
```bash
# 1. Verify mày đang trong Claude Code (không Gemini/Codex)
# Agents chỉ hoạt động trong Claude Code

# 2. Đảm bảo Claude Pro subscription đang active

# 3. Thử tạo qua menu
> /agents
# Chọn "Create new agent"
```

### Agent không phản hồi

**Giải pháp:**
```bash
# 1. Kiểm tra agent syntax
> @agent-name làm task    # ✓ Đúng
> agent-name làm task     # ✗ Sai (thiếu @)

# 2. Verify agent tồn tại
> /agents
# Kiểm tra list của available agents

# 3. Kiểm tra agent có tools phù hợp không
> /agents
# Chọn "Edit agent"
# Verify tools được enabled
```

### Lỗi "Agent not found"

**Giải pháp:**
```bash
# 1. Kiểm tra agent scope
# Project agents chỉ available trong project directory đó

# 2. Verify agent name (case-sensitive)
> @homelab-guru    # ✓ Đúng
> @Homelab-Guru    # ✗ Sai

# 3. Tạo lại agent nếu cần
> /agents
# Xóa và tạo lại
```

## Vấn đề File Operations

### AI không thể đọc files của mày

**Giải pháp:**
```bash
# 1. Verify file permissions
ls -la yourfile.md

# 2. Kiểm tra mày ở đúng directory
pwd
ls

# 3. Dùng absolute path nếu cần
> Đọc /full/path/to/file.md

# 4. Kiểm tra xem file có phải binary không
file yourfile.md
# Should show: "ASCII text" hoặc "UTF-8 text"
```

### AI không thể ghi files

**Giải pháp:**
```bash
# 1. Kiểm tra directory permissions
ls -la

# 2. Kiểm tra disk space
df -h .

# 3. Thử filename khác
> Tạo test.md với content "hello"

# 4. Kiểm tra xem file tồn tại và read-only
ls -la existing-file.md
chmod 644 existing-file.md  # Make writable
```

## Vấn đề Hiệu suất

### AI responses rất chậm

**Giải pháp:**
```bash
# 1. Kiểm tra internet connection
ping 8.8.8.8

# 2. Thử model khác (cho opencode)
> /model grok-fast-1
# Model nhanh hơn cho quick tasks

# 3. Giảm context size
# Bắt đầu session mới nếu context window đầy

# 4. Đóng terminal sessions không dùng
# Multiple AI sessions có thể làm chậm things down
```

### Terminal bị treo/hang

**Giải pháp:**
```bash
# 1. Thử Ctrl+C để interrupt
# Nhấn một lần, đợi 2 giây

# 2. Force quit nếu cần
# Nhấn Ctrl+C twice nhanh

# 3. Kill process từ terminal khác
ps aux | grep gemini
kill -9 [PID]

# 4. Đóng và mở lại terminal
```

## Vấn đề Multi-Tool

### AIs đưa thông tin mâu thuẫn

**Expected behavior!** Different models có strengths khác nhau.

**Chiến lược:**
- Claude: Tốt nhất cho deep work
- Gemini: Tốt nhất cho current info
- ChatGPT: Tốt nhất cho analysis

Cross-check important decisions qua multiple AIs.

### File conflicts (nhiều AIs edit cùng file)

**Phòng ngừa:**
```bash
# Gán clear responsibilities
# Claude: sections/1.md
# Gemini: research/1.md
# Không bao giờ overlap!
```

**Giải pháp nếu xảy ra:**
```bash
# 1. Kiểm tra file với git diff
git diff file.md

# 2. Review changes thủ công
cat file.md

# 3. Dùng version control để restore
git checkout file.md
```

## Vấn đề Specific theo Platform

### Windows / WSL Issues

**Vấn đề:** Commands không hoạt động trong PowerShell

**Giải pháp:** Dùng WSL (Windows Subsystem for Linux)
```powershell
# Cài đặt WSL
wsl --install

# Khởi chạy Ubuntu
wsl

# Cài đặt tools trong WSL, không PowerShell
```

### macOS Issues

**Vấn đề:** "Developer tools not installed"

**Giải pháp:**
```bash
xcode-select --install
# Đợi installation
# Thử npm install lại
```

### Linux Issues

**Vấn đề:** npm permissions phức tạp

**Giải pháp:**
```bash
# Dùng nvm (Node Version Manager) thay thế
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
source ~/.bashrc
nvm install --lts
nvm use --lts

# Bây giờ cài đặt tools
npm install -g @google/generative-ai-cli
```

## Vẫn Có Vấn đề?

### Kiểm tra Documentation Chính thức

- [Gemini CLI Docs](https://ai.google.dev/gemini-api/docs/cli)
- [Claude Code Docs](https://docs.anthropic.com/claude/docs/claude-code)
- [opencode GitHub](https://github.com/stackblitz-labs/opencode)

### Community Support

- NetworkChuck Discord
- GitHub Issues cho opencode
- Tool-specific forums

### Nuclear Option: Complete Reinstall

```bash
# 1. Xóa tất cả tools
npm uninstall -g @google/generative-ai-cli
npm uninstall -g @anthropic-ai/claude-code
rm -rf ~/.config/gemini-cli
rm -rf ~/.config/claude-code
rm -rf ~/.config/opencode

# 2. Reinstall từ đầu
npm install -g @google/generative-ai-cli
npm install -g @anthropic-ai/claude-code
curl -fsSL https://opencode.sh/install.sh | sh

# 3. Reload shell
source ~/.bashrc
```

---

[← Quay lại README](../README.md)