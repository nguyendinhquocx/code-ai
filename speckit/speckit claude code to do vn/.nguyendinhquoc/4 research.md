Mày lại quăng cho tao một file nữa. File `research.md`.

ĐM, thằng này viết tài liệu kỹ đấy. File `plan.md` hôm trước là "Xây cái gì?". File `data-model.md` là "Lưu trữ cái gì?".

Còn cái file `research.md` này là nó giải thích **"TẠI SAO LẠI CHỌN ĐỒ NGHỀ NÀY MÀ KHÔNG PHẢI ĐỒ NGHỀ KHÁC?"**

Nó giống như mày đi chợ xây nhà. Mày phải quyết định: Dùng gạch nung hay gạch không nung? Dùng xi măng Hà Tiên hay Bỉm Sơn? Cái file này ghi lại toàn bộ lý do mày chọn.

Tao bóc tách cho mày 6 cái quyết định cốt lõi của nó:

---

## Quyết định 1: Dùng "JavaScript Chay" hay "Khung" (Framework)?

* **Nó chọn:** Dùng **JavaScript Chay (Vanilla JS)**, tức là code thuần, đéo cần thư viện.
* **Nó đéo chọn:** React, Vue, Svelte (mấy cái khung làm web xịn xò bây giờ).
* **Lý do (Rất khôn):**
    1.  **Đơn giản:** Cái app TODO này quá đơn giản, có 3 cái gạch đầu dòng. Dùng React/Vue khác đéo gì "dùng dao mổ trâu để giết gà".
    2.  **Siêu nhẹ, siêu nhanh:** Đéo phải tải thêm 40KB code của thằng React về. App của mày gần như không tốn dung lượng.
    3.  **Bền bỉ:** JavaScript là tiêu chuẩn của web, 50 năm nữa nó vẫn chạy. Mấy cái framework kia 5 năm nữa có khi chết mẹ rồi.
    4.  **Tuân thủ "lời thề" (Constitution):** Nó đã thề là phải ĐƠN GIẢN (Simplicity First).

---

## Quyết định 2: Lưu dữ liệu ở đâu? `LocalStorage` hay `IndexedDB`?

* **Nó chọn:** Dùng **LocalStorage** (cái "ngăn kéo" đơn giản trong trình duyệt).
* **Nó đéo chọn:** `IndexedDB` (cái "kho hàng" phức tạp hơn).
* **Lý do:**
    1.  **Siêu dễ dùng:** `LocalStorage` code dễ vãi lìn. Chỉ có "cất vào" (`setItem`) và "lấy ra" (`getItem`).
    2.  **Đủ dùng:** Nó cho mày 5-10MB dung lượng. Thằng này tính rồi, mày lưu cả ngàn cái TODO cũng chưa hết 1MB. Đủ dùng chán.
    3.  **Tuân thủ "lời thề":** `IndexedDB` mạnh thật, nhưng nó phức tạp, code lằng nhằng. Lại là "dao mổ trâu giết gà". Vi phạm lời thề.
* **Lưu ý:** Nó cũng tính đường lùi. Nó sẽ viết một cái file `storage.js` riêng. Sau này nếu mày chê `LocalStorage` chậm, nó chỉ cần vào sửa đúng file đó để đổi sang `IndexedDB` mà đéo ảnh hưởng đến phần còn lại của app. Khôn.

---

## Quyết định 3: Dùng "Công cụ Xây dựng" (Build Tool) nào?

* **Nó chọn:** **Vite** (phát âm là "Vít", giống tiếng Pháp nghĩa là "Nhanh").
* **Nó đéo chọn:** Webpack (thằng già, chậm chạp, phức tạp) hay Parcel.
* **Lý do:**
    1.  **TỐC ĐỘ BÀN THỜ:** Vite khởi động server dev dưới 1 giây. Mày sửa code, F5 một phát là thấy luôn.
    2.  **Không cần config:** Gần như đéo phải thiết lập gì, nó tự chạy.
    3.  **Hiện đại:** Nó sinh ra cho JavaScript hiện đại (ESM), rất hợp với quyết định số 1.

---

## Quyết định 4: Dùng "Công cụ Kiểm tra" (Testing) nào?

* **Nó chọn:** **Vitest** + **Testing Library**.
* **Nó đéo chọn:** Jest (thằng già chậm chạp, giống Webpack).
* **Lý do:**
    1.  **Ăn khớp:** Thằng Vitest là anh em ruột với thằng Vite (quyết định 3). Dùng chung 1 file config, chạy siêu nhanh, đéo xung đột.
    2.  **Testing Library (Quan trọng):** Đây là triết lý test. Nó bắt mày phải test như một thằng ngu (người dùng). Tức là:
        * Đéo quan tâm code bên trong mày viết thế nào.
        * Chỉ quan tâm: "Tao gõ chữ 'Mua sữa' vào ô, tao bấm nút 'Thêm', thì cái chữ 'Mua sữa' có hiện ra trên màn hình không?"
        * Cách test này rất thực tế và đảm bảo app chạy đúng ý người dùng.

---

## Quyết định 5: Viết CSS (Làm đẹp) như thế nào?

* **Nó chọn:** **CSS Chay** + **Biến CSS (Custom Properties)**.
* **Nó đéo chọn:** Tailwind (cái đang hot) hay Sass/LESS (mấy cái cũ).
* **Lý do:**
    1.  **Không phụ thuộc:** Lại là "Zero dependencies". Đéo cần tải thêm thư viện nào.
    2.  **Tuân thủ "lời thề":** App đã thề là phải TỐI GIẢN (nền trắng chữ đen). Mày cần đéo gì Tailwind cho nó phức tạp?
    3.  **Dùng Biến (Variables):** Rất thông minh. Nó định nghĩa mấy cái biến như `--color-bg: #FFFFFF` (màu nền là trắng). Sau này mày muốn làm "Dark Mode" (nền đen), mày chỉ cần sửa đúng 1 dòng là xong.

---

## Quyết định 6: Làm sao cho người mù/người khuyết tật dùng được (Accessibility)?

* **Nó chọn:** Dùng **HTML ngữ nghĩa (Semantic HTML)** và **ARIA**.
* **Lý do:** Đây là cách làm chuẩn mực và cơ bản nhất.
    1.  **Semantic HTML:** Dùng đúng thẻ HTML. Nút bấm thì dùng thẻ `<button>`, danh sách thì dùng thẻ `<ul>`. Máy nó sẽ tự hiểu.
    2.  **ARIA:** Là mấy cái "nhãn" (label) dán thêm vào để nói cho "máy đọc" của người mù biết: "Ê, cái nút này là nút 'Thêm việc mới' đấy".
    3.  **Bàn phím:** Đảm bảo mày có thể dùng app 100% bằng phím Tab, Enter, Space.
    4.  **Tuân thủ "lời thề":** Cái này là bắt buộc trong "lời thề" của nó.

---

## TÓM LẠI CHO THẰNG NGU

Đây là một bản nghiên cứu **RẤT CHẮC TAY**.

Thằng kỹ sư này đéo chạy theo "trend" (xu hướng). Nó đéo dùng React, đéo dùng Tailwind cho oai.

Nó bám chặt vào yêu cầu: "App đơn giản, chạy offline, siêu nhanh".

Vì vậy, mọi quyết định của nó đều xoay quanh triết lý: **Dùng đồ "chay" (Vanilla), dùng đồ có sẵn của trình duyệt, và giữ cho app đéo phụ thuộc vào thằng đéo nào hết.**

Kết quả là một cái app sẽ **nhẹ như lông hồng, nhanh như điện giật, và 10 năm nữa vẫn chạy tốt.**