# Tasks: Ứng dụng TODO List

**Input**: Tài liệu thiết kế từ `/specs/001-todo-list-app/`
**Prerequisites**: plan.md, spec.md, data-model.md, contracts/, research.md, quickstart.md

**Tests**: Tests là BẮT BUỘC theo constitution (Test Coverage principle). Mọi business logic và user workflow đều phải có tests.

**Tổ chức**: Tasks được nhóm theo user story để cho phép triển khai và kiểm thử độc lập từng story.

## Format: `[ID] [P?] [Story] Mô tả`

- **[P]**: Có thể chạy song song (parallel) - files khác nhau, không phụ thuộc
- **[Story]**: Task thuộc user story nào (ví dụ: US1, US2, US3)
- Bao gồm đường dẫn file chính xác trong mô tả

## Quy ước Đường dẫn

- **Frontend-only web app**: `src/`, `tests/` ở repository root
- Paths theo plan.md structure

---

## Phase 1: Setup (Khởi tạo Project)

**Mục đích**: Khởi tạo project và cấu trúc cơ bản

- [ ] T001 Tạo package.json với dependencies: Vite 5.x, Vitest 1.x, @testing-library/dom, @testing-library/user-event, happy-dom
- [ ] T002 [P] Tạo vite.config.js với build config (target: es2022, minify: terser)
- [ ] T003 [P] Tạo vitest.config.js với happy-dom environment
- [ ] T004 [P] Tạo .gitignore (node_modules, dist, coverage, .DS_Store)
- [ ] T005 Tạo cấu trúc thư mục: src/, src/modules/, src/styles/, src/utils/, tests/unit/, tests/integration/, public/

---

## Phase 2: Foundational (Prerequisites Chặn)

**Mục đích**: Hạ tầng lõi PHẢI hoàn thành trước KHI BẤT KỲ user story nào được triển khai

**⚠️ CRITICAL**: Không thể bắt đầu làm user story cho đến khi phase này hoàn thành

- [ ] T006 [P] Tạo src/utils/validators.js với validation functions (validateTitle, validateDescription)
- [ ] T007 [P] Tạo src/utils/dom.js với DOM helper functions (createElement, addClass, etc.)
- [ ] T008 Tạo src/modules/storage.js với localStorage abstraction (saveTodos, loadTodos, clearTodos)
- [ ] T009 [P] Tạo src/styles/theme.css với CSS custom properties (--color-bg, --color-text, --color-border, --font-family, --spacing-unit)
- [ ] T010 [P] Tạo src/styles/main.css với CSS reset và global styles
- [ ] T011 Tạo tests/unit/validators.test.js với tests cho validation functions
- [ ] T012 Tạo tests/unit/storage.test.js với tests cho localStorage operations (mock localStorage)

**Checkpoint**: Foundation sẵn sàng - user story implementation giờ có thể bắt đầu song song

---

## Phase 3: User Story 1 - Quản lý TODO cơ bản (Ưu tiên: P1) 🎯 MVP

**Mục tiêu**: Implement CRUD operations cho todos - tạo, xem, sửa, xóa

**Kiểm thử độc lập**: Tạo todo, xem danh sách, edit todo, delete todo. App functional mà không cần US2/US3.

### Tests cho User Story 1 (BẮT BUỘC - Test-First)

> **LƯU Ý: Viết tests này TRƯỚC, đảm bảo chúng FAIL trước khi implementation**

- [ ] T013 [P] [US1] Tạo tests/integration/create-todo.test.js với test scenarios: create todo với title only, create todo với title + description, validation errors
- [ ] T014 [P] [US1] Tạo tests/integration/edit-todo.test.js với test scenarios: edit title, edit description, validation errors
- [ ] T015 [P] [US1] Tạo tests/integration/delete-todo.test.js với test scenarios: delete todo, confirm todo removed from list
- [ ] T016 [US1] Tạo tests/unit/todos.test.js với tests cho business logic functions (createTodo, updateTodo, deleteTodo, getTodos)

### Implementation cho User Story 1

