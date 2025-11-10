# Tác Vụ BMAD-Quick

## Brainstorm Tính Năng Nhanh

### Mục Tiêu
Xác định nhanh các tính năng cốt lõi cho ứng dụng nhỏ trong **30 phút hoặc ít hơn**. Tập trung vào tính năng MVP mang lại giá trị ngay lập tức.

### Quy Trình

#### Bước 1: Định Nghĩa Vấn Đề (5 phút)
- **Vấn đề**: Ứng dụng này giải quyết vấn đề gì? (Viết trong 1–2 câu)  
- **Người dùng**: Ai gặp vấn đề này?  
- **Giải pháp hiện tại**: Họ đang giải quyết thế nào? (Cách thay thế/hạn chế hiện có)

#### Bước 2: Xác Định Giá Trị Cốt Lõi (10 phút)
- Hỏi: “Nếu ứng dụng này **chỉ có MỘT tính năng**, thì đó là gì?”  
- Ghi lại khả năng thiết yếu nhất → Đây là **Tính Năng #1** (ưu tiên cao nhất)

#### Bước 3: Tính Năng Hỗ Trợ (10 phút)
- Hỏi: “Người dùng cần gì nữa để **Tính Năng #1** thực sự hữu ích?”  
  - Nhập/dữ liệu  
  - Xem/quản lý dữ liệu  
  - Cài đặt  
  - Lưu trữ/đồng bộ  
- Liệt kê 4–6 tính năng hỗ trợ, chỉ tập trung vào “**bắt buộc có**”, không “có thì tốt”

#### Bước 4: Xếp Hạng Ưu Tiên (5 phút)
- Xếp hạng tất cả tính năng:
  - **P1 (Bắt buộc)**: Ứng dụng vô dụng nếu thiếu — tối đa **3–5 tính năng**  
  - **P2 (Quan trọng)**: Làm ứng dụng tốt hơn nhiều — dành cho v1.1  
  - **P3 (Có thể có)**: Cân nhắc cho tương lai

### Mẫu Đầu Ra

```markdown
# Brainstorm Tính Năng: [Tên Ứng Dụng]

## Tuyên Bố Vấn Đề
**Vấn đề**: [Vấn đề cụ thể được giải quyết]  
**Người dùng**: [Ai có vấn đề này]  
**Giải pháp hiện tại**: [Họ giải quyết thế nào hiện nay]

## Đề Xuất Giá Trị Cốt Lõi
**Tính năng chính**: [Một điều duy nhất ứng dụng phải làm]  
**Lợi ích người dùng**: [Tại sao điều này quan trọng]

## Tính Năng Ưu Tiên 1 (MVP)
1. **[Tên Tính Năng]** – [Mô tả ngắn & lý do thiết yếu]  
2. **[Tên Tính Năng]** – [Mô tả ngắn & lý do thiết yếu]  
3. **[Tên Tính Năng]** – [Mô tả ngắn & lý do thiết yếu]  
4. **[Tên Tính Năng]** – [Mô tả ngắn & lý do thiết yếu]  
5. **[Tên Tính Năng]** – [Mô tả ngắn & lý do thiết yếu]

## Tính Năng Ưu Tiên 2 (v1.1)
- [Tính năng] – [Lý do quan trọng nhưng không cần cho MVP]  
- [Tính năng] – [Lý do quan trọng nhưng không cần cho MVP]

## Tính Năng Ưu Tiên 3 (Tương Lai)
- [Tính năng] – [Ý tưởng hay để cân nhắc sau]  
- [Tính năng] – [Ý tưởng hay để cân nhắc sau]

## Chỉ Số Thành Công
**Ứng dụng thành công khi người dùng**: [Hành vi nào cho thấy thành công?]
```

### Mẹo Brainstorm Nhanh
- **Time-box từng bước** – Đừng phân tích quá mức  
- **Nghĩ theo hành động người dùng** – Người dùng sẽ **làm gì** trong ứng dụng?  
- **Bắt đầu từ cơ bản** – Các thao tác CRUD thường là tính năng cốt lõi  
- **Tránh phình to tính năng** – Nếu có >5 tính năng P1, mày đang nghĩ quá lớn  
- **Kiểm tra giả định** – Có thể xây P1 trong 1–2 tuần không?

### Mẫu Tính Năng Phổ Biến

#### Ứng Dụng Quản Lý Dữ Liệu (Todo, Ghi Chú…)
- **P1**: Tạo, Đọc, Cập nhật, Xóa, Lưu dữ liệu  
- **P2**: Tìm kiếm, Lọc, Danh mục, Xuất  
- **P3**: Cộng tác, Đồng bộ, Định dạng nâng cao

#### Ứng Dụng Tiện Ích (Máy tính, Bộ Chuyển Đổi…)
- **P1**: Tính toán/chuyển đổi cốt lõi, Validate đầu vào, Hiển thị kết quả  
- **P2**: Lịch sử, Yêu thích, Nhiều định dạng  
- **P3**: Tích hợp API, Chia sẻ, Chủ đề

#### Tiện Ích Mở Rộng Trình Duyệt
- **P1**: Chức năng cốt lõi, Tương tác trang, Lưu trữ dữ liệu  
- **P2**: Tùy chọn/cài đặt, Hỗ trợ nhiều trang, Phím tắt  
- **P3**: Đồng bộ đa thiết bị, Phân tích, Tính năng nâng cao

---

## Vẽ Luồng Người Dùng Đơn Giản

