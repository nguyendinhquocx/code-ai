# Data Analytics Workflow - Examples

**File này**: Examples và case studies
**Liên kết**: [`workflow-analytics-tong-quan.md`](workflow-analytics-tong-quan.md)


---

## 📖 EXAMPLES

### Example 1: Plan 2026 Analysis (Current Project)

**Input**:
```
User: "Tao có file excel plan 2026, cần phân tích doanh thu 5 kênh so sánh 2025 vs 2026"
File: excel/total/plan 2026/data.xlsx
```

**Agent Execution**:
```
Phase 0: ✅ Understood - Financial analysis, 5 channels, YoY comparison
Phase 1: ✅ Loaded 5 sheets from Excel
Phase 2: ✅ Quality check passed (minor missing values auto-filled)
Phase 3: ✅ EDA completed - 7 charts generated
         - Key finding: REF CV = 60% (high risk)
Phase 4: ✅ Business metrics calculated
         - Growth contribution: REF 38%, PHI 27%
Phase 5: ✅ 12 analysis charts generated
Phase 6: ✅ Insights written (cross-validated with data)
Phase 7: ✅ Documentation complete
Phase 8: ✅ All quality checks passed

Output:
- 19 charts (7 EDA + 12 analysis)
- insights.md with 8 sections
- 5 CSV files with stats
- README.md
```

### Example 2: Marketing Campaign Analysis (Hypothetical)

**Input**:
```
User: "Phân tích hiệu quả campaigns Q3, có data conversion và CAC"
File: marketing_q3.csv
```

**Agent Execution**:
```
Phase 0: ✅ Detected: Marketing analysis
Phase 1: ✅ Loaded CSV (3000 rows)
Phase 2: ✅ Quality OK
Phase 3: ✅ EDA done - found high variance in CAC
Phase 4: ✅ Calculated: Conversion rate, CAC, LTV, ROI
         - Decision: Focus on Channel A (best ROI)
Phase 5: ✅ Charts: Funnel, CAC trend, ROI comparison
Phase 6: ✅ Insights: Recommend reallocate 30% budget to Channel A
Phase 7: ✅ Docs complete
Phase 8: ✅ Passed

Output:
- Actionable recommendation with data support
```

### Example 3: Operations Efficiency Analysis (Hypothetical)

**Input**:
```
User: "Phân tích hiệu suất production line, cần identify bottlenecks"
File: operations_data.xlsx
```

**Agent Execution**:
```
Phase 0: ✅ Detected: Operations analysis
Phase 1: ✅ Loaded 3 sheets: production, downtime, quality
Phase 2: ✅ Quality OK (minor missing values filled)
Phase 3: ✅ EDA done - identified patterns in downtime
Phase 4: ✅ Calculated: OEE, throughput, bottleneck metrics
         - Key finding: Line 3 bottleneck at 60% capacity
Phase 5: ✅ Charts: Efficiency trend, bottleneck analysis, utilization
Phase 6: ✅ Insights: Recommend Line 3 upgrade + schedule optimization
Phase 7: ✅ Docs complete
Phase 8: ✅ Passed

Output:
- Efficiency improvement roadmap with ROI calculations
```

---

## 🔗 INTEGRATION

### With Speckit

If using Speckit workflow:

```bash
# Create new analysis spec
/speckit.specify

# Template will ask:
# - Analysis objective
# - Data sources
# - Expected outputs

# Then auto-generate workflow based on this playbook
```

### With OpenSpec

For major changes to workflow:

```bash
# Propose workflow improvement
/openspec:proposal

# Example: Add ML prediction step
# → Goes through review → Approved → Integrated
```

---

## 🎯 SUCCESS METRICS

### For Agent

**Efficiency**:
- [ ] Workflow completed in < 30 minutes (for typical dataset)
- [ ] < 3 user questions needed
- [ ] Zero manual interventions for standard cases

**Quality**:
- [ ] 100% consistency between insights ↔ charts ↔ data
- [ ] All validation checks passed
- [ ] Insights actionable (not just descriptive)

**Flexibility**:
- [ ] Works with different data formats (Excel, CSV, JSON)
- [ ] Adapts to different project types (Financial, Marketing, Ops)
- [ ] Handles edge cases gracefully

### For User

**Value**:
- [ ] Clear, actionable insights
- [ ] Professional charts ready for presentation
- [ ] Comprehensive documentation

**Usability**:
- [ ] Minimal input required from user
- [ ] Easy to understand outputs
- [ ] Can reproduce/modify analysis

---

## 🔄 VERSION HISTORY

**v1.0.0** (2025-11-14):
- Initial playbook
- Phases 0-8 defined
- Decision trees included
- Examples provided

**Future Enhancements**:
- [ ] Add ML prediction module (optional)
- [ ] PowerPoint auto-generation
- [ ] Interactive dashboard (HTML)
- [ ] API integration for live data
- [ ] Multi-language support

---

## 📞 SUPPORT

**For Agent Issues**:
- Check error handling section
- Review decision trees
- Validate configuration

**For User Questions**:
- Read examples section
- Check outputs in document/
- Review charts guide

---

## 🔗 LIÊN KẾT VỚI CÁC FILE KHÁC

- **Tổng quan**: [`workflow-analytics-tong-quan.md`](workflow-analytics-tong-quan.md)
- **Phases 0-4**: [`workflow-analytics-phases-0-4.md`](workflow-analytics-phases-0-4.md)
- **Phases 5-8**: [`workflow-analytics-phases-5-8.md`](workflow-analytics-phases-5-8.md)
- **Error Handling**: [`workflow-analytics-error-handling.md`](workflow-analytics-error-handling.md)
- **Decision Trees**: [`workflow-analytics-decision-trees.md`](workflow-analytics-decision-trees.md)
- **Configuration**: [`workflow-analytics-configuration.md`](workflow-analytics-configuration.md)

---

**Tạo bởi**: Claude Code Assistant
**Ngày**: 2025-11-14
**Mục đích**: Standardize analytics workflow từ raw data → insights

🎉 **Chúc phân tích hiệu quả!**