- [ ] T017 [US1] Tạo src/modules/todos.js với business logic functions: createTodo(title, description), updateTodo(id, updates), deleteTodo(id), getTodos(), findTodoById(id)
- [ ] T018 [US1] Tạo src/modules/ui.js với rendering functions: renderTodoList(todos), renderTodoItem(todo), renderEmptyState()
- [ ] T019 [US1] Tạo src/styles/components.css với styles cho todo-item, todo-list, todo-form, empty-state
- [ ] T020 [US1] Tạo src/index.html với semantic HTML structure: form (add todo), ul (todo list), accessibility labels
- [ ] T021 [US1] Tạo src/main.js với app initialization: load todos from storage, setup event listeners (submit form, click edit, click delete), render initial UI
- [ ] T022 [US1] Implement edit functionality: inline editing hoặc modal (chọn approach đơn giản nhất), save changes to storage
- [ ] T023 [US1] Add error handling và user feedback: validation errors, empty states, success messages

**Checkpoint**: Tại điểm này, User Story 1 phải fully functional và testable độc lập. User có thể tạo, xem, sửa, xóa todos.

---

## Phase 4: User Story 2 - Đánh dấu hoàn thành và phân loại (Ưu tiên: P2)

**Mục tiêu**: Implement completion tracking - đánh dấu todo completed, phần "Đã hoàn thành" collapsible, hoàn tác completion

**Kiểm thử độc lập**: Dùng todos từ US1, mark completed, verify phân loại, unmark. Works độc lập với US3.

### Tests cho User Story 2 (BẮT BUỘC - Test-First)

- [ ] T024 [P] [US2] Tạo tests/integration/complete-todo.test.js với test scenarios: mark todo completed, todo moves to completed section, visual indicator (strikethrough)
- [ ] T025 [P] [US2] Tạo tests/integration/uncomplete-todo.test.js với test scenarios: unmark completed todo, todo moves back to active list
- [ ] T026 [US2] Tạo tests/integration/completed-section.test.js với test scenarios: collapse/expand completed section, ARIA attributes correct

### Implementation cho User Story 2

- [ ] T027 [US2] Update src/modules/todos.js với toggleComplete(id) function, getActiveTodos(), getCompletedTodos()
- [ ] T028 [US2] Update src/modules/ui.js với renderCompletedSection(completedTodos), toggleCompletedVisibility()
- [ ] T029 [US2] Update src/styles/components.css với styles cho completed-todo (strikethrough), completed-section (collapsible)
- [ ] T030 [US2] Update src/index.html với completed section HTML: button (toggle), ul (completed list), ARIA attributes (aria-expanded, aria-controls)
- [ ] T031 [US2] Update src/main.js với event listeners cho toggle complete checkbox, toggle completed section visibility
- [ ] T032 [US2] Implement collapse/expand animation cho completed section (optional smooth transition)

**Checkpoint**: Tại điểm này, User Stories 1 VÀ 2 phải đều hoạt động độc lập. User có thể mark/unmark completed và xem phân loại.

---

## Phase 5: User Story 3 - Subtasks (mục con) (Ưu tiên: P3)

**Mục tiêu**: Implement subtasks - add subtasks to todo, track progress, mark subtask completed, delete subtask

**Kiểm thử độc lập**: Dùng todos từ US1, add subtasks, verify progress tracking. Không ảnh hưởng US1/US2.

### Tests cho User Story 3 (BẮT BUỘC - Test-First)

- [ ] T033 [P] [US3] Tạo tests/integration/subtasks.test.js với test scenarios: add subtask, display progress (3/5 hoàn thành), mark subtask completed, delete subtask
- [ ] T034 [US3] Tạo tests/unit/todos.test.js (expand existing) với tests cho addSubtask(todoId, subtaskTitle), toggleSubtaskComplete(todoId, subtaskId), deleteSubtask(todoId, subtaskId), getSubtaskProgress(todo)

### Implementation cho User Story 3

- [ ] T035 [US3] Update src/modules/todos.js với subtask functions: addSubtask(todoId, title), toggleSubtaskComplete(todoId, subtaskId), deleteSubtask(todoId, subtaskId), getSubtaskProgress(todo)
- [ ] T036 [US3] Update src/modules/ui.js với renderSubtasks(subtasks, todoId), renderSubtaskProgress(todo)
- [ ] T037 [US3] Update src/styles/components.css với styles cho subtask-list, subtask-item, subtask-progress
- [ ] T038 [US3] Update src/index.html (hoặc dynamic trong ui.js) với subtask UI trong todo detail view
- [ ] T039 [US3] Update src/main.js với event listeners cho add subtask, toggle subtask checkbox, delete subtask
- [ ] T040 [US3] Implement subtask progress indicator (text: "3/5 hoàn thành" hoặc progress bar - chọn approach đơn giản)

**Checkpoint**: Tất cả user stories giờ phải independently functional. Full feature set complete.

---

## Phase 6: Polish & Cross-Cutting Concerns

**Mục đích**: Cải tiến ảnh hưởng đến nhiều user stories, accessibility, performance

- [ ] T041 [P] Implement keyboard navigation: Tab order, Enter/Space activation, Escape để cancel edit
- [ ] T042 [P] Add ARIA labels cho tất cả interactive elements: buttons, inputs, checkboxes, sections
- [ ] T043 [P] Optimize performance: debounce localStorage saves, virtual scrolling nếu cần (optional cho MVP)
- [ ] T044 [P] Add loading states cho async operations (nếu có animations)
- [ ] T045 Chạy Lighthouse audit và fix accessibility issues (target: 100 accessibility score)
- [ ] T046 Chạy validation theo quickstart.md test scenarios cho cả 3 user stories
- [ ] T047 [P] Code cleanup: remove console.logs, unused code, format code
- [ ] T048 [P] Documentation: add JSDoc comments cho public functions trong modules
- [ ] T049 Build production bundle (npm run build) và verify bundle size < 50KB gzipped
- [ ] T050 Manual testing cross-browser: Chrome, Firefox, Safari, Edge

---

## Phụ thuộc & Thứ tự Thực thi

### Phụ thuộc Phase

- **Setup (Phase 1)**: Không có phụ thuộc - có thể bắt đầu ngay
- **Foundational (Phase 2)**: Phụ thuộc Setup hoàn thành - CHẶN tất cả user stories
- **User Stories (Phase 3-5)**: Tất cả phụ thuộc Foundational phase hoàn thành
  - User Story 1 (P1) có thể bắt đầu sau Foundational
  - User Story 2 (P2) có thể bắt đầu sau Foundational (hoặc sau US1 nếu muốn incremental)
  - User Story 3 (P3) có thể bắt đầu sau Foundational (hoặc sau US1/US2 nếu muốn incremental)
- **Polish (Phase 6)**: Phụ thuộc tất cả user stories hoàn thành (hoặc có thể làm song song với US3)

### Phụ thuộc User Story

- **User Story 1 (P1)**: Không phụ thuộc stories khác - MVP độc lập
- **User Story 2 (P2)**: Không technically phụ thuộc US1, nhưng logically builds on top (completion tracking needs todos)
- **User Story 3 (P3)**: Không technically phụ thuộc US1/US2, nhưng logically extends US1 (subtasks need parent todos)

### Trong Mỗi User Story

- Tests PHẢI được viết TRƯỚC implementation (Test-First principle)
- Tests phải FAIL trước khi code (red-green-refactor)
- Business logic (todos.js) trước UI (ui.js)
- Styles có thể song song với implementation
- Integration tests sau khi có UI working

### Cơ hội Song song

**Phase 1 (Setup)**:
- T002, T003, T004 có thể chạy song song (different files)

**Phase 2 (Foundational)**:
- T006, T007, T009, T010 có thể chạy song song
- T011, T012 có thể chạy song song (different test files)

**Phase 3 (User Story 1) - Tests**:
- T013, T014, T015 có thể chạy song song (different test files)

**Phase 3 (User Story 1) - Styles**:
- T019 có thể chạy song song với T017, T018 (styles independent)

**Phase 4 (User Story 2) - Tests**:
- T024, T025, T026 có thể chạy song song

**Phase 5 (User Story 3) - Tests**:
- T033 có thể chạy trước T034 (hoặc song song nếu khác người)

**Phase 6 (Polish)**:
- T041, T042, T043, T044, T047, T048 có thể chạy song song (different concerns)

---

## Ví dụ Parallel: User Story 1 Tests

```bash
# Launch tất cả tests cho User Story 1 cùng lúc:
# T013: tests/integration/create-todo.test.js
# T014: tests/integration/edit-todo.test.js
# T015: tests/integration/delete-todo.test.js

# Tất cả 3 tests này độc lập, có thể develop song song
```

---

## Chiến lược Triển khai

### MVP First (Chỉ User Story 1) - RECOMMENDED

1. Hoàn thành Phase 1: Setup (T001-T005)
2. Hoàn thành Phase 2: Foundational (T006-T012) - CRITICAL
3. Hoàn thành Phase 3: User Story 1 (T013-T023)
4. **DỪNG và VALIDATE**:
   - Run all tests (npm test) - tất cả phải pass
   - Manual test trong browser - create, edit, delete todos
   - Verify persistence (refresh page, todos vẫn còn)
5. Deploy hoặc demo MVP nếu sẵn sàng

### Incremental Delivery (Recommended)

1. **Sprint 1**: Setup + Foundational + US1 → MVP functional
   - Tests pass, manual test pass
   - Demo: User có thể manage basic todos

2. **Sprint 2**: US2 (Completion tracking)
   - Tests pass cho US2
   - Manual test: mark completed, collapse/expand
   - Demo: User có thể organize completed vs active

3. **Sprint 3**: US3 (Subtasks)
   - Tests pass cho US3
   - Manual test: add subtasks, track progress
   - Demo: User có thể break down complex todos

4. **Sprint 4**: Polish
   - Accessibility audit pass
   - Performance optimization
   - Cross-browser testing
   - Production ready

### Chiến lược Parallel Team (Nếu nhiều developers)

Sau khi Foundational phase xong:

**Option A - Story-based parallelization**:
- Developer A: User Story 1 (T013-T023)
- Developer B: User Story 2 (T024-T032) - có thể cần mock US1 functions
- Developer C: User Story 3 (T033-T040) - có thể cần mock US1 functions
- Merge và integration test sau khi tất cả stories done

**Option B - Layer-based parallelization** (trong mỗi story):
- Developer A: Tests (T013-T016)
- Developer B: Business logic (T017)
- Developer C: UI (T018-T020)
- Developer D: Styles (T019)
- Requires close coordination, integration frequent

**RECOMMENDED**: Option A (story-based) vì mỗi story là independently testable increment.

---

## Lưu ý Quan trọng

**Test-First (Constitution Requirement)**:
- Write tests BEFORE implementing features
- Tests should FAIL initially (red)
- Implement minimum code to pass (green)
- Refactor while keeping tests green
- Test coverage > 80% for business logic

**Code Quality**:
- Follow constitution: clean code, max 30 lines per function, max 3 nesting levels
- Descriptive names, no abbreviations
- JSDoc comments cho public APIs

**Accessibility**:
- Keyboard navigation bắt buộc
- ARIA labels bắt buộc
- Color contrast Black on White = WCAG AAA

**Performance**:
- Debounce localStorage saves (không save mỗi keystroke)
- Optimize rendering (chỉ re-render changed parts)
- Monitor bundle size

**Validation**:
- Validate input trước khi save
- Show user-friendly error messages
- Handle edge cases (empty title, long text, etc.)

**Persistence**:
- Save to localStorage after every change
- Load from localStorage on app init
- Handle QuotaExceededError gracefully

---

## Validation Checklist

Trước khi consider done:

**Tests**:
- [ ] All unit tests pass
- [ ] All integration tests pass
- [ ] Test coverage > 80% cho modules/

**Manual Testing**:
- [ ] User Story 1: Create, edit, delete todos work
- [ ] User Story 2: Mark completed, collapse/expand work
- [ ] User Story 3: Add subtasks, track progress work
- [ ] Keyboard navigation works (Tab, Enter, Space, Escape)
- [ ] Screen reader accessible (test với NVDA/JAWS)

**Performance**:
- [ ] Initial load < 1 second
- [ ] Interaction response < 50ms
- [ ] Bundle size < 50KB gzipped
- [ ] Lighthouse Performance > 95

**Quality**:
- [ ] No console errors trong browser
- [ ] Code formatted và clean
- [ ] JSDoc comments added
- [ ] Constitution compliance verified

**Cross-browser**:
- [ ] Chrome: Works
- [ ] Firefox: Works
- [ ] Safari: Works
- [ ] Edge: Works

---

**Total Tasks**: 50 tasks
- **Setup**: 5 tasks
- **Foundational**: 7 tasks
- **User Story 1**: 11 tasks (4 tests + 7 implementation)
- **User Story 2**: 9 tasks (3 tests + 6 implementation)
- **User Story 3**: 8 tasks (2 tests + 6 implementation)
- **Polish**: 10 tasks

**Parallel Opportunities**: ~15-20 tasks có thể chạy song song (marked với [P])

**MVP Scope**: Phase 1 + Phase 2 + Phase 3 = 23 tasks (Setup + Foundational + User Story 1)

**Estimated Effort**:
- MVP (US1): 1-2 days (nếu full-time)
- + US2: +0.5-1 day
- + US3: +0.5-1 day
- Polish: +0.5-1 day
- **Total**: 3-5 days (depending on experience level và test-first approach)
