Đủ bộ rồi đấy. Mày đã vứt cho tao:
1.  `spec.md` (Bản yêu cầu gốc - "Tao muốn cái gì?")
2.  `plan.md` (Bản vẽ tổng thể - "Xây nhà 3 tầng.")
3.  `data-model.md` (Bản vẽ móng - "Dữ liệu lưu thế nào?")
4.  `research.md` (Danh sách vật liệu - "Chọn gạch, xi măng gì?")
5.  `tasks.md` (Bảng phân công - "50 bước để xây xong.")

Và giờ là `quickstart.md`.

Nói cho thằng ngu hiểu: Đây là **SỔ TAY HƯỚNG DẪN CÀI ĐẶT VÀ SỬ DỤNG** dành cho một thằng lập trình viên mới.

Nó đéo phải là lý thuyết thiết kế nữa. Nó là hướng dẫn thực hành. Nó giống như mày mua cái tủ IKEA về, nó đưa cho mày tờ giấy A4 chỉ: "Bước 1: Lấy tua vít. Bước 2: Vặn ốc A vào lỗ B."

Đây là cái cầu nối giữa 5 cái file thiết kế kia và cái code thực tế.

---

## Bóc tách cái sổ tay này

### 1. Prerequisites (Đồ nghề mày phải có)

Nó liệt kê: Mày muốn "lắp ráp" cái app này, trong thùng đồ nghề của mày bắt buộc phải có:
* Node.js (Giống như bộ nguồn điện 220V để cắm đám đồ nghề)
* npm (Thằng đệ chuyên đi mua ốc vít, vật tư tự động)
* Git (Cuốn sổ ghi chép công trình)
* VS Code (Cái mỏ lết xịn)

### 2. Quick Setup (Dựng xưởng trong 5 phút)

Đây là 3 câu thần chú cho thằng lập trình viên mới:

1.  `git clone ...`: Tải toàn bộ bản vẽ và code về máy.
2.  `npm install`: Ra lệnh cho thằng đệ "npm" tự động đi mua hết đống vật tư (dependencies) đã liệt kê trong file `research.md` (như Vite, Vitest...).
3.  `npm run dev`: **Khởi động nhà xưởng!** Nó sẽ chạy cái app của mày ở địa chỉ `http://localhost:5173`. Mày mở trình duyệt lên là thấy.

### 3. Run Tests (Kiểm tra chất lượng)

Mày nhớ cái `tasks.md` nó bắt mày làm "máy kiểm tra" (tests) trước không? Đây là lệnh để chạy đám máy đó:

* `npm test`: Chạy tổng kiểm tra một lượt xem có cái đéo gì hỏng không.
* `npm run test:watch`: Cái máy kiểm tra này sẽ chạy 24/7. Mày chỉ cần sửa 1 dòng code, nếu nó hỏng, cái máy sẽ chửi mày ngay lập tức. (Rất quan trọng cho dân chuyên nghiệp).

### 4. Project Structure (Sơ đồ nhà xưởng)

Nó vẽ lại cái bản đồ tổ chức thư mục (đã có trong `plan.md`) để thằng mới vào đéo bị lạc:
* `src/`: Code chính (vật liệu xây dựng) ở đây.
* `tests/`: Đám "máy kiểm tra" ở đây.
* `specs/`: 5 cái file mày vứt cho tao (bản vẽ) ở đây.
* `vite.config.js`: File cấu hình "nhà xưởng".

### 5. Development Workflow (Quy trình làm thợ)

Nó dạy mày cách làm việc như một thằng thợ xịn:

1.  **Viết Test trước (TDD Approach)**: (Lại nhắc) Chế "máy kiểm tra" trước (đảm bảo máy chửi "FAIL").
2.  **Viết Code sau**: Code sao cho cái máy nó hết chửi (báo "PASS").
3.  **Tự bấm thử (Manual Testing)**: Tự tay mày dùng app xem có ngu không.
4.  **Đóng gói (Build)**: Gõ `npm run build` để "đóng gói" cái app lại thành 1 cục, sẵn sàng quăng lên mạng cho người ta dùng.

### 6. Common Tasks & Troubleshooting (Mẹo vặt & Sửa lỗi vặt)

Đây là mục "Câu hỏi thường gặp" cho mấy thằng ngu:

* **Làm sao reset app?**: Mày mở F12 (DevTools) lên, vào tab Application -> LocalStorage -> Chuột phải -> Clear. Xong.
* **Test lỗi?**: Thử xóa cache xem (`rm -rf node_modules/.vitest`).
* **Lỗi "Port 5173"**: Thằng khác đang dùng rồi. Tắt nó đi, hoặc chạy cổng khác (`--port 3000`).

### 7. Testing Scenarios & Performance (Checklist nghiệm thu)

Sau khi mày code xong, mày phải tự tay làm theo cái checklist này:

* [ ] Tạo todo -> OK.
* [ ] Sửa todo -> OK.
* [ ] Đánh dấu xong -> OK.
* [ ] Thêm việc con -> OK.
* ...

Xong hết, mày phải chạy **Lighthouse** (công cụ của Google) để đo:
* Tốc độ: Phải trên 95 điểm.
* Accessibility (cho người khuyết tật): Phải 100 điểm.

---

## TÓM LẠI CHO THẰNG NGU

File `quickstart.md` đéo phải lý thuyết thiết kế. Nó là **SỔ TAY HÀNH ĐỘNG**.

Nó là tài liệu "hội nhập" (onboarding). Mày tuyển một thằng lập trình viên mới, mày đéo cần nói nhiều. Mày vứt cho nó 6 cái file này, nhưng bảo nó: **"Đọc cái `quickstart.md` TRƯỚC TIÊN"**.

Nó đọc xong file này trong 5 phút là biết cách cài đặt, chạy code, chạy test, và biết phải đọc 5 file còn lại ở đâu. Cực kỳ chuyên nghiệp.