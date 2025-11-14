# Analytics Workflow - Quick Reference for Agent

**Version**: 1.1.0
**Last Updated**: 2025-11-14
**Mục đích**: Cheat sheet nhanh khi thực thi workflow
**Đọc đầy đủ**: WORKFLOW_ANALYTICS.md

**NEW in v1.1.0**:
- Luôn tạo code EDITABLE (notebook + script)
- Statics module đầy đủ (`statics/code/eda.ipynb` + `generate_charts.py` + README)
- Business code đầy đủ (`code/analysis.py` + `analysis.ipynb`)

---

## 🚀 QUICK START

```
User input: [File path] + [Brief description]
Agent action:
1. Read WORKFLOW_ANALYTICS.md
2. Execute Phase 0 → Phase 8
3. Deliver: Charts + Insights + Docs
```

---

## 📋 PHASE CHECKLIST

### Phase 0: Setup ✅
- [ ] Understand user requirements (2-3 questions MAX)
- [ ] Create project structure
- [ ] Log: "✅ Setup complete: [project_name]"

### Phase 1: Data Ingestion ✅
- [ ] Load data (auto-detect format)
- [ ] Inspect: shape, columns, preview
- [ ] Log: "✅ Loaded [N] sheets/files"

### Phase 2: Data Quality ✅
- [ ] Validate schema
- [ ] Check missing values, duplicates
- [ ] Auto-fix safe issues (fillna, drop_duplicates)
- [ ] STOP if critical issues → Ask user
- [ ] Log: "✅ Data quality: [status]"

### Phase 3: EDA & Stats ✅
- [ ] **Step 3.0**: Create statics module structure
- [ ] **Step 3.1**: Create EDA code files:
  - [ ] `statics/code/eda.ipynb` (12 sections, interactive)
  - [ ] `statics/code/generate_charts.py` (7 charts automated)
  - [ ] `statics/README.md` (documentation, no emoji/icon)
- [ ] **Step 3.2**: Run EDA analysis (notebook OR script)
- [ ] Generate 7 EDA charts → `statics/charts_eda/`
- [ ] Export stats CSV → `statics/document/eda_statistics.csv`
- [ ] Analyze results (CV, correlations, outliers)
- [ ] Log: "✅ EDA complete: 7 charts + stats CSV + code files"

### Phase 4: Business Analysis ✅
- [ ] **Step 4.0**: Create business analysis code files:
  - [ ] `code/analysis.ipynb` (12 sections, interactive)
  - [ ] `code/analysis.py` (script version with section headers)
- [ ] **Step 4.1**: Calculate metrics (growth, contribution, market share)
- [ ] Identify patterns (seasonality, peaks)
- [ ] Extract insights (drivers, risks, opportunities)
- [ ] Save metrics → `document/metrics.json`
- [ ] Log: "✅ Metrics calculated + code files created"

### Phase 5: Visualization ✅
- [ ] Generate business charts (beyond EDA)
- [ ] Validate chart quality (size, DPI, content)
- [ ] Log: "✅ [N] charts generated"

### Phase 6: Insights Generation ✅ **CRITICAL**
- [ ] Draft insights.md from data & metrics
- [ ] Cross-validate: Insights ↔ Charts ↔ Data
- [ ] MUST BE CONSISTENT (không insights 1 đường, charts 1 nẻo)
- [ ] If inconsistent → FIX → Re-validate
- [ ] Log: "✅ Insights: VALIDATED"

### Phase 7: Documentation ✅
- [ ] Generate README.md
- [ ] Copy guides if needed
- [ ] Log: "✅ Documentation complete"

### Phase 8: Quality Review ✅
- [ ] Run final_quality_check()
- [ ] All checks passed?
  - Yes → "🎉 READY FOR DELIVERY"
  - No → Fix issues → Re-check
- [ ] Log: "✅ Quality review: PASSED"

---

## 🎯 DECISION TREES (Quick)

### CV-Based Forecast Method

```python
if cv < 20:
    method = "MEAN"
    buffer = "5-10%"
    confidence = "High"
elif cv < 50:
    method = "MEAN + monthly monitoring"
    buffer = "15-20%"
    confidence = "Medium"
else:  # cv >= 50
    method = "MEDIAN + separate peak months"
    buffer = "30%+"
    confidence = "Low"
```

