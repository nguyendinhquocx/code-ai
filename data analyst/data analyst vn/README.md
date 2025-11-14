# Data Analyst Workflows

**Mục đích**: Chứa workflows, templates, và configs cho data analytics projects

**Folder name**: `data analyst vn` - Việt hóa workflow với cấu trúc modular

**Note**: Folder name có dấu cách (space) để dễ đọc. Nếu gặp issue với scripts, có thể dùng quotes: `"data analyst vn/workflow/..."`

---

## 📚 Files trong Thư Mục Này

### 1. **workflow/workflow-analytics-tong-quan.md** ⭐ CHÍNH
**Mục đích**: Tổng quan workflow và cấu trúc project

**Nội dung**:
- Mục đích, scope, prerequisites
- Cấu trúc project và success criteria
- Workflow overview (Mermaid diagram)
- File structure và links đến các file chi tiết

**Khi nào dùng**:
- Hiểu tổng quan workflow
- Đọc trước khi thực thi project

---

### 2. **workflow/workflow-analytics-phases-0-4.md**
**Mục đích**: Chi tiết phases 0-4 (Setup → Business Analysis)

**Nội dung**:
- Phase 0: Setup & Understanding
- Phase 1: Data Ingestion
- Phase 2: Data Quality Check
- Phase 3: EDA & Descriptive Statistics
- Phase 4: Business Analysis (phần 1)

**Khi nào dùng**:
- Khi thực thi các phases đầu tiên
- Cần hướng dẫn chi tiết từng step

---

### 3. **workflow/workflow-analytics-phases-5-8.md**
**Mục đích**: Chi tiết phases 5-8 (Visualization → Quality Review)

**Nội dung**:
- Phase 5: Visualization
- Phase 6: Insights Generation
- Phase 7: Documentation
- Phase 8: Quality Review

**Khi nào dùng**:
- Khi thực thi các phases cuối
- Cần hướng dẫn chi tiết từng step

---

### 4. **workflow/workflow-analytics-error-handling.md**
**Mục đích**: Error handling và troubleshooting

**Nội dung**:
- Common errors & solutions
- Logging & debugging
- Checkpoint system

**Khi nào dùng**:
- Khi gặp lỗi trong quá trình thực thi
- Cần troubleshooting steps

---

### 5. **workflow/workflow-analytics-decision-trees.md**
**Mục đích**: Decision trees cho các quyết định quan trọng

**Nội dung**:
- 10 decision trees
- Forecast method selection
- Validation action
- Chart selection

**Khi nào dùng**:
- Khi cần quyết định dựa trên data
- Cần logic tree cho các scenarios

---

### 6. **workflow/workflow-analytics-configuration.md**
**Mục đích**: Configuration và customization

**Nội dung**:
- workflow_config.yaml template
- Customization options
- Project settings

**Khi nào dùng**:
- Khi cần customize workflow
- Override defaults cho project cụ thể

---

### 7. **workflow/workflow-analytics-examples.md**
**Mục đích**: Examples và case studies

**Nội dung**:
- Real examples
- Case studies
- Integration với Speckit và OpenSpec

**Khi nào dùng**:
- Khi cần reference examples
- Hiểu cách áp dụng workflow

---

### 8. **workflow/workflow-quick-reference.md**
**Mục đích**: Quick reference cho Agent

**Nội dung**:
- Phase checklist
- Decision trees (condensed)
- Common commands
- Success criteria

**Khi nào dùng**:
- Agent đã quen workflow, cần reminder nhanh
- Quick lookup
- Mid-execution reference

---

### 9. **workflow/workflow-config.yaml**
**Mục đích**: Template configuration cho customize workflow

**Nội dung**:
- Project settings
- Data sources
- Analysis thresholds
- Visualization settings
- Validation rules
- Logging config

**Khi nào dùng**:
- Cần customize workflow cho project cụ thể
- Override defaults
- Team standards

**Cách dùng**:
```bash
# Copy to project directory
cp "data analyst vn/workflow/workflow-config.yaml" [project_dir]/

# Modify as needed
# Agent sẽ auto-detect và sử dụng
```

---

## 🚀 Quick Start cho Agent

### Khi User Yêu Cầu Phân Tích Data:

```
1. ✅ User input: [File path] + [Description]
   Example: "Phân tích plan 2026, so sánh 2025 vs 2026"

2. ✅ Agent reads: workflow/workflow-analytics-tong-quan.md
   (hoặc workflow/workflow-quick-reference.md nếu đã quen)

3. ✅ Agent executes: Phase 0 → Phase 8
   - Autonomous (không hỏi từng bước nhỏ)
   - Chỉ hỏi khi có vấn đề critical

4. ✅ Deliverables:
   - Charts (PNG 300 DPI)
   - Insights (Markdown, consistent với charts)
   - Documentation (README, guides)
   - Stats (CSV exports)
```

---

