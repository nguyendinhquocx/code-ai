# Đặc tả Tính năng: Tối ưu Giao diện TODO App theo Triết lý Tối giản

**Feature Branch**: `002-ui-minimalism-polish`
**Ngày tạo**: 2025-10-25
**Trạng thái**: Nháp
**Input từ user**: "App đã hoàn thiện tuy nhiên cần tối ưu theo triết lý tối giản: bỏ đường viền không cần thiết, thêm hover states, custom checkbox icons, ẩn delete buttons, minimal modal"

## Kịch bản Người dùng & Kiểm thử *(bắt buộc)*

### User Story 1 - Input và Add Todo Tối giản (Ưu tiên: P1)

Khi người dùng muốn thêm todo mới, họ trải nghiệm giao diện tối giản và tự nhiên: ô input không có border rõ ràng, chỉ xuất hiện background xám nhẹ khi hover/focus, bo góc mượt mà, và không có nút "Thêm" (dùng Enter để submit).

**Tại sao ưu tiên này**: Đây là interaction chính và đầu tiên của user với app. Giao diện tối giản ở đây tạo ấn tượng ngay lập tức về triết lý thiết kế clean, giảm clutter trên màn hình.

**Kiểm thử độc lập**: Có thể kiểm thử đầy đủ bằng cách mở app, quan sát ô input (không có border khi idle), di chuột vào (thấy background xám nhẹ), nhập text và nhấn Enter (todo được tạo thành công), và verify nút "Thêm" không còn hiển thị.

**Kịch bản chấp nhận**:

1. **Cho trước** người dùng mở app TODO, **Khi** quan sát ô "Thêm task mới", **Thì** ô input không có border rõ ràng, background trong suốt, và có border-radius mượt mà
2. **Cho trước** người dùng đang ở trang chủ, **Khi** di chuột vào ô input, **Thì** background chuyển sang xám nhẹ (hover state)
3. **Cho trước** người dùng đang ở trang chủ, **Khi** click vào ô input để focus, **Thì** background chuyển sang xám nhẹ (focus state), không có box-shadow/glow effect
4. **Cho trước** người dùng đã nhập text vào ô input, **Khi** nhấn phím Enter, **Thì** todo được tạo và thêm vào list, ô input được clear
5. **Cho trước** người dùng quan sát form thêm todo, **Khi** tìm kiếm nút "Thêm", **Thì** không thấy nút submit nào (đã bị ẩn hoàn toàn)

---

### User Story 2 - Todo Items Tối giản với Hover Actions (Ưu tiên: P1)

Khi người dùng xem danh sách todos, họ thấy giao diện sạch sẽ: không có borders xung quanh mỗi todo item. Khi hover vào một todo, background chuyển sang xám nhẹ và nút delete (×) xuất hiện. Checkbox được thay thế bằng custom SVG icons (circle rỗng khi chưa complete, circle có checkmark khi complete).

**Tại sao ưu tiên này**: Todo list là nơi user dành nhiều thời gian nhất. Giao diện tối giản ở đây giúp focus vào nội dung, giảm distraction từ UI elements không cần thiết.

**Kiểm thử độc lập**: Có thể kiểm thử đầy đủ bằng cách tạo vài todos, quan sát list (không có borders), hover vào todo (thấy background xám và nút × xuất hiện), click checkbox (thấy icon chuyển từ circle rỗng sang circle có checkmark), và click × để xóa.

**Kịch bản chấp nhận**:

1. **Cho trước** có ít nhất 1 todo trong list, **Khi** quan sát list, **Thì** mỗi todo không có border ngoài, background trong suốt
2. **Cho trước** có ít nhất 1 todo trong list, **Khi** di chuột vào todo item, **Thì** background chuyển sang xám nhẹ và nút delete (×) xuất hiện ở bên phải
3. **Cho trước** người dùng di chuột ra khỏi todo item, **Khi** mouse leave, **Thì** background trở về trong suốt và nút delete biến mất
4. **Cho trước** todo chưa complete, **Khi** quan sát checkbox, **Thì** thấy icon SVG circle rỗng (stroke only)
5. **Cho trước** todo đã complete, **Khi** quan sát checkbox, **Thì** thấy icon SVG circle có checkmark bên trong
6. **Cho trước** người dùng hover vào todo, **Khi** click nút delete (×), **Thì** todo bị xóa khỏi list

---

### User Story 3 - Header và Completed Section Tối giản (Ưu tiên: P2)

Người dùng thấy header "TODO" không có border dưới (borderless). Phần "Đã hoàn thành" không có border/background, dấu dropdown (▼) được đặt trước text thay vì sau, tạo cảm giác tự nhiên hơn.

