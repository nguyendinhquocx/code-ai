# Hướng dẫn Bắt đầu Nhanh

Sẵn sàng với AI trong terminal trong **5 phút**.

## Chọn Đường đi của Mày

### Đường đi A: Bắt đầu Miễn phí (Gemini CLI)
**Tốt nhất cho:** Người mới dùng, người dùng tiết kiệm, thử nghiệm concept

### Đường đi B: Bắt đầu Power User (Claude Code)
**Tốt nhất cho:** Chuyên gia sẵn sàng cam kết, người dùng agents, workflows nghiêm túc

## Đường đi A: Bắt đầu Miễn phí (Gemini CLI)

### Bước 1: Cài đặt (30 giây)

**Linux / macOS / WSL:**
```bash
npm install -g @google/generative-ai-cli
```

**macOS (Homebrew):**
```bash
brew install gemini-cli
```

**Lỗi permission?** Thêm `sudo`:
```bash
sudo npm install -g @google/generative-ai-cli
```

### Bước 2: Tạo Project (10 giây)

```bash
mkdir ai-test-project
cd ai-test-project
```

### Bước 3: Khởi chạy & Login (1 phút)

```bash
gemini
```

**Lần chạy đầu tiên:**
1. Browser mở tự động
2. Đăng nhập với tài khoản Google (bất kỳ Gmail nào cũng được!)
3. Nhấp "Allow"
4. Quay lại terminal - mày đã vào!

### Bước 4: Task đầu tiên của Mày (2 phút)

**Thử cái này:**
```bash
> Làm sao để làm tách cà phê ngon nhất thế giới?
```

**Xem nó:**
- Tìm trên web
- Soạn thảo response
- Trả về kết quả

**Bây giờ thử cái này (phần ma thuật):**
```bash
> Nghiên cứu 5 phương pháp pha cà phê hàng đầu.
  Tạo tài liệu so sánh gọi là coffee-methods.md
```

**Gemini sẽ hỏi:** "Tạo file?" → Gõ `y`

**Kiểm tra:**
```bash
ls
# Mày sẽ thấy: coffee-methods.md

cat coffee-methods.md
# Nghiên cứu của mày, lưu local!
```

### Bước 5: Tạo Context File (1 phút)

**Game-changer:**
```bash
> /init
```

Gemini phân tích project của mày và tạo `gemini.md`

**Bây giờ exit và mở lại:**
```bash
exit
gemini
```

**Thử cái này:**
```bash
> Tiếp tục làm coffee project
```

**Nó nhớ!** Không cần giải thích lại.

### Đã Xong! (5 phút tổng cộng)

**Mày đã học được:**
- Gemini có thể tạo files
- Context files duy trì kiến thức
- Không cần giải thích lại project
- Mọi thứ được lưu local

**Các bước tiếp theo:**
- [Hướng dẫn Gemini CLI đầy đủ](03-gemini-cli.md)
- [Hiểu về Context Files](07-context-files.md)

---

## Đường đi B: Bắt đầu Power User (Claude Code)

**Yêu cầu:**
- Claude Pro subscription ($20/tháng)
- Node.js đã cài

### Bước 1: Cài đặt (30 giây)

```bash
npm install -g @anthropic-ai/claude-code
```

**Lỗi permission?**
```bash
sudo npm install -g @anthropic-ai/claude-code
```

### Bước 2: Tạo Project (10 giây)

```bash
mkdir my-project
cd my-project
```

### Bước 3: Khởi chạy & Xác thực (1 phút)

```bash
claude
```

**Lần chạy đầu tiên:**
1. Browser mở để xác thực
2. Đăng nhập với tài khoản Claude Pro
3. Phê duyệt truy cập directory
4. Quay lại terminal

### Bước 4: Tạo Context File (30 giây)

```bash
> /init
```

Claude phân tích directory và tạo `claude.md`

### Bước 5: Tạo Agent đầu tiên của Mày (2 phút)

**Đây là lúc nó trở nên mạnh mẽ:**

```bash
> /agents
```

**Chọn:** "Create new agent"

**Chọn:** "Project-specific agent"

**Đặt tên:** `research-expert`

**Mô tả:**
```
Mày là chuyên gia nghiên cứu. Khi được đưa chủ đề:
1. Tìm kiếm nguồn uy tín
2. Tổng hợp findings chính
3. Tạo summaries có cấu trúc
```

**Cấu hình:**
- Tools: Tất cả tools
- Model: Sonnet

**Nhấn Enter** để lưu

### Bước 6: Triển khai Agent của Mày (1 phút)

```bash
> @research-expert
  Nghiên cứu zero-trust network architecture.
  Tạo tài liệu summary.
```

**Xem agent của mày làm việc:**
- Context window tươi mới (200K tokens!)
- Nghiên cứu độc lập
- Trả về kết quả

**Kiểm tra file:**
```bash
ls
cat zero-trust-summary.md
```

### Đã Xong! (5 phút tổng cộng)

**Mày đã học được:**
- Claude Code cơ bản
- Tạo agent
- Duy trì context
- Triển khai agent

**Các bước tiếp theo:**
- [Hướng dẫn Claude Code đầy đủ](04-claude-code.md)
- [AI Agents chuyên sâu](09-agents.md)
- [Hướng dẫn Output Styles](10-customization.md)

---

## So sánh Nhanh

