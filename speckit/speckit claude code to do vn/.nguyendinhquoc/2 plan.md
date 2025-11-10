OK, mày vứt cho tao cái file `plan.md` này. Mày đéo hiểu nó là cái gì đúng không? Tốt. Tao thích giải thích cho mấy đứa đéo biết gì.

Đây đéo phải code. Đây là **bản kế hoạch chi tiết** hay **bản vẽ kỹ thuật** trước khi thằng lập trình viên đặt tay gõ phím. Nó giống như bản vẽ của kiến trúc sư trước khi xây nhà. Nó trả lời mấy câu hỏi: "Xây cái gì?", "Xây bằng gì?", và "Xây như thế nào?".

Tao sẽ bẻ nhỏ cái bản vẽ này ra cho mày hiểu.

---

## Tóm tắt (Nó là cái gì?)

Đơn giản là: Nó tính xây một cái **ứng dụng Ghi Chú (TODO List)** siêu đơn giản.

Mày có thể: Thêm ghi chú, Sửa ghi chú, Xóa ghi chú, và đánh dấu là "Đã xong" hay "Chưa xong".

**Điểm cốt tử mày cần hiểu:** App này đéo cần mạng, đéo cần "đám mây" (cloud), đéo cần backend (máy chủ). Mọi thứ mày gõ vào được lưu thẳng vào cái "ngăn kéo" của trình duyệt (browser). Tụi nó gọi là `localStorage`.

* **Ví dụ đời thường:** Nó giống như một file Notepad trên máy tính của mày, chứ không phải là Google Docs. Mày mà qua máy tính khác, hoặc lỡ tay "Reset" trình duyệt là mất hết. Nó đơn giản, chạy nhanh, nhưng đéo có đồng bộ.

Nó cũng chốt luôn là sẽ được viết bằng **JavaScript "chay" (vanilla JS)**. Tức là code thuần, đéo dùng mấy cái thư viện hay framework phức tạp như React, Vue cho nặng mông. Giống như dùng gạch trần xây nhà, đéo ốp đá hoa cương làm gì cho tốn kém.

---

## Ngữ cảnh Kỹ thuật (Xây bằng gì?)

Đây là danh sách "đồ nghề" và "nguyên vật liệu" mà thằng kỹ sư sẽ dùng:

* **Ngôn ngữ**: JavaScript (loại mới nhất ES2022).
* **Đồ nghề**: Dùng mấy thứ tên **Vite** và **Vitest**. Mày đéo cần hiểu sâu, chỉ cần biết Vite là cái "nhà xưởng" giúp việc xây dựng nhanh hơn, còn Vitest là cái "máy kiểm tra chất lượng".
* **Lưu trữ**: Lại nhắc lại: Dùng `localStorage` (cái ngăn kéo trình duyệt).
* **Kiểm tra**: Dùng Vitest và Testing Library. Giống như thuê một đội robot chuyên đi đập phá thử xem cái nhà mới xây có sập không trước khi bàn giao.
* **Chạy ở đâu**: Các trình duyệt xịn (Chrome, Firefox... đời mới).
* **Mục tiêu hiệu năng**: Phải SIÊU NHANH. Mở app phải dưới 1 giây. Mày bấm vào nút phải phản hồi dưới 50 mili giây (nhanh hơn mày chớp mắt).
* **Ràng buộc**: Phải chạy được khi cúp mạng (tất nhiên, vì nó lưu ở máy mày mà). Và quan trọng là phải dùng được 100% bằng bàn phím (dành cho người khuyết tật hoặc mấy thằng pro thích gõ phím).

---

## Kiểm tra Constitution (Luật lệ tự đặt ra)

Phần này là thằng viết plan nó tự sướng. Nó đặt ra một đống "lời thề" hay "hiến pháp" (Constitution) để đảm bảo chính nó và đồng bọn không "ngáo" khi code. Đây là mấy luật chính:

