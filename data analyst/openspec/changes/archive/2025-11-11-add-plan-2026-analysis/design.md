# Design: Phân tích Kế hoạch Kinh doanh 2026

## Ngữ cảnh

Dự án cần phân tích data từ file Excel với 5 sheets khác nhau để hỗ trợ ra quyết định chiến lược cho năm 2026. Yêu cầu output vừa phục vụ technical analysis (notebook) vừa phục vụ business presentation (PowerPoint-ready).

### Constraints
- **Design system**: Tuân thủ nghiêm ngặt AGENTS.md
  - CẤM pie chart
  - Màu sắc: đen/xám/trắng primary, blue/red cho accent
  - Tối giản, không rườm rà, chỉ core information
  - Không icon, không emoji
- **Data source**: Excel file cố định với 5 sheets
- **Stakeholders**: Business users (không technical)
- **Output**: Jupyter notebook + insights file markdown

## Mục tiêu / Không Mục tiêu

### Mục tiêu
- Tạo visualization rõ ràng, dễ hiểu cho business decision making
- Tính toán metrics quan trọng (tỉ trọng, growth, efficiency)
- Phân tích đa góc độ: doanh thu, ngân sách, nhân sự, kế hoạch
- Output ready cho PowerPoint presentation
- Insights có giá trị cho điều chỉnh strategy

### Không Mục tiêu
- Không tạo interactive dashboard (chỉ static charts)
- Không auto-generate insights bằng if-else logic
- Không tích hợp real-time data (one-time analysis)
- Không tạo predictive model (chỉ descriptive analytics)

## Quyết định Kỹ thuật

### 1. Data Processing Strategy

**Quyết định**: Xử lý data trong notebook, không tạo separate module

**Lý do**:
- One-time analysis, không cần reusability cao
- Data structure đơn giản (5 sheets, clear schema)
- Dễ debug và adjust trong notebook environment
- Business users có thể review logic trực tiếp

**Trade-off**: Code ít modular hơn nhưng transparent và easy to modify

### 2. Visualization Approach

**Quyết định**: Matplotlib + Seaborn với custom styling

**Libraries**:
- Matplotlib: Core plotting
- Seaborn: Statistical charts (heatmap nếu cần)
- Pandas: Data aggregation và table formatting

**Style guideline**:
```python
# Màu chính
PRIMARY = '#000000'  # Black
SECONDARY = '#808080'  # Gray
LIGHT = '#F5F5F5'  # Light gray
ACCENT_BLUE = '#2962FF'
ACCENT_RED = '#F23645'

# Font
FONT_ELEGANT = 'Calibri'  # hoặc Mulish
FONT_MONO = 'IBM Plex Mono'

# Layout principles
- Bỏ spines top/right
- Line width mỏng (0.5-1pt)
- Grid subtle hoặc không có
- Title bold, rõ ràng
- Legend tối thiểu, đặt ngoài plot area
```

**Chart types mapping**:
1. Line chart → matplotlib.pyplot.plot
2. Bar chart → matplotlib.pyplot.bar / barh
3. Stacked bar → bar với bottom parameter
4. Combo chart → twinx() cho dual axis
5. Gantt → barh với timeline data
6. Growth contribution → heatmap (seaborn) hoặc small multiples (matplotlib subplot)

### 3. Separate Charts vs Combined

**Quyết định**: Tách biểu đồ line chart theo kênh (5 charts riêng)

**Lý do**:
- Scale doanh thu giữa các kênh chênh lệch lớn (REF ~10B vs Digital ~2B)
- Clarity tốt hơn khi nhìn từng kênh
- Dễ paste vào PowerPoint (1 chart = 1 slide)

**Alternative rejected**: Combined chart với multiple y-axes → quá rối, khó đọc

### 4. Insights Generation

**Quyết định**: Manual analysis, không auto-generate

**Approach**:
- Analyst (AI) chạy notebook, xem charts/metrics
- Viết insights.md bằng tay dựa trên observations
- Đề xuất điều chỉnh có context và reasoning
- User review và refine

**Lý do**: Business insights cần context và judgment, không phù hợp với rule-based logic

### 5. Gantt Chart Implementation

**Quyết định**: Custom implementation với matplotlib horizontal bars

**Data structure**:
```python
# Parse từ sheet "ke hoach"
gantt_data = {
    'task': [...],
    'channel': [...],
    'start_month': [...],
    'duration': [...]
}
```

**Rendering**:
- Y-axis: Channels (B2B-CHC, B2B-Referral, B2B-PHI, B2C-PHC, B2C-Digital)
- X-axis: Tháng (Jan-Dec)
- Color coding: Theo channel hoặc quarter
- Text annotations: Tên chương trình trong bar

**Alternative rejected**: Plotly Gantt → overkill, không cần interactivity

### 6. Growth Contribution Analysis

**Quyết định**: Tính growth contribution để identify kênh nào drive tăng trưởng từng tháng

**Công thức**:
```python
# Cho mỗi tháng và kênh
delta_kenh = doanh_thu_2026[kenh][thang] - doanh_thu_2025[kenh][thang]
delta_tong = sum(all delta_kenh for all channels)
growth_contribution_pct = (delta_kenh / delta_tong) * 100
```

**Use case**:
- Identify growth drivers: Kênh nào contribute nhiều nhất vào tăng trưởng tháng X
- Lead time planning: Biết tháng 6 CHC drive 40% growth → tập trung effort CHC từ tháng 4-5
- Budget optimization: Allocate ngân sách vào kênh có contribution cao

**Visualization options**:
- Option 1: **Heatmap** (preferred) - 5 rows (kênh) x 12 columns (tháng), color = % contribution
  - Pros: Compact, easy to spot patterns
  - Cons: Có thể khó đọc exact values
- Option 2: **Small multiples** - 12 small horizontal bar charts, mỗi tháng 1 chart
  - Pros: Exact values rõ ràng
  - Cons: Tốn space hơn

**Quyết định**: Dùng **heatmap** cho overview, thêm **bảng số liệu** cho exact values

**Output cho insights**:
- Matrix showing monthly growth drivers
- Recommendations: "Tháng X: Focus kênh Y (contribute Z%)"
- Lead time strategy: "Để hit target tháng 6, push CHC campaigns từ tháng 4"

## Rủi ro / Đánh đổi

### Rủi ro 1: Data quality issues trong Excel
- **Risk**: NaN values, formatting inconsistency
- **Mitigation**: Validate data đầu vào, fillna() với strategy rõ ràng, log warnings

### Rủi ro 2: Sheet "ke hoach" có cấu trúc phức tạp (merged cells, multi-level headers)
- **Risk**: Pandas đọc sai structure
- **Mitigation**: Manual parsing nếu cần, hoặc yêu cầu user clean Excel trước

### Rủi ro 3: Charts không đủ rõ khi print/export
- **Risk**: Font size nhỏ, resolution thấp
- **Mitigation**: Set figsize lớn (10-12 inch), DPI ≥ 150, font size ≥ 10pt

### Rủi ro 4: Insights không đủ actionable
- **Risk**: Phân tích quá general
- **Mitigation**: Focus vào specific recommendations (adjust budget X%, hire Y people, reschedule Z)

## Data Schema

### Sheet: chi tieu
```
Columns: nam, thang, PACKAGE, CHC, REF, PHI, Digital
Rows: 24 (12 tháng x 2 năm)
Key: (nam, thang) → doanh thu từng kênh
```

### Sheet: ngan sach
```
Columns: kenh, ngan sach, ti trong
Rows: 6 (5 kênh + Total)
Purpose: Tổng ngân sách phân bổ theo kênh
```

### Sheet: ct ngan sach
```
Columns: note, noi dung, tong
Rows: 18 (chi tiết các khoản ngân sách)
Purpose: Breakdown ngân sách theo activity
```

### Sheet: dinh bien
```
Columns: Headcounts, Sales Manager, Team leader, Staff (x2 cho 2025/2026)
Rows: 6 (5 teams + Total)
Purpose: Định biên nhân sự
```

### Sheet: ke hoach
```
Structure: Complex (merged cells, quarterly breakdown)
Purpose: Marketing/sales programs timeline
Processing: Cần custom parsing logic
```

## Kế hoạch Implementation

### Phase 1: Data Preparation (Task 1)
1. Load all sheets
2. Clean và validate
3. Separate 2025 vs 2026 data
4. Calculate metrics

### Phase 2: Core Visualizations (Task 2-4)
1. Xu hướng tổng quan
2. So sánh kênh
3. Ngân sách analysis

### Phase 3: Advanced Visualizations (Task 5)
1. Nhân sự tables
2. Gantt chart
3. Roadmap

### Phase 4: Insights (Task 7)
1. Run analysis
2. Write insights.md
3. Propose adjustments

### Phase 5: Polish (Task 8)
1. Design compliance check
2. Testing
3. Documentation

## Câu hỏi Mở

- Sheet "ke hoach" có structure rõ ràng không? Có cần user clean up trước?
- Có cần thêm statistical tests (correlation, significance)? → Không, keep simple
- Có cần version control cho insights.md khi adjust? → Git handle được
