# Hướng dẫn OpenSpec cho người mới bắt đầu

## OpenSpec là cái gì?

OpenSpec giúp mày và AI (Claude, Cursor, v.v.) làm việc theo quy trình rõ ràng:
1. Viết spec (đặc tả) - mô tả mày muốn cái gì
2. AI code theo spec đó
3. Không bị "bất ngờ" vì AI đã hiểu rõ mày muốn gì

Thay vì nói "làm app todo đi", mày sẽ có một bản spec chi tiết, AI code đúng y chang.

---

## Cài đặt ban đầu (làm 1 lần duy nhất)

### Bước 1: Cài OpenSpec

```bash
npm install -g @fission-ai/openspec@latest
```

Kiểm tra đã cài chưa:
```bash
openspec --version
```

Nếu thấy số version (vd: 0.13.0) là OK.

---

## Ví dụ thực tế: Tạo App To-Do đơn giản

### Bước 1: Tạo folder project mới

```bash
mkdir todo-app
cd todo-app
```

### Bước 2: Khởi tạo OpenSpec

```bash
openspec init
```

**Sẽ hỏi mày dùng AI tool nào**:
- Nếu dùng Claude Code → chọn "Claude Code"
- Nếu dùng Cursor → chọn "Cursor"
- Nếu dùng cái khác → chọn tương ứng

Sau khi chạy xong, mày sẽ có folder `openspec/` trong project.

### Bước 3: Tạo Change Proposal đầu tiên

**Giờ mở AI assistant (Claude Code/Cursor) và gõ:**

```
Tạo OpenSpec change proposal cho app To-Do đơn giản với:
- Thêm task mới
- Đánh dấu task hoàn thành
- Xóa task
- Giao diện tối giản, chỉ dùng HTML/CSS/JS thuần, không framework
```

**Hoặc nếu AI tool có slash command:**
```
/openspec:proposal Tạo app To-Do đơn giản
```

AI sẽ tạo folder: `openspec/changes/create-todo-app/`

Bên trong có:
- `proposal.md` - Mô tả tổng quan
- `tasks.md` - Checklist việc cần làm
- `specs/todo-app/spec.md` - Đặc tả chi tiết

### Bước 4: Xem lại proposal

```bash
openspec list
```

Mày sẽ thấy:
```
Active Changes:
  create-todo-app (0/8 tasks completed)
```

Xem chi tiết:
```bash
openspec show create-todo-app
```

### Bước 5: Chỉnh sửa spec (nếu cần)

Đọc file `openspec/changes/create-todo-app/specs/todo-app/spec.md`

Nếu thấy thiếu gì hoặc sai, **gõ với AI**:

```
Thêm vào spec:
- Task phải có timestamp khi tạo
- Màu nền phải là trắng
- Font chữ dùng 'IBM Plex Mono'
```

AI sẽ cập nhật file spec.

### Bước 6: Validate spec (kiểm tra format)

```bash
openspec validate create-todo-app
```

Nếu có lỗi format, AI sẽ sửa. Nếu OK, thấy "✓ Valid".

### Bước 7: Bắt đầu implement

**Gõ với AI:**
```
Spec đã OK, bắt đầu implement
```

**Hoặc dùng slash command:**
```
/openspec:apply create-todo-app
```

AI sẽ:
1. Đọc tasks.md
2. Làm từng task một
3. Đánh dấu ✓ khi xong

Mày sẽ thấy file `index.html`, `style.css`, `script.js` được tạo ra.

### Bước 8: Test app

Mở file `index.html` bằng browser, test thử:
- Thêm task → OK?
- Đánh dấu hoàn thành → OK?
- Xóa task → OK?

### Bước 9: Archive change (khi xong)

```bash
openspec archive create-todo-app --yes
```

Hoặc **gõ với AI:**
```
Archive change create-todo-app
```

**Hoặc slash command:**
```
/openspec:archive create-todo-app
```

Change sẽ được chuyển vào `openspec/changes/archive/`.

---

