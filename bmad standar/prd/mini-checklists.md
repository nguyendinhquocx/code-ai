# BMAD-Mini: Danh Sách Kiểm Tra Chất Lượng Cốt Lõi

---
## Mục Đích: Duy Trì Chất Lượng Khi Làm Nhanh
Các danh sách kiểm tra nhanh để đảm bảo tiêu chuẩn cao mà không làm chậm tiến độ. Dùng để xác minh mỗi giai đoạn đạt yêu cầu trước khi chuyển sang bước tiếp theo.

---
## Giai Đoạn 1: Danh Sách Kiểm Tra Lập Kế Hoạch

### Danh Sách Kiểm Tra Xác Nhận Mini-PRD
**Đại diện**: Alex (Chuyên viên Phân tích – Quản lý Sản phẩm)  
**Thời điểm**: Trước khi bàn giao sang Giai đoạn 2

#### Tính Rõ Ràng Của Mục Tiêu (Đạt/Không đạt)
- [ ] **Tuyên bố vấn đề rõ ràng**: Có thể giải thích trong một câu vấn đề này giải quyết cái gì
- [ ] **Giá trị cốt lõi rõ ràng**: Rõ ràng vì sao người dùng muốn dùng sản phẩm này
- [ ] **Tiêu chí thành công đo lường được**: Đã xác định 2–3 chỉ số thành công cụ thể
- [ ] **Các bên liên quan đồng thuận**: Mọi bên ra quyết định hiểu và đồng ý về mục tiêu

#### Hiểu Biết Người Dùng (Đạt/Không đạt)
- [ ] **Người dùng mục tiêu cụ thể**: Không phải “mọi người” — phải có mô tả nhân khẩu học/tâm lý rõ ràng
- [ ] **Nhu cầu người dùng được xác thực**: Có bằng chứng rằng người dùng thực sự có vấn đề này
- [ ] **Hành trình người dùng rõ ràng**: Hiểu cách người dùng phát hiện và sử dụng sản phẩm
- [ ] **Giá trị cho người dùng rõ ràng**: Rõ người dùng được gì khi dùng sản phẩm

#### Phạm Vi MVP (Bắt buộc)
- [ ] **Danh sách tính năng tập trung**: Tối đa 5–7 tính năng cho MVP
- [ ] **Phân biệt rõ “cần có” và “nên có”**: Có thể bảo vệ lý do tại sao mỗi tính năng là thiết yếu
- [ ] **Thời gian thực tế**: Có thể xây dựng được trong thời gian cho phép
- [ ] **Nguồn lực đủ**: Có kỹ năng/công cụ cần thiết cho các tính năng đã chọn

#### Khả Thi Kỹ Thuật (Đạt/Không đạt)
- [ ] **Ràng buộc kỹ thuật được xác định**: Biết rõ giới hạn (ngân sách, nền tảng, tích hợp)
- [ ] **Độ phức tạp phù hợp**: Độ phức tạp dự án phù hợp năng lực team
- [ ] **Phụ thuộc rõ ràng**: Hiểu rõ các dịch vụ/API bên ngoài cần dùng
- [ ] **Yêu cầu hiệu năng thực tế**: Mục tiêu thời gian tải/trải nghiệm đáp ứng được

#### Khả Thi Kinh Doanh (Tham khảo)
- [ ] **Tiêu chí thành công có ý nghĩa**: Các chỉ số thực sự phản ánh thành công dự án
- [ ] **Thời gian chấp nhận được**: Ngày ra mắt đáp ứng nhu cầu kinh doanh
- [ ] **Ngân sách thực tế**: Chi phí (hosting, dịch vụ, thời gian) phù hợp ngân sách
- [ ] **Bảo trì được tính đến**: Có kế hoạch cập nhật và hỗ trợ sau này

### Cờ Đỏ – Dừng Lại Và Xem Xét Lại
- [ ] **Phạm vi phình to**: Danh sách tính năng tăng trong quá trình lập kế hoạch
- [ ] **Người dùng mơ hồ**: Không mô tả được người dùng mục tiêu cụ thể
- [ ] **Không có tiêu chí thành công**: Không biết cách đo lường thành công
- [ ] **Thời gian phi thực tế**: Thời gian không khớp với độ phức tạp
- [ ] **Mục tiêu lan man**: Mục đích mở rộng vượt khỏi phạm vi ban đầu

### Yêu Cầu Phê Duyệt Giai Đoạn 1
**Tất cả phải đạt**:
- [ ] Mini-PRD được phê duyệt bởi mọi bên liên quan
- [ ] Phạm vi MVP đã khóa (không thêm tính năng)
- [ ] Tiêu chí thành công đã thống nhất
- [ ] Ràng buộc thời gian được hiểu rõ
- [ ] Cách tiếp cận kỹ thuật khả thi
- [ ] Sẵn sàng chuyển sang giai đoạn thiết kế

