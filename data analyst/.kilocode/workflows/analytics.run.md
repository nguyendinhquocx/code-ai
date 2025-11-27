---
name: Analytics: Run Full Workflow
description: Thực thi full workflow phân tích data từ Phase 0 → Phase 8
category: Analytics
tags: [analytics, workflow, data-analysis]
---

## Input từ User

```text
$ARGUMENTS
```

## Mục đích

Command này thực thi **FULL WORKFLOW** phân tích dữ liệu từ raw data đến insights. Workflow tự động chạy qua 8 phases:

- Phase 0: Setup & Understanding
- Phase 1: Data Ingestion
- Phase 2: Data Quality Check
- Phase 3: EDA & Descriptive Statistics
- Phase 4: Business Analysis
- Phase 5: Visualization
- Phase 6: Insights Generation
- Phase 7: Documentation
- Phase 8: Quality Review

## Nguyên tắc bảo vệ

- **BẮT BUỘC**: Tất cả code comments, insights, documentation MUST viết bằng TIẾNG VIỆT
- Ưu tiên cách làm đơn giản, tối thiểu trước
- LUÔN tạo code EDITABLE (notebook + script) để user có thể đọc hiểu và tinh chỉnh
- **QUAN TRỌNG**: PHẢI thảo luận và xác nhận hướng đi trước khi thực thi, trừ khi user yêu cầu "làm ngay" hoặc "thực thi trực tiếp"

## Các bước thực hiện

1. **Đọc workflow và requirements**:
   - Load `data analyst vn/workflow/workflow-analytics-tong-quan.md` để hiểu cấu trúc
   - Load các file yêu cầu user cung cấp (plan, requirements, etc.)
   - Load `data analyst vn/workflow/workflow-analytics-phases-0-4.md` và `phases-5-8.md`

2. **Parse input từ user**:
   - Xác định file path hoặc data đầu vào
   - Xác định mục đích phân tích từ requirements
   - Nếu input rỗng: yêu cầu user cung cấp file path và mô tả ngắn

3. **PROPOSAL & CONFIRMATION** (bắt buộc trừ khi user yêu cầu skip):

   Trình bày cho user:
   ```
   PHÂN TÍCH ĐỀ XUẤT
   ═══════════════════════════════════════════

   1. HIỂU YÊU CẦU
   - Mục tiêu chính: [tóm tắt từ requirements]
   - Data source: [file path, số sheets, rows ước tính]
   - Phạm vi phân tích: [time range, dimensions]

   2. HƯỚNG TIẾP CẬN
   - Key metrics sẽ tính: [list metrics]
   - Góc nhìn phân tích: [dimensions, comparisons]
   - Charts dự kiến: [list chart types]

   3. OUTPUT DỰ KIẾN
   - EDA: 7 charts thống kê cơ bản
   - Business: X charts (list cụ thể)
   - Insights: Focus vào [key areas]

   4. CÂU HỎI LÀM RÕ (nếu có)
   - [câu hỏi 1]
   - [câu hỏi 2]

   ═══════════════════════════════════════════
   Mày đồng ý với hướng này không?
   - "ok" / "đồng ý" → Bắt đầu thực thi
   - "sửa: [yêu cầu]" → Điều chỉnh approach
   - "thêm: [yêu cầu]" → Bổ sung scope
   ```

   **CHỜ USER CONFIRM** trước khi tiếp tục.

4. **Thực thi từ Phase 0 → 8** (sau khi có confirmation):
   - Tạo project structure
   - Load và validate data
   - Tạo statics module (EDA)
   - Tạo business analysis code
   - Generate charts và insights
   - Validate consistency

   **Lưu ý**: Trong quá trình thực thi, không hỏi từng bước nhỏ. Chỉ dừng lại khi:
   - Gặp lỗi critical
   - Cần quyết định ảnh hưởng lớn đến kết quả
   - Data có vấn đề nghiêm trọng

4. **Output cuối cùng**:
   - 7 EDA charts trong `statics/charts_eda/`
   - 3-5 business charts trong `charts/`
   - `document/insights.md` (10,000+ words)
   - `document/slide.md` (8-10 slide structure)
   - `document/metrics.json`
   - Code editable: `code/analysis.ipynb`, `statics/code/eda.ipynb`

## Input format

- **Option 1**: File path + mô tả
  ```
  /analytics.run data.xlsx so sánh 2024 vs 2025
  ```

- **Option 2**: Chỉ file path (Agent tự phân tích)
  ```
  /analytics.run data.xlsx
  ```

## Tham khảo

- Workflow chi tiết: `data analyst vn/workflow/`
- Error handling: `data analyst vn/workflow/workflow-analytics-error-handling.md`
- Decision trees: `data analyst vn/workflow/workflow-analytics-decision-trees.md`
