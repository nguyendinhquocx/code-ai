# Spec Kit – Tổng quan chi tiết

## Spec Kit là gì?

Spec Kit là một công cụ CLI viết bằng Python kết hợp với framework template để áp dụng **Phát triển Hướng Đặc tả (Spec-Driven Development – SDD)** – một phương pháp lật ngược hoàn toàn quy trình lập trình truyền thống.

### Ý tưởng cốt lõi:

- **Truyền thống**: `Mã là vua → Đặc tả chỉ hỗ trợ mã`
- **Spec Kit đảo ngược**: `Đặc tả là vua → Mã được sinh ra từ đặc tả`

Đặc tả (spec) trở thành **thực thi được** – không còn là “tài liệu hướng dẫn”, mà là **nguồn sinh ra mã**.

---

## Cấu trúc dự án

```
speckit/
├── src/specify_cli/
│   └── __init__.py          # Công cụ CLI chính (hơn 1200 dòng)
│                            # - Tải template từ GitHub releases
│                            # - Khởi tạo dự án cho nhiều AI agent
│                            # - Kiểm tra các công cụ (git, claude, gemini, v.v.)
│
├── templates/
│   ├── commands/            # Template cho các lệnh slash của AI agent
│   │   ├── specify.md       # /speckit.specify – tạo đặc tả từ mô tả tính năng
│   │   ├── plan.md          # /speckit.plan – tạo kế hoạch triển khai
│   │   ├── tasks.md         # /speckit.tasks – chia nhỏ thành nhiệm vụ
│   │   ├── implement.md     # /speckit.implement – thực thi nhiệm vụ
│   │   ├── constitution.md  # /speckit.constitution – tạo nguyên tắc dự án
│   │   ├── clarify.md       # /speckit.clarify – hỏi làm rõ đặc tả
│   │   ├── analyze.md       # /speckit.analyze – kiểm tra tính nhất quán
│   │   └── checklist.md     # /speckit.checklist – tạo checklist chất lượng
│   │
│   ├── spec-template.md     # Template cho đặc tả tính năng
│   ├── plan-template.md     # Template cho kế hoạch triển khai
│   ├── tasks-template.md    # Template cho phân rã nhiệm vụ
│   └── checklist-template.md
│
├── memory/
│   └── constitution.md      # Template “hiến pháp” dự án (9 nguyên tắc bất khả xâm phạm)
│                            # - Thư viện trước tiên, giao diện CLI, kiểm thử trước tiên
│                            # - Kiểm thử tích hợp, đơn giản hóa, chống trừu tượng hóa
│
├── scripts/
│   ├── bash/                # Script Bash cho Linux/macOS
│   │   ├── create-new-feature.sh      # Tạo nhánh + thư mục đặc tả
│   │   ├── setup-plan.sh              # Thiết lập kế hoạch triển khai
│   │   ├── check-prerequisites.sh     # Kiểm tra điều kiện tiên quyết
│   │   ├── update-agent-context.sh    # Cập nhật file ngữ cảnh cho AI agent
│   │   └── common.sh                  # Tiện ích dùng chung
│   │
│   └── powershell/          # Script PowerShell cho Windows
│       └── (tương tự bash)
│
├── docs/                    # Tài liệu
│   ├── quickstart.md
│   ├── installation.md
│   └── local-development.md
│
├── pyproject.toml           # Cấu hình gói Python
│   # version: 0.0.20
│   # dependencies: typer, rich, httpx, platformdirs
│   # entry point: specify = specify_cli:main
│
├── README.md                # Hướng dẫn sử dụng (tiếng Việt)
├── spec-driven.md           # Triết lý SDD đầy đủ (rất hay!)
├── AGENTS.md                # Hướng dẫn thêm AI agent mới
├── CHANGELOG.md             # Lịch sử phát triển
└── CONTRIBUTING.md          # Hướng dẫn đóng góp
```

---

## Workflow của Spec Kit

### 1. Cài đặt CLI:

```bash
uv tool install specify-cli --from git+https://github.com/github/spec-kit.git
```

### 2. Khởi tạo dự án:

```bash
specify init my-project --ai claude
```

→ Tải template từ GitHub releases  
→ Thiết lập thư mục `.claude/commands/` (hoặc `.gemini/`, `.github/prompts/`, v.v.)  
→ Sao chép các template vào dự án  
→ Khởi tạo kho Git  
→ Sẵn sàng dùng các lệnh slash

