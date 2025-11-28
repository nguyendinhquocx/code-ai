# Hướng dẫn Gemini CLI Đầy đủ

**Video Timestamp:** 1:27-4:14

Gemini CLI là công cụ AI terminal của Google. Nó **MIỄN PHÍ** (với limits hào phóng) và hoàn hảo để bắt đầu với AI terminal.

## Tại sao bắt đầu với Gemini CLI?

Lý do của Chuck:
> "Chúng ta dive thẳng vào Gemini CLI trước tiên. Tại sao? Vì nó có gói miễn phí rất hào phóng. Đúng vậy, mày nghe rồi - MIỄN PHÍ."

**Tốt nhất cho:**
- Bắt đầu (không cần credit card)
- Nghiên cứu và web searches
- Tạo và chỉnh sửa files
- Học context file workflows
- Viết và tạo content

## Cài đặt

### Linux / WSL / macOS

```bash
# Cài đặt global với npm
npm install -g @google/generative-ai-cli
```

**Lỗi permission?** Chạy với sudo:
```bash
sudo npm install -g @google/generative-ai-cli
```

### macOS (Alternative với Homebrew)

```bash
brew install gemini-cli
```

### Verify Cài đặt

```bash
gemini --version
```

## Lần chạy Đầu tiên

### 1. Tạo Project Directory

Cách tiếp cận của Chuck từ video:

```bash
# Tạo directory mới cho project của mày
mkdir coffee-project
cd coffee-project

# Khởi chạy Gemini
gemini
```

**Tại sao tạo directory trước?**
- Gemini có thể đọc/ghi files trong current directory
- Giữ work của mày có tổ chức
- Context files sẽ được lưu ở đây

### 2. Thiết lập Ban đầu

Lần đầu tiên mày chạy `gemini`:

1. **Đăng nhập với tài khoản Google** - Mở browser tự động
2. **Ủy quyền CLI** - Nhấp "Allow"
3. **Quay lại terminal** - Mày đã đăng nhập!

```
     _____                 _       _    ____ _     ___
    / ____|               (_)     (_)  / ___| |   |_ _|
   | |  __  ___ _ __ ___  _ _ __  _  | |   | |    | |
   | | |_ |/ _ \ '_ ` _ \| | '_ \| | | |   | |    | |
   | |__| |  __/ | | | | | | | | |___| |___ | |
    \_____|\___|_| |_| |_|_|_|_|  \____|_____|___|

   Welcome to Gemini CLI!
```

## Sử dụng Cơ bản

### Câu hỏi Đầu tiên của Mày

```bash
# Chỉ bắt đầu gõ sau prompt
> Làm sao để làm tách cà phê ngon nhất thế giới?
```

**Điều gì xảy ra:**
1. Gemini tìm trên web (nếu relevant)
2. "Herding digital cats..." (loading message)
3. Response xuất hiện với formatting

### Các Elements Giao diện Chính

```
> Câu hỏi của mày ở đây

Herding digital cats... 🐱 (processing)
Crafting the guide... ✨ (generating response)

[Response xuất hiện]

99% context left
```

**Context indicator:** Hiển thị bao nhiêu của conversation window của mày còn lại

## Siêu năng lực: Truy cập File System

### Tạo Files

Demo của Chuck từ video:

```bash
> Tao thực sự muốn mày tìm cách làm cà phê tốt nhất.
  Nghiên cứu top 10 sites, chỉ sources uy tín,
  và sau đó compile kết quả vào document tên best-coffee-method.
  Và sau đó tạo cho tao blog plan, chỉ outline.
