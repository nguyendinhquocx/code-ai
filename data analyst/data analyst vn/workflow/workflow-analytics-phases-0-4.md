# Data Analytics Workflow - Phases 0-4

**File này**: Phases 0-4 (Setup → Business Analysis)
**Liên kết**: [`workflow-analytics-tong-quan.md`](workflow-analytics-tong-quan.md) | [`phases-5-8.md`](workflow-analytics-phases-5-8.md)

---

## 📑 Quick Navigation

| Phase | Nội dung | Khi nào dùng |
|-------|----------|--------------|
| [Phase 0](#phase-0-setup--understanding) | Setup & Question Framing | Bắt đầu project mới, peek data, gợi ý phân tích |
| [Phase 1](#phase-1-data-ingestion) | Data Ingestion | Load Excel/CSV, inspect schema |
| [Phase 2](#phase-2-data-quality-check) | Data Quality Check | Validate, clean, handle missing/outliers |
| [Phase 3](#phase-3-eda-exploratory-data-analysis) | EDA (Statistical Charts) | Boxplot, histogram, correlation, CV analysis |
| [Phase 4](#phase-4-business-analysis) | Business Analysis | Calculate metrics, growth, segmentation |

**Next**: [Phases 5-8 (Visualization → Delivery)](workflow-analytics-phases-5-8.md)

---

## PHASE 0: Setup & Understanding

### Step 0.1: Quick Data Peek (TRƯỚC KHI HỎI)
**Mục đích**: Đọc nhanh file để hiểu cấu trúc → GỢI Ý câu hỏi thông minh

**Actions**:
```python
# Load NHANH để peek (không phân tích sâu)
import pandas as pd

# Load all sheets
dfs = pd.read_excel(file_path, sheet_name=None)

# Quick inspection
data_summary = {}
for sheet_name, df in dfs.items():
    data_summary[sheet_name] = {
        'rows': len(df),
        'columns': list(df.columns),
        'date_cols': [col for col in df.columns if 'date' in col.lower() or 'time' in col.lower()],
        'numeric_cols': df.select_dtypes(include=['number']).columns.tolist(),
        'categorical_cols': df.select_dtypes(include=['object']).columns.tolist(),
        'sample_data': df.head(2).to_dict()
    }

print(f"✅ Peeked {len(dfs)} sheets: {list(dfs.keys())}")
```

**Logging**:
```
✅ Quick peek completed
   Sheet 'data': 1122 rows, 15 columns
   - Date columns: ['Ngày', 'Tháng']
   - Numeric: ['Doanh thu', 'Số lượng', ...]
   - Categorical: ['Kênh', 'Sản phẩm', 'Khu vực', ...]
```

### Step 0.2: Smart Question Framing
**Mục đích**: Dựa vào peek → GỢI Ý phân tích phù hợp

**AI Agent Phải LÀM**:
1. **Phân tích cấu trúc** từ data_summary
2. **Gợi ý 3-5 câu hỏi phân tích** phù hợp với data
3. **Hỏi user chọn** HOẶC user tự đề xuất

**Template Gợi Ý với Recommendation**:
```
📊 Tao đã đọc qua file data của mày. Dưới đây là các phân tích tao có thể làm:

[Dựa vào data structure, AI analyze và recommend:]

💡 **KHUYẾN NGHỊ: Option [X] - Comprehensive Analysis**
   Lý do: [Giải thích dựa trên data structure]
   - VD: "Data có {rows} rows, time series từ {start_year}-{end_year},
     {n_channels} kênh khác nhau → nên phân tích đầy đủ để hiểu toàn cảnh"

──────────────────────────────────────────

1. **Phân tích xu hướng theo thời gian** ⭐ (vì có cột 'Ngày', 'Tháng')
   - So sánh doanh thu 2023 vs 2024 vs 2025
   - Tìm tháng peak/low performance
   - Xu hướng tăng/giảm

2. **Phân tích theo kênh/sản phẩm** ⭐ (vì có cột 'Kênh', 'Sản phẩm')
   - Kênh nào đóng góp nhiều nhất?
   - Sản phẩm nào growth/decline mạnh?
   - So sánh performance giữa các kênh

3. **Phân tích outliers & chất lượng dữ liệu** ⭐
   - Tháng nào có doanh thu bất thường?
   - Missing data ở đâu?
   - Độ ổn định (CV) của từng kênh

4. **Phân tích đối tác cụ thể** (nếu có cột partner name)
   - VD: Bảo Việt chiếm % bao nhiêu?
   - Xu hướng tăng/giảm của đối tác X?

──────────────────────────────────────────

Mày muốn:
  (1) Làm theo khuyến nghị
  (2) Chọn riêng (VD: "1,2,3" hoặc "chỉ làm 1")
  (3) Mô tả ngắn
```

**Logic Recommendation** (Agent tự động analyze):
```python
# Recommendation logic based on data characteristics
recommendation_score = {}

# Score each option based on data structure
if len(data_summary['date_cols']) > 0 and data_summary['rows'] > 50:
    recommendation_score['time_series'] = 10  # High priority

if len(data_summary['categorical_cols']) >= 2:
    recommendation_score['segmentation'] = 10  # High priority

if data_summary['rows'] > 100:
    recommendation_score['statistical'] = 8  # Medium-high priority

# Specific partner analysis if partner columns detected
partner_cols = [col for col in df.columns if any(x in col.lower() for x in ['partner', 'kênh', 'channel', 'đối tác', 'bảo việt'])]
if partner_cols:
    recommendation_score['partner'] = 9

# ALWAYS include quality check
recommendation_score['quality'] = 10

# Determine recommendation
total_high_priority = sum(1 for score in recommendation_score.values() if score >= 9)

if total_high_priority >= 3:
    recommendation = "Comprehensive (làm hết options có ⭐)"
    reasoning = f"Data có đủ điều kiện cho phân tích toàn diện: {rows} rows, time series {years}, {n_categories} categories"
elif total_high_priority >= 2:
    top_options = [k for k, v in sorted(recommendation_score.items(), key=lambda x: -x[1])[:2]]
    recommendation = f"Focus on {top_options}"
    reasoning = "Ưu tiên 2 phân tích quan trọng nhất dựa trên cấu trúc data"
else:
    top_option = max(recommendation_score.items(), key=lambda x: x[1])[0]
    recommendation = f"Option {top_option}"
    reasoning = "Data structure phù hợp nhất với phân tích này"

# Output recommendation prominently
print(f"💡 KHUYẾN NGHỊ: {recommendation}")
print(f"   Lý do: {reasoning}")
```

**Quy tắc Gợi Ý**:
```python
# Logic gợi ý tự động
suggestions = []

# 1. Có cột date/time → Suggest time series
if data_summary['date_cols']:
    suggestions.append("Time series analysis (xu hướng theo thời gian)")

# 2. Có >1 categorical column → Suggest segmentation
if len(data_summary['categorical_cols']) > 0:
    cats = ', '.join(data_summary['categorical_cols'][:3])
    suggestions.append(f"Segmentation analysis (phân tích theo {cats})")

# 3. Có numeric columns → Suggest statistical analysis
if len(data_summary['numeric_cols']) > 2:
    suggestions.append("Statistical analysis (outliers, distribution, correlation)")

# 4. Có partner/channel columns → Suggest partner analysis
partner_cols = [col for col in df.columns if any(x in col.lower() for x in ['partner', 'kênh', 'channel', 'đối tác'])]
if partner_cols:
    suggestions.append(f"Partner/Channel contribution analysis")

# 5. ALWAYS suggest: Data quality check
suggestions.append("Data quality check (missing, duplicates, anomalies)")
```

**User Response Handling**:
```
IF user reply "1" hoặc "yes" hoặc "ok" hoặc "làm theo khuyến nghị":
  → Proceed với recommendation (thường là comprehensive)
  → Confirm: "OK, tao sẽ làm [recommendation]"

IF user chọn specific options (VD: "2,3" hoặc "chỉ làm 1"):
  → Parse selections → Proceed với chỉ những options đó
  → Confirm: "OK, tao sẽ focus vào [selected options]"

IF user tự mô tả (VD: "phân tích xu hướng Bảo Việt"):
  → Parse mô tả → map to analysis type
  → Confirm với user: "Tao hiểu là mày muốn [X], đúng không?"
  → Wait for confirmation

IF user nói "làm hết" hoặc "full analysis" hoặc "all":
  → Comprehensive (tất cả suggestions)

IF user unclear hoặc vague:
  → Default to recommendation
  → Inform: "Tao sẽ làm theo khuyến nghị: [recommendation]"
```

**Smart Defaults** (để workflow trơn tru):
```
LUÔN ƯU TIÊN: User chỉ cần 1 từ để proceed
- "yes" / "1" / "ok" → Làm theo recommendation
- "2" / "1,2,3" → Làm specific options
- "all" / "hết" → Làm tất cả

KHÔNG YÊU CẦU: User viết câu dài
→ Giảm friction, tăng tốc độ workflow
```

**Questions Agent CÓ THỂ Hỏi Thêm** (TỐI ĐA 2-3 câu):
```
1. Metric chính mày quan tâm nhất? (revenue, quantity, margin, etc.)
2. Có target/threshold nào cần so sánh không? (VD: target 100M/tháng)
3. Output: Chỉ charts, hay charts + insights + recommendations?
```

**Decision Point**:
```
IF user response RÕ RÀNG:
  → Proceed to Phase 1

IF user still unclear:
  → Default to "Comprehensive analysis" (làm hết)
  → Proceed to Phase 1
```

### Step 0.3: Create Project Structure
**Actions**:
```bash
mkdir -p [project_name]/{code,charts,document,statics/{code,charts,document}}
```

**Logging**:
```
✅ Created project structure at: [path]
```

---

**SUMMARY PHASE 0**:
```
Quy trình:
1. Đọc nhanh file (peek) → Hiểu cấu trúc
2. Gợi ý 3-5 phân tích phù hợp dựa vào data
3. User chọn hoặc mô tả → Confirm
4. Tạo project structure → Proceed

Lợi ích:
✓ AI chủ động gợi ý (không hỏi mù quáng)
✓ User hiểu rõ options
✓ Workflow trơn tru, không rườm rà
✓ Tối đa 2-3 câu hỏi clarifying
```

---

## PHASE 1: Data Ingestion

### Step 1.1: Load Raw Data

**Supported Formats**:
- Excel: `.xlsx`, `.xls`
- CSV: `.csv`
- JSON: `.json`
- PDF: `.pdf` (extract tables)

**Code Template**:
```python
import pandas as pd

def load_data(file_path, file_type='auto'):
    """
    Load data with auto-detection
    """
    if file_type == 'auto':
        file_type = file_path.split('.')[-1].lower()

    if file_type in ['xlsx', 'xls']:
        # Excel: Load all sheets
        dfs = pd.read_excel(file_path, sheet_name=None)
        print(f"✅ Loaded {len(dfs)} sheets: {list(dfs.keys())}")
        return dfs

    elif file_type == 'csv':
        df = pd.read_csv(file_path)
        print(f"✅ Loaded CSV: {df.shape}")
        return {'data': df}

    elif file_type == 'json':
        df = pd.read_json(file_path)
        print(f"✅ Loaded JSON: {df.shape}")
        return {'data': df}

    else:
        raise ValueError(f"Unsupported file type: {file_type}")
```

**Validation**:
```python
# Check if loaded successfully
assert dfs is not None, "❌ Failed to load data"
assert len(dfs) > 0, "❌ No data found"

# Log summary
for sheet_name, df in dfs.items():
    print(f"  {sheet_name}: {df.shape[0]} rows × {df.shape[1]} cols")
```

**Decision Point**:
```
IF Excel with multiple sheets:
  → Ask user: "Which sheet(s) to analyze?"
  OR auto-detect main data sheet (largest one)

IF CSV/JSON single file:
  → Proceed

IF load fails:
  → Try different encoding (utf-8, latin1, cp1252)
  → If still fails → Ask user
```

### Step 1.2: Initial Data Inspection

**Actions**:
```python
# For each dataframe
for name, df in dfs.items():
    print(f"\n=== {name} ===")
    print(f"Shape: {df.shape}")
    print(f"Columns: {list(df.columns)}")
    print(f"\nFirst 3 rows:\n{df.head(3)}")
    print(f"\nData types:\n{df.dtypes}")
```

**Logging**:
```
✅ Inspected data: [sheet_name]
   - Rows: N
   - Columns: M
   - Preview: OK
```

---

## PHASE 2: Data Quality Check

### Step 2.1: Schema Validation

**Check Structure**:
```python
def validate_schema(df, expected_cols=None):
    """
    Validate data structure
    """
    issues = []

    # Check if empty
    if df.empty:
        issues.append("❌ DataFrame is empty")

    # Check columns
    if expected_cols:
        missing = set(expected_cols) - set(df.columns)
        if missing:
            issues.append(f"❌ Missing columns: {missing}")

    # Check duplicates
    dup_count = df.duplicated().sum()
    if dup_count > 0:
        issues.append(f"⚠️ {dup_count} duplicate rows found")

    return issues
```

**Decision Point**:
```
IF critical issues (empty, missing key columns):
  → STOP → Ask user

IF warnings only (duplicates, unexpected columns):
  → LOG warning → Continue
```

### Step 2.2: Data Quality Metrics

**Calculate**:
```python
def data_quality_report(df):
    """
    Generate data quality report
    """
    report = {
        'total_rows': len(df),
        'total_cols': len(df.columns),
        'missing_values': df.isnull().sum().to_dict(),
        'missing_pct': (df.isnull().sum() / len(df) * 100).round(2).to_dict(),
        'duplicates': df.duplicated().sum(),
        'dtypes': df.dtypes.to_dict()
    }

    # Flag issues
    report['critical_issues'] = []
    report['warnings'] = []

    for col, pct in report['missing_pct'].items():
        if pct > 50:
            report['critical_issues'].append(f"{col}: {pct}% missing")
        elif pct > 10:
            report['warnings'].append(f"{col}: {pct}% missing")

    return report
```

**Validation Gate**:
```
IF critical_issues:
  → STOP
  → Report to user
  → Ask: "Fix data or proceed with caution?"

IF warnings only:
  → LOG warnings
  → Proceed
```

### Step 2.3: Data Cleaning

**Auto-Fix (Safe operations)**:
```python
def auto_clean(df, revenue_cols):
    """
    Safe auto-cleaning
    """
    df_clean = df.copy()

    # 1. Fill missing numeric values with 0 (for revenue columns)
    for col in revenue_cols:
        if col in df_clean.columns:
            df_clean[col] = df_clean[col].fillna(0)
            print(f"  ✅ Filled {col} missing values with 0")

    # 2. Remove duplicate rows (if any)
    before = len(df_clean)
    df_clean = df_clean.drop_duplicates()
    after = len(df_clean)
    if before > after:
        print(f"  ✅ Removed {before - after} duplicate rows")

    # 3. Fix data types (if needed)
    # ... type conversions

    return df_clean
```

**Logging**:
```
✅ Data cleaned
   - Missing values filled: [columns]
   - Duplicates removed: N
   - Type conversions: [if any]
```

---

## PHASE 3: EDA & Descriptive Statistics

**CRITICAL**: Tạo STATICS MODULE ĐẦY ĐỦ để có thể đọc hiểu, tinh chỉnh khi data thay đổi

**AGENT AUTONOMY - Linh hoạt & Sáng tạo:**
```
Nguyên tắc thiết kế là HƯỚNG DẪN, không phải LUẬT CỨNG.

Agent được phép:
✓ Tự do điều chỉnh màu sắc, layout, chart types dựa trên data context
✓ Phá vỡ quy tắc nếu có lý do chính đáng (VD: data outliers cực đoan)
✓ Chọn chart type phù hợp nhất (boxplot, violin, kde, etc.)
✓ Thử nghiệm và tối ưu để patterns/anomalies nổi bật

Quy trình tư duy:
1. Đọc nguyên tắc thiết kế → Hiểu TINH THẦN, không phải từng chữ
2. Phân tích data distribution → Quyết định style & chart type
3. Tạo chart → Áp dụng nguyên tắc LINH HOẠT
4. Tự hỏi: "Chart này reveal insights gì? Có cần simplify không?"
5. Optimize dựa trên câu trả lời

MỤC TIÊU: Insights nổi bật, không phải follow rules mù quáng.
```

### Step 3.0: Tạo Statics Module Structure

**Mục đích**: Tạo code có thể edit, reuse, maintain khi data thay đổi

**Actions**:
```bash
# Tạo folder structure
mkdir -p "[project_name]/statics/code"
mkdir -p "[project_name]/statics/document"
mkdir -p "[project_name]/statics/charts"
# hoặc charts_eda tuỳ project
```

**Output**: Cấu trúc sẵn sàng cho EDA code

### Step 3.1: Tạo EDA Code Files (EDITABLE)

**QUAN TRỌNG**: Tạo CẢ 2 versions - notebook (interactive) và script (automated)

**File 1: `statics/code/eda.ipynb`** (Interactive Jupyter Notebook)

**Sections bắt buộc**:
1. Setup & Imports
2. Load Data
3. Data Quality Check
4. Clean Data
5. Descriptive Statistics (mean, median, std, quartiles)
6. Distribution Analysis (skewness, kurtosis)
7. Outlier Detection (IQR method)
8. Coefficient of Variation (CV) - QUAN TRỌNG
9. Correlation Analysis
10. Time Series Analysis
11. Export Summary Statistics
12. Key Findings Summary

**Template Code**:
```python
# Cell 1: Setup
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from pathlib import Path
from scipy import stats

# Design settings - Aesthetic & Professional
plt.rcParams['figure.dpi'] = 300
plt.rcParams['font.size'] = 10
plt.rcParams['font.family'] = 'sans-serif'
plt.rcParams['axes.linewidth'] = 1.2
plt.rcParams['grid.linewidth'] = 0.8

# Color palette: Muted, elegant tones (inspired by modern data viz)
# Base: Soft blue-grays for professional look
# Accent: Muted pastels for data points
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
PALETTE_SEQUENTIAL = ['#E8EAF6', '#C5CAE9', '#9FA8DA', '#7986CB', '#5C6BC0', '#3F51B5']  # Light to dark blue
PALETTE_DIVERGING = ['#E57373', '#FFCC80', '#FFF9C4', '#C5E1A5', '#81C784', '#66BB6A']  # Red to green
PALETTE_CATEGORICAL = ['#7986CB', '#81C784', '#FFB74D', '#E57373', '#64B5F6', '#A1887F']  # Distinct muted colors

# =============================================================================
# AESTHETIC DEFAULTS - Modern Minimalist (EDA Charts)
# =============================================================================
# LƯU Ý: EDA charts thường phức tạp hơn business charts (nhiều data points)
#        → Được phép dùng màu sắc có ý nghĩa (outliers=red, etc.)
#        → NHƯNG vẫn ưu tiên mảnh, tinh tế, minimal
#
# TRIẾT LÝ:
# - Tối giản, hiện đại (kiểu shadcn/Vercel/React)
# - Màu sắc có ý nghĩa (red=outliers, green=positive, NOT random colors)
# - Mảnh, thanh thoát (line 0.5-2px, marker 6-8px, border 0.5-1px)
# - Grid subtle khi cần (alpha 0.1-0.2, KHÔNG 0.3+)
#
# MÀU SẮC CHO EDA:
# - Boxplot: Muted blue (#7986CB), outliers muted red (#E57373)
# - Histogram: Muted colors với thin dark edges
# - Correlation: Diverging palette (muted red to muted green)
# - Line charts: Black/dark (#000000, #2C3E50), width 1.5-2px
# - Violin: Soft pastels với thin edges (0.5-1px)
#
# DECORATION CHO EDA:
# - Grid: Alpha 0.1-0.2 (nhẹ, subtle) hoặc OFF cho simple charts
# - Spines: #E0E0E0, width 0.5-1px (mảnh)
# - Line width: 0.5-2px (KHÔNG 3px+, quá thô)
# - Marker size: 6-8px (KHÔNG 10px+, quá to)

# CRITICAL: Chart Design Philosophy - "Less is More"
# =====================================================
# NGUYÊN TẮC NỀN TẢNG: Biểu đồ phải thể hiện INSIGHTS, không phải decoration
#
# "Remove everything that doesn't add value. Then remove more."
# - Edward Tufte, Data Visualization Pioneer
#
# A. MINIMALISM BY DATA COMPLEXITY
# ---------------------------------
# Quy tắc: Ít data points → Ít decoration
#
# 1-2 data points (HIẾM trong EDA):
#    → TUYỆT ĐỐI TỐI GIẢN
#    → KHÔNG grid, KHÔNG viền thừa
#    → Màu: White/black/light gray ONLY
#    → Nét mảnh (0.5-2px), elegant
#
# 3-5 data points:
#    → Minimal decoration
#    → Grid OFF (trừ khi thực sự cần đọc giá trị)
#    → Màu: Muted tones, ít màu (2-3 colors max)
#    → Line width: 1-2px
#
# 6+ data points (PHỔ BIẾN trong EDA - boxplot, histogram, time series):
#    → Decoration CÓ THỂ nhưng subtle
#    → Grid alpha 0.1-0.2 (KHÔNG dùng 0.3+, quá đậm)
#    → Màu: Palette có ý nghĩa (red=negative/outliers, green=positive)
#    → Line width: 1-2px (KHÔNG 3px+)
#    → Border: 0.5-1px (mảnh)
#
# B. COLOR HIERARCHY - Màu phải có mục đích
# ------------------------------------------
# Quy tắc: "Color attracts attention. Use it wisely."
#
# Data chính (focus):
#    → Muted accent colors: #7986CB (soft indigo), #81C784 (muted green)
#    → KHÔNG dùng bright/saturated colors (quá loè)
#
# Outliers/Warnings:
#    → Muted red (#E57373) - KHÔNG pure red
#
# Positive trends:
#    → Muted green (#81C784) - KHÔNG bright green
#
# Background elements (grid, borders, spines):
#    → RẤT nhạt (#E0E0E0, #B0BEC5)
#    → Alpha thấp (0.1-0.2)
#    → Width mảnh (0.5-1px)
#
# C. CRITICAL: Chart Scale Best Practices
# ----------------------------------------
# 1. PERCENTAGE CHARTS: ALWAYS 0-100% scale
#    - Biểu đồ % PHẢI chạy từ 0-100%, KHÔNG BAO GIỜ crop
#    - Ví dụ: CV 27% → y-axis 0-100%, KHÔNG 0-30%
#    - Lý do: Tránh misleading visualization
#
# 2. ABSOLUTE VALUES: Start from 0 (unless negative values exist)
#    - Revenue, counts → start from 0
#    - Growth rates (có thể âm) → include 0 trong range
#
# 3. Y-AXIS BUFFER: Thêm 10-15% padding
#    - ax.set_ylim(0, max_value * 1.15)
#    - Để value labels không bị crop
#
# 4. GRIDLINES: Subtle, KHÔNG dominant
#    - Alpha: 0.1-0.2 (KHÔNG dùng 0.3+, quá đậm)
#    - Linestyle: '--' hoặc ':'
#    - Width: 0.5-0.8px (mảnh)
#    - 1-2 points: OFF
#    - 3-5 points: OFF (trừ khi cần)
#    - 6+ points: Subtle (alpha 0.1-0.2)
#
# D. VISUAL HIERARCHY - Thứ tự ưu tiên
# -------------------------------------
# 1. DATA (bars, lines, points) - Đậm nhất, rõ nhất
# 2. VALUE LABELS - Gần data, clear
# 3. AXES LABELS & TITLE - Medium weight
# 4. GRID & BORDERS - RẤT nhạt, alpha 0.1-0.2
# 5. BACKGROUND - White hoặc off-white (#FAFAFA)
#
# E. MODERN AESTHETIC - Thin & Elegant
# -------------------------------------
# - Line width: 0.5-2px (KHÔNG 3px+, quá thô)
# - Marker size: 6-8px (KHÔNG 10px+, quá to)
# - Borders: 0.5-1px (thanh thoát)
# - Grid alpha: 0.1-0.2 (KHÔNG 0.3+, quá đậm)
# - Spines: Light gray (#E0E0E0), thin (0.5-1px)
# - Colors: Muted tones (soft pastels, KHÔNG bright/saturated)
#
# F. EXAMPLES - Anti-patterns vs Good patterns
# ---------------------------------------------
# ❌ BAD: Boxplot + bright blue + thick borders 2px + grid alpha 0.5
# ✅ GOOD: Boxplot + muted blue (#7986CB) + thin borders 0.8px + grid alpha 0.15
#
# ❌ BAD: Histogram + rainbow colors + thick edges 2px + busy background
# ✅ GOOD: Histogram + muted green (#81C784) + thin edges 0.8px + white background
#
# ❌ BAD: Line chart width 3.5px + marker 12px + grid alpha 0.4
# ✅ GOOD: Line chart width 1.5-2px + marker 6-8px + grid alpha 0.15 or OFF
#
# ❌ BAD: Percentage cropped 0-30% + misleading
# ✅ GOOD: Percentage 0-100% + clear context

# Cell 2: Load Data
BASE_DIR = Path.cwd().parent.parent.parent.parent.parent
DATA_FILE = BASE_DIR / "path/to/data.xlsx"
df = pd.read_excel(DATA_FILE)

# Cell 3-11: [Full EDA analysis sections...]

# Cell 12: Export
stats_summary.to_csv(OUTPUT_DIR / "eda_statistics.csv", index=False)
print("✅ EDA completed")
```

**File 2: `statics/code/generate_charts.py`** (Automated Chart Generation)

**Mục đích**: Generate 7 standard EDA charts tự động

**7 Charts bắt buộc**:
1. `01_boxplot_revenue_by_year.png` - Outliers & distribution
2. `02_histogram_revenue_distribution.png` - Overall distribution
3. `03_correlation_heatmap.png` - Variable relationships
4. `04_violin_revenue_by_year.png` - Distribution shape
5. `05_timeseries_monthly_trend.png` - Time patterns
6. `06_cv_comparison_by_year.png` - Variability analysis
7. `07_statistics_summary_table.png` - Stats table as image

**Template Code**:
```python
"""
Generate 7 Standard EDA Charts
Following WORKFLOW_ANALYTICS.md design principles
"""
import pandas as pd
import matplotlib.pyplot as plt
from pathlib import Path

# Setup
BASE_DIR = Path(__file__).parent.parent.parent.parent.parent
DATA_FILE = BASE_DIR / "path/to/data.xlsx"
CHARTS_DIR = Path(__file__).parent.parent / "charts_eda"
CHARTS_DIR.mkdir(exist_ok=True)

# Load & Clean
df = pd.read_excel(DATA_FILE)
df['doanh thu'] = df['doanh thu'].fillna(0)

# Chart 1: Boxplot
fig, ax = plt.subplots(figsize=(10, 6))
# ... [plotting code]
plt.savefig(CHARTS_DIR / "01_boxplot_revenue_by_year.png", dpi=300)

# ... [Charts 2-7]

print("✅ All 7 EDA charts generated")
```

**File 3: `statics/README.md`** (Documentation)

**Nội dung bắt buộc**:
- Purpose của module
- Quick start guide (how to run notebook và script)
- List of charts generated
- Key statistics explained
- Customization options
- Integration với business analysis
- Troubleshooting tips

**KHÔNG DÙNG EMOJI, KHÔNG ICON** (theo AGENTS.md)

### Step 3.2: Run EDA Analysis

**Option A: Interactive** (khi cần explore và tinh chỉnh)
```bash
cd "[project_name]/statics/code"
jupyter notebook eda.ipynb
# Execute all cells manually
```

**Option B: Automated** (khi data structure đã clear)
```bash
cd "[project_name]/statics/code"
python generate_charts.py
```

**Validation**:
```python
# Check outputs
import os

expected_charts = [
    '01_boxplot_revenue_by_year.png',
    '02_histogram_revenue_distribution.png',
    '03_correlation_heatmap.png',
    '04_violin_revenue_by_year.png',
    '05_timeseries_monthly_trend.png',
    '06_cv_comparison_by_year.png',
    '07_statistics_summary_table.png'
]

charts_dir = 'statics/charts_eda'  # or 'statics/charts'
missing = []
for chart in expected_charts:
    path = f'{charts_dir}/{chart}'
    if not os.path.exists(path):
        missing.append(chart)

if missing:
    print(f"❌ Missing charts: {missing}")
else:
    print("✅ All 7 EDA charts generated")

# Check stats CSV
stats_file = 'statics/document/eda_statistics.csv'
if os.path.exists(stats_file):
    print(f"✅ Stats CSV exists: {stats_file}")
else:
    print(f"⚠️  Stats CSV not found: {stats_file}")
```

### Step 3.3: Analyze EDA Results

**Key Metrics to Extract**:
```python
# From stats CSV
stats_2025 = pd.read_csv('statics/document/csv/stats_2025.csv', index_col=0)
stats_2026 = pd.read_csv('statics/document/csv/stats_2026.csv', index_col=0)
cv = pd.read_csv('statics/document/csv/coefficient_of_variation.csv', index_col=0)

# Identify patterns
high_cv_channels = cv[cv['CV 2025 (%)'] > 50].index.tolist()
stable_channels = cv[cv['CV 2025 (%)'] < 20].index.tolist()

print(f"High CV (>50%): {high_cv_channels}")
print(f"Stable (<20%): {stable_channels}")
```

**Decision Tree**:
```
FOR each channel:
  IF CV > 50%:
    → Mark as "High Risk"
    → Forecast method: Use MEDIAN + separate peak months
    → Buffer: 30%+

  ELIF CV 20-50%:
    → Mark as "Medium Risk"
    → Forecast method: MEAN with monthly monitoring
    → Buffer: 15-20%

  ELSE (CV < 20%):
    → Mark as "Stable"
    → Forecast method: MEAN
    → Buffer: 5-10%
```

**Store Decisions**:
```python
# Save for later use in insights
eda_insights = {
    'high_risk_channels': high_cv_channels,
    'stable_channels': stable_channels,
    'outlier_months': {},  # From boxplots
    'correlations': {},     # From heatmap
    'seasonality': {}       # From time series
}

# Export
import json
with open('statics/document/eda_insights.json', 'w') as f:
    json.dump(eda_insights, f, indent=2)
```

---

## PHASE 4: Business Analysis

**CRITICAL**: Tạo CODE EDITABLE cho business metrics để có thể tinh chỉnh khi yêu cầu thay đổi

### Step 4.0: Tạo Business Analysis Code Files

**QUAN TRỌNG**: Tạo CẢ 2 versions - notebook (interactive) và script (automated)

**File 1: `code/analysis.ipynb`** (Interactive Jupyter Notebook)

**Mục đích**:
- Tính toán business metrics có thể chỉnh sửa
- Interactive để test scenarios khác nhau
- Dễ dàng thay đổi assumptions và re-run

**Sections bắt buộc**:
1. Setup (imports, paths)
2. Load & Clean Data
3. Data Quality Check
4. Extract specific data (vd: Bảo Việt, top companies)
5. Calculate Key Metrics (revenue by year, percentages, etc.)
6. Calculate Growth Rates
7. Scenario Analysis (multiple scenarios: accept, refuse, negotiate)
8. Cost Analysis
9. Summary Statistics
10. Top N Analysis (companies, channels, etc.)
11. Save Metrics (JSON, CSV)
12. Key Findings & Recommendation

**Template Code**:
```python
# Cell 1: Setup
import pandas as pd
import numpy as np
import json
from pathlib import Path

BASE_DIR = Path.cwd().parent
DATA_FILE = BASE_DIR.parent.parent.parent / "path/to/data.xlsx"
OUTPUT_DIR = BASE_DIR / "document"
OUTPUT_DIR.mkdir(exist_ok=True)

# Cell 2-11: [Business analysis sections...]

# Cell 12: Summary
print("="*60)
print("ANALYSIS COMPLETE")
print("="*60)
print(f"\nKey finding: [...]")
print(f"\nRecommendation: [...]")
```

**File 2: `code/analysis.py`** (Script Version)

**Mục đích**:
- Automated execution
- Reproducible analysis
- Can be scheduled or run in CI/CD

**Template Code**:
```python
"""
Business Analysis Script
Tính toán metrics và generate insights
"""
import pandas as pd
import numpy as np
import json
from pathlib import Path

# =============================================================================
# SETUP
# =============================================================================

BASE_DIR = Path(__file__).parent.parent
DATA_FILE = BASE_DIR.parent.parent.parent / "path/to/data.xlsx"
OUTPUT_DIR = BASE_DIR / "document"
OUTPUT_DIR.mkdir(exist_ok=True)

print("=== BUSINESS ANALYSIS ===\n")

# =============================================================================
# 1. LOAD & CLEAN DATA
# =============================================================================

print("1. Loading data...")
df = pd.read_excel(DATA_FILE)
df['doanh thu'] = df['doanh thu'].fillna(0)
print(f"   Loaded: {len(df)} records")

# =============================================================================
# 2-10. [Business analysis sections...]
# =============================================================================

# ... [all metrics calculations]

# =============================================================================
# 11. SAVE METRICS
# =============================================================================

print("\n11. Saving metrics...")
output_file = OUTPUT_DIR / "metrics.json"
with open(output_file, 'w', encoding='utf-8') as f:
    json.dump(metrics, f, indent=2, ensure_ascii=False)
print(f"   ✅ Saved: {output_file}")

# =============================================================================
# 12. SUMMARY
# =============================================================================

print("\n" + "="*60)
print("✅ ANALYSIS COMPLETE")
print("="*60)
print(f"\nKey finding: [...]")
print(f"\nRecommendation: [...]")
print("="*60)
```

**Lưu ý**:
- Code phải có comment tiếng Việt rõ ràng
- Section headers rõ ràng với `# =============`
- Print progress để user biết đang ở đâu
- Tất cả paths dùng `Path()` object (cross-platform)

### Step 4.1: Calculate Business Metrics

**Common Metrics** (adjust based on context):

```python
def calculate_business_metrics(df_2025, df_2026, revenue_cols):
    """
    Calculate key business metrics
    """
    metrics = {}

    # 1. Growth Rate
    metrics['growth_rate'] = {}
    for col in revenue_cols:
        growth = ((df_2026[col].sum() / df_2025[col].sum()) - 1) * 100
        metrics['growth_rate'][col] = round(growth, 2)

    # 2. Growth Contribution (KEY METRIC!)
    df_contrib = pd.DataFrame({'Thang': df_2026['thang']})
    for col in revenue_cols:
        delta_kenh = df_2026[col].values - df_2025[col].values
        delta_tong = df_2026['TONG'].values - df_2025['TONG'].values
        df_contrib[col] = (delta_kenh / delta_tong * 100).round(1)

    metrics['growth_contribution'] = df_contrib[revenue_cols].mean().to_dict()

    # 3. Market Share (tỉ trọng)
    metrics['market_share_2025'] = (df_2025[revenue_cols].sum() / df_2025['TONG'].sum() * 100).round(2).to_dict()
    metrics['market_share_2026'] = (df_2026[revenue_cols].sum() / df_2026['TONG'].sum() * 100).round(2).to_dict()

    # 4. Peak Months (từ EDA)
    metrics['peak_months'] = {}
    for col in revenue_cols:
        peak_month = df_2026[col].idxmax() + 1  # +1 vì index từ 0
        metrics['peak_months'][col] = int(df_2026.loc[df_2026[col].idxmax(), 'thang'])

    return metrics
```

**Store Results**:
```python
# Save metrics
with open('document/business_metrics.json', 'w') as f:
    json.dump(metrics, f, indent=2)

print("✅ Business metrics calculated and saved")
```

### Step 4.2: Identify Key Insights

**Template**:
```python
def extract_insights(metrics, eda_insights):
    """
    Extract actionable insights
    """
    insights = []

    # 1. Growth Drivers
    growth_contrib = metrics['growth_contribution']
    top_driver = max(growth_contrib, key=growth_contrib.get)
    insights.append({
        'type': 'growth_driver',
        'title': f"{top_driver} là động cơ tăng trưởng chính",
        'data': f"{growth_contrib[top_driver]:.1f}% đóng góp",
        'action': f"Focus resources vào {top_driver}"
    })

    # 2. Risk Channels (từ EDA)
    for channel in eda_insights['high_risk_channels']:
        insights.append({
            'type': 'risk',
            'title': f"{channel} biến động cao (CV > 50%)",
            'data': f"Khó dự đoán, cần buffer lớn",
            'action': f"Forecast riêng từng tháng cho {channel}, buffer 30%+"
        })

    # 3. Seasonality
    for channel, peak_month in metrics['peak_months'].items():
        if peak_month in [1, 6, 7, 8, 9]:  # Known seasonal months
            insights.append({
                'type': 'seasonality',
                'title': f"{channel} đỉnh tháng {peak_month}",
                'data': f"Cần chuẩn bị trước 2-3 tháng",
                'action': f"Reserve budget & resources từ tháng {peak_month - 2}"
            })

    # 4. Cross-sell Opportunities (từ correlation)
    # ... (nếu có correlation cao)

    return insights
```

---

## 🔗 LIÊN KẾT VỚI CÁC FILE KHÁC

- **Tổng quan**: [`workflow-analytics-tong-quan.md`](workflow-analytics-tong-quan.md)
- **Phases 5-8**: [`workflow-analytics-phases-5-8.md`](workflow-analytics-phases-5-8.md)
- **Error Handling**: [`workflow-analytics-error-handling.md`](workflow-analytics-error-handling.md)
- **Decision Trees**: [`workflow-analytics-decision-trees.md`](workflow-analytics-decision-trees.md)
- **Configuration**: [`workflow-analytics-configuration.md`](workflow-analytics-configuration.md)
- **Examples**: [`workflow-analytics-examples.md`](workflow-analytics-examples.md)