# Data Analytics Workflow - Error Handling

**File này**: Error handling và troubleshooting
**Liên kết**: [`workflow-analytics-tong-quan.md`](workflow-analytics-tong-quan.md)


---

## 🚨 ERROR HANDLING

### Common Errors & Solutions

#### Error 1: Data Load Failed
```
Symptoms: pd.read_excel() fails
Causes:
  - File not found
  - Corrupted file
  - Wrong encoding

Solutions:
1. Check file path exists
2. Try different encodings
3. Ask user for correct file
```

#### Error 2: Missing Values > 50%
```
Symptoms: validation_report shows high missing %
Causes:
  - Incomplete data
  - Wrong sheet selected

Solutions:
1. Ask user: "Is this expected?"
2. If yes: Proceed with caution
3. If no: Request complete data
```

#### Error 3: Charts Not Generated
```
Symptoms: generate_charts.py fails
Causes:
  - Missing dependencies
  - Data shape mismatch
  - Memory error

Solutions:
1. Check dependencies installed
2. Validate data shape
3. Reduce chart complexity
```

#### Error 4: Inconsistent Insights
```
Symptoms: validate_insights_consistency() fails
Causes:
  - Manual edits to insights.md
  - Charts regenerated but insights not updated

Solutions:
1. Identify mismatch
2. Regenerate insights from data
3. Re-validate
```

### Logging & Debugging

**Log Levels**:
```python
import logging

# Setup
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s',
    handlers=[
        logging.FileHandler(f'{project_dir}/workflow.log'),
        logging.StreamHandler()
    ]
)

# Usage
logging.info("✅ Data loaded successfully")
logging.warning("⚠️ High missing values in column X")
logging.error("❌ Chart generation failed")
logging.debug("🔍 DataFrame shape: (24, 10)")
```

**Checkpoint System**:
```python
# Save progress after each phase
checkpoints = {
    'phase_0_setup': False,
    'phase_1_ingestion': False,
    'phase_2_quality': False,
    'phase_3_eda': False,
    'phase_4_analysis': False,
    'phase_5_visualization': False,
    'phase_6_insights': False,
    'phase_7_documentation': False
}

def save_checkpoint(phase, status=True):
    checkpoints[phase] = status
    with open(f'{project_dir}/.checkpoints.json', 'w') as f:
        json.dump(checkpoints, f)

# Resume from checkpoint
def resume_from_checkpoint():
    if os.path.exists(f'{project_dir}/.checkpoints.json'):
        with open(f'{project_dir}/.checkpoints.json') as f:
            return json.load(f)
    return checkpoints
```

---

## 🔗 LIÊN KẾT VỚI CÁC FILE KHÁC

- **Tổng quan**: [`workflow-analytics-tong-quan.md`](workflow-analytics-tong-quan.md)
- **Phases 0-4**: [`workflow-analytics-phases-0-4.md`](workflow-analytics-phases-0-4.md)
- **Phases 5-8**: [`workflow-analytics-phases-5-8.md`](workflow-analytics-phases-5-8.md)
- **Decision Trees**: [`workflow-analytics-decision-trees.md`](workflow-analytics-decision-trees.md)
- **Configuration**: [`workflow-analytics-configuration.md`](workflow-analytics-configuration.md)
- **Examples**: [`workflow-analytics-examples.md`](workflow-analytics-examples.md)