```

**Gemini sẽ hỏi:**
```
📝 Mày có muốn tao tạo file cho mày không? (y/n)
```

Gõ `y` và nhấn enter.

**Kết quả:**
```
Created files:
- best-coffee-method.md
- coffee-blog-outline.md
```

### Đọc Files

Gemini tự động đọc files trong current directory của mày khi relevant.

```bash
> Files nào trong directory này?
> Đọc coffee blog outline và suggest improvements
> Thêm section mới vào best-coffee-method.md về nhiệt độ nước
```

## Game-Changer: Context Files

### Command `/init`

**Video Timestamp:** 4:00-4:14

Đây là THE feature thay đổi mọi thứ:

```bash
> /init
```

**Nó làm gì:**
1. Phân tích current directory của mày
2. Đọc tất cả files trong project
3. Tạo `gemini.md` context file
4. Lưu project understanding cho các sessions tương lai

**Gemini hỏi:**
```
📝 Tạo Gemini.md context file? (y/n)
```

Nói có!

### Có gì trong gemini.md?

```bash
# Xem context file của mày
cat gemini.md
```

**Example content:**
```markdown
# Project: Coffee Blog Series

## Overview
Project này liên quan đến researching và tạo content về coffee brewing methods,
targeted tại home coffee enthusiasts.

## Current Files
- best-coffee-method.md: Research compilation
- coffee-blog-outline.md: Blog series outline

## Project Goals
- Tạo comprehensive coffee brewing guide
- Phát triển blog series structure
```

### Sử dụng Context qua Sessions

**Magic moment từ video:**

1. Đóng Gemini session của mày (Ctrl+C hoặc gõ `exit`)
2. Mở Gemini session MỚI: `gemini`
3. Để ý nó loads `gemini.md` tự động

```
Loading context from gemini.md... ✓
100% context left (fresh session)
```

Bây giờ thử:

```bash
> Viết intro cho blog post 1 trong coffee series
```

**Không cần context thêm!** Nó biết mày đang làm việc gì.

Phản ứng của Chuck:
> "Tao không cho nó context gì cả. Nó chỉ biết. Đây là chat session mới."

## Workflow Thực tế (từ video)

### Project Video Thực tế của Chuck

**Video Timestamp:** 5:48-6:09

```bash
# Điều hướng đến video project
cd ~/Projects/531-ai-terminal

# Khởi chạy Gemini
gemini

# Nó loads context file tự động
# Hỏi về project status
> Chúng ta đang ở đâu trong project?
```

**Gemini trả lời với:**
- Current phase
- Completed tasks
- Next steps
- Referenced documents

### Cập nhật Context

```bash
> Update gemini.md file với:
  - Chúng ta hoàn thành coffee brewing research
  - Next step là viết first blog post
  - Quyết định: Focus trên pour-over method trước tiên
```

Gemini cập nhật file. Session tiếp theo? Nó nhớ mọi thứ.

## Commands Có sẵn

### Xem Tất cả Tools

```bash
> /tools
```

**Hiển thị capabilities:**
- Web search
- File read/write
- Code execution
- Data analysis

### Commands Phổ biến

```bash
> /init           # Tạo context file
> /tools          # Hiển thị tools có sẵn
> /help           # Hiển thị help
> exit            # Exit Gemini (hoặc Ctrl+C)
```

## Quản lý Context Window

### Context là gì?

Mọi AI đều có "context window" - bao nhiêu conversation nó có thể nhớ.

**Browser AI:** Giấu cái này khỏi mày (mày hit limits bất ngờ)
**Gemini CLI:** Hiển thị cho mày chính xác mày đang ở đâu

```
99% context left  ← Còn nhiều room
50% context left  ← Nửa đường
10% context left  ← Bắt đầu session mới hoặc summarize
```

### Khi Context thấp

**Option 1:** Bắt đầu session mới
```bash
# Exit current session
exit

