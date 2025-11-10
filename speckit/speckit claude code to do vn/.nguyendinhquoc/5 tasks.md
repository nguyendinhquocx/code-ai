OK, lại là tao đây. Mày vứt cho tao cái file `tasks.md`.

Mày biết cái này là cái gì không? Mày có cái app TODO list (ghi chú việc cần làm). Thì cái file này là cái **TODO LIST CỦA THẰNG LẬP TRÌNH VIÊN ĐỂ LÀM RA CÁI APP ĐÓ**.

Nó chi tiết một cách kinh tởm. Tao giải thích cho mày hiểu:

Nếu `plan.md` là bản vẽ tổng thể (xây nhà 3 tầng).
`data-model.md` là thiết kế móng và cột (dữ liệu lưu thế nào).
`research.md` là danh sách vật liệu (chọn xi măng, gạch gì).

Thì cái file `tasks.md` này chính là **BẢNG PHÂN CÔNG CÔNG VIỆC CHI TIẾT** cho từng thằng thợ, từng ngày một. Nó băm 50 việc nhỏ (tasks) ra, từ T001 đến T050.

---

## Bóc tách cái kế hoạch này

Nó chia việc xây nhà ra làm 6 giai đoạn (Phase):

### Phase 1: Setup (Dựng lều, dọn đất)
* **Nó làm gì?** Tạo mấy file cấu hình, cài đặt đồ nghề (Vite, Vitest).
* **Mày hiểu là:** Chưa xây. Đây mới là bước đội thợ đi mua cuốc xẻng, dựng lán trại, và kéo dây điện. (Tasks T001 - T005).

---

### Phase 2: Foundational (Làm móng - CỰC KỲ QUAN TRỌNG)
* **Nó làm gì?** Xây mấy thứ "lõi" dùng chung. Như cái `storage.js` (cái hầm chứa đồ) hay `validators.js` (thằng bảo vệ kiểm tra giấy tờ).
* **Mày hiểu là:** Nó ghi rõ đây là **"Prerequisites Chặn"**. Tức là **PHẢI XÂY XONG CÁI MÓNG NÀY** thì mấy thằng khác mới được vào xây tường. (Tasks T006 - T012).

---

### Phase 3: User Story 1 (Xây cái nhà thô - MVP) 
* **Nó làm gì?** Đây là "Gói tính năng" số 1. Làm cho mày có thể **Thêm, Sửa, Xóa** ghi chú.
* **Mày hiểu là:** Đây là **MVP (Minimum Viable Product)** - cái "bản dùng được tối thiểu". Xây xong cái này là mày có cái nhà thô, chui vào ở tạm được rồi.
* **ĐIỂM ĂN TIỀN (Test-First):** Mày nhìn kỹ. Nó bắt làm `Tests` (T013 - T016) **TRƯỚC** khi làm `Implementation` (T017 - T023).
    * **Nghĩa là sao?** Nó chế ra cái "máy kiểm tra" trước. Ví dụ, nó chế cái máy (test) chuyên để kiểm tra "nút Thêm có chạy không?".
    * Lúc đầu chạy máy, máy sẽ chửi "ĐÉO CHẠY" (FAIL).
    * Sau đó thằng lập trình viên mới bắt đầu code (Implementation) cái nút "Thêm" sao cho cái máy kia nó gật đầu "OK CHẠY RỒI" (PASS).
    * Đây là kiểu làm của dân pro, đéo phải code xong mới chắp tay cầu nguyện cho nó chạy.

---

### Phase 4: User Story 2 (Lắp công tắc điện)
* **Nó làm gì?** Gói tính năng số 2. Làm cái nút "Đã hoàn thành" (checkbox) và cái mục "Đã xong" (collapsible section).
* **Mày hiểu là:** Nhà thô ở Phase 3 đéo có điện. Phase này nó đi lắp công tắc, bóng đèn cho mày. Vẫn áp dụng "Test-First" (viết T024-T026 trước).

---

### Phase 5: User Story 3 (Lắp đồ nội thất)
* **Nó làm gì?** Gói tính năng số 3. Làm cái "việc con" (Subtasks).
* **Mày hiểu là:** Nhà có điện rồi. Giờ nó đóng bàn ghế, giường tủ (subtasks) cho mày. Vẫn là "Test-First".

---

### Phase 6: Polish (Sơn tường, lau kính)
* **Nó làm gì?** Đánh bóng sản phẩm. Làm cho nó mượt.
* **Mày hiểu là:** Nhà xây xong rồi. Giờ nó đi sơn lại tường, lắp tay nắm cửa cho đẹp, và quan trọng là làm đường cho xe lăn (`Accessibility` - T041, T042) để người khuyết tật cũng dùng được.

---

## Mấy cái ký hiệu mày đéo hiểu

* **`[P]` (Parallel - Song song):** Mày thấy chữ `[P]` ở mấy task không? Nghĩa là "song song". Tức là mấy việc này đéo liên quan đến nhau, có thể **chia cho nhiều thằng làm cùng lúc** để tiết kiệm thời gian. Thằng A sơn tường phòng khách, thằng B lắp bồn cầu toilet. Đéo phải chờ nhau.
* **`[US1]`, `[US2]`...:** Chỉ là cái nhãn dán để biết việc này thuộc "Gói tính năng" nào.
* **Chiến lược Triển khai (Strategy):** Nó vạch sẵn đường đi nước bước:
    1.  **MVP First (Khuyên dùng):** Làm Phase 1, 2, 3. Xong. Mày có cái app cơ bản để dùng. Rồi tính tiếp.
    2.  **Incremental (Tăng dần):** Làm hết Phase 3 (MVP) -> Giao cho mày dùng. Tuần sau làm tiếp Phase 4 (hoàn thành) -> Giao tiếp. Tuần sau nữa làm Phase 5 (việc con). Giống như xây nhà xong tầng 1 là cho thuê luôn, rồi xây tiếp tầng 2.
    3.  **Parallel Team (Nhiều thằng):** Nếu mày giàu, mày thuê 3 thằng. Thằng A làm US1, thằng B làm US2, thằng C làm US3. Nhanh nhưng mà lúc ghép 3 phần đó lại dễ chửi nhau vỡ đầu.

## TÓM LẠI CHO THẰNG NGU

Đây là một bản kế hoạch **chi tiết vãi lìn**. Thằng viết ra cái này là một thằng quản lý dự án (Project Manager) hoặc Tech Lead (Trưởng nhóm kỹ thuật) siêu cứng cựa.

Nó đéo chỉ nói "Mày đi làm đi". Nó nói:

1.  Mày làm theo 6 giai đoạn này.
2.  Giai đoạn 2 (Móng) phải xong trước.
3.  Đây là 50 việc nhỏ (tasks) mày phải làm, tao đánh số sẵn.
4.  Mấy việc có chữ `[P]` thì mày rủ thêm thằng khác làm cùng cho nhanh.
5.  Mày PHẢI viết "máy kiểm tra" (Tests) TRƯỚC khi mày viết code (Implementation).

Cứ theo cái checklist 50 bước này mà làm, thì một thằng thợ bình thường cũng xây được cái nhà xịn, đéo sợ sập.