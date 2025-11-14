# Data Analytics Workflow - Phases 0-4

**File này**: Phases 0-4 (Setup → Business Analysis)
**Liên kết**: [`workflow-analytics-tong-quan.md`](workflow-analytics-tong-quan.md)


---

## PHASE 0: Setup & Understanding

### Step 0.1: Read User Input
**Mục đích**: Hiểu requirements và context

**Actions**:
1. User kéo file vào hoặc cung cấp path
2. User giải thích vài câu về dữ liệu
3. Agent hỏi làm rõ nếu cần

**Questions Agent Nên Hỏi**:
```
1. Mục đích phân tích?
   - So sánh periods (2025 vs 2026)?
   - Tìm growth drivers?
   - Identify risks?
   - Other?

2. Output mong muốn?
   - Charts only?
   - Insights + charts?
   - Full analysis package?

3. Business context?
   - Financial? Marketing? Operations?
   - Key metrics quan tâm?
   - Thresholds/targets?
```

**Decision Point**:
```
IF user unclear → Ask 2-3 clarifying questions MAX
IF user very clear → Proceed to Phase 1
```

### Step 0.2: Create Project Structure
**Actions**:
```bash
mkdir -p [project_name]/{code,charts,document,statics/{code,charts,document}}
```

**Logging**:
```
✅ Created project structure at: [path]
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

# Design settings
plt.rcParams['figure.dpi'] = 300
plt.rcParams['font.size'] = 10
COLORS = {
    'primary': '#000000',
    'secondary': '#4A4A4A',
    'tertiary': '#808080',
    'light': '#B0B0B0'
}

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