### Validation Action

```python
if critical_issues:
    STOP → Ask user
elif warnings:
    if auto_fixable:
        AUTO_FIX → Continue
    else:
        Ask user: "Continue with caution?"
else:
    Continue
```

---

## 🔧 COMMON COMMANDS

### Load Data
```python
dfs = pd.read_excel(file_path, sheet_name=None)
print(f"✅ Loaded {len(dfs)} sheets")
```

### Data Quality Check
```python
report = data_quality_report(df)
if report['critical_issues']:
    STOP
else:
    auto_clean(df, revenue_cols)
```

### Run EDA
```bash
cd statics/code
python generate_charts.py
```

### Calculate Metrics
```python
metrics = calculate_business_metrics(df_2025, df_2026, revenue_cols)
with open('document/business_metrics.json', 'w') as f:
    json.dump(metrics, f, indent=2)
```

### Validate Consistency
```python
consistent = validate_insights_consistency(
    'document/insights.md',
    'charts/',
    'document/csv/'
)
if not consistent:
    FIX → Re-validate
```

---

## 🚨 WHEN TO STOP & ASK USER

1. **Critical data issues**:
   - Empty data
   - Missing key columns (>50%)
   - Cannot load file

2. **Ambiguous requirements**:
   - Unclear analysis objective
   - Multiple possible interpretations
   - Need business context

3. **Validation failures**:
   - Insights ↔ Data inconsistent (after 2 attempts to fix)
   - Charts generation failed
   - Quality check failed

4. **Unexpected patterns**:
   - Negative correlation (cannibalization?)
   - Extreme outliers (>3× std)
   - Data doesn't make business sense

---

## ✅ SUCCESS CRITERIA

Before marking DONE:
- [ ] All 8 phases completed
- [ ] **Statics module created** (`eda.ipynb` + `generate_charts.py` + README)
- [ ] **Business code created** (`analysis.py` + `analysis.ipynb`)
- [ ] **All code is EDITABLE** (có thể đọc hiểu, tinh chỉnh)
- [ ] EDA charts generated (7 charts in `statics/charts_eda/`)
- [ ] Business charts generated (3-5 charts in `charts/`)
- [ ] Insights written & consistent with data
- [ ] Documentation complete
- [ ] Quality check: 100% passed

**Log final message**:
```
🎉 ANALYSIS COMPLETE

Summary:
- [N] charts generated
- [M] key insights identified
- Top finding: [X]

Deliverables:
- Charts: [path]
- Insights: [path]
- Docs: [path]

Ready for review.
```

---

## 📊 OUTPUT STRUCTURE (v1.1.0)

```
[project_name]/
├── code/
│   ├── analysis.py              # ⭐ Business metrics (script)
│   └── analysis.ipynb           # ⭐ Business metrics (notebook - EDITABLE)
├── charts/                      # Business-specific charts (3-5)
│   ├── 01_[chart_name].png
│   ├── 02_[chart_name].png
│   └── ...
├── document/
│   ├── insights.md              # ⭐ CHÍNH (10,000+ words)
│   ├── metrics.json             # Business metrics
│   ├── summary_by_year.csv
│   └── README.md
└── statics/                     # ⭐ EDA Module
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

---

## 🔗 QUICK LINKS

- Full workflow: `WORKFLOW_ANALYTICS.md`
- Config template: `workflow_config.yaml`
- Agent rules: `AGENTS.md`
- Current project example: `ipynb/total/plan 2026/`

---

## 💡 TIPS

1. **Parallel actions**: Generate charts while calculating metrics (if possible)
2. **Early validation**: Check data quality BEFORE heavy processing
3. **Consistent naming**: Use project_name in all outputs
4. **Log everything**: User wants to see progress
5. **Cross-reference**: Always link insights → charts → data

---

**Changelog v1.1.0**:
- Added code editable requirements to checklist
- Updated output structure với statics module đầy đủ
- Enhanced Phase 3 & 4 với code creation steps