### Mục Tiêu
Vẽ luồng người dùng cơ bản cho ứng dụng trong **tối đa 5–7 bước**. Tập trung vào **luồng thành công** — người dùng làm gì khi mọi thứ hoạt động.

### Quy Trình

#### Bước 1: Điểm Vào (5 phút)
- Người dùng **phát hiện ứng dụng** thế nào?  
  - Truy cập trực tiếp URL  
  - Tải từ cửa hàng  
  - Cài tiện ích mở rộng  
  - Nhấp từ kết quả tìm kiếm  
  - Được giới thiệu

#### Bước 2: Trải Nghiệm Đầu Tiên (10 phút)
- Điều gì xảy ra khi họ **mở ứng dụng lần đầu**?  
  - Cần đăng ký/đăng nhập?  
  - Có hướng dẫn sử dụng?  
  - Có thể dùng ngay?  
  - Họ thấy gì đầu tiên?  
- Vẽ: **Landing → Lần đầu dùng → Nhận giá trị đầu tiên**

#### Bước 3: Luồng Sử Dụng Chính (15 phút)
- **Hành động chính** người dùng lặp lại là gì?  
- Vẽ luồng từ đầu đến cuối:
  - Người dùng muốn [đạt mục tiêu]  
  - Họ [hành động 1]  
  - Họ [hành động 2]  
  - Họ [hành động 3]  
  - Họ nhận [kết quả]

#### Bước 4: Sử Dụng Khi Quay Lại (5 phút)
- Khi quay lại, họ làm gì?  
  - Tiếp tục công việc trước?  
  - Bắt đầu cái mới?  
  - Xem/quản lý dữ liệu cũ?

### Mẫu Đầu Ra

```markdown
# Luồng Người Dùng: [Tên Ứng Dụng]

## Hồ Sơ Người Dùng
**Người dùng chính**: [Loại người dùng chính]  
**Bối cảnh**: [Khi/nơi họ dùng ứng dụng]  
**Mục tiêu**: [Họ muốn đạt được gì?]

## Bản Đồ Luồng

### Người Dùng Mới
1. **Phát hiện**: [Cách họ tìm thấy ứng dụng]  
2. **Mở lần đầu**: [Điều họ thấy đầu tiên]  
3. **Thiết lập**: [Cài đặt/hướng dẫn ban đầu]  
4. **Giá trị đầu tiên**: [Khi họ nhận được lợi ích đầu tiên]  
5. **Thành công ban đầu**: [Điều khiến họ muốn tiếp tục]

### Người Dùng Quay Lại (Luồng Chính)
1. **Lý do quay lại**: [Tại sao họ quay lại]  
2. **Bắt đầu nhanh**: [Cách họ tiếp tục]  
3. **Hành động chính**: [Tác vụ cốt lõi họ thực hiện]  
4. **Hoàn thành**: [Cách họ lưu/kết thúc]  
5. **Thoát**: [Cách họ rời ứng dụng]

## Hành Động Người Dùng Chính
**Hành động quan trọng nhất**: [Tác vụ chính người dùng làm]  
**Hành động hỗ trợ**: [Các tác vụ khác cần thiết]  
**Hành động quản trị**: [Cài đặt, quản lý dữ liệu…]

## Điểm Gây Ma Sát Tiềm Ẩn
- **Onboarding**: [Rào cản khi bắt đầu?]  
- **Học hỏi**: [Gì có thể gây nhầm lẫn?]  
- **Hiệu năng**: [Phần nào chậm/khó?]  
- **Mất dữ liệu**: [Rủi ro mất công việc?]

## Chỉ Số Thành Công
**Luồng thành công khi**: [Người dùng hoàn thành luồng chính]  
**Rủi ro bỏ dở**: [Điểm người dùng có thể bỏ cuộc]
```

### Mẹo Vẽ Luồng Người Dùng
- **Giữ đơn giản** – Tối đa 5–7 bước cho luồng chính  
- **Tập trung vào luồng thành công** – Điều gì xảy ra khi mọi thứ hoạt động  
- **Nghĩ mobile-first** – Luồng này hoạt động trên màn hình nhỏ?  
- **Xem xét bối cảnh** – Người dùng dùng ứng dụng ở đâu/khi nào?  
- **Kiểm tra giả định** – Tự trải nghiệm luồng này được không?

### Mẫu Luồng Phổ Biến

#### Ứng Dụng Năng Suất
1. Mở ứng dụng → 2. Xem công việc cũ → 3. Thêm mục mới → 4. Hoàn thành/sắp xếp → 5. Lưu/đồng bộ

#### Ứng Dụng Tiện Ích
1. Mở ứng dụng → 2. Nhập dữ liệu → 3. Xử lý/tính toán → 4. Xem kết quả → 5. Sao chép/chia sẻ

#### Ứng Dụng Nội Dung
1. Mở ứng dụng → 2. Duyệt/tìm kiếm → 3. Chọn mục → 4. Xem/sử dụng → 5. Lưu/đánh dấu

---

## Tạo Đặc Tả Tính Năng

### Mục Tiêu
Chuyển các tính năng đã brainstorm thành **đặc tả cụ thể, có thể triển khai**, với **tiêu chí chấp nhận rõ ràng**.

### Quy Trình

#### Bước 1: Xem Lại Ưu Tiên (10 phút)
- Xem lại kết quả brainstorm  
- Xác nhận tính năng P1 **thực sự thiết yếu** cho MVP  
- Đảm bảo P1 có thể xây trong timeline mục tiêu

