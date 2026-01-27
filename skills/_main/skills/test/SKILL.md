---
name: test
description: This skill should be used immediately after implementing code to verify it works. Automatically detects context from conversation or task files, executes code when possible, reviews logic when not. Lightweight alternative to formal QA - no reports, no tracking files, just quick verification.
description_vi: Dung ngay sau khi implement code de verify no chay dung. Tu dong hieu context tu conversation hoac task files, chay code neu duoc, review logic neu khong. Khong formal report, khong tracking files, chi verify nhanh.
keywords: [test, verify, quick-test, validate, check, run]
keywords_vi: [test, kiem tra, chay thu, xac nhan]
---

# Quick Test

Verify code ngay sau khi implement. Khong formal, khong report, chi can biet: chay duoc khong, loi gi.

## When to Use

Goi `/quick-test` khi:
- Vua implement xong feature
- Vua sua bug
- Vua refactor code
- Muon verify truoc khi move on

## How It Works

### Step 1: Detect Context

Xac dinh code can test tu:

1. **Conversation hien tai** - code vua viet/thao luan trong chat
2. **Task file** - neu dang lam tu task list, test cac task vua complete
3. **User chi dinh** - neu user specify file/function cu the

Thu tu uu tien: User chi dinh > Task vua lam > Code trong conversation

### Step 2: Identify What to Test

Liet ke ngan gon:
- Function/feature nao can test
- Input/output expected
- Edge cases quan trong (neu co)

### Step 3: Execute or Review

**Neu code chay duoc (script, CLI, API, function co the invoke):**

```
Chay code truc tiep voi test inputs:
1. Happy path - input binh thuong
2. Edge cases - empty, null, boundary values
3. Error cases - invalid input

Bao cao ket qua thuc te vs expected.
```

**Neu code khong chay duoc (library code, UI component, code can integration):**

```
Review logic:
1. Doc code flow tu tren xuong
2. Tim logic errors, off-by-one, null checks thieu
3. Tim edge cases chua handle
4. Check error handling
```

### Step 4: Report (Ngan gon)

Format:

```
QUICK TEST: [feature name]

Tested:
- [x] Happy path: [PASS/FAIL - chi tiet neu fail]
- [x] Edge case 1: [PASS/FAIL]
- [ ] Edge case 2: [SKIP - ly do]

Issues found:
- [file:line] Mo ta van de

Verdict: OK / CO LOI CAN FIX
```

Khong can formal report. Chi can biet pass hay fail.

## Examples

### Example 1: Vua code xong function

```
User: [vua code xong function exportCSV]
User: /quick-test

AI:
QUICK TEST: exportCSV

Tested:
- [x] Export 10 rows: PASS
- [x] Export empty array: PASS
- [x] Special chars (comma, quote): FAIL - output bi corrupt

Issues:
- utils.ts:45 - Thieu escape quotes trong CSV

Verdict: CO LOI CAN FIX
```

### Example 2: Implement tu task file

```
User: [vua implement 3 tasks tu tasks.md]
User: /quick-test

AI:
QUICK TEST: 3 features from tasks.md

1. Login validation
   - [x] Valid credentials: PASS
   - [x] Wrong password: PASS
   - [x] Empty fields: PASS

2. Password reset
   - [x] Send email: PASS
   - [x] Invalid email: PASS

3. Session timeout
   - [x] Timeout after 30min: PASS
   - [ ] Token refresh: SKIP - can manual test

Verdict: OK
```

### Example 3: Code khong chay duoc

```
User: [vua viet React component]
User: /quick-test

AI:
QUICK TEST: UserProfile component (logic review)

Reviewed:
- [x] Props handling: OK
- [x] State management: OK
- [ ] Error boundary: MISSING - component crash neu API fail

Issues:
- UserProfile.tsx:23 - Thieu null check cho user.avatar
- UserProfile.tsx:41 - useEffect missing dependency

Verdict: CO LOI CAN FIX
```

## Key Principles

- **Nhanh** - Khong over-engineer test cases
- **Thuc te** - Chay code that, khong gia dinh
- **Ngan gon** - Report chi co thong tin can thiet
- **Lien quan** - Chi test code vua lam, khong test ca project
