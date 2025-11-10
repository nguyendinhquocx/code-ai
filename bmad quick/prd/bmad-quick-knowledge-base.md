# Cơ Sở Tri Thức BMAD-Quick

## Triết Lý BMAD-Quick

**Tuyên bố**:  
“Phát triển MVP nhanh” — Xây dựng ứng dụng nhỏ, hoạt động được trong tối đa **1–2 tuần**. Tập trung vào **giá trị cốt lõi**, **giao hàng nhanh**, **lặp lại dựa trên sử dụng thực tế**.

**Nguyên tắc cốt lõi**:

- **GIAO HÀNG NHANH**: Sản phẩm hoạt động quan trọng hơn kiến trúc hoàn hảo.  
- **CHỈ TÍNH NĂNG CỐT LÕI**: Tối đa **3–5 tính năng thiết yếu** cho MVP.  
- **CÔNG NGHỆ ĐƠN GIẢN**: Dùng công nghệ quen thuộc, đã được kiểm chứng.  
- **LẶP SAU**: Xây dựng phiên bản cơ bản, cải tiến dựa trên phản hồi người dùng.  
- **GIỚI HẠN THỜI GIAN**: Đặt timeline nghiêm ngặt để ngăn **phạm vi phình to** (scope creep).

---

## Khi Nào Dùng BMAD-Quick vs Full BMAD

### Dùng BMAD-Quick cho:

- Tiện ích web (máy tính, bộ chuyển đổi, công cụ đơn giản)  
- Tiện ích mở rộng trình duyệt với chức năng tập trung  
- Tiện ích Apps Script cho Google Workspace  
- Ứng dụng web đơn giản (todo list, ghi chú, bảng Kanban)  
- MVP và prototype để kiểm thử ý tưởng nhanh  
- Công cụ cá nhân giải quyết vấn đề cụ thể  
- Dự án học tập để thực hành công nghệ mới  

### Dùng Full BMAD cho:

- Ứng dụng phức tạp với nhiều loại người dùng  
- Sản phẩm dài hạn cần lập kế hoạch chi tiết  
- Phát triển nhóm với nhiều thành viên  
- Ứng dụng doanh nghiệp có yêu cầu tuân thủ  
- Ứng dụng cần kiến trúc hoặc hạ tầng phức tạp  

---

## Quy Trình Làm Việc Của Agent BMAD-Quick

### Giai đoạn 1: Lập Kế Hoạch (1–2 giờ)

- **Quick Analyst** (30 phút): Brainstorm tính năng nhanh và vẽ luồng người dùng  
- **Rapid PM** (60 phút): Đặc tả tính năng và xếp ưu tiên  

### Giai đoạn 2: Thiết Kế Kỹ Thuật (1–2 giờ)

- **Quick Architect** (30–60 phút): Lựa chọn tech stack và thiết kế dữ liệu  
- **Đánh giá & xác nhận**: Đảm bảo phạm vi phù hợp timeline  

### Giai đoạn 3: Triển Khai (1–10 ngày)

- **Rapid Developer**: Triển khai tính năng theo từng bước  
- **Triển khai sớm và thường xuyên**: Đưa phiên bản hoạt động lên môi trường thật càng sớm càng tốt  

### Giai đoạn 4: Ra Mắt (0.5 ngày)

- **Hoàn thiện cơ bản**: Styling đơn giản và xử lý lỗi  
- **Tài liệu**: README và hướng dẫn sử dụng cơ bản  
- **Ra mắt**: Giao sản phẩm cho người dùng mục tiêu  

---

## Khung Quyết Định Nhanh

### Phân Loại Ưu Tiên Tính Năng

- **P1 (Bắt buộc)**: Ứng dụng vô dụng nếu thiếu  
- **P2 (Nên có)**: Cải thiện đáng kể trải nghiệm người dùng  
- **P3 (Có thể có)**: Tính năng đẹp nhưng để dành cho phiên bản sau  

### Lựa Chọn Tech Stack

#### Ứng dụng Web Đơn Giản:
- **Frontend**: Vanilla JS hoặc framework quen thuộc  
- **Lưu trữ**: `localStorage` → chuyển sang cloud khi cần  
- **Triển khai**: Hosting tĩnh (Netlify, Vercel, GitHub Pages)  

