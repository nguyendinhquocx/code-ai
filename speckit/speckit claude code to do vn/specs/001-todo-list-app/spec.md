# Đặc tả Tính năng: Ứng dụng TODO List

**Feature Branch**: `001-todo-list-app`
**Ngày tạo**: 2025-10-25
**Trạng thái**: Nháp
**Input từ user**: "Ứng dụng TODO list đơn giản. User có thể: Thêm todo mới với tiêu đề và mô tả, Đánh dấu todo đã hoàn thành, Sửa todo đã tạo, Xóa todo, Giao diện ngoài kiểu như to do của thằng microsoft, cái nào xong thì thuộc phân loại đã hoàn thành. ấn vào xổ ra, có thể hoàn tác to do, có thể có những mục con trong từng todo"

## Kịch bản Người dùng & Kiểm thử

### User Story 1 - Quản lý TODO cơ bản (Ưu tiên: P1)

Người dùng cần tạo, xem, sửa và xóa các todo items để quản lý công việc hàng ngày. Mỗi todo có tiêu đề và mô tả chi tiết.

**Tại sao ưu tiên này**: Đây là chức năng nền tảng (CRUD operations) mà không có nó thì app không có giá trị. Đây là MVP tối thiểu để user có thể bắt đầu sử dụng.

**Kiểm thử độc lập**: Có thể kiểm thử đầy đủ bằng cách tạo một todo mới, xem danh sách todos, chỉnh sửa todo, và xóa todo. User có thể quản lý danh sách công việc cơ bản mà không cần bất kỳ tính năng nào khác.

**Kịch bản chấp nhận**:

1. **Cho trước** người dùng đang ở màn hình chính, **Khi** người dùng nhập tiêu đề "Mua sữa" và mô tả "Mua 2 hộp sữa tươi ở siêu thị", **Thì** todo mới được tạo và hiển thị trong danh sách
2. **Cho trước** có ít nhất một todo trong danh sách, **Khi** người dùng click vào todo, **Thì** hiển thị chi tiết đầy đủ (tiêu đề và mô tả)
3. **Cho trước** người dùng đang xem một todo, **Khi** người dùng chỉnh sửa tiêu đề hoặc mô tả và lưu, **Thì** thông tin todo được cập nhật và hiển thị đúng
4. **Cho trước** có ít nhất một todo trong danh sách, **Khi** người dùng xóa todo, **Thì** todo biến mất khỏi danh sách

---

### User Story 2 - Đánh dấu hoàn thành và phân loại (Ưu tiên: P2)

Người dùng cần đánh dấu todo đã hoàn thành và xem chúng trong phần riêng biệt "Đã hoàn thành", tương tự Microsoft To Do. Các todo hoàn thành có thể được hoàn tác (unmark) để đưa về danh sách chính.

**Tại sao ưu tiên này**: Sau khi có khả năng tạo todos (P1), người dùng cần cách đánh dấu công việc đã xong và tổ chức chúng. Đây là tính năng quan trọng thứ hai để app có giá trị thực tế.

**Kiểm thử độc lập**: Có thể kiểm thử bằng cách tạo todos (từ P1), đánh dấu một số là hoàn thành, xác nhận chúng chuyển sang phần "Đã hoàn thành", và hoàn tác để đưa chúng về danh sách chính. Tính năng này hoạt động độc lập và mang lại giá trị rõ ràng.

**Kịch bản chấp nhận**:

1. **Cho trước** có một todo chưa hoàn thành, **Khi** người dùng đánh dấu checkbox hoàn thành, **Thì** todo chuyển sang trạng thái hoàn thành với visual indicator (gạch ngang text)
2. **Cho trước** có ít nhất một todo đã hoàn thành, **Khi** người dùng xem giao diện, **Thì** thấy phần "Đã hoàn thành" riêng biệt với các todos đã xong
3. **Cho trước** phần "Đã hoàn thành" đang collapsed, **Khi** người dùng click vào phần này, **Thì** phần mở ra hiển thị tất cả todos đã hoàn thành
4. **Cho trước** có todo trong phần "Đã hoàn thành", **Khi** người dùng uncheck checkbox, **Thì** todo quay lại danh sách chính với trạng thái chưa hoàn thành

---

### User Story 3 - Subtasks (mục con) (Ưu tiên: P3)

Người dùng cần chia nhỏ một todo phức tạp thành các subtasks (mục con) để quản lý công việc chi tiết hơn. Mỗi subtask có thể được đánh dấu hoàn thành độc lập.

**Tại sao ưu tiên này**: Sau khi có todo cơ bản và khả năng đánh dấu hoàn thành, subtasks giúp người dùng tổ chức công việc phức tạp tốt hơn. Đây là enhancement hữu ích nhưng không blocking cho việc sử dụng app.

**Kiểm thử độc lập**: Có thể kiểm thử bằng cách tạo một todo (từ P1), thêm nhiều subtasks vào todo đó, đánh dấu một số subtasks hoàn thành, và xác nhận progress được hiển thị đúng (ví dụ: "2/5 hoàn thành"). Tính năng này tự contained và không ảnh hưởng đến P1 và P2.

**Kịch bản chấp nhận**:

1. **Cho trước** người dùng đang xem chi tiết một todo, **Khi** người dùng thêm subtask mới với tiêu đề "Viết outline", **Thì** subtask được thêm vào dưới todo chính
2. **Cho trước** một todo có nhiều subtasks, **Khi** người dùng xem todo, **Thì** hiển thị tổng số subtasks và số lượng đã hoàn thành (ví dụ: "3/5 hoàn thành")
3. **Cho trước** một todo có subtasks, **Khi** người dùng đánh dấu một subtask hoàn thành, **Thì** subtask được đánh dấu xong và số lượng hoàn thành tăng lên
4. **Cho trước** một todo có subtasks, **Khi** người dùng xóa một subtask, **Thì** subtask biến mất và số lượng tổng giảm đi

---

### Trường hợp Biên

- Điều gì xảy ra khi người dùng tạo todo chỉ có tiêu đề mà không có mô tả? (Được phép, mô tả là optional)
- Điều gì xảy ra khi người dùng tạo subtask chỉ có tiêu đề? (Được phép, subtask chỉ cần tiêu đề)
- Hệ thống xử lý thế nào khi xóa một todo có nhiều subtasks? (Xóa todo parent sẽ xóa tất cả subtasks)
- Điều gì xảy ra khi tất cả subtasks của một todo đều hoàn thành? (Todo parent vẫn giữ trạng thái riêng, không tự động đánh dấu hoàn thành)
- Hệ thống xử lý thế nào khi người dùng đánh dấu todo parent hoàn thành nhưng vẫn còn subtasks chưa xong? (Cho phép, subtasks không bắt buộc phải hoàn thành trước)

## Yêu cầu

### Yêu cầu Chức năng

- **FR-001**: Hệ thống PHẢI cho phép người dùng tạo todo mới với tiêu đề (bắt buộc) và mô tả (optional)
- **FR-002**: Hệ thống PHẢI hiển thị danh sách tất cả todos chưa hoàn thành
- **FR-003**: Người dùng PHẢI có khả năng chỉnh sửa tiêu đề và mô tả của todo đã tạo
- **FR-004**: Người dùng PHẢI có khả năng xóa một todo
- **FR-005**: Hệ thống PHẢI cho phép người dùng đánh dấu todo là hoàn thành
- **FR-006**: Hệ thống PHẢI tự động chuyển todos đã hoàn thành sang phần "Đã hoàn thành" riêng biệt
- **FR-007**: Hệ thống PHẢI cho phép người dùng mở/đóng (expand/collapse) phần "Đã hoàn thành"
- **FR-008**: Người dùng PHẢI có khả năng hoàn tác (unmark) todo đã hoàn thành để đưa về danh sách chính
- **FR-009**: Hệ thống PHẢI cho phép người dùng thêm subtasks (mục con) vào một todo
- **FR-010**: Hệ thống PHẢI hiển thị progress của subtasks (ví dụ: "3/5 hoàn thành")
- **FR-011**: Người dùng PHẢI có khả năng đánh dấu từng subtask hoàn thành độc lập với todo parent
- **FR-012**: Người dùng PHẢI có khả năng xóa subtask
- **FR-013**: Hệ thống PHẢI lưu trữ todos persistent (không mất khi refresh/đóng app)

### Entities Chính

- **Todo**: Đại diện cho một công việc cần làm. Có các thuộc tính: ID duy nhất, tiêu đề (bắt buộc), mô tả (optional), trạng thái hoàn thành (true/false), danh sách subtasks (optional), thời gian tạo, thời gian cập nhật
- **Subtask**: Đại diện cho một mục con trong todo. Có các thuộc tính: ID duy nhất, tiêu đề (bắt buộc), trạng thái hoàn thành (true/false), ID của todo parent

## Tiêu chí Thành công

### Kết quả Đo lường được

- **SC-001**: Người dùng có thể tạo một todo mới trong vòng dưới 5 giây
- **SC-002**: Người dùng có thể tìm và đánh dấu một todo hoàn thành trong vòng dưới 3 giây
- **SC-003**: Giao diện phản hồi mượt mà, mọi thao tác (tạo, sửa, xóa, đánh dấu) phải có feedback ngay lập tức (dưới 100ms)
- **SC-004**: 90% người dùng có thể hiểu cách sử dụng app mà không cần hướng dẫn (intuitive UI)
- **SC-005**: Todos được lưu persistent, người dùng không mất dữ liệu khi refresh hoặc đóng app

## Giả định

- Người dùng truy cập app từ một thiết bị duy nhất (không cần sync giữa nhiều devices)
- Người dùng không cần tính năng authentication (app là local, không có multi-user)
- Dữ liệu được lưu trữ local (browser storage hoặc local database)
- Giao diện tương tự Microsoft To Do có nghĩa: minimalist, clean, phần "Đã hoàn thành" collapsible ở dưới danh sách chính
- Không cần tính năng due dates, reminders, tags, categories trong phase này (có thể thêm sau)

## Ràng buộc

- Giao diện phải tuân thủ UI minimalism principles từ constitution: màu trắng/đen/xám, không icon trừ khi absolutely necessary, tối giản
- Performance: Initial load < 3 giây, interaction response < 100ms (theo constitution)
- Phải hoạt động offline (không phụ thuộc server)
- Code phải clean và có test coverage đầy đủ (theo constitution)

## Out of Scope

- Tính năng sync giữa nhiều devices (cloud sync)
- Authentication và multi-user support
- Due dates và reminders
- Tags, categories, hoặc folders để phân loại todos
- Tính năng collaboration (share todos với người khác)
- Mobile native apps (focus vào web app trước)
- Dark mode (có thể thêm sau, không phải priority)
- Tính năng search và filter nâng cao