### 3. Dùng các lệnh slash trong AI agent:

#### `/speckit.constitution`

→ Tạo `.specify/memory/constitution.md`  
→ Định nghĩa nguyên tắc dự án (Thư viện trước tiên, Kiểm thử trước tiên, v.v.)

#### `/speckit.specify [mô tả tính năng]`

→ Tạo nhánh mới (ví dụ: `001-user-authentication`)  
→ Tạo `.specify/specs/001-user-authentication/spec.md`  
→ AI viết đặc tả (CÁI GÌ + TẠI SAO, không có CÁCH THỰC HIỆN)  
→ Tạo checklist chất lượng để xác thực đặc tả

#### `/speckit.clarify` (tùy chọn)

→ Đặt tối đa 3 câu hỏi để làm rõ đặc tả  
→ Cập nhật đặc tả với câu trả lời

#### `/speckit.plan [lựa chọn stack công nghệ]`

→ Đọc `spec.md` + `constitution.md`  
→ Tạo `plan.md` (CÁCH THỰC HIỆN – stack, kiến trúc)  
→ Tạo `data-model.md` (thực thể, quan hệ)  
→ Tạo `contracts/` (đặc tả API, OpenAPI)  
→ Tạo `research.md` (quyết định kỹ thuật)  
→ Tạo `quickstart.md` (kịch bản xác thực)

#### `/speckit.tasks`

→ Đọc `plan.md`, `data-model.md`, `contracts/`  
→ Tạo `tasks.md` (danh sách nhiệm vụ cụ thể, có thứ tự)  
→ Đánh dấu `[P]` cho các nhiệm vụ có thể chạy song song

#### `/speckit.implement`

→ Đọc `tasks.md` + toàn bộ ngữ cảnh  
→ Kiểm tra checklist (nếu chưa hoàn thành thì hỏi người dùng)  
→ Thực thi từng nhiệm vụ theo thứ tự  
→ Tạo các file ignore (`.gitignore`, `.dockerignore`, v.v.)  
→ Tuân thủ cách tiếp cận kiểm thử trước: viết test trước, code sau  
→ Đánh dấu nhiệm vụ đã hoàn thành `[X]` trong `tasks.md`

---

## Các AI Agent được hỗ trợ

Công cụ tích hợp với **14 trợ lý lập trình AI** khác nhau:

| Agent             | Thư mục                | Cần CLI | Định dạng |
|------------------|------------------------|---------|-----------|
| Claude Code      | `.claude/commands/`    | Có (`claude`) | Markdown |
| GitHub Copilot   | `.github/prompts/`     | Không (IDE)   | Markdown |
| Gemini CLI       | `.gemini/commands/`    | Có (`gemini`) | TOML     |
| Cursor           | `.cursor/commands/`    | Không (IDE)   | Markdown |
| Qwen Code        | `.qwen/commands/`      | Có (`qwen`)   | TOML     |
| opencode         | `.opencode/command/`   | Có (`opencode`)| Markdown |
| Codex CLI        | `.codex/commands/`     | Có (`codex`)  | Markdown |
| Windsurf         | `.windsurf/workflows/` | Không (IDE)   | Markdown |
| Kilo Code        | `.kilocode/rules/`     | Không (IDE)   | Markdown |
| Auggie CLI       | `.augment/rules/`      | Có (`auggie`) | Markdown |
| Roo Code         | `.roo/rules/`          | Không (IDE)   | Markdown |
| CodeBuddy        | `.codebuddy/commands/` | Có (`codebuddy`)| Markdown |
| Amazon Q         | `.amazonq/prompts/`    | Có (`q`)      | Markdown |
| Amp              | `.agents/commands/`    | Có (`amp`)    | Markdown |

---

## Những điểm hay nhất

### 1. Hiến pháp (Constitution) – Các nguyên tắc bất khả xâm phạm