#### Ứng dụng Tương Tác:
- **Frontend**: React/Vue (nếu quen)  
- **Backend**: Node.js/Express hoặc hàm serverless  
- **Cơ sở dữ liệu**: Firebase/Supabase cho backend tức thì  
- **Triển khai**: Nền tảng full-stack (Railway, Render)  

#### Tiện ích Mở Rộng Trình Duyệt:
- Vanilla JS hoặc React kèm quy trình build đơn giản  
- Dùng `Chrome Storage API` để lưu dữ liệu  
- **Manifest V3** cho trình duyệt hiện đại  

---

## Hướng Dẫn Timeline

- **1–3 ngày**: Tiện ích đơn giản (máy tính, form cơ bản)  
- **3–7 ngày**: Ứng dụng tương tác có lưu trữ dữ liệu  
- **1–2 tuần**: Tính năng phức tạp, nhiều luồng xử lý  
- **>2 tuần**: Cân nhắc lại — có thể phạm vi đã vượt khả năng của BMAD-Quick  

---

## Các Loại Ứng Dụng Phổ Biến & Mẫu Thiết Kế

### Ứng Dụng Năng Suất (Todo, Ghi Chú, Kanban)
- **Tính năng cốt lõi**: Tạo, đọc, cập nhật, xóa, lưu trữ  
- **Tech stack**: React/Vue + `localStorage`/Firebase  
- **Timeline**: 3–7 ngày  

### Tiện Ích (Máy tính, Bộ Chuyển Đổi, Công Cụ)
- **Tính năng cốt lõi**: Xử lý đầu vào, tính toán, hiển thị kết quả  
- **Tech stack**: Vanilla JS + `localStorage` để lưu lịch sử  
- **Timeline**: 1–3 ngày  

### Tiện Ích Mở Rộng Trình Duyệt
- **Tính năng cốt lõi**: Tương tác trang web, lưu dữ liệu, tùy chọn người dùng  
- **Tech stack**: Vanilla JS hoặc React + API của Chrome  
- **Timeline**: 3–7 ngày  

### Tiện Ích Apps Script (Tự động hóa Google Workspace)
- **Tính năng cốt lõi**: Tích hợp dịch vụ Google, xử lý dữ liệu  
- **Tech stack**: Google Apps Script + HTML Service + Google Sheets  
- **Timeline**: 1–5 ngày  

---

## Tiêu Chuẩn Chất Lượng Cho BMAD-Quick

### Chất Lượng Tối Thiểu Cho MVP

- **Chức năng**: Tất cả tính năng cốt lõi hoạt động đúng đặc tả  
- **Khả dụng**: Giao diện cơ bản, trực quan với người dùng mục tiêu  
- **Đáng tin cậy**: Xử lý lỗi phổ biến một cách êm ái  
- **Triển khai được**: Hoạt động trong môi trường production  

### KHÔNG YÊU CẦU cho MVP

- Giao diện UI/UX hoàn hảo  
- Bộ test tự động toàn diện  
- Tính năng doanh nghiệp (xác thực nâng cao, bảo mật phức tạp…)  
- Khả năng mở rộng (scalability)  
- Kiến trúc phức tạp  

---

## Quản Lý Rủi Ro

### Rủi Ro Phổ Biến & Cách Giảm Thiểu

#### Phạm vi phình to (Scope Creep):
- Giới hạn thời gian từng giai đoạn nghiêm ngặt  
- Từ chối thêm “tính năng nhỏ”  
- Ghi lại tính năng P2/P3 để phát triển sau  

#### Độ phức tạp kỹ thuật:
- Chọn công nghệ quen thuộc  
- Bắt đầu bằng cách triển khai đơn giản nhất  
- Tránh tối ưu sớm  

#### Vượt timeline:
- Dự phòng 20–30% thời gian  
- Cắt tính năng trước khi kéo dài thời gian  
- Triển khai một phần chức năng nếu cần  

### Dấu Hiệu Cảnh Báo

- Hơn 5 tính năng P1  
- Dùng công nghệ lạ cho >50% hệ thống  
- Cần xác thực người dùng phức tạp  
- Yêu cầu cộng tác thời gian thực  
- Logic nghiệp vụ hoặc luồng xử lý phức tạp  

