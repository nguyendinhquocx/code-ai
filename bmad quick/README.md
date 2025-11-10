# Hướng Dẫn Cài Đặt BMAD-Quick

Phiên bản: 1.0
Mục đích: Phát triển nhanh các ứng dụng nhỏ, tiện ích và MVP trong 1–2 tuần

BMAD-Quick là gì?BMAD-Quick là phiên bản tinh gọn của phương pháp BMAD, được thiết kế đặc biệt để phát triển nhanh các ứng dụng nhỏ:

- Tiện ích web (máy tính, bộ chuyển đổi, công cụ)
- Ứng dụng năng suất đơn giản (todo list, ghi chú, kanban)
- Tiện ích mở rộng trình duyệt với chức năng tập trung
- Tiện ích Apps Script cho Google Workspace
- MVP và prototype để kiểm thử ý tưởng nhanh chóng
- Công cụ cá nhân giải quyết vấn đề cụ thể

**Thời gian tối đa**: 1–2 tuần
**Phạm vi**: Tối đa 3–5 tính năng cốt lõi
**Triết lý**: Giao hàng nhanh, lặp lại sau

---

### Các tệp tin đi kèm

```
bmad-quick/
├── bmad-quick-agent-config.md          # Định nghĩa và cấu hình các agent
├── bmad-quick-personas.md              # Định nghĩa tính cách của các agent  
├── bmad-quick-templates.md             # Mẫu tài liệu chuẩn
├── bmad-quick-tasks.md                 # Quy trình tác vụ cho từng agent
├── bmad-quick-knowledge-base.md        # Kiến thức về phương pháp và hướng dẫn chi tiết
├── bmad-quick-orchestrator-prompt.md   # Prompt chính cho orchestrator
└── README.md                           # File hướng dẫn này
```

---

### Hướng Dẫn Cài Đặt

#### Tùy Chọn 1: Claude Projects (Khuyến nghị)