- **Điều I: Thư viện trước tiên** – Mọi tính năng phải bắt đầu là một thư viện độc lập  
- **Điều II: Giao diện CLI** – Mọi thư viện phải phơi bày giao diện dòng lệnh (đầu vào/ra dạng văn bản)  
- **Điều III: Kiểm thử trước tiên (KHÔNG THỂ THƯƠNG LƯỢNG)** – Viết test → được phê duyệt → thất bại → mới viết code  
- **Điều VII: Đơn giản hóa** – Tối đa 3 dự án, không “chuẩn bị cho tương lai”  
- **Điều VIII: Chống trừu tượng hóa** – Dùng trực tiếp tính năng framework, không bao bọc  
- **Điều IX: Kiểm thử hướng tích hợp** – Dùng cơ sở dữ liệu thật, không mock

### 2. Chất lượng hướng template

Các template không chỉ là “mẫu” mà còn là **rào cản** để LLM không làm bừa:

- Ngăn chi tiết triển khai quá sớm  
- Bắt buộc đánh dấu `[CẦN LÀM RÕ]` thay vì đoán  
- Checklist tự động xác thực đầu ra  
- Cổng kiểm tra (gates) ngăn thiết kế quá mức

### 3. Xác thực chất lượng đặc tả

Lệnh `/speckit.specify` tự động tạo checklist và xác thực:

- Không có chi tiết triển khai trong đặc tả  
- Yêu cầu phải có thể kiểm thử và không mơ hồ  
- Tiêu chí thành công phải đo lường được và không phụ thuộc công nghệ  
- Tối đa 3 đánh dấu `[CẦN LÀM RÕ]`

### 4. Đa nền tảng & đa agent

- Hỗ trợ cả Bash (Linux/macOS) và PowerShell (Windows)  
- Một codebase, chạy được với 14 AI agent khác nhau  
- Tự động phát hiện nền tảng và chọn script phù hợp

---

## Triết lý SDD (trích từ `spec-driven.md`)

> “Trong nhiều thập kỷ, mã luôn là vua. SDD đảo ngược cấu trúc quyền lực này. Đặc tả không phục vụ mã — mã phục vụ đặc tả.”

- **Đặc tả là ngôn ngữ chung**: Đặc tả là trung tâm, mã chỉ là biểu hiện  
- **Đặc tả thực thi được**: Đặc tả phải đủ chính xác để sinh mã  
- **Tinh chỉnh liên tục**: AI xác thực đặc tả liên tục, không chỉ một lần  
- **Bối cảnh hướng nghiên cứu**: AI nghiên cứu các lựa chọn kỹ thuật trong quá trình đặc tả  
- **Phản hồi hai chiều**: Số liệu production cập nhật đặc tả cho lần sinh lại tiếp theo

---

## Các lệnh template chi tiết

### `/speckit.constitution`

Tạo file `.specify/memory/constitution.md` chứa:

- Các nguyên tắc cốt lõi (Thư viện trước tiên, Giao diện CLI, Kiểm thử trước tiên, v.v.)  
- Các ràng buộc phát triển  
- Các cổng kiểm tra chất lượng  
- Các quy tắc quản trị

### `/speckit.specify [mô tả tính năng]`

- Sinh tên ngắn (2–4 từ) từ mô tả tính năng  
- Kiểm tra nhánh/đặc tả hiện có để tránh trùng lặp  
- Tính số tính năng tiếp theo (001, 002, 003...)  
- Chạy script `create-new-feature.sh/ps1` để:
  - Tạo nhánh mới (ví dụ: `001-user-auth`)
  - Tạo thư mục đặc tả
  - Sao chép template đặc tả
- AI điền template đặc tả:
  - Kịch bản người dùng & kiểm thử
  - Yêu cầu chức năng
  - Tiêu chí thành công (đo lường được, không phụ thuộc công nghệ)
  - Các thực thể chính
  - Các giả định
- Tạo checklist xác thực tại `checklists/requirements.md`
- Xác thực chất lượng đặc tả:
  - Không có chi tiết triển khai
  - Yêu cầu có thể kiểm thử
  - Tiêu chí thành công đo lường được
  - Tối đa 3 đánh dấu `[CẦN LÀM RÕ]`
- Đặt câu hỏi làm rõ nếu cần (tối đa 3)
- Chờ câu trả lời người dùng và cập nhật đặc tả

### `/speckit.clarify` (tùy chọn)

- Trích xuất tối đa 5 câu hỏi làm rõ có trọng tâm từ đặc tả  
- Trình bày câu hỏi có cấu trúc kèm gợi ý trả lời  
- Chờ phản hồi người dùng  
- Cập nhật đặc tả với câu trả lời vào phần “Làm rõ”  
- Xác thực lại đặc tả sau khi cập nhật

