# Kế hoạch Triển khai: Ứng dụng TODO List

**Branch**: `001-todo-list-app` | **Ngày**: 2025-10-25 | **Spec**: [spec.md](./spec.md)
**Input**: Đặc tả tính năng từ `/specs/001-todo-list-app/spec.md`

**Lưu ý**: Template này được điền bởi lệnh `/speckit.plan`. Xem `.claude/commands/speckit.plan.md` để biết workflow thực thi.

## Tóm tắt

Ứng dụng TODO list đơn giản với 3 user stories chính: CRUD operations (P1), completion tracking với phân loại (P2), và subtasks (P3). App chạy hoàn toàn client-side, lưu trữ data trong browser localStorage, không cần backend. UI minimalist theo design philosophy của Microsoft To Do, tuân thủ UI minimalism principles từ constitution.

**Phương pháp kỹ thuật**: Single-page web app sử dụng vanilla JavaScript + modern Web APIs cho simplicity và performance. LocalStorage cho persistent storage. Vitest + Testing Library cho test coverage. Build system minimal với Vite cho fast development experience.

## Ngữ cảnh Kỹ thuật

**Language/Version**: JavaScript ES2022 (modern browsers hỗ trợ native)
**Primary Dependencies**:
- Vite 5.x (dev server + build tool, zero-config)
- Vitest 1.x (testing framework, tương thích với Vite)
- @testing-library/dom 10.x (DOM testing utilities)
- @testing-library/user-event 14.x (user interaction simulation)

**Storage**: Browser localStorage (Web Storage API) - persistent, offline-capable, no backend needed

**Testing**:
- Vitest (unit tests + integration tests)
- @testing-library (DOM testing, user-centric)
- happy-dom (JSDOM alternative, faster)

**Target Platform**: Modern web browsers (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)

**Project Type**: web (nhưng chỉ có frontend, không có backend riêng)

**Performance Goals**:
- Initial load < 1 giây (< 3 giây theo constitution, nhưng simple app nên target tốt hơn)
- Interaction response < 50ms (< 100ms theo constitution)
- Bundle size < 50KB (gzipped)
- Lighthouse Performance score > 95

**Constraints**:
- Phải hoạt động offline (PWA-ready, nhưng PWA không implement trong phase này)
- Không phụ thuộc external services/APIs
- Keyboard navigation đầy đủ (accessibility)
- Zero dependencies cho production bundle (trừ build tools)

**Scale/Scope**:
- Target: 1 user, 1 device, ~100-500 todos typical use case
- LocalStorage limit: 5-10MB (đủ cho hàng nghìn todos)
- No pagination needed cho MVP (simple list rendering)

## Kiểm tra Constitution

*GATE: Phải pass trước Phase 0 research. Kiểm tra lại sau Phase 1 design.*

### ✅ I. Code Clarity (Clean & Readable)

**Tuân thủ**:
- Vanilla JavaScript với descriptive naming conventions
- Modules nhỏ, mỗi module một responsibility (todos.js, ui.js, storage.js)
- Functions ngắn gọn (< 30 dòng), logic không lồng quá 3 tầng
- JSDoc comments cho public APIs giải thích "tại sao"

**Rationale**: Vanilla JS đơn giản hơn framework, dễ đọc hơn cho người mới. Module pattern tự nhiên với ES6 modules.

### ✅ II. Test Coverage (Test-First)

**Tuân thủ**:
- Vitest cho unit tests (storage, business logic)
- Testing Library cho integration tests (user workflows: create, complete, delete todos)
- Test phải pass trước khi merge (CI setup optional, local pre-commit hook)

**Rationale**: Testing Library promotes user-centric tests. Vitest nhanh và tương thích với Vite.

### ✅ III. Simplicity First (YAGNI)

**Tuân thủ**:
- Không dùng React/Vue/Angular - vanilla JS đủ cho app đơn giản này
- Không state management library - plain JavaScript object đủ
- Không router - single page, không cần navigation
- Không CSS framework - custom CSS minimal theo design system

**Rationale**: Framework adds complexity và bundle size không cần thiết. TODO app đơn giản không justify framework overhead.

**Complexity Tracking**: Không có vi phạm, không cần justify.

### ✅ IV. UI Minimalism (User-Centric Design)

**Tuân thủ**:
- Colors: White background (#FFFFFF), Black text (#000000), Light Gray borders/dividers (#F5F5F5)
- Font: Calibri (system font, no web font download)
- No icons except checkbox (native HTML checkbox styled với CSS)
- Mỗi screen một primary action: "Add Todo" button rõ ràng

**Rationale**: Minimalist design giảm cognitive load. System fonts = better performance.

### ✅ V. Design Philosophy (Dieter Rams Principles)

**Tuân thủ**:
- Innovative: Không copy exact Microsoft To Do, nhưng học UI patterns proven của họ
- Useful: Mọi feature có clear user value (spec-driven)
- Aesthetic: Form follows function - no decoration
- Understandable: Intuitive UI (90% users không cần hướng dẫn - SC-004)
- Unobtrusive: Minimal UI, focus vào content (todos)
- Honest: No dark patterns, no manipulation
- Long-lasting: Vanilla JS + web standards = timeless, không phụ thuộc framework trends
- Thorough: Accessibility (keyboard nav, ARIA), edge cases handled
- Environmentally friendly: Tiny bundle, minimal CPU/memory usage
- As little design as possible: Chỉ những gì absolutely necessary

**Rationale**: Web standards tồn tại lâu hơn frameworks. Simple = maintainable = long-lasting.

### ✅ Technology Stack Principles

**Tuân thủ**:
- Proven: Vanilla JS, localStorage, Vite - tất cả đã mature và stable
- Built-in solutions first: localStorage thay vì IndexedDB (đơn giản hơn, đủ cho use case)
- Zero production dependencies: Chỉ dev dependencies (Vite, Vitest)

**Rationale**: Mỗi dependency là liability. Zero production deps = no security vulnerabilities, no breaking changes.

### ✅ Performance Standards

**Tuân thủ**:
- Initial load < 1s (target tốt hơn constitution's <3s)
- Interaction < 50ms (target tốt hơn constitution's <100ms)
- Loading states: Visual feedback cho mọi action

**Rationale**: Simple app nên performance tốt hơn minimum standards.

### ✅ Accessibility

**Tuân thủ**:
- Keyboard navigation: Tab, Enter, Space, Escape
- ARIA labels: aria-label cho buttons, aria-expanded cho collapsible sections
- Color contrast: Black on white = maximum contrast (WCAG AAA)

**Rationale**: Accessibility is fundamental, không phải optional.

**GATE RESULT**: ✅ **TẤT CẢ PRINCIPLES TUÂN THỦ** - Không có vi phạm, tiến hành Phase 0.

## Cấu trúc Project

### Documentation (tính năng này)

```text
specs/001-todo-list-app/
├── plan.md              # File này (output của /speckit.plan)
├── research.md          # Output Phase 0 (lệnh /speckit.plan)
├── data-model.md        # Output Phase 1 (lệnh /speckit.plan)
├── quickstart.md        # Output Phase 1 (lệnh /speckit.plan)
├── contracts/           # Output Phase 1 (lệnh /speckit.plan) - API không cần, nhưng có data contracts
└── tasks.md             # Output Phase 2 (lệnh /speckit.tasks)
```

### Source Code (repository root)

```text
# Web application (frontend-only, no backend)
src/
├── index.html           # Entry point, semantic HTML
├── main.js              # App initialization, event listeners
├── modules/
│   ├── todos.js         # Todo business logic (CRUD, subtasks)
│   ├── storage.js       # LocalStorage persistence layer
│   └── ui.js            # DOM manipulation, rendering
├── styles/
│   ├── main.css         # Global styles, reset
│   ├── components.css   # Component-specific styles (todo-item, etc.)
│   └── theme.css        # Color palette, typography (constitution-compliant)
└── utils/
    ├── dom.js           # DOM helpers
    └── validators.js    # Input validation

tests/
├── unit/
│   ├── todos.test.js    # Unit tests cho business logic
│   ├── storage.test.js  # Unit tests cho storage layer
│   └── validators.test.js
└── integration/
    ├── create-todo.test.js      # User Story 1 tests
    ├── complete-todo.test.js    # User Story 2 tests
    └── subtasks.test.js         # User Story 3 tests

public/
└── favicon.ico          # Favicon (optional)

# Config files (root)
├── vite.config.js       # Vite configuration
├── vitest.config.js     # Vitest configuration (hoặc merge vào vite.config)
├── package.json         # Dependencies
└── .gitignore
```

**Quyết định Cấu trúc**:

Chọn **Web Application structure** nhưng **frontend-only** vì:
1. Không cần backend - localStorage đủ cho offline, local storage
2. Không cần tách backend/frontend riêng - một codebase đơn giản hơn
3. Structure tổ chức theo responsibility: modules/ (logic), styles/ (presentation), tests/ (quality)

**Module Organization**:
- **modules/todos.js**: Core business logic (createTodo, updateTodo, deleteTodo, toggleComplete, addSubtask, etc.)
- **modules/storage.js**: Abstraction layer cho localStorage (save, load, clear). Dễ swap sang IndexedDB sau nếu cần.
- **modules/ui.js**: DOM rendering logic (renderTodoList, renderCompletedSection, updateUI)
- **main.js**: Wire everything together, event listeners

**Rationale**: Separation of concerns, testability (business logic tách khỏi DOM), và future extensibility (swap storage layer dễ dàng).

## Theo dõi Độ phức tạp

> **Không có vi phạm Constitution** - Section này để trống.

Tất cả quyết định kỹ thuật tuân thủ constitution. Không cần justify complexity additions.
