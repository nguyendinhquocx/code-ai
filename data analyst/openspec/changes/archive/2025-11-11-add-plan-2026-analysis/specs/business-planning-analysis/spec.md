# Spec Delta: Business Planning Analysis

## ADDED Requirements

### Requirement: Đọc và Xử lý Dữ liệu Excel

Hệ thống MUST đọc và xử lý dữ liệu từ file Excel với 5 sheets (chi tieu, ngan sach, ct ngan sach, dinh bien, ke hoach) và validate tính toàn vẹn của dữ liệu.

#### Scenario: Đọc thành công tất cả sheets
- **WHEN** file Excel tồn tại và có đủ 5 sheets với cấu trúc đúng
- **THEN** hệ thống load thành công data vào pandas DataFrames
- **AND** hiển thị summary (shape, columns, missing values) của mỗi sheet

#### Scenario: Phát hiện dữ liệu thiếu
- **WHEN** có NaN values trong các cột quan trọng
- **THEN** hệ thống log warning với vị trí cụ thể (sheet, row, column)
- **AND** apply fillna strategy phù hợp (0 cho số, empty string cho text)

#### Scenario: File không tồn tại hoặc thiếu sheet
- **WHEN** file Excel không tồn tại hoặc thiếu sheet bắt buộc
- **THEN** hệ thống raise FileNotFoundError hoặc KeyError với message rõ ràng
- **AND** dừng execution

### Requirement: Tính toán Metrics Kinh doanh

Hệ thống MUST tính toán các metrics quan trọng từ dữ liệu thô bao gồm tỉ trọng, tăng trưởng YoY, và hiệu quả ngân sách.

#### Scenario: Tính tỉ trọng kênh trong tổng doanh thu
- **WHEN** có dữ liệu doanh thu theo kênh và theo tháng
- **THEN** hệ thống tính tỉ trọng (%) của mỗi kênh trong tổng doanh thu
- **AND** tạo DataFrame với columns: [kenh, tong_2025, ti_trong_2025, tong_2026, ti_trong_2026]

#### Scenario: Tính YoY growth rate
- **WHEN** có dữ liệu thực đạt 2025 và chỉ tiêu 2026
- **THEN** hệ thống tính growth rate theo công thức (2026 - 2025) / 2025 * 100
- **AND** output % growth theo tháng và theo kênh

#### Scenario: Tính tỉ lệ ngân sách trên doanh thu
- **WHEN** có dữ liệu ngân sách theo kênh và doanh thu 2026
- **THEN** hệ thống tính ratio = ngan_sach / doanh_thu_2026
- **AND** hiển thị % để đánh giá hiệu quả đầu tư

#### Scenario: Tính tỉ trọng đóng góp vào tăng trưởng theo kênh
- **WHEN** có dữ liệu 2025 và 2026 theo tháng và kênh
- **THEN** hệ thống tính growth contribution theo công thức:
  - Delta kênh = doanh_thu_2026[kenh][thang] - doanh_thu_2025[kenh][thang]
  - Delta tổng = tổng_doanh_thu_2026[thang] - tổng_doanh_thu_2025[thang]
  - Growth contribution (%) = (Delta kênh / Delta tổng) * 100
- **AND** tạo matrix 5 kênh x 12 tháng với % contribution
- **AND** identify kênh nào là growth driver cho từng tháng

### Requirement: Visualization Xu hướng Tổng quan

Hệ thống MUST tạo các biểu đồ line chart thể hiện xu hướng doanh thu theo thời gian, tuân thủ design principles (màu đen/xám/trắng, tối giản, CẤM pie chart).

#### Scenario: Line chart doanh thu tổng theo tháng
- **WHEN** yêu cầu vẽ biểu đồ xu hướng tổng
- **THEN** hệ thống tạo line chart với:
  - X-axis: Tháng 1-12
  - Y-axis: Tổng doanh thu (VNĐ)
  - 2 đường: 2025 (màu đen, nét liền), 2026 (màu blue accent, nét liền)
  - Title: "Xu hướng Doanh thu Tổng 2025 vs Chỉ tiêu 2026"
  - Không grid hoặc grid subtle
  - Spines: chỉ giữ bottom và left

