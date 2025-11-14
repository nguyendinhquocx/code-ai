# Data Analyst Workflows

**Mục đích**: Chứa workflows, templates, và configs cho data analytics projects

---

## 📚 Files trong Thư Mục Này

### 1. **WORKFLOW_ANALYTICS.md** ⭐ CHÍNH
**Kích thước**: ~45 KB
**Version**: 1.1.0
**Mục đích**: Playbook hoàn chỉnh cho Agent AI để thực thi phân tích dữ liệu

**Nội dung**:
- 8 Phases (Setup → Quality Review)
- **NEW**: Step 3.0 - Tạo Statics Module Structure
- **NEW**: Step 3.1 - Tạo EDA Code Files (notebook + script)
- **NEW**: Step 4.0 - Tạo Business Analysis Code Files (notebook + script)
- Decision trees
- Validation gates
- Code templates (EDITABLE)
- Error handling
- Examples
- Troubleshooting

**Key Updates v1.1.0**:
- Luôn tạo code EDITABLE (notebook + script)
- Statics module đầy đủ (eda.ipynb + generate_charts.py + README)
- Business code đầy đủ (analysis.ipynb + analysis.py)
- 7 standard EDA charts + 3-5 business charts

**Khi nào dùng**:
- Agent nhận yêu cầu phân tích data
- Cần hướng dẫn từng bước chi tiết
- First time làm analytics workflow

---

### 2. **WORKFLOW_QUICK_REFERENCE.md**
**Kích thước**: ~6 KB
**Mục đích**: Cheat sheet nhanh, không cần đọc lại 34KB playbook

**Nội dung**:
- Phase checklist
- Decision trees (condensed)
- Common commands
- When to ask user
- Success criteria

**Khi nào dùng**:
- Agent đã quen workflow, cần reminder nhanh
- Quick lookup
- Mid-execution reference

---

### 3. **workflow_config.yaml**
**Kích thước**: ~12 KB
**Mục đích**: Template configuration cho customize workflow

**Nội dung**:
- Project settings
- Data sources
- Analysis thresholds (CV, outliers, etc.)
- Visualization settings (colors, fonts, DPI)
- Validation rules
- Logging config
- Integration settings

**Khi nào dùng**:
- Cần customize workflow cho project cụ thể
- Override defaults
- Team standards

**Cách dùng**:
```bash
# Copy to project directory
cp "data analyst en/workflow_config.yaml" [project_dir]/

# Modify as needed
# Agent sẽ auto-detect và sử dụng
```

---

## 🚀 Quick Start cho Agent

### Khi User Yêu Cầu Phân Tích Data:

```
1. ✅ User input: [File path] + [Description]
   Example: "Phân tích plan 2026, so sánh 2025 vs 2026"

2. ✅ Agent reads: WORKFLOW_ANALYTICS.md
   (hoặc WORKFLOW_QUICK_REFERENCE.md nếu đã quen)

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
-> ĐỌC NGAY `data analyst en/WORKFLOW_ANALYTICS.md`
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

1. Copy `workflow_config.yaml` to project dir
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

**v1.1.0** (2025-11-14):
- ✅ Added: Step 3.0 - Tạo Statics Module Structure
- ✅ Added: Step 3.1 - Tạo EDA Code Files (notebook + script)
- ✅ Added: Step 4.0 - Tạo Business Analysis Code Files (notebook + script)
- ✅ Enhanced: Project structure với statics module đầy đủ
- ✅ Enhanced: Success criteria bao gồm code editable requirements
- ✅ Emphasis: ALL code MUST be EDITABLE

**v1.0.0** (2025-11-14):
- Initial workflow playbook
- 8-phase process defined
- Config template created
- Quick reference added

**Future Enhancements**:
- [ ] ML prediction module
- [ ] PowerPoint auto-generation
- [ ] Interactive dashboard (HTML)
- [ ] Multi-language support
- [ ] Template library (reusable notebooks)

---

## 📞 Support

**For Agent Issues**:
- Check WORKFLOW_ANALYTICS.md → Error Handling section
- Review decision trees
- Validate config file

**For User Questions**:
- Read examples in WORKFLOW_ANALYTICS.md
- Check output structure above
- Review current project: `../ipynb/total/plan 2026/`

---

**Tạo bởi**: Claude Code Assistant
**Ngày**: 2025-11-14
**Mục đích**: Standardize data analytics workflow

🎯 **Ready to analyze!**