### `/speckit.plan [stack công nghệ]`

- Chạy `setup-plan.sh/ps1` để thiết lập  
- Tải `spec.md` + `constitution.md`  
- Thực thi quy trình lập kế hoạch:
  - Điền bối cảnh kỹ thuật
  - Kiểm tra hiến chương (xác thực qua các cổng)
  - **Giai đoạn 0: Nghiên cứu**
    - Trích xuất các điểm chưa rõ từ bối cảnh kỹ thuật
    - Sinh `research.md` với các quyết định và lý do
  - **Giai đoạn 1: Thiết kế & Hợp đồng**
    - Sinh `data-model.md` (thực thể, quan hệ)
    - Sinh `contracts/` (đặc tả API, OpenAPI)
    - Sinh `quickstart.md` (kịch bản xác thực)
    - Cập nhật ngữ cảnh agent (chạy script `update-agent-context`)
  - Đánh giá lại kiểm tra hiến chương
  - Dừng sau Giai đoạn 2 lập kế hoạch
  - Báo cáo các tài liệu đã sinh

### `/speckit.tasks`

- Chạy `check-prerequisites.sh/ps1` để xác thực  
- Tải ngữ cảnh:
  - `plan.md` (bắt buộc)
  - `data-model.md` (nếu có)
  - `contracts/` (nếu có)
  - `research.md` (nếu có)
- Phân tích và sinh `tasks.md`:
  - Các pha nhiệm vụ: Thiết lập, Kiểm thử, Cốt lõi, Tích hợp, Hoàn thiện
  - Quản lý phụ thuộc
  - Đánh dấu song song `[P]`
  - Đường dẫn file cho từng nhiệm vụ
- Cấu trúc:
  - Nhiệm vụ tuần tự (phải chạy theo thứ tự)
  - Nhiệm vụ song song `[P]` (có thể chạy cùng lúc)
  - Cách tiếp cận kiểm thử trước (nhiệm vụ test trước nhiệm vụ triển khai)

### `/speckit.implement`

- Chạy `check-prerequisites.sh/ps1` với `--require-tasks`  
- Kiểm tra trạng thái checklist:
  - Quét tất cả file checklist
  - Đếm tổng số / đã hoàn thành / chưa hoàn thành
  - Hiển thị bảng trạng thái
  - Nếu chưa hoàn thành: hỏi người dùng có tiếp tục không
  - Nếu đã hoàn thành: tự động tiếp tục
- Tải ngữ cảnh triển khai:
  - `tasks.md` (bắt buộc)
  - `plan.md` (bắt buộc)
  - `data-model.md` (nếu có)
  - `contracts/` (nếu có)
  - `research.md` (nếu có)
  - `quickstart.md` (nếu có)
- **Xác minh thiết lập dự án**:
  - Phát hiện loại dự án (git, docker, node, python, v.v.)
  - Tạo/xác minh các file ignore (`.gitignore`, `.dockerignore`, v.v.)
  - Thêm các mẫu thiết yếu dựa trên stack công nghệ
- **Phân tích cấu trúc `tasks.md`**:
  - Trích xuất pha, phụ thuộc, đánh dấu song song
- **Thực thi triển khai**:
  - Thực thi theo từng pha
  - Tôn trọng phụ thuộc (tuần tự vs song song)
  - Tuân thủ cách tiếp cận TDD (test trước code)
  - Phối hợp dựa trên file
  - Các điểm kiểm tra xác thực
- **Theo dõi tiến độ**:
  - Báo cáo sau mỗi nhiệm vụ
  - Đánh dấu nhiệm vụ đã hoàn thành `[X]` trong `tasks.md`
  - Dừng khi có lỗi (trừ nhiệm vụ song song)
- **Xác thực hoàn thành**:
  - Xác minh tất cả nhiệm vụ đã xong
  - Kiểm tra tính năng khớp với đặc tả
  - Xác minh test pass
  - Xác nhận tuân thủ kế hoạch kỹ thuật

### `/speckit.analyze` (tùy chọn)

- Báo cáo tính nhất quán giữa các tài liệu
- Kiểm tra sự căn chỉnh giữa: đặc tả, làm rõ, kế hoạch, nhiệm vụ, hiến chương
- Xung đột hiến chương = phát hiện **NGHIÊM TRỌNG**
- Không sửa đổi file (chỉ đọc)
- Chạy sau `/speckit.tasks`, trước `/speckit.implement`

