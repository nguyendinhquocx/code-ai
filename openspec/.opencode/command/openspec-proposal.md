---
name: "OpenSpec: Proposal"
description: "Tạo đề xuất thay đổi OpenSpec mới và validate nghiêm ngặt."
category: OpenSpec
tags: [openspec, change]
---
<!-- OPENSPEC:START -->
**Nguyên tắc bảo vệ**
- **BẮT BUỘC**: Tất cả nội dung trong `proposal.md`, `tasks.md`, `design.md`, và `spec.md` MUST viết bằng TIẾNG VIỆT (trừ headers cấu trúc và lệnh). Xem chi tiết tại `openspec/AGENTS.md`.
- Ưu tiên cách làm đơn giản, tối thiểu trước, chỉ thêm độ phức tạp khi được yêu cầu hoặc thực sự cần thiết.
- Giữ phạm vi thay đổi chặt chẽ theo kết quả được yêu cầu.
- Tham khảo `openspec/AGENTS.md` (nằm trong thư mục `openspec/`—chạy `ls openspec` hoặc `openspec update` nếu không thấy) nếu cần thêm quy ước hoặc làm rõ về OpenSpec.
- Xác định bất kỳ chi tiết mơ hồ nào và hỏi thêm câu hỏi cần thiết trước khi chỉnh sửa file.

**Các bước thực hiện**
0. **PHASE -1: Pre-requisites Discovery** (QUAN TRỌNG - Chạy trước tất cả):

   a. **Phân tích mô tả thay đổi** để detect external dependencies:
      - Load detection rules từ prerequisites framework
      - Path: Find `prerequisites/templates/detection-rules.yaml` relative to workspace root
      - Parse user input tìm keywords: "supabase", "openai", "stripe", "database", "api", "auth", etc.
      - Match với services trong detection rules

      **Framework check**: Nếu prerequisites framework không tìm thấy:
      ```
      Prerequisites framework not found.

      Phase -1 requires framework at: prerequisites/

      Options:
      (1) Skip Phase -1 (proceed without resource check)
      (2) Setup framework (see docs)

      Continue without Phase -1? [Y/n]
      ```

   b. **Nếu KHÔNG detect services nào**:
      - Skip Phase -1 (silent - không thông báo gì)
      - Proceed trực tiếp bước 1

   c. **Nếu DETECT được services**:

      **c.1. Present checklist:**
      ```
      PHASE -1: PRE-REQUISITES DISCOVERY

      Phát hiện proposal cần external services:

      BẮT BUỘC:
      - [Service 1]: [Resources cần]
      - [Service 2]: [Resources cần]

      TÙY CHỌN:
      - [Optional Service]: [Resources cần]

      Thời gian setup estimate: ~[X] phút

      Tiếp tục setup? [Y/skip/later]
      ```

      **c.2. Interactive setup flow:**

      For each service:

      **Check existing:**
      ```
      Checking [Service]...

      [Nếu đã có trong .env.local]:
        Found: [KEY] (validated [timestamp])
        Re-validate? [Y/skip] → If Y: validate → continue

      [Nếu chưa có]:
        Continue setup
      ```

      **Collect resources:**
      ```
      Setup [Service]

      Mày đã có [Service] keys chưa? [Y/n]

      IF Y:
        Paste theo format:
        SERVICE_KEY=value

      IF n:
        Guide setup chi tiết:
        [Load guide: prerequisites/guides/[service]-setup.md]
        [Display full guide]

        Sau khi setup xong, paste keys:
      ```

      **Validate:**
      ```
      Validating [Service]...

      Checking [KEY]:
        Format: [pattern check]
        Connection: [API test]

      [Nếu OK]: Proceed
      [Nếu FAIL]:
        Error: [details]

        Options:
        (1) Nhập lại
        (2) Skip (nếu optional)
        (3) Xem guide lại
      ```

      **Storage:**
      ```
      Saving [Service] configs...

      Created/Updated:
      - .env.local
      - config/prerequisites.yaml

      [Service]: READY

      SECURITY CHECK:
      Verifying .gitignore...

      [IF .gitignore missing .env.local]:
        WARNING: .env.local not in .gitignore!

        Risk: Secrets có thể bị commit lên git

        Action needed:
        Add to .gitignore:
          .env.local
          config/prerequisites.yaml

        Continue anyway? [Y/n]

      [IF .env.local in .gitignore]:
        ✓ .env.local properly ignored
      ```

      **c.3. Summary:**
      ```
      PHASE -1 HOÀN THÀNH

      Đã configured:
      - [Service 1]: READY
      - [Service 2]: READY

      Skipped:
      - [Optional Service]: SKIPPED

      Files:
      - .env.local (gitignored)
      - config/prerequisites.yaml

      Có thể proceed với proposal generation.
      ```

   d. **Special cases:**

   - **User chưa sẵn sàng**: Nếu user chọn "later", lưu checkpoint:
     ```
     Prerequisites chưa setup.

     Mày có thể:
     - Continue proposal (resources sẽ cần sau)
     - Run /prereq.setup khi sẵn sàng

     Note: Proposal có thể thiếu chi tiết về resources.
     ```

   - **Partial setup**: Nếu user skip một số optional services:
     ```
     Một số optional services chưa setup.

     Proposal sẽ note các services available.
     Có thể add later với /prereq.setup.
     ```

   - **All ready**: Nếu tất cả services đã có:
     ```
     All resources validated: READY

     Proceeding với proposal generation...
     ```

