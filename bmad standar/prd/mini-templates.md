# BMAD-Mini: Bộ Tài Liệu Cốt Lõi Cho Dự Án Nhỏ (3–10 ngày)

---
## BMAD-Mini Tổng Quan

### Mục đích
Khung phát triển AI được tối ưu cho các dự án nhỏ, thời gian triển khai từ 3 đến 10 ngày.

### Cấu trúc
Một không gian duy nhất với 3 đại diện lai:
- Chuyên viên Phân tích kiêm Quản lý Sản phẩm (Alex Chen)
- Kiến trúc sư kiêm Thiết kế UX (Sam Rivera)
- Lập trình viên kiêm DevOps (Chris Taylor)

### Triết lý
Tiếp cận có cấu trúc nhưng **không quan liêu**, **không rườm rà**, **tập trung vào giá trị thực tế** và **giao hàng nhanh**.

---
## Mẫu Mini-PRD – Tài Liệu Yêu Cầu Nhẹ

### Mẫu: Tài Liệu Yêu Cầu Sản Phẩm Rút Gọn

# [Tên Dự Án] - Mini PRD

## Mục tiêu
[Một câu rõ ràng: Dự án này giải quyết vấn đề gì và cho ai?]
Ví dụ: "Tạo website portfolio cá nhân để trưng bày các dự án lập trình và thu hút cơ hội việc làm."

## Người dùng mục tiêu
[Ai sẽ dùng sản phẩm này? Tối đa 1–2 câu]
Ví dụ: "Nhà tuyển dụng công nghệ và quản lý tuyển dụng muốn đánh giá kỹ năng của tôi, cũng như khách hàng tiềm năng tìm kiếm lập trình viên freelance."

## Tính năng (MVP - Phiên bản 1)
- **Tính năng 1**: [Mô tả ngắn gọn kèm giá trị cho người dùng]
- **Tính năng 2**: [Mô tả ngắn gọn kèm giá trị cho người dùng]
- **Tính năng 3**: [Mô tả ngắn gọn kèm giá trị cho người dùng]
- **Tính năng 4**: [Mô tả ngắn gọn kèm giá trị cho người dùng]
- **Tính năng 5**: [Mô tả ngắn gọn kèm giá trị cho người dùng]

*Tối đa 5–7 tính năng cho MVP. Giữ tập trung!*

## Không bao gồm (Phiên bản 1)
[Những tính năng hay nhưng không thiết yếu cho MVP]
- Tính năng tương lai 1: Lý do đưa vào V2
- Tính năng tương lai 2: Lý do đưa vào V2
- Tính năng tương lai 3: Lý do đưa vào V2

## Định hướng thiết kế
- **Phong cách**: [Hiện đại, tối giản, nhiều màu sắc, chuyên nghiệp, v.v.]
- **Nguồn cảm hứng**: [1–2 website tham khảo]
- **Cảm xúc**: [Sạch sẽ, vui tươi, doanh nghiệp, nghệ thuật, v.v.]

## Ưu tiên công nghệ
- **Frontend**: [Có ưu tiên framework cụ thể không? Vì sao?]
- **Backend**: [Cần API không? Dùng cơ sở dữ liệu gì? Loại nào?]
- **Hosting**: [Vercel, Netlify, AWS? Hạn chế ngân sách?]
- **Thời gian**: [Khi nào cần ra mắt?]
- **Ngân sách**: [Chỉ dùng miễn phí, hay có ngân sách?]

## Tiêu chí thành công
[Làm sao biết dự án thành công? Phải đo lường được]
- Tiêu chí 1: [Kết quả đo lường được]
- Tiêu chí 2: [Kết quả đo lường được]
- Tiêu chí 3: [Kết quả đo lường được]

## Hỗ trợ thiết bị
- [ ] Desktop
- [ ] Tablet
- [ ] Mobile
- [ ] Thiết kế responsive toàn diện

## Mục tiêu hiệu năng
- Thời gian tải: [< 3 giây thông thường]
- Điểm Lighthouse: [> 90 thông thường]
- Yêu cầu SEO: [Quan trọng hay không quan trọng?]

---
*Thời gian hoàn thành ước tính: [Dự đoán của bạn]*
*Cập nhật lần cuối: [Ngày]*

