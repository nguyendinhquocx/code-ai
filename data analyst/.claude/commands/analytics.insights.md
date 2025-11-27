---
description: Generate hoặc regenerate insights từ data đã phân tích (Phase 6)
---

## Input từ User

```text
$ARGUMENTS
```

## Mục đích

Command này **generate/regenerate insights** - Phase 6 của workflow. Dùng khi:
- Đã có EDA và business metrics, cần viết insights
- Cần regenerate insights với focus khác
- Muốn cập nhật insights sau khi có thêm context

## Nguyên tắc bảo vệ

- **BẮT BUỘC**: Insights MUST viết bằng TIẾNG VIỆT (10,000+ words)
- **CONSISTENCY**: Mọi số liệu trong insights PHẢI match với charts và metrics.json
- **VALIDATION**: Cross-validate insights với EDA stats trước khi finalize
- Slide guidance phải minimalist, elegant (8-10 slides)

## Các bước thực hiện

1. **Đọc workflow chi tiết**:
   - Load `data analyst vn/workflow/workflow-analytics-phases-5-8.md`
   - Focus vào Phase 6 (Insights Generation)

2. **Kiểm tra prerequisites**:
   - `document/metrics.json` phải tồn tại
   - `statics/document/eda_statistics.csv` phải có
   - Charts đã generate (hoặc sẽ reference)

3. **Generate insights.md** (10,000+ words):
   - **Tóm tắt Điều hành**: Key findings, hành động ưu tiên
   - **Tổng quan Dữ liệu**: Dataset info, quality status
   - **Phân tích Xu hướng**: Trends, growth rates, patterns
   - **Phân tích Kênh/Segments**: Contributions, comparisons
   - **Rủi ro & Khuyến nghị**: Risk assessment, action items
   - **Appendix**: Methodology, data sources

4. **Generate slide.md** (8-10 slides):
   - Cấu trúc presentation minimalist
   - Gợi ý content cho từng slide
   - Chart references

5. **Validation**:
   - Cross-check numbers với metrics.json
   - Verify chart references exist
   - Ensure consistency EDA ↔ Business ↔ Insights

## Output

```
document/
├── insights.md     # 10,000+ words, comprehensive
├── slide.md        # 8-10 slide structure
└── metrics.json    # (đã có từ Phase 4)
```

## Input format

```
/analytics.insights                    # Generate từ data hiện có
/analytics.insights focus: seasonality # Generate với focus cụ thể
```

## Tham khảo

- Chi tiết Phase 6: `data analyst vn/workflow/workflow-analytics-phases-5-8.md`
- Validation rules: `data analyst vn/workflow/workflow-analytics-error-handling.md`
