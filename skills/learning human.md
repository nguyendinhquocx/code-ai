# TẠO SKILL MỚI - HƯỚNG DẪN NHANH

## Bước 1: Chuẩn bị

Mở PowerShell, vào thư mục skills:
```powershell
cd D:\pcloud\workspace\code\ai\skills
```

## Bước 2: Tạo skill mới

**Cách 1: Dùng script tự động (khuyến nghị)**

```powershell
python skill-creator/scripts/init_skill.py ten-skill-moi
```

Script sẽ tạo folder `ten-skill-moi/` với template sẵn.

**Cách 2: Tạo thủ công**

```powershell
mkdir ten-skill-moi
cd ten-skill-moi
```

Tạo file `SKILL.md`:
```markdown
---
name: ten-skill-moi
description: Mô tả skill này làm gì. Khi nào thì dùng.
---

# Tên Skill

## Skill này làm gì

Giải thích ngắn gọn.

## Khi nào dùng

- Tình huống 1
- Tình huống 2

## Cách dùng

1. Bước 1
2. Bước 2

## Ví dụ

```bash
# Code ví dụ
```
```

## Bước 3: Viết nội dung

**File bắt buộc:** `SKILL.md`

**Cấu trúc tối thiểu:**
```
ten-skill-moi/
└── SKILL.md
```

**Cấu trúc đầy đủ (nếu cần):**
```
ten-skill-moi/
├── SKILL.md           (bắt buộc)
├── scripts/           (nếu có code Python/Bash)
├── references/        (nếu có docs dài)
└── assets/            (nếu có templates/files)
```

## Bước 4: Validate

```powershell
python skill-creator/scripts/quick_validate.py ten-skill-moi
```

Nếu pass → OK. Nếu lỗi → sửa theo message.

## Bước 5: Test

Copy vào thư mục Claude Code:
```powershell
xcopy ten-skill-moi "$env:USERPROFILE\.claude\skills\ten-skill-moi" /E /I
```

Restart Claude Code, test skill.

## Bước 6: Package (nếu muốn share)

```powershell
python skill-creator/scripts/package_skill.py ten-skill-moi
```

Tạo file `ten-skill-moi.zip` để chia sẻ.

---

## CHÚ Ý QUAN TRỌNG

### SKILL.md phải có:
1. **YAML frontmatter** (3 dấu gạch đầu/cuối)
2. **name** = tên folder
3. **description** = mô tả rõ ràng

### Viết sao cho đúng:
- Dùng **động từ nguyên thể** (Extract, Create, Generate)
- KHÔNG dùng "You should", "This will"
- Ví dụ:
  - ✅ "Extract mermaid diagrams from markdown"
  - ❌ "You should extract diagrams"

### Scripts (nếu có):
- Phải có shebang: `#!/usr/bin/env python3`
- Phải executable: `chmod +x script.py` (Linux/Mac)
- Không có absolute path kiểu `/home/user/...`

---

## VÍ DỤ THỰC TẾ

```powershell
# Tạo skill mới tên "excel-cleaner"
cd D:\pcloud\workspace\code\ai\skills
python skill-creator/scripts/init_skill.py excel-cleaner

# Sửa file SKILL.md
notepad excel-cleaner\SKILL.md

# Validate
python skill-creator/scripts/quick_validate.py excel-cleaner

# Test
xcopy excel-cleaner "$env:USERPROFILE\.claude\skills\excel-cleaner" /E /I

# Package
python skill-creator/scripts/package_skill.py excel-cleaner
```

---

## QUY TẮC VIẾT SKILL.MD

### 1. YAML Frontmatter

```yaml
---
name: skill-name
description: Clear description with activation triggers. This skill should be used when...
---
```

**Lưu ý:**
- `name` phải trùng với tên folder
- `description` phải nói rõ WHEN (khi nào dùng), không chỉ WHAT (làm gì)

### 2. Cấu trúc nội dung

```markdown
# Skill Title

## What This Skill Does

One paragraph explaining the core functionality.

## When to Use

- Scenario 1
- Scenario 2
- Scenario 3

## How to Use

Step-by-step instructions using imperative form:
1. Do this
2. Then do that
3. Finally do this

## Examples

```bash
# Concrete example
command --option value
```

## Requirements (if any)

- Python 3.8+
- Tool X: `install command`
```

### 3. Progressive Disclosure

**SKILL.md: Ngắn gọn (100-500 dòng)**
- Core instructions
- Basic examples
- Essential info

**references/: Chi tiết**
- API docs
- Advanced usage
- Troubleshooting

**scripts/: Executable code**
- Helper scripts
- Automation tools

**assets/: Resources**
- Templates
- Config files
- Example data

### 4. Ngôn ngữ

**Dùng imperative/infinitive form:**
- ✅ Extract files from archive
- ✅ Create presentation from markdown
- ✅ Convert images to PDF
- ❌ You should extract files
- ❌ This will create a presentation
- ❌ The skill converts images

**Third-person trong description:**
- ✅ This skill extracts diagrams when...
- ✅ Use this skill when you need to...
- ❌ I will extract diagrams
- ❌ We create presentations

---

## TROUBLESHOOTING

### Lỗi: Invalid YAML frontmatter
→ Check dấu `---` đầu và cuối
→ Check indentation (dùng spaces, không dùng tabs)

### Lỗi: Name mismatch
→ `name` trong YAML phải = tên folder

### Lỗi: Missing description
→ Phải có field `description` trong YAML

### Lỗi: Absolute path detected
→ Không dùng `/home/user/` hay `C:\Users\...`
→ Dùng relative path hoặc `~/`

### Skill không trigger
→ Check `description` có đủ rõ ràng không
→ Thêm keywords vào `description`

---

## CHECKLIST TRƯỚC KHI SUBMIT

- [ ] SKILL.md có YAML frontmatter
- [ ] `name` = tên folder
- [ ] `description` rõ ràng, có activation triggers
- [ ] Nội dung dùng imperative form
- [ ] Không có absolute paths
- [ ] Scripts có shebang và executable
- [ ] Validate pass: `quick_validate.py`
- [ ] Đã test trong Claude Code
- [ ] Package thành công: `package_skill.py`

---

## TÀI LIỆU THAM KHẢO

### Skills mẫu tốt:
- `skill-creator/` - Meta-skill, structure chuẩn
- `mermaid-tools/` - Có scripts + references
- `ppt-creator/` - Có assets + templates
- `github-ops/` - API integration tốt

### Docs chính thức:
- `CLAUDE.md` - Hướng dẫn cho Claude
- `CONTRIBUTING.md` - Contribution guidelines
- Anthropic best practices: https://docs.claude.com/en/docs/agents-and-tools/agent-skills/best-practices.md
