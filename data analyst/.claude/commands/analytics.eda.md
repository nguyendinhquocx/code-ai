---
description: Thực thi EDA và tạo statics module (Phase 2-3)
---

## Input từ User

```text
$ARGUMENTS
```

## Mục đích

Command này chỉ thực thi **EDA (Exploratory Data Analysis)** - Phase 2-3 của workflow. Dùng khi:
- Cần nhanh chóng hiểu data structure
- Muốn xem thống kê mô tả trước khi phân tích sâu
- Cần regenerate EDA charts

## Nguyên tắc bảo vệ

- **BẮT BUỘC**: Tất cả code comments MUST viết bằng TIẾNG VIỆT
- LUÔN tạo code EDITABLE (notebook + script)
- Output 7 standard EDA charts

## Các bước thực hiện

1. **Đọc workflow chi tiết**:
   - Load `data analyst vn/workflow/workflow-analytics-phases-0-4.md`
   - Focus vào Phase 2 (Data Quality) và Phase 3 (EDA)

2. **Parse input**:
   - Xác định file path hoặc loaded dataframe
   - Nếu project đã tồn tại: sử dụng data đã load

3. **Thực thi EDA**:
   - Data Quality Check (missing, duplicates, outliers)
   - Descriptive Statistics (mean, std, CV, quartiles)
   - Distribution Analysis
   - Correlation Analysis
   - Time Series Patterns (nếu có time dimension)

4. **Tạo statics module**:
   ```
   statics/
   ├── code/
   │   ├── eda.ipynb            # Notebook editable
   │   └── generate_charts.py   # Script automated
   ├── charts_eda/              # 7 standard charts
   │   ├── 01_boxplot_revenue_by_year.png
   │   ├── 02_histogram_revenue_distribution.png
   │   ├── 03_correlation_heatmap.png
   │   ├── 04_violin_revenue_by_year.png
   │   ├── 05_timeseries_monthly_trend.png
   │   ├── 06_cv_comparison_by_year.png
   │   └── 07_statistics_summary_table.png
   ├── document/
   │   └── eda_statistics.csv
   └── README.md
   ```

5. **Output**:
   - 7 EDA charts (PNG 300 DPI)
   - `eda_statistics.csv` với stats đầy đủ
   - Code editable để regenerate

## Input format

```
/analytics.eda data.xlsx
/analytics.eda  # Nếu data đã load trong session
```

## Tham khảo

- Chi tiết Phase 3: `data analyst vn/workflow/workflow-analytics-phases-0-4.md`
- Decision trees: `data analyst vn/workflow/workflow-analytics-decision-trees.md`
