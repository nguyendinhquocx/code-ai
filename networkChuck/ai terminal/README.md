# AI trong Terminal - Hướng dẫn đầy đủ

Chào mừng đến với hướng dẫn đi kèm cho video "AI in the Terminal" của NetworkChuck! Repository này chứa mọi thứ mày cần để theo dõi và làm chủ các công cụ AI trong terminal.

## Xem Video

[![AI in the Terminal - NetworkChuck](https://img.youtube.com/vi/MsQACpcuTkU/maxresdefault.jpg)](https://youtu.be/MsQACpcuTkU)

**[Xem trên YouTube: AI trong Terminal](https://youtu.be/MsQACpcuTkU)**

## Mày sẽ học được gì

Hướng dẫn này bao gồm cách:
- Thoát khỏi giới hạn của AI dựa trên trình duyệt
- Sử dụng **Gemini CLI**, **Claude Code**, **Codex**, và **opencode** trong terminal
- Duy trì ngữ cảnh liên tục qua các phiên làm việc với context files
- Triển khai AI agents cho các tác vụ chuyên biệt
- Chạy nhiều công cụ AI đồng thời trên cùng một dự án
- Đồng bộ context files qua các công cụ AI khác nhau
- Xây dựng custom workflows để tối đa năng suất

## Tại sao nên dùng Terminal AI?

**Vấn đề của AI trên trình duyệt:**
- Mất ngữ cảnh sau khi scroll quá xa
- Nhiều cuộc trò chuyện phân tán trên các nền tảng khác nhau
- Không có quyền truy cập file system
- Địa ngục copy/paste
- Kiểm soát hạn chế công việc của mày

**Lợi thế của Terminal AI:**
- Ngữ cảnh liên tục - Công việc của mày sống trong files, không phải cửa sổ chat
- Truy cập file system - Đọc và ghi files trực tiếp
- Nhiều công cụ AI làm việc cùng nhau trên cùng dự án
- Kiểm soát hoàn toàn - Mọi thứ được lưu local trên hard drive
- Workflows chuyên nghiệp - Xây dựng custom agents và automation
- Nhanh hơn 10 lần - Không còn context switching hay copy/paste

## Cấu trúc Hướng dẫn

### Bắt đầu
1. [Điều kiện tiên quyết](docs/01-prerequisites.md) - Những gì mày cần trước khi bắt đầu
2. [Bắt đầu nhanh](docs/02-quickstart.md) - Sẵn sàng trong 5 phút

### Công cụ riêng lẻ
3. [Hướng dẫn Gemini CLI](docs/03-gemini-cli.md) - AI terminal miễn phí của Google
4. [Hướng dẫn Claude Code](docs/04-claude-code.md) - AI terminal mạnh nhất
5. [Hướng dẫn Codex](docs/05-codex.md) - ChatGPT trong terminal
6. [Hướng dẫn opencode](docs/06-opencode.md) - Open-source với hỗ trợ local model

### Workflows nâng cao
7. [Giải thích Context Files](docs/07-context-files.md) - Làm chủ ngữ cảnh liên tục
8. [Workflow Multi-Tool](docs/08-multi-tool-workflow.md) - Sử dụng tất cả công cụ đồng thời
9. [AI Agents chuyên sâu](docs/09-agents.md) - Triển khai AI workers chuyên biệt
10. [Styles Output & Tùy chỉnh](docs/10-customization.md) - Cho AI làm việc theo cách của mày

### Ví dụ thực tế
11. [Workflows Năng suất](docs/11-productivity-workflows.md) - Viết, nghiên cứu, lập kế hoạch
12. [Workflows Phát triển](docs/12-development-workflows.md) - Code và debug
13. [Workflows Homelab & IT](docs/13-homelab-workflows.md) - Tác vụ sysadmin

### Tham khảo
14. [Bảng cheat lệnh](docs/14-cheat-sheet.md) - Tham khảo nhanh tất cả lệnh
15. [Khắc phục sự cố](docs/15-troubleshooting.md) - Vấn đề phổ biến và giải pháp
16. [FAQ](docs/16-faq.md) - Câu hỏi thường gặp

## Theo dõi với Video

Mỗi phần của hướng dẫn này tương ứng với một đoạn trong video:

- **0:00-1:26** - Vấn đề → [Điều kiện tiên quyết](docs/01-prerequisites.md)
- **1:27-4:14** - Demo Gemini CLI → [Hướng dẫn Gemini CLI](docs/03-gemini-cli.md)
- **8:44-14:26** - Claude Code → [Hướng dẫn Claude Code](docs/04-claude-code.md)
- **18:03-19:25** - Multi-Tool Workflow → [Multi-Tool Workflow](docs/08-multi-tool-workflow.md)
- **20:31-24:48** - Demo Workflow thực tế → [Productivity Workflows](docs/11-productivity-workflows.md)
- **26:32-30:00** - opencode → [Hướng dẫn opencode](docs/06-opencode.md)

## Bắt đầu nhanh (5 Phút)

Muốn bắt đầu ngay? Đây là đường đi nhanh nhất:

```bash
# Cài đặt Gemini CLI (MIỄN PHÍ)
npm install -g @google/generative-ai-cli

# Tạo dự án test
mkdir my-ai-project
cd my-ai-project

# Khởi chạy Gemini
gemini

# Thử lệnh đầu tiên
# Hỏi: "Create a plan for learning Python"
```

[Tiếp tục hướng dẫn Bắt đầu nhanh đầy đủ →](docs/02-quickstart.md)

## Phân tích Giá cả

| Công cụ | Gói miễn phí | Tùy chọn trả phí | Tốt nhất cho |
|------|-----------|-------------|----------|
| **Gemini CLI** | Gói miễn phí hào phóng | Google One AI Premium ($20/tháng) | Bắt đầu, nghiên cứu |
| **Claude Code** | Không có gói miễn phí | Claude Pro ($20/tháng) | Công việc chuyên nghiệp, agents |
| **Codex** | Miễn phí giới hạn | ChatGPT Plus ($20/tháng) | Phân tích, tư duy cấp cao |
| **opencode** | Miễn phí (Grok/local models) | Gói đăng ký provider | Linh hoạt, thử nghiệm |

**Đề xuất của Chuck:** Bắt đầu với Gemini CLI (miễn phí), sau đó lấy Claude Pro nếu mày chỉ có thể chọn một gói trả phí.

## Liên kết Chính thức

- [Tài liệu Gemini CLI](https://ai.google.dev/gemini-api/docs/cli)
- [Tài liệu Claude Code](https://docs.anthropic.com/claude/docs/claude-code)
- [Tài liệu Codex](https://platform.openai.com/docs/tools/codex)
- [Repository opencode](https://github.com/stackblitz-labs/opencode)

## Lưu ý Bảo mật (từ video)

**Tin nhắn tài trợ TwinGate:** Nếu mày cho AI truy cập vào máy tính, hãy đảm bảo truy cập từ xa của mày được bảo mật đúng cách. VPN truyền thống cho quyền truy cập mạng đầy đủ - cân nhắc giải pháp zero-trust như TwinGate để kiểm soát chi tiết.

[Tìm hiểu về TwinGate](https://twingate.com/networkchuck)

## Ghi nhận

**Tạo bởi:** NetworkChuck
**Video:** [AI in the Terminal](https://youtu.be/MsQACpcuTkU)
**Hướng dẫn duy trì bởi:** Cộng đồng NetworkChuck

## Đóng góp

Tìm thấy lỗi? Muốn thêm workflow? Gửi pull request hoặc mở issue!

## Giấy phép

Hướng dẫn này được cung cấp miễn phí đi kèm video của NetworkChuck. Cảm thấy tự do sử dụng, chia sẻ và sửa đổi cho mục đích cá nhân và giáo dục.

---

**Sẵn sàng bắt đầu?** → [Điều kiện tiên quyết](docs/01-prerequisites.md)

**Có câu hỏi?** → [FAQ](docs/16-faq.md)

**Cần giúp đỡ?** → [Khắc phục sự cố](docs/15-troubleshooting.md)