# AI Terminal Guide - Từ Con Số Zero Thành Hero

**Warning:** Đọc xong file này có thể khiến mày nghiện AI và quên luôn ChatGPT trên browser.

---

## 🤔 WTF LÀ AI TERMINAL?

### Vấn đề với Browser AI (Cái mày đang dùng bây giờ)

Mày có nhận ra không:

- **Infinite scroll hell** - ChatGPT mất context sau 20 messages
- **20 tabs mở cùng lúc** - Mỗi tab một cuộc trò chuyện khác nhau
- **Copy/paste nightmare** - Cố gắng lưu important parts vào Notepad
- **Re-explain everything** - Mỗi new chat phải giải thích lại từ đầu
- **Vendor lock-in** - Data của mày bị giam trong platform của người ta

**NetworkChuck nói:** "Tao không cho nó context gì cả. Nó chỉ biết. Đây là chat session mới."

### Giải pháp: AI trong Terminal

**Terminal AI = AI + File System + Context Files**

- **Context files** - AI nhớ project của mày mãi mãi
- **Direct file access** - Đọc/ghi files trực tiếp
- **Local storage** - Mọi thứ trên máy của mày
- **Multi-tool workflows** - Dùng nhiều AI cùng lúc
- **No vendor lock-in** - Mày sở hữu mọi thứ

**Kết quả:** 10x năng suất hơn browser AI.

---

## 🛠️ CHUẨN BỊ ĐỒ NGHỀ

### Bắt buộc phải có

1. **Terminal/Command Line**
   - macOS: Terminal app (Cmd+Space, gõ "Terminal")
   - Linux: Bất kỳ terminal emulator nào
   - Windows: **WSL** (Windows Subsystem for Linux) - Được khuyên dùng!
   
   ```powershell
   # Cài WSL (PowerShell Admin)
   wsl --install
   ```

