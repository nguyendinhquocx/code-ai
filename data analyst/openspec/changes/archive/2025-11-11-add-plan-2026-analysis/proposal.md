# Proposal: Phân tích Kế hoạch Kinh doanh 2026

## Tại sao

Cần công cụ phân tích toàn diện để đánh giá hiệu quả kinh doanh năm 2025 và lập kế hoạch chiến lược năm 2026. Hiện tại data nằm rời rạc trong Excel, thiếu visualization và insights để ra quyết định điều chỉnh ngân sách, nhân sự và kế hoạch hành động.

## Cái gì Thay đổi

- **Thêm capability phân tích kinh doanh tổng hợp** với 4 góc độ:
  1. So sánh thực đạt 2025 vs chỉ tiêu 2026
  2. Phân tích hiệu quả theo kênh (CHC, REF, PHI, Digital, PACKAGE)
  3. Phân tích ngân sách vs chỉ tiêu
  4. Phân tích định biên nhân sự

- **Tạo notebook phân tích** `ipynb/total/plan 2026/analyst.ipynb` với:
  - Biểu đồ visualization sạch sẽ, tối giản (tuân thủ design principles)
  - Bảng số liệu tổng hợp (export được cho PowerPoint)
  - Gantt chart/roadmap cho kế hoạch hành động

- **Tạo file insights** `.md` với:
  - Phân tích chuyên sâu, đề xuất điều chỉnh ngân sách/nhân sự/kế hoạch
  - **Đề xuất chiến lược lead time**: Kênh nào cần tập trung trước 1-2 tháng để tối ưu doanh thu peak months

- **Metrics tính toán**:
  - Tỉ trọng ngân sách / doanh thu theo kênh
  - Tỉ trọng nhóm ngân sách / tổng ngân sách
  - Tăng trưởng YoY theo tháng và theo kênh
  - Gap analysis giữa thực tế và target
  - **Tỉ trọng đóng góp vào tăng trưởng theo kênh từng tháng** (growth contribution analysis)

## Impact

### Specs bị ảnh hưởng
- **NEW**: `business-planning-analysis` - Capability mới hoàn toàn

### Code bị ảnh hưởng
- **NEW**: `ipynb/total/plan 2026/analyst.ipynb` - Notebook phân tích chính
- **NEW**: `ipynb/total/plan 2026/insights.md` - File insights và đề xuất
- **DATA**: `excel/total/plan 2026/data.xlsx` - Nguồn dữ liệu (đã có)

### Dependencies
- Python packages: pandas, matplotlib, seaborn, openpyxl
- Design constraints: Tuân thủ AGENTS.md (CẤM pie chart, màu đen/xám/trắng, tối giản)

### Timeline ước tính
- Data preparation: 30 phút
- Visualization development: 2-3 giờ
- Insights analysis: 1-2 giờ
- **Total**: 3.5-5.5 giờ
