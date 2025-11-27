# Data Analyst Workflows

**Mục đích**: Chứa workflows, templates, và configs cho data analytics projects

**Folder name**: `data analyst vn` - Việt hóa workflow với cấu trúc modular

**Note**: Folder name có dấu cách (space) để dễ đọc. Nếu gặp issue với scripts, có thể dùng quotes: `"data analyst vn/workflow/..."`

---

## ⚡ Quick Orientation (30 giây)
- Đọc nhanh `workflow-quick-reference.md` nếu đã quen workflow và chỉ cần checklist phases.
- Muốn full hướng dẫn → vào `workflow/workflow-analytics-tong-quan.md` rồi drill-down các file phase.
- Sau khi hoàn tất project, chạy script `python "data analyst vn/tools/validate_workflow_outputs.py" <duong_dan_project>` để kiểm tra deliverable trước khi gửi.

---

## 📚 Files trong Thư Mục Này

### 1. **workflow/workflow-analytics-tong-quan.md** ⭐ CHÍNH
**Mục đích**: Tổng quan workflow và cấu trúc project

**Nội dung**:
- Mục đích, scope, prerequisites
- Cấu trúc project và success criteria
- Workflow overview (Mermaid diagram)
- File structure và links đến các file chi tiết

**Khi nào dùng**:
- Hiểu tổng quan workflow
- Đọc trước khi thực thi project

---

### 2. **workflow/workflow-analytics-phases-0-4.md**
**Mục đích**: Chi tiết phases 0-4 (Setup → Business Analysis)

**Nội dung**:
- Phase 0: Setup & Understanding
- Phase 1: Data Ingestion
- Phase 2: Data Quality Check
- Phase 3: EDA & Descriptive Statistics
- Phase 4: Business Analysis (phần 1)

**Khi nào dùng**:
- Khi thực thi các phases đầu tiên
- Cần hướng dẫn chi tiết từng step

---

### 3. **workflow/workflow-analytics-phases-5-8.md**
**Mục đích**: Chi tiết phases 5-8 (Visualization → Quality Review)

**Nội dung**:
- Phase 5: Visualization
- Phase 6: Insights Generation
- Phase 7: Documentation
- Phase 8: Quality Review

**Khi nào dùng**:
- Khi thực thi các phases cuối
- Cần hướng dẫn chi tiết từng step

---

### 4. **workflow/workflow-analytics-error-handling.md**
**Mục đích**: Error handling và troubleshooting

**Nội dung**:
- Common errors & solutions
- Logging & debugging
- Checkpoint system

**Khi nào dùng**:
- Khi gặp lỗi trong quá trình thực thi
- Cần troubleshooting steps

---

### 5. **workflow/workflow-analytics-decision-trees.md**
**Mục đích**: Decision trees cho các quyết định quan trọng

**Nội dung**:
- 10 decision trees
- Forecast method selection
- Validation action
- Chart selection

**Khi nào dùng**:
- Khi cần quyết định dựa trên data
- Cần logic tree cho các scenarios

---

### 6. **workflow/workflow-analytics-configuration.md**
**Mục đích**: Configuration và customization

**Nội dung**:
- workflow_config.yaml template
- Customization options
- Project settings

**Khi nào dùng**:
- Khi cần customize workflow
- Override defaults cho project cụ thể

---

### 7. **workflow/workflow-analytics-examples.md**
**Mục đích**: Examples và case studies

**Nội dung**:
- Real examples
- Case studies
- Integration với Speckit và OpenSpec

**Khi nào dùng**:
- Khi cần reference examples
- Hiểu cách áp dụng workflow

---

### 10. **workflow/workflow-analytics-review.md**
**Mục đích**: User review và refinement sau khi Agent hoàn
thành

**Nội dung**:
- Phase 9: Review & Refinement flow
- Format báo lỗi chuẩn
- Tips kiểm tra hiệu quả
- Commands hỗ trợ

**Khi nào dùng**:
- Sau khi nhận kết quả từ Agent
- Cần hướng dẫn cách báo lỗi
- Muốn hiểu quy trình fix

---

### 8. **workflow/workflow-quick-reference.md**
**Mục đích**: Quick reference cho Agent

**Nội dung**:
- Phase checklist
- Decision trees (condensed)
- Common commands
- Success criteria

**Khi nào dùng**:
- Agent đã quen workflow, cần reminder nhanh
- Quick lookup
- Mid-execution reference

---

### 9. **workflow/workflow-config.yaml**
**Mục đích**: Template configuration cho customize workflow

**Nội dung**:
- Project settings
- Data sources
- Analysis thresholds
- Visualization settings
- Validation rules
- Logging config

**Khi nào dùng**:
- Cần customize workflow cho project cụ thể
- Override defaults
- Team standards