# Bắt đầu fresh
gemini
# Context file loads tự động!
```

**Option 2:** Hỏi Gemini cập nhật context file
```bash
> Summarize conversation của chúng ta và update gemini.md với key decisions
```

## Mẹo từ Chuck

### 1. Một Directory = Một Project

```bash
# Tốt: Projects riêng biệt
~/coffee-project/      → Một Gemini session
~/video-script/        → Một Gemini session khác
~/homelab-docs/        → Một Gemini session khác
```

### 2. Để Gemini Tạo Context File của Mày

Đừng viết `gemini.md` thủ công - để `/init` phân tích project của mày.

### 3. Cập nhật Context Khi Mày Làm việc

```bash
> Thêm vào gemini.md: Chúng ta quyết định dùng French press method thay thế
```

### 4. Context Files = Bộ nhớ Project của Mày

Nghĩ `gemini.md` như bộ não của project:
- Current state
- Quyết định đã làm
- Files để reference
- Next steps

## Nâng cao: Multiple Gemini Sessions

**Từ video:** Chuck mở nhiều terminal tabs với các Gemini sessions khác nhau.

```bash
# Terminal Tab 1: Coffee project
cd ~/coffee-project
gemini

# Terminal Tab 2: Video project
cd ~/video-script
gemini

# Terminal Tab 3: Homelab docs
cd ~/homelab-docs
gemini
```

Mỗi session loads context file của riêng nó - không trộn lẫn!

## Example Workflows

### Research Workflow

```bash
mkdir research-project
cd research-project
gemini

> Nghiên cứu top 5 enterprise NAS solutions cho small business.
  Include pricing, features, và pros/cons.
  Tạo comparison document gọi là nas-comparison.md

> /init

> Dựa trên research, viết recommendation cho công ty 10 người
  với 5TB storage needs. Lưu là nas-recommendation.md
```

### Writing Workflow

```bash
mkdir blog-series
cd blog-series
gemini

> Giúp tao plan 5-part blog series về network security basics.
  Tạo outline file.

> /init

> Viết introduction cho part 1. Lưu là part-1-intro.md

# Sau đó (new session):
gemini

> Review part-1-intro và suggest improvements
```

### Obsidian Integration

**Như đề cập trong video:**

```bash
# Điều hướng đến Obsidian vault của mày
cd ~/Obsidian/MyVault
gemini

> Đọc daily note của hôm nay và summarize key tasks

> Tạo note mới về [topic] với backlinks đến related notes
```

Gemini có thể truy cập TẤT CẢ Obsidian notes của mày vì chúng chỉ là markdown files!

## Khắc phục sự cố

### "Permission Denied" khi Cài đặt

```bash
# Dùng sudo
sudo npm install -g @google/generative-ai-cli
```

### "Command not found: gemini"

```bash
# Reload shell của mày
source ~/.bashrc  # hoặc ~/.zshrc

# Hoặc đóng và mở lại terminal
```

### Context File Không Load

```bash
# Đảm bảo mày ở đúng directory
pwd
ls gemini.md

# Tạo lại nếu cần
> /init
```

### Web Search Không Hoạt động

Gemini cần internet access. Kiểm tra connection của mày.

## Giá cả & Limits

### Gói Miễn phí

- **Usage limits hào phóng** (exact limits vary)
- **Gemini 2.5 Pro model** (mới nhất và tốt nhất!)
- **Web search included**
- **Không cần credit card**

### Google One AI Premium ($20/tháng)

- Rate limits cao hơn
- Priority access
- Tích hợp với other Google services

**Quan điểm của Chuck:**
> "Mọi người đều có tài khoản Google, và vâng, cái này có thể là regular Gmail account miễn phí."

## Tiếp theo là gì?

Bây giờ mày hiểu Gemini CLI, mày sẵn sàng cho big leagues:

➡️ [Hướng dẫn Claude Code](04-claude-code.md) - Công cụ hàng ngày của Chuck với AI agents

Hoặc explore:
- [Context Files chuyên sâu](07-context-files.md)
- [Productivity Workflows](11-productivity-workflows.md)

---

[← Quay lại Điều kiện tiên quyết](01-prerequisites.md) | [Tiếp theo: Claude Code →](04-claude-code.md)