---

## Tiêu Chí Thành Công

### Chỉ Số Thành Công MVP

- **Thời gian nhận giá trị**: Người dùng có lợi ích trong **5 phút đầu**  
- **Luồng cốt lõi**: Hành trình người dùng chính hoạt động trọn vẹn  
- **Sử dụng thực tế**: Người dùng mục tiêu **thực sự dùng** ứng dụng  
- **Hoàn thành**: Giao hàng đúng thời gian và phạm vi  

### Chỉ Số Sau Ra Mắt

- **Sử dụng**: Số người dùng hoạt động hàng ngày/tuần  
- **Giữ chân**: Người dùng quay lại sau phiên đầu  
- **Hoàn thành tác vụ**: Người dùng thực hiện được hành động cốt lõi  
- **Phản hồi**: Người dùng phản hồi tích cực về chức năng chính  

---

## Chiến Lược Lặp Lại

### Lập Kế Hoạch Phiên Bản

- **v1.0 (MVP)**: Chỉ bao gồm tính năng P1  
- **v1.1**: Thêm tính năng P2 có giá trị cao nhất dựa trên dữ liệu sử dụng  
- **v2.0**: Bổ sung tính năng lớn hoặc cải tiến kiến trúc  

### Khi Nào Nên Lặp Lại vs Xây Lại Từ Đầu

#### Lặp lại khi:
- Ý tưởng cốt lõi đã được xác thực  
- Người dùng đang dùng tích cực  
- Yêu cầu mới phù hợp với tầm nhìn ban đầu  
- Stack công nghệ vẫn phù hợp  

#### Xây lại khi:
- Ý tưởng gốc cần thay đổi căn bản  
- Giới hạn công nghệ cản trở phát triển  
- Nhu cầu người dùng thay đổi mạnh  
- Nợ kỹ thuật khiến phát triển trở nên ì ạch  

---

## BMAD-Quick vs Phát Triển Truyền Thống

### Ưu Điểm BMAD-Quick

- **Tốc độ**: 1–2 tuần thay vì 1–3 tháng  
- **Tập trung**: Ép buộc ưu tiên giá trị cốt lõi  
- **Học nhanh**: Nhận phản hồi thực tế sớm  
- **Chi phí thấp**: Đầu tư ít, ROI nhanh  
- **Linh hoạt**: Dễ xoay hướng hoặc bỏ cuộc  

### Hạn Chế BMAD-Quick

- **Quy mô**: Không phù hợp ứng dụng doanh nghiệp phức tạp  
- **Chất lượng**: Chất lượng cơ bản, có thể cần refactor khi mở rộng  
- **Tính năng**: Tập hợp tính năng hạn chế so với phát triển đầy đủ  
- **Kiến trúc**: Mẫu đơn giản có thể không mở rộng được  
- **Quy mô đội**: Phù hợp nhất với 1–2 người  

### Khi Nào Nên Chuyển Sang Full BMAD

- Ứng dụng đã chứng minh **product-market fit**  
- Người dùng tăng vượt use case đơn giản  
- Độ phức tạp tính năng tăng đáng kể  
- Đội phát triển mở rộng hơn 2–3 người  
- Cần tính năng doanh nghiệp  

---

## Công Cụ & Tài Nguyên BMAD-Quick

### Công Cụ Phát Triển Khuyến Nghị

#### Trình Soạn Thảo:
- VS Code với extension phù hợp  
- Cursor hoặc Windsurf cho phát triển hỗ trợ AI  

#### Thiết Kế:
- Figma (bản free) để mockup nhanh  
- Tailwind CSS để styling nhanh  
- Heroicons hoặc Lucide cho icon  

#### Triển Khai:
- **Web tĩnh**: Netlify, Vercel, GitHub Pages  
- **Full-stack**: Railway, Render, Fly.io  
- **Serverless**: Netlify Functions, Vercel Functions  

#### Framework:
- **React**: Create React App, Vite  
- **Vue**: Vue CLI, Nuxt.js  
- **Vanilla**: HTML/CSS/JS thuần  
- **Node.js**: Express.js với cấu hình tối giản  

---