### `/speckit.checklist` (tùy chọn)

- Sinh checklist chất lượng tùy chỉnh
- Xác thực tính đầy đủ, rõ ràng, nhất quán của yêu cầu
- “Unit test cho tiếng Anh” – xác thực ngôn ngữ đặc tả
- Chạy sau `/speckit.plan`

---

## Các mẫu thiết kế chính

### 1. Template như ràng buộc

Các template hoạt động như prompt tinh vi để giới hạn hành vi LLM:

- Ngăn chi tiết triển khai quá sớm  
- Ép buộc đánh dấu rõ ràng `[CẦN LÀM RÕ]`  
- Tư duy có cấu trúc qua checklist  
- Tuân thủ hiến chương qua các cổng kiểm tra  
- Quản lý chi tiết theo cấp bậc  
- Tư duy kiểm thử trước  
- Ngăn các tính năng suy đoán

### 2. Thực thi hiến chương

Template kế hoạch triển khai vận hành hóa hiến chương qua các cổng:

#### Giai đoạn -1: Các cổng trước triển khai

##### Cổng Đơn giản (Điều VII)
- [ ] Dùng ≤3 dự án?  
- [ ] Không “chuẩn bị cho tương lai”?

##### Cổng Chống Trừu tượng hóa (Điều VIII)
- [ ] Dùng trực tiếp framework?  
- [ ] Biểu diễn mô hình đơn nhất?

##### Cổng Hướng Tích hợp (Điều IX)
- [ ] Hợp đồng được định nghĩa?  
- [ ] Kiểm thử hợp đồng được viết?

### 3. Quy trình tiến triển

Hiến chương → Đặc tả → Làm rõ → Kế hoạch → Phân tích → Nhiệm vụ → Triển khai  
&nbsp;&nbsp;&nbsp;&nbsp;↓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↓  
Nguyên tắc&nbsp;&nbsp;CÁI GÌ&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tinh chỉnh&nbsp;&nbsp;&nbsp;CÁCH THỰC HIỆN&nbsp;&nbsp;&nbsp;Xác thực&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Phân rã&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Thực thi  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+TẠI SAO&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&...... (cắt ngắn để giữ cấu trúc)

### 4. Quản lý tính năng dựa trên Git

- Mỗi tính năng = một nhánh riêng (`001-tên-tính-năng`)  
- Đặc tả lưu trong `.specify/specs/001-tên-tính-năng/`  
- Dễ dàng xem xét, hợp nhất, theo dõi tiến độ  
- Hỗ trợ phát triển nhiều tính năng song song

### 5. Thiết kế không phụ thuộc agent

CLI phát hiện và sinh lệnh cho từng AI agent:

- Định dạng Markdown: Claude, Copilot, Cursor, opencode, Windsurf, v.v.  
- Định dạng TOML: Gemini, Qwen  
- Trình giữ chỗ: `{SCRIPT}`, `$ARGUMENTS`, `{{args}}`  
- Tự động cập nhật file ngữ cảnh agent

---

## Chi tiết triển khai kỹ thuật

### Kiến trúc CLI (`src/specify_cli/__init__.py`)

#### Thành phần chính:

**`AGENT_CONFIG`**: Nguồn chân lý duy nhất cho siêu dữ liệu agent

```python
AGENT_CONFIG = {
    "agent-key": {
        "name": "Tên hiển thị",
        "folder": ".agent/",
        "install_url": "https://...",
        "requires_cli": True/False
    }
}
```

**`StepTracker`**: Theo dõi tiến độ phân cấp  
- Hiển thị dạng cây (giống đầu ra Claude Code)  
- Tự động làm mới trực tiếp qua callback  
- Trạng thái: pending, running, done, error, skipped  
- Chọn tương tác: điều hướng bằng phím mũi tên  
- Nhập bàn phím đa nền tảng (readchar)  
- Hiển thị Rich Live  
- Hỗ trợ Up/Down/Enter/Esc

#### Tải và giải nén template:

- Lấy từ GitHub releases API  
- Tải gói zip  
- Giải nén vào thư mục dự án  
- Xử lý cấu trúc thư mục lồng nhau  
- Hợp nhất với file hiện có (ví dụ: merge `settings.json` của VS Code)

