# HƯỚNG DẪN AGENT TẠO SKILL MỚI

File này hướng dẫn Agent (Claude) tạo skill mới khi user yêu cầu.

---

## KHI NÀO DÙNG

User nói:
- "Tạo skill X"
- "Làm skill Y"
- "Viết skill Z cho tao"

→ Follow workflow này.

---

## WORKFLOW TẠO SKILL

### Bước 1: Hỏi user làm rõ

**Hỏi ngắn gọn:**
1. Skill này làm gì? (1 câu)
2. Khi nào dùng? (2-3 tình huống)
3. Cần scripts/templates không?

**Ví dụ:**
```
User: Tạo skill convert markdown sang PDF
Agent: OK. Vài câu hỏi:
1. Input: file .md hay folder?
2. Output: 1 PDF hay nhiều?
3. Cần config fonts/styles không?
```

### Bước 2: Tạo cấu trúc folder

**Tối thiểu:**
```
skill-name/
└── SKILL.md
```

**Đầy đủ (nếu cần):**
```
skill-name/
├── SKILL.md
├── scripts/
│   └── main.py
├── references/
│   └── api_docs.md
└── assets/
    └── template.html
```

**Quy tắc đặt tên folder:**
- Dùng kebab-case: `markdown-to-pdf`
- Không viết hoa, không underscore
- Ngắn gọn, rõ nghĩa

### Bước 3: Viết SKILL.md

**Template bắt buộc:**

```markdown
---
name: skill-name
description: [Skill này làm gì]. Use this skill when [tình huống 1], [tình huống 2], or [tình huống 3].
---

# [Skill Title]

## What This Skill Does

[1 đoạn giải thích ngắn gọn skill làm gì]

## When to Use

Use this skill when you need to:
- [Tình huống 1]
- [Tình huống 2]
- [Tình huống 3]

## How It Works

1. [Bước 1 - dùng động từ nguyên thể]
2. [Bước 2]
3. [Bước 3]

## Example Usage

Ask Claude Code:

```
"[Ví dụ câu lệnh user có thể nói]"

"[Ví dụ khác]"
```

## Bundled Resources

[Nếu có scripts/references/assets, list ra đây]

- `scripts/main.py`: [Mô tả ngắn]
- `references/api_docs.md`: [Mô tả ngắn]

## Requirements

[Nếu cần tool bên ngoài]

- Python 3.8+
- Tool X: `install command`
```

**QUY TẮC VIẾT:**

1. **YAML frontmatter:**
   - `name` = tên folder (kebab-case)
   - `description` phải có "Use this skill when..."

2. **Ngôn ngữ:**
   - Dùng imperative: "Extract", "Create", "Convert"
   - KHÔNG dùng: "You should", "This will", "I will"
   - Third-person trong description: "This skill extracts..."

3. **Độ dài:**
   - SKILL.md: 100-500 dòng
   - Chi tiết → đưa vào `references/`

### Bước 4: Tạo scripts (nếu cần)

**Khi nào cần scripts:**
- Có logic phức tạp (extract, parse, convert)
- Cần automation
- Gọi API bên ngoài

**Template script Python:**

```python
#!/usr/bin/env python3
"""
Script description.

Usage:
    python script.py input output
"""

import sys
from pathlib import Path

def main(input_path: str, output_path: str):
    """Main function."""
    # Logic here
    pass

if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("Usage: python script.py input output")
        sys.exit(1)

    main(sys.argv[1], sys.argv[2])
```

**Quy tắc scripts:**
- Shebang: `#!/usr/bin/env python3`
- Không absolute paths
- Có docstring
- Error handling rõ ràng

### Bước 5: Tạo references (nếu cần)

**Khi nào cần references:**
- Có API docs dài
- Có best practices
- Có troubleshooting guide

**Ví dụ:**
```
references/
├── api_reference.md
├── best_practices.md
└── troubleshooting.md
```

### Bước 6: Tạo assets (nếu cần)

**Khi nào cần assets:**
- Có templates (HTML, CSS, config files)
- Có example data
- Có fonts/images

**Ví dụ:**
```
assets/
├── templates/
│   └── report.html
└── examples/
    └── sample.json
```

### Bước 7: Validate

**Chạy validate script:**
```bash
python skill-creator/scripts/quick_validate.py skill-name
```

**Check list tự động:**
- [ ] SKILL.md tồn tại
- [ ] YAML frontmatter valid
- [ ] name = folder name
- [ ] description không rỗng
- [ ] Không có absolute paths
- [ ] Scripts có shebang (nếu có)

**Nếu fail:** Sửa lỗi theo message, validate lại.

### Bước 8: Output cho user

**In ra:**
1. Đường dẫn skill đã tạo
2. Cấu trúc files
3. Cách test
4. Next steps

**Template output:**

```
✓ Đã tạo skill: skill-name

Cấu trúc:
skill-name/
├── SKILL.md
├── scripts/
│   └── main.py
└── references/
    └── api_docs.md

Test skill:
1. Copy vào Claude Code:
   xcopy skill-name "$env:USERPROFILE\.claude\skills\skill-name" /E /I

2. Restart Claude Code

3. Thử:
   "[Ví dụ câu lệnh]"

Validate:
python skill-creator/scripts/quick_validate.py skill-name

Package (nếu muốn share):
python skill-creator/scripts/package_skill.py skill-name
```

---

## QUY TẮC QUAN TRỌNG

### 1. Tên file/folder