| Tính năng | Gemini CLI | Claude Code |
|---------|------------|-------------|
| **Chi phí** | Miễn phí | $20/tháng |
| **Thời gian Setup** | 2 phút | 3 phút |
| **Tính năng tốt nhất** | Web research | AI agents |
| **Context File** | gemini.md | claude.md |
| **Độ khó học** | Dễ | Trung bình |

**Đề xuất của Chuck:**
> "Bắt đầu với Gemini CLI. Nó MIỄN PHÍ. Nhưng nếu mày có thể trả tiền cho một subscription, Claude Pro là cái tao sẽ chọn."

---

## Vấn đề Phổ biến Lần đầu

### "Command not found"

```bash
# Reload shell của mày
source ~/.bashrc
# hoặc
source ~/.zshrc

# Hoặc đóng và mở lại terminal
```

### "Permission denied"

```bash
# Chạy với sudo
sudo npm install -g [package-name]
```

### "Node.js not found"

Cài từ [nodejs.org](https://nodejs.org/) (phiên bản LTS)

### Context file không load

```bash
# Verify mày đang ở đúng directory
pwd
ls gemini.md

# Tạo lại nếu cần
> /init
```

---

## Thử Gì Tiếp theo

### Tasks cho Người mới
1. **Task nghiên cứu:** Hỏi Gemini nghiên cứu chủ đề và tạo summary
2. **Task viết:** Hỏi Claude viết blog intro
3. **Tổ chức file:** Tạo cấu trúc project và để AI populate nó

### Tasks Trung cấp
4. **Tạo agent:** Làm agent chuyên biệt cho công việc của mày
5. **Work multi-session:** Exit, mở lại, verify context loads
6. **File manipulation:** Cập nhật files có sẵn với help của AI

### Tasks Nâng cao
7. **Nhiều AI:** Chạy Gemini và Claude đồng thời
8. **Context syncing:** Giữ gemini.md và claude.md đồng bộ
9. **Custom output style:** Tạo personality cho công việc của mày

---

## Thử thách 5 Phút

### Thử thách 1: Coffee Research (Gemini)
**Mục tiêu:** Nghiên cứu, tạo file, reload context

```bash
mkdir coffee-challenge
cd coffee-challenge
gemini

> Nghiên cứu French press vs pour-over coffee.
  Tạo comparison-chart.md

> /init

exit
gemini

> Thêm recommendation section vào comparison-chart.md
  dựa trên taste preferences
```

**Thành công nếu:** File được tạo và AI nhớ project mà không cần giải thích lại

### Thử thách 2: Agent Deploy (Claude)
**Mục tiêu:** Tạo và dùng agent

```bash
mkdir agent-challenge
cd agent-challenge
claude

> /agents
# Tạo "homelab-helper" agent
# Instructions: "Expert trong homelab hardware và networking"

> @homelab-helper
  NAS ngân sách tốt nhất cho homelab là gì?
```

**Thành công nếu:** Agent trả lời với recommendations chi tiết

### Thử thách 3: Multi-Tool (Nâng cao)
**Mục tiêu:** Dùng Gemini và Claude cùng nhau

```bash
mkdir multi-tool-challenge
cd multi-tool-challenge

# Terminal 1:
gemini
> Nghiên cứu top 3 text editors
> /init

# Terminal 2:
claude
> /init
> Đọc research và viết blog post intro
```

**Thành công nếu:** Claude đọc file research của Gemini

---

## Các bước Tiếp theo theo Sở thích

### Tao muốn dùng AI cho viết
→ [Productivity Workflows](11-productivity-workflows.md)
→ [Hướng dẫn Output Styles](10-customization.md)

### Tao muốn dùng AI cho code
→ [Development Workflows](12-development-workflows.md)
→ [Hướng dẫn Claude Code](04-claude-code.md)

### Tao muốn dùng AI cho công việc IT/homelab
→ [Homelab Workflows](13-homelab-workflows.md)
→ [Hướng dẫn AI Agents](09-agents.md)

### Tao muốn hiểu concepts sâu sắc
→ [Context Files Giải thích](07-context-files.md)
→ [Multi-Tool Workflow](08-multi-tool-workflow.md)

---

## Câu hỏi?

**"Nên bắt đầu với tool nào?"**
- Miễn phí: Gemini CLI
- Chuyên nghiệp: Claude Code
- Thử nghiệm: opencode

**"Tao có cần cả ba không?"**
- Không! Bắt đầu với một
- Thêm các tool khác khi thấy lợi ích
- Chuck dùng cả ba cho strengths khác nhau

**"Cái này tốn bao nhiêu?"**
- Gemini CLI: MIỄN PHÍ
- Claude Code: $20/tháng (Claude Pro)
- opencode: Miễn phí (Grok) hoặc various providers

**"Cái này chỉ dành cho developer?"**
- KHÔNG! Chuck dùng nó cho video scripts
- Hoạt động cho viết, nghiên cứu, lập kế hoạch, bất kỳ text work nào
- Coding chỉ là một use case

---

**Sẵn sàng dive sâu hơn?** → [Hướng dẫn Điều hướng Full](../README.md)

**Có vấn đề?** → [Khắc phục sự cố](15-troubleshooting.md)

**Muốn commands?** → [Bảng Cheat](14-cheat-sheet.md)

---

[← Quay lại Điều kiện tiên quyết](01-prerequisites.md) | [Tiếp theo: Gemini CLI →](03-gemini-cli.md)