#### Quản lý quyền script:

- Tự động `chmod +x` cho file `.sh` (Linux/macOS)  
- Không làm gì trên Windows  
- Quét đệ quy trong `.specify/scripts/`

---

## Kiến trúc script

### Script Bash (`scripts/bash/`):

- `common.sh`: Tiện ích dùng chung (màu sắc, log, phân tích JSON)  
- `create-new-feature.sh`: Đánh số tính năng, tạo nhánh, khởi tạo đặc tả  
  - Đặt tên nhánh thông minh (lọc từ dừng)  
  - Tuân thủ giới hạn 244 byte của GitHub  
  - Hỗ trợ tham số `--short-name`  
- `setup-plan.sh`: Khởi tạo kế hoạch, sao chép template  
- `check-prerequisites.sh`: Xác thực file bắt buộc tồn tại  
- `update-agent-context.sh`: Tự động phát hiện agent, cập nhật file ngữ cảnh

### Script PowerShell (`scripts/powershell/`):

- Chức năng giống script Bash  
- Tương đương cho Windows  
- Định dạng đầu ra JSON giống nhau

---

## Hệ thống template

### Template lệnh (`templates/commands/`):

**Siêu dữ liệu frontmatter (YAML):**

```yaml
---
description: "Mô tả lệnh"
scripts:
  sh: scripts/bash/script.sh
  ps: scripts/powershell/script.ps1
---
```

**Trình giữ chỗ:**

- `$ARGUMENTS`: Đầu vào người dùng sau lệnh  
- `{SCRIPT}`: Thay bằng đường dẫn script thực tế  
- `{ARGS}`: Đối số đã escape JSON  
- `__AGENT__`: Thay bằng tên agent

### Template tài liệu:

- `spec-template.md`: Cấu trúc đặc tả tính năng  
- `plan-template.md`: Cấu trúc kế hoạch triển khai  
- `tasks-template.md`: Cấu trúc phân rã nhiệm vụ  
- `checklist-template.md`: Cấu trúc checklist chất lượng

---

## Cấu trúc file sau khi khởi tạo

```
my-project/
├── .specify/
│   ├── memory/
│   │   └── constitution.md       # Nguyên tắc dự án
│   ├── scripts/
│   │   ├── bash/                 # Script Bash
│   │   └── powershell/           # Script PowerShell
│   ├── specs/                    # Đặc tả tính năng
│   │   └── 001-feature-name/
│   │       ├── spec.md           # Đặc tả tính năng
│   │       ├── plan.md           # Kế hoạch triển khai
│   │       ├── tasks.md          # Phân rã nhiệm vụ
│   │       ├── data-model.md     # Thực thể dữ liệu
│   │       ├── research.md       # Quyết định kỹ thuật
│   │       ├── quickstart.md     # Kịch bản xác thực
│   │       ├── checklists/       # Checklist chất lượng
│   │       │   └── requirements.md
│   │       └── contracts/        # Đặc tả API
│   │           └── api-spec.json
│   └── templates/
│       ├── spec-template.md
│       ├── plan-template.md
│       ├── tasks-template.md
│       └── checklist-template.md
│
├── .claude/commands/             # Lệnh dành riêng cho Claude
│   ├── speckit.constitution.md
│   ├── speckit.specify.md
│   ├── speckit.plan.md
│   ├── speckit.tasks.md
│   ├── speckit.implement.md
│   ├── speckit.clarify.md
│   ├── speckit.analyze.md
│   └── speckit.checklist.md
│
├── .gitignore
└── .git/
```

---

## Ví dụ quy trình phát triển

### Kịch bản: Xây dựng tính năng chat

```bash
# 1. Khởi tạo dự án
specify init chat-app --ai claude

# 2. Mở Claude Code trong thư mục dự án
cd chat-app
claude
```

### Trong Claude Code:

```text
/speckit.constitution Tạo nguyên tắc tập trung vào giao tiếp thời gian thực,
khả năng mở rộng và quyền riêng tư người dùng.

/speckit.specify Hệ thống chat thời gian thực với lịch sử tin nhắn, trạng thái người dùng,
chỉ báo đang nhập và xác nhận đã đọc. Hỗ trợ nhóm chat tối đa 50 người.
```