- Folder: `kebab-case` (markdown-to-pdf)
- Files: `snake_case.py` hoặc `kebab-case.md`
- SKILL.md: PHẢI viết hoa chính xác

### 2. YAML frontmatter

**Bắt buộc:**
```yaml
---
name: skill-name
description: Clear description. Use this skill when...
---
```

**Không được:**
- Thêm version (version tracking ở marketplace.json)
- Thêm author/date
- Thêm fields tùy ý

### 3. Paths

**KHÔNG ĐƯỢC:**
- `/home/username/`
- `C:\Users\username\`
- `/Users/username/`
- Bất kỳ absolute path nào

**ĐƯỢC:**
- Relative paths: `./scripts/main.py`
- Standard placeholders: `~/` (nếu cần)

### 4. Dependencies

**Nếu skill cần tool bên ngoài:**
- List rõ trong Requirements section
- Có install command
- Có version minimum

**Ví dụ:**
```markdown
## Requirements

- Python 3.8+
- FFmpeg: `sudo apt install ffmpeg` (Linux) hoặc `brew install ffmpeg` (macOS)
- yt-dlp: `pip install yt-dlp`
```

### 5. Security

**KHÔNG ĐƯỢC chứa:**
- API keys
- Passwords
- Personal info
- Company names/product names (trừ khi public)

**Nếu cần credentials:**
- Dùng environment variables
- Hướng dẫn user set trong docs

---

## VÍ DỤ THỰC TẾ

### Ví dụ 1: Simple skill (chỉ có SKILL.md)

**User:** Tạo skill convert JSON sang YAML

**Agent actions:**
1. Tạo folder `json-to-yaml/`
2. Viết `SKILL.md`:
   - name: json-to-yaml
   - description: Convert JSON files to YAML format. Use this skill when...
   - Sections: What, When, How, Examples
3. Validate
4. Output path + usage

### Ví dụ 2: Skill với script

**User:** Tạo skill extract images từ PDF

**Agent actions:**
1. Tạo folder `pdf-image-extractor/`
2. Viết `SKILL.md`
3. Tạo `scripts/extract_images.py`:
   - Shebang
   - Import PyMuPDF
   - Main logic
4. Tạo `references/requirements.md` (list PyMuPDF install)
5. Validate
6. Output path + usage + requirements

### Ví dụ 3: Skill với templates

**User:** Tạo skill generate HTML report

**Agent actions:**
1. Tạo folder `html-report-generator/`
2. Viết `SKILL.md`
3. Tạo `scripts/generate_report.py`
4. Tạo `assets/templates/report.html` (template HTML)
5. Tạo `references/customization.md` (hướng dẫn custom template)
6. Validate
7. Output path + usage

---

## TROUBLESHOOTING

### Agent gặp lỗi validate

**Lỗi: Invalid YAML**
→ Check `---` đầu/cuối
→ Check indentation (spaces only, no tabs)

**Lỗi: Name mismatch**
→ `name` trong YAML ≠ folder name
→ Sửa cho khớp

**Lỗi: Missing description**
→ Thêm field `description` vào YAML

**Lỗi: Absolute path detected**
→ Tìm và sửa paths thành relative

### User không hiểu skill

**Nguyên nhân:**
- Description quá mơ hồ
- Thiếu examples
- Thiếu activation triggers

**Fix:**
- Viết lại description với "Use this skill when..."
- Thêm 2-3 ví dụ cụ thể
- Thêm scenarios rõ ràng

### Skill không trigger

**Nguyên nhân:**
- Description thiếu keywords
- User không biết cách trigger

**Fix:**
- Thêm keywords vào description
- Thêm Example Usage section với câu lệnh mẫu

---

## CHECKLIST TRƯỚC KHI SUBMIT

Trước khi output cho user, check:

- [ ] Folder tên đúng (kebab-case)
- [ ] SKILL.md tồn tại
- [ ] YAML frontmatter valid
- [ ] name = folder name
- [ ] description có "Use this skill when..."
- [ ] Nội dung dùng imperative form
- [ ] Không có absolute paths
- [ ] Không có sensitive info
- [ ] Scripts có shebang (nếu có)
- [ ] Requirements listed (nếu có dependencies)
- [ ] Validate pass
- [ ] Output message đầy đủ

---

## TEMPLATE RESPONSE

Khi user yêu cầu tạo skill, response theo format:

```
Tao sẽ tạo skill [tên-skill] với [mô tả ngắn].

[Nếu cần clarify, hỏi 2-3 câu]

[Tạo files...]

✓ Đã tạo skill: [tên-skill]

Cấu trúc:
[tree structure]

Skill này:
- [Feature 1]
- [Feature 2]

Test:
[Hướng dẫn copy + restart + thử]

Mày thử xem, có bug thì báo tao sửa.
```

**Tone:** Giữ nguyên style mày-tao, không formal, ngắn gọn.

---

## TÀI LIỆU THAM KHẢO

**Skills mẫu tốt để học:**
- `skill-creator/` - Meta-skill, cấu trúc chuẩn nhất
- `mermaid-tools/` - Có scripts + references balanced
- `github-ops/` - API integration tốt
- `ppt-creator/` - Assets + templates đầy đủ

**Files quan trọng:**
- `CLAUDE.md` - Hướng dẫn toàn bộ repo
- `CONTRIBUTING.md` - Standards
- `skill-creator/scripts/quick_validate.py` - Validation logic