**Cách dùng**:
```bash
# Copy to project directory
cp "data analyst vn/workflow/workflow-config.yaml" [project_dir]/

# Modify as needed
# Agent sẽ auto-detect và sử dụng
```

---

### 11. **tools/validate_workflow_outputs.py**
**Mục đích**: Script kiểm tra nhanh deliverable của từng project trước khi gửi

**Nội dung kiểm tra**:
- Đúng cấu trúc thư mục (`code/`, `charts/`, `document/`, `statics/`)
- Đã tạo đủ file code editable (analysis.py, analysis.ipynb, eda.ipynb, generate_charts.py)
- 7 biểu đồ EDA + stats CSV trong `statics/`
- Kiểm tra metrics.json, eda_statistics.csv, tình trạng charts business và insights.md (số lượng biểu đồ/từ chỉ bị enforce khi truyền tham số `--min/--max` tương ứng)

**Khi nào dùng**:
- Sau khi chạy xong Phase 8
- Trước khi bàn giao cho người dùng
- Khi muốn debug project cũ xem thiếu gì

**Cách dùng**:
```bash
python "data analyst vn/tools/validate_workflow_outputs.py" d:/.../project_folder
```

---

## 🚀 Quick Start cho Agent

### Khi User Yêu Cầu Phân Tích Data:

```
1. ✅ User input: [File path] + [Description]
   Example: "Phân tích plan 2026, so sánh 2025 vs 2026"

2. ✅ Agent reads: workflow/workflow-analytics-tong-quan.md
   (hoặc workflow/workflow-quick-reference.md nếu đã quen)

3. ✅ Agent executes: Phase 0 → Phase 8
   - Autonomous (không hỏi từng bước nhỏ)
   - Chỉ hỏi khi có vấn đề critical

4. ✅ Deliverables:
   - Charts (PNG 300 DPI)
   - Insights (Markdown, consistent với charts)
   - Documentation (README, guides)
   - Stats (CSV exports)
5. ✅ Validate trước khi giao:
    - `python "data analyst vn/tools/validate_workflow_outputs.py" [project_dir]`
   - Thêm `--min-insights-words` / `--min-business-charts` / `--max-business-charts` nếu đề bài có tiêu chí riêng
   - Fix các lỗi đỏ trước khi gửi kết quả

---

## 📂 Output Structure (v1.1.0)

Sau khi chạy workflow, project sẽ có cấu trúc:

```
[project_name]/
├── data/                        # ⭐ DATA LOCATION (Optional - xem phần Data Organization)
│   └── data.xlsx                # Source data file
├── code/
│   ├── analysis.py              # ⭐ Business metrics (script)
│   └── analysis.ipynb           # ⭐ Business metrics (notebook - EDITABLE)
├── charts/                      # Business-specific charts (khuyến nghị 3-5 chart, tùy brief)
│   ├── 01_[chart_name].png
│   ├── 02_[chart_name].png
│   └── ...
├── document/
│   ├── insights.md              # ⭐ CHÍNH (độ dài linh động, bám sát yêu cầu)
│   ├── slide.md                 # ⭐ SLIDE GUIDANCE (8-10 slide structure)
│   ├── metrics.json             # Business metrics output
│   ├── summary_by_year.csv
│   └── README.md
└── statics/                     # ⭐ EDA Module (FULL STATISTICS)
    ├── code/
    │   ├── eda.ipynb            # ⭐ EDA notebook (EDITABLE)
    │   └── generate_charts.py   # ⭐ Chart generator (script)
    ├── charts_eda/              # 7 standard EDA charts
    │   ├── 01_boxplot_revenue_by_year.png
    │   ├── 02_histogram_revenue_distribution.png
    │   ├── 03_correlation_heatmap.png
    │   ├── 04_violin_revenue_by_year.png
    │   ├── 05_timeseries_monthly_trend.png
    │   ├── 06_cv_comparison_by_year.png
    │   └── 07_statistics_summary_table.png
    ├── document/
    │   └── eda_statistics.csv
    └── README.md                # Documentation for statics module
