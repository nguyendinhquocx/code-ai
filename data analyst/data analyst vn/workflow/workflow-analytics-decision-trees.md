# Data Analytics Workflow - Decision Trees

**File này**: Decision trees cho các quyết định quan trọng
**Liên kết**: [`workflow-analytics-tong-quan.md`](workflow-analytics-tong-quan.md)


---

## 🎓 DECISION TREES

### Tree 1: Forecast Method Selection

```
FOR each channel:
  READ CV from coefficient_of_variation.csv

  IF CV < 20%:
    forecast_method = "MEAN"
    buffer = "5-10%"
    monitoring = "Quarterly"
    confidence = "High"

  ELIF CV >= 20% AND CV < 50%:
    forecast_method = "MEAN with monthly monitoring"
    buffer = "15-20%"
    monitoring = "Monthly"
    confidence = "Medium"

  ELSE (CV >= 50%):
    READ distribution from histograms
    IF skewed:
      forecast_method = "MEDIAN + separate peak months"
    ELSE:
      forecast_method = "Custom per month"
    buffer = "30%+"
    monitoring = "Weekly during peak"
    confidence = "Low - needs custom approach"

  STORE decision for insights
```

### Tree 2: Validation Action

```
RUN data_quality_report()

IF critical_issues (empty data, missing key columns):
  STOP
  REPORT to user with details
  ASK: "Provide corrected data or skip this analysis?"
  WAIT for response

  IF user provides new data:
    RESTART from Phase 1
  ELSE:
    ABORT workflow

ELIF warnings (< 50% missing, duplicates):
  LOG warnings
  IF auto_fixable (duplicates, fillable NaN):
    AUTO_FIX
    LOG fixes applied
  ELSE:
    ASK user: "Continue with caution?"
    IF yes:
      CONTINUE
    ELSE:
      WAIT for user fix

ELSE (no issues):
  CONTINUE to next phase
```

### Tree 3: Chart Selection

```
IDENTIFY project_type from user input or auto-detect

IF project_type == "Financial":
  required_charts = [
    "Revenue trend (time series)",
    "YoY comparison",
    "Growth contribution",
    "Market share",
    "Budget vs Actual"
  ]

ELIF project_type == "Marketing":
  required_charts = [
    "Conversion funnel",
    "CAC trend",
    "LTV/CAC ratio",
    "Channel performance",
    "Campaign ROI"
  ]

ELIF project_type == "Operations":
  required_charts = [
    "Efficiency metrics",
    "Throughput over time",
    "Bottleneck analysis",
    "Resource utilization"
  ]

ELSE (unknown):
  ASK user: "What are the key metrics to visualize?"
  GENERATE custom charts based on response

ALWAYS include EDA charts (7 standard charts)
```

### Tree 4: Data Format Handling

```
DETECT file_type from file extension

IF file_type == "xlsx" OR "xls":
  TRY:
    LOAD all sheets
    IF multiple sheets:
      IF user specified sheet:
        LOAD specified sheet(s)
      ELSE:
        AUTO-DETECT main sheet (largest)
        ASK user: "Analyze sheet [name]?"
  EXCEPT:
    TRY different engines (openpyxl, xlrd)
    IF still fails:
      ASK user for CSV version

ELIF file_type == "csv":
  TRY:
    LOAD with utf-8
  EXCEPT:
    TRY encodings: latin1, cp1252
    IF all fail:
      ASK user for encoding

ELIF file_type == "json":
  TRY:
    LOAD with pandas
  EXCEPT:
    TRY manual JSON parse
    IF fails:
      ASK user for valid JSON

ELSE:
  ASK user: "Supported formats: Excel, CSV, JSON"
```

### Tree 5: Missing Value Strategy

```
FOR each column:
  CALCULATE missing_percentage

  IF missing_percentage > 50%:
    MARK as "critical_issue"
    LOG: "Column [col] has [pct]% missing"
    STOP if critical column

  ELIF missing_percentage > 10%:
    MARK as "warning"
    IF column is numeric:
      IF business_context allows:
        FILL with 0 or median
        LOG action taken
      ELSE:
        MARK for user review
    ELSE (categorical):
      FILL with "Unknown" or mode
      LOG action taken

  ELSE (missing_percentage <= 10%):
    IF column is numeric:
      FILL with mean or median
    ELSE:
      FILL with mode

VALIDATE: No critical issues remain
```

### Tree 6: Outlier Treatment

