# Data Analytics Workflow - Configuration

**File này**: Configuration và customization
**Liên kết**: [`workflow-analytics-tong-quan.md`](workflow-analytics-tong-quan.md)


---

## 📚 CONFIGURATION

### workflow_config.yaml

Create this file to customize workflow:

```yaml
# Workflow Configuration
version: 1.0.0
project_name: "[Auto-filled or user-specified]"
project_type: "financial"  # financial, marketing, operations, custom

# Data Sources
data:
  primary_file: "excel/data.xlsx"
  file_type: "auto"  # auto-detect or specify
  expected_sheets:
    - "chi tieu"
    - "ngan sach"
    - "dinh bien"

# Analysis Settings
analysis:
  revenue_columns:  # Auto-detect or specify
    - "PACKAGE"
    - "CHC"
    - "REF"
    - "PHI"
    - "Digital"

  time_column: "thang"
  year_column: "nam"

  cv_thresholds:
    stable: 20
    medium: 50

  outlier_method: "iqr"  # iqr, zscore
  outlier_threshold: 1.5

# Visualization
visualization:
  design:
    colors:
      primary: "#000000"
      secondary: "#808080"
      light: "#F5F5F5"
      accent_blue: "#2962FF"
      accent_red: "#F23645"

    font_family: ["Calibri", "Arial"]
    font_size: 10
    dpi: 300

    no_pie_charts: true
    no_emojis: true
    no_icons: true

  chart_types:
    eda: "standard_7"  # Always generate 7 EDA charts
    business:
      - "growth_contribution"
      - "yoy_comparison"
      - "market_share"
      # Add custom charts

# Outputs
outputs:
  charts_format: "png"
  charts_dpi: 300
  stats_format: "csv"
  insights_format: "markdown"

  generate_readme: true
  generate_guide: false  # huong_dan_doc_bieu_do.md
  generate_presentation: false  # PowerPoint

# Validation
validation:
  strict_mode: false  # Stop on warnings?
  auto_fix: true      # Auto-fix safe issues?
  consistency_check: true

# Logging
logging:
  level: "INFO"  # DEBUG, INFO, WARNING, ERROR
  file: "workflow.log"
  console: true
```

---

## 🔗 LIÊN KẾT VỚI CÁC FILE KHÁC

- **Tổng quan**: [`workflow-analytics-tong-quan.md`](workflow-analytics-tong-quan.md)
- **Phases 0-4**: [`workflow-analytics-phases-0-4.md`](workflow-analytics-phases-0-4.md)
- **Phases 5-8**: [`workflow-analytics-phases-5-8.md`](workflow-analytics-phases-5-8.md)
- **Error Handling**: [`workflow-analytics-error-handling.md`](workflow-analytics-error-handling.md)
- **Decision Trees**: [`workflow-analytics-decision-trees.md`](workflow-analytics-decision-trees.md)
- **Examples**: [`workflow-analytics-examples.md`](workflow-analytics-examples.md)