---
## Giai Đoạn 2: Danh Sách Kiểm Tra Thiết Kế

### Xác Nhận Kiến Trúc Kỹ Thuật
**Đại diện**: Sam (Kiến trúc sư – Thiết kế UX)  
**Thời điểm**: Sau khi chọn stack công nghệ, trước khi thiết kế UI

#### Stack Công Nghệ (Bắt buộc)
- [ ] **Lý do chọn framework rõ ràng**: Có lý do cụ thể tại sao chọn stack này
- [ ] **Độ dốc học tập chấp nhận được**: Team quen thuộc với công nghệ đã chọn
- [ ] **Hiệu năng đáp ứng được**: Stack có thể đạt yêu cầu hiệu năng
- [ ] **Khả năng mở rộng đủ**: Có thể xử lý mức tăng trưởng dự kiến
- [ ] **Bảo trì khả thi**: Team có thể duy trì và cập nhật lâu dài
- [ ] **Chi phí trong ngân sách**: Tất cả chi phí công nghệ phù hợp ngân sách

#### Thiết Kế UI/UX (Đạt/Không đạt)
- [ ] **Luồng người dùng hợp lý**: Người dùng hoàn thành mục tiêu hiệu quả
- [ ] **Thiết kế ưu tiên di động**: Trải nghiệm tuyệt vời trên thiết bị di động
- [ ] **Khả năng truy cập được tính đến**: Tuân thủ nguyên tắc cơ bản WCAG 2.1
- [ ] **Hệ thống thành phần được lên kế hoạch**: Xác định các thành phần UI có thể tái sử dụng
- [ ] **Phân cấp trực quan rõ ràng**: Các yếu tố quan trọng nổi bật đúng mức
- [ ] **Trạng thái tải được thiết kế**: Có phản hồi cho người dùng khi chờ

#### Kiến Trúc Hệ Thống (Đạt/Không đạt)
- [ ] **Luồng dữ liệu rõ ràng**: Hiểu cách thông tin di chuyển trong hệ thống
- [ ] **Thiết kế API hợp lý**: Các endpoint phù hợp với tính năng đã lên kế hoạch
- [ ] **Quản lý trạng thái phù hợp**: Mức độ phức tạp phù hợp với dự án
- [ ] **Xử lý lỗi được lên kế hoạch**: Biết cách xử lý các lỗi phổ biến
- [ ] **Bảo mật được tính đến**: Áp dụng nguyên tắc bảo mật cơ bản
- [ ] **Hiệu năng được tối ưu**: Có kế hoạch tải nhanh và tương tác mượt

### Xác Nhận Hệ Thống Thiết Kế
**Thời điểm**: Trước khi bàn giao sang phát triển

#### Thiết Kế Trực Quan (Đạt/Không đạt)
- [ ] **Nhất quán thương hiệu**: Thiết kế phản ánh đúng tính cách thương hiệu
- [ ] **Phân cấp typography rõ ràng**: Hệ thống kích cỡ và độ đậm chữ rõ ràng
- [ ] **Hệ thống màu logic**: Sử dụng màu nhất quán trong toàn bộ thiết kế
- [ ] **Khoảng cách nhất quán**: Mẫu khoảng cách đều đặn trong toàn bộ giao diện
- [ ] **Yếu tố tương tác rõ ràng**: Người dùng biết cái gì có thể click/chạm

#### Thiết Kế Responsive (Bắt buộc)
- [ ] **Bố cục di động hoạt động tốt**: Trải nghiệm tuyệt vời trên màn hình từ 320px trở lên
- [ ] **Bố cục tablet hoạt động**: Trải nghiệm tốt trên màn hình cỡ trung
- [ ] **Bố cục desktop được tối ưu**: Tận dụng lợi thế màn hình lớn
- [ ] **Chiến lược breakpoint rõ ràng**: Biết khi nào bố cục thay đổi
- [ ] **Vùng chạm đủ lớn**: Nút/liên kết dễ chạm trên di động

### Cờ Đỏ – Dừng Lại Và Xem Xét Lại
- [ ] **Công nghệ quá mức cần thiết**: Dùng stack phức tạp cho dự án đơn giản
- [ ] **Công nghệ lạ**: Chọn framework không quen trong điều kiện thời gian gấp
- [ ] **Di động là suy nghĩ sau cùng**: Thiết kế desktop-first
- [ ] **Bỏ qua hiệu năng**: Không tính đến tốc độ tải
- [ ] **Bỏ qua khả năng truy cập**: Thiết kế không dùng được với bàn phím/trình đọc màn hình