1. Xem lại `openspec/project.md`, chạy `openspec list` và `openspec list --specs`, kiểm tra code hoặc docs liên quan (ví dụ qua `rg`/`ls`) để làm căn cứ cho đề xuất dựa trên hành vi hiện tại; ghi chú bất kỳ khoảng trống nào cần làm rõ.
2. Chọn một `change-id` duy nhất bắt đầu bằng động từ và tạo khung `proposal.md`, `tasks.md`, và `design.md` (khi cần) trong `openspec/changes/<id>/`.
3. Ánh xạ thay đổi thành các capabilities hoặc requirements cụ thể, chia nhỏ các nỗ lực đa phạm vi thành các spec deltas riêng biệt với mối quan hệ và trình tự rõ ràng.
4. Ghi lại lý do kiến trúc trong `design.md` khi giải pháp trải rộng nhiều hệ thống, giới thiệu pattern mới, hoặc yêu cầu thảo luận đánh đổi trước khi commit vào specs.
5. Soạn thảo spec deltas trong `changes/<id>/specs/<capability>/spec.md` (một thư mục cho mỗi capability) sử dụng `## ADDED|MODIFIED|REMOVED Requirements` với ít nhất một `#### Scenario:` cho mỗi requirement và tham chiếu chéo các capabilities liên quan khi cần.
6. Soạn thảo `tasks.md` như một danh sách có thứ tự các mục công việc nhỏ, có thể kiểm chứng, mang lại tiến độ người dùng nhìn thấy được, bao gồm validation (tests, tooling), và làm nổi bật các dependencies hoặc công việc có thể song song hóa.
7. Validate với `openspec validate <id> --strict` và giải quyết mọi vấn đề trước khi chia sẻ đề xuất.

**Tham khảo**
- Dùng `openspec show <id> --json --deltas-only` hoặc `openspec show <spec> --type spec` để kiểm tra chi tiết khi validation thất bại.
- Tìm kiếm các requirements hiện có với `rg -n "Requirement:|Scenario:" openspec/specs` trước khi viết mới.
- Khám phá codebase với `rg <keyword>`, `ls`, hoặc đọc file trực tiếp để đề xuất phù hợp với thực tế triển khai hiện tại.
<!-- OPENSPEC:END -->