```
DETECT outliers using IQR method

FOR each numeric column:
  CALCULATE Q1, Q3, IQR
  DEFINE bounds: [Q1 - 1.5*IQR, Q3 + 1.5*IQR]
  IDENTIFY outliers outside bounds

  IF outliers detected:
    CALCULATE outlier_percentage

    IF outlier_percentage > 10%:
      LOG warning: "High outlier rate in [col]"
      INVESTIGATE: Data entry error vs legitimate values
      IF error:
        CORRECT if possible
      ELSE:
        KEEP but flag in insights

    ELIF outlier_percentage > 5%:
      LOG info: "Moderate outliers in [col]"
      CONSIDER transformation or separate analysis

    ELSE:
      LOG info: "Few outliers in [col]"
      KEEP as-is (likely valid extreme values)

DOCUMENT all outlier decisions for insights
```

### Tree 7: Correlation Interpretation

```
CALCULATE correlation matrix

FOR each correlation pair:
  GET correlation_value

  IF abs(correlation_value) > 0.7:
    MARK as "High correlation"
    IF correlation_value > 0:
      INTERPRET as "Positive relationship"
    ELSE:
      INTERPRET as "Negative relationship"
    INVESTIGATE: Causation vs coincidence
    LOG for business insights

  ELIF abs(correlation_value) > 0.3:
    MARK as "Moderate correlation"
    NOTE for further investigation

  ELSE:
    MARK as "Low correlation"
    IGNORE for insights

SPECIAL CASES:
  IF correlation < -0.5:
    FLAG as "Potential cannibalization"
    HIGHLIGHT in insights

  IF correlation between channels > 0.8:
    FLAG as "Channel overlap"
    RECOMMEND consolidation analysis
```

### Tree 8: Time Series Seasonality

```
ANALYZE monthly patterns

FOR each channel:
  CALCULATE monthly averages
  IDENTIFY peak_month (highest average)
  IDENTIFY low_month (lowest average)
  CALCULATE seasonality_ratio = peak/low

  IF seasonality_ratio > 2.0:
    MARK as "Strong seasonality"
    RECOMMEND: Separate forecasting by season
    DOCUMENT: Peak preparation timeline

  ELIF seasonality_ratio > 1.5:
    MARK as "Moderate seasonality"
    RECOMMEND: Seasonal adjustments

  ELSE:
    MARK as "Low seasonality"
    RECOMMEND: Standard forecasting

  CALCULATE lead_time_needed = peak_month - current_month
  IF lead_time_needed < 3:
    FLAG as "Urgent preparation needed"
```

### Tree 9: Growth Driver Analysis

```
CALCULATE growth_contribution for each channel

SORT channels by contribution

FOR top_3_channels:
  GET contribution_percentage

  IF contribution_percentage > 40%:
    LABEL as "Dominant driver"
    RECOMMEND: Major resource allocation
    ASSESS: Sustainability risk

  ELIF contribution_percentage > 20%:
    LABEL as "Significant driver"
    RECOMMEND: Balanced investment

  ELSE:
    LABEL as "Minor contributor"
    RECOMMEND: Optimization focus

FOR bottom_channels:
  IF contribution_percentage < 5%:
    RECOMMEND: Review viability
    CONSIDER: Resource reallocation

ANALYZE: YoY consistency of drivers
IF driver changed significantly:
  INVESTIGATE: Market shift or strategy change
```

### Tree 10: Risk Assessment

```
ASSESS multiple risk factors

FOR each channel:
  COMBINE risk scores:
    - CV_score (0-100, higher = riskier)
    - Growth_consistency (0-100, lower = riskier)
    - Market_dependency (0-100, higher = riskier)

  CALCULATE overall_risk = weighted_average

  IF overall_risk > 70:
    CLASSIFY as "High Risk"
    RECOMMEND: Conservative forecasting
    BUFFER: 30%+
    MONITORING: Weekly

  ELIF overall_risk > 40:
    CLASSIFY as "Medium Risk"
    RECOMMEND: Balanced approach
    BUFFER: 15-20%
    MONITORING: Monthly

  ELSE:
    CLASSIFY as "Low Risk"
    RECOMMEND: Standard approach
    BUFFER: 5-10%
    MONITORING: Quarterly

DOCUMENT risk factors and mitigation strategies
```

---

## 🔗 LIÊN KẾT VỚI CÁC FILE KHÁC

- **Tổng quan**: [`workflow-analytics-tong-quan.md`](workflow-analytics-tong-quan.md)
- **Phases 0-4**: [`workflow-analytics-phases-0-4.md`](workflow-analytics-phases-0-4.md)
- **Phases 5-8**: [`workflow-analytics-phases-5-8.md`](workflow-analytics-phases-5-8.md)
- **Error Handling**: [`workflow-analytics-error-handling.md`](workflow-analytics-error-handling.md)
- **Configuration**: [`workflow-analytics-configuration.md`](workflow-analytics-configuration.md)
- **Examples**: [`workflow-analytics-examples.md`](workflow-analytics-examples.md)