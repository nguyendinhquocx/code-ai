---
description: Kiểm tra data quality và validation (Phase 2)
---

## Input từ User

```text
$ARGUMENTS
```

## Mục đích

Command này **kiểm tra chất lượng dữ liệu** - Phase 2 của workflow. Dùng khi:
- Muốn quick check data trước khi phân tích
- Cần validate data mới
- Debug data issues

## Nguyên tắc bảo vệ

- **KHÔNG** tự động fix data mà chưa báo user
- Report đầy đủ issues tìm được
- Đề xuất solutions cho từng issue
- Output tiếng Việt

## Các bước thực hiện

1. **Đọc workflow chi tiết**:
   - Load `data analyst vn/workflow/workflow-analytics-phases-0-4.md`
   - Focus vào Phase 2 (Data Quality Check)

2. **Parse input**:
   - Xác định file path hoặc loaded dataframe
   - Xác định level check: `quick`, `standard`, `deep`

3. **Thực hiện Data Quality Check**:

   **3.1 Quick Check** (mặc định):
   - Shape (rows, columns)
   - Data types
   - Missing values count
   - Duplicate rows

   **3.2 Standard Check**:
   - Tất cả Quick Check +
   - Missing values by column (%)
   - Outliers detection (IQR method)
   - Value ranges
   - Unique values per column

   **3.3 Deep Check**:
   - Tất cả Standard Check +
   - Data consistency (cross-column validation)
   - Temporal consistency (nếu có time column)
   - Business rule validation
   - Correlation anomalies

4. **Generate Report**:
   ```
   DATA QUALITY REPORT
   ==================

   TỔNG QUAN
   - Rows: X
   - Columns: Y
   - Memory: Z MB

   VẤN ĐỀ TÌM ĐƯỢC
   ❌ Critical: [list]
   ⚠️ Warning: [list]
   ℹ️ Info: [list]

   KHUYẾN NGHỊ
   1. [action]
   2. [action]

   KẾT LUẬN
   [PASSED/FAILED/NEEDS_REVIEW]
   ```

5. **Decision**:
   - **PASSED**: Tiếp tục workflow
   - **NEEDS_REVIEW**: Hỏi user về các warnings
   - **FAILED**: Yêu cầu fix trước khi tiếp tục

## Output

Console output với report chi tiết. Không tạo file trừ khi user yêu cầu.

## Input format

```
/analytics.check data.xlsx              # Quick check
/analytics.check data.xlsx standard     # Standard check
/analytics.check data.xlsx deep         # Deep check
/analytics.check                        # Check data đã load
```

## Tham khảo

- Chi tiết Phase 2: `data analyst vn/workflow/workflow-analytics-phases-0-4.md`
- Error handling: `data analyst vn/workflow/workflow-analytics-error-handling.md`
- Decision trees: `data analyst vn/workflow/workflow-analytics-decision-trees.md`
