# Data Analytics Workflow - Phases 5-8

**File này**: Phases 5-8 (Visualization → Quality Review)
**Liên kết**: [`workflow-analytics-tong-quan.md`](workflow-analytics-tong-quan.md)

---

## PHASE 5: Visualization

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

### Step 6.2: Cross-Validate Insights ↔ Charts

**CRITICAL VALIDATION**:
```python
def validate_insights_consistency(insights_md_path, charts_dir, data_dir):
    """
    Ensure insights match charts and data
    """
    issues = []

    # Read insights.md
    with open(insights_md_path, 'r', encoding='utf-8') as f:
        insights_text = f.read()

    # Check 1: All referenced charts exist
    import re
    chart_refs = re.findall(r'charts/([a-zA-Z0-9_.-]+\.png)', insights_text)
    for chart in chart_refs:
        if not os.path.exists(os.path.join(charts_dir, chart)):
            issues.append(f"❌ Referenced chart not found: {chart}")

    # Check 2: Numbers in insights match data
    # (more complex - would need to parse metrics from text and compare)

    # Check 3: Insights cover all key findings
    # (check if high CV channels are mentioned, etc.)

    if issues:
        print("❌ Inconsistencies found:")
        for issue in issues:
            print(f"  {issue}")
        return False
    else:
        print("✅ Insights ↔ Charts ↔ Data: CONSISTENT")
        return True
```

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

---

## 🚀 Cách Sử Dụng

### Quick Start
\`\`\`bash
# Xem insights
code document/insights.md

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

### Step 7.2: Generate Guide (Optional)

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
        'Consistency Validated': False,
        'Documentation Done': False
    }

    # Check 1: Data Quality
    if os.path.exists(f'{project_dir}/statics/document/csv/stats_2025.csv'):
        checks['Data Quality'] = True

    # Check 2: EDA
    eda_charts = [f'{project_dir}/statics/charts/{i:02d}_*.png' for i in range(1, 8)]
    if all(glob.glob(pattern) for pattern in eda_charts):
        checks['EDA Completed'] = True

    # Check 3: Business Metrics
    if os.path.exists(f'{project_dir}/document/business_metrics.json'):
        checks['Business Metrics'] = True

    # Check 4: Charts
    if len(os.listdir(f'{project_dir}/charts/')) >= 5:  # At least 5 charts
        checks['Charts Generated'] = True

    # Check 5: Insights
    if os.path.exists(f'{project_dir}/document/insights.md'):
        # Check if not empty
        size = os.path.getsize(f'{project_dir}/document/insights.md')
        if size > 1000:  # At least 1KB
            checks['Insights Written'] = True

    # Check 6: Consistency (run validation function)
    checks['Consistency Validated'] = validate_insights_consistency(...)

    # Check 7: Documentation
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