## Kịch bản 2: Nâng cấp app (thêm tính năng mới)

Giờ mày muốn thêm tính năng "lọc task theo trạng thái".

### Bước 1: Tạo change mới

**Gõ với AI:**
```
Tạo OpenSpec change proposal để thêm filter tasks theo:
- All
- Active (chưa hoàn thành)
- Completed (đã hoàn thành)
```

Hoặc:
```
/openspec:proposal Thêm filter tasks
```

### Bước 2: Xem change mới

```bash
openspec list
```

Thấy:
```
Active Changes:
  add-task-filter (0/5 tasks completed)
```

### Bước 3: Review spec

```bash
openspec show add-task-filter
```

Đọc kỹ, nếu OK thì sang bước tiếp.

### Bước 4: Implement

**Gõ với AI:**
```
Implement change add-task-filter
```

Hoặc:
```
/openspec:apply add-task-filter
```

AI sẽ update code có sẵn, thêm phần filter.

### Bước 5: Test lại

Refresh browser, test filter xem hoạt động chưa.

### Bước 6: Archive

```bash
openspec archive add-task-filter --yes
```

---

## Kịch bản 3: Fix lỗi

Giả sử mày phát hiện: "Khi xóa task cuối cùng, app bị crash".

### Bước 1: Tạo change để fix

**Gõ với AI:**
```
Tạo OpenSpec change proposal để fix bug:
- Khi xóa task cuối cùng, app bị crash
- Cần handle trường hợp danh sách rỗng
```

Hoặc:
```
/openspec:proposal Fix bug xóa task cuối cùng
```

### Bước 2: AI sẽ phân tích

AI sẽ:
1. Đọc code hiện tại
2. Tìm nguyên nhân lỗi
3. Viết spec để fix

### Bước 3: Review spec fix

```bash
openspec show fix-delete-last-task
```

Xem AI định fix như thế nào. Nếu đúng thì tiếp.

### Bước 4: Implement fix

```
/openspec:apply fix-delete-last-task
```

### Bước 5: Test fix

Thử xóa task cuối cùng → không crash nữa → OK.

### Bước 6: Archive

```bash
openspec archive fix-delete-last-task --yes
```

---

## Kịch bản 4: Chỉnh sửa giao diện

Mày muốn đổi màu, font, layout.

### Bước 1: Tạo change

**Gõ với AI:**
```
Tạo OpenSpec change proposal để update UI:
- Đổi font sang 'Calibri Light'
- Button bo tròn 8px
- Hover effect màu xám nhạt
- Spacing giữa tasks tăng lên
```

### Bước 2: Implement

```
/openspec:apply update-ui-styling
```

AI sẽ chỉ sửa CSS, không động vào logic.

### Bước 3: Test visual

Refresh browser, xem giao diện có đúng ý không.

Nếu chưa ưng, **gõ tiếp:**
```
Spacing vẫn hẹp quá, tăng thêm 8px nữa
```

AI sẽ adjust.

### Bước 4: Archive khi OK

```bash
openspec archive update-ui-styling --yes
```

---

## Workflow tổng quát (nhớ lòng này)

```
1. Tạo proposal (mô tả mày muốn gì)
   ↓
2. Review spec (đọc kỹ, chỉnh sửa nếu cần)
   ↓
3. Validate (kiểm tra format)
   ↓
4. Implement (AI code)
   ↓
5. Test (mày test thử)
   ↓
6. Archive (xong thì đóng lại)
```

**Repeat cho mỗi tính năng/fix/update.**

---

## Commands thường dùng

### Xem danh sách changes đang active
```bash
openspec list
```

### Xem chi tiết 1 change
```bash
openspec show <tên-change>
```

### Validate format spec
```bash
openspec validate <tên-change>
```

### Archive change đã xong (không cần confirm)
```bash
openspec archive <tên-change> --yes
```

### Xem dashboard tương tác
```bash
openspec view
```

### Update agent instructions (khi đổi AI tool)
```bash
openspec update
```

---

## Tips quan trọng

### 1. Luôn tạo change mới cho mỗi tính năng
Đừng gộp nhiều thứ vào 1 change. Ví dụ:
- ✅ Change 1: Thêm filter
- ✅ Change 2: Thêm dark mode
- ❌ Change 1: Thêm filter + dark mode + fix bug + update UI

### 2. Đọc kỹ spec trước khi implement
Spec là "bản vẽ thiết kế". Nếu spec sai, code sẽ sai.

### 3. Validate trước khi implement
```bash
openspec validate <change>
```
Tránh lỗi format giữa chừng.

### 4. Archive ngay khi xong
Giữ `openspec/changes/` sạch sẽ, chỉ để những change đang làm.

### 5. Dùng slash commands cho nhanh
Thay vì gõ dài dòng:
- `/openspec:proposal <mô tả ngắn>`
- `/openspec:apply <tên-change>`
- `/openspec:archive <tên-change>`

---

## Ví dụ thực tế: Timeline 1 buổi làm việc

**9:00** - Khởi tạo project
```bash
mkdir my-app && cd my-app
openspec init
```

**9:05** - Tạo proposal đầu tiên
```
/openspec:proposal Tạo landing page đơn giản
```

**9:10** - Review spec, chỉnh sửa
```
Thêm vào spec: Hero section với CTA button
```

**9:15** - Implement
```
/openspec:apply create-landing-page
```

**9:30** - Test, thấy thiếu footer
```
/openspec:proposal Thêm footer với social links
```

**9:35** - Implement footer
```
/openspec:apply add-footer
```

**9:45** - Archive cả 2 changes
```bash
openspec archive create-landing-page --yes
openspec archive add-footer --yes
```

**9:50** - Break, uống cafe ☕

---

## Xử lý tình huống thường gặp

### AI tạo spec không đúng ý
**Gõ:**
```
Spec này chưa đúng. Tao muốn [mô tả chi tiết hơn].
Update lại spec.
```

### AI implement sai
**Gõ:**
```
Code này sai. Theo spec thì phải [mô tả đúng].
Fix lại theo đúng spec.
```

### Muốn xem lại spec của change đã archive
```bash
ls openspec/changes/archive/
```
Vào folder tương ứng, đọc file spec.

### Muốn reopen 1 change đã archive
Copy folder từ `archive/` ra `changes/`:
```bash
cp -r openspec/changes/archive/2025-10-23-tên-change openspec/changes/tên-change
```

### Quên tên change
```bash
openspec list
```

---

## Khi nào KHÔNG dùng OpenSpec?

1. **Thử nghiệm nhanh** - Nếu chỉ test 1 ý tưởng 5 phút
2. **Sửa typo đơn giản** - Chỉ sửa 1 từ không cần spec
3. **Refactor code nhỏ** - Đổi tên biến không cần spec

**Dùng OpenSpec khi:**
- Thêm tính năng mới
- Fix bug phức tạp
- Thay đổi logic nghiệp vụ
- Update UI/UX
- Cần document lại sau này

---

## Checklist mỗi khi làm việc

- [ ] `openspec list` - Xem có change nào đang dở không
- [ ] Tạo change mới cho task hiện tại
- [ ] Review spec kỹ
- [ ] `openspec validate` trước khi implement
- [ ] Implement
- [ ] Test kỹ
- [ ] `openspec archive` khi xong

---

## Tóm lại

OpenSpec = Bản thiết kế trước khi xây nhà.

Không có bản vẽ → xây lung tung → sửa mệt.
Có bản vẽ rõ ràng → xây đúng → ít sửa.

**Workflow 3 bước:**
1. **Proposal** - Mày nói mày muốn gì
2. **Implement** - AI code theo spec
3. **Archive** - Xong thì đóng lại

Cứ repeat vòng lặp này, app của mày sẽ phát triển có hệ thống, không bị lộn xộn.

---

**Có thắc mắc gì cứ hỏi. Đừng ngại, tao sẽ giải thích tiếp.**
