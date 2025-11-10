Mày vứt cho tao cái `spec.md` mới (`002-ui-minimalism-polish`). Tao thấy rồi.

Đây đéo phải là "Hợp đồng xây nhà" như cái `spec.md` lần trước. Cái app của mày cơ bản là "xây xong" rồi (đã hoàn thiện).

Cái này là **"Hợp đồng Đánh bóng & Tối ưu Nội thất"**.

Mày hỏi tao thấy sao à? Tao thấy thằng viết cái spec này là một thằng bị ám ảnh bởi **Triết lý Tối giản (Minimalism)**. Triết lý chung của nó là: **"Nếu nó không PHẢI ở đó, GIẤU HẾT MẸNÓ ĐI."**

Nó cực kỳ chi tiết. Nó chia làm 4 "User Story" để mày "đánh bóng" lại cái app:

---

### Story 1: Cái ô "Thêm việc"

Nó muốn:
* Vứt mẹ cái viền (border) của ô input đi.
* Vứt luôn cái nút "Thêm". Mày gõ xong phải tự biết nhấn **Enter** để thêm.
* Khi mày di chuột vào (hover) hoặc bấm vào (focus), nó chỉ hiện một cái nền xám nhẹ. Sạch.

### Story 2: Mấy cái "Việc cần làm" (Todo Items)

Nó muốn:
* Vứt luôn viền của từng cái gạch đầu dòng.
* Vứt cái checkbox mặc định của trình duyệt, thay bằng **icon SVG xịn** (hình tròn rỗng, và hình tròn có dấu check).
* **Giấu nút "Xóa" (×)**. Mày phải di chuột vào cái việc đó thì nút "Xóa" mới lòi ra.

### Story 3: Mấy cái linh tinh (Header, mục Đã xong)

Nó muốn:
* Vứt cái viền chân của cái tiêu đề "TODO".
* Đảo cái dấu (▼) của mục "Đã hoàn thành" ra **trước** cái chữ, thay vì sau.

### Story 4: Cái Bảng "Sửa chi tiết" (Modal)

Đây là lúc nó chơi "tới bến" với chủ nghĩa tối giản:
* **VỨT NÚT "XÓA (×)"** ở góc trên.
* **VỨT LUÔN NÚT "HỦY" (Cancel)**.
* Mày muốn đóng cái bảng này? Một là bấm **ESC**, hai là bấm ra **vùng mờ bên ngoài** (backdrop). Đéo có nút cho mày bấm.
* Cái ô "Tiêu đề" cũng đéo có viền, chỉ có cái **gạch chân** (underline).
* Mục "Việc con" (Subtasks) nếu rỗng thì phải **im lặng** (đéo được hiện chữ "Chưa có subtask nào").
* Nút "Thêm" việc con cũng bị vứt. Mày phải tự biết dùng **Enter**.
* Nút "Xóa" việc con cũng bị giấu, di chuột vào mới thấy.

---

## Tao thấy sao?

Mày hỏi tao thấy sao, tao trả lời:

### 1. Về mặt kỹ thuật: Đây là một cái spec TỐT

Nó tốt vì nó **siêu chi tiết**. Nó đéo nói mồm "Làm cho nó tối giản đi". Nó nói rõ:
* "Header PHẢI không có border-bottom" (`FR-013`).
* "Nút delete PHẢI ẩn khi không hover (opacity: 0)" (`FR-008`).
* "Modal PHẢI đóng khi nhấn phím ESC" (`FR-018`).

Mọi thứ đều có "Kịch bản chấp nhận" (Acceptance Criteria). Cứ thế mà làm, đéo cãi nhau được. Nó định lượng được cả "Tiêu chí thành công" (ví dụ: giảm 30% UI elements).

### 2. Về mặt trải nghiệm: Nó là một canh bạc

Mày phải hiểu cái **GIÁ PHẢI TRẢ** của "chủ nghĩa tối giản".

Nó đánh cược toàn bộ vào một thứ: **Sự thân quen của người dùng (Discoverability)**.

* Nó giấu nút "Thêm".
* Nó giấu nút "Xóa".
* Nó giấu nút "Hủy".

Nó tin rằng người dùng của mày "đủ thông minh" để biết là phải "nhấn Enter" hoặc "click ra ngoài". Cái spec này nó ghi rõ trong mục "Giả định" (Assumptions) là nó tin như vậy.

**Rủi ro là gì?**
Một thằng ngu 100% mới vào (new user), nó nhìn cái giao diện đéo có nút "Thêm", đéo có nút "Xóa", nó sẽ chửi: "Địt mẹ, app rác, đéo biết dùng."

**Tóm lại:**
Cái spec này là **tốt, xịn, chi tiết**, và có triết lý thiết kế rất rõ ràng (minimalism). Nhưng nó là kiểu "tối giản cao cấp" (opinionated), chấp nhận **hy sinh sự dễ tìm (discoverability)** của người mới để **đổi lấy sự sạch sẽ (cleanliness)** cho người dùng quen.

Nếu tệp khách hàng của mày là dân sành công nghệ, quen dùng đồ xịn (như Things 3 hay Todoist), thì triển. Còn nếu app này cho mẹ mày ở quê dùng, thì dẹp mẹ đi.