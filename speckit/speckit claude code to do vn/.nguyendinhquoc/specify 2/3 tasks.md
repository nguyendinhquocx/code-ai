OK, mày lại vứt cho tao một cái `tasks.md` nữa.

Khoan. Mày phải tỉnh táo. Đây **đéo phải** cái file `tasks.md` 50 bước để "Xây nhà" (cái app `001-todo-list-app`) mà tao giải thích cho mày hôm trước.

Đây là file `tasks.md` của cái nhánh `002-ui-minimalism-polish`.

Nếu cái `tasks.md` cũ là "Bảng phân công xây nhà thô", thì cái `tasks.md` này là **"CHECKLIST 56 BƯỚC ĐỂ ĐÁNH BÓNG NỘI THẤT VÀ VỨT ĐỒ THỪA"**.

Nó là kế hoạch thi công cho cái `spec.md` (hợp đồng tối giản) và cái `plan.md` (kế hoạch tối giản) mà tao vừa nói.

Nó chi tiết vãi lìn. Tao bóc cho mày xem:

---

## 1. Triết lý Test: "ĐÉO TEST LOGIC, TEST BẰNG MẮT"

Đây là điểm cốt tử mày phải hiểu.

Cái file này nó nói rõ ngay từ đầu: **"Không có new automated tests"** (Đéo viết test tự động mới).

Tại sao? Vì cái "hợp đồng đánh bóng" này đéo thay đổi logic nghiệp vụ. Mày chỉ "sơn lại tường" (đổi CSS) và "thay ổ cắm" (đổi checkbox). Mày đéo "đi lại đường điện" (sửa logic).

**NHƯNG (cái này mới quan trọng):**

1.  **94 cái Test tự động CŨ PHẢI PASS 100%**. Mày sơn tường mà lỡ tay làm hỏng mẹ cái công tắc điện (làm hỏng logic cũ) là mày ăn cứt. Thằng kỹ sư phải chạy `npm test` liên tục (T002, T027, T046, T050) để đảm bảo nó đéo phá hỏng cái gì.
2.  Nó test bằng **"Manual visual checklist"** (Checklist bằng mắt). Tức là thằng thợ phải tự cầm một cái danh sách, đi một vòng quanh nhà và tích:
    * [ ] Viền (border) ở ô Input mất chưa? (T007)
    * [ ] Nút "Thêm" cút hẳn chưa? (T011)
    * [ ] Nút "Xóa" đã giấu đi chưa? Di chuột vào nó có hiện ra không? (T016, T018)
    * [ ] Nút "Hủy" trong cái bảng Modal cút luôn chưa? (T034)
    * [ ] Bấm phím ESC cái Modal có đóng không? (T043)

---

## 2. Bảng phân công (Nó băm việc ra sao)

Nó đéo làm một lèo, nó chia làm 7 giai đoạn, nhóm theo 4 cái "User Story" mà cái `spec.md` 002 yêu cầu:

* **Phase 1 & 2 (Dọn dẹp & Chuẩn bị):**
    * Chạy test cũ xem có hỏng gì không (T002).
    * Chụp ảnh màn hình cái app CŨ để lát còn so sánh (T003).
    * Chuẩn bị "thùng sơn": định nghĩa mấy cái màu xám nhạt khi di chuột (`--color-gray-50`) và thời gian chuyển động (`--transition-fast`) (T005, T006).

* **Phase 3 (Xử lý User Story 1 - Ô Input):**
    * Vứt viền, vứt nút "Thêm", thêm hiệu ứng xám khi di chuột.

* **Phase 4 (Xử lý User Story 2 - Các dòng Todo):**
    * Đây là phase phức tạp nhất.
    * **Phần CSS (Dễ):** Vứt viền, giấu nút "Xóa" (set `opacity: 0` và `opacity: 1` khi `:hover`) (T013-T018).
    * **Phần JavaScript (Khó):** Tháo cái checkbox cùi bắp `<input type="checkbox">` của trình duyệt ra. Tự "vẽ" một cái **checkbox bằng SVG xịn** (hình tròn rỗng, hình tròn có dấu check) và lắp nó vào (T019-T026).

* **Phase 5 & 6 (Xử lý US3 & US4 - Header & Modal):**
    * Vứt nốt mấy cái viền ở Header (T028).
    * Vứt sạch nút trong Modal (T033, T034).
    * Giấu nút "Thêm" của việc con (T040).

* **Phase 7 (Lau dọn & Nghiệm thu):**
    * Sau khi làm xong 50 việc, nó bắt thằng kỹ sư phải đi **test bằng BÀN PHÍM** (T052) và **test bằng MÁY ĐỌC CỦA NGƯỜI MÙ** (T053). Thằng này làm việc kỹ vãi đái, đéo phải đùa.

---

## TÓM LẠI CHO THẰNG NGU

Cái `tasks.md` này là một cái checklist **siêu chi tiết** để "tân trang" lại cái giao diện.

Nó đéo chỉ nói "Làm cho đẹp đi". Nó nói:

1.  Mày làm 56 việc này.
2.  Mày đéo được phá hỏng 94 cái test logic cũ.
3.  Mày phải tự "test bằng mắt" theo checklist này.
4.  Mày phải đảm bảo người mù và người không dùng chuột vẫn xài được (T052, T053).
5.  Nó ước tính một mình mày làm mất 6-8 tiếng.

Đây là cách một thằng chuyên nghiệp nó "refactor" giao diện. Cực kỳ có hệ thống.