#### Scenario: Line chart chi tiết từng kênh
- **WHEN** yêu cầu vẽ biểu đồ theo kênh
- **THEN** hệ thống tạo 5 charts riêng biệt (PACKAGE, CHC, REF, PHI, Digital)
- **AND** mỗi chart có 2 đường: 2025 (nét liền đen), 2026 (nét chấm blue)
- **AND** Y-axis scale phù hợp với range của kênh đó

#### Scenario: Combo chart doanh thu + % tăng trưởng
- **WHEN** yêu cầu vẽ dual-axis chart
- **THEN** hệ thống tạo chart với:
  - Primary Y-axis (trái): Doanh thu tổng (bar chart)
  - Secondary Y-axis (phải): % YoY growth (line chart, màu red accent)
  - X-axis: Tháng 1-12
  - Title: "Doanh thu và Tăng trưởng YoY"

### Requirement: Visualization So sánh Kênh

Hệ thống MUST tạo các biểu đồ so sánh hiệu quả và cấu trúc giữa các kênh kinh doanh.

#### Scenario: Horizontal bar chart tỉ trọng kênh
- **WHEN** yêu cầu vẽ tỉ trọng kênh
- **THEN** hệ thống tạo 2 charts riêng:
  - Chart 1: Tỉ trọng 2025 (5 bars cho 5 kênh, màu đen)
  - Chart 2: Tỉ trọng 2026 (5 bars cho 5 kênh, màu blue)
- **AND** bars sorted theo tỉ trọng giảm dần
- **AND** hiển thị % value ở cuối mỗi bar

#### Scenario: Bar chart chỉ tiêu vs thực đạt theo tháng
- **WHEN** yêu cầu so sánh theo tháng
- **THEN** hệ thống tạo grouped bar chart:
  - 12 groups (tháng 1-12)
  - Mỗi group có 2 bars: 2025 (màu xám), 2026 (màu đen)
  - X-axis: Tháng
  - Y-axis: Doanh thu

#### Scenario: Stacked bar chart cấu trúc đóng góp
- **WHEN** yêu cầu xem cấu trúc kênh theo tháng
- **THEN** hệ thống tạo stacked bar với:
  - X-axis: Tháng
  - Y-axis: Doanh thu tổng
  - Segments: 5 kênh với màu grayscale khác nhau
  - Legend ngoài plot area
  - Data cho 2026 (hoặc tạo 2 charts riêng cho 2025 và 2026)

#### Scenario: Growth contribution chart theo tháng
- **WHEN** yêu cầu xem tỉ trọng đóng góp tăng trưởng
- **THEN** hệ thống tạo visualization (chọn 1 trong 2 options):
  - Option 1: Heatmap 5 kênh (rows) x 12 tháng (columns), color intensity = % contribution
  - Option 2: 12 horizontal bar charts nhỏ (small multiples), mỗi tháng 1 chart với 5 bars
- **AND** highlight kênh có contribution cao nhất mỗi tháng
- **AND** màu: Positive growth = black/dark gray, Negative = light gray hoặc red accent

### Requirement: Visualization Ngân sách

Hệ thống MUST tạo các biểu đồ phân tích ngân sách và hiệu quả đầu tư.

#### Scenario: Tỉ trọng nhóm ngân sách
- **WHEN** yêu cầu xem phân bổ ngân sách
- **THEN** hệ thống tạo horizontal bar chart:
  - Bars: Các nhóm ngân sách từ sheet "ct ngan sach"
  - Values: Tỉ trọng (%) trong tổng ngân sách
  - Màu: Grayscale
  - Sorted giảm dần