### Yêu Cầu Phê Duyệt Giai Đoạn 2
**Tất cả phải đạt**:
- [ ] Stack công nghệ được chọn với lý do rõ ràng
- [ ] Wireframe UI hoàn chỉnh cho mọi màn hình chính
- [ ] Kiến trúc thành phần được lên kế hoạch
- [ ] Thiết kế hệ thống được tài liệu hóa
- [ ] Mục tiêu hiệu năng được xác định
- [ ] Lộ trình triển khai thực tế

---
## Giai Đoạn 3: Danh Sách Kiểm Tra Phát Triển

### Xác Nhận Chất Lượng Mã
**Đại diện**: Chris (Lập trình viên – DevOps)  
**Thời điểm**: Trong quá trình phát triển, trước khi triển khai

#### Tiêu Chuẩn Phát Triển (Bắt buộc)
- [ ] **Mã chạy cục bộ**: `npm run dev` hoạt động không lỗi
- [ ] **Build thành công**: `npm run build` hoàn tất
- [ ] **Không có lỗi console**: Console trình duyệt sạch trên mọi trang
- [ ] **TypeScript không lỗi**: Không có lỗi kiểu (nếu dùng TypeScript)
- [ ] **Linting qua**: Tuân thủ quy tắc ESLint
- [ ] **Lịch sử Git sạch**: Tin nhắn commit có ý nghĩa, nhánh hợp lý

#### Tiêu Chuẩn Hiệu Năng (Bắt buộc)
- [ ] **Điểm Lighthouse Hiệu năng >90**: Core Web Vitals đạt mục tiêu
- [ ] **Thời gian tải <3 giây**: Tải nhanh trên kết nối 3G
- [ ] **Kích thước bundle hợp lý**: Bundle JavaScript được tối ưu
- [ ] **Hình ảnh được tối ưu**: Định dạng, nén, kích cỡ phù hợp
- [ ] **Lazy loading được áp dụng**: Tài nguyên không thiết yếu tải khi cần

#### Kiểm Thử Chức Năng (Đạt/Không đạt)
- [ ] **Tất cả tính năng MVP hoạt động**: Mọi tính năng đã lên kế hoạch đều hoạt động
- [ ] **Luồng người dùng hoàn chỉnh**: Người dùng hoàn thành được mục tiêu chính
- [ ] **Form được xác thực**: Xác thực đầu vào và thông báo lỗi phù hợp
- [ ] **Trạng thái lỗi được xử lý**: Xử lý trơn tru các lỗi phổ biến
- [ ] **Trạng thái tải có sẵn**: Có phản hồi khi thực hiện thao tác bất đồng bộ
- [ ] **Trường hợp biên được tính đến**: Xử lý trạng thái trống, văn bản dài, v.v.

#### Kiểm Thử Đa Thiết Bị (Bắt buộc)
- [ ] **Trải nghiệm di động tuyệt vời**: Dễ dùng trên điện thoại
- [ ] **Trải nghiệm tablet tốt**: Hoạt động tốt trên màn hình cỡ trung
- [ ] **Trải nghiệm desktop tối ưu**: Tận dụng lợi thế màn hình lớn
- [ ] **Tương tác chạm hoạt động**: Mọi nút/liên kết dễ chạm
- [ ] **Điều hướng bằng bàn phím**: Có thể điều hướng không cần chuột

#### Tương Thích Đa Trình Duyệt (Đạt/Không đạt)
- [ ] **Chrome hoạt động**: Phiên bản Chrome mới nhất hoạt động đầy đủ
- [ ] **Firefox hoạt động**: Phiên bản Firefox mới nhất hoạt động đầy đủ
- [ ] **Safari hoạt động**: Phiên bản Safari mới nhất hoạt động đầy đủ (kể cả iOS)
- [ ] **Edge hoạt động**: Phiên bản Edge mới nhất hoạt động đầy đủ

### Xác Nhận Sẵn Sàng Triển Khai
**Thời điểm**: Trước khi triển khai production

#### Danh Sách Kiểm Tra Bảo Mật (Bắt buộc)
- [ ] **HTTPS được cấu hình**: Chứng chỉ SSL được cài và hoạt động
- [ ] **Bảo mật form**: Xác thực đầu vào, bảo vệ CSRF
- [ ] **Bảo mật API**: Giới hạn tốc độ, xác thực (nếu áp dụng)
- [ ] **Dữ liệu nhạy cảm được bảo vệ**: Không có bí mật trong mã phía client
- [ ] **Header bảo mật**: Áp dụng các header bảo mật cơ bản

#### SEO & Phân Tích (Đạt/Không đạt)
- [ ] **Thẻ meta có sẵn**: Title, description, og:tags
- [ ] **Dữ liệu có cấu trúc**: Markup Schema.org (nếu có lợi)
- [ ] **Sitemap được tạo**: Sitemap XML cho công cụ tìm kiếm
- [ ] **Phân tích được cài**: Google Analytics hoặc tương đương
- [ ] **Theo dõi hiệu năng**: Giám sát Core Web Vitals