---
## Mẫu Kiến Trúc Nhanh – Ra Quyết Định Kỹ Thuật

### Mẫu: Tóm Tắt Kiến Trúc Kỹ Thuật

# [Dự Án] - Kiến Trúc & Thiết Kế Nhanh

## Quyết định stack công nghệ

### Lựa chọn Frontend: [Tên Framework]
**Lý do**: [1–2 câu giải thích]
**Các lựa chọn khác đã xem xét**: [Những công nghệ khác]
**Đánh đổi**: [Mất gì, được gì]

### Backend/API: [Lựa chọn]
**Lý do**: [1–2 câu giải thích]
**Nhu cầu dữ liệu**: [Loại cơ sở dữ liệu, mức độ phức tạp]
**Xác thực**: [Cần không? Mức độ phức tạp?]

### Cách tiếp cận styling: [CSS/Framework]
**Lý do**: [Cân bằng giữa tốc độ và tùy chỉnh]
**Thư viện thành phần**: [Dùng sẵn hay tự xây?]

### Hosting & Triển khai: [Nền tảng]
**Lý do**: [Cân nhắc chi phí, độ dễ dùng, hiệu năng]
**Tên miền**: [Cần tên miền riêng không?]
**CI/CD**: [Cách triển khai tự động]

## Màn hình chính & Luồng người dùng

### Màn hình 1: [Trang chủ/Landing]
- **Mục đích**: [Người dùng làm được gì ở đây?]
- **Thành phần chính**: [Hero, điều hướng, phần quan trọng]
- **Hành động người dùng**: [Họ có thể làm gì?]

### Màn hình 2: [Màn hình tính năng chính]
- **Mục đích**: [Chức năng cốt lõi]
- **Thành phần chính**: [Các thành phần, tương tác]
- **Hành động người dùng**: [Luồng chính]

### Màn hình 3: [Màn hình phụ]
- **Mục đích**: [Chức năng hỗ trợ]
- **Thành phần chính**: [Hiển thị gì?]
- **Hành động người dùng**: [Cách họ tương tác]

## Hành trình người dùng
**Luồng chính**: Bắt đầu → [Bước 1] → [Bước 2] → [Bước 3] → Đạt mục tiêu  
**Tương tác then chốt**: [Những hành động quan trọng nhất]  
**Xử lý lỗi**: [Chuyện gì xảy ra khi có lỗi?]

## Cách tiếp cận triển khai

### Giai đoạn 1: Nền tảng cốt lõi (Ngày 1–X)
- [ ] Thiết lập dự án với stack đã chọn
- [ ] Cấu trúc layout và định tuyến cơ bản
- [ ] Triển khai hệ thống styling cốt lõi
- [ ] Phiên bản cơ bản của [Tính năng 1]
- [ ] Phiên bản cơ bản của [Tính năng 2]

### Giai đoạn 2: Hoàn thiện tính năng (Ngày X–Y)
- [ ] Các tính năng MVP còn lại
- [ ] Triển khai thiết kế responsive
- [ ] Xử lý lỗi và trường hợp biên
- [ ] Tối ưu hiệu năng cơ bản

### Giai đoạn 3: Hoàn thiện & Triển khai (Ngày Y–Z)
- [ ] Tinh chỉnh UI/UX và hiệu ứng
- [ ] Tối ưu SEO (nếu cần)
- [ ] Thiết lập triển khai production
- [ ] Thiết lập phân tích/thống kê cơ bản

## Chiến lược hiệu năng
- **Hình ảnh**: [Cách tối ưu]
- **Chia gói mã**: [Kế hoạch tối ưu bundle]
- **Cache**: [Chiến lược cache trình duyệt và CDN]
- **Core Web Vitals**: [Mục tiêu cho LCP, FID, CLS]

## Yếu tố bảo mật
- **Bảo vệ dữ liệu**: [Dữ liệu nhạy cảm là gì, bảo vệ thế nào?]
- **Xác thực**: [Mức độ bảo mật cần thiết]
- **Bảo mật API**: [Cách xử lý rate limiting, xác thực đầu vào]
- **HTTPS**: [Kế hoạch cấp chứng chỉ SSL]