2. **Node.js & npm**
   ```bash
   node --version
   npm --version
   ```
   Chưa có? Cài từ [nodejs.org](https://nodejs.org/) (chọn LTS)

3. **Tài khoản Google** (Cho Gemini CLI - miễn phí)

4. **AI Subscriptions** (Tùy chọn nhưng được khuyên dùng)
   - **Claude Pro**: $20/tháng - Đáng tiền nhất
   - **ChatGPT Plus**: $20/tháng - Nếu mày thích analysis
   - **Google One AI Premium**: $20/tháng - Nếu mày thích Google ecosystem

### Được khuyên dùng

- **Git** - Version control cho mọi thứ
- **Text editor** - VS Code, Sublime, Notepad++
- **Kỹ năng terminal cơ bản** - `cd`, `ls`, `mkdir`, `cat`

### Yêu cầu hệ thống

- **RAM**: 8GB+ (16GB nếu dùng local models)
- **Storage**: 1GB free space
- **Internet**: Bắt buộc cho cloud AI models

---

## 🎯 CHỌN CON ĐƯỜNG CỦA MÀY

### Đường đi A: MIỄN PHÍ (Gemini CLI)

**Tốt nhất cho:**
- Người mới bắt đầu
- Người tiết kiệm
- Học concepts
- Research và web search

**Chi phí:** $0

### Đường đi B: POWER USER (Claude Code)

**Tốt nhất cho:**
- Professional workflows
- AI agents
- Complex multi-step tasks
- Custom personalities

**Chi phí:** $20/tháng

### Đường đi C: FLEXIBLE (opencode)

**Tốt nhất cho:**
- Thử nghiệm nhiều models
- Local/offline usage
- Cost optimization
- Open-source preference

**Chi phí:** Miễn phí (Grok) + existing subscriptions

**Đề xuất của tao:** Bắt đầu với Gemini CLI (miễn phí), sau đó nâng cấp lên Claude Pro nếu nghiêm túc.

---

## 📦 CÀI ĐẶT TỪNG TOOL

### Gemini CLI (Miễn phí & Nhanh nhất)

```bash
# Cài đặt
npm install -g @google/generative-ai-cli

# Hoặc với sudo nếu lỗi permission
sudo npm install -g @google/generative-ai-cli

# Verify
gemini --version
```

**Lần chạy đầu:**
```bash
mkdir test-project
cd test-project
gemini
# Browser mở → Login với Google → Allow → Ready!
```

### Claude Code (Mạnh nhất)

```bash
# Cài đặt
npm install -g @anthropic-ai/claude-code

# Verify
claude --version
```

**Lần chạy đầu:**
```bash
mkdir test-project
cd test-project
claude
# Browser mở → Login với Claude Pro → Allow directory → Ready!
```

### opencode (Linh hoạt nhất)

```bash
# Quick install (được khuyên dùng)
curl -fsSL https://opencode.sh/install.sh | sh

# Reload shell
source ~/.bashrc  # hoặc ~/.zshrc

# Verify
opencode --version
```

**Lần chạy đầu:**
```bash
opencode
# Tự động chạy với Grok Fast (MIỄN PHÍ!)
```

---

## 🧠 CONTEXT FILES - BÍ MẬT VŨ TRỤ

### Context Files là gì?

**Markdown files nói cho AI biết project của mày là gì:**
- Gemini CLI → `gemini.md`
- Claude Code → `claude.md`
- Codex/opencode → `agents.md`

### Tạo Context Files

**Cách dễ nhất - Để AI làm:**
```bash
# Trong bất kỳ AI tool nào
> /init
```

AI sẽ:
1. Scan directory của mày
2. Đọc tất cả files
3. Hỏi clarifying questions
4. Tạo context file tự động

### Example Context File

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
```

### Ma thuật Context Files

**Session 1:**
```bash
gemini
> Nghiên cứu coffee brewing methods
> /init
exit
```

**Session 2 (MỚI HOÀN TOÀN):**
```bash
gemini
# Loading context from gemini.md... ✓
> Viết intro cho blog post 1
```

**AI biết EXACTLY mày đang làm gì mà không cần re-explain!**

---

## 🚀 MULTI-TOOL WORKFLOW - LEVEL UP

### Setup Multi-Tool

**Step 1: Same Directory**
```bash
mkdir my-project
cd my-project

# Terminal 1
claude

# Terminal 2  
gemini

# Terminal 3
opencode
```

**Step 2: Sync Context Files**
```bash
# Dùng Claude để sync
claude
> Đọc claude.md và copy content chính xác đến gemini.md và agents.md
```

### Workflow Thực tế

**Scenario:** Viết technical blog post

```bash
# TERMINAL 1: Claude (Deep Work)
claude
> Viết introduction section cho ZFS storage blog post.
   Lưu đến sections/intro.md

# TERMINAL 2: Gemini (Research)
gemini  
> Nghiên cứu latest ZFS performance benchmarks.
   Compile findings trong research/zfs-benchmarks.md

# TERMINAL 3: opencode (Analysis)
opencode
> /model claude-sonnet-4
> Review intro trong sections/intro.md và kiểm tra xem nó align
   với benchmarks research. Suggest improvements.
```

**Kết quả:**
- Claude viết deep content
- Gemini gathers current data  
- opencode ensures quality

**Không copy/paste. Không export/import. Chỉ files.**

---

## 🤖 AI AGENTS - ĐỂ AI LÀM VIỆC CHO MÀY

### Agents là gì? (Claude Code only)

**AI instance riêng biệt với:**
- Fresh context window (200K tokens mỗi cái)
- Specialized instructions
- Custom tool access
- Independent memory

**Nghĩ:** Delegate tasks đến specialized coworkers.

### Tạo Agent Đầu tiên

```bash
# Trong Claude Code
> /agents
# Chọn "Create new agent"

Name: homelab-guru
Description: Expert trong homelab hardware, networking, và infrastructure

Instructions:
Mày là homelab expert. Khi được hỏi:
1. Cân nhắc budget constraints
2. Giải thích technical trade-offs
3. Cung cấp specific product recommendations
4. Include pricing và availability

Tools: All tools
Model: Sonnet
```

### Sử dụng Agents

```bash
> @homelab-guru NAS ngân sách tốt nhất cho homelab là gì?

> @brutal-critic review script của tao tại @script.md

> @research-assistant tìm latest Docker security updates
```

### Multiple Agents Đồng thời

```bash
> @homelab-guru nghiên cứu proxmox servers tốt nhất,
   @pizza-finder tìm pizza place tốt nhất ở Dallas,
   và @graphics-guru tìm graphics card tốt nhất cho gaming.
   Đặt tất cả lại trong comprehensive report.
```

**3 agents làm việc đồng thời. Claude chính compile kết quả.**

---

## 💼 REAL-WORLD EXAMPLES

### Example 1: Content Creation Pipeline

```bash
# Step 1: Research (Gemini)
gemini
> Nghiên cứu top 5 enterprise NAS solutions cho small business.
   Include pricing, features, và pros/cons.
   Tạo comparison document gọi là nas-comparison.md

# Step 2: Writing (Claude)
claude
> Đọc nas-comparison.md và viết comprehensive buying guide.
   Target audience: Small business IT managers.
   Lưu là nas-buying-guide.md

# Step 3: Review (Codex/opencode)
opencode
> /model claude-sonnet-4
> Review nas-buying-guide.md cho:
   - Technical accuracy
   - Clarity cho target audience
   - Missing information
   Suggest improvements.
```

### Example 2: Project Planning

```bash
# Claude với planning mode
claude
# Shift+Tab để bật planning mode
> Plan homelab upgrade project

# Claude tạo detailed plan:
1. Audit current setup
2. Define requirements  
3. Research hardware options
4. Create budget
5. Purchase timeline
6. Implementation phases

Phê duyệt plan này? (y/n/edit)
```

### Example 3: Obsidian Integration

```bash
# Điều hướng đến Obsidian vault
cd ~/Obsidian/MyVault
gemini

> Đọc daily note của hôm nay và summarize key tasks
> Tạo note mới về [topic] với backlinks đến related notes
> Update project tracker với progress hôm nay
```

**AI có thể truy cập TẤT CẢ notes của mày!**

---

## 🔧 TROUBLESHOOTING - KHI MỌI THỨ LỖI

### "Command not found"

```bash
# Reload shell
source ~/.bashrc  # hoặc ~/.zshrc

# Hoặc đóng và mở lại terminal
```

### "Permission denied"

```bash
# Reinstall với sudo
sudo npm install -g @google/generative-ai-cli
sudo npm install -g @anthropic-ai/claude-code
```

### Context file không load

```bash
# Verify filename đúng (case-sensitive!)
ls gemini.md     # ✓ Đúng
ls Gemini.md     # ✗ Sai

# Tạo lại
> /init
```

### Claude authentication issues

```bash
# Verify subscription active tại claude.ai
# Clear auth cache
rm -rf ~/.config/claude-code/auth
# Re-authenticate
claude auth login
```

### AI responses chậm

```bash
# Kiểm tra internet
ping 8.8.8.8

# Switch đến faster model (opencode)
> /model grok-fast-1

# Bắt đầu session mới nếu context đầy
exit
gemini
```

---

## 💰 ĐÁNH GIÁ CHI PHÍ & GIÁ TRỊ

### Breakdown chi phí

| Tool | Chi phí | Đáng giá? |
|------|---------|-----------|
| **Gemini CLI** | MIỄN PHÍ | 10/10 - Best free tool |
| **Claude Code** | $20/tháng | 9/10 - Agents worth it |
| **opencode** | Miễn phí + subs | 8/10 - Great flexibility |
| **Codex** | $20/tháng | 7/10 - Good for analysis |

### ROI (Return on Investment)

**Nếu mày là:**
- **Content creator:** Save 10+ hours/week = $500+/week value
- **Developer:** Faster coding/debugging = $1000+/week value  
- **Student:** Better research/writing = Priceless
- **Professional:** Improved productivity = $2000+/week value

**$20/tháng cho $2000+/week value = 100x ROI**

---

## 🎖️ ĐÁNH GIÁ CUỐI CÙNG CỦA TAO

### Điều tao thích

1. **Context Files** - Game-changer thực sự
2. **Multi-Tool Workflows** - 3x productivity boost
3. **Local Control** - Mày sở hữu data của mình
4. **Agents** - Delegate tasks như boss
5. **No Vendor Lock-in** - Switch tools anytime

### Điều tao ghét

1. **Learning curve** - Cần 1-2 tuần để master
2. **Terminal dependency** - Không phải ai thích terminal
3. **Subscription costs** - Có thể expensive cho nhiều tools
4. **Windows issues** - WSL required, thêm complexity

### Tao có recommend không?

**HỎI:** Mày có muốn 10x productivity không?
**HỎI:** Mày có muốn AI nhớ project của mày mãi mãi không?
**HỎI:** Mày có muốn sở hữu data của mình không?

**Nếu câu trả lời là YES:**

**Bắt đầu với Gemini CLI (miễn phí). Dùng 1 tuần. Nếu mày thích, nâng cấp lên Claude Pro ($20/tháng).**

**Đó là investment tốt nhất mày có thể làm cho productivity của mình.**

---

## 🏁 QUICK START CHEAT SHEET

### 5 phút để bắt đầu

```bash
# 1. Cài Gemini CLI
npm install -g @google/generative-ai-cli

# 2. Tạo project
mkdir ai-test
cd ai-test

# 3. Khởi chạy
gemini

# 4. Login (browser opens)
# 5. Test command
> Nghiên cứu 3 ways to make better coffee
> /init
exit

# 6. Verify context works
gemini
> Viết coffee guide dựa trên research của chúng ta
```

**Chúc mừng! Mày vừa join 1% club của AI power users.**

---

## 📚 NEXT STEPS

1. **Master one tool first** - Đừng cố học tất cả cùng lúc
2. **Create real projects** - Không chỉ test commands
3. **Build agent library** - Tạo agents cho recurring tasks
4. **Join community** - NetworkChuck Discord, GitHub discussions
5. **Experiment constantly** - AI tools evolve nhanh

**Remember:** "It's just a folder" - Mày sở hữu mọi thứ.

---

**Final thought:** Browser AI là training wheels. Terminal AI là superbike. Mày vẫn đang đi xe đạp à?

*EOF - Guide hoàn tất. Bây giờ đi làm cho nó đỉnh!*