#### Sẵn Sàng Production (Bắt buộc)
- [ ] **Biến môi trường được cấu hình**: Tất cả cấu hình được externalize
- [ ] **Cơ sở dữ liệu được khởi tạo**: Dữ liệu ban đầu được nạp (nếu áp dụng)
- [ ] **Tên miền được cấu hình**: Tên miền trỏ đúng
- [ ] **Giám sát được thiết lập**: Theo dõi lỗi và uptime
- [ ] **Chiến lược sao lưu**: Có kế hoạch sao lưu dữ liệu

### Cờ Đỏ – Dừng Lại Và Sửa
- [ ] **Vấn đề hiệu năng**: Điểm Lighthouse <85, thời gian tải >5 giây
- [ ] **Di động hỏng**: Trải nghiệm di động tệ hoặc không responsive
- [ ] **Lỗ hổng bảo mật**: Chỉ dùng HTTP, lộ bí mật, không xác thực đầu vào
- [ ] **Thiếu chức năng**: Tính năng cốt lõi không hoạt động
- [ ] **Không tương thích trình duyệt**: Trình duyệt chính không hoạt động

### Yêu Cầu Phê Duyệt Giai Đoạn 3
**Tất cả phải đạt**:
- [ ] Tất cả tính năng MVP được triển khai và kiểm thử
- [ ] Đạt các mốc hiệu năng (>90 Lighthouse)
- [ ] Xác nhận tương thích đa thiết bị
- [ ] Áp dụng các nguyên tắc bảo mật cơ bản
- [ ] Triển khai production thành công
- [ ] Giám sát và phân tích đang hoạt động

---
## Cổng Kiểm Soát Chất Lượng Nhanh

### Kiểm Tra Chất Lượng 30 Giây
**Dùng giữa các phiên làm việc lớn**:
- [ ] Cái này có giải quyết được vấn đề của người dùng không?
- [ ] Cái này có đủ tốt cho MVP không?
- [ ] Tao có tự hào khi trưng bày cái này không?
- [ ] Người dùng có dễ dàng hoàn thành mục tiêu không?

### Kiểm Thử Demo 5 Phút
**Trước khi bàn giao và ra mắt**:
- [ ] Có thể demo chức năng cốt lõi trong 5 phút
- [ ] Demo chạy mượt mà không sập
- [ ] Giá trị cho người dùng rõ ràng với người xem
- [ ] Hiệu năng cảm nhận nhanh và phản hồi tốt

### Kiểm Thử Ưu Tiên Di Động
**Sau mọi thay đổi UI**:
- [ ] Mở trên thiết bị di động thật
- [ ] Mọi nút/liên kết dễ chạm
- [ ] Chữ đọc được mà không cần phóng to
- [ ] Bố cục không vỡ hoặc tràn

---
## Hướng Dẫn Sử Dụng Danh Sách Kiểm Tra

### Cách Sử Dụng
#### Cổng Kiểm Soát Giai Đoạn
- Dùng danh sách đầy đủ trước khi chuyển giai đoạn
- Tất cả mục “Bắt buộc” và “Đạt/Không đạt” phải đạt
- Mục “Tham khảo” nên đạt nhưng có thể ngoại lệ

#### Kiểm Tra Chất Lượng Hàng Ngày
- Dùng các cổng kiểm soát nhanh trong quá trình phát triển
- Phát hiện vấn đề sớm trước khi lan rộng
- Duy trì đà chất lượng suốt dự án

#### Giám Sát Cờ Đỏ
- Theo dõi cờ đỏ trong suốt mỗi giai đoạn
- Dừng và xử lý cờ đỏ ngay lập tức
- Không tiếp tục khi biết có vấn đề chất lượng

### Triết Lý Danh Sách Kiểm Tra
- **Chất lượng không quan liêu**: Chỉ kiểm tra những gì thiết yếu
- **Phát hiện sớm**: Ngăn lỗi tốn kém ở giai đoạn cuối
- **Duy trì tiêu chuẩn**: Chất lượng nhất quán qua các dự án
- **Tăng tốc**: Kiểm tra chất lượng giúp đẩy nhanh thay vì làm chậm

### Hướng Dẫn Tùy Chỉnh
- **Thêm mục đặc thù lĩnh vực**: Bao gồm yêu cầu riêng theo ngành
- **Điều chỉnh theo độ phức tạp**: Tăng/giảm chi tiết theo quy mô dự án
- **Tiêu chuẩn team**: Thêm yêu cầu chất lượng riêng của team
- **Cải tiến liên tục**: Cập nhật dựa trên bài học từ dự án

---
Những danh sách này đảm bảo BMAD-Mini duy trì chất lượng cao trong khi làm nhanh. Dùng chúng để ra mắt với tự tin!