## Giám sát & Phân tích
- **Phân tích người dùng**: [Google Analytics, Vercel Analytics, v.v.]
- **Giám sát hiệu năng**: [Theo dõi Core Web Vitals]
- **Theo dõi lỗi**: [Cách phát hiện và sửa lỗi]
- **Giám sát uptime**: [Kiểm tra sức khỏe production]

---
*Kiến trúc hoàn thành bởi: [Tên đại diện]*
*Ngày đánh giá: [Ngày]*
*Phê duyệt bởi: [Bên liên quan]*

---
## Mẫu Nhiệm Vụ Phát Triển – Triển Khai Hành Động

### Mẫu: Phân Tích Nhiệm Vụ Phát Triển

# [Dự Án] - Nhiệm Vụ Phát Triển

## Giai đoạn 1: Thiết lập & Nền tảng
*Ước tính: 1–2 ngày*

### Nhiệm vụ 1.1: Khởi tạo dự án
- [ ] Tạo dự án với [Framework] và [Ngôn ngữ]
- [ ] Cài các thư viện cần thiết (styling, routing, v.v.)
- [ ] Thiết lập môi trường phát triển (linting, định dạng)
- [ ] Khởi tạo kho Git với .gitignore phù hợp
- [ ] Tạo README cơ bản có hướng dẫn cài đặt
- [ ] Cấu hình pipeline triển khai (GitHub Actions, Vercel, v.v.)

**Tiêu chí chấp nhận**:
- Dự án chạy được cục bộ với lệnh `npm run dev`
- Tất cả linting và kiểm tra kiểu đều qua
- Pipeline triển khai kết nối thành công
- Cấu trúc thư mục cơ bản đã có

### Nhiệm vụ 1.2: Layout & Nền tảng styling
- [ ] Triển khai cấu trúc layout cơ bản (header, main, footer)
- [ ] Thiết lập hệ thống breakpoint responsive
- [ ] Tạo bảng màu và hệ thống typography
- [ ] Triển khai chế độ sáng/tối (nếu cần)
- [ ] Thêm chức năng điều hướng cơ bản
- [ ] Thiết lập hệ thống icon (thư viện hoặc SVG)

**Tiêu chí chấp nhận**:
- Layout responsive trên mobile, tablet, desktop
- Điều hướng hoạt động trên mọi kích cỡ màn hình
- Typography và màu sắc nhất quán
- Chuyển đổi giao diện hoạt động (nếu áp dụng)

---
## Giai đoạn 2: Triển khai Tính năng Cốt lõi
*Ước tính: 3–5 ngày*

### Nhiệm vụ 2.1: [Tên tính năng chính]
- [ ] Tạo các thành phần UI cho [tính năng]
- [ ] Triển khai chức năng cốt lõi
- [ ] Thêm xử lý lỗi phù hợp
- [ ] Kiểm thử các trường hợp biên
- [ ] Thêm trạng thái loading và phản hồi người dùng
- [ ] Đảm bảo hành vi responsive

**Tiêu chí chấp nhận**:
- Tính năng hoạt động đúng như trong PRD
- Trạng thái lỗi được xử lý mượt mà
- Trạng thái loading cung cấp phản hồi rõ ràng
- Trải nghiệm mobile được tối ưu
- Đáp ứng các yêu cầu cơ bản về khả năng truy cập

### Nhiệm vụ 2.2: [Tên tính năng phụ]
- [ ] Xây dựng giao diện [tính năng]
- [ ] Kết nối với nguồn dữ liệu/API (nếu cần)
- [ ] Triển khai tương tác người dùng
- [ ] Thêm xác thực form (nếu áp dụng)
- [ ] Kiểm thử tích hợp với các tính năng khác
- [ ] Tối ưu hiệu năng

**Tiêu chí chấp nhận**:
- Tính năng tích hợp trơn tru với mã hiện có
- Dữ liệu luân chuyển chính xác trong ứng dụng
- Form xác thực tốt với trải nghiệm người dùng tốt
- Không làm giảm hiệu năng