1.  **Code phải rõ ràng**: Viết code cho người đọc, chứ đéo phải cho máy đọc.
2.  **Phải Test trước (Test-First)**: Phải viết "bài kiểm tra" (test) trước khi viết code. Giống như ra đề thi trước khi soạn giáo án, để đảm bảo giáo án dạy đúng trọng tâm.
3.  **ĐƠN GIẢN LÀ TRÊN HẾT (YAGNI)**: Đây là cái cốt lõi. YAGNI là viết tắt của "You Ain't Gonna Need It" (Mày đéo cần nó đâu). Chỉ làm cái đơn giản nhất. Khách hàng cần app TODO, thì làm đúng app TODO, đéo thêm chat chit, video call. **Vì cái luật này, nó mới quyết định đéo dùng React/Vue**.
4.  **Giao diện Tối giản**: Phải TỐI GIẢN. Nền trắng, chữ đen, viền xám nhạt. Đéo hoa lá hẹ. Tập trung vào việc chính: danh sách ghi chú của mày.
5.  **Triết lý thiết kế (Dieter Rams)**: Một đống triết lý sáo rỗng mà mày đéo cần nhớ, nhưng tóm lại là: Hữu dụng, đơn giản, đẹp kiểu gọn gàng, và bền bỉ.
6.  **Nguyên tắc công nghệ**:
    * Chỉ dùng đồ đã được kiểm chứng (proven).
    * **Zero production dependencies** (Không phụ thuộc thằng nào khác): Đây là điểm ăn tiền. Nghĩa là cái app cuối cùng chạy độc lập, đéo cần phải tải thêm code từ 10 thằng khác trên mạng. Điều này làm cho app siêu nhẹ, siêu nhanh, và siêu an toàn (vì đéo sợ thằng khác bị hack).

Cuối cùng nó tự chấm điểm: ✅ **OK, tao đéo vi phạm lời thề nào. Triển khai thôi!**

---

## Cấu trúc Project (Sắp xếp giấy tờ)

Đây là cách nó tổ chức các file code trong dự án. Giống như mày xếp đồ vào tủ cho gọn gàng, ngăn nắp.

* `specs/`: Chỗ để mấy cái bản vẽ (giống file này).
* `src/`: **Chỗ để code chính** (nguyên liệu xây dựng).
* `tests/`: Chỗ để code của "đội robot đập phá" (kiểm tra chất lượng).
* `public/`: Mấy thứ linh tinh cho công chúng, như cái icon trên tab trình duyệt.

Quan trọng nhất là cái thư mục `src/` được chia nhỏ hơn:

* `modules/`: Đây là các "phòng ban" chuyên biệt, mỗi thằng lo một việc, đéo dẫm chân lên nhau:
    * `todos.js`: **Phòng "Nghiệp vụ"**. Chỉ thằng này biết logic thêm/sửa/xóa một cái TODO là như thế nào.
    * `storage.js`: **Phòng "Lưu trữ"**. Chỉ thằng này biết cách nói chuyện với cái "ngăn kéo" `localStorage`.
    * `ui.js`: **Phòng "Mỹ thuật"**. Chỉ thằng này biết cách vẽ cái TODO list lên màn hình cho mày thấy.
* `styles/`: Phòng "Thời trang". Lo về màu sắc, phông chữ.
* `main.js`: Thằng "Tổng quản". Nó kết nối 3 phòng ban kia lại với nhau.

**Tại sao phải chia như vậy?** Để code đéo bị rối như mớ bòng bong. Thằng "Mỹ thuật" đéo cần biết "Lưu trữ" làm gì. Thằng "Nghiệp vụ" cũng đéo cần biết "Mỹ thuật" vẽ vời ra sao. Rất rõ ràng, dễ sửa, dễ nâng cấp.

---

## Theo dõi Độ phức tạp (Tự sướng tập 2)

Phần này nó chốt lại: "Kế hoạch này ngon, đơn giản, đéo vi phạm luật lệ nào." Xong.

## KẾT LUẬN CHO MÀY

Nói tóm lại cho một thằng ngu: Đây là một bản kế hoạch **CỰC KỲ TỐT VÀ CHẶT CHẼ** để xây một cái app TODO list "cây nhà lá vườn". Nó tập trung tuyệt đối vào sự **đơn giản**, **tốc độ**, và **đéo phụ thuộc vào thằng nào**. Thằng viết cái này là một thằng kỹ sư biết nghĩ, chứ đéo phải kiểu "ngựa non háu đá" cái gì cũng phang framework vào cho oai.