#### Bước 2: Viết Câu Chuyện Người Dùng (20 phút)
- Với mỗi tính năng P1, viết:
  - **Câu chuyện người dùng**: Là [loại người dùng], tôi muốn [hành động] để [lợi ích]  
  - **Tiêu chí chấp nhận**: 3–5 yêu cầu **có thể kiểm thử**  
  - **Ghi chú kỹ thuật**: Ràng buộc hoặc cân nhắc

#### Bước 3: Ước Lượng Effort (10 phút)
- Ước lượng effort cho từng tính năng:
  - **Nhỏ (S)**: < 1 ngày triển khai  
  - **Trung bình (M)**: 1–3 ngày triển khai  
  - **Lớn (L)**: 3–5 ngày triển khai  
- Nếu tính năng P1 là L, cân nhắc chia nhỏ hơn.

#### Bước 4: Thứ Tự Triển Khai (10 phút)
- Sắp xếp tính năng P1 theo:
  - Tính năng nền tảng (cần cho tính năng khác)  
  - Tính năng giá trị cốt lõi (lợi ích chính cho người dùng)  
  - Tính năng hỗ trợ (tăng cường giá trị cốt lõi)

### Mẫu Đầu Ra

```markdown
# Đặc Tả Tính Năng: [Tên Ứng Dụng]

## Tổng Quan
**Mục đích**: [Vấn đề cốt lõi ứng dụng giải quyết]  
**Người dùng mục tiêu**: [Loại người dùng chính]  
**Timeline MVP**: [Ngày hoàn thành mục tiêu]  
**Tiêu chí thành công**: [Làm sao biết ứng dụng hoạt động]

## Tính Năng Ưu Tiên 1 (MVP)

### Tính Năng 1: [Tên Tính Năng]
**Câu chuyện người dùng**: Là [loại người dùng], tôi muốn [hành động cụ thể] để [lợi ích rõ ràng]

**Tiêu chí chấp nhận**:
- [ ] [Yêu cầu cụ thể, có thể kiểm thử]
- [ ] [Yêu cầu cụ thể, có thể kiểm thử]
- [ ] [Yêu cầu cụ thể, có thể kiểm thử]
- [ ] [Yêu cầu cụ thể, có thể kiểm thử]

**Ghi chú kỹ thuật**: [Ràng buộc, phụ thuộc hoặc ghi chú triển khai]  
**Ước lượng effort**: [S/M/L]  
**Thứ tự triển khai**: [1–5, 1 = làm trước]

### Tính Năng 2: [Tên Tính Năng]
**Câu chuyện người dùng**: Là [loại người dùng], tôi muốn [hành động cụ thể] để [lợi ích rõ ràng]

**Tiêu chí chấp nhận**:
- [ ] [Yêu cầu cụ thể, có thể kiểm thử]
- [ ] [Yêu cầu cụ thể, có thể kiểm thử]
- [ ] [Yêu cầu cụ thể, có thể kiểm thử]

**Ghi chú kỹ thuật**: [Ràng buộc hoặc cân nhắc]  
**Ước lượng effort**: [S/M/L]  
**Thứ tự triển khai**: [1–5]

[... tiếp tục cho tất cả tính năng P1 ...]

## Phụ Thuộc Tính Năng
**Thứ tự xây dựng**:
1. [Tên tính năng] – [Lý do làm trước]
2. [Tên tính năng] – [Lý do làm tiếp]
3. [Tên tính năng] – [Lý do làm tiếp]

**Phụ thuộc**:
- [Tính năng A] phụ thuộc vào [Tính năng B] vì [lý do]
- [Tính năng C] tăng cường [Tính năng D] nhưng không bắt buộc

## Cân Nhắc Kỹ Thuật
**Mô hình dữ liệu**: [Dữ liệu nào cần lưu/quản lý]  
**Phụ thuộc bên ngoài**: [API, dịch vụ, thư viện cần thiết]  
**Yêu cầu hiệu năng**: [Yêu cầu hiệu năng cụ thể]  
**Hỗ trợ trình duyệt/nền tảng**: [Cần hỗ trợ gì]

## Định Nghĩa Hoàn Thành (MVP)
MVP hoàn thành khi:
- [ ] Tất cả tính năng P1 được triển khai theo tiêu chí chấp nhận  
- [ ] Kiểm thử thủ công cơ bản hoàn tất cho mọi tính năng  
- [ ] Ứng dụng đã triển khai và người dùng có thể truy cập  
- [ ] Lỗi nghiêm trọng đã được sửa  
- [ ] Tài liệu cơ bản đã được tạo

## Lộ Trình Tương Lai (Sau MVP)
**Tính năng Ưu Tiên 2 (v1.1)**:
- [Tên tính năng] – [Mô tả ngắn]
- [Tên tính năng] – [Mô tả ngắn]

**Tính năng Ưu Tiên 3 (Tương Lai)**:
- [Tên tính năng] – [Mô tả ngắn]
- [Tên tính năng] – [Mô tả ngắn]
```

### Mẹo Viết Đặc Tả Tốt
- **Cụ thể**: “Người dùng có thể lưu ghi chú với tiêu đề và nội dung vào `localStorage`” thay vì “Người dùng có thể lưu dữ liệu”  
- **Có thể kiểm thử**: Mỗi tiêu chí chấp nhận phải **kiểm tra được**  
- **Xem xét trường hợp lỗi**: Điều gì xảy ra khi mọi thứ sai?  
- **Giữ MVP gọn**: Nếu tổng effort > 2 tuần, giảm phạm vi  
- **Nghĩ theo giá trị người dùng**: Mỗi tính năng phải mang lại lợi ích rõ ràng