```

**Key Points**:
- **All code is EDITABLE** - có thể đọc hiểu, tinh chỉnh khi data thay đổi
- **Dual formats** - notebook (.ipynb) cho interactive, script (.py) cho automated
- **Statics module** - phần thống kê EDA đầy đủ, tách biệt với business analysis
- **Clear separation** - EDA charts vs Business charts
- **Slide guidance** - gợi ý cấu trúc slide deck presentation (minimalist, elegant)
- **Data flexibility** - data có thể để trong project hoặc external (xem Data Organization)

---

## 📁 Data Organization - Đặt Data Ở Đâu?

Workflow **LINH HOẠT** - mày tự quyết định mỗi project. Có 2 options:

### **Option 1: Data trong Project** ✅ Recommended cho hầu hết cases

```
[project_name]/
├── data/
│   └── data.xlsx  ⭐ Data ở đây
├── code/
├── charts/
└── document/
```

**Ưu điểm**:
- ✅ **Self-contained**: 1 folder có tất cả, portable
- ✅ **Dễ backup**: Copy folder là xong
- ✅ **Dễ share**: Gửi cho người khác không cần giải thích path
- ✅ **No path issues**: Code luôn chạy đúng

**Nhược điểm**:
- ⚠️ Data duplicate nếu nhiều projects dùng chung data
- ⚠️ Tốn dung lượng nếu data lớn (>100MB)

**Khi nào dùng**:
- Project nhỏ/vừa (data < 100MB)
- Mỗi project có data riêng
- Muốn portable (chuyển máy, share)

**Code setup**:
```python
# In analysis.py or notebooks
BASE_DIR = Path(__file__).parent.parent  # project root
DATA_FILE = BASE_DIR / "data" / "data.xlsx"
```

**Example**: `ipynb/phi/2025 11 blvp analysis/data/data.xlsx`

---

### **Option 2: Data External (Centralized)** ✅ Cho data lớn hoặc shared

```
hmsg/
├── excel/                    # Centralized data storage
│   ├── phi/
│   │   └── 2025 11 blvp/
│   │       └── data.xlsx  ⭐ Data chung ở đây
│   └── total/
│       └── plan 2026/
│           └── data.xlsx
└── ipynb/
    ├── phi/2025 11 blvp analysis/  (no data/ folder)
    └── total/plan 2026/            (no data/ folder)
```

**Ưu điểm**:
- ✅ **No duplication**: Nhiều projects dùng chung 1 data
- ✅ **Centralized updates**: Update 1 chỗ, tất cả projects đều mới
- ✅ **Tiết kiệm dung lượng**: Không lưu nhiều copies

**Nhược điểm**:
- ⚠️ Path phức tạp hơn
- ⚠️ Không portable (phải maintain folder structure)
- ⚠️ Khi share phải gửi cả data folder

**Khi nào dùng**:
- Data lớn (>100MB)
- Nhiều projects dùng chung data source
- Data thường xuyên update (1 chỗ update, all projects benefit)

**Code setup**:
```python
# Option 2a: Relative path (từ project lên hmsg/)
BASE_DIR = Path(__file__).parent.parent.parent.parent.parent  # hmsg/
DATA_FILE = BASE_DIR / "excel" / "phi" / "2025 11 blvp" / "data.xlsx"

