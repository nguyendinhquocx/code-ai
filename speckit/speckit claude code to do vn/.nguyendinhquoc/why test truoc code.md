Mày hỏi một câu hay đấy. Nghe nó ngu vãi lìn đúng không? Giống như mày ra đề thi trước khi mày soạn giáo án vậy.

Nhưng đây là lý do tại sao dân chuyên nghiệp (pro) nó làm thế, còn bọn gà mờ (amateur) thì cắm đầu vào code trước.

Nó gọi là **TDD (Test-Driven Development)** - Phát triển Hướng Kiểm thử.

---

## 1. Nó bắt mày phải NGỪNG NGÁO và BIẾT MÌNH MUỐN CÁI ĐÉO GÌ

Đây là lý do quan trọng nhất.

* **Bọn gà mờ:** Cắm đầu vào code 500 dòng. Chạy. Lỗi. Sửa. Chạy. Lỗi. Sửa 2 tiếng đồng hồ mới nhận ra: "Địt mẹ, đáng lẽ cái hàm này phải trả về một con số, mình lại trả về một cái chữ." Phí mẹ 2 tiếng cuộc đời.
* **Dân pro (Viết test trước):** Nó viết ra cái "hợp đồng" (cái test) trước. Nó nói: "Tao cần một cái hàm tên `createTodo`. Tao đéo quan tâm mày code nó thế nào. Nhưng nếu tao ném cho mày cái tiêu đề 'Mua sữa', mày PHẢI trả về cho tao một object có `id` và `title` là 'Mua sữa'. Nếu mày trả về `null` là mày FAIL."

Cái test đó chính là mày **định nghĩa "thành công" là gì** TRƯỚC KHI mày bắt tay vào làm. Mày dùng não để "thiết kế" trước, thay vì dùng tay để "thử và sai".

---

## 2. Mày biết chính xác KHI NÀO MÀY XONG

Code theo kiểu truyền thống:
* **Sếp:** "Xong chưa?"
* **Mày:** "Em... em nghĩ là xong rồi."
* **Sếp:** "Nghĩ cái đéo gì? Test hết 10 trường hợp biên chưa?"
* **Mày:** "Em mới test 2 cái..."

Code theo kiểu TDD:
* Mày viết 10 cái test (10 kịch bản).
* Màn hình báo: **10/10 ĐỎ (FAIL)**.
* Mày bắt đầu code (cái `Implementation` trong file `tasks.md` của mày đó).
* Màn hình báo: **5/10 ĐỎ**.
* Mày code tiếp...
* Màn hình báo: **10/10 XANH (PASS)**.
* Mày đi pha cafe. Mày **XONG** rồi. Mày tự tin 100% là code của mày chạy đúng 10 kịch bản đó. Đéo nói nhiều.

---

## 3. Nó ÉP MÀY phải viết code SẠCH, đéo thể viết BẨN

Tại sao? Vì code "bẩn" (một cái hàm 500 dòng, làm 10 việc một lúc) thì **đéo thể nào test nổi**.

Mày tưởng tượng một cái hàm tên `handleUserRequest` nó làm 7 việc:
1.  Check đăng nhập
2.  Lấy dữ liệu từ database
3.  Tính toán logic
4.  Lưu lại vào database
5.  Gửi email
6.  Ghi log
7.  Trả về kết quả

Mày test cái hàm này kiểu đéo gì?

Nhưng nếu mày viết test trước, mày sẽ nhận ra: "Địt mẹ, hàm này phức tạp vãi lìn, đéo test được".

Nó *ép* mày phải bẻ nhỏ nó ra:
* `function checkLogin(user)`
* `function getData(userId)`
* `function calculateLogic(data)`
* `function sendEmail(result)`

Mày sẽ viết test cho từng cái hàm nhỏ xíu này. Và khi mày bị ép bẻ nhỏ code, code của mày tự nhiên nó sẽ **sạch**, nó sẽ **module hóa** (giống như cách cái `plan.md` của mày chia `todos.js`, `storage.js`, `ui.js` đấy). Mày bị *ép* phải làm một kiến trúc sư tốt.

---

## 4. Nó là cái LƯỚI BẢO VỆ để mày đéo PHÁ HỎNG cái cũ

Đây là cái lợi ích ăn tiền về lâu dài.

* Hôm nay, mày làm `User Story 1` (US1 - CRUD cơ bản). Mày viết 20 cái test cho nó. Tất cả đều XANH.
* Tuần sau, mày làm `User Story 2` (US2 - Đánh dấu hoàn thành). Mày viết thêm 10 cái test.
* Trong lúc code US2, mày "lỡ tay" sửa một dòng code mà mày đéo biết là nó dùng chung với US1.
* Nếu đéo có test, mày chỉ biết test US2 chạy ngon. Xong.
* Nếu có test (TDD): Mày chạy lại **TOÀN BỘ 30 CÁI TEST**. Cái bảng test nó chửi: "ĐM, 28/30 XANH. 2 cái test của US1 vừa bị ĐỎ!".
* Mày biết ngay: "Aha, tao vừa làm hỏng mẹ cái tính năng của US1 rồi." Mày sửa lại ngay lập tức.

Bộ test nó như cái "lưới an toàn". Mày có thể bay nhảy, refactor, sửa code thoải mái mà đéo sợ ngã vỡ mồm mà không biết.

---

**Tóm lại:**

Viết test trước đéo phải là một nghi thức rườm rà. Nó là một **kỷ luật** của kỹ sư chuyên nghiệp. Nó chuyển việc code từ "nghệ thuật mò mẫm" thành "khoa học kỹ thuật":

1.  **Định nghĩa** (Test)
2.  **Thi công** (Code)
3.  **Nghiệm thu** (Pass)

Bọn gà thì code bằng tay. Dân pro thì code bằng não (viết test).