#### Scenario: Tỉ lệ ngân sách / doanh thu theo kênh
- **WHEN** yêu cầu phân tích hiệu quả
- **THEN** hệ thống tạo bar chart:
  - X-axis: Kênh
  - Y-axis: % (ngan_sach / doanh_thu_2026)
  - Màu: Đen
  - Hiển thị % value trên mỗi bar

#### Scenario: Bảng chi tiết ngân sách formatted
- **WHEN** yêu cầu export bảng cho PowerPoint
- **THEN** hệ thống format DataFrame với:
  - Columns: [Nhóm, Nội dung, Số tiền, Tỉ trọng]
  - Số tiền format: "1.234.567.890" (dấu chấm phân cách nghìn)
  - Tỉ trọng format: "12.34%"
  - Styled với pandas Styler (bold header, borders)

### Requirement: Visualization Nhân sự và Kế hoạch

Hệ thống MUST tạo bảng nhân sự và Gantt chart cho kế hoạch hành động.

#### Scenario: Bảng định biên nhân sự
- **WHEN** yêu cầu xem nhân sự
- **THEN** hệ thống tạo styled table:
  - Columns: [Team, 2025 (SM/TL/Staff), 2026 (SM/TL/Staff), Change]
  - Highlight cells có thay đổi (màu light gray background)
  - Format rõ ràng cho PowerPoint

#### Scenario: Gantt chart kế hoạch
- **WHEN** yêu cầu visualize timeline
- **THEN** hệ thống parse sheet "ke hoach" và tạo Gantt chart:
  - Y-axis: Channels (B2B-CHC, B2B-Referral, B2B-PHI, B2C-PHC, B2C-Digital)
  - X-axis: Timeline (Jan-Dec, grouped by quarters)
  - Bars: Các chương trình/hoạt động
  - Color: Theo quarter hoặc channel
  - Annotations: Tên chương trình ngắn gọn trong bar

#### Scenario: Roadmap timeline
- **WHEN** yêu cầu roadmap view
- **THEN** hệ thống tạo simplified timeline:
  - Swim lanes theo channel
  - Milestones theo tháng/quý
  - Simple box layout, màu đen/xám
  - Text rõ ràng, không overlap

### Requirement: Tạo Bảng Số liệu Tổng hợp

Hệ thống MUST tạo các bảng số liệu tổng hợp dễ copy-paste vào PowerPoint.

#### Scenario: Bảng doanh thu theo tháng/kênh
- **WHEN** yêu cầu bảng tổng hợp
- **THEN** hệ thống tạo pivot table:
  - Rows: Tháng 1-12 + Total row
  - Columns: PACKAGE, CHC, REF, PHI, Digital, TOTAL
  - Sub-columns: 2025, 2026, Growth (%)
  - Format số với dấu chấm phân cách

#### Scenario: Bảng metrics chính
- **WHEN** yêu cầu summary metrics
- **THEN** hệ thống tạo table:
  - Rows: Các metrics (Tổng 2025, Tổng 2026, Growth %, Ngân sách, Ratio, etc.)
  - Columns: Tổng + từng kênh
  - Styled với conditional formatting (positive/negative growth)

#### Scenario: Bảng growth contribution matrix
- **WHEN** yêu cầu bảng tỉ trọng đóng góp tăng trưởng
- **THEN** hệ thống tạo table:
  - Rows: 5 kênh + Total row (check = 100%)
  - Columns: 12 tháng + Average column
  - Values: % contribution (format "45.2%")
  - Highlight cells có contribution > 30% (bold hoặc background color)
  - Styled cho PowerPoint

### Requirement: Tạo File Insights và Đề xuất

Hệ thống MUST tạo file markdown với phân tích chuyên sâu và đề xuất điều chỉnh chiến lược.