**Tại sao ưu tiên này**: Header và completed section là structural elements, không phải nội dung chính. Giảm visual weight ở đây giúp user focus vào todos thực sự.

**Kiểm thử độc lập**: Có thể kiểm thử đầy đủ bằng cách mở app, quan sát header "TODO" (không có border-bottom), scroll xuống completed section (không có border/background, dấu ▼ nằm trước text "Đã hoàn thành").

**Kịch bản chấp nhận**:

1. **Cho trước** người dùng mở app, **Khi** quan sát header "TODO", **Thì** không có border-bottom dưới header
2. **Cho trước** có ít nhất 1 todo completed, **Khi** quan sát section "Đã hoàn thành", **Thì** không có border ngoài và không có background color
3. **Cho trước** có ít nhất 1 todo completed, **Khi** quan sát toggle "Đã hoàn thành", **Thì** dấu dropdown (▼) nằm trước text, không phải sau
4. **Cho trước** section "Đã hoàn thành" đang mở, **Khi** hover vào toggle, **Thì** background chuyển sang xám nhẹ (hover state)

---

### User Story 4 - Modal và Subtasks Tối giản (Ưu tiên: P2)

Khi người dùng edit todo trong modal, họ thấy giao diện streamlined: không có nút × để close (click backdrop hoặc ESC), không có nút "Hủy" (click backdrop = hủy), chỉ có nút "Lưu", modal có border-radius mượt hơn. Title input không có border, chỉ có gạch ngang dưới với hover effect. Trong subtasks section, không hiển thị text "Chưa có subtask nào" khi empty, không có nút "Thêm" (dùng Enter), và delete buttons (×) chỉ hiện khi hover.

**Tại sao ưu tiên này**: Modal là focused interaction context. Giảm UI clutter ở đây giúp user tập trung vào việc edit content, không bị distract bởi nhiều buttons.

**Kiểm thử độc lập**: Có thể kiểm thử đầy đủ bằng cách click vào todo để mở modal, quan sát các elements (không có nút ×, không có nút Hủy, title có underline, không có text "Chưa có subtask"), thử add subtask bằng Enter, hover vào subtask để thấy delete button, click backdrop để đóng modal.

**Kịch bản chấp nhận**:

1. **Cho trước** người dùng click vào todo, **Khi** modal mở, **Thì** không có nút × ở góc phải header modal
2. **Cho trước** modal đang mở, **Khi** click vào backdrop (ngoài modal content), **Thì** modal đóng lại
3. **Cho trước** modal đang mở, **Khi** nhấn phím ESC, **Thì** modal đóng lại
4. **Cho trước** modal đang mở, **Khi** quan sát footer, **Thì** chỉ có nút "Lưu", không có nút "Hủy"
5. **Cho trước** modal đang mở, **Khi** quan sát title input, **Thì** không có border ngoài, chỉ có gạch ngang dưới (underline)
6. **Cho trước** modal đang mở, **Khi** hover vào title input, **Thì** underline chuyển màu hoặc thay đổi opacity (hover effect)
7. **Cho trước** modal đang mở và subtasks section rỗng, **Khi** quan sát subtasks container, **Thì** không có text "Chưa có subtask nào"
8. **Cho trước** modal đang mở, **Khi** quan sát subtask input area, **Thì** không có nút "Thêm"
9. **Cho trước** modal đang mở và đã nhập subtask title, **Khi** nhấn Enter, **Thì** subtask được thêm vào list
10. **Cho trước** modal có ít nhất 1 subtask, **Khi** hover vào subtask item, **Thì** nút delete (×) xuất hiện
11. **Cho trước** modal đang mở, **Khi** quan sát border-radius của modal, **Thì** góc được bo tròn mượt mà hơn (ví dụ: 12px thay vì 8px)

---

### Trường hợp Biên

- Điều gì xảy ra khi người dùng nhấn Enter trong ô input nhưng chưa nhập text? → Input không submit, không tạo todo rỗng
- Điều gì xảy ra khi người dùng hover ra khỏi todo item trong khi đang di chuột tới nút delete? → Nút delete vẫn biến mất ngay lập tức (người dùng phải hover lại để thấy delete button)
- Điều gì xảy ra khi modal đang mở và người dùng nhấn ESC nhiều lần? → Modal chỉ đóng một lần, không có side effects
- Điều gì xảy ra với completed todos khi hover? → Cùng hover behavior như active todos (background xám, delete button xuất hiện)

## Yêu cầu *(bắt buộc)*

### Yêu cầu Chức năng

