# Điều kiện tiên quyết

Trước khi dive vào các công cụ AI terminal, hãy đảm bảo mày đã có mọi thứ cần thiết.

## Bắt buộc

### 1. Truy cập Terminal

Mày cần một terminal/command line:

- **macOS**: Terminal app tích hợp (Cmd+Space, gõ "Terminal")
- **Linux**: Bất kỳ terminal emulator nào (thường là Ctrl+Alt+T)
- **Windows**:
  - Windows Subsystem for Linux (WSL) - **Được khuyên dùng**
  - PowerShell
  - Git Bash

#### Tại sao nên dùng WSL cho Windows?
Chuck dùng WSL (Ubuntu) trong video. Nó cung cấp môi trường Linux trên Windows, mà hầu hết các terminal tool đều optimize cho nó.

**Cài đặt WSL:** [Video WSL của Chuck](https://www.youtube.com/watch?v=[WSL_VIDEO_ID])

```powershell
# Trong PowerShell (Admin)
wsl --install
```

### 2. Node.js & npm

Hầu hết các công cụ AI terminal được cài qua npm (Node Package Manager).

**Kiểm tra xem mày đã có chưa:**
```bash
node --version
npm --version
```

**Chưa có?** Cài từ [nodejs.org](https://nodejs.org/) (khuyên dùng phiên bản LTS)

### 3. Tài khoản Google (cho Gemini CLI)

- Bất kỳ tài khoản Gmail miễn phí nào đều được
- Không cần Google One AI Premium cho usage cơ bản

### 4. AI Subscriptions (Tùy chọn nhưng được khuyên dùng)

| Công cụ | Tùy chọn miễn phí | Tùy chọn trả phí | Quan điểm của Chuck |
|------|-------------------|------------------|-------------------|
| Gemini CLI | Gói miễn phí hào phóng | Google One AI Premium $20/tháng | "Bắt đầu ở đây - MIỄN PHÍ" |
| Claude Code | Cần Claude Pro | Claude Pro $20/tháng | "Đây là công cụ hàng ngày của tao - đáng giá" |
| Codex | Miễn phí giới hạn | ChatGPT Plus $20/tháng | "Tốt cho analysis" |
| opencode | Miễn phí Grok / Local models | Nhiều nhà cung cấp | "Tuyệt cho thử nghiệm" |

**Đề xuất của Chuck:**
> "Nếu mày chỉ có thể trả tiền cho một AI subscription, Claude Pro là cái tao sẽ chọn."

## Được khuyên dùng

### 5. Git (Tùy chọn nhưng hữu ích)

Chuck đối xử với projects của mình như code - version control cho mọi thứ.

**Kiểm tra xem đã cài chưa:**
```bash
git --version
```

**Cài đặt:**
- macOS: `xcode-select --install`
- Linux: `sudo apt install git` (Ubuntu/Debian)
- Windows: [git-scm.com](https://git-scm.com/)

### 6. Text Editor

Mày sẽ edit context files. Bất kỳ text editor nào cũng được:
- **Terminal-based**: nano (dễ nhất), vim, emacs
- **GUI**: VS Code, Sublime Text, Notepad++

### 7. Kỹ năng Terminal cơ bản

Mày nên thoải mái với:
- Điều hướng directories (`cd`, `ls`/`dir`)
- Tạo directories (`mkdir`)
- File operations cơ bản (`cat`, `nano`)
- Hiểu file paths

**Mới với terminal?** Đừng lo - Chuck hướng dẫn mọi thứ trong video!

## Yêu cầu Hệ thống

### Tối thiểu
- **RAM**: 4GB (khuyên dùng 8GB)
- **Storage**: 1GB không gian trống
- **Internet**: Bắt buộc cho cloud AI models
- **OS**: macOS 10.15+, Ubuntu 20.04+, Windows 10+ (với WSL)

### Được khuyên dùng cho Local Models (opencode)
- **RAM**: 16GB+
- **Storage**: 10GB+ (cho model files)
- **Đã cài Ollama** (cho local models)

## Permissions & Bảo mật

### Những gì các công cụ này có thể truy cập

Lưu ý Bảo mật Quan trọng:

Terminal AI tools có thể:
- Đọc files trong directories mày mở chúng
- Ghi files vào hệ thống của mày
- Thực thi bash commands
- Truy cập Obsidian vault của mày (hoặc bất kỳ files nào)
- Chạy Python/bash scripts

Đây là POWERFUL nhưng đòi hỏi trách nhiệm.

### Mẹo Bảo mật của Chuck

1. **Bắt đầu trong test directory** - Đừng mở AI tools trong root hoặc home directory lúc đầu
2. **Kiểm tra file permissions** - Claude Code hỏi permission theo mặc định (tốt!)
3. **Dùng `--dangerously-skip-permissions` cẩn thận** - Chỉ khi mày tin tưởng cái mày đang làm
4. **Bảo mật remote access của mày** - Nếu dùng AI trên remote servers, dùng zero-trust tools như TwinGate

### Dangerous Mode Flag

Nhiều tool có mode "skip permissions":

```bash
# Claude Code không safety checks
claude --dangerously-skip-permissions

# Chỉ dùng KHI MÀY BIẾT MÀY ĐANG LÀM GÌ
# Chuck dùng nó cho speed trong video
```

## Kiểm tra Môi trường Nhanh

Chạy cái này để verify mày sẵn sàng:

```bash
# Kiểm tra terminal
echo "Terminal hoạt động!"

# Kiểm tra Node.js
node --version && npm --version

# Kiểm tra không gian trống
df -h .

# Tạo test directory
mkdir -p ~/ai-terminal-test
cd ~/ai-terminal-test
echo "Thiết lập hoàn tất! Sẵn sàng cài tools."
```

## Tiếp theo là gì?

Đã hoàn thành điều kiện tiên quyết? → [Hướng dẫn Bắt đầu Nhanh](02-quickstart.md)

Có vấn đề? → [Khắc phục sự cố](15-troubleshooting.md)

---

[← Quay lại README](../README.md) | [Tiếp theo: Bắt đầu Nhanh →](02-quickstart.md)