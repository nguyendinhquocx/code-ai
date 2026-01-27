---
name: workflow
description: This skill should be used after brainstorming to outline implementation steps before coding. Lists specific TODOs, expected outcomes, and potential issues in a concise CLI-readable format. Bridges the gap between understanding requirements and actual implementation.
description_vi: Dung sau brainstorming de liet ke cac buoc implement truoc khi code. Liet ke TODO cu the, ket qua expected, van de tiem an. Ngan gon, doc CLI hieu ngay.
keywords: [workflow, plan, steps, todo, pre-implement, outline]
keywords_vi: [workflow, ke hoach, cac buoc, viec can lam]
---

# Workflow

Liet ke cac buoc implement sau khi da hieu yeu cau. Ngan gon, cu the, doc CLI hieu ngay.

## When to Use

```
/brainstorming → /workflow → /implement
```

Goi `/workflow` khi:
- Da brainstorm xong, hieu yeu cau
- Muon xem truoc se lam gi
- Can review truoc khi bat tay vao code

## Output Format

```
WORKFLOW: [ten feature]

FILES:
- [file se tao/sua] - [ly do]

STEPS:
1. [Viec cu the]
2. [Viec cu the]
3. [Viec cu the]

RESULT:
- [Ket qua 1 khi xong]
- [Ket qua 2 khi xong]

ISSUES (neu co):
- [Van de tiem an can luu y]

---
OK? (y/n/thao luan them)
```

## Rules

- **Ngan**: Moi step 1 dong, khong giai thich dai
- **Cu the**: "Tao file X" khong phai "Setup infrastructure"
- **Thuc te**: Chi liet ke viec THUC SU can lam
- **Khong ly thuyet**: Khong giai thich tai sao, chi liet ke cai gi

## Example

```
User: [da brainstorm xong tinh nang export CSV]
User: /workflow

AI:
WORKFLOW: Export CSV

FILES:
- src/utils/csv.ts - tao moi, xu ly export
- src/components/ExportButton.tsx - tao moi, UI button
- src/api/export.ts - sua, them endpoint

STEPS:
1. Tao csv.ts voi function convertToCSV(data)
2. Tao ExportButton component voi loading state
3. Them endpoint GET /api/export trong export.ts
4. Wire button -> API -> download file

RESULT:
- Click Export -> download file .csv
- Handle empty data, special characters

ISSUES:
- File lon (>10k rows) co the cham, can stream

---
OK? (y/n/thao luan them)
```

## After Approval

Khi user confirm OK:
- Bat dau implement theo steps
- Hoac user goi `/implement` de AI lam

Khi user muon thao luan:
- Chinh sua workflow theo feedback
- Liet ke lai neu can