### Mẫu Tiêu Chí Chấp Nhận Phổ Biến

#### Tính Năng Tạo Dữ Liệu
- [ ] Người dùng có thể nhập các trường dữ liệu bắt buộc  
- [ ] Validate đầu vào đưa ra thông báo lỗi rõ ràng  
- [ ] Dữ liệu được lưu ngay lập tức/khi người dùng yêu cầu  
- [ ] Người dùng nhận xác nhận lưu thành công

#### Tính Năng Hiển Thị Dữ Liệu
- [ ] Tất cả trường dữ liệu liên quan được hiển thị rõ ràng  
- [ ] Dữ liệu tải trong thời gian hợp lý (< 3 giây)  
- [ ] Xử lý trạng thái trống một cách êm ái  
- [ ] Cập nhật dữ liệu phản ánh ngay lập tức

#### Tính Năng Giao Diện Người Dùng
- [ ] Giao diện responsive trên mobile và desktop  
- [ ] Mọi thành phần tương tác có phản hồi trực quan  
- [ ] Điều hướng trực quan và nhất quán  
- [ ] Trạng thái lỗi đưa ra hướng dẫn hữu ích

---

## Xếp Hạng Ưu Tiên Tính Năng

### Mục Tiêu
Xếp hạng tất cả tính năng theo thứ tự ưu tiên nghiêm ngặt bằng phân tích **giá trị / effort**. Đảm bảo phạm vi MVP phù hợp timeline.

### Quy Trình

#### Bước 1: Đánh Giá Giá Trị (15 phút)
- Với mỗi tính năng, chấm **Giá Trị Người Dùng** (thang 1–5):
  - 5 = Thiết yếu: Ứng dụng vô dụng nếu thiếu  
  - 4 = Cao: Cải thiện đáng kể trải nghiệm  
  - 3 = Trung bình: Tốt, thêm giá trị  
  - 2 = Thấp: Cải thiện nhỏ  
  - 1 = Tối thiểu: Hầu như không nhận ra

#### Bước 2: Đánh Giá Effort (15 phút)
- Với mỗi tính năng, chấm **Effort Phát Triển** (thang 1–5):
  - 1 = Đơn giản: < 4 giờ  
  - 2 = Nhỏ: 4–8 giờ (< 1 ngày)  
  - 3 = Trung bình: 1–3 ngày  
  - 4 = Lớn: 3–5 ngày  
  - 5 = Khổng lồ: > 1 tuần

#### Bước 3: Tính Điểm Ưu Tiên (10 phút)
- Tính **Điểm Ưu Tiên = Giá Trị / Effort**  
- Điểm cao hơn = giá trị tốt hơn cho thời gian phát triển  
- Tập trung vào “chiến thắng nhanh” và “bắt buộc có”

#### Bước 4: Xếp Hạng Cuối Cùng (10 phút)
- Tạo thứ tự ưu tiên cuối cùng dựa trên:
  - Điểm ưu tiên  
  - Phụ thuộc tính năng  
  - Luồng người dùng  
  - Rủi ro kỹ thuật

### Mẫu Đầu Ra

```markdown
# Xếp Hạng Ưu Tiên Tính Năng: [Tên Ứng Dụng]

## Phân Tích Ưu Tiên

| Tính Năng | Giá Trị (1–5) | Effort (1–5) | Điểm (G/E) | Ưu Tiên | Ghi Chú |
|-----------|---------------|--------------|------------|---------|---------|
| [Tính năng 1] | 5 | 2 | 2.5 | P1 | Thiết yếu, dễ làm |
| [Tính năng 2] | 5 | 3 | 1.7 | P1 | Thiết yếu, effort trung bình |
| [Tính năng 3] | 4 | 2 | 2.0 | P1 | Giá trị cao, nhanh |
| [Tính năng 4] | 3 | 1 | 3.0 | P2 | Tốt, nhưng không thiết yếu |
| [Tính năng 5] | 4 | 4 | 1.0 | P2 | Giá trị cao nhưng tốn effort |
| [Tính năng 6] | 2 | 3 | 0.7 | P3 | Giá trị thấp so với effort |

## Xếp Hạng Ưu Tiên Cuối Cùng

### Ưu Tiên 1 (MVP – Bắt Buộc Xây)
**Tổng Effort Ước Lượng**: [X ngày]

1. **[Tên Tính Năng]** (Điểm: X.X)  
   - **Lý do P1**: [Giải thích tại sao thiết yếu]  
   - **Effort**: [X ngày]  
   - **Phụ thuộc**: [Tính năng khác cần trước]

2. **[Tên Tính Năng]** (Điểm: X.X)  
   - **Lý do P1**: [Giải thích tại sao thiết yếu]  
   - **Effort**: [X ngày]  
   - **Phụ thuộc**: [Tính năng khác cần trước]

[... tiếp tục cho tất cả P1 ...]

### Ưu Tiên 2 (Sau MVP – Quan Trọng)
**Mục tiêu cho phiên bản v1.1**

1. **[Tên Tính Năng]** (Điểm: X.X) – [Lý do ngắn]  
2. **[Tên Tính Năng]** (Điểm: X.X) – [Lý do ngắn]

### Ưu Tiên 3 (Tương Lai – Có Thì Tốt)
**Cân nhắc cho v2.0 hoặc sau**

1. **[Tên Tính Năng]** (Điểm: X.X) – [Lý do ngắn]  
2. **[Tên Tính Năng]** (Điểm: X.X) – [Lý do ngắn]

## Xác Thực Phạm Vi MVP

**Tổng Effort P1**: [X ngày]  
**Timeline Mục Tiêu**: [X ngày]  
**Trạng Thái Phạm Vi**: [✅ Đúng hướng / ⚠️ Sát / ❌ Vượt phạm vi]

**Nếu vượt phạm vi, cân nhắc**:
- Chuyển tính năng P1 có điểm thấp sang P2  
- Chia tính năng lớn thành phần nhỏ hơn  
- Đơn giản hóa yêu cầu tính năng  
- Kéo dài timeline

## Thứ Tự Triển Khai
**Trình tự xây dựng tính năng P1**:

1. **[Tính năng]** – [Tính năng nền tảng, cần cho cái khác]  
2. **[Tính năng]** – [Tính năng giá trị cốt lõi]  
3. **[Tính năng]** – [Tính năng hỗ trợ]  
4. **[Tính năng]** – [Tính năng tăng cường]

**Lý do**: [Tại sao thứ tự này hợp lý về mặt kỹ thuật và giá trị người dùng]

## Đánh Giá Rủi Ro
**Tính năng Rủi Ro Cao**: [Tính năng P1 có rủi ro kỹ thuật]  
**Giảm Thiểu**: [Cách giảm rủi ro – prototype, nghiên cứu…]

**Rủi Ro Timeline**: [Điều gì có thể làm chậm MVP]  
**Giảm Thiểu**: [Cách giữ đúng lịch trình]
```

### Mẹo Xếp Hạng Ưu Tiên
- **Trung thực về effort** – Tự tin quá mức giết timeline  
- **Xem xét phụ thuộc** – Một số tính năng phải làm trước cái khác  
- **Nghĩ theo luồng người dùng** – Tính năng luồng chính thường ưu tiên cao hơn  
- **Đừng over-engineer** – Triển khai đơn giản thường đủ cho MVP  
- **Dự phòng thời gian** – Thêm 20–30% vào ước lượng effort cho điều chưa biết

### Mẫu Ưu Tiên Phổ Biến

#### Ứng Dụng Quản Lý Dữ Liệu
- **P1**: Tạo, Đọc, Lưu dữ liệu + Giao diện cơ bản  
- **P2**: Tìm kiếm, Lọc, Danh mục, Xuất  
- **P3**: Cộng tác, Đồng bộ, Tính năng nâng cao

#### Ứng Dụng Tiện Ích
- **P1**: Chức năng cốt lõi + Nhập/Xuất + Giao diện cơ bản  
- **P2**: Lịch sử, Cài đặt sẵn, Nhiều định dạng  
- **P3**: Tích hợp API, Chia sẻ, Chủ đề

#### Tiện Ích Mở Rộng Trình Duyệt
- **P1**: Tương tác trang cốt lõi + Giao diện cơ bản + Cài đặt  
- **P2**: Hỗ trợ nhiều trang, Phím tắt, Tùy chọn nâng cao  
- **P3**: Đồng bộ, Phân tích, Tính năng trả phí

---

## Lựa Chọn Tech Stack

### Mục Tiêu
Chọn **stack công nghệ tối ưu** để phát triển nhanh ứng dụng nhỏ, cân bằng giữa **tốc độ**, **mức độ quen thuộc** và **khả năng bảo trì**.

### Quy Trình

#### Bước 1: Phân Tích Yêu Cầu Ứng Dụng (10 phút)
- Xác định yêu cầu kỹ thuật:
  - **Loại ứng dụng**: Web, tiện ích mở rộng, di động…  
  - **Nhu cầu dữ liệu**: Lưu trữ đơn giản, truy vấn phức tạp, đồng bộ thời gian thực?  
  - **Giao diện người dùng**: Form đơn giản, tương tác phức tạp, animation?  
  - **Hiệu năng**: Đáp ứng cơ bản hay yêu cầu hiệu năng cao?  
  - **Triển khai**: Dùng hosting miễn phí được không?

#### Bước 2: Đánh Giá Kỹ Năng Developer (5 phút)
- Đánh giá trung thực:
  - **Kỹ năng hiện tại**: Mày quen công nghệ nào?  
  - **Khả năng học**: Có thời gian học công nghệ mới không?  
  - **Hỗ trợ**: Ai có thể giúp nếu mày kẹt?

#### Bước 3: Lựa Chọn Công Nghệ (20 phút)
- Chọn các thành phần stack:
  - **Frontend Framework**:  
    Cân nhắc: Vanilla JS, React, Vue, Angular, Svelte  
    Yếu tố quyết định: Mức độ quen thuộc, độ phức tạp dự án, hệ sinh thái  
  - **Backend (nếu cần)**:  
    Cân nhắc: Node.js, Python Flask/FastAPI, PHP, hàm serverless  
    Yếu tố quyết định: Độ phức tạp dữ liệu, nhu cầu API, tùy chọn hosting  
  - **Cơ sở dữ liệu**:  
    Cân nhắc: `localStorage`, SQLite, PostgreSQL, Firebase, Supabase  
    Yếu tố quyết định: Độ phức tạp dữ liệu, nhu cầu đồng bộ, chi phí  
  - **Triển khai**:  
    Cân nhắc: Hosting tĩnh (Netlify, Vercel) vs hosting ứng dụng (Railway, Render)  
    Yếu tố quyết định: Nhu cầu backend, chi phí, độ dễ dùng

#### Bước 4: Lập Kế Hoạch Kiến Trúc (15 phút)
- Lên kế hoạch kiến trúc cơ bản:
  - Cấu trúc dự án  
  - Luồng dữ liệu  
  - Thiết kế API (nếu có)  
  - Quy trình build/triển khai

### Mẫu Đầu Ra

```markdown
# Quyết Định Tech Stack: [Tên Ứng Dụng]

## Tóm Tắt Yêu Cầu Ứng Dụng
**Loại**: [Web / Tiện ích mở rộng / Di động / v.v.]  
**Độ phức tạp**: [Đơn giản / Trung bình / Phức tạp]  
**Timeline**: [Ngày hoàn thành mục tiêu]  
**Developer**: [Mức độ kỹ năng và kinh nghiệm]

## Stack Công Nghệ Được Chọn

### Frontend
**Lựa chọn**: [Công nghệ được chọn]  
**Lý do**: [Tại sao chọn – cân nhắc mức độ quen thuộc, tốc độ, khả năng]  
**Phương án đã cân nhắc**: [Các lựa chọn khác và lý do không chọn]

**Thư viện/phụ thuộc chính**:
- [Thư viện 1] – [Mục đích]
- [Thư viện 2] – [Mục đích]
- [Thư viện 3] – [Mục đích]

### Backend (nếu có)
**Lựa chọn**: [Công nghệ được chọn]  
**Lý do**: [Tại sao chọn]  
**Kiểu API**: [REST / GraphQL / RPC]

**Phụ thuộc chính**:
- [Phụ thuộc 1] – [Mục đích]
- [Phụ thuộc 2] – [Mục đích]

### Cơ Sở Dữ Liệu
**Lựa chọn**: [Công nghệ được chọn]  
**Lý do**: [Tại sao chọn – độ phức tạp dữ liệu, khả năng mở rộng, chi phí]  
**Mô hình dữ liệu**: [Mô tả ngắn các thực thể và mối quan hệ chính]

### Hosting/Triển Khai
**Hosting Frontend**: [Nền tảng được chọn]  
**Hosting Backend**: [Nền tảng được chọn, nếu có]  
**Hosting Cơ sở dữ liệu**: [Nền tảng được chọn]  
**Domain**: [Domain tùy chỉnh hoặc subdomain nền tảng]  
**Ước lượng chi phí**: [Chi phí hàng tháng]

## Cấu Trúc Dự Án
[ten-ung-dung]/
├── [cấu trúc frontend]
├── [cấu trúc backend nếu có]
├── docs/
├── package.json
└── README.md

## Quy Trình Phát Triển

### Yêu Cầu Thiết Lập
**Phần mềm cần thiết**:
- [Yêu cầu môi trường phát triển]
- [Phiên bản cụ thể nếu quan trọng]

**Lệnh phát triển**:
- `npm install` – Cài phụ thuộc  
- `npm run dev` – Chạy server phát triển  
- `npm run build` – Build cho production  
- `npm run deploy` – Triển khai lên hosting

### Phát Triển Cục Bộ
1. [Bước 1 – thiết lập ban đầu]  
2. [Bước 2 – bắt đầu phát triển]  
3. [Bước 3 – kiểm thử]  
4. [Bước 4 – triển khai]

## Lý Do Các Quyết Định Kỹ Thuật

| Điểm Quyết Định | Lựa Chọn | Phương Án Khác | Lý Do |
|-----------------|----------|----------------|-------|
| Framework Frontend | [Lựa chọn] | [Phương án] | [Tốc độ/mức độ quen thuộc/tính năng] |
| Giải Pháp CSS | [Lựa chọn] | [Phương án] | [Styling nhanh vs thiết kế tùy chỉnh] |
| Quản Lý Trạng Thái | [Lựa chọn] | [Phương án] | [Độ phức tạp ứng dụng vs chi phí] |
| Lưu Trữ Dữ Liệu | [Lựa chọn] | [Phương án] | [Nhu cầu mở rộng vs sự đơn giản] |
| Công Cụ Build | [Lựa chọn] | [Phương án] | [Thời gian thiết lập vs tối ưu] |
| Triển Khai | [Lựa chọn] | [Phương án] | [Chi phí vs tính năng vs độ dễ] |

## Đánh Giá Rủi Ro

### Rủi Ro Kỹ Thuật
**Rủi ro**: [Thách thức kỹ thuật tiềm ẩn]  
**Xác suất**: [Cao / Trung bình / Thấp]  
**Tác động**: [Cao / Trung bình / Thấp]  
**Giảm thiểu**: [Cách xử lý]

**Rủi ro**: [Một thách thức tiềm ẩn khác]  
**Xác suất**: [Cao / Trung bình / Thấp]  
**Tác động**: [Cao / Trung bình / Thấp]  
**Giảm thiểu**: [Cách xử lý]

### Rủi Ro Timeline
**Đường cong học tập**: [Công nghệ mới nào có thể làm chậm phát triển]  
**Phụ thuộc bên ngoài**: [Dịch vụ bên thứ ba có thể gây chậm trễ]  
**Độ phức tạp triển khai**: [Thách thức triển khai nào]

## Bước Tiếp Theo
1. **Thiết lập môi trường** – [Hành động ngay lập tức]  
2. **Hello World** – [Chạy ứng dụng cơ bản]  
3. **Tính năng cốt lõi 1** – [Tính năng đầu tiên cần triển khai]  
4. **Pipeline triển khai** – [Thiết lập triển khai sớm]

## Cân Nhắc Tương Lai
**Khả năng mở rộng**: [Stack này xử lý tăng trưởng thế nào]  
**Bảo trì**: [Cân nhắc bảo trì dài hạn]  
**Mở rộng đội**: [Dễ cho người khác đóng góp không]  
**Lộ trình di chuyển**: [Tùy chọn nếu yêu cầu thay đổi đáng kể]
```

### Khung Quyết Định Nhanh

#### Cho Ứng Dụng Web
- **Đơn giản (Todo, Ghi Chú)**: Vanilla JS + `localStorage` + Netlify  
- **Tương tác (Dashboard)**: React/Vue + Local/Firebase + Vercel  
- **Nặng dữ liệu (CRM-lite)**: React + Node.js + PostgreSQL + Railway

#### Cho Tiện Ích Mở Rộng Trình Duyệt
- **Đơn giản**: Vanilla JS + Chrome Storage API  
- **Phức tạp**: React + Quy trình build + Chrome APIs

#### Cho Apps Script
- **Tích hợp Google Workspace**: Apps Script thuần + HTML Service + Google Sheets

### Khuyến Nghị Phổ Biến

#### Thân Thiện Cho Người Mới
- **Frontend**: Vanilla JS hoặc framework mày biết  
- **Backend**: Node.js (nếu quen JS) hoặc Python Flask  
- **Cơ sở dữ liệu**: Bắt đầu với `localStorage`, nâng cấp lên cloud khi cần  
- **Triển khai**: Netlify cho frontend, Railway cho full-stack

#### Tập Trung Tốc Độ
- **Frontend**: Framework mày thành thạo nhất  
- **Backend**: Hàm serverless (Netlify/Vercel Functions)  
- **Cơ sở dữ liệu**: Firebase/Supabase cho backend tức thì  
- **Triển khai**: Nền tảng triển khai một cú nhấp

#### Tiết Kiệm Chi Phí
- **Frontend**: Trang tĩnh trên hosting miễn phí (Netlify, GitHub Pages)  
- **Backend**: Tầng miễn phí serverless hoặc không cần backend  
- **Cơ sở dữ liệu**: `localStorage` hoặc tầng miễn phí (Firebase, Supabase)  
- **Triển khai**: Dùng toàn bộ tầng miễn phí ban đầu

---

## Thiết Kế Dữ Liệu Đơn Giản

### Mục Tiêu
Thiết kế **mô hình dữ liệu tối thiểu nhưng hiệu quả** cho ứng dụng nhỏ, tập trung vào **thực thể cốt lõi** và **mối quan hệ** cần cho MVP.

### Quy Trình

#### Bước 1: Xác Định Thực Thể Cốt Lõi (10 phút)
- Liệt kê các “**thứ**” chính ứng dụng quản lý:
  - Người dùng tạo/lưu/quản lý gì?  
  - Dữ liệu nào được lưu giữa các phiên?  
  - Dữ liệu nào hiển thị trong giao diện?  
- Giữ đơn giản – tối đa **3–5 thực thể**.

#### Bước 2: Định Nghĩa Thuộc Tính (15 phút)
- Với mỗi thực thể, liệt kê thuộc tính thiết yếu:
  - **Trường bắt buộc** (ứng dụng không hoạt động nếu thiếu)  
  - **Trường tùy chọn** (có thể thêm sau)  
  - **Kiểu dữ liệu** (text, number, boolean, date…)

#### Bước 3: Vẽ Mối Quan Hệ (10 phút)
- Các thực thể liên hệ thế nào?
  - Một-một (User có một Profile)  
  - Một-nhiều (User có nhiều Task)  
  - Nhiều-nhiều (User chia sẻ Project)

#### Bước 4: Chọn Phương Pháp Lưu Trữ (10 phút)
- Dựa trên độ phức tạp dữ liệu và yêu cầu ứng dụng:
  - `localStorage`: Lưu trữ key-value đơn giản  
  - IndexedDB: Cơ sở dữ liệu client-side phức tạp hơn  
  - Cơ sở dữ liệu đám mây: PostgreSQL, Firebase, Supabase  
  - Lai: Local + đồng bộ cloud

### Mẫu Đầu Ra