1. **Tạo Project Mới trong Claude**:

   - Truy cập [Claude.ai](https://claude.ai)
   - Tạo project mới
   - Đặt tên project là "BMAD-Quick" hoặc tương tự
2. **Tải lên các tệp cấu hình**:

   - Upload toàn bộ 6 tệp `.md` vào project
   - Claude sẽ tự động lập chỉ mục (index) chúng làm kiến thức của project
3. **Thiết lập Custom Instructions**:

   - Sao chép toàn bộ nội dung từ `bmad-quick-orchestrator-prompt.md`
   - Dán vào phần **Custom Instructions** của project
   - Lưu project
4. **Bắt đầu sử dụng**:

   - Mở cuộc trò chuyện mới trong project
   - Gõ "chào" hoặc mô tả ý tưởng ứng dụng của mày
   - Agent sẽ hướng dẫn mày qua quy trình phát triển nhanh

---

#### Tùy Chọn 2: Custom GPT (OpenAI)

1. **Tạo Custom GPT**:

   - Truy cập OpenAI ChatGPT
   - Tạo GPT mới
2. **Tải lên Knowledge Files**:

   - Upload tất cả các tệp `.md` **trừ** `bmad-quick-orchestrator-prompt.md`
   - Thiết lập chúng làm knowledge base
3. **Thiết lập Instructions**:

   - Sao chép nội dung từ `bmad-quick-orchestrator-prompt.md`
   - Dán làm **GPT instructions**
4. **Cấu hình**:

   - Tên: `BMAD-Quick Developer`
   - Mô tả: `Orchestrator phát triển nhanh cho ứng dụng nhỏ và MVP`

---

#### Tùy Chọn 3: Nền tảng AI khác

- **Phương pháp copy-paste**:

  - Dùng `bmad-quick-orchestrator-prompt.md` làm prompt chính
  - Tham chiếu các tệp khác khi cần trong cuộc trò chuyện
- **Tải tệp từng cái**:

  - Khi chuyển agent, tải tệp persona/task tương ứng
  - Dùng knowledge base để tra cứu

---

### Cách Sử Dụng

#### Các lệnh nhanh

- `/help`              – Hiển thị danh sách lệnh và agent có sẵn
- `/quick-start`       – Bắt đầu quy trình đánh giá nhanh
- `/agent-list`        – Liệt kê tất cả các agent BMAD-Quick
- `/scope-check`       – Kiểm tra xem phạm vi có phù hợp với timeline 1–2 tuần không
- `/tech-rec`          – Nhận khuyến nghị tech stack nhanh

---

### Quy trình thông thường

1. **Bắt đầu**: Mô tả ý tưởng ứng dụng của mày
2. **Đánh giá**: Agent xác định BMAD-Quick có phù hợp không
3. **Lập kế hoạch (1–2 giờ)**:
   - **Quick Analyst**: Brainstorm tính năng (30 phút)
   - **Rapid PM**: Đặc tả tính năng chi tiết (60 phút)
4. **Thiết kế kỹ thuật (1–2 giờ)**:
   - **Quick Architect**: Đề xuất tech stack + thiết kế dữ liệu
5. **Triển khai (1–10 ngày)**:
   - **Rapid Developer**: Xây dựng từng tính năng

---

### Chuyển đổi agent

- `/analyst`    – Chuyển sang **Quick Analyst** (brainstorm tính năng)
- `/pm`         – Chuyển sang **Rapid PM** (đặc tả yêu cầu)
- `/architect`  – Chuyển sang **Quick Architect** (quyết định kỹ thuật)
- `/developer`  – Chuyển sang **Rapid Developer** (triển khai mã)
- `/exit`       – Quay lại **BMadQ Orchestrator**

---

### Các agent có sẵn

| Agent           | Tên         | Mục đích                                       | Thời gian phân bổ |
| --------------- | ------------ | ------------------------------------------------- | -------------------- |
| BMadQ           | Orchestrator | Quản lý phạm vi, điều phối các agent       | Xuyên suốt         |
| Quick Analyst   | QuickMary    | Brainstorm nhanh, vẽ user journey                | 30 phút             |
| Rapid PM        | QuickJohn    | Đặc tả tính năng, ưu tiên                  | 1 giờ               |
| Quick Architect | QuickFred    | Quyết định tech stack, kiến trúc đơn giản | 30–60 phút         |
| Rapid Developer | DevQuick     | Triển khai mã, triển khai sản phẩm           | 1–10 ngày          |

---

### Hướng dẫn timeline theo độ phức tạp ứng dụng

| Loại        | Ví dụ                       | Timeline   | Số tính năng                              |
| ------------ | ----------------------------- | ---------- | -------------------------------------------- |
| Đơn giản  | Máy tính, bộ chuyển đổi | 1–3 ngày | 3–4 tính năng cốt lõi                   |
| Tương tác | Ứng dụng todo, ghi chú     | 3–7 ngày | CRUD + lưu trữ                             |
| Phức tạp   | Bảng Kanban, extension       | 1–2 tuần | Nhiều tính năng + hoàn thiện giao diện |

---

### Dấu hiệu cảnh báo (quá phức tạp cho BMAD-Quick)

- Hơn 5 tính năng mức độ ưu tiên cao (P1)
- Cần hệ thống xác thực người dùng
- Cần cộng tác thời gian thực
- Logic nghiệp vụ phức tạp
- Tính năng đa người dùng
- Yêu cầu tuân thủ doanh nghiệp

---

### Khuyến nghị tech stack

#### Web Apps – Đơn giản

- **Frontend**: Vanilla JS hoặc framework quen thuộc
- **Lưu trữ**: LocalStorage
- **Triển khai**: Netlify, Vercel, GitHub Pages
- **Timeline**: 1–3 ngày

#### Web Apps – Tương tác

- **Frontend**: React/Vue (nếu quen)
- **Backend**: Node.js/Express hoặc serverless functions
- **Cơ sở dữ liệu**: Firebase, Supabase
- **Triển khai**: Railway, Render, Vercel
- **Timeline**: 3–7 ngày

#### Tiện ích mở rộng trình duyệt

- **Lõi**: Vanilla JS hoặc React (có build process đơn giản)
- **Lưu trữ**: Chrome Storage API
- **Manifest**: V3 (chuẩn hiện đại)
- **Timeline**: 3–7 ngày

#### Tiện ích Apps Script

- **Nền tảng**: Google Apps Script
- **Giao diện**: HTML Service
- **Dữ liệu**: Dùng Google Sheets làm cơ sở dữ liệu
- **Timeline**: 1–5 ngày

---

### Tiêu chuẩn chất lượng MVP (bắt buộc)

- Tất cả tính năng cốt lõi đều hoạt động
- Xử lý lỗi cơ bản
- Hoạt động trên nền tảng mục tiêu
- Đã triển khai và truy cập được
- Có tài liệu cơ bản (README)

### KHÔNG cần cho MVP

- Thiết kế UI/UX hoàn hảo
- Bộ test tự động toàn diện
- Tính năng bảo mật nâng cao
- Tối ưu khả năng mở rộng
- Kiến trúc cấp doanh nghiệp

---

### Tiêu chí thành công

#### Thành công phát triển

- **Timeline**: Hoàn thành trong 1–2 tuần
- **Phạm vi**: Tất cả tính năng P1 được triển khai
- **Chất lượng**: Chức năng cơ bản hoạt động ổn định
- **Triển khai**: Ứng dụng đã live và người dùng truy cập được

#### Thành công người dùng

- **Time to Value**: Người dùng nhận được giá trị trong vòng 5 phút
- **Core Journey**: Luồng sử dụng chính hoạt động trơn tru
- **Phản hồi**: Nhận phản hồi tích cực về tính năng cốt lõi
- **Sử dụng thực tế**: Người dùng mục tiêu thực sự dùng ứng dụng

---

### Khi nào nên chuyển sang Full BMAD?

Cân nhắc nâng cấp khi:

- Ứng dụng đã chứng minh được product-market fit
- Số lượng người dùng vượt quá use case đơn giản
- Tính năng phức tạp trở nên cần thiết
- Đội phát triển mở rộng hơn 2–3 người
- Cần tính năng doanh nghiệp
- Tiềm năng doanh thu đủ để biện minh cho đầu tư lớn hơn

---

### Tài liệu tham khảo

#### Các tệp cốt lõi

- **Agent Config**: Định nghĩa các agent và khả năng
- **Personas**: Tính cách chi tiết và cách tiếp cận của từng agent
- **Templates**: Định dạng chuẩn cho đặc tả và tài liệu
- **Tasks**: Quy trình từng bước cho mỗi agent
- **Knowledge Base**: Phương pháp đầy đủ và best practices

#### Tài nguyên bên ngoài

- **BMAD Method**: Phương pháp đầy đủ cho dự án phức tạp
- **Claude Projects**: [claude.ai/projects](https://claude.ai/projects) – trải nghiệm tốt nhất
- **Nền tảng triển khai**: Netlify, Vercel, Railway

---

### Khắc phục sự cố

#### Vấn đề thường gặp

- **Agent không tuân thủ nguyên tắc BMAD-Quick**:

  - Đảm bảo tất cả tệp cấu hình đã được upload đúng
  - Kiểm tra prompt orchestrator được dán chính xác
  - Dùng `/scope-check` để xác minh tuân thủ timeline
- **Phạm vi phình to (scope creep)**:

  - Dùng lệnh `/mvp-scope` để cắt giảm tính năng
  - Nhớ: tối đa 3–5 tính năng P1
  - Time-box nghiêm ngặt từng giai đoạn
- **Độ phức tạp kỹ thuật**:

  - Bám sát công nghệ quen thuộc
  - Dùng tech stack được khuyến nghị
  - Tránh over-engineering
- **Vượt timeline**:

  - Cắt tính năng trước khi gia hạn thời gian
  - Triển khai từng phần nếu cần
  - Đánh giá lại: có thể phạm vi quá lớn cho BMAD-Quick?

#### Nhận trợ giúp

- Dùng lệnh `/help` để xem hướng dẫn
- Xem lại knowledge base để hiểu sâu phương pháp
- Dùng `/scope-check` thường xuyên để kiểm soát phạm vi
- Thử chuyển agent để có góc nhìn mới

---

### Ví dụ phiên làm việc

> **Người dùng**: Tôi muốn xây dựng ứng dụng web theo dõi chi tiêu đơn giản
>
> **BMadQ**: Tuyệt! Để tao đánh giá xem có phù hợp với BMAD-Quick không...Nghe có vẻ hoàn hảo. Ứng dụng theo dõi chi tiêu đơn giản có thể xây trong 3–7 ngày với các tính năng cốt lõi như:
>
> - Thêm chi tiêu, phân loại, xem tổng, báo cáo cơ bản
>
> Bắt đầu với Quick Analyst để brainstorm nhanh. Sẵn sàng chưa? [Có/Không]
>
> **Người dùng**: Có
>
> **BMadQ**: Đang kích hoạt Quick Analyst — QuickMary...
>
> **QuickMary**: Chào! Tao là QuickMary, chuyên gia phân tích nhanh của mày. Giờ tao sẽ xác định các tính năng cốt lõi cho ứng dụng theo dõi chi tiêu...
> [Tiếp tục phiên brainstorm 30 phút]

---

### Ví dụ thực hành: Tiện ích Stopwatch & Countdown

**Mô tả dự án**

- Ý tưởng: Tiện ích mở rộng trình duyệt có stopwatch và đồng hồ đếm ngược
- Nguồn cảm hứng: [online-stopwatch.com](https://www.online-stopwatch.com/)
- Timeline mục tiêu: 5–7 ngày
- Độ phức tạp: Trung bình (ứng dụng tương tác)

#### Bước 1: Phân tích nhanh (30 phút)

**Vấn đề**:
Người dùng cần công cụ hẹn giờ nhanh mà không phải mở website mới, có thể truy cập từ bất kỳ tab nào.

**Người dùng mục tiêu**:

- Học sinh dùng kỹ thuật Pomodoro
- Nhân viên cần theo dõi thời gian làm việc
- Bất kỳ ai cần công cụ hẹn giờ tiện lợi

**Tính năng cốt lõi (P1)**:

- Stopwatch – Đếm thời gian từ 0 trở lên
- Countdown Timer – Đếm ngược từ thời gian đã đặt
- Nút Start/Pause/Reset – Điều khiển cơ bản
- Hiển thị thời gian rõ ràng
- Thông báo âm thanh khi đếm ngược kết thúc

**Luồng người dùng**:

1. Nhấp vào biểu tượng tiện ích
2. Chọn Stopwatch hoặc Countdown
3. (Countdown) Nhập thời gian
4. Nhấn Start
5. Có thể Pause/Resume/Reset
6. (Countdown) Nghe âm thanh khi hết giờ

#### Bước 2: Tech Stack (30 phút)

**Tech stack đề xuất**:

- Lõi: Vanilla JS (đơn giản, hiệu suất tốt)
- Giao diện: HTML + CSS (styling cơ bản)
- Lưu trữ: Chrome Storage API (lưu tùy chọn)
- Manifest: V3 (chuẩn hiện đại)
- Build: Không cần quy trình build phức tạp

**Cấu trúc dự án**:

```
stopwatch-extension/
├── manifest.json       # Cấu hình tiện ích
├── popup.html          # Giao diện chính
├── popup.js            # Logic hẹn giờ
├── popup.css           # CSS
├── icons/              # Biểu tượng tiện ích
│   ├── icon16.png
│   ├── icon48.png
│   └── icon128.png
└── sounds/             # Âm thanh thông báo
    └── alarm.mp3
```

#### Bước 3: Đặc tả tính năng (60 phút)

**Tính năng 1: Stopwatch**

- *User story*: Là người dùng, tôi muốn đo thời gian hoạt động để theo dõi năng suất
- *Tiêu chí chấp nhận*:
  - [ ] Hiển thị bắt đầu từ 00:00:00 (giờ:phút:giây)
  - [ ] Nút Start bắt đầu đếm
  - [ ] Nút Pause tạm dừng, Resume tiếp tục
  - [ ] Nút Reset đưa về 00:00:00
  - [ ] Cập nhật thời gian mỗi 10ms để mượt

**Tính năng 2: Countdown Timer**

- *User story*: Là người dùng, tôi muốn đặt hẹn giờ để được nhắc sau một khoảng thời gian
- *Tiêu chí chấp nhận*:
  - [ ] Ô nhập giờ, phút, giây
  - [ ] Bắt đầu đếm ngược từ thời gian đã đặt
  - [ ] Hiển thị đếm ngược về 00:00:00
  - [ ] Phát âm thanh + cảnh báo trực quan khi hết giờ
  - [ ] Chức năng Pause/Resume/Reset

**Tính năng 3: Chuyển tab**

- *User story*: Là người dùng, tôi muốn chuyển giữa stopwatch và countdown dễ dàng
- *Tiêu chí chấp nhận*:
  - [ ] 2 tab: "Stopwatch" và "Countdown"
  - [ ] Tab đang hoạt động có dấu hiệu trực quan
  - [ ] Chuyển tab không làm mất trạng thái timer đang chạy
  - [ ] Ghi nhớ tab được chọn gần nhất

**Tính năng 4: Cài đặt & Lưu trạng thái**

- *User story*: Là người dùng, tôi muốn cài đặt được lưu giữa các phiên
- *Tiêu chí chấp nhận*:
  - [ ] Lưu tab được chọn gần nhất
  - [ ] Lưu các mốc thời gian đếm ngược thường dùng
  - [ ] Tùy chọn bật/tắt âm thanh
  - [ ] Cài đặt vẫn giữ nguyên sau khi khởi động lại trình duyệt

#### Bước 4: Kế hoạch triển khai (5–7 ngày)

**Ngày 1: Cấu trúc cơ bản**

- [ ] Tạo `manifest.json` với quyền truy cập cần thiết
- [ ] Thiết kế layout cơ bản trong `popup.html` với 2 tab
- [ ] CSS cơ bản
- [ ] Tải tiện ích vào Chrome để test

**Ngày 2: Logic Stopwatch**

- [ ] Viết logic hẹn giờ bằng `setInterval`
- [ ] Chức năng Start/Pause/Reset
- [ ] Định dạng hiển thị (HH:MM:SS)
- [ ] Test stopwatch hoạt động

**Ngày 3: Logic Countdown**

- [ ] Validate dữ liệu nhập
- [ ] Logic đếm ngược
- [ ] Xử lý khi hết giờ
- [ ] Thông báo âm thanh cơ bản

**Ngày 4: Chuyển tab & Quản lý trạng thái**

- [ ] Giao diện chuyển tab
- [ ] Giữ trạng thái timer khi chuyển tab
- [ ] Tích hợp Chrome Storage
- [ ] Lưu cài đặt

**Ngày 5: Hoàn thiện & Test**

- [ ] Cải thiện UI/UX
- [ ] Âm thanh thông báo tốt hơn
- [ ] Xử lý lỗi
- [ ] Test trên nhiều trình duyệt

**Ngày 6–7: Tính năng cuối & Triển khai**

- [ ] Thiết kế biểu tượng đẹp
- [ ] Tùy chọn thời gian đếm ngược sẵn (5p, 10p, 25p Pomodoro)
- [ ] Phím tắt bàn phím (tùy chọn)
- [ ] Đóng gói để gửi lên Chrome Web Store

#### Quyết định thiết kế giao diện

- **Kích thước popup**: 300x400px
- **Điều hướng**: Tab ở trên cùng
- **Hiển thị**: Đồng hồ lớn ở trung tâm
- **Nút điều khiển**: Dưới cùng
- **Màu sắc**:
  - Chính: #2563eb (xanh dương)
  - Thành công: #059669 (xanh lá)
  - Cảnh báo: #dc2626 (đỏ)
  - Nền: #f8fafc (xám nhạt)
- **Phông chữ**:
  - Đồng hồ: Font monospace, kích cỡ lớn
  - Văn bản UI: Font hệ thống (Arial, sans-serif)

#### Các bước triển khai

**Test**:

- Tải tiện ích chưa đóng gói (unpacked)
- Test toàn bộ tính năng
- Test trên nhiều tab/cửa sổ

**Tài nguyên**:

- Tạo bộ biểu tượng (16x16, 48x48, 128x128)
- Tối ưu file âm thanh

**Chrome Web Store**:

- Nén toàn bộ tệp thành file ZIP
- Tạo tài khoản nhà phát triển
- Gửi tiện ích để duyệt

#### Tiêu chí thành công

**Phát triển thành công**:

- [ ] Hoàn thành trong 5–7 ngày
- [ ] Tất cả tính năng P1 hoạt động
- [ ] Không có lỗi nghiêm trọng
- [ ] Hiệu năng tốt (phản hồi <100ms)

**Người dùng thành công**:

- Độ chính xác hẹn giờ (sai số <1 giây/phút)
- Giao diện trực quan (người dùng mới hiểu ngay)
- Thông báo đáng tin cậy
- Thời gian tải nhanh (<500ms)

---

Đây là ví dụ đầy đủ về cách áp dụng phương pháp BMAD-Quick!

Mày có thể:

- Cài đặt BMAD-Quick theo hướng dẫn trên
- Thực hành với tiện ích stopwatch này
- Áp dụng cho các dự án khác mày muốn xây

Sẵn sàng bắt đầu chưa?
