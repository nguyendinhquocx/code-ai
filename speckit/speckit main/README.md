# Tài liệu Spec Kit

## Spec Kit là gì?

Spec Kit là một bộ công cụ mã nguồn mở giúp bạn xây dựng phần mềm chất lượng cao nhanh hơn. Thay vì phải "vibe coding" từng phần từ đầu, Spec Kit cho phép bạn tập trung vào các kịch bản sản phẩm và kết quả có thể dự đoán trước.

[![Phiên bản phát hành](https://github.com/github/spec-kit/actions/workflows/release.yml/badge.svg)](https://github.com/github/spec-kit/actions/workflows/release.yml)  
[![Số sao trên GitHub](https://img.shields.io/github/stars/github/spec-kit?style=social)](https://github.com/github/spec-kit)  
[![Giấy phép](https://img.shields.io/github/license/github/spec-kit)](./LICENSE)  
[![Tài liệu](https://img.shields.io/badge/docs-GitHub_Pages-blue)](https://github.com/github/spec-kit)

## Mục lục

- [Spec-Driven Development là gì?](#spec-driven-development-là-gì)
- [Bắt đầu nhanh](#bắt-đầu-nhanh)
- [Tổng quan bằng video](#tổng-quan-bằng-video)
- [Các AI Agent được hỗ trợ](#các-ai-agent-được-hỗ-trợ)
- [Tham chiếu CLI Specify](#tham-chiếu-cli-specify)
- [Triết lý cốt lõi](#triết-lý-cốt-lõi)
- [Các giai đoạn phát triển](#các-giai-đoạn-phát-triển)
- [Mục tiêu thử nghiệm](#mục-tiêu-thử-nghiệm)
- [Yêu cầu tiên quyết](#yêu-cầu-tiên-quyết)
- [Tìm hiểu thêm](#tìm-hiểu-thêm)
- [Quy trình chi tiết](#quy-trình-chi-tiết)
- [Khắc phục sự cố](#khắc-phục-sự-cố)
- [Người duy trì](#người-duy-trì)
- [Hỗ trợ](#hỗ-trợ)
- [Lời cảm ơn](#lời-cảm-ơn)
- [Giấy phép](#giấy-phép)

---

## Spec-Driven Development là gì?

Spec-Driven Development (Phát triển hướng đặc tả) đảo ngược cách làm truyền thống trong phát triển phần mềm. Trong nhiều thập kỷ, mã nguồn luôn là trung tâm — đặc tả chỉ là giàn giáo, được dựng lên rồi vứt đi ngay khi “công việc thật sự” là viết code bắt đầu. Spec-Driven Development thay đổi điều đó: **đặc tả trở thành thực thi được**, trực tiếp sinh ra các triển khai hoạt động thay vì chỉ đóng vai trò định hướng.

---

## Bắt đầu nhanh

### 1. Cài đặt Specify CLI

Chọn phương thức cài đặt phù hợp:

#### Tùy chọn 1: Cài đặt cố định (Khuyến nghị)

Cài một lần, dùng mọi nơi:

```bash
uv tool install specify-cli --from git+https://github.com/github/spec-kit.git
```

Sau đó dùng trực tiếp:

```bash
specify init <TÊN_DỰ_ÁN>
specify check
```

Để nâng cấp:

```bash
uv tool install specify-cli --force --from git+https://github.com/github/spec-kit.git
```

#### Tùy chọn 2: Dùng một lần

Chạy trực tiếp mà không cần cài:

```bash
uvx --from git+https://github.com/github/spec-kit.git specify init <TÊN_DỰ_ÁN>
```

**Lợi ích của cài đặt cố định:**

- Công cụ luôn có sẵn trong `PATH`
- Không cần tạo alias shell
- Quản lý công cụ tốt hơn với `uv tool list`, `uv tool upgrade`, `uv tool uninstall`
- Cấu hình shell sạch hơn

### 2. Thiết lập nguyên tắc dự án

Mở AI assistant trong thư mục dự án. Các lệnh `/speckit.*` sẽ khả dụng trong assistant.

Dùng lệnh `/speckit.constitution` để tạo nguyên tắc điều hành và hướng dẫn phát triển cho dự án — những nguyên tắc này sẽ định hướng mọi hoạt động phát triển tiếp theo.

```text
/speckit.constitution Tạo các nguyên tắc tập trung vào chất lượng mã nguồn, tiêu chuẩn kiểm thử, tính nhất quán trải nghiệm người dùng và yêu cầu hiệu năng.
```

### 3. Tạo đặc tả

Dùng lệnh `/speckit.specify` để mô tả những gì bạn muốn xây dựng. Tập trung vào **"cái gì"** và **"tại sao"**, đừng lo về stack công nghệ.

```text
/speckit.specify Xây dựng một ứng dụng giúp tôi tổ chức ảnh thành các album riêng biệt. Các album được nhóm theo ngày và có thể sắp xếp lại bằng cách kéo-thả trên trang chính. Album không bao giờ lồng vào nhau. Trong mỗi album, ảnh được xem trước dưới dạng giao diện lưới.
```

### 4. Lập kế hoạch triển khai kỹ thuật

Dùng lệnh `/speckit.plan` để khai báo stack công nghệ và lựa chọn kiến trúc.

```text
/speckit.plan Ứng dụng dùng Vite với số lượng thư viện tối thiểu. Ưu tiên dùng HTML, CSS và JavaScript thuần. Ảnh không được tải lên đâu cả, metadata được lưu trong cơ sở dữ liệu SQLite cục bộ.
```

### 5. Phân rã thành các nhiệm vụ

Dùng `/speckit.tasks` để tạo danh sách nhiệm vụ có thể thực hiện từ kế hoạch triển khai.

```text
/speckit.tasks
```

### 6. Triển khai

Dùng `/speckit.implement` để thực thi tất cả các nhiệm vụ và xây dựng tính năng theo kế hoạch.

```text
/speckit.implement
```

Để xem hướng dẫn từng bước chi tiết, hãy xem [hướng dẫn đầy đủ](./spec-driven.md).

---

## Tổng quan bằng video

Muốn xem Spec Kit hoạt động thực tế? Xem [video tổng quan](https://www.youtube.com/watch?v=a9eR1xsfvHg&pp=0gcJCckJAYcqIYzv)!

---

## Các AI Agent được hỗ trợ

| Agent                     | Hỗ trợ | Ghi chú |
|--------------------------|--------|--------|
| Claude Code              | ✅     |        |
| GitHub Copilot           | ✅     |        |
| Gemini CLI               | ✅     |        |
| Cursor                   | ✅     |        |
| Qwen Code                | ✅     |        |
| opencode                 | ✅     |        |
| Windsurf                 | ✅     |        |
| Kilo Code                | ✅     |        |
| Auggie CLI               | ✅     |        |
| CodeBuddy CLI            | ✅     |        |
| Roo Code                 | ✅     |        |
| Codex CLI                | ✅     |        |
| Amazon Q Developer CLI   | ⚠️     | Không hỗ trợ tham số tùy chỉnh cho lệnh slash. |
| Amp                      | ✅     |        |

---

## Tham chiếu CLI Specify

Lệnh `specify` hỗ trợ các tùy chọn sau:

### Các lệnh

| Lệnh      | Mô tả |
|-----------|-------|
| `init`    | Khởi tạo dự án Specify mới từ template mới nhất |
| `check`   | Kiểm tra các công cụ đã cài (git, claude, gemini, code/code-insiders, cursor-agent, windsurf, qwen, opencode, codex) |

### Các tham số và tùy chọn của `specify init`

| Tham số/Tùy chọn        | Loại    | Mô tả |
|------------------------|---------|-------|
| `<tên-dự-án>`          | Tham số | Tên thư mục dự án mới (bắt buộc nếu không dùng `--here`, hoặc dùng `.` cho thư mục hiện tại) |
| `--ai`                 | Tùy chọn | AI assistant để dùng: `claude`, `gemini`, `copilot`, `cursor-agent`, `qwen`, `opencode`, `codex`, `windsurf`, `kilocode`, `auggie`, `roo`, `codebuddy`, `amp`, hoặc `q` |
| `--script`             | Tùy chọn | Phiên bản script: `sh` (bash/zsh) hoặc `ps` (PowerShell) |
| `--ignore-agent-tools` | Cờ      | Bỏ qua kiểm tra các công cụ AI như Claude Code |
| `--no-git`             | Cờ      | Bỏ qua khởi tạo kho git |
| `--here`               | Cờ      | Khởi tạo dự án trong thư mục hiện tại thay vì tạo thư mục mới |
| `--force`              | Cờ      | Ép ghi đè khi khởi tạo trong thư mục hiện tại (bỏ qua xác nhận) |
| `--skip-tls`           | Cờ      | Bỏ qua xác minh SSL/TLS (không khuyến nghị) |
| `--debug`              | Cờ      | Bật log gỡ lỗi chi tiết |
| `--github-token`       | Tùy chọn | Token GitHub cho các yêu cầu API (hoặc đặt biến môi trường `GH_TOKEN`/`GITHUB_TOKEN`) |

### Ví dụ

```bash
# Khởi tạo dự án cơ bản
specify init my-project

# Khởi tạo với AI cụ thể
specify init my-project --ai claude

# Khởi tạo với hỗ trợ Cursor
specify init my-project --ai cursor-agent

# Khởi tạo với Windsurf
specify init my-project --ai windsurf

# Khởi tạo với Amp
specify init my-project --ai amp

# Dùng script PowerShell (Windows/cross-platform)
specify init my-project --ai copilot --script ps

# Khởi tạo trong thư mục hiện tại
specify init . --ai copilot
# hoặc dùng cờ --here
specify init --here --ai copilot

# Ép ghi đè vào thư mục hiện tại (không rỗng) mà không hỏi
specify init . --force --ai copilot
# hoặc
specify init --here --force --ai copilot

# Bỏ qua khởi tạo git
specify init my-project --ai gemini --no-git

# Bật debug để gỡ lỗi
specify init my-project --ai claude --debug

# Dùng token GitHub (hữu ích trong môi trường doanh nghiệp)
specify init my-project --ai claude --github-token ghp_your_token_here

# Kiểm tra yêu cầu hệ thống
specify check
```

### Các lệnh slash khả dụng

Sau khi chạy `specify init`, AI coding agent của bạn sẽ có quyền truy cập các lệnh slash sau để phát triển có cấu trúc:

#### Lệnh cốt lõi

| Lệnh                    | Mô tả |
|------------------------|-------|
| `/speckit.constitution`| Tạo hoặc cập nhật nguyên tắc điều hành và hướng dẫn phát triển dự án |
| `/speckit.specify`     | Định nghĩa những gì bạn muốn xây dựng (yêu cầu và câu chuyện người dùng) |
| `/speckit.plan`        | Tạo kế hoạch triển khai kỹ thuật với stack công nghệ bạn chọn |
| `/speckit.tasks`       | Sinh danh sách nhiệm vụ có thể thực hiện |
| `/speckit.implement`   | Thực thi tất cả các nhiệm vụ để xây dựng tính năng theo kế hoạch |

#### Lệnh bổ sung

| Lệnh                  | Mô tả |
|----------------------|-------|
| `/speckit.clarify`   | Làm rõ các vùng chưa được đặc tả đầy đủ (khuyến nghị dùng trước `/speckit.plan`; trước đây là `/quizme`) |
| `/speckit.analyze`   | Phân tích tính nhất quán và độ phủ giữa các tài liệu (chạy sau `/speckit.tasks`, trước `/speckit.implement`) |
| `/speckit.checklist` | Sinh checklist chất lượng tùy chỉnh để xác thực tính đầy đủ, rõ ràng và nhất quán của yêu cầu (giống như "unit test cho tiếng Anh") |

### Biến môi trường

| Biến                  | Mô tả |
|----------------------|-------|
| `SPECIFY_FEATURE`    | Ghi đè phát hiện tính năng cho kho không phải Git. Đặt thành tên thư mục tính năng (ví dụ: `001-photo-albums`) để làm việc trên tính năng cụ thể khi không dùng nhánh Git. **Phải được đặt trong ngữ cảnh của agent bạn đang dùng trước khi dùng `/speckit.plan` hoặc các lệnh tiếp theo. |

---

## Triết lý cốt lõi

Spec-Driven Development là một quy trình có cấu trúc nhấn mạnh vào:

- **Phát triển hướng ý định**: đặc tả định nghĩa **"cái gì"** trước khi định nghĩa **"như thế nào"**
- **Tạo đặc tả phong phú** bằng cách dùng các rào cản (guardrails) và nguyên tắc tổ chức
- **Tinh chỉnh đa bước** thay vì sinh mã một lần từ prompt
- **Phụ thuộc mạnh vào khả năng tiên tiến** của mô hình AI để diễn giải đặc tả

---

## Các giai đoạn phát triển

| Giai đoạn                     | Trọng tâm                | Hoạt động chính |
|------------------------------|--------------------------|-----------------|
| Phát triển 0-to-1 ("Greenfield") | Sinh từ đầu              | Bắt đầu từ yêu cầu cấp cao → sinh đặc tả → lên kế hoạch → xây dựng ứng dụng sẵn sàng sản xuất |
| Khám phá sáng tạo             | Triển khai song song     | Khám phá nhiều giải pháp → hỗ trợ nhiều stack & kiến trúc → thử nghiệm mẫu UX |
| Nâng cấp lặp ("Brownfield")   | Hiện đại hóa hệ cũ       | Thêm tính năng lặp → hiện đại hóa hệ thống cũ → thích nghi quy trình |

---

## Mục tiêu thử nghiệm

Nghiên cứu và thử nghiệm của chúng tôi tập trung vào:

- **Độc lập công nghệ**: Tạo ứng dụng bằng nhiều stack khác nhau; kiểm chứng giả thuyết rằng Spec-Driven Development là **quy trình**, không phụ thuộc vào công nghệ, ngôn ngữ hay framework cụ thể.
- **Ràng buộc doanh nghiệp**: Chứng minh khả năng phát triển ứng dụng trọng yếu; tích hợp ràng buộc tổ chức (cloud, stack, quy trình kỹ thuật); hỗ trợ hệ thống thiết kế và yêu cầu tuân thủ doanh nghiệp.
- **Phát triển lấy người dùng làm trung tâm**: Xây dựng ứng dụng cho nhiều nhóm người dùng và sở thích khác nhau; hỗ trợ nhiều cách tiếp cận phát triển (từ vibe-coding đến phát triển AI-native).
- **Quy trình sáng tạo & lặp**: Kiểm chứng khái niệm khám phá triển khai song song; cung cấp workflow phát triển tính năng lặp mạnh mẽ; mở rộng quy trình để xử lý nâng cấp và hiện đại hóa.

---

## Yêu cầu tiên quyết

- Linux / macOS / Windows
- Một [AI coding agent được hỗ trợ](#các-ai-agent-được-hỗ-trợ)
- [uv](https://docs.astral.sh/uv/) để quản lý gói
- [Python 3.11+](https://www.python.org/downloads/)
- [Git](https://git-scm.com/downloads)

Nếu gặp sự cố với agent, vui lòng mở issue để chúng tôi cải thiện tích hợp.

---

## Tìm hiểu thêm

- [Phương pháp Spec-Driven Development đầy đủ](./spec-driven.md) – Phân tích sâu quy trình
- [Hướng dẫn từng bước chi tiết](#quy-trình-chi-tiết) – Hướng dẫn triển khai

---

## Quy trình chi tiết

Bạn có thể dùng Specify CLI để khởi tạo dự án, công cụ sẽ tự động đưa các tài liệu cần thiết vào môi trường của bạn:

```bash
specify init <tên_dự_án>
```

Hoặc khởi tạo trong thư mục hiện tại:

```bash
specify init .
# hoặc dùng cờ --here
specify init --here
# Bỏ qua xác nhận khi thư mục đã có file
specify init . --force
# hoặc
specify init --here --force
```

Bạn sẽ được hỏi chọn AI agent. Bạn cũng có thể chỉ định trực tiếp:

```bash
specify init <tên_dự_án> --ai claude
specify init <tên_dự_án> --ai gemini
specify init <tên_dự_án> --ai copilot

# Hoặc trong thư mục hiện tại:
specify init . --ai claude
specify init . --ai codex

# hoặc dùng --here
specify init --here --ai claude
specify init --here --ai codex

# Ép ghi đè vào thư mục hiện tại không rỗng
specify init . --force --ai claude
# hoặc
specify init --here --force --ai claude
```

CLI sẽ kiểm tra xem bạn đã cài Claude Code, Gemini CLI, Cursor CLI, Qwen CLI, opencode, Codex CLI hoặc Amazon Q Developer CLI chưa. Nếu chưa, hoặc bạn muốn lấy template mà không kiểm tra công cụ, dùng `--ignore-agent-tools`:

```bash
specify init <tên_dự_án> --ai claude --ignore-agent-tools
```

### BƯỚC 1: Thiết lập nguyên tắc dự án

Vào thư mục dự án và chạy AI agent (ví dụ: `claude`).

Bạn sẽ biết mọi thứ đã được cấu hình đúng nếu thấy các lệnh `/speckit.constitution`, `/speckit.specify`, `/speckit.plan`, `/speckit.tasks`, và `/speckit.implement` khả dụng.

Bước đầu tiên nên là thiết lập **nguyên tắc điều hành** bằng lệnh:

```text
/speckit.constitution Tạo các nguyên tắc tập trung vào chất lượng mã nguồn, tiêu chuẩn kiểm thử, tính nhất quán trải nghiệm người dùng và yêu cầu hiệu năng. Bao gồm hướng dẫn cách các nguyên tắc này định hướng quyết định kỹ thuật và lựa chọn triển khai.
```

Bước này tạo hoặc cập nhật file `.specify/memory/constitution.md` — chứa các nguyên tắc nền tảng mà AI agent sẽ tham chiếu trong suốt quá trình đặc tả, lập kế hoạch và triển khai.

### BƯỚC 2: Tạo đặc tả dự án

Sau khi có nguyên tắc, bạn có thể tạo đặc tả chức năng. Dùng lệnh `/speckit.specify` và cung cấp yêu cầu cụ thể.

> **QUAN TRỌNG**: Hãy mô tả **rõ ràng nhất có thể** về cái bạn muốn xây dựng và **tại sao**. Đừng tập trung vào stack công nghệ ở bước này.

**Ví dụ prompt:**

> Phát triển Taskify, một nền tảng năng suất nhóm. Ứng dụng cho phép người dùng tạo dự án, thêm thành viên, giao nhiệm vụ, bình luận và di chuyển nhiệm vụ giữa các bảng theo kiểu Kanban. Trong giai đoạn đầu cho tính năng này, gọi là "Tạo Taskify", hãy có nhiều người dùng nhưng được khai báo trước — cụ thể là 5 người dùng: 1 product manager và 4 engineer. Tạo 3 dự án mẫu. Dùng các cột Kanban chuẩn: "To Do", "In Progress", "In Review", và "Done". Ứng dụng **không có đăng nhập** vì đây chỉ là bản thử nghiệm đầu tiên để đảm bảo các tính năng cơ bản hoạt động.  
>  
> Trên giao diện, mỗi thẻ nhiệm vụ phải cho phép:  
> - Thay đổi trạng thái giữa các cột  
> - Bình luận không giới hạn  
> - Gán cho một trong các người dùng hợp lệ  
>  
> Khi khởi động Taskify, người dùng sẽ thấy danh sách 5 người dùng để chọn. Không cần mật khẩu. Khi chọn người dùng, họ vào giao diện chính — hiển thị danh sách dự án. Khi chọn dự án, họ mở bảng Kanban cho dự án đó, thấy các cột và có thể kéo-thả thẻ giữa các cột. Các thẻ được gán cho **người dùng hiện tại** sẽ có màu khác để dễ nhận biết.  
>  
> Người dùng có thể **sửa/xóa** bình luận **do chính họ** tạo, nhưng **không thể** sửa/xóa bình luận của người khác.

Sau khi nhập prompt, AI (ví dụ: Claude Code) sẽ bắt đầu quy trình lập kế hoạch và soạn đặc tả, đồng thời kích hoạt các script tích hợp để thiết lập kho.

Khi hoàn tất, bạn sẽ có:
- Một nhánh mới (ví dụ: `001-create-taskify`)
- Một đặc tả mới trong thư mục `specs/001-create-taskify`

Đặc tả sẽ chứa các câu chuyện người dùng và yêu cầu chức năng theo mẫu.

Cấu trúc thư mục lúc này:

```
└── .specify
    ├── memory
    │   └── constitution.md
    ├── scripts
    │   ├── check-prerequisites.sh
    │   ├── common.sh
    │   ├── create-new-feature.sh
    │   ├── setup-plan.sh
    │   └── update-claude-md.sh
    ├── specs
    │   └── 001-create-taskify
    │       └── spec.md
    └── templates
        ├── plan-template.md
        ├── spec-template.md
        └── tasks-template.md
```

### BƯỚC 3: Làm rõ đặc tả chức năng (bắt buộc trước khi lập kế hoạch)

Sau khi có đặc tả cơ sở, hãy làm rõ các yêu cầu chưa được ghi nhận đầy đủ trong lần đầu.

Bạn **nên chạy quy trình làm rõ có cấu trúc** trước khi tạo kế hoạch kỹ thuật để giảm công việc làm lại sau này.

**Thứ tự ưu tiên:**
1. Dùng `/speckit.clarify` (có cấu trúc) — đặt câu hỏi tuần tự, dựa trên độ phủ, và ghi lại câu trả lời vào phần Clarifications.
2. (Tùy chọn) Tiếp tục tinh chỉnh bằng prompt tự do nếu vẫn còn mơ hồ.

Nếu bạn **cố ý muốn bỏ qua bước làm rõ** (ví dụ: prototype thử nghiệm), hãy nói rõ để AI không chặn vì thiếu thông tin.

**Ví dụ prompt tinh chỉnh tự do (sau `/speckit.clarify` nếu cần):**

> Mỗi dự án mẫu hoặc dự án tạo ra phải có số lượng nhiệm vụ ngẫu nhiên từ 5 đến 15, phân bố ngẫu nhiên vào các trạng thái hoàn thành khác nhau. Đảm bảo mỗi dự án có ít nhất một nhiệm vụ ở mỗi trạng thái.

Bạn cũng nên yêu cầu AI **xác thực Checklist Đánh giá & Chấp nhận**, tích vào các mục đã đáp ứng yêu cầu, để trống các mục chưa đạt. Dùng prompt:

> Đọc checklist đánh giá và chấp nhận, tích vào từng mục nếu đặc tả tính năng đáp ứng tiêu chí. Để trống nếu không.

Hãy tận dụng tương tác với AI để làm rõ và đặt câu hỏi — **đừng coi nỗ lực đầu tiên là cuối cùng**.

### BƯỚC 4: Sinh kế hoạch

Giờ bạn có thể cụ thể hóa stack công nghệ và yêu cầu kỹ thuật. Dùng lệnh `/speckit.plan` với prompt như:

> Chúng ta sẽ xây dựng bằng .NET Aspire, dùng Postgres làm cơ sở dữ liệu. Giao diện dùng Blazor Server với bảng Kanban kéo-thả và cập nhật thời gian thực. Cần có REST API cho: projects, tasks và notifications.

Kết quả sẽ bao gồm nhiều tài liệu chi tiết triển khai, cấu trúc thư mục như sau:

```
.
├── CLAUDE.md
├── memory
│   └── constitution.md
├── scripts
│   ├── check-prerequisites.sh
│   ├── common.sh
│   ├── create-new-feature.sh
│   ├── setup-plan.sh
│   └── update-claude-md.sh
├── specs
│   └── 001-create-taskify
│       ├── contracts
│       │   ├── api-spec.json
│       │   └── signalr-spec.md
│       ├── data-model.md
│       ├── plan.md
│       ├── quickstart.md
│       ├── research.md
│       └── spec.md
└── templates
    ├── CLAUDE-template.md
    ├── plan-template.md
    ├── spec-template.md
    └── tasks-template.md
```

Kiểm tra file `research.md` để đảm bảo stack công nghệ đúng theo hướng dẫn. Nếu có thành phần nào sai, yêu cầu AI điều chỉnh. Bạn cũng có thể yêu cầu AI nghiên cứu sâu hơn về stack (đặc biệt với công nghệ thay đổi nhanh như .NET Aspire):

> Tôi muốn bạn xem lại kế hoạch triển khai và chi tiết triển khai, tìm các khu vực cần nghiên cứu thêm vì .NET Aspire thay đổi rất nhanh. Với các khu vực cần nghiên cứu, hãy cập nhật tài liệu research với phiên bản cụ thể chúng ta sẽ dùng trong Taskify, và tạo các nhiệm vụ nghiên cứu song song để làm rõ chi tiết từ web.

Nếu AI bị "kẹt" khi nghiên cứu sai hướng, hãy dẫn dắt:

> Tôi nghĩ cần chia nhỏ thành các bước. Đầu tiên, liệt kê các nhiệm vụ triển khai mà bạn không chắc hoặc cần nghiên cứu thêm. Sau đó, với mỗi nhiệm vụ đó, hãy tạo một nhiệm vụ nghiên cứu riêng biệt để chúng ta nghiên cứu **cụ thể** từng vấn đề. Tôi thấy bạn đang nghiên cứu .NET Aspire nói chung — điều đó quá chung chung và không giúp ích cho Taskify.

> **Lưu ý**: AI có thể quá nhiệt tình và thêm thành phần bạn không yêu cầu. Hãy yêu cầu giải thích lý do và nguồn gốc thay đổi đó.

### BƯỚC 5: Xác thực kế hoạch

Sau khi có kế hoạch, hãy yêu cầu AI rà soát để đảm bảo không thiếu sót. Dùng prompt:

> Hãy rà soát lại kế hoạch triển khai và các tài liệu chi tiết. Xem xét xem có chuỗi nhiệm vụ rõ ràng nào cần thực hiện không. Ví dụ, khi tôi xem phần triển khai cốt lõi, sẽ hữu ích nếu có tham chiếu đến đúng vị trí trong tài liệu chi tiết để tìm thông tin khi thực hiện từng bước.

Việc này giúp tinh chỉnh kế hoạch và tránh các lỗ hổng AI bỏ sót. Sau khi tinh chỉnh xong, yêu cầu AI kiểm tra lại checklist một lần nữa trước khi triển khai.

Nếu bạn đã cài [GitHub CLI](https://docs.github.com/en/github-cli/github-cli), bạn cũng có thể yêu cầu AI tạo pull request từ nhánh hiện tại vào `main` với mô tả chi tiết để theo dõi công việc.

> **Lưu ý**: Trước khi triển khai, hãy nhắc AI **kiểm tra chéo** để phát hiện các thành phần "quá kỹ thuật" (over-engineered). Nếu có, yêu cầu AI loại bỏ. Đảm bảo AI tuân thủ [hiến chương](base/memory/constitution.md) — đây là nền tảng bắt buộc trong mọi quyết định.

### BƯỚC 6: Phân rã nhiệm vụ với `/speckit.tasks`

Sau khi kế hoạch được xác thực, hãy phân rã thành các nhiệm vụ cụ thể, có thể thực hiện theo đúng thứ tự. Dùng lệnh:

```text
/speckit.tasks
```

Bước này tạo file `tasks.md` trong thư mục đặc tả tính năng, bao gồm:

- **Phân rã theo câu chuyện người dùng**: Mỗi câu chuyện thành một pha triển khai riêng với danh sách nhiệm vụ
- **Quản lý phụ thuộc**: Nhiệm vụ được sắp xếp theo phụ thuộc (ví dụ: model trước service, service trước endpoint)
- **Đánh dấu thực hiện song song**: Nhiệm vụ có thể chạy song song được đánh dấu `[P]`
- **Chỉ định đường dẫn file**: Mỗi nhiệm vụ nêu rõ đường dẫn file cần triển khai
- **Cấu trúc phát triển hướng kiểm thử (TDD)**: Nếu yêu cầu kiểm thử, nhiệm vụ test được đưa vào và sắp xếp trước khi triển khai
- **Điểm kiểm tra**: Mỗi pha có điểm kiểm tra để xác thực chức năng độc lập

File `tasks.md` cung cấp lộ trình rõ ràng cho lệnh `/speckit.implement`, đảm bảo triển khai có hệ thống, giữ chất lượng mã và cho phép giao hàng từng phần.

### BƯỚC 7: Triển khai

Khi sẵn sàng, dùng lệnh:

```text
/speckit.implement
```

Lệnh này sẽ:

- Xác thực đủ điều kiện (hiến chương, đặc tả, kế hoạch, nhiệm vụ)
- Phân tích phân rã nhiệm vụ từ `tasks.md`
- Thực thi nhiệm vụ theo đúng thứ tự, tôn trọng phụ thuộc và đánh dấu song song
- Tuân theo cách tiếp cận TDD trong kế hoạch
- Cung cấp cập nhật tiến độ và xử lý lỗi phù hợp

> **QUAN TRỌNG**: AI agent sẽ thực thi các lệnh CLI cục bộ (như `dotnet`, `npm`, v.v.) — hãy đảm bảo bạn đã cài các công cụ cần thiết trên máy.

Sau khi triển khai xong, hãy kiểm thử ứng dụng và xử lý các lỗi thời gian chạy không hiển thị trong log CLI (ví dụ: lỗi console trình duyệt). Bạn có thể sao chép lỗi đó và dán lại cho AI để khắc phục.

---

## Khắc phục sự cố

### Git Credential Manager trên Linux

Nếu gặp vấn đề xác thực Git trên Linux, cài Git Credential Manager:

```bash
#!/usr/bin/env bash
set -e
echo "Đang tải Git Credential Manager v2.6.1..."
wget https://github.com/git-ecosystem/git-credential-manager/releases/download/v2.6.1/gcm-linux_amd64.2.6.1.deb
echo "Đang cài Git Credential Manager..."
sudo dpkg -i gcm-linux_amd64.2.6.1.deb
echo "Đang cấu hình Git dùng GCM..."
git config --global credential.helper manager
echo "Đang dọn dẹp..."
rm gcm-linux_amd64.2.6.1.deb
```
