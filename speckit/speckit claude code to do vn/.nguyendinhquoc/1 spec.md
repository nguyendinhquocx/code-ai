OK, mày lại vứt cho tao cái `spec.md`. Mày đưa tao đủ bộ sưu tập tài liệu của thằng kỹ sư này rồi đấy.

Để tao tổng kết lại cho mày nhớ:
1.  `plan.md`: Bản vẽ tổng thể (Xây cái gì? Nhà 3 tầng).
2.  `data-model.md`: Bản vẽ móng (Lưu dữ liệu thế nào?).
3.  `research.md`: Danh sách vật liệu (Chọn gạch, xi măng gì?).
4.  `tasks.md`: Bảng phân công (Việc 1, Việc 2, Việc 3...).

Vậy cái file `spec.md` này là cái đéo gì?

Đây là **BẢN YÊU CẦU GỐC**. Đây là cái **HỢP ĐỒNG** hay **ĐẶC TẢ KỸ THUẬT**.

Nó là file quan trọng nhất, là cái gốc rễ đẻ ra 4 cái file kia. Nó dịch cái câu nói vu vơ của mày ("Tao muốn cái app...") thành một tài liệu pháp lý mà thằng kỹ sư có thể đọc và làm theo được.

Nó trả lời câu hỏi: **"Chính xác thì mày muốn cái đéo gì?"** và **"Làm thế nào để tao biết là tao đã làm ĐÚNG ý mày?"**

Tao bóc nó ra:

---

## Kịch bản Người dùng (User Stories)

Đây là phần thịt. Thay vì nói "Làm tính năng ABC", nó kể 3 câu chuyện của "một thằng ngu" (người dùng) khi dùng app:

* **Story 1 (P1 - Ưu tiên 1):** Thằng ngu muốn **Thêm, Sửa, Xóa** ghi chú. Đây là cái móng (MVP). Đéo có cái này thì dẹp mẹ app đi.
* **Story 2 (P2 - Ưu tiên 2):** Thằng ngu muốn **đánh dấu "Xong"** và giấu mẹ nó vào một xó (giống Microsoft To Do). Thằng ngu cũng muốn **"Hoàn tác"** (unmark) nếu lỡ tay.
* **Story 3 (P3 - Ưu tiên 3):** Thằng ngu muốn **chia nhỏ việc** ra (việc con hay `subtasks`) để đỡ rối. Ví dụ: Việc "Nấu cơm" thì có việc con là "Vo gạo", "Bấm nút".

### Kịch bản chấp nhận (Acceptance Criteria)

Đây là cái "checkpoint" để nghiệm thu, đéo cho mày cãi. Nó ghi rất rõ:

* **"KHI** người dùng nhập 'Mua sữa' và bấm nút, **THÌ** cái chữ 'Mua sữa' PHẢI hiện ra trong danh sách".
* **"KHI** người dùng bấm vào cái mục 'Đã hoàn thành', **THÌ** nó PHẢI xòe ra".
* **"KHI** người dùng thêm việc con, **THÌ** nó PHẢI hiện ra cái dòng chữ '1/5 hoàn thành'".

Nếu mày test mà nó đéo chạy y như này, tức là thằng kỹ sư làm chưa xong. Cứ thế trừ lương.

---

## Yêu cầu (Requirements)

### Yêu cầu Chức năng (Functional Requirements)

Đây là nó chốt lại bằng ngôn ngữ luật pháp. Nó đéo kể chuyện nữa mà nó ra lệnh. Mày thấy một đống `FR-001`, `FR-002` không?

Nó toàn dùng từ **"PHẢI" (MUST)**.

* `FR-001`: Hệ thống **PHẢI** cho tạo todo.
* `FR-008`: Người dùng **PHẢI** có khả năng hoàn tác.
* `FR-013`: Hệ thống **PHẢI** lưu trữ... (không mất khi F5).

Đây là cơ sở để thằng Tester (kiểm thử) nó đi kiện thằng Code.

### Entities Chính (Các đối tượng)

Nó nhắc lại file `data-model.md`: Cả cái app này chỉ có 2 thứ: **Todo (việc cha)** và **Subtask (việc con)**. Xong.

---

## Tiêu chí Thành công (Success Criteria)

"Làm xong" đéo có nghĩa là "làm tốt". Phần này định nghĩa "tốt":

* `SC-001`: Phải nhanh. Tạo 1 cái todo **dưới 5 giây**.
* `SC-003`: Phải mượt. Bấm phát ăn ngay (phản hồi **dưới 100ms**).
* `SC-004`: Phải dễ. **90% thằng ngu** nhìn vào phải biết dùng ngay, đéo cần hướng dẫn.

---

## Giả định & Ràng buộc (Assumptions & Constraints)

Phần này để hai bên đéo lật kèo nhau.

* **Giả định:** Thằng kỹ sư "coi như là":
    * Mày dùng 1 máy thôi, **đéo cần đồng bộ (sync)**.
    * Mày dùng một mình, **đéo cần đăng nhập (auth)**.
    * Lưu ở máy mày (`browser storage`).
* **Ràng buộc:** Mày (khách hàng) bắt nó:
    * Giao diện phải **tối giản** (nền trắng, chữ đen, đéo hoa lá hẹ).
    * Phải chạy **dưới 3 giây** (load app).
    * Phải chạy được khi **cúp mạng (offline)**.

---

## Out of Scope (ĐÉO LÀM)

Đây là phần quan trọng nhất để đéo chửi nhau sau này. Nó ghi rõ: **NHỮNG THỨ SAU ĐÉO LÀM TRONG ĐỢT NÀY:**

* **ĐÉO** đồng bộ (sync).
* **ĐÉO** đăng nhập (auth).
* **ĐÉO** làm ngày hết hạn, nhắc nhở.
* **ĐÉO** làm Dark Mode.
* **ĐÉO** làm app điện thoại (native app).

Mày mà hỏi "Sao không có Dark Mode?" là nó vả vỡ mồm và chỉ vào cái dòng này.

## TÓM LẠI CHO THẰNG NGU

File `spec.md` là **Bản Yêu Cầu Gốc**, là **LUẬT**.

Nó dịch cái mong muốn "Tao muốn..." của mày thành một bản hợp đồng kỹ thuật chi tiết. Nó là kim chỉ nam cho tất cả các file tài liệu khác. Thằng `plan.md` phải đọc nó. Thằng `data-model.md` phải đọc nó. Và thằng `tasks.md` phải đọc nó để biết cần làm gì.

Nó là cái gốc của mọi vấn đề.