- **FR-001**: Ô input "Thêm task mới" PHẢI không có border rõ ràng khi idle (border: none hoặc transparent)
- **FR-002**: Ô input "Thêm task mới" PHẢI hiển thị background xám nhẹ khi hover hoặc focus
- **FR-003**: Ô input "Thêm task mới" PHẢI có border-radius mượt mà (ít nhất 8px)
- **FR-004**: Nút "Thêm" bên cạnh input PHẢI bị ẩn hoàn toàn (display: none hoặc removed from DOM)
- **FR-005**: Form thêm todo PHẢI submit khi người dùng nhấn Enter trong ô input
- **FR-006**: Todo items PHẢI không có border ngoài (border: none)
- **FR-007**: Todo items PHẢI hiển thị background xám nhẹ khi hover
- **FR-008**: Nút delete (×) của todo item PHẢI ẩn khi không hover (opacity: 0)
- **FR-009**: Nút delete (×) của todo item PHẢI hiển thị khi hover vào todo (opacity: 1)
- **FR-010**: Checkbox của todo PHẢI được thay thế bằng custom SVG icon circle rỗng (unchecked state)
- **FR-011**: Checkbox của todo đã complete PHẢI hiển thị SVG icon circle có checkmark (checked state)
- **FR-012**: SVG icons PHẢI có stroke width mỏng (0.5-1px) để giữ aesthetic minimalist
- **FR-013**: Header "TODO" PHẢI không có border-bottom
- **FR-014**: Section "Đã hoàn thành" PHẢI không có border ngoài và background color
- **FR-015**: Toggle "Đã hoàn thành" PHẢI có dấu dropdown (▼) nằm trước text
- **FR-016**: Modal edit todo PHẢI không có nút close (×) ở header
- **FR-017**: Modal PHẢI đóng khi người dùng click vào backdrop (outside modal content)
- **FR-018**: Modal PHẢI đóng khi người dùng nhấn phím ESC
- **FR-019**: Footer của modal PHẢI chỉ có nút "Lưu", không có nút "Hủy"
- **FR-020**: Title input trong modal PHẢI không có border ngoài, chỉ có underline (border-bottom)
- **FR-021**: Title input trong modal PHẢI hiển thị hover effect trên underline (color change hoặc opacity change)
- **FR-022**: Subtasks container PHẢI không hiển thị text "Chưa có subtask nào" khi empty (empty state silent)
- **FR-023**: Subtask input area PHẢI không có nút "Thêm"
- **FR-024**: Subtask form PHẢI submit khi người dùng nhấn Enter trong input
- **FR-025**: Delete buttons (×) của subtasks PHẢI ẩn khi không hover
- **FR-026**: Delete buttons (×) của subtasks PHẢI hiển thị khi hover vào subtask item
- **FR-027**: Modal PHẢI có border-radius mượt hơn (ít nhất 12px)

## Tiêu chí Thành công *(bắt buộc)*

### Kết quả Đo lường được

- **SC-001**: Người dùng có thể nhận biết giao diện "cleaner" và "less cluttered" khi so sánh trước/sau (subjective feedback)
- **SC-002**: Số lượng UI elements visible trên màn hình giảm ít nhất 30% (đếm buttons, borders, visual separators)
- **SC-003**: Người dùng có thể hoàn thành các tác vụ cơ bản (add todo, complete todo, delete todo, edit todo) mà không cần relearn behaviors (zero additional learning curve)
- **SC-004**: Hover interactions phản hồi ngay lập tức (transition time < 200ms)
- **SC-005**: Giao diện mới không làm tăng thời gian hoàn thành tasks so với giao diện cũ (performance parity)
- **SC-006**: 90% người dùng thích giao diện mới hơn giao diện cũ khi được hỏi feedback (preference survey)

## Giả định *(optional)*

- Người dùng đã quen với pattern "nhấn Enter để submit form" (common web pattern)
- Người dùng đã quen với pattern "click backdrop để close modal" (common modal pattern)
- Custom SVG icons không gây vấn đề về accessibility (vẫn có thể interact bằng keyboard và screen readers)
- Ẩn delete buttons khi không hover không gây khó khăn trong việc discover functionality (hover là intuitive action)

## Ràng buộc *(optional)*

- Phải maintain existing functionality: tất cả features hiện tại phải vẫn hoạt động như trước
- Phải maintain accessibility: keyboard navigation và screen readers vẫn hoạt động
- Không được thay đổi data model hoặc business logic
- Chỉ refactor UI/CSS, không refactor JavaScript logic (trừ render functions cần thiết cho custom icons)

## Out of Scope *(optional)*

- Thêm animations/transitions phức tạp (chỉ simple hover transitions)
- Redesign layout hoặc information architecture
- Thêm dark mode
- Thêm themes hoặc customization options
- Performance optimization ngoài UI rendering
- Mobile responsive improvements (chỉ maintain existing responsive behavior)
