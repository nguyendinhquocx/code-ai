# OpenSpec

Phát triển dựa trên đặc tả cho trợ lý lập trình AI.

[![CI](https://github.com/Fission-AI/OpenSpec/actions/workflows/ci.yml/badge.svg)](https://github.com/Fission-AI/OpenSpec/actions/workflows/ci.yml)  
[![npm version](https://img.shields.io/npm/v/@fission-ai/openspec?style=flat-square)](https://www.npmjs.com/package/@fission-ai/openspec)  
[![Node version](https://img.shields.io/node/v/@fission-ai/openspec?style=flat-square)](https://nodejs.org/)  
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE)  
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg?style=flat-square)](https://conventionalcommits.org)  
[![Discord](https://img.shields.io/badge/Discord-Join%20the%20community-5865F2?logo=discord&logoColor=white&style=flat-square)](https://discord.gg/YctCnvvshC)

Theo dõi [@0xTab trên X](https://x.com/0xTab) để cập nhật · Tham gia [OpenSpec Discord](https://discord.gg/YctCnvvshC) để được hỗ trợ và hỏi đáp.

## OpenSpec là gì?

OpenSpec đồng bộ con người và trợ lý lập trình AI thông qua **phát triển dựa trên đặc tả (spec-driven development)**, giúp hai bên thống nhất **cái cần xây dựng** trước khi viết bất kỳ dòng code nào. **Không cần API key**.

## Tại sao cần OpenSpec?

Trợ lý lập trình AI rất mạnh, nhưng **khó đoán** khi yêu cầu nằm rải rác trong lịch sử chat. OpenSpec bổ sung một **luồng làm việc đặc tả nhẹ nhàng**, khóa chặt ý định trước khi triển khai, từ đó tạo ra kết quả **xác định được và có thể kiểm duyệt**.

### Kết quả chính:

- Các bên (con người và AI) **thống nhất đặc tả trước khi bắt đầu**.
- Thư mục thay đổi có cấu trúc (`proposals`, `tasks`, `spec updates`) giúp **phạm vi rõ ràng và có thể kiểm tra**.
- **Minh bạch** về những gì đang được đề xuất, đang thực hiện, hay đã lưu trữ.
- **Tương thích với các công cụ AI mày đang dùng**: lệnh gạch chéo (`/`) nếu hỗ trợ, hoặc quy tắc ngữ cảnh ở mọi nơi khác.

## So sánh OpenSpec (tổng quan)

- **Nhẹ nhàng**: luồng làm việc đơn giản, không cần API key, thiết lập tối thiểu.
- **Ưu tiên dự án hiện có (brownfield-first)**: hoạt động tốt không chỉ cho tính năng mới (0→1). OpenSpec tách biệt **nguồn sự thật hiện tại** và **đề xuất thay đổi**:  
  - `openspec/specs/`: đặc tả hiện tại (nguồn sự thật)  
  - `openspec/changes/`: đề xuất cập nhật  
  → Giúp **diff rõ ràng**, dễ quản lý khi thay đổi trải dài nhiều đặc tả.
- **Theo dõi thay đổi**: đề xuất, nhiệm vụ và delta đặc tả được lưu cùng nhau; khi lưu trữ, các cập nhật được hợp nhất ngược vào đặc tả gốc.

So với **spec-kit** và **Kiro**: chúng mạnh khi làm tính năng hoàn toàn mới (0→1). OpenSpec còn **vượt trội khi sửa đổi hành vi hiện có (1→n)**, đặc biệt khi cập nhật liên quan đến nhiều đặc tả.

Xem so sánh đầy đủ tại phần [So sánh OpenSpec](#so-sánh-openspec).

## Cách hoạt động

```
┌────────────────────┐
│ Soạn thảo đề xuất  │
│ thay đổi           │
└────────┬───────────┘
         │ chia sẻ ý định với AI
         ▼
┌────────────────────┐
│ Xem xét & Thống    │
│ nhất (sửa đặc tả/  │◀──── vòng lặp phản hồi ──────┐
│ nhiệm vụ)          │                              │
└────────┬───────────┘                              │
         │ kế hoạch được phê duyệt                  │
         ▼                                          │
┌────────────────────┐                              │
│ Triển khai nhiệm   │──────────────────────────────┘
│ vụ (AI viết code)  │
└────────┬───────────┘
         │ triển khai thay đổi
         ▼
┌────────────────────┐
│ Lưu trữ & Cập nhật │
│ Đặc tả (nguồn)     │
└────────────────────┘
```

1. **Soạn thảo đề xuất thay đổi** mô tả những cập nhật đặc tả mày muốn.
2. **Xem xét đề xuất** cùng trợ lý AI cho đến khi mọi người đồng ý.
3. **Triển khai các nhiệm vụ** tham chiếu đến đặc tả đã thống nhất.
4. **Lưu trữ thay đổi** để hợp nhất các cập nhật đã được phê duyệt vào đặc tả gốc.

## Bắt đầu

### Các công cụ AI được hỗ trợ

#### Lệnh gạch chéo tích hợp sẵn

Các công cụ này có lệnh OpenSpec tích hợp. Chọn tích hợp OpenSpec khi được nhắc.

| Công cụ               | Lệnh                                                                 |
|-----------------------|----------------------------------------------------------------------|
| Claude Code           | `/openspec:proposal`, `/openspec:apply`, `/openspec:archive`         |
| CodeBuddy Code (CLI)  | `/openspec:proposal`, `/openspec:apply`, `/openspec:archive` (trong `.codebuddy/commands/`) — xem tài liệu |
| Cursor                | `/openspec-proposal`, `/openspec-apply`, `/openspec-archive`         |
| Cline                 | Quy tắc trong thư mục `.clinerules/` (`.clinerules/openspec-*.md`)   |
| Factory Droid         | `/openspec-proposal`, `/openspec-apply`, `/openspec-archive` (trong `.factory/commands/`) |
| OpenCode              | `/openspec-proposal`, `/openspec-apply`, `/openspec-archive`         |
| Kilo Code             | `/openspec-proposal.md`, `/openspec-apply.md`, `/openspec-archive.md` (trong `.kilocode/workflows/`) |
| Windsurf              | `/openspec-proposal`, `/openspec-apply`, `/openspec-archive` (trong `.windsurf/workflows/`) |
| Codex                 | `/openspec-proposal`, `/openspec-apply`, `/openspec-archive` (toàn cục: `~/.codex/prompts`, cài tự động) |
| GitHub Copilot        | `/openspec-proposal`, `/openspec-apply`, `/openspec-archive` (trong `.github/prompts/`) |
| Amazon Q Developer    | `@openspec-proposal`, `@openspec-apply`, `@openspec-archive` (trong `.amazonq/prompts/`) |
| Auggie (Augment CLI)  | `/openspec-proposal`, `/openspec-apply`, `/openspec-archive` (trong `.augment/commands/`) |

**Kilo Code** tự động phát hiện luồng làm việc nhóm. Lưu các file được tạo vào `.kilocode/workflows/` và kích hoạt từ bảng lệnh bằng `/openspec-proposal.md`, `/openspec-apply.md`, hoặc `/openspec-archive.md`.

#### Tương thích với `AGENTS.md`

Các công cụ này tự động đọc hướng dẫn luồng làm việc từ `openspec/AGENTS.md`. Yêu cầu chúng tuân theo luồng OpenSpec nếu cần nhắc lại. Tìm hiểu thêm về [quy ước AGENTS.md](https://agents.md/).

| Công cụ                              |
|--------------------------------------|
| Amp • Jules • Gemini CLI • Các công cụ khác |

### Cài đặt & Khởi tạo

#### Yêu cầu trước

- **Node.js >= 20.19.0** — Kiểm tra phiên bản bằng lệnh: `node --version`

#### Bước 1: Cài CLI toàn cục

```bash
npm install -g @fission-ai/openspec@latest
```

Xác minh cài đặt:
```bash
openspec --version
```

#### Bước 2: Khởi tạo OpenSpec trong dự án

Chuyển đến thư mục dự án:
```bash
cd my-project
```

Chạy lệnh khởi tạo:
```bash
openspec init
```

**Điều gì xảy ra khi khởi tạo:**
- Mày sẽ được hỏi chọn các công cụ AI được hỗ trợ tích hợp sẵn (Claude Code, CodeBuddy, Cursor, OpenCode, v.v.); các trợ lý khác luôn dựa vào stub `AGENTS.md` chung.
- OpenSpec tự động cấu hình lệnh gạch chéo cho các công cụ mày chọn và luôn tạo file `AGENTS.md` được quản lý tại gốc dự án.
- Một cấu trúc thư mục `openspec/` mới được tạo trong dự án.

**Sau khi thiết lập:**
- Các công cụ AI chính có thể kích hoạt luồng `/openspec` mà **không cần cấu hình thêm**.
- Chạy `openspec list` để xác minh thiết lập và xem các thay đổi đang hoạt động.
- Nếu trợ lý lập trình **chưa hiển thị lệnh gạch chéo ngay**, hãy khởi động lại nó. Lệnh gạch chéo được tải khi khởi động, nên khởi động lại đảm bảo chúng xuất hiện.

### Tạo thay đổi đầu tiên

Dưới đây là ví dụ thực tế minh họa **toàn bộ luồng OpenSpec**. Cách này hoạt động với **mọi công cụ AI**. Các công cụ có lệnh gạch chéo sẽ tự động nhận diện phím tắt.

#### 1. Soạn thảo đề xuất

Bắt đầu bằng cách yêu cầu AI tạo đề xuất thay đổi:
> Mày: Tạo một đề xuất thay đổi OpenSpec để thêm bộ lọc tìm kiếm hồ sơ theo vai trò và nhóm.  
> (Phím tắt cho công cụ hỗ trợ: `/openspec:proposal Add profile search filters`)

> AI: Tôi sẽ tạo đề xuất thay đổi OpenSpec cho bộ lọc hồ sơ.  
> *→ Tạo cấu trúc `openspec/changes/add-profile-filters/` với `proposal.md`, `tasks.md`, và delta đặc tả.*

#### 2. Xác minh & Xem xét

Kiểm tra xem thay đổi đã được tạo đúng chưa và xem lại đề xuất:
```bash
$ openspec list                             # Xác nhận thư mục thay đổi tồn tại
$ openspec validate add-profile-filters     # Kiểm tra định dạng đặc tả
$ openspec show add-profile-filters         # Xem đề xuất, nhiệm vụ và delta đặc tả
```

#### 3. Tinh chỉnh đặc tả

Lặp lại việc chỉnh sửa đặc tả cho đến khi phù hợp:
> Mày: Có thể thêm tiêu chí chấp nhận cho bộ lọc vai trò và nhóm không?

> AI: Tôi sẽ cập nhật delta đặc tả với các kịch bản cho bộ lọc vai trò và nhóm.  
> *→ Sửa `openspec/changes/add-profile-filters/specs/profile/spec.md` và `tasks.md`.*

#### 4. Triển khai thay đổi

Khi đặc tả ổn, bắt đầu triển khai:
> Mày: Đặc tả ổn rồi. Triển khai thay đổi này đi.  
> (Phím tắt: `/openspec:apply add-profile-filters`)

> AI: Tôi sẽ thực hiện các nhiệm vụ trong thay đổi `add-profile-filters`.  
> *→ Triển khai theo `openspec/changes/add-profile-filters/tasks.md`*  
> *→ Đánh dấu nhiệm vụ hoàn thành: Task 1.1 ✓, Task 1.2 ✓, Task 2.1 ✓...*

#### 5. Lưu trữ thay đổi đã hoàn thành

Sau khi triển khai xong, lưu trữ thay đổi:
> AI: Tất cả nhiệm vụ đã hoàn thành. Triển khai sẵn sàng.

> Mày: Vui lòng lưu trữ thay đổi.  
> (Phím tắt: `/openspec:archive add-profile-filters`)

> AI: Tôi sẽ lưu trữ thay đổi `add-profile-filters`.  
> *→ Chạy: `openspec archive add-profile-filters --yes`*  
> ✓ Thay đổi đã được lưu trữ thành công. Đặc tả đã cập nhật. Sẵn sàng cho tính năng tiếp theo!

Hoặc tự chạy lệnh trong terminal:
```bash
$ openspec archive add-profile-filters --yes  # Lưu trữ thay đổi đã hoàn thành mà không hỏi lại
```

> **Lưu ý**: Các công cụ có lệnh gạch chéo tích hợp (Claude Code, CodeBuddy, Cursor, Codex) có thể dùng phím tắt. Các công cụ khác hoạt động bằng cách yêu cầu bằng ngôn ngữ tự nhiên: "tạo đề xuất OpenSpec", "áp dụng thay đổi OpenSpec", hoặc "lưu trữ thay đổi".

### Tham chiếu lệnh

```bash
openspec list               # Xem các thư mục thay đổi đang hoạt động
openspec view               # Bảng điều khiển tương tác về đặc tả và thay đổi
openspec show <change>      # Hiển thị chi tiết thay đổi (đề xuất, nhiệm vụ, cập nhật đặc tả)
openspec validate <change>  # Kiểm tra định dạng và cấu trúc đặc tả
openspec archive <change> [--yes|-y]   # Chuyển thay đổi đã hoàn thành vào thư mục lưu trữ (không hỏi lại nếu dùng --yes)
```

### Ví dụ: AI tạo file OpenSpec như thế nào

Khi mày yêu cầu trợ lý AI "thêm xác thực hai yếu tố", nó tạo:

```
openspec/
├── specs/
│   └── auth/
│       └── spec.md           # Đặc tả xác thực hiện tại (nếu tồn tại)
└── changes/
    └── add-2fa/              # AI tạo toàn bộ cấu trúc này
        ├── proposal.md       # Lý do và nội dung thay đổi
        ├── tasks.md          # Danh sách kiểm tra triển khai
        ├── design.md         # Quyết định kỹ thuật (tùy chọn)
        └── specs/
            └── auth/
                └── spec.md   # Delta cho thấy phần được thêm
```

**Đặc tả do AI tạo** (trong `openspec/specs/auth/spec.md`):
```markdown
# Đặc tả Xác thực

## Mục đích
Xác thực người dùng và quản lý phiên.

## Yêu cầu
### Yêu cầu: Xác thực người dùng
Hệ thống PHẢI cấp một JWT khi đăng nhập thành công.

#### Kịch bản: Thông tin đăng nhập hợp lệ
- KHI người dùng gửi thông tin hợp lệ
- THÌ một JWT được trả về
```

**Delta thay đổi do AI tạo** (trong `openspec/changes/add-2fa/specs/auth/spec.md`):
```markdown
# Delta cho Xác thực

## YÊU CẦU ĐƯỢC THÊM
### Yêu cầu: Xác thực hai yếu tố
Hệ thống PHẢI yêu cầu yếu tố thứ hai trong quá trình đăng nhập.

#### Kịch bản: Yêu cầu OTP
- KHI người dùng gửi thông tin hợp lệ
- THÌ hệ thống yêu cầu xác minh OTP
```

**Nhiệm vụ do AI tạo** (trong `openspec/changes/add-2fa/tasks.md`):
```markdown
## 1. Thiết lập cơ sở dữ liệu
- [ ] 1.1 Thêm cột bí mật OTP vào bảng người dùng
- [ ] 1.2 Tạo bảng ghi nhật ký xác minh OTP

## 2. Triển khai backend  
- [ ] 2.1 Thêm endpoint tạo OTP
- [ ] 2.2 Sửa luồng đăng nhập để yêu cầu OTP
- [ ] 2.3 Thêm endpoint xác minh OTP

## 3. Cập nhật frontend
- [ ] 3.1 Tạo component nhập OTP
- [ ] 3.2 Cập nhật giao diện luồng đăng nhập
```

> **Quan trọng**: Mày **không tạo các file này thủ công**. Trợ lý AI tạo chúng dựa trên yêu cầu của mày và codebase hiện có.

### Hiểu các file OpenSpec

#### Định dạng Delta

Delta là "bản vá" cho thấy đặc tả thay đổi thế nào:
- `## YÊU CẦU ĐƯỢC THÊM`: Tính năng mới
- `## YÊU CẦU ĐƯỢC SỬA`: Hành vi thay đổi (phải bao gồm toàn bộ văn bản đã cập nhật)
- `## YÊU CẦU BỊ XÓA`: Tính năng đã ngừng dùng

**Yêu cầu định dạng:**
- Dùng `### Yêu cầu: <tên>` cho tiêu đề
- Mỗi yêu cầu phải có ít nhất một khối `#### Kịch bản:`
- Dùng **PHẢI** hoặc **BẮT BUỘC** trong nội dung yêu cầu

## So sánh OpenSpec

### So với spec-kit

Mô hình hai thư mục của OpenSpec (`openspec/specs/` cho sự thật hiện tại, `openspec/changes/` cho đề xuất) **tách biệt trạng thái và diff**, giúp mở rộng khi sửa đổi tính năng hiện có hoặc chạm vào nhiều đặc tả. spec-kit mạnh cho dự án mới (0→1) nhưng ít cấu trúc hơn cho cập nhật chéo đặc tả và tính năng phát triển.

### So với Kiro.dev

OpenSpec gom mọi thay đổi cho một tính năng vào **một thư mục duy nhất** (`openspec/changes/tên-tính-năng/`), giúp dễ theo dõi đặc tả, nhiệm vụ và thiết kế liên quan. Kiro phân tán cập nhật vào nhiều thư mục đặc tả, khiến việc theo dõi tính năng trở nên khó khăn hơn.

### So với Không dùng đặc tả

Không có đặc tả, trợ lý AI tạo code từ các yêu cầu mơ hồ, thường **thiếu yêu cầu** hoặc **thêm tính năng không mong muốn**. OpenSpec mang lại **khả năng dự đoán** bằng cách thống nhất hành vi mong muốn **trước khi viết code**.

## Triển khai trong nhóm

- **Khởi tạo OpenSpec**: Chạy `openspec init` trong repo.
- **Bắt đầu từ tính năng mới**: Yêu cầu AI ghi lại công việc sắp tới dưới dạng đề xuất thay đổi.
- **Phát triển dần**: Mỗi thay đổi được lưu trữ sẽ cập nhật vào đặc tả sống, ghi lại hệ thống của mày.
- **Linh hoạt**: Các thành viên có thể dùng Claude Code, CodeBuddy, Cursor, hoặc bất kỳ công cụ tương thích `AGENTS.md` nào, **vẫn chia sẻ cùng đặc tả**.

Chạy `openspec update` bất cứ khi nào ai đó đổi công cụ để các agent nhận hướng dẫn mới nhất và liên kết lệnh gạch chéo cập nhật.

## Cập nhật OpenSpec

### Nâng cấp gói

```bash
npm install -g @fission-ai/openspec@latest
```

### Làm mới hướng dẫn agent

Chạy `openspec update` trong mỗi dự án để tạo lại hướng dẫn AI và đảm bảo lệnh gạch chéo mới nhất được kích hoạt.

## Đóng góp

- Cài phụ thuộc: `pnpm install`
- Build: `pnpm run build`
- Test: `pnpm test`
- Phát triển CLI cục bộ: `pnpm run dev` hoặc `pnpm run dev:cli`
- Commit theo quy ước (một dòng): `type(scope): subject`

## Giấy phép

MIT