→ AI tạo: `specs/001-chat-system/spec.md`  
→ AI xác thực chất lượng đặc tả  
→ AI đặt tối đa 3 câu hỏi làm rõ nếu cần

```text
/speckit.clarify
```

→ (Tùy chọn) AI đặt 5 câu hỏi trọng tâm để giảm rủi ro đặc tả

```text
/speckit.plan WebSocket cho nhắn tin thời gian thực, PostgreSQL cho lịch sử,
Redis cho trạng thái và chỉ báo đang nhập. Dùng Next.js + React cho frontend.
```

→ AI tạo:
- `specs/001-chat-system/plan.md`
- `specs/001-chat-system/data-model.md` (thực thể Tin nhắn, Người dùng, Chat)
- `specs/001-chat-system/contracts/` (sự kiện WebSocket, endpoint REST)
- `specs/001-chat-system/research.md` (so sánh thư viện WebSocket)
- `specs/001-chat-system/quickstart.md`

```text
/speckit.tasks
```

→ AI tạo: `specs/001-chat-system/tasks.md`
- Pha 1: Thiết lập (cấu trúc dự án, phụ thuộc)
- Pha 2: Kiểm thử (kiểm thử hợp đồng, tích hợp)
- Pha 3: Cốt lõi (mô hình Tin nhắn, dịch vụ Chat, bộ xử lý WebSocket)
- Pha 4: Tích hợp (kết nối DB, client Redis)
- Pha 5: Hoàn thiện (kiểm thử unit, tài liệu)

```text
/speckit.implement
```

→ AI:
1. Kiểm tra checklist (nếu chưa hoàn thành, hỏi có tiếp tục không)
2. Tạo `.gitignore`, `.dockerignore`, `.eslintignore`
3. Thực thi nhiệm vụ theo từng pha:
   - Thiết lập: `npm init`, cài phụ thuộc, tạo thư mục
   - Kiểm thử: Viết kiểm thử hợp đồng, tích hợp
   - Cốt lõi: Triển khai mô hình Tin nhắn, dịch vụ Chat, bộ xử lý WebSocket
   - Tích hợp: Thiết lập Postgres, kết nối Redis
   - Hoàn thiện: Viết kiểm thử unit, thêm tài liệu
4. Đánh dấu nhiệm vụ `[X]` trong `tasks.md` khi hoàn thành
5. Báo cáo hoàn thành

---

## Kết quả

- Hệ thống chat hoạt động với nhắn tin thời gian thực  
- Lưu trữ bền vững trên PostgreSQL  
- Theo dõi trạng thái người dùng qua Redis  
- Độ bao phủ kiểm thử đầy đủ (hợp đồng + tích hợp + unit)  
- Tuân thủ hiến chương (Thư viện trước tiên, Kiểm thử trước tiên, giao diện CLI)  
- Quyết định được ghi lại trong `research.md`  
- Hợp đồng rõ ràng trong `contracts/`  
- Xác thực qua checklist

---

## Tính năng nâng cao

### 1. Khám phá triển khai song song

Sinh nhiều triển khai từ cùng một đặc tả:

```bash
# Nhánh 1: React + WebSocket
git checkout -b 001-chat-system-react
/speckit.plan React + WebSocket + PostgreSQL

# Nhánh 2: Vue + Server-Sent Events
git checkout -b 001-chat-system-vue
/speckit.plan Vue + SSE + MongoDB

# So sánh các triển khai, chọn cách tiếp cận tốt nhất
```

### 2. Di chuyển hệ cũ (Brownfield)

Dùng Spec Kit để hiện đại hóa hệ thống cũ:

```bash
specify init --here --ai claude  # Trong dự án hiện có
/speckit.specify Tách xác thực người dùng thành microservice
/speckit.plan FastAPI + OAuth2 + PostgreSQL
# ... di chuyển dần
```

### 3. Hợp tác nhóm

- Đặc tả được phiên bản hóa trong Git  
- PR để xem xét đặc tả trước khi triển khai  
- Hiến chương đảm bảo nhất quán kiến trúc trong nhóm  
- Dấu vết kiểm toán rõ ràng của các quyết định trong `research.md`

### 4. Tiến hóa liên tục

