---
description: Regenerate charts (EDA hoặc Business) với customization
---

## Input từ User

```text
$ARGUMENTS
```

## Mục đích

Command này **regenerate charts** - Phase 5 của workflow. Dùng khi:
- Cần thay đổi màu sắc, style của charts
- Muốn regenerate sau khi chỉnh data
- Cần thêm/bớt charts cụ thể

## Nguyên tắc bảo vệ

- **STYLE**: Minimalist, tối giản, không grid trừ khi cần thiết
- **COLORS**: Mặc định trắng/đen, có thể customize theo yêu cầu
- **RESOLUTION**: 300 DPI cho tất cả charts
- **NAMING**: Đánh số 01_, 02_... để sort đúng thứ tự

## Các bước thực hiện

1. **Đọc workflow chi tiết**:
   - Load `data analyst vn/workflow/workflow-analytics-phases-5-8.md`
   - Focus vào Phase 5 (Visualization)

2. **Parse input** - xác định loại chart cần generate:
   - `eda` - 7 EDA charts trong `statics/charts_eda/`
   - `business` - 3-5 business charts trong `charts/`
   - `all` - Tất cả charts
   - Hoặc chart cụ thể: `boxplot`, `heatmap`, `trend`

3. **Regenerate với customization** (nếu có):
   - Colors: `colors: #F5F5F5, #000000`
   - Style: `style: dark` hoặc `style: light`
   - Specific chart: `chart: correlation`

4. **Update code files**:
   - `statics/code/generate_charts.py` (cho EDA)
   - `code/analysis.py` (cho business)

5. **Verify outputs**:
   - Check resolution (300 DPI)
   - Check naming convention
   - Check minimalist style

## Output

**EDA Charts** (`statics/charts_eda/`):
1. `01_boxplot_revenue_by_year.png`
2. `02_histogram_revenue_distribution.png`
3. `03_correlation_heatmap.png`
4. `04_violin_revenue_by_year.png`
5. `05_timeseries_monthly_trend.png`
6. `06_cv_comparison_by_year.png`
7. `07_statistics_summary_table.png`

**Business Charts** (`charts/`):
- 3-5 charts tùy theo business context

## Input format

```
/analytics.charts eda                    # Regenerate EDA charts
/analytics.charts business               # Regenerate business charts
/analytics.charts all                    # Regenerate tất cả
/analytics.charts eda colors: red, blue  # Custom colors
/analytics.charts business chart: trend  # Chỉ chart cụ thể
```

## Tham khảo

- Chi tiết Phase 5: `data analyst vn/workflow/workflow-analytics-phases-5-8.md`
- Design principles: `AGENTS.md` (Nguyên tắc Thiết kế)