## Tài Nguyên Miễn Phí

### Hosting:
- **Netlify**: 100GB băng thông, không giới hạn site  
- **Vercel**: 100GB băng thông, không giới hạn project  
- **GitHub Pages**: Không giới hạn repo public  

### Cơ Sở Dữ Liệu:
- **Firebase**: 1GB lưu trữ, 50.000 lượt đọc/ngày  
- **Supabase**: 500MB lưu trữ, không giới hạn API request  
- **Railway**: $5 tín dụng/tháng  

### API & Dịch Vụ:
- Hầu hết đều có gói free hào phóng cho MVP  
- Cần xem xét giới hạn sử dụng khi lên kế hoạch tính năng  

---

## Mẫu Cấu Trúc & Mã Mẫu

### Cấu Trúc Dự Án Mẫu

```
quick-app/
├── src/
│   ├── components/     # Component giao diện tái sử dụng
│   ├── pages/         # Trang chính của ứng dụng
│   ├── utils/         # Hàm hỗ trợ
│   ├── styles/        # File CSS
│   └── main.js        # Điểm vào ứng dụng
├── public/            # Tài nguyên tĩnh
├── docs/              # Tài liệu
├── package.json       # Phụ thuộc
└── README.md          # Hướng dẫn cài đặt
```

### Mẫu Mã Phổ Biến

#### Quản Lý Dữ Liệu:
```javascript
// Wrapper đơn giản cho localStorage
class DataStore {
  static save(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  static load(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  }
}
```

#### Xử Lý Lỗi Cơ Bản:
```javascript
// Xử lý lỗi đơn giản
function withErrorHandling(fn) {
  return async (...args) => {
    try {
      return await fn(...args);
    } catch (error) {
      console.error('Lỗi:', error);
      showUserMessage('Đã xảy ra lỗi. Vui lòng thử lại.');
    }
  };
}
```

#### Validate Form:
```javascript
// Validate form cơ bản
function validateForm(data, rules) {
  const errors = {};
  for (const [field, rule] of Object.entries(rules)) {
    if (rule.required && !data[field]) {
      errors[field] = `${field} là bắt buộc`;
    }
  }
  return Object.keys(errors).length ? errors : null;
}
```

---

## Hướng Dẫn Hiệu Năng

### Hiệu Năng Phía Client

- **Kích thước bundle**: Giữ bundle JS ban đầu < 100KB  
- **Hình ảnh**: Tối ưu định dạng và kích thước  
- **CSS**: Dùng framework CSS tối giản hoặc utility class  
- **JavaScript**: Tránh thư viện nặng nếu không cần  

### Hiệu Năng Trải Nghiệm Người Dùng

- **Thời gian tải**: Trang đầu < 3 giây  
- **Tương tác**: Phản hồi nút < 200ms  
- **Thao tác dữ liệu**: Lưu/tải < 1 giây  
- **Offline**: Chức năng cơ bản hoạt động không cần mạng  

### Lưu Ý Di Động

- **Thiết kế responsive**: Hoạt động trên điện thoại  
- **Tương tác cảm ứng**: Kích thước nút phù hợp  
- **Hiệu năng**: Chạy được trên điện thoại tầm trung  
- **Tiêu thụ dữ liệu**: Tối thiểu hóa lưu lượng  

---

## Cân Nhắc Bảo Mật

### Bảo Mật Cơ Bản (Mức MVP)

- **Validate đầu vào**: Làm sạch dữ liệu người dùng nhập  
- **Ngăn XSS**: Escape output HTML  
- **Lưu trữ dữ liệu**: Không lưu thông tin nhạy cảm trong `localStorage`  
- **HTTPS**: Luôn dùng HTTPS khi triển khai  

### KHÔNG CẦN cho MVP

- Hệ thống xác thực phức tạp  
- Bảo mật nâng cao (rate limiting, CSRF protection)  
- Mã hóa dữ liệu (ngoài HTTPS)  
- Ghi log bảo mật toàn diện  

### Khi Bảo Mật Trở Nên Quan Trọng

- Ứng dụng xử lý dữ liệu cá nhân/tài chính  
- Chức năng đa người dùng  
- Ứng dụng công cộng có tài khoản người dùng  
- Sử dụng trong doanh nghiệp  