### Nhiệm vụ 2.3: [Tên tính năng thứ ba]
- [ ] Thiết kế kiến trúc thành phần
- [ ] Triển khai logic tính năng
- [ ] Thêm tích hợp bên thứ ba (nếu cần)
- [ ] Tạo giao diện thân thiện
- [ ] Kiểm thử tương thích đa trình duyệt
- [ ] Ghi chú logic phức tạp

**Tiêu chí chấp nhận**:
- Hoạt động nhất quán trên các trình duyệt hiện đại
- Tích hợp bên thứ ba ổn định
- Mã dễ bảo trì và có tài liệu
- Giao diện trực quan và dễ truy cập

---
## Giai đoạn 3: Hoàn thiện, Tối ưu & Triển khai
*Ước tính: 1–3 ngày*

### Nhiệm vụ 3.1: Hiệu năng & SEO
- [ ] Tối ưu hình ảnh và tài nguyên (nén, định dạng)
- [ ] Triển khai chia gói mã và lazy loading
- [ ] Thêm thẻ meta cho SEO (nếu cần)
- [ ] Thiết lập theo dõi phân tích (Google Analytics, v.v.)
- [ ] Kiểm thử và tối ưu Core Web Vitals
- [ ] Thêm đánh dấu dữ liệu có cấu trúc (nếu áp dụng)

**Tiêu chí chấp nhận**:
- Điểm Lighthouse > 90
- Điểm SEO > 95 (nếu SEO quan trọng)
- Sự kiện theo dõi được ghi nhận chính xác
- Thời gian tải < 3 giây trên mạng 3G

### Nhiệm vụ 3.2: Triển khai Production
- [ ] Cấu hình biến môi trường production
- [ ] Thiết lập tên miền riêng (nếu cần)
- [ ] Cấu hình chứng chỉ SSL
- [ ] Kiểm thử kỹ lưỡng bản production
- [ ] Thiết lập theo dõi lỗi (Sentry, LogRocket, v.v.)
- [ ] Tạo kế hoạch sao lưu và khôi phục

**Tiêu chí chấp nhận**:
- Trang production hoạt động đầy đủ
- Tên miền riêng hoạt động với HTTPS
- Hệ thống theo dõi lỗi ghi nhận sự cố
- Quy trình triển khai được tài liệu hóa

### Nhiệm vụ 3.3: Hoàn thiện cuối & Kiểm thử
- [ ] Kiểm thử đa thiết bị (mobile, tablet, desktop)
- [ ] Kiểm thử đa trình duyệt (Chrome, Firefox, Safari, Edge)
- [ ] Đánh giá và cải thiện khả năng truy cập
- [ ] Kiểm thử chấp nhận người dùng với bên liên quan
- [ ] Kiểm thử hiệu năng trong điều kiện thực tế
- [ ] Tạo tài liệu người dùng (nếu cần)

**Tiêu chí chấp nhận**:
- Hoạt động nhất quán trên thiết bị/trình duyệt mục tiêu
- Đạt tiêu chuẩn WCAG 2.1 AA
- Nhận được phê duyệt từ bên liên quan
- Tài liệu người dùng đầy đủ và hữu ích

---
## Danh sách Kiểm tra Chất lượng

### Trước khi kết thúc mỗi giai đoạn:
- [ ] Đã rà soát mã (tự rà soát tối thiểu)
- [ ] Đạt tất cả tiêu chí chấp nhận
- [ ] Đã kiểm thử thủ công trên thiết bị mục tiêu
- [ ] Đạt các mốc hiệu năng
- [ ] Không có lỗi console trong production
- [ ] Tài liệu đã cập nhật

### Danh sách kiểm tra trước khi ra mắt:
- [ ] Tất cả tính năng MVP hoạt động đúng
- [ ] Triển khai production ổn định
- [ ] Hệ thống giám sát và phân tích đang hoạt động
- [ ] Đạt mục tiêu hiệu năng
- [ ] Các yếu tố bảo mật đã được xử lý
- [ ] Nhận được phê duyệt từ team/bên liên quan

---
*Nhiệm vụ được tạo bởi: [Tên đại diện]*
*Ước tính tổng thời gian: [X ngày]*
*Cập nhật lần cuối: [Ngày]*

---
## Mẫu Wireframe Nhanh – Lên Kế Hoạch Trực Quan