- Số liệu production → cập nhật đặc tả → sinh lại  
- Lỗ hổng bảo mật → thêm ràng buộc → sinh lại  
- Vấn đề hiệu năng → yêu cầu phi chức năng mới → sinh lại

---

## Hạn chế & Lưu ý

### Hạn chế hiện tại:

- Cần can thiệp thủ công: AI không thể chạy lệnh CLI trực tiếp trong mọi agent  
- Cập nhật template: Cần tải lại template để có tính năng mới nhất  
- Phụ thuộc Git: Trải nghiệm tốt nhất yêu cầu Git (mặc dù hỗ trợ `--no-git`)  
- Chủ yếu tiếng Anh: Template và tài liệu chủ yếu bằng tiếng Anh (README có tiếng Việt)

### Thực hành tốt nhất:

- Bắt đầu bằng hiến chương: Định nghĩa nguyên tắc trước tính năng đầu tiên  
- Đầu tư vào chất lượng đặc tả: Rác vào → rác ra  
- Dùng lệnh làm rõ: Đừng bỏ qua – tránh làm lại sau này  
- Xem xét tài liệu sinh ra: AI không hoàn hảo, cần xem xét của con người  
- Commit sau mỗi pha: đặc tả → kế hoạch → nhiệm vụ → triển khai  
- Cập nhật đặc tả: Xem như nguồn chân lý, không phải tài liệu dùng xong vứt

---

## Tại sao Spec Kit quan trọng?

### Vấn đề của lập trình AI truyền thống:

- Đầu ra không nhất quán: Mỗi lần sinh khác nhau  
- Lập trình theo cảm tính: AI đoán yêu cầu  
- Không truy vết được: Tại sao lại ra quyết định này?  
- Thiết kế quá mức: AI thêm độ phức tạp không cần thiết  
- Không xác thực: Làm sao biết nó đúng?  
- Thay đổi dễ vỡ: Một thay đổi làm hỏng mọi thứ

### Spec Kit giải quyết thế nào:

- Template giới hạn LLM: Cấu trúc nhất quán mỗi lần  
- Làm rõ rõ ràng: Tối đa 3, phải được biện minh  
- Theo dõi quyết định: `research.md` ghi lại lý do  
- Cổng hiến chương: Ngăn thiết kế quá mức  
- Checklist chất lượng: Xác thực trước khi triển khai  
- Sinh lại hướng đặc tả: Thay đổi đặc tả → sinh lại an toàn

---

## Cộng đồng & Đóng góp

### Thông tin dự án:

- GitHub: `github/spec-kit`  
- Giấy phép: MIT (mã nguồn mở)  
- Phiên bản: 0.0.20 (đang phát triển tích cực)  
- Python: Yêu cầu 3.11+  
- Phụ thuộc: `typer`, `rich`, `httpx`, `platformdirs`

### Đóng góp:

- Phải tiết lộ trợ giúp AI trong PR  
- Kiểm thử thay đổi với dự án mẫu  
- Cập nhật tài liệu (README, spec-driven.md, AGENTS.md)  
- Tuân thủ hướng dẫn đóng góp trong `CONTRIBUTING.md`

### Thêm AI Agent mới:

Xem `AGENTS.md` để biết hướng dẫn từng bước:

- Thêm vào `AGENT_CONFIG` trong `__init__.py`  
- Cập nhật văn bản trợ giúp CLI  
- Cập nhật bảng trong README  
- Cập nhật script phát hành  
- Cập nhật script ngữ cảnh agent  
- Kiểm thử với agent

---

## Tóm tắt (TL;DR)

**Spec Kit = Framework kỷ luật cho lập trình AI**

Không để AI “nghĩ ra” yêu cầu → Ép AI tuân theo quy trình có cấu trúc:

- **Hiến chương**: Các nguyên tắc bất khả xâm phạm  
- **Đặc tả**: CÁI GÌ + TẠI SAO (không có CÁCH THỰC HIỆN)  
- **Lập kế hoạch**: CÁCH THỰC HIỆN (stack công nghệ, kiến trúc)  
- **Phân nhiệm vụ**: Phân rã chi tiết có thứ tự  
- **Triển khai**: Thực thi với kiểm thử trước, xác thực checklist

**Đổi mới then chốt**: Template như ràng buộc để LLM không làm bừa

**Kết quả**: Mã từ AI sinh ra **có thể dự đoán, truy vết được, dễ bảo trì**

---