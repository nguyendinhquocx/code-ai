# Tasks: Phân tích Kế hoạch Kinh doanh 2026

## 1. Chuẩn bị Dữ liệu
- [ ] 1.1 Đọc và validate dữ liệu từ 5 sheets trong `data.xlsx`
- [ ] 1.2 Clean và transform data (xử lý NaN, format số, tách năm 2025/2026)
- [ ] 1.3 Tính toán metrics bổ sung (tỉ trọng, YoY growth, ngân sách/doanh thu)
- [ ] 1.4 Tạo data aggregation theo tháng, kênh, năm
- [ ] 1.5 Tính toán tỉ trọng đóng góp vào tăng trưởng theo kênh từng tháng (growth contribution analysis)

## 2. Visualization - Xu hướng Tổng quan
- [ ] 2.1 Line chart: Doanh thu tổng theo tháng (2025 + 2026 chỉ tiêu)
- [ ] 2.2 Line chart: Xu hướng chi tiết từng kênh (nét liền 2025, nét chấm 2026) - 5 biểu đồ riêng
- [ ] 2.3 Combo chart: Doanh thu tổng + % tăng trưởng YoY theo tháng

## 3. Visualization - So sánh Kênh
- [ ] 3.1 Horizontal bar chart: Tỉ trọng kênh trong tổng doanh thu 2025
- [ ] 3.2 Horizontal bar chart: Tỉ trọng kênh trong tổng doanh thu 2026
- [ ] 3.3 Bar chart: Chỉ tiêu vs thực đạt theo tháng (2025 vs 2026, màu phân biệt)
- [ ] 3.4 Stacked bar chart: Cấu trúc đóng góp từng kênh theo tháng
- [ ] 3.5 Waterfall/Bar chart: Tỉ trọng đóng góp tăng trưởng theo kênh từng tháng (12 charts hoặc heatmap)

## 4. Visualization - Ngân sách
- [ ] 4.1 Horizontal bar chart: Tỉ trọng nhóm ngân sách / tổng ngân sách
- [ ] 4.2 Bar chart: Tỉ trọng ngân sách / doanh thu theo từng kênh
- [ ] 4.3 Bảng chi tiết ngân sách (ct ngan sach) formatted cho PowerPoint

## 5. Visualization - Nhân sự & Kế hoạch
- [ ] 5.1 Bảng so sánh định biên nhân sự 2025 vs 2026
- [ ] 5.2 Gantt chart: Timeline kế hoạch hành động theo quý/tháng
- [ ] 5.3 Roadmap: Visualize các chương trình marketing/sales theo kênh

## 6. Bảng Số liệu Tổng hợp
- [ ] 6.1 Bảng tổng doanh thu theo tháng/kênh (2025 vs 2026)
- [ ] 6.2 Bảng metrics chính (YoY growth, tỉ trọng, ngân sách ratio)
- [ ] 6.3 Bảng growth contribution: Tỉ trọng đóng góp tăng trưởng theo kênh từng tháng
- [ ] 6.4 Format output dễ copy-paste vào PowerPoint

## 7. Insights & Phân tích
- [ ] 7.1 Phân tích xu hướng tăng trưởng theo kênh
- [ ] 7.2 Phân tích growth drivers: Kênh nào drive tăng trưởng từng tháng, pattern theo mùa
- [ ] 7.3 Đề xuất chiến lược lead time: Tập trung kênh nào trước 1-2 tháng để tối ưu doanh thu
- [ ] 7.4 Đánh giá tính khả thi chỉ tiêu 2026 vs thực tế 2025
- [ ] 7.5 Phân tích hiệu quả ngân sách (ROI ước tính theo kênh)
- [ ] 7.6 Đánh giá định biên nhân sự (doanh thu/người, gap analysis)
- [ ] 7.7 Review kế hoạch hành động (timing, tính khả thi, align với growth drivers)
- [ ] 7.8 Tạo file `insights.md` với đề xuất điều chỉnh

## 8. Hoàn thiện & Kiểm tra
- [ ] 8.1 Verify tất cả biểu đồ tuân thủ design principles (CẤM pie, màu đen/xám, tối giản)
- [ ] 8.2 Test notebook chạy end-to-end không lỗi
- [ ] 8.3 Kiểm tra data accuracy (cross-check với Excel)
- [ ] 8.4 Clean up code, thêm comments tiếng Việt