## 📂 Output Structure (v1.1.0)

Sau khi chạy workflow, project sẽ có cấu trúc:

```
[project_name]/
├── code/
│   ├── analysis.py              # ⭐ Business metrics (script)
│   └── analysis.ipynb           # ⭐ Business metrics (notebook - EDITABLE)
├── charts/                      # Business-specific charts (3-5 charts)
│   ├── 01_[chart_name].png
│   ├── 02_[chart_name].png
│   └── ...
├── document/
│   ├── insights.md              # ⭐ CHÍNH (10,000+ words)
│   ├── metrics.json             # Business metrics output
│   ├── summary_by_year.csv
│   └── README.md
└── statics/                     # ⭐ EDA Module (FULL STATISTICS)
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

**Key Points**:
- **All code is EDITABLE** - có thể đọc hiểu, tinh chỉnh khi data thay đổi
- **Dual formats** - notebook (.ipynb) cho interactive, script (.py) cho automated
- **Statics module** - phần thống kê EDA đầy đủ, tách biệt với business analysis
- **Clear separation** - EDA charts vs Business charts

---

## 🎯 Workflow Phases (Summary)

| Phase | Name | Duration | Output |
|-------|------|----------|--------|
| 0 | Setup | 1 min | Project structure |
| 1 | Data Ingestion | 2 min | Loaded dataframes |
| 2 | Quality Check | 3 min | Validated & cleaned data |
| 3 | EDA & Stats | 5 min | 7 charts + CSV stats |
| 4 | Business Analysis | 5 min | Metrics + insights |
| 5 | Visualization | 5 min | Business charts |
| 6 | Insights Generation | 5 min | insights.md (validated) |
| 7 | Documentation | 2 min | README, guides |
| 8 | Quality Review | 2 min | Final validation |

**Total**: ~30 minutes (autonomous)

---

## 📖 Integration với AGENTS.md

File `AGENTS.md` (root project) đã được cập nhật:

```
**ĐỐI VỚI DATA ANALYTICS PROJECT:**
NẾU TAO KÉO FILE DỮ LIỆU VÀO (Excel, CSV, JSON, PDF):
-> ĐỌC NGAY `data analyst vn/workflow/workflow-analytics-tong-quan.md`
-> THỰC THI WORKFLOW TỪ PHASE 0 → PHASE 8
-> KẾT QUẢ CUỐI: Charts + Insights + Documentation (ĐỒNG NHẤT)
```

Agent sẽ tự động trigger workflow khi detect data file.

---

## 💡 Tips cho User

### Khi Cần Phân Tích Mới:

1. **Provide context** (2-3 câu):
   - Mục đích phân tích?
   - Key metrics quan tâm?
   - Timeline?

2. **Provide data file**:
   - Drag & drop vào chat
   - Hoặc cung cấp path

3. **Let Agent work**:
   - Agent sẽ tự thực thi workflow
   - Chỉ hỏi khi cần clarify

4. **Review outputs**:
   - Charts trong `[project]/charts/`
   - Insights trong `[project]/document/insights.md`
   - README trong `[project]/README.md`

### Khi Cần Customize:

1. Copy `workflow/workflow-config.yaml` to project dir
2. Modify settings (CV thresholds, colors, etc.)
3. Agent sẽ auto-detect và override defaults

---

## 🔗 Related Resources

### In This Repo:
- `../AGENTS.md` - Agent rules & triggers
- `../ipynb/total/plan 2026/` - Example project (current)

### External:
- Pandas docs: https://pandas.pydata.org/docs/
- Matplotlib gallery: https://matplotlib.org/stable/gallery/
- Seaborn examples: https://seaborn.pydata.org/examples/

---

## 📝 Version History

**v1.0.0** (2025-11-14):
- Initial workflow playbook
- 8-phase process defined
- Config template created
- Quick reference added

**v1.1.0** (2025-11-14):
- Split WORKFLOW_ANALYTICS.md thành multiple files
- Tối ưu cấu trúc với thư mục workflow/
- Chuẩn hóa tên file (chữ thường, gạch ngang)
- Việt hóa workflow (folder: `data analyst vn/`)
- 7 files chi tiết thay vì 1 file 1700+ dòng

**Future Enhancements**:
- [ ] ML prediction module
- [ ] PowerPoint auto-generation
- [ ] Interactive dashboard (HTML)
- [ ] Multi-language support

---

## 📞 Support

**For Agent Issues**:
- Check workflow/workflow-analytics-error-handling.md
- Review workflow/workflow-analytics-decision-trees.md
- Validate config file

**For User Questions**:
- Read examples in workflow/workflow-analytics-examples.md
- Check outputs in document/
- Review current project: `../ipynb/total/plan 2026/`

---

**Tạo bởi**: Claude Code Assistant
**Ngày**: 2025-11-14
**Mục đích**: Standardize data analytics workflow

🎯 **Ready to analyze!**