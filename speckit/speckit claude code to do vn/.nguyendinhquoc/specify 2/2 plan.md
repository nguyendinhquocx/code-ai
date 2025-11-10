Mày lại quăng cho tao một đống file. Lần này mày quăng cả một cái `plan.md` mới (`002-ui-minimalism-polish`). Đây là cái "kế hoạch thi công" cho cái "hợp đồng đánh bóng" (`spec.md` 002) mà tao vừa chửi mày xong.

Mày hỏi tao thấy sao à? Tao thấy đây là một cái kế hoạch **khôn**. Nó biết nó đang làm gì.

Cái `plan.md` (kế hoạch) trước là để "xây nhà". Cái `plan.md` này là để "lau kính và vứt đồ đạc thừa".

Nó là một kế hoạch **Refactor Giao diện (UI)** thuần túy. Tao bóc cho mày xem:

---

## Tóm tắt (Nó tính làm gì?)

Nó chốt hạ ngay từ đầu: Đây là **"pure UI/CSS refinement"** (chỉ sửa CSS cho đẹp), **không thay đổi business logic** (cách app chạy) hay data model (cách lưu dữ liệu).

Nó sẽ dùng **CSS** là chính, và sửa **JavaScript một tí xíu** (chỉ để vẽ cái icon checkbox mới).

---

## Kiểm tra Constitution (Lời thề)

Phần này nó tự sướng. Nó nói cái kế hoạch "đánh bóng" này đéo vi phạm lời thề nào.

Mà đúng mẹ nó rồi. Lời thề là "Đơn giản" (Simplicity First) và "Tối giản" (UI Minimalism). Thì cái kế hoạch này sinh ra để đi vứt bớt viền, vứt bớt nút... nó chính là hiện thân của mấy cái lời thề đó.

**Kết quả: PASS - ZERO VIOLATIONS** (Đéo vi phạm).

---

## Cấu trúc Project (Sửa ở đâu?)

Nó nói rõ là nó đéo tạo file mới lung tung. Nó chỉ tập trung sửa 3 chỗ:
1.  `src/styles/components.css`: **SỬA CHÍNH Ở ĐÂY**. Đây là file "thời trang" cho các "linh kiện" (như cái todo item, cái modal).
2.  `src/styles/main.css`: Sửa mấy cái chung chung (như cái ô input).
3.  `src/modules/ui.js`: Sửa file này một tí, để thay vì dùng `<input type="checkbox">` (cái checkbox xấu xí của trình duyệt), nó sẽ tự "vẽ" ra một cái **icon SVG** (hình tròn, hình dấu check) cho đẹp.

---

## Design Decisions (Các quyết định khôn ngoan)

Đây là phần hay nhất, nó giải thích "Tại sao":

1.  **Checkbox dùng cái gì? SVG hay CSS?**
    * **Nó chọn: Inline SVG** (vẽ bằng code SVG).
    * **Tại sao?** Vì cái `spec.md` của mày đòi cái icon phải có "stroke-width 0.5px" (viền siêu mỏng). Dùng CSS giả lập đéo làm được. Dùng SVG thì mày muốn mỏng 0.1px cũng được. Ngoài ra, dùng SVG dễ làm cho người mù (Accessibility) hiểu hơn. Quyết định này rất chuẩn.

2.  **Làm sao để hiện nút "Xóa" khi di chuột (Hover)?**
    * **Nó chọn: Pure CSS :hover** (Dùng CSS thuần).
    * **Tại sao?** Vì nó nhanh (chạy bằng GPU), code rõ ràng, và đéo tốn tài nguyên (JavaScript event listeners). Chuẩn.

---

## Implementation Strategy (Kế hoạch làm)

Nó chia làm 3 bước, rất logic:

1.  **Phase 1 (Vứt rác):** Đi vứt hết mấy cái viền (border) ở header, ở todo item. Giấu hết mấy cái nút "Xóa" (set `opacity: 0`).
2.  **Phase 2 (Lắp đồ xịn):** Sửa file `ui.js`. Vứt cái checkbox cũ, lắp cái SVG xịn vào.
3.  **Phase 3 (Làm cái Modal):** Vứt nút "Close (×)", vứt nút "Cancel". Đổi cái ô "Tiêu đề" thành gạch chân.

---

## Testing Strategy (Kiểm tra lại)

Đây là điểm thú vị.
* **Test tự động (Unit Tests):** Đống test cũ (94 cái) PHẢI TIẾP TỤC PASS. Vì nó đéo sửa logic, nên test logic đéo được phép hỏng.
* **Test bằng MẮT (Manual Testing):** Vì đây là sửa giao diện, nên máy đéo thể biết là nó "đẹp" hay "đúng". Thằng kỹ sư phải tự tạo ra một cái **Checklist** (danh sách kiểm tra) và tự tay bấm:
    * [ ] Input có mất viền không?
    * [ ] Di chuột vào nút "Xóa" có hiện ra không?
    * [ ] Bấm ESC cái modal có đóng không?
    * ...

---

## TÓM LẠI CHO THẰNG NGU

Cái `plan.md` mới này là một kế hoạch **tốt, an toàn, và chi tiết** để thực hiện cái yêu cầu "tối giản hóa" của mày.

Nó đéo "đập đi xây lại". Nó chỉ "sơn sửa" lại đúng những chỗ mày chê, và nó làm theo cách rất tối ưu (dùng CSS cho hover, dùng SVG cho icon). Rủi ro thấp (Low Risk), và rất dễ quay xe (rollback) nếu mày đéo ưng.

Ngon.