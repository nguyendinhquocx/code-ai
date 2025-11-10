# Quickstart: Tối ưu Giao diện TODO App theo Triết lý Tối giản

**Feature**: UI Minimalism Polish
**Branch**: `002-ui-minimalism-polish`
**Ngày**: 2025-10-25

## Tóm tắt

Feature này refactor giao diện TODO app để đạt triết lý tối giản: loại bỏ borders không cần thiết, hover states tinh tế, custom SVG icons cho checkboxes, và modal streamlined. **Pure CSS refactoring** với minimal JavaScript changes.

## Tech Stack

**Không có thay đổi** từ 001-todo-list-app:
- JavaScript ES2022
- Vite 5.x (dev + build)
- Vitest 1.x (testing)
- Zero production dependencies

**New**: Inline SVG icons (không cần library)

## Development Setup

### Prerequisites

Đã có từ feature 001:
- Node.js 18+ và npm
- Modern browser (Chrome 90+, Firefox 88+, Safari 14+)
- Git

### Quick Start

```bash
# Checkout feature branch
git checkout 002-ui-minimalism-polish

# Dependencies đã installed (không có mới)
# Nếu chưa: npm install

# Start dev server
npm run dev
# → http://localhost:5173

# Run tests (phải pass tất cả 94 tests hiện có)
npm test

# Build production
npm run build
```

## Cấu trúc Files

### Files Sẽ Modify

```text
src/styles/
├── components.css    # MAJOR REFACTOR - remove borders, add hover states
├── main.css          # Minor updates - input focus states
└── theme.css         # Possible variable updates

src/modules/
└── ui.js             # Modify renderTodoItem() cho custom checkboxes

index.html            # Remove/hide buttons (submit, cancel, close)
```

### Files KHÔNG Modify

```text
src/modules/
├── todos.js          # Business logic giữ nguyên
└── storage.js        # Persistence giữ nguyên

src/utils/
├── validators.js     # Validation giữ nguyên
└── dom.js            # Có thể add SVG helper, nhưng không modify existing
```

## Design Philosophy

### UI Minimalism Principles

**Bỏ Elements Không Cần Thiết**:
- ❌ Header border-bottom
- ❌ Input borders (thay bằng hover background)
- ❌ Todo item borders
- ❌ Nút "Thêm" (dùng Enter)
- ❌ Modal close button (×)
- ❌ Modal cancel button
- ❌ "Chưa có subtask" empty state text

**Thêm Subtle Interactions**:
- ✅ Hover background (xám nhẹ) cho todos
- ✅ Hide/show delete buttons on hover
- ✅ Custom SVG checkboxes (circle + checkmark)
- ✅ Underline input trong modal (thay vì bordered)

**Colors (Unchanged)**:
- White (#FFFFFF)
- Black (#000000)
- Light Gray (#F5F5F5 - #E5E5E5)

## Implementation Phases

### Phase 1: CSS Refactoring (P1)

**Header & Structure**:
```css
/* Remove border */
.app-header {
  border-bottom: none; /* was: 1px solid */
}

/* Completed section */
.completed-toggle {
  border: none;
  background: transparent;
}
```

**Input Form**:
```css
/* Borderless input với hover */
.todo-input {
  border: none;
  background: transparent;
  border-radius: 8px;
  transition: background 150ms;
}

.todo-input:hover,
.todo-input:focus {
  background: var(--color-gray-50);
}

/* Hide submit button */
.add-todo-form button[type="submit"] {
  display: none;
}
```

**Todo Items**:
```css
/* Remove borders */
.todo-item {
  border: none;
  background: transparent;
}

.todo-item:hover {
  background: var(--color-gray-50);
}

/* Hide delete buttons */
.todo-actions {
  opacity: 0;
  transition: opacity 150ms;
}

.todo-item:hover .todo-actions {
  opacity: 1;
}
```

### Phase 2: Custom Checkboxes (P1)

**SVG Icons**:
```javascript
// src/modules/ui.js - Add helper function

function renderCheckboxIcon(checked) {
  if (checked) {
    return `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="0.5">
        <circle cx="12" cy="12" r="9" />
        <path d="M9 12l2 2l4 -4" />
      </svg>
    `;
  } else {
    return `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="0.5">
        <circle cx="12" cy="12" r="9" />
      </svg>
    `;
  }
}
```

**Render Update**:
```javascript
// Replace native checkbox trong renderTodoItem()
// Before:
const checkbox = createElement('input', {
  type: 'checkbox',
  checked: isCompleted,
});

// After:
const checkboxWrapper = createElement('div', {
  className: 'custom-checkbox',
  innerHTML: renderCheckboxIcon(isCompleted),
  'aria-checked': isCompleted,
  role: 'checkbox',
  tabindex: 0,
});
checkboxWrapper.addEventListener('click', () => handleToggle(todo.id));
```

### Phase 3: Modal Refinement (P2)

**Remove Buttons**:
```html
<!-- Hide trong HTML hoặc CSS -->
<style>
.modal-close,
.modal-cancel {
  display: none;
}
</style>
```

**Input Underline**:
```css
.modal .form-input {
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid var(--border-color);
}

.modal .form-input:hover {
  border-bottom-color: var(--color-gray-400);
}
```

**Subtasks**:
```css
/* Hide empty state */
.subtasks-container:empty::before {
  content: none; /* Remove "Chưa có subtask" */
}

/* Hide add button */
#modal-add-subtask-btn {
  display: none;
}

/* Subtask delete buttons */
.subtask-item .btn-icon {
  opacity: 0;
}

.subtask-item:hover .btn-icon {
  opacity: 1;
}
```

**Modal Border Radius**:
```css
.modal-content {
  border-radius: 12px; /* was: 8px */
}
```

## Testing Guide

### Automated Tests

```bash
# All existing tests phải pass
npm test

# Expected: 94/94 passing
```

### Manual Visual Testing

**Checklist** (từ plan.md):

```markdown
**Visual**:
- [ ] Header không có border-bottom
- [ ] Input borderless khi idle
- [ ] Input background xám khi hover/focus
- [ ] Nút "Thêm" không visible
- [ ] Todo items không có borders
- [ ] Delete buttons ẩn → hiện khi hover
- [ ] Custom SVG checkboxes (không phải native)
- [ ] Completed todos có checkmark icon
- [ ] Modal không có × button
- [ ] Modal không có Cancel button
- [ ] Title input chỉ có underline
- [ ] Subtasks empty state silent

**Functionality**:
- [ ] Enter submit form
- [ ] Checkbox toggle completion
- [ ] Delete buttons xóa todos
- [ ] ESC close modal
- [ ] Backdrop click close modal

**Accessibility**:
- [ ] Keyboard nav hoạt động
- [ ] Tab order hợp lý
- [ ] Screen reader đọc được states
```

## Common Issues & Solutions

### Issue: Tests Failing

**Cause**: Business logic tests phải pass vì không thay đổi.

**Solution**:
```bash
npm test -- --reporter=verbose
# Check error messages
# Verify không modify todos.js, storage.js, validators.js
```

### Issue: Custom Checkboxes Không Click Được

**Cause**: Event listeners chưa attach hoặc SVG không interactive.

**Solution**:
```javascript
// Ensure wrapper có click handler
checkboxWrapper.addEventListener('click', handler);

// Add CSS cursor
.custom-checkbox {
  cursor: pointer;
}
```

### Issue: Hover States Không Smooth

**Cause**: Thiếu transitions.

**Solution**:
```css
.todo-item,
.todo-actions {
  transition: background 150ms, opacity 150ms;
}
```

## Performance Monitoring

**Before Implementation**:
```bash
# Measure baseline
npm run build
# Note dist/ size

# Dev Tools → Lighthouse
# Note Performance score
```

**After Implementation**:
```bash
# Compare bundle size (should be same or smaller)
npm run build

# Lighthouse again
# Performance should be >= baseline
```

**Expected Impact**: Neutral hoặc positive (ít DOM nodes, ít paint operations).

## Rollback Plan

Nếu có issues critical:

```bash
# Revert toàn bộ changes
git checkout 002-ui-minimalism-polish
git reset --hard origin/main

# Hoặc revert specific file
git checkout main -- src/styles/components.css
```

## Next Steps

1. ✅ Plan complete
2. 🔜 Generate tasks.md via `/speckit.tasks`
3. 🔜 Implement Phase 1 (CSS refactoring)
4. 🔜 Implement Phase 2 (custom checkboxes)
5. 🔜 Implement Phase 3 (modal polish)
6. 🔜 Test và validate
7. 🔜 Merge PR

## Resources

**Spec**: [spec.md](./spec.md) - Business requirements
**Plan**: [plan.md](./plan.md) - Technical implementation details
**Constitution**: [../../.specify/memory/constitution.md](../../.specify/memory/constitution.md) - Design principles

**External**:
- CSS :hover documentation: https://developer.mozilla.org/en-US/docs/Web/CSS/:hover
- SVG accessibility: https://www.w3.org/WAI/tutorials/images/svg/
- Dieter Rams principles: https://www.vitsoe.com/us/about/good-design