# Option 2b: Absolute path (recommended)
DATA_FILE = Path("d:/pcloud/workspace/code/python/hmsg/excel/phi/2025 11 blvp/data.xlsx")
```

**Example**: `excel/phi/2025 11 blvp/data.xlsx` (multiple projects access)

---

### **So Sánh Nhanh**

| Tiêu chí | Option 1 (In Project) | Option 2 (External) |
|----------|----------------------|---------------------|
| **Portable** | ✅ Cao | ⚠️ Thấp |
| **Setup đơn giản** | ✅ Rất dễ | ⚠️ Phức tạp hơn |
| **Shared data** | ❌ Duplicate | ✅ No duplicate |
| **Disk usage** | ⚠️ Tốn hơn | ✅ Tiết kiệm |
| **Backup** | ✅ Dễ | ⚠️ Phải backup nhiều folders |
| **Recommended cho** | Hầu hết projects | Data lớn, shared |

---

### **Quy Tắc Đặt Tên Data File**

Dù option nào, **data file nên tên `data.xlsx`** (hoặc `data.csv`) để:
- Code nhất quán
- Dễ tìm
- Workflow không cần customize nhiều

Nếu nhiều files:
```
data/
├── data.xlsx           # Main data
├── data_raw.xlsx       # Raw backup
└── data_lookup.xlsx    # Reference tables
```

---

### **Khuyến Nghị Của Workflow**

**Mặc định**: Workflow khuyến khích **Option 1** (data trong project)

**Lý do**:
- Đơn giản, rõ ràng
- Phù hợp 90% use cases
- Dễ troubleshoot

**Khi nào chuyển sang Option 2**:
- Data >100MB
- >3 projects dùng chung data
- Data update hàng ngày/tuần

---

## 🎯 Workflow Phases (Summary)

| Phase | Name | Duration | Output |
|-------|------|----------|--------|
| 0 | Setup | 1 min | Project structure |
| 1 | Data Ingestion | 2 min | Loaded dataframes |
| 2 | Quality Check | 3 min | Validated & cleaned data |
| 3 | EDA & Stats | 5 min | 7 charts + CSV stats |
| 4 | Business Analysis | 5 min | Metrics + insights |
| 5 | Visualization | 5 min | Business charts |
| 6 | Insights Generation | 5 min | insights.md (validated) |
| 7 | Documentation | 2 min | README, guides |
| 8 | Quality Review | 2 min | Final validation |

**Total**: ~30 minutes (autonomous)

---

## 📖 Integration với AGENTS.md

File `AGENTS.md` (root project) đã được cập nhật:

```
**ĐỐI VỚI DATA ANALYTICS PROJECT:**
NẾU TAO KÉO FILE DỮ LIỆU VÀO (Excel, CSV, JSON, PDF):
-> ĐỌC NGAY `data analyst vn/workflow/workflow-analytics-tong-quan.md`
-> THỰC THI WORKFLOW TỪ PHASE 0 → PHASE 8
-> KẾT QUẢ CUỐI: Charts + Insights + Documentation (ĐỒNG NHẤT)
```

Agent sẽ tự động trigger workflow khi detect data file.

---

## 💡 Tips cho User

### Khi Cần Phân Tích Mới:

1. **Provide context** (2-3 câu):
   - Mục đích phân tích?
   - Key metrics quan tâm?
   - Timeline?

2. **Provide data file**:
   - Drag & drop vào chat
   - Hoặc cung cấp path

3. **Let Agent work**:
   - Agent sẽ tự thực thi workflow
   - Chỉ hỏi khi cần clarify

4. **Review outputs**:
   - Charts trong `[project]/charts/`
   - Insights trong `[project]/document/insights.md`
   - README trong `[project]/README.md`

### Khi Cần Customize:

1. Copy `workflow/workflow-config.yaml` to project dir
2. Modify settings (CV thresholds, colors, etc.)
3. Agent sẽ auto-detect và override defaults

---

## 🔗 Related Resources

### In This Repo:
- `../AGENTS.md` - Agent rules & triggers
- `../ipynb/total/plan 2026/` - Example project (current)

### External:
- Pandas docs: https://pandas.pydata.org/docs/
- Matplotlib gallery: https://matplotlib.org/stable/gallery/
- Seaborn examples: https://seaborn.pydata.org/examples/

---

## 📝 Version History

**v1.0.0** (2025-11-14):
- Initial workflow playbook
- 8-phase process defined
- Config template created
- Quick reference added

**v1.1.0** (2025-11-14):
- Split WORKFLOW_ANALYTICS.md thành multiple files
- Tối ưu cấu trúc với thư mục workflow/
- Chuẩn hóa tên file (chữ thường, gạch ngang)
- Việt hóa workflow (folder: `data analyst vn/`)
- 7 files chi tiết thay vì 1 file 1700+ dòng

**Future Enhancements**:
- [ ] ML prediction module
- [ ] PowerPoint auto-generation
- [ ] Interactive dashboard (HTML)
- [ ] Multi-language support

---

## 📞 Support

**For Agent Issues**:
- Check workflow/workflow-analytics-error-handling.md
- Review workflow/workflow-analytics-decision-trees.md
- Validate config file

**For User Questions**:
- Read examples in workflow/workflow-analytics-examples.md
- Check outputs in document/
- Review current project: `../ipynb/total/plan 2026/`

---

## 🎬 VÍ DỤ THỰC TẾ: Phân Tích File Excel Từ A-Z

### Tình huống:
Mày có file **`sales_data.xlsx`** với dữ liệu bán hàng 2023-2025, muốn phân tích xu hướng và tìm insights.

### File Excel Structure:
```
Sheet: "data"
Columns: Tháng, Năm, Kênh, Sản phẩm, Doanh thu, Số lượng
Rows: 1122 records (3 năm × 12 tháng × ~30 records/tháng)
```

---

### **Bước 1: User Khởi Động** (1 phút)

**User làm**:
```
Kéo file sales_data.xlsx vào chat
Gõ: "Phân tích dữ liệu này, tìm xu hướng và insights"
```

**Agent response**:
```
📊 Tao đã đọc qua file data của mày. Dưới đây là các phân tích tao có thể làm:

💡 KHUYẾN NGHỊ: Comprehensive Analysis
   Lý do: Data có 1122 rows, time series 2023-2025,
          4 kênh khác nhau → nên phân tích đầy đủ

──────────────────────────────────────────
1. Phân tích xu hướng theo thời gian ⭐
2. Phân tích theo kênh/sản phẩm ⭐
3. Phân tích outliers & chất lượng dữ liệu ⭐

Mày muốn:
  (1) Làm theo khuyến nghị
  (2) Chọn riêng
  (3) Mô tả ngắn
```

**User reply**: `"yes"` hoặc `"1"` (1 từ!)

---

### **Bước 2-3: Agent Tự Động Thực Thi** (Phase 0-2, ~5 phút)

**Agent làm gì** (không hỏi, tự động):

```bash
✅ Phase 0: Setup
   - Tạo thư mục: sales_analysis_2023_2025/
   - Tạo structure: code/, charts/, document/, statics/

