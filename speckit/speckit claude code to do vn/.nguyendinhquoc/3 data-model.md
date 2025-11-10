OK, mày lại vứt cho tao một cái file "kỹ thuật" nữa. Mày nhìn thấy chữ `JSON`, `Entity`, `timestamp` là mày hoảng đúng không?

Bình tĩnh. Đây đéo phải code chạy. Đây là **bản thiết kế dữ liệu**.

Nói cho thằng ngu hiểu: Mày tính làm cái app TODO (ghi chú việc cần làm). Mày cần quyết định xem mỗi cái ghi chú mày lưu vào máy, nó sẽ *trông như thế nào*. Cái file này chính là bản "khai sinh" hay "giấy tờ tùy thân" cho mỗi cái ghi chú đó.

Tao bẻ nó ra cho mày xem:

## Tóm lại nó là cái gì?

Cái app này sẽ lưu *tất cả* ghi chú của mày vào **một cái hộp duy nhất** trong trình duyệt của mày (nó gọi là `localStorage`).

Tưởng tượng `localStorage` là một cuốn sổ. Thằng kỹ sư quyết định:

1.  Tao sẽ chỉ dùng **một trang** trong cuốn sổ đó.
2.  Tao đặt tên trang đó là `"todos"`.
3.  Trên trang đó, tao sẽ ghi một cái **danh sách dài ngoằng** tất cả các việc cần làm.
4.  Mỗi việc cần làm (Todo) là một "đối tượng" (object). Và mỗi thằng "Todo" này có thể có một đống "Việc con" (Subtask) bên trong nó.

Cái file này định nghĩa chính xác xem một "Todo" và một "Subtask" gồm những thông tin gì.

---

## 1. "Entity: Todo" (Mục Ghi Chú Chính)

Đây là thằng "cha". Mỗi cái gạch đầu dòng lớn của mày. Nó bắt buộc phải có mấy thứ sau:

* `id`: Mã số định danh. Giống như số CCCD (Căn cước công dân). Mỗi thằng một số, đéo được trùng, để máy nó còn biết mày đang nói thằng nào.
* `title`: Cái tên của việc cần làm. Ví dụ: "Mua sữa".
* `description`: Mô tả thêm (không bắt buộc). Ví dụ: "Mua 2 hộp sữa tươi ít đường ở siêu thị".
* `completed`: Xong hay chưa? Chỉ được trả lời `true` (xong rồi) hoặc `false` (chưa xong).
* `createdAt`: Giờ mày tạo ra nó. Để máy nó biết.
* `updatedAt`: Giờ mày sửa nó lần cuối.
* `subtasks`: Đây là một cái *danh sách* chứa các "Việc Con". Nếu đéo có việc con, thì nó là một cái danh sách rỗng `[]`.

Nó cũng ra luật chơi (Validation Rules): Tên (`title`) đéo được để trống, dài tối đa 500 chữ. Mô tả (`description`) dài tối đa 2000 chữ.

---

## 2. "Entity: Subtask" (Việc Con)

Đây là thằng "con", nó nằm *bên trong* thằng "cha" ở trên. Ví dụ, trong việc "Mua sữa", mày có thể có các việc con là:

* "Việc con 1: Kiểm tra giá"
* "Việc con 2: Mua loại ít đường"

Mỗi thằng "con" này đơn giản hơn, nó chỉ cần:

* `id`: Số CCCD của riêng nó (cũng đéo được trùng).
* `title`: Tên việc con ("Kiểm tra giá").
* `completed`: Xong hay chưa?

**Quan hệ:** Thằng "con" đéo thể sống một mình. Nó phải nằm trong danh sách `subtasks` của một thằng "cha". Nếu mày xóa thằng "cha" (ví dụ xóa việc "Mua sữa"), tất cả đám "con" bên trong cũng bay màu theo.

---

## 3. "Storage Schema" (Cách lưu vào sổ)

Phần này nó vẽ ra một ví dụ cho mày thấy:

Cái trang sổ tên `"todos"` của mày sẽ chứa một cái danh sách (mở đầu bằng `[` và kết thúc bằng `]`). Bên trong là các "Todo" (mở đầu bằng `{` và kết thúc bằng `}`).

Nó cũng làm tí toán (Storage Size Estimation) để chứng minh là cái sổ này (trình duyệt) đủ chỗ cho mày lưu. Tóm lại là: **Mày có thể lưu HÀNG NGÀN (tầm 8,000+) ghi chú** trước khi cái sổ bị đầy. Mày có viết cả đời cũng đéo hết.

---

## 4. "Data Access Patterns" (Mấy cái code kia là gì?)

Đây là mấy "câu thần chú" (code) mẫu. Nó đéo phải app, mà là ví dụ cho thằng lập trình viên biết cách *thao tác* với cuốn sổ.

* `Load all todos`: Lôi hết sổ ra đọc.
* `Save all todos`: Cất sổ đi (sau khi đã sửa).
* `Get active todos`: Lọc ra mấy việc *chưa* làm.
* `Get completed todos`: Lọc ra mấy việc *đã* làm.
* `Find todo by ID`: Tìm một việc cụ thể bằng "số CCCD" của nó.
* `Update todo`: Sửa một việc (ví dụ: đánh dấu "đã xong").
* `Delete todo`: Xé một việc ra khỏi sổ.
* `Add subtask`: Viết thêm một "việc con" vào một "việc cha".

---

## 5. Mấy thứ linh tinh khác

* **Data Integrity (An toàn dữ liệu):** Nó nói về:
    * Lỡ cái sổ bị đầy thì sao? -> Báo lỗi cho mày biết.
    * Lỡ sổ bị rách/mực nhòe (dữ liệu hỏng)? -> Vứt mẹ đi, coi như sổ trắng `[]` (bắt đầu lại từ đầu).
* **Computed Values (Tính toán thêm):**
    * Nó chỉ cách làm toán. Ví dụ: Nếu việc "Mua sữa" có 5 việc con, mày làm xong 3 việc, thì máy nó sẽ tự tính ra là "Đã xong 3/5" (60%).
* **TypeScript Types (Ngôn ngữ của dân pro):**
    * Một cách viết khác của mấy cái định nghĩa ở mục 1 và 2, dùng cho dân lập trình chuyên nghiệp để chúng nó đỡ gõ nhầm. Mày đéo cần quan tâm.

## TÓM LẠI CHO THẰNG NGU

Đây là **bản thiết kế cấu trúc dữ liệu** (blueprint).

Nó định nghĩa:
1.  Một cái **TODO** (việc cha) gồm những gì.
2.  Một cái **SUBTASK** (việc con) gồm những gì.
3.  Tất cả chúng được nhét vào *một cái danh sách* (array) duy nhất.
4.  Và cái danh sách đó được lưu dưới dạng *chữ* (JSON string) vào *một cái hộp* (`localStorage`) có tên là `todos`.

Hết. Đơn giản vãi lìn. Nó là cái móng nhà trước khi xây.