```markdown
# Thiết Kế Dữ Liệu: [Tên Ứng Dụng]

## Thực Thể Cốt Lõi

### Thực Thể 1: [TenThucThe]
**Mục đích**: [Đại diện cho gì trong ứng dụng]  
**Khóa lưu trữ**: [Cách định danh/lưu trữ]

**Trường bắt buộc**:
- `id` (string) – Định danh duy nhất  
- `[ten_truong]` ([kieu]) – [Mô tả]  
- `[ten_truong]` ([kieu]) – [Mô tả]  
- `created_at` (datetime) – Thời điểm tạo

**Trường tùy chọn**:
- `[ten_truong]` ([kieu]) – [Mô tả]  
- `updated_at` (datetime) – Lần sửa cuối  
- `[ten_truong]` ([kieu]) – [Mô tả]

### Thực Thể 2: [TenThucThe]
**Mục đích**: [Đại diện cho gì trong ứng dụng]  
**Khóa lưu trữ**: [Cách định danh/lưu trữ]

**Trường bắt buộc**:
- `id` (string) – Định danh duy nhất  
- `[ten_truong]` ([kieu]) – [Mô tả]  
- `[ten_truong]` ([kieu]) – [Mô tả]

**Trường tùy chọn**:
- `[ten_truong]` ([kieu]) – [Mô tả]

[... tiếp tục cho mỗi thực thể ...]

## Mối Quan Hệ

### [Thực Thể A] → [Thực Thể B]
**Kiểu**: [Một-một / Một-nhiều / Nhiều-nhiều]  
**Mô tả**: [Cách chúng liên hệ]  
**Triển khai**: [Cách lưu trữ – khóa ngoại, mảng…]

### [Thực Thể B] → [Thực Thể C]
**Kiểu**: [Một-một / Một-nhiều / Nhiều-nhiều]  
**Mô tả**: [Cách chúng liên hệ]  
**Triển khai**: [Cách lưu trữ]

## Chiến Lược Lưu Trữ Dữ Liệu

### Phương Pháp Được Chọn: [`localStorage` / IndexedDB / Cơ sở dữ liệu đám mây]
**Lý do**: [Tại sao lựa chọn này phù hợp nhu cầu ứng dụng]

### Cấu Trúc Lưu Trữ:
```javascript
// Ví dụ cấu trúc dữ liệu
{
  "users": {
    "user_123": {
      "id": "user_123",
      "name": "Nguyễn Văn A",
      "email": "a@example.com",
      "created_at": "2024-01-01T00:00:00Z"
    }
  },
  "tasks": {
    "task_456": {
      "id": "task_456",
      "user_id": "user_123",
      "title": "Việc cần làm",
      "completed": false,
      "created_at": "2024-01-01T00:00:00Z"
    }
  }
}
```

### Thao Tác CRUD

#### Thao Tác [Tên Thực Thể]
**Tạo**: [Cách tạo thực thể mới]
```javascript
function create[TenThucThe](data) {
  // Triển khai
}
```

**Đọc**: [Cách lấy thực thể]
```javascript
function get[TenThucThe](id) {
  // Triển khai
}
```

**Cập nhật**: [Cách sửa thực thể]
```javascript
function update[TenThucThe](id, changes) {
  // Triển khai
}
```

**Xóa**: [Cách xóa thực thể]
```javascript
function delete[TenThucThe](id) {
  // Triển khai
}
```

### Validate Dữ Liệu

#### Quy Tắc Validate [Tên Thực Thể]
`[truong]`: [Quy tắc validate – bắt buộc, độ dài, định dạng…]  
`[truong]`: [Quy tắc validate]

### Xử Lý Lỗi
**Dữ liệu không hợp lệ**: [Cách xử lý lỗi validate]  
**Thiếu dữ liệu**: [Cách xử lý trường bắt buộc bị thiếu]  
**Lỗi lưu trữ**: [Cách xử lý lỗi khi lưu/tải]

### Chiến Lược Di Chuyển Dữ Liệu
**Phiên bản đầu**: [Cấu trúc dữ liệu trong v1.0]  
**Thay đổi tương lai**: [Cách xử lý thay đổi cấu trúc]  
**Tương thích ngược**: [Cách duy trì tương thích với dữ liệu cũ]

### Cân Nhắc Hiệu Năng
**Kích thước dữ liệu**: [Khối lượng dữ liệu dự kiến]  
**Thời gian tải**: [Cách đảm bảo tải dữ liệu nhanh]  
**Sử dụng bộ nhớ**: [Cách quản lý bộ nhớ với tập dữ liệu lớn]  
**Tìm kiếm/lọc**: [Cách triển khai tìm kiếm hiệu quả nếu cần]

### Dữ Liệu Mẫu Để Kiểm Thử
```javascript
// Dữ liệu mẫu
const sampleData = {
  [thuc_the]: [
    {
      // Mẫu thực thể 1
    },
    {
      // Mẫu thực thể 2
    }
  ]
};
```

## Mẹo Thiết Kế Dữ Liệu Đơn Giản

### Giữ Đơn Giản
- **Bắt đầu tối thiểu** – Thêm trường khi cần, đừng over-engineer  
- **Tránh tối ưu sớm** – Cấu trúc đơn giản trước, tối ưu sau  
- **Dùng mẫu quen thuộc** – Thao tác CRUD chuẩn, kiểu trường phổ biến

### Mẫu Phổ Biến

#### Ứng Dụng Nội Dung Do Người Dùng Tạo
- Thực thể User (nếu cần xác thực)  
- Thực thể Nội dung (bài viết, ghi chú, task…)  
- Thực thể Danh mục/Thẻ (tổ chức tùy chọn)

#### Ứng Dụng Tiện Ích
- Thực thể Cài đặt (tùy chọn người dùng)  
- Thực thể Lịch sử (tác vụ/tính toán trước)  
- Thực thể Mẫu (cài đặt sẵn)

#### Ứng Dụng Cộng Tác
- Thực thể User  
- Thực thể Được chia sẻ (dự án, tài liệu)  
- Thực thể Quyền (kiểm soát truy cập)

### Hướng Dẫn Kiểu Trường
- **ID**: Dùng UUID hoặc ID dựa trên timestamp để đảm bảo duy nhất  
- **Timestamp**: Định dạng ISO 8601 (`2024-01-01T00:00:00Z`)  
- **Boolean**: `true`/`false`, tránh `null` để rõ ràng  
- **Text**: Đặt giới hạn độ dài hợp lý cho giao diện  
- **Number**: Xem xét cần số nguyên hay số thực

### Ước Lượng Kích Thước Lưu Trữ
**Giới hạn `localStorage`**:
- 5–10MB mỗi domain trên hầu hết trình duyệt  
- ~1000 thực thể điển hình với dữ liệu vừa phải mỗi thực thể

**Khi Nên Nâng Cấp Lưu Trữ**:
- `localStorage` → IndexedDB: Khi cần >5MB hoặc truy vấn phức tạp  
- Client → Cloud: Khi cần đồng bộ đa thiết bị  
- Đơn giản → Nâng cao: Khi cần cộng tác thời gian thực