---

## Chiến Lược Kiểm Thử

### Kiểm Thử Thủ Công (Tiêu Chuẩn MVP)

- **Luồng chính**: Hành trình người dùng cốt lõi hoạt động  
- **Trường hợp lỗi**: Ứng dụng xử lý lỗi phổ biến  
- **Kiểm thử trình duyệt**: Hoạt động trên trình duyệt mục tiêu  
- **Kiểm thử di động**: Chức năng cơ bản trên điện thoại  

### Kiểm Thử Tự Động (Sau MVP)

- **Unit test**: Cho logic nghiệp vụ phức tạp  
- **Integration test**: Cho luồng người dùng quan trọng  
- **E2E test**: Cho hành trình người dùng đầy đủ  

### Danh Sách Kiểm Tra

- [ ] Tất cả tính năng cốt lõi hoạt động đúng  
- [ ] Thông báo lỗi rõ ràng, hữu ích  
- [ ] Ứng dụng hoạt động trên nhiều kích thước màn hình  
- [ ] Dữ liệu được lưu trữ chính xác  
- [ ] Không có lỗi nghiêm trọng trên console  

---

## Tiêu Chuẩn Tài Liệu

### Tài Liệu Bắt Buộc (MVP)

**`README.md` phải bao gồm**:
- Ứng dụng làm gì  
- Cách cài đặt cục bộ  
- Cách triển khai  
- Hướng dẫn sử dụng cơ bản  

**Ghi chú trong mã**:
- Giải thích logic phức tạp  
- Ghi chú tích hợp API  
- Giải thích cấu hình  

### Tài Liệu Tùy Chọn (Sau MVP)

- Tài liệu API  
- Hướng dẫn đóng góp  
- Quyết định kiến trúc  
- Hướng dẫn người dùng  

---

## Danh Sách Kiểm Tra Ra Mắt

### Trước Ra Mắt (Sẵn Sàng MVP)

- [ ] Tất cả tính năng P1 đã triển khai và kiểm thử  
- [ ] Xử lý lỗi cơ bản đã có  
- [ ] Ứng dụng đã được triển khai lên URL production  
- [ ] Tài liệu README hoàn chỉnh  
- [ ] Không có lỗi nghiêm trọng hoặc cảnh báo trên console  

### Ngày Ra Mắt

- [ ] Chia sẻ với người dùng mục tiêu  
- [ ] Giám sát lỗi nghiêm trọng  
- [ ] Thu thập phản hồi ban đầu  
- [ ] Ghi lại các sửa lỗi khẩn cấp  

### Sau Ra Mắt (Tuần Đầu)

- [ ] Sửa lỗi nghiêm trọng nhanh chóng  
- [ ] Thu thập phản hồi người dùng  
- [ ] Lên kế hoạch tính năng v1.1 dựa trên dữ liệu thực tế  
- [ ] Theo dõi chỉ số cơ bản (nếu có)  

---

## Cân Nhắc Mở Rộng

### Khi Ứng Dụng Vượt Quá BMAD-Quick

#### Dấu Hiệu Kỹ Thuật:
- Vượt giới hạn `localStorage`  
- Hiệu năng giảm khi dữ liệu tăng  
- Cần quản lý người dùng phức tạp  
- Yêu cầu cộng tác thời gian thực  

#### Dấu Hiệu Kinh Doanh:
- >100 người dùng hoạt động  
- Yêu cầu tính năng đòi hỏi thay đổi kiến trúc lớn  
- Tiềm năng doanh thu biện minh cho đầu tư lớn hơn  
- Đội phát triển mở rộng hơn 2–3 người  

### Lộ Trình Di Chuyển

- **Đánh giá hiện trạng**: Cái gì đang hoạt động, cái gì không  
- **Lên kế hoạch kiến trúc**: Thiết kế cho quy mô tiếp theo  
- **Di chuyển từng phần**: Không làm lại toàn bộ một lúc  
- **Di chuyển dữ liệu**: Giữ nguyên dữ liệu người dùng  
- **Đảm bảo tính năng**: Duy trì chức năng hiện có  
- **Giao tiếp với người dùng**: Thông báo rõ ràng về thay đổi  
