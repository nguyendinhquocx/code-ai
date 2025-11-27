# Data Analytics Workflow - Phases 5-8

**File này**: Phases 5-8 (Visualization → Quality Review)
**Liên kết**: [`workflow-analytics-tong-quan.md`](workflow-analytics-tong-quan.md) | [`phases-0-4.md`](workflow-analytics-phases-0-4.md)

---

## 📑 Quick Navigation

| Phase | Nội dung | Khi nào dùng |
|-------|----------|--------------|
| [Phase 5](#phase-5-visualization) | Business Visualization | Tạo business charts (revenue, %, comparison) với code editable |
| [Phase 6](#phase-6-insights-generation) | Insights Generation | Draft insights, cross-validate với charts & data |
| [Phase 7](#phase-7-documentation) | Documentation | Tạo README, guide, package deliverables |
| [Phase 8](#phase-8-quality-review) | Quality Review | Final checklist, validate consistency |

**Previous**: [Phases 0-4 (Setup → Business Analysis)](workflow-analytics-phases-0-4.md)

**Design Philosophy**: Modern Minimalist (shadcn/Vercel style) - White/black/gray, thin lines, no grid by default

---

## PHASE 5: Visualization

**CRITICAL**: Tạo CODE EDITABLE cho business charts để có thể regenerate khi data thay đổi

**AGENT AUTONOMY - Linh hoạt & Sáng tạo:**
```
Nguyên tắc thiết kế là HƯỚNG DẪN, không phải LUẬT CỨNG.

Agent được phép:
✓ Tự do điều chỉnh màu sắc, layout, style dựa trên data context
✓ Phá vỡ quy tắc nếu có lý do chính đáng (VD: data đặc biệt, insight quan trọng)
✓ Sáng tạo chart types mới nếu phù hợp hơn
✓ Thử nghiệm và tối ưu để insights nổi bật nhất

Quy trình:
1. Đọc nguyên tắc thiết kế → Hiểu tinh thần, không phải từng chữ
2. Phân tích data → Quyết định style phù hợp
3. Tạo chart → Áp dụng nguyên tắc MỘT CÁCH LINH HOẠT
4. Tự đánh giá: "Chart này có giúp hiểu insights không?"
5. Nếu CÓ → Keep. Nếu KHÔNG → Simplify thêm

KHÔNG cứng nhắc. KHÔNG copy-paste template mù quáng.
```

### Step 5.0: Tạo Business Visualization Code Files

**QUAN TRỌNG**: Tạo script hoặc thêm cells vào notebook để generate business charts

**Option A: Script riêng** (recommended cho nhiều charts)

**File: `code/generate_business_charts.py`**

**Mục đích**:
- Generate business-specific charts (beyond EDA)
- Automated và reproducible
- Có thể chỉnh sửa khi requirements thay đổi

**Template Code**:
```python
"""
Generate Business Charts
Tạo charts cho business analysis (beyond EDA)
"""
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from pathlib import Path

# =============================================================================
# SETUP
# =============================================================================

BASE_DIR = Path(__file__).parent.parent.parent.parent.parent.parent  # hmsg/
DATA_FILE = BASE_DIR / "path/to/data.xlsx"
CHARTS_DIR = Path(__file__).parent.parent / "charts"
CHARTS_DIR.mkdir(exist_ok=True)

# Design settings - Aesthetic & Professional
plt.rcParams['figure.dpi'] = 300
plt.rcParams['font.size'] = 10
plt.rcParams['font.family'] = 'sans-serif'
plt.rcParams['axes.linewidth'] = 1.2
plt.rcParams['grid.linewidth'] = 0.8

# Color palette: Muted, elegant tones (inspired by modern data viz)
COLORS = {
    'primary': '#2C3E50',      # Dark blue-gray (main text, borders)
    'secondary': '#546E7A',    # Medium blue-gray (secondary elements)
    'accent': '#7986CB',       # Soft indigo (highlights, important data)
    'success': '#81C784',      # Muted green (positive trends)
    'warning': '#FFB74D',      # Soft orange (warnings, attention)
    'danger': '#E57373',       # Muted red (negative trends, outliers)
    'neutral': '#B0BEC5',      # Light gray (backgrounds, grids)
    'background': '#FAFAFA'    # Off-white (chart backgrounds)
}

# Chart-specific palettes
PALETTE_SEQUENTIAL = ['#E8EAF6', '#C5CAE9', '#9FA8DA', '#7986CB', '#5C6BC0', '#3F51B5']
PALETTE_DIVERGING = ['#E57373', '#FFCC80', '#FFF9C4', '#C5E1A5', '#81C784', '#66BB6A']
PALETTE_CATEGORICAL = ['#7986CB', '#81C784', '#FFB74D', '#E57373', '#64B5F6', '#A1887F']

# =============================================================================
# AESTHETIC DEFAULTS - Modern Minimalist (shadcn/Vercel/React style)
# =============================================================================
# QUAN TRỌNG: Agent PHẢI ÁP DỤNG phong cách này mặc định cho tất cả business charts
#
# TRIẾT LÝ THIẾT KẾ:
# - Tối giản, hiện đại như shadcn/Vercel/React charts
# - Chủ yếu trắng/đen/xám - KHÔNG loè loẹt, KHÔNG nhiều màu
# - Mảnh, tinh tế, hạn chế trang trí
# - Clean & elegant
#
# MÀU SẮC MẶC ĐỊNH:
# - Bar charts (context data): #F5F5F5 (very light gray) + border #E0E0E0 (0.5px)
# - Line charts (main data): #000000 (black, 2-2.5px width)
# - Bar charts (context data): #F5F5F5 (very light gray) + border #E0E0E0 (0.5px)
#   QUAN TRỌNG: KHÔNG dùng đen cho cột, chỉ dùng xám để tránh quá nặng nề
# - Background: #FAFAFA hoặc white
# - Spines: #E0E0E0 (0.5px)
# BAR CHART SPACING:
# - bar_width: 0.6-0.8 (KHÔNG dùng 1.0 để có khoảng hở giữa các cột)
# - Grouped bars: tổng width < khoảng cách giữa groups
# - Khoảng hở giúp chart nhẹ nhàng, dễ đọc hơn
#
# DECORATION:
# - Grid: FALSE by default (chỉ bật khi >6 data points VÀ cần thiết)
# - Line width: 0.5-2.5px (mảnh, thanh thoát)
# - Marker size: 6-8px (nhỏ, tinh tế)
#
# LƯU Ý: Nếu user yêu cầu màu sắc khác hoặc style khác thì OVERRIDE được

# =============================================================================
# CHART CONFIGURATIONS - Per-chart customization
# =============================================================================
# MỤC ĐÍCH: Mỗi chart có config riêng để dễ tweak
# User chỉ cần sửa config, không phải đụng vào code logic

# Example 1: Bar chart with trend line (minimalist)
CHART1_CONFIG = {
    'bar_color': '#9E9E9E',        # Medium-light gray cho single bars
    'bar_alpha': 1.0,
    'bar_edgecolor': '#757575',    # Slightly darker border        
    'bar_edgewidth': 0.5,
    'bar_width': 0.7,              # < 1.0 để có khoảng hở
    'trend_color': '#000000',      # Black - primary focus
    'trend_linewidth': 2,          # Thin, modern
    'trend_marker_size': 6,        # Small, refined
    'show_grid': False,            # No grid - clean
    'grid_alpha': 0.15,            # Very subtle if enabled
    'figsize': (10, 6),
    'spine_color': '#E0E0E0',      # Light gray spines
    'spine_width': 0.5
}

# Example 2: Percentage line chart (minimalist)
CHART2_CONFIG = {
    'line_color': '#000000',       # Black - primary data
    'line_width': 2.5,             # Thin, sleek
    'marker_size': 8,              # Small, refined
    'marker_edge_width': 1.5,      # Thin edge
    'reference_lines': {
        25: {'color': '#9E9E9E', 'style': ':', 'label': 'Baseline 25%', 'width': 1},
        50: {'color': '#BDBDBD', 'style': '--', 'label': '50%', 'width': 1}
    },
    'show_grid': False,            # No grid - clean, modern
    'grid_alpha': 0.1,
    'y_limit': (0, 100),           # CRITICAL: Always 0-100 for %
    'figsize': (10, 6),
    'spine_color': '#E0E0E0',
    'spine_width': 0.5
}

# Example 3: Grouped bar chart (minimalist)
CHART3_CONFIG = {
    'total_color': '#F5F5F5',      # Very light gray - context     
    'total_alpha': 1.0,
    'total_edgecolor': '#E0E0E0',
    'total_edgewidth': 0.5,
    'bv_color': '#757575',         # Medium gray - main focus (KHÔNG đen)
    'bv_alpha': 1.0,
    'bv_edgecolor': '#616161',     # Darker gray border
    'bv_edgewidth': 0.5,
    'bar_width': 0.35,             # Giữ khoảng hở giữa bars 
    'show_grid': False,            # No grid - clean
    'grid_alpha': 0.1,
    'figsize': (12, 6),
    'spine_color': '#E0E0E0',
    'spine_width': 0.5
}

# ... [More chart configs as needed]

# =============================================================================
# DESIGN RULES - "Less is More"
# =============================================================================
# "Remove everything that doesn't add value. Then remove more." - Edward Tufte
#
# A. MINIMALISM BY DATA COMPLEXITY
#    1-2 data points → TUYỆT ĐỐI TỐI GIẢN (no grid, no borders thừa, white/black only)
#    3-5 data points → Minimal (no grid, thin lines 0.5-2px, light gray + black)
#    6+ data points  → Decoration CÓ THỂ (subtle grid alpha 0.1-0.15, still minimal)
#
# B. COLOR HIERARCHY
#    Data chính (focus)     → Black (#000000) hoặc dark color
#    Data phụ (context)     → Very light gray (#F5F5F5, #E0E0E0)
#    Reference lines        → Medium gray (#9E9E9E, #BDBDBD)
#    Grid/Border            → RẤT nhạt (#E0E0E0), alpha thấp, width 0.5px
#
# C. SCALE BEST PRACTICES
#    1. PERCENTAGE CHARTS: ALWAYS 0-100% (KHÔNG BAO GIỜ crop!)
#    2. ABSOLUTE VALUES: Start from 0
#    3. Y-AXIS BUFFER: +10-15% padding
#    4. GRIDLINES: 1-5 points=NO, 6+=subtle (alpha 0.1-0.15)
#
# D. VISUAL HIERARCHY: Data > Labels > Axes > Grid > Background
#
# E. MODERN AESTHETIC:
#    - Line width: 0.5-2.5px (KHÔNG dùng 3.5px+, quá thô)
#    - Marker size: 6-8px (KHÔNG dùng 10px+, quá to)
#    - Borders: 0.5-1.5px (thanh thoát)
#    - Colors: Primarily white/black/light gray
#    - Grid: OFF by default

print("=== BUSINESS CHART GENERATION ===\n")

# =============================================================================
# LOAD DATA & CALCULATE METRICS
# =============================================================================

print("1. Loading data...")
df = pd.read_excel(DATA_FILE)
# ... [data processing from analysis.py]

# =============================================================================
# CHART 1: [Business-specific chart]
# =============================================================================

print("\n2. Chart 1: [Chart name]...")

# Use config for easy customization
cfg = CHART1_CONFIG
fig, ax = plt.subplots(figsize=cfg['figsize'])

# Plotting - colors from config
ax.bar(x_data, y_data,
       color=cfg['bar_color'],
       alpha=cfg['bar_alpha'])

# Grid from config
if cfg['show_grid']:
    ax.grid(axis='y', alpha=cfg['grid_alpha'])

# ... [more plotting code using cfg values]

plt.tight_layout()
plt.savefig(CHARTS_DIR / "01_chart_name.png", dpi=300, bbox_inches='tight')
plt.close()

print(f"   Saved: 01_chart_name.png")

# =============================================================================
# CHART 2-N: [More charts]
# =============================================================================

# ... [more charts]

print("\n" + "="*60)
print("CHART GENERATION COMPLETE")
print("="*60)
```

**Option B: Thêm cells vào notebook** (recommended cho ít charts)

**File: `code/analysis.ipynb`** - Thêm cells sau "Save Metrics":

```python
# Cell: Generate Business Charts

import matplotlib.pyplot as plt

CHARTS_DIR = BASE_DIR / "charts"
CHARTS_DIR.mkdir(exist_ok=True)

# Chart 1: Revenue trend
fig, ax = plt.subplots(figsize=(10, 6))
# ... [plotting code]
plt.savefig(CHARTS_DIR / "01_revenue_trend.png", dpi=300, bbox_inches='tight')
plt.close()

print("✅ Charts generated")
```

**Lưu ý**:
- Code phải có comment tiếng Việt
- Design: 300 DPI, black/gray/white, minimalist
- Tất cả paths dùng `Path()` object
- Print progress để user biết đang ở đâu

### Step 5.05: Chart Quantity Decision (LINH ĐỘNG)

**QUAN TRỌNG**: Số lượng charts KHÔNG cố định, phụ thuộc vào project complexity.

**Decision Tree - Số lượng Business Charts**:
```
Yếu tố 1: Số channels/segments trong data
├── 1-2 channels → 5-8 charts
├── 3-4 channels → 10-15 charts
└── 5+ channels với detail data → 15-25+ charts

Yếu tố 2: Độ sâu phân tích
├── Overview only → 5-8 charts (tổng quan, so sánh)
├── Overview + breakdown → 10-15 charts
└── Full detail per channel → 15-25+ charts
    (mỗi channel: mix, top N, trend, KPI)

Yếu tố 3: Presentation needs
├── Internal quick review → ít charts
├── Management report → medium
└── Board/investor presentation → nhiều charts chi tiết
```

**Agent NÊN HỎI user**:
```
Project này có [N] kênh với data chi tiết. Mày muốn:

1. Overview (5-8 charts) - nhanh, tổng quan
2. Standard (10-15 charts) - cân bằng
3. Comprehensive (20+ charts) - đầy đủ từng kênh

Hoặc mô tả cụ thể mày cần gì?
```

**Chart Set Template per Channel** (nếu chọn Comprehensive):
1. **Mix/Composition** - Horizontal bar (source mix, customer mix)
2. **Top N** - Horizontal bar (top 8 specialties, industries)
3. **Trend** - Line chart (monthly, yearly comparison)
4. **KPI** - Varies (funnel, billsize, conversion)

**Example**:
- Project "plan 2026 hmsg": 5 channels × 4 charts/channel + 5 overview = 25 charts
- Project đơn giản 2 channels: 2 × 2 + 3 overview = 7 charts

### Step 5.1: Generate Analysis Charts

**Beyond EDA charts**, tạo business-specific charts:

```python
# Example: Growth contribution chart
def create_growth_contribution_chart(df_contrib, output_path):
    """
    Visualize growth contribution by channel
    """
    fig, ax = plt.subplots(figsize=(12, 6))

    df_contrib[revenue_cols].plot(kind='bar', ax=ax,
                                   color=['#000000', '#404040', '#808080', '#C0C0C0', '#F5F5F5'],
                                   edgecolor='black', linewidth=1)

    ax.set_title('Growth Contribution by Channel', fontsize=14, fontweight='bold')
    ax.set_xlabel('Tháng', fontsize=11)
    ax.set_ylabel('Đóng góp (%)', fontsize=11)
    ax.legend(title='Kênh', fontsize=9)
    ax.grid(axis='y', alpha=0.3, linestyle='--')
    ax.axhline(0, color='black', linewidth=0.8)

    plt.tight_layout()
    plt.savefig(output_path, dpi=300, bbox_inches='tight', facecolor='white')
    plt.close()

    print(f"✅ Saved: {output_path}")
```

**Chart List** (based on project type):
- Growth contribution (bar chart)
- YoY comparison (line chart)
- Market share evolution (area chart)
- Budget vs Revenue (scatter plot)
- ... (custom based on needs)

### Step 5.2: Validate Chart Quality

**Checklist**:
```python
def validate_charts(chart_dir):
    """
    Validate generated charts
    """
    issues = []

    # Check all charts exist
    for chart_file in os.listdir(chart_dir):
        if not chart_file.endswith('.png'):
            continue

        path = os.path.join(chart_dir, chart_file)

        # Check file size (not too small = likely error)
        size_kb = os.path.getsize(path) / 1024
        if size_kb < 10:
            issues.append(f"⚠️ {chart_file} too small ({size_kb:.1f} KB)")

        # Check resolution (should be 300 DPI)
        # (would need PIL/Pillow to check)

    if issues:
        print("⚠️ Chart validation issues:")
        for issue in issues:
            print(f"  {issue}")
    else:
        print("✅ All charts validated")

    return len(issues) == 0
```

---

## PHASE 6: Insights Generation

### Step 6.1: Draft Insights Document

**CRITICAL**: Insights PHẢI đồng nhất với charts và stats!

**Template Structure**:
```markdown
# [Project Name] - Insights

**Ngày phân tích**: [Date]
**Trạng thái**: [Draft/Review/Final]

---

## 📊 TÓM TẮT ĐIỀU HÀNH

### Phát Hiện Quan Trọng
[Top 3-5 key findings từ data]

### Hành Động Ưu Tiên
[Immediate actions needed]

---

## 1. TỔNG QUAN DỮ LIỆU

[From Phase 2 - Data Quality]

---

## 2. THỐNG KÊ MÔ TẢ

[From Phase 3 - EDA]

### 2.1 Hệ Số Biến Động (CV)
[Chart: 06_cv_comparison.png]
[Data: coefficient_of_variation.csv]

**Insights**:
- [Channel A] CV = X% → [Stable/Risky]
- [Channel B] CV = Y% → [Stable/Risky]

**Action**:
- [Specific action based on CV]

### 2.2 Phân Phối & Outliers
[Chart: 01_boxplots_outliers.png, 02_histograms_distribution.png]

**Insights**:
- [Tháng nào có outliers? Tại sao?]

---

## 3. PHÂN TÍCH KINH DOANH

[From Phase 4 - Business Analysis]

### 3.1 Động Cơ Tăng Trưởng
[Chart: growth_contribution.png]
[Data: business_metrics.json → growth_contribution]

**Insights**:
- [Top channel]: X% đóng góp
- [Giải thích tại sao]

**Action**:
- [Focus resources, budget allocation]

### 3.2 Seasonality Patterns
[Chart: 05_timeseries_confidence.png]

**Insights**:
- [Channel A] đỉnh tháng [M]
- Lead time: [N] tháng

**Action**:
- Chuẩn bị từ tháng [M-N]

---

## 4. ĐỀ XUẤT HÀNH ĐỘNG

### 4.1 Immediate (Q4/[Year])
1. ✅ [Action 1]
2. ✅ [Action 2]

### 4.2 Short-term (Q1-Q2/[Year+1])
...

### 4.3 Long-term
...

---

## 5. RỦI RO & GIẢM THIỂU

[Identify risks from high CV channels, correlations, etc.]

---

## 6. KẾT LUẬN

[Summary + next steps]
```

**Code to Generate**:
```python
def generate_insights_md(metrics, eda_insights, insights_list, output_path):
    """
    Auto-generate insights.md from data
    """
    # Read template
    # Fill in data
    # Cross-reference charts and CSV
    # Ensure consistency

    # Example snippet
    content = f"""
# {project_name} - Insights

## Growth Drivers

{insights_list[0]['title']}
- Đóng góp: {insights_list[0]['data']}
- Action: {insights_list[0]['action']}

*Refer to: charts/growth_contribution.png*
*Data source: business_metrics.json → growth_contribution*
"""

    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(content)
```

### Step 6.2: Cross-Validate Insights ↔ Charts ↔ Slides

**CRITICAL VALIDATION** - Số liệu PHẢI khớp nhau giữa tất cả outputs:

```python
def validate_data_consistency(project_dir):
    """
    Đảm bảo số liệu trong slides/insights KHỚP với charts/metrics.json

    QUAN TRỌNG: Đây là validation BẮT BUỘC trước khi delivery!
    """
    import json
    import re

    issues = []

    # Load source of truth
    metrics_path = f'{project_dir}/document/metrics.json'
    with open(metrics_path, 'r', encoding='utf-8') as f:
        metrics = json.load(f)

    # Files to validate
    files_to_check = [
        f'{project_dir}/document/insights.md',
        f'{project_dir}/document/slide.md'
    ]

    # Key metrics to validate (extract from metrics.json)
    key_numbers = {}

    # Example: Extract key numbers
    if 'overview' in metrics:
        key_numbers['total_2025'] = metrics['overview'].get('total_2025_full')
        key_numbers['yoy_growth'] = metrics['overview'].get('yoy_growth_full')
        key_numbers['target_achievement'] = metrics['overview'].get('target_achievement')

    if 'by_channel' in metrics:
        for channel, data in metrics['by_channel'].items():
            key_numbers[f'{channel}_revenue'] = data.get('revenue_2025_full')
            key_numbers[f'{channel}_growth'] = data.get('yoy_growth')

    # Check each file
    for file_path in files_to_check:
        if not os.path.exists(file_path):
            continue

        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()

        file_name = os.path.basename(file_path)

        # Check 1: All referenced charts exist
        chart_refs = re.findall(r'(\d+[a-z]?_[a-zA-Z0-9_]+\.png)', content)
        for chart in chart_refs:
            chart_path = f'{project_dir}/charts/{chart}'
            if not os.path.exists(chart_path):
                issues.append(f"❌ [{file_name}] Chart not found: {chart}")

        # Check 2: Key numbers match metrics.json
        # Extract numbers from content and compare
        for metric_name, expected_value in key_numbers.items():
            if expected_value is None:
                continue

            # Look for the number in content (with tolerance)
            # VD: "274.69 tỷ" hoặc "274.7" hoặc "275"
            if isinstance(expected_value, (int, float)):
                # Round to different precisions
                values_to_find = [
                    f'{expected_value:.2f}',
                    f'{expected_value:.1f}',
                    f'{round(expected_value)}'
                ]

                found = any(v in content for v in values_to_find)
                if not found and expected_value > 10:  # Only warn for significant numbers
                    # Không phải lỗi, chỉ là warning
                    pass  # Agent sẽ manually review

        # Check 3: Percentage consistency
        # Extract all percentages and verify they're reasonable
        percentages = re.findall(r'(\d+\.?\d*)%', content)
        for pct in percentages:
            pct_val = float(pct)
            if pct_val > 1000:  # Suspicious
                issues.append(f"⚠️ [{file_name}] Suspicious percentage: {pct}%")

    # Report
    if issues:
        print("❌ Data Consistency Issues Found:")
        for issue in issues:
            print(f"  {issue}")
        print("\n⚠️ FIX REQUIRED before delivery!")
        return False
    else:
        print("✅ Insights ↔ Slides ↔ Charts ↔ Metrics: CONSISTENT")
        return True
```

**Checklist Manual Review** (Agent PHẢI verify):
```
[ ] Tổng doanh thu trong insights = slide = metrics.json
[ ] YoY growth % trong insights = slide = metrics.json
[ ] Market share % trong insights = slide = metrics.json
[ ] Top channel ranking trong insights = slide = charts
[ ] Forecast numbers trong insights = slide = forecast.csv
```

**Common Inconsistency Sources**:
1. **Rounding differences**: 274.69 vs 275 vs 274.7
2. **Unit differences**: 274.69 tỷ vs 274,690 triệu
3. **Period differences**: T1-T10 vs Full year vs Forecast
4. **Outdated numbers**: Sau khi regenerate charts nhưng không update insights

**Prevention**:
- LUÔN lấy số từ metrics.json (single source of truth)
- Update insights/slides SAU KHI regenerate charts
- Run validation script trước khi delivery

**Decision Point**:
```
IF inconsistent:
  → Fix insights OR regenerate charts
  → Re-validate
  → Loop until consistent

ELSE:
  → Proceed to documentation
```

---

## PHASE 7: Documentation

### Step 7.1: Generate README

**Template**: `[project_name]/README.md`

```markdown
# [Project Name] - Analysis Package

**Ngày tạo**: [Date]
**Trạng thái**: ✅ HOÀN THÀNH

---

## 📦 Sản Phẩm

1. **Insights** (⭐ CHÍNH)
   - File: `document/insights.md`
   - Nội dung: [Summary]

2. **Charts**
   - Thư mục: `charts/`
   - [N] biểu đồ (300 DPI, PNG)

3. **Statistics**
   - Thư mục: `document/csv/`
   - Descriptive stats, correlation, metrics

4. **Code**
   - Jupyter notebooks: `code/*.ipynb`
   - Scripts: `code/*.py`

5. **Slide Guidance** (⭐ MỚI)
   - File: `document/slide.md`
   - Gợi ý cấu trúc slide deck presentation

---

## 🚀 Cách Sử Dụng

### Quick Start
\`\`\`bash
# Xem insights
code document/insights.md

# Xem slide guidance
code document/slide.md

# Xem charts
explorer charts/

# Chạy lại analysis
jupyter notebook code/analyst.ipynb
\`\`\`

---

## 📊 Key Findings

[Top 3-5 findings từ insights.md]

---

## 📝 Files

\`\`\`
[Cấu trúc thư mục]
\`\`\`
```

### Step 7.2: Generate Slide Guidance ⭐ MỚI

**File: `document/slide.md`**

**Mục đích**:
- Hướng dẫn user tạo slide deck presentation từ insights + charts
- Đề xuất cấu trúc slides tối ưu (LINH ĐỘNG theo project)
- Tuân theo design principles: Minimalist, elegant, NO màu mè

### Step 7.2.1: Slide Quantity Decision (LINH ĐỘNG)

**QUAN TRỌNG**: Số slides KHÔNG cố định 8-10, phụ thuộc vào:

**Decision Tree - Số lượng Slides**:
```
Yếu tố 1: Presentation time
├── 10-15 phút → 6-8 slides
├── 20-30 phút → 10-15 slides
└── 45-60 phút → 18-25 slides

Yếu tố 2: Số lượng charts
├── 5-8 charts → 6-10 slides
├── 10-15 charts → 12-18 slides
└── 20+ charts → 18-25+ slides

Yếu tố 3: Audience
├── Executive (busy) → ít slides, focus key insights
├── Management → medium detail
└── Technical/Analyst → nhiều slides chi tiết
```

**Formula đơn giản**:
```
Số slides ≈ (Số charts / 1.5) + 3 (cover, summary, Q&A)
```

**Agent NÊN confirm với user**:
```
Với [N] charts và presentation [X] phút, tao suggest [Y] slides:
- 1 Cover
- 1 Executive Summary
- [Z] Data slides (mỗi slide 1-2 charts)
- 1 Recommendations
- 1 Q&A

OK không? Hoặc mày muốn điều chỉnh?
```

**Content includes**:
1. **Nguyên tắc thiết kế** (màu sắc, typography, layout)
2. **Cấu trúc từng slide** (cover, executive summary, data slides, recommendations, Q&A)
3. **Slide-chart mapping** (chart nào đi với slide nào)
4. **Presentation tips** (timing, flow, emphasis)
5. **Backup slides** (EDA charts nếu có câu hỏi chi tiết)
6. **Checklist** (before present)

**Example structure**:
```markdown
# Gợi Ý Cấu Trúc Slide - [Project Name]

## NGUYÊN TẮC THIẾT KẾ
- Background: Trắng
- Text: Đen/Dark gray
- Font: Inter, SF Pro, Calibri
- Layout: Minimal, whitespace nhiều

## CẤU TRÚC ĐỀ XUẤT

### SLIDE 1: COVER
[Layout description + content suggestions]

### SLIDE 2: EXECUTIVE SUMMARY
[Parse từ TÓM TẮT ĐIỀU HÀNH trong insights.md]

### SLIDE 3-7: DATA SLIDES
[Mỗi slide = 1 chart + key bullets]

### SLIDE 8: RECOMMENDATIONS
[Priority actions]

### SLIDE 9: Q&A

## BACKUP SLIDES
[List EDA charts]

## TIPS & CHECKLIST
[...]
```

**Auto-generate logic**:
```python
def generate_slide_guidance(project_dir):
    """
    Tự động tạo slide.md từ insights + charts
    """
    # 1. Parse insights.md → lấy TÓM TẮT, key findings
    # 2. List charts/*.png → map với slide numbers
    # 3. Extract metrics.json → numbers để highlight
    # 4. Generate slide structure với placeholders
    # 5. Save to document/slide.md

    print("✅ Generated: document/slide.md")
```

**When to generate**:
- Sau Phase 6 (insights validated)
- Trước Phase 8 (final quality check)

**Benefits**:
- User không tự nghĩ structure
- Slide đồng nhất với insights
- Follow design principles
- Tiết kiệm 1-2 giờ prep time

**Example**: See `ipynb/phi/2025 11 blvp analysis/document/slide.md`

### Step 7.3: Generate Guide (Optional)

Copy `huong_dan_doc_bieu_do.md` template nếu cần.

---

## PHASE 8: Quality Review

### Step 8.1: Final Checklist

```python
def final_quality_check(project_dir):
    """
    Comprehensive quality check before delivery
    """
    checks = {
        'Data Quality': False,
        'EDA Completed': False,
        'Business Metrics': False,
        'Charts Generated': False,
        'Insights Written': False,
        'Slides Generated': False,
        'Data Consistency': False,  # CRITICAL: Số liệu phải khớp
        'Documentation Done': False
    }

    # Check 1: Data Quality
    if os.path.exists(f'{project_dir}/statics/document/eda_summary.csv'):
        checks['Data Quality'] = True

    # Check 2: EDA
    eda_dir = f'{project_dir}/statics/charts_eda'
    if os.path.exists(eda_dir) and len(os.listdir(eda_dir)) >= 7:
        checks['EDA Completed'] = True

    # Check 3: Business Metrics
    metrics_file = f'{project_dir}/document/metrics.json'
    if os.path.exists(metrics_file):
        checks['Business Metrics'] = True

    # Check 4: Charts (linh động theo project)
    charts_dir = f'{project_dir}/charts'
    if os.path.exists(charts_dir) and len(os.listdir(charts_dir)) >= 3:
        checks['Charts Generated'] = True

    # Check 5: Insights
    insights_file = f'{project_dir}/document/insights.md'
    if os.path.exists(insights_file):
        size = os.path.getsize(insights_file)
        if size > 1000:  # At least 1KB
            checks['Insights Written'] = True

    # Check 6: Slides
    slides_file = f'{project_dir}/document/slide.md'
    if os.path.exists(slides_file):
        size = os.path.getsize(slides_file)
        if size > 500:
            checks['Slides Generated'] = True

    # Check 7: Data Consistency (CRITICAL!)
    # Validate số liệu trong insights/slides khớp với metrics.json
    checks['Data Consistency'] = validate_data_consistency(project_dir)

    # Check 8: Documentation
    if os.path.exists(f'{project_dir}/README.md'):
        checks['Documentation Done'] = True

    # Report
    print("\n" + "="*60)
    print("QUALITY REVIEW")
    print("="*60)
    for check, passed in checks.items():
        status = "✅" if passed else "❌"
        print(f"{status} {check}")

    all_passed = all(checks.values())
    if all_passed:
        print("\n🎉 ALL CHECKS PASSED - READY FOR DELIVERY")
    else:
        failed = [k for k, v in checks.items() if not v]
        print(f"\n⚠️ FAILED CHECKS: {', '.join(failed)}")

    return all_passed
```

### Step 8.2: Human Review (Optional)

**Ask User**:
```
✅ Analysis completed!

Summary:
- [N] charts generated
- [M] key insights identified
- Top finding: [X]

Would you like to:
1. Review insights.md
2. Review charts
3. Make adjustments
4. Approve and finalize
```

---

## 🔗 LIÊN KẾT VỚI CÁC FILE KHÁC

- **Tổng quan**: [`workflow-analytics-tong-quan.md`](workflow-analytics-tong-quan.md)
- **Phases 0-4**: [`workflow-analytics-phases-0-4.md`](workflow-analytics-phases-0-4.md)
- **Error Handling**: [`workflow-analytics-error-handling.md`](workflow-analytics-error-handling.md)
- **Decision Trees**: [`workflow-analytics-decision-trees.md`](workflow-analytics-decision-trees.md)
- **Configuration**: [`workflow-analytics-configuration.md`](workflow-analytics-configuration.md)
- **Examples**: [`workflow-analytics-examples.md`](workflow-analytics-examples.md)