#### Scenario: Phân tích xu hướng tăng trưởng
- **WHEN** chạy xong analysis
- **THEN** file insights.md MUST bao gồm section phân tích:
  - Xu hướng tổng (seasonality, peak months, low months)
  - Xu hướng từng kênh (which growing, which declining)
  - So sánh chỉ tiêu 2026 vs baseline 2025
  - **Growth drivers**: Kênh nào drive tăng trưởng từng tháng (dựa vào growth contribution matrix)
  - **Seasonal patterns**: Tháng nào kênh nào thường mạnh (pattern lặp lại)

#### Scenario: Đánh giá tính khả thi
- **WHEN** so sánh target vs actuals
- **THEN** file insights.md MUST đánh giá:
  - Chỉ tiêu nào aggressive, chỉ tiêu nào conservative
  - Gaps lớn nhất (tháng nào, kênh nào)
  - Risk areas cần chú ý

#### Scenario: Đề xuất điều chỉnh ngân sách
- **WHEN** phân tích ngân sách vs doanh thu
- **THEN** file insights.md MUST đề xuất:
  - Reallocate ngân sách giữa các kênh (specific %)
  - Tăng/giảm budget cho kênh nào
  - Justification dựa trên ROI ước tính

#### Scenario: Đề xuất điều chỉnh nhân sự
- **WHEN** phân tích productivity (doanh thu/người)
- **THEN** file insights.md MUST đề xuất:
  - Hire thêm cho team nào
  - Rebalance headcount giữa các teams
  - Timeline hiring phù hợp với plan

#### Scenario: Review kế hoạch hành động
- **WHEN** phân tích timeline và activities
- **THEN** file insights.md MUST đánh giá:
  - Timing của campaigns có hợp lý không
  - Có conflict hoặc overload tháng nào không
  - Đề xuất reschedule nếu cần
  - **Align với growth drivers**: Campaign có target đúng kênh mạnh không

#### Scenario: Đề xuất chiến lược lead time
- **WHEN** identify growth drivers theo tháng
- **THEN** file insights.md MUST đề xuất:
  - Tháng X kênh Y sẽ drive growth → tập trung effort vào kênh Y trước 1-2 tháng
  - Cụ thể: "Tháng 6 CHC contribute 40% growth → từ tháng 4-5 cần push CHC campaigns"
  - Action plan cụ thể cho từng kênh theo calendar
  - Budget allocation theo lead time (invest trước peak months)

### Requirement: Tuân thủ Design Principles

Hệ thống MUST tuân thủ nghiêm ngặt các nguyên tắc design được định nghĩa trong AGENTS.md.

#### Scenario: Kiểm tra compliance màu sắc
- **WHEN** tạo bất kỳ visualization nào
- **THEN** hệ thống MUST chỉ sử dụng:
  - Primary: Black (#000000), Gray (#808080), Light Gray (#F5F5F5), White (#FFFFFF)
  - Accent: Blue (#2962FF), Red (#F23645)
- **AND** KHÔNG sử dụng màu khác

#### Scenario: Kiểm tra compliance chart types
- **WHEN** lựa chọn loại biểu đồ
- **THEN** hệ thống MUST KHÔNG tạo pie chart
- **AND** chỉ sử dụng: line, bar, horizontal bar, stacked bar, combo chart, Gantt

#### Scenario: Kiểm tra compliance elements
- **WHEN** render bất kỳ chart nào
- **THEN** hệ thống MUST:
  - Không thêm icons
  - Không thêm emojis
  - Sử dụng font Calibri hoặc IBM Plex Mono
  - Spines: chỉ bottom và left, line width ≤ 0.5pt
  - Grid: không có hoặc subtle (light gray, dashed)
  - Legend: tối thiểu, đặt ngoài plot area

#### Scenario: Kiểm tra tính tối giản
- **WHEN** review final output
- **THEN** mỗi chart MUST:
  - Chỉ hiển thị core information
  - Không có decorative elements
  - Title rõ ràng, ngắn gọn
  - Axis labels đơn giản
  - Không over-annotate