✅ Phase 1: Data Ingestion
   - Load sales_data.xlsx
   - Detect: 1 sheet "data", 1122 rows, 6 columns
   - Preview: OK

✅ Phase 2: Data Quality
   - Check missing: 2 cells missing trong "Số lượng" → Fill 0
   - Check duplicates: 0 duplicates
   - Validate data types: OK
   - Status: ✅ PASSED
```

**Console log**:
```
✅ Setup complete: sales_analysis_2023_2025
✅ Loaded 1 sheet: data (1122 rows × 6 columns)
✅ Data quality: PASSED (auto-fixed 2 missing values)
```

---

### **Bước 4: EDA - Statistical Analysis** (Phase 3, ~5 phút)

**Agent tạo files**:

1. **`statics/code/eda.ipynb`** (12 sections):
```python
# Section 1: Import & Setup
import pandas as pd
import matplotlib.pyplot as plt
...

# Section 3: Descriptive Statistics
df.describe()

# Section 5: Outlier Detection (IQR)
Q1 = df['Doanh thu'].quantile(0.25)
Q3 = df['Doanh thu'].quantile(0.75)
IQR = Q3 - Q1
outliers = df[(df['Doanh thu'] < Q1 - 1.5*IQR) | (df['Doanh thu'] > Q3 + 1.5*IQR)]

# Section 7: Correlation Analysis
corr_matrix = df[['Doanh thu', 'Số lượng']].corr()

# Section 9: Coefficient of Variation
cv_by_channel = df.groupby('Kênh')['Doanh thu'].agg(['mean', 'std'])
cv_by_channel['CV'] = (cv_by_channel['std'] / cv_by_channel['mean']) * 100
```

2. **`statics/code/generate_charts.py`** (automated):
```python
# Generate 7 EDA charts
# Chart 1: Boxplot (outliers by year)
# Chart 2: Histogram (distribution)
# Chart 3: Correlation heatmap
# Chart 4: Violin plot
# Chart 5: Time series trend
# Chart 6: CV comparison
# Chart 7: Statistics table
```

3. **Run script → Generate 7 charts**:
```
statics/charts_eda/
├── 01_boxplot_revenue_by_year.png
├── 02_histogram_revenue_distribution.png
├── 03_correlation_heatmap.png
├── 04_violin_revenue_by_year.png
├── 05_timeseries_monthly_trend.png
├── 06_cv_comparison_by_year.png
└── 07_statistics_summary_table.png
```

4. **Export CSV**:
```
statics/document/eda_statistics.csv
(Mean, Std, CV, Min, Max, Q1, Q3 cho từng kênh/năm)
```

**Console log**:
```
✅ Created: statics/code/eda.ipynb (editable)
✅ Created: statics/code/generate_charts.py (automated)
✅ Generated: 7 EDA charts (300 DPI)
✅ Exported: eda_statistics.csv
```

---

### **Bước 5: Business Analysis** (Phase 4, ~5 phút)

**Agent tạo files**:

1. **`code/analysis.ipynb`** (12 sections):
```python
# Section 4: Growth Analysis
growth_2024 = (revenue_2024 - revenue_2023) / revenue_2023 * 100
growth_2025 = (revenue_2025 - revenue_2024) / revenue_2024 * 100

# Section 6: Channel Contribution
contribution = df.groupby('Kênh')['Doanh thu'].sum()
contribution_pct = contribution / contribution.sum() * 100

# Section 8: Seasonality Detection
monthly_avg = df.groupby('Tháng')['Doanh thu'].mean()
peak_month = monthly_avg.idxmax()

# Section 10: Risk Assessment (CV)
risk_channels = cv_by_channel[cv_by_channel['CV'] > 50]
```

2. **Save metrics**:
```json
document/metrics.json:
{
  "growth_2024": 12.5,
  "growth_2025": -8.2,
  "top_channel": "Online",
  "top_channel_share": 45.3,
  "peak_month": "November",
  "high_risk_channels": ["Retail"]
}
```

**Console log**:
```
✅ Created: code/analysis.ipynb (editable)
✅ Calculated: Growth rates, contributions, seasonality
✅ Saved: document/metrics.json
```

---

### **Bước 6: Business Charts** (Phase 5, ~5 phút)

**Agent tạo file**:

**`code/generate_business_charts.py`**:
```python
# Chart 1: Revenue Trend 2023-2025
fig, ax = plt.subplots(figsize=(10, 6))
ax.bar(years, revenues, color='#F5F5F5', edgecolor='#E0E0E0', linewidth=0.5)
ax.plot(years, revenues, color='#000000', linewidth=2, marker='o')
# ... minimalist design, no grid

# Chart 2: Channel Contribution %
# Line chart, black, 0-100% scale

# Chart 3: Top Channels Comparison
# Grouped bars, light gray vs black
```

**Generate 3 charts**:
```
charts/
├── 01_revenue_trend_2023_2025.png
├── 02_channel_contribution_percent.png
└── 03_top_channels_comparison.png
```

**Console log**:
```
✅ Created: code/generate_business_charts.py
✅ Generated: 3 business charts (300 DPI, minimalist style)
```

---

### **Bước 7: Insights Generation** (Phase 6, ~5 phút)

**Agent tạo**:

**`document/insights.md`** (~3000 words):
```markdown
# Sales Analysis 2023-2025 - Key Insights

## TÓM TẮT ĐIỀU HÀNH

### Phát Hiện Quan Trọng
1. **Doanh thu giảm 8.2% năm 2025** - Cần hành động ngay
2. **Online channel tăng trưởng mạnh** - Chiếm 45.3% tổng doanh thu
3. **Retail kênh có rủi ro cao** - CV 62% (biến động lớn)

### Hành Động Ưu Tiên
1. ✅ Đầu tư thêm vào Online (momentum tốt)
2. ✅ Ổn định Retail (giảm biến động)
3. ✅ Optimize tháng 11 (peak performance)

---

## 1. TỔNG QUAN DỮ LIỆU

Dataset: 1122 records, 2023-2025, 4 kênh
Quality: ✅ PASSED (2 missing values đã fix)

---

## 2. PHÂN TÍCH XU HƯỚNG

[Chart: 01_revenue_trend_2023_2025.png]

**Findings**:
- 2023: 250M (baseline)
- 2024: 281M (+12.5% growth)
- 2025: 258M (-8.2% decline) ⚠️

**Root Cause Analysis**:
- Retail channel giảm 25% (từ 80M → 60M)
- Online tăng 35% (bù lại một phần)

---

## 3. PHÂN TÍCH KÊNH

[Chart: 02_channel_contribution_percent.png]

| Kênh | 2023 | 2024 | 2025 | Trend |
|------|------|------|------|-------|
| Online | 35% | 40% | 45% | ↗️ Tăng |
| Retail | 32% | 28% | 23% | ↘️ Giảm |
| Wholesale | 22% | 22% | 22% | → Stable |
| B2B | 11% | 10% | 10% | → Stable |

**Insights**:
- Online đang thay thế Retail (digital transformation)
- Wholesale & B2B stable (ít biến động)

---

## 4. RỦI RO & KHUYẾN NGHỊ

### Rủi Ro Cao
- **Retail CV 62%** → Biến động lớn, khó dự đoán

### Khuyến Nghị
1. **Short-term (Q1 2026)**:
   - Tăng marketing Online (ROI cao)
   - Audit Retail (tìm nguyên nhân decline)

2. **Long-term**:
   - Omnichannel strategy (Online + Retail tích hợp)
   - Diversify revenue streams

---