### Mẫu: Bố cục Màn hình Cơ bản

# [Dự Án] - Wireframe & Kế Hoạch UI Nhanh

## Màn hình 1: [Trang chủ/Trang Landing]

### Bố cục Desktop (1200px+)

```
+--------------------------------------------------+
|  LOGO              NAV MENU           CONTACT    |
+--------------------------------------------------+
|                                                  |
|    HERO SECTION                    [IMAGE/       |
|    - Main Headline                  GRAPHIC]     |
|    - Subheading                                  |
|    - CTA Button                                  |
|                                                  |
+--------------------------------------------------+
|                                                  |
|    FEATURE SECTION 1              FEATURE 2     |
|    - Icon/Image                   - Icon/Image   |
|    - Description                  - Description  |
|                                                  |
+--------------------------------------------------+
|              FOOTER CONTENT                      |
+--------------------------------------------------+
```

### Bố cục Mobile (320px–767px)

```
+------------------------+
|  LOGO        HAMBURGER |
+------------------------+
|                        |
|    [IMAGE/GRAPHIC]     |
|                        |
|    HERO SECTION        |
|    - Main Headline     |
|    - Subheading        |
|    - CTA Button        |
|                        |
+------------------------+
|    FEATURE 1           |
|    - Icon              |
|    - Description       |
+------------------------+
|    FEATURE 2           |
|    - Icon              |
|    - Description       |
+------------------------+
|    FOOTER              |
+------------------------+
```

## Màn hình 2: [Trang Tính năng Chính]

### Thành phần chính:
- **Header**: [Các thành phần điều hướng]
- **Nội dung chính**: [Chức năng cốt lõi]
- **Sidebar**: [Thông tin/hành động phụ]
- **Footer**: [Liên kết, liên hệ, v.v.]

### Tương tác người dùng:
- Click: [Chuyện gì xảy ra khi click?]
- Hover: [Phản hồi trực quan khi di chuột]
- Gửi form: [Chuyện gì xảy ra sau khi gửi?]
- Trạng thái lỗi: [Lỗi được hiển thị thế nào?]

## Sơ đồ luồng người dùng

```
BẮT ĐẦU
↓
[Trang Landing]
↓ (Click nút kêu gọi)
[Trang Tính năng]
↓ (Hoàn thành hành động)
[Trang Thành công]
↓
KẾT THÚC (Đạt mục tiêu)
```

Luồng thay thế:
[Trang Landing] → [Trang Giới thiệu] → [Trang Liên hệ] → [Thành công]

---
*Wireframe được tạo: [Ngày]*
*Phê duyệt bởi: [Bên liên quan]*


---
## Hướng Dẫn Sử Dụng Mẫu

### Cách sử dụng các mẫu này
1. **Bắt đầu bằng Mini-PRD**: Xác định rõ phạm vi dự án
2. **Chuyển sang Kiến trúc Nhanh**: Ra quyết định kỹ thuật nhanh
3. **Tạo Nhiệm vụ Phát triển**: Chia nhỏ thành các việc cụ thể
4. **Phác thảo Wireframe**: Hình dung các màn hình chính
5. **Triển khai với Claude Code**: Dùng nhiệm vụ để tự động hóa phát triển

### Mẹo tùy chỉnh
- **Điều chỉnh thời gian**: Tăng/giảm theo độ phức tạp dự án
- **Bỏ phần không cần**: Xóa những mục không liên quan
- **Bổ sung chi tiết**: Thêm yêu cầu đặc thù theo lĩnh vực
- **Lặp nhanh**: Đây là điểm khởi đầu, phát triển dần theo tiến độ

### Tiêu chuẩn chất lượng
- Giữ mẫu **hành động được** – mọi mục phải rõ ràng
- Tiêu chí chấp nhận **đo lường được** – tránh mục tiêu mơ hồ
- Bao gồm **thời gian thực tế** – dựa trên năng lực một lập trình viên
- Cung cấp **con đường nâng cấp** – dễ chuyển sang phương pháp BMAD đầy đủ

---

** Những mẫu này được thiết kế để đạt tốc độ và chất lượng. Hãy sử dụng chúng để biến ý tưởng thành sản phẩm thực tế trong vòng 3-10 ngày! **