*Refer to charts/*, *statics/charts_eda/*, *document/metrics.json*
```

**Validation**:
```python
# Agent cross-validate:
✅ Numbers in insights match metrics.json
✅ All charts referenced exist
✅ Insights consistent với EDA findings
```

**Console log**:
```
✅ Generated: document/insights.md (3000 words)
✅ Validation: PASSED (insights ↔ charts ↔ data consistent)
```

---

### **Bước 8: Documentation** (Phase 7-8, ~2 phút)

**Agent tạo**:

**`README.md`**:
```markdown
# Sales Analysis 2023-2025

## Key Findings
- Revenue declined 8.2% in 2025
- Online channel grew 35%
- Retail channel at risk (high volatility)

## Files
- **insights.md** - Full analysis report
- **charts/** - 3 business charts
- **statics/charts_eda/** - 7 statistical charts
- **code/** - Editable analysis code

## Quick Start
1. Open `document/insights.md` for full report
2. Review charts in `charts/`
3. Run `code/analysis.ipynb` to regenerate
```

**Final Quality Check**:
```python
✅ Data quality: PASSED
✅ EDA completed: 7 charts + CSV
✅ Business metrics: Calculated
✅ Charts generated: 10 total
✅ Insights written: 3000 words
✅ Consistency validated: PASSED
✅ Documentation: Complete
```

**Console log**:
```
✅ Generated: README.md
🎉 ANALYSIS COMPLETE - READY FOR DELIVERY

Deliverables:
  📊 10 charts (7 EDA + 3 business)
  📝 insights.md (3000 words)
  💾 metrics.json + eda_statistics.csv
  📂 Editable code (4 files: 2 notebooks + 2 scripts)

Location: sales_analysis_2023_2025/
```

---

### **Bước 9: User Review** (2 phút)

**User mở files**:

1. **`document/insights.md`** → Đọc findings
2. **`charts/01_revenue_trend_2023_2025.png`** → Xem chart (minimalist, đẹp!)
3. **`document/metrics.json`** → Check numbers

**User hài lòng** → **DONE!**

**Nếu cần chỉnh**:
```
User: "Chart 1 màu đỏ được không?"
Agent: Opens code/generate_business_charts.py
        → Sửa line 25: bar_color = '#F23645' (red)
        → Run lại → Chart updated
```

---

## 📊 Tổng Kết Quy Trình

| Bước | Ai Làm | Thời Gian | Output |
|------|--------|-----------|--------|
| 1. Khởi động | User (1 dòng) | 10s | Kéo file + "phân tích" |
| 2. Gợi ý | Agent | 30s | Smart recommendations |
| 3. Confirm | User (1 từ) | 5s | "yes" |
| 4-8. Execute | Agent (tự động) | 25 phút | 10 charts + insights + code |
| 9. Review | User | 2 phút | Read insights, view charts |

**TOTAL**: ~30 phút (95% autonomous)

---

## 🎯 Điểm Khác Biệt

### ❌ Cách Cũ (Manual):
```
1. User phải tự viết code pandas
2. User phải tự vẽ từng chart
3. User phải tự tính metrics
4. User phải tự viết insights
5. Không có validation
→ Mất 4-8 giờ, dễ sai sót
```

### ✅ Cách Mới (Workflow):
```
1. User: Kéo file + "phân tích"
2. Agent: Tự động làm hết
3. User: Review kết quả
→ Mất 30 phút, consistent & validated
```

---

**Tạo bởi**: Claude Code Assistant
**Ngày**: 2025-11-14
**Mục đích**: Standardize data analytics workflow

🎯 **Ready to analyze!**

---

---


# Slash Commands - Hướng Dẫn Thực Chiến

## Commands Có Sẵn

| Command               | Mục đích                   | Khi nào dùng                    |
| --------------------- | -------------------------- | ------------------------------- |
| `/analytics.run`      | Full workflow Phase 0→8    | Phân tích hoàn chỉnh từ đầu     |
| `/analytics.eda`      | Chỉ EDA + statics module   | Muốn hiểu data trước khi đi sâu |
| `/analytics.insights` | Generate insights + slides | Đã có metrics, cần viết báo cáo |
| `/analytics.charts`   | Regenerate charts          | Cần đổi màu, style, hoặc update |
| `/analytics.check`    | Kiểm tra data quality      | Validate data mới hoặc debug    |

---

## Cách Dùng Thực Chiến

### 1. Phân tích hoàn chỉnh (phổ biến nhất)

```bash
# Kéo file Excel vào chat + gõ command
/analytics.run data.xlsx so sánh doanh thu 2024 vs 2025

# Hoặc chỉ file path
/analytics.run d:/data/sales_2025.xlsx

# Với file requirements riêng
/analytics.run dữ liệu trong D:\project\data
yêu cầu trong @plan.md
```

**Flow**:
1. Agent đọc data + requirements
2. **Trình bày PROPOSAL** (hướng tiếp cận, metrics, charts dự kiến)
3. **Chờ user confirm** ("ok" / "sửa: ..." / "thêm: ...")
4. Thực thi Phase 0→8

**Skip confirmation**: Thêm "làm ngay" hoặc "thực thi trực tiếp" để bỏ qua bước confirm

**Kết quả**: 7 EDA charts + 3-5 business charts + insights.md (10,000+ words) + slide.md + code editable

---

### 2. Quick check data trước khi phân tích

```bash
# Check nhanh (mặc định)
/analytics.check data.xlsx

# Check kỹ hơn
/analytics.check data.xlsx standard

# Check sâu (bao gồm business rules)
/analytics.check data.xlsx deep
```

**Kết quả**: Report console với issues + recommendations

---

### 3. Chỉ cần EDA nhanh

```bash
# Tạo statics module với 7 charts
/analytics.eda data.xlsx
```

**Kết quả**: `statics/` folder với eda.ipynb + generate_charts.py + 7 charts + eda_statistics.csv

---

### 4. Regenerate insights (khi đã có data)

```bash
# Generate từ data hiện có
/analytics.insights

# Generate với focus cụ thể
/analytics.insights focus: seasonality và growth drivers
```

**Kết quả**: insights.md + slide.md mới

---

### 5. Đổi style charts

```bash
# Regenerate tất cả EDA charts
/analytics.charts eda

# Regenerate business charts với custom colors
/analytics.charts business colors: #FF6B6B, #4ECDC4

# Chỉ regenerate chart cụ thể
/analytics.charts eda chart: correlation
```

**Kết quả**: Charts mới với style/colors đã chỉnh

---

## Workflow Thực Tế

### Scenario 1: Phân tích từ đầu
```
1. /analytics.check data.xlsx deep     → Validate data
2. /analytics.run data.xlsx            → Full analysis
3. Review insights.md và charts
4. Done!
```

### Scenario 2: Chỉ cần EDA nhanh
```
1. /analytics.eda data.xlsx            → Tạo statics module
2. Xem charts trong statics/charts_eda/
3. Nếu cần tiếp → /analytics.run
```

### Scenario 3: Update insights sau khi có thêm context
```
1. Đã có project với data
2. /analytics.insights focus: competitive analysis
3. Review insights.md mới
```

### Scenario 4: Đổi style presentation
```
1. Đã có charts
2. /analytics.charts all colors: #000000, #FFFFFF
3. Charts regenerate với minimalist black/white
```

---

## Tips

1. **Luôn check data trước** nếu data mới: `/analytics.check data.xlsx`

2. **Dùng `/analytics.run`** cho hầu hết cases - nó làm hết mọi thứ

3. **Dùng commands riêng lẻ** khi cần:
   - Chỉ muốn EDA → `/analytics.eda`
   - Chỉ muốn regenerate → `/analytics.charts` hoặc `/analytics.insights`

4. **Input rõ ràng** = output tốt hơn:
   ```
   Không nên: /analytics.run data.xlsx
   Nên: /analytics.run data.xlsx phân tích xu hướng doanh thu, so sánh kênh online vs offline
   ```

5. **Code luôn EDITABLE** - mày có thể mở notebooks để hiểu logic và tinh chỉnh

---

## Agents Hỗ Trợ

Commands này hoạt động trên 3 agents:

| Agent | Location | Trigger |
|-------|----------|---------|
| Claude Code | `.claude/commands/` | `/analytics.run` |
| GitHub Copilot | `.github/prompts/` | Tùy config |
| KiloCode | `.kilocode/workflows/` | Tùy config |

---

## Files Location

```
hmsg/
├── .claude/commands/
│   ├── analytics.run.md
│   ├── analytics.eda.md
│   ├── analytics.insights.md
│   ├── analytics.charts.md
│   └── analytics.check.md
├── .github/prompts/
│   ├── analytics.run.prompt.md
│   ├── analytics.eda.prompt.md
│   ├── analytics.insights.prompt.md
│   ├── analytics.charts.prompt.md
│   └── analytics.check.prompt.md
└── .kilocode/workflows/
    ├── analytics.run.md
    ├── analytics.eda.md
    ├── analytics.insights.md
    ├── analytics.charts.md
    └── analytics.check.md
```

---

## Proposal & Confirmation Flow

Khi dùng `/analytics.run`, Agent sẽ trình bày proposal trước khi thực thi:

```
PHÂN TÍCH ĐỀ XUẤT
═══════════════════════════════════════════

1. HIỂU YÊU CẦU
- Mục tiêu chính: So sánh doanh thu 2024 vs 2025
- Data source: data.xlsx (2 sheets, ~5000 rows)
- Phạm vi phân tích: 2024-2025, theo kênh và sản phẩm

2. HƯỚNG TIẾP CẬN
- Key metrics: Growth rate, contribution %, CV
- Góc nhìn: Year-over-year, channel comparison
- Charts dự kiến: Trend, waterfall, heatmap

3. OUTPUT DỰ KIẾN
- EDA: 7 charts thống kê cơ bản
- Business: 4 charts (trend, contribution, comparison, seasonality)
- Insights: Focus vào growth drivers và risk assessment

4. CÂU HỎI LÀM RÕ
- Có cần phân tích theo region không?
- Target growth rate là bao nhiêu %?

═══════════════════════════════════════════
Mày đồng ý với hướng này không?
- "ok" / "đồng ý" → Bắt đầu thực thi
- "sửa: [yêu cầu]" → Điều chỉnh approach
- "thêm: [yêu cầu]" → Bổ sung scope
```

**Cách respond**:
- `ok` hoặc `đồng ý` → Agent bắt đầu thực thi
- `sửa: thêm phân tích theo region` → Agent điều chỉnh và hỏi lại
- `thêm: so sánh với competitor` → Agent bổ sung scope

**Lợi ích**:
- Đảm bảo đúng hướng trước khi làm
- Tiết kiệm thời gian sửa sau
- User có cơ hội clarify requirements

**Sau khi phân tích xong**: Xem `workflow-analytics-review.md`     
để biết cách review và báo lỗi cho Agent

---

**Ngày tạo**: 2025-11-21
**Cập nhật**: 2025-11-21 (thêm proposal flow)
**Mục đích**: Quick reference cho analytics slash commands
