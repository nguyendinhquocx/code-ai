---
description: "Danh sách tasks triển khai UI Minimalism Polish"
---

# Tasks: Tối ưu Giao diện TODO App theo Triết lý Tối giản

**Input**: Tài liệu thiết kế từ `/specs/002-ui-minimalism-polish/`
**Prerequisites**: plan.md (✅), spec.md (✅)

**Tests**: Feature này là pure UI refactoring. Existing 94 unit tests phải tiếp tục PASS. Không có new automated tests - validation thông qua manual visual checklist.

**Tổ chức**: Tasks được nhóm theo user story để cho phép triển khai và kiểm thử độc lập từng story.

## Format: `[ID] [P?] [Story] Mô tả`

- **[P]**: Có thể chạy song song (parallel) - files khác nhau, không phụ thuộc
- **[Story]**: Task thuộc user story nào (US1, US2, US3, US4)
- Bao gồm đường dẫn file chính xác trong mô tả

## Quy ước Đường dẫn

- **Single project**: `src/`, `index.html` ở repository root
- Cấu trúc: `src/styles/`, `src/modules/`, `src/utils/`

---

## Phase 1: Setup (Minimal - UI refactor không cần setup mới)

**Mục đích**: Verify môi trường và existing tests

- [x] T001 Verify dev environment: chạy `npm run dev` và access localhost:5173
- [x] T002 Verify existing tests: chạy `npm test` để confirm 94/94 tests passing
- [x] T003 [P] Tạo backup screenshot của UI hiện tại cho visual comparison

---

## Phase 2: Foundational (CSS Variables & Base Styles)

**Mục đích**: Setup CSS variables và base styles làm nền tảng cho tất cả UI changes

**⚠️ CRITICAL**: Hoàn thành phase này trước khi bắt đầu bất kỳ user story nào

- [x] T004 [P] Review và document CSS variables hiện tại trong src/styles/theme.css
- [x] T005 [P] Add/verify hover color variable (--color-gray-50: #F5F5F5) trong src/styles/theme.css nếu chưa có
- [x] T006 [P] Add transition timing variables trong src/styles/theme.css: --transition-fast: 150ms

**Checkpoint**: CSS foundation sẵn sàng - user story implementation có thể bắt đầu song song

---

## Phase 3: User Story 1 - Input và Add Todo Tối giản (Ưu tiên: P1) 🎯 MVP

**Mục tiêu**: Tối giản form input với borderless design, hover states, và ẩn nút "Thêm"

**Kiểm thử độc lập**: Sau phase này, user có thể thêm todos bằng Enter key với UI tối giản (no visible submit button, borderless input với hover effect)

### Implementation cho User Story 1

- [x] T007 [US1] Remove border từ todo input trong src/styles/components.css (.todo-input: border: none; background: transparent;)
- [x] T008 [US1] Add border-radius 8px cho todo input trong src/styles/components.css (.todo-input)
- [x] T009 [US1] Add hover và focus background cho todo input trong src/styles/components.css (.todo-input:hover, .todo-input:focus: background: var(--color-gray-50);)
- [x] T010 [US1] Add transition effect cho todo input trong src/styles/components.css (.todo-input: transition: background var(--transition-fast);)
- [x] T011 [US1] Hide submit button với display: none trong src/styles/components.css (.add-todo-form button[type="submit"])
- [x] T012 [US1] Verify Enter key submission vẫn hoạt động (test manual)

**Checkpoint**: Input form giờ borderless, có hover states, và submit button ẩn. Enter key vẫn hoạt động.

---

## Phase 4: User Story 2 - Todo Items Tối giản với Hover Actions (Ưu tiên: P1) 🎯 MVP

**Mục tiêu**: Todo items borderless với custom SVG checkboxes và delete buttons chỉ visible on hover

**Kiểm thử độc lập**: Sau phase này, todo list hiển thị với custom checkboxes, không có borders, và delete buttons chỉ hiện khi hover

### Implementation cho User Story 2 - CSS Changes

- [x] T013 [P] [US2] Remove borders từ todo items trong src/styles/components.css (.todo-item: border: none; background: transparent;)
- [x] T014 [P] [US2] Add hover background cho todo items trong src/styles/components.css (.todo-item:hover: background: var(--color-gray-50);)
- [x] T015 [P] [US2] Add transition cho todo items trong src/styles/components.css (.todo-item: transition: background var(--transition-fast);)
- [x] T016 [US2] Set delete buttons opacity: 0 by default trong src/styles/components.css (.todo-actions: opacity: 0;)
- [x] T017 [US2] Add transition cho delete buttons trong src/styles/components.css (.todo-actions: transition: opacity var(--transition-fast);)
- [x] T018 [US2] Add hover rule để show delete buttons trong src/styles/components.css (.todo-item:hover .todo-actions: opacity: 1;)

### Implementation cho User Story 2 - Custom SVG Checkboxes

- [x] T019 [US2] Create renderCheckboxIcon(checked) helper function trong src/modules/ui.js (return SVG string: circle + optional checkmark path)
- [x] T020 [US2] Update renderTodoItem() trong src/modules/ui.js để replace native checkbox với custom SVG wrapper
- [x] T021 [US2] Add click event listener cho SVG checkbox wrapper trong src/modules/ui.js (trigger handleToggle)
- [x] T022 [US2] Add ARIA attributes cho accessibility trong src/modules/ui.js (role="checkbox", aria-checked, tabindex)
- [x] T023 [US2] Add CSS cursor pointer cho custom checkbox trong src/styles/components.css (.custom-checkbox: cursor: pointer;)
- [x] T024 [US2] Style SVG size và alignment trong src/styles/components.css (.custom-checkbox svg: width: 20px; height: 20px;)
- [x] T025 [US2] Verify checkbox clicks toggle completion (test manual)
- [x] T026 [US2] Verify completed todos hiển thị checkmark icon (test manual)
- [x] T027 [US2] Run automated tests: `npm test` để verify không break business logic

**Checkpoint**: Todo items giờ borderless, có hover backgrounds, custom SVG checkboxes hoạt động, và delete buttons chỉ visible on hover. All 94 tests vẫn passing.

---

## Phase 5: User Story 3 - Header và Completed Section Tối giản (Ưu tiên: P2)

**Mục tiêu**: Header không có border, completed section không có decorations, dropdown icon before text

**Kiểm thử độc lập**: Sau phase này, header và completed section clean và minimal

### Implementation cho User Story 3

- [x] T028 [P] [US3] Remove border-bottom từ header trong src/styles/components.css (.app-header: border-bottom: none;)
- [x] T029 [P] [US3] Remove borders từ completed section toggle trong src/styles/components.css (.completed-toggle: border: none; background: transparent;)
- [x] T030 [US3] Move dropdown icon before text trong src/modules/ui.js (update renderCompletedSection HTML structure)
- [x] T031 [US3] Adjust icon và text spacing trong src/styles/components.css (.completed-toggle: gap hoặc margin adjustments)
- [x] T032 [US3] Verify completed section toggle vẫn hoạt động (test manual)

**Checkpoint**: Header và completed section giờ minimal và clean. All sections vẫn functional.

---

## Phase 6: User Story 4 - Modal và Subtasks Tối giản (Ưu tiên: P2)

**Mục tiêu**: Modal streamlined với underline inputs, no close/cancel buttons, subtasks minimal

**Kiểm thử độc lập**: Sau phase này, modal clean với minimal controls, ESC và backdrop click vẫn close modal

### Implementation cho User Story 4 - Modal Structure

- [x] T033 [P] [US4] Hide modal close button (×) trong src/styles/components.css (.modal-close: display: none;)
- [x] T034 [P] [US4] Hide modal cancel button trong src/styles/components.css hoặc index.html (target cancel button selector)
- [x] T035 [US4] Change modal title input style: remove top/left/right borders trong src/styles/components.css (.modal .form-input: border-top/left/right: none;)
- [x] T036 [US4] Keep only bottom border (underline) trong src/styles/components.css (.modal .form-input: border-bottom: 1px solid var(--border-color);)
- [x] T037 [US4] Add hover effect cho modal input underline trong src/styles/components.css (.modal .form-input:hover: border-bottom-color thay đổi)
- [x] T038 [US4] Increase modal border-radius trong src/styles/components.css (.modal-content: border-radius: 12px;)

### Implementation cho User Story 4 - Subtasks

- [x] T039 [US4] Remove "Chưa có subtask" empty state text trong src/styles/components.css (.subtasks-container:empty::before: content: none;)
- [x] T040 [US4] Hide subtask "Thêm" button trong src/styles/components.css (#modal-add-subtask-btn: display: none;)
- [x] T041 [US4] Set subtask delete buttons opacity: 0 trong src/styles/components.css (.subtask-item .btn-icon: opacity: 0;)
- [x] T042 [US4] Add hover rule cho subtask delete buttons trong src/styles/components.css (.subtask-item:hover .btn-icon: opacity: 1;)
- [x] T043 [US4] Verify ESC key closes modal (test manual)
- [x] T044 [US4] Verify backdrop click closes modal (test manual)
- [x] T045 [US4] Verify Enter key adds subtasks (test manual)
- [x] T046 [US4] Run automated tests: `npm test` để verify không break modal logic

**Checkpoint**: Modal giờ minimal, clean, và streamlined. All interactions vẫn hoạt động. All 94 tests vẫn passing.

---

## Phase 7: Polish & Validation

**Mục đích**: Final polish, comprehensive testing, và documentation

- [x] T047 [P] Review tất cả CSS changes cho consistency và DRY principles
- [x] T048 [P] Verify không có unused CSS rules từ old bordered design
- [x] T049 Code cleanup: remove comments hoặc dead code nếu có
- [x] T050 Final automated test run: `npm test` - must be 94/94 passing
- [x] T051 Final manual visual regression testing theo checklist trong quickstart.md (lines 278-305)
- [x] T052 Test keyboard navigation: Tab order, Enter submit, ESC close, Space toggle checkbox
- [x] T053 Test accessibility: Screen reader announces checkbox states correctly
- [x] T054 Performance check: `npm run build` và compare bundle size với baseline (should be same or smaller)
- [x] T055 Take after screenshots cho visual comparison với T003 backup
- [x] T056 Document bất kỳ deviations hoặc edge cases discovered trong implementation

---

## Phụ thuộc & Thứ tự Thực thi

### Phụ thuộc Phase

- **Setup (Phase 1)**: Không có phụ thuộc - có thể bắt đầu ngay
- **Foundational (Phase 2)**: Phụ thuộc Setup hoàn thành - CHẶN tất cả user stories
- **User Stories (Phase 3-6)**: Tất cả phụ thuộc Foundational phase hoàn thành
  - US1 và US2 (P1) có thể tiến hành song song nếu làm bởi developers khác nhau
  - US3 và US4 (P2) có thể tiến hành sau US1/US2 hoàn thành hoặc song song
- **Polish (Phase 7)**: Phụ thuộc tất cả user stories hoàn thành

### Phụ thuộc User Story

- **User Story 1 (P1)**: Phụ thuộc Phase 2 (CSS variables) - Độc lập với stories khác
- **User Story 2 (P1)**: Phụ thuộc Phase 2 (CSS variables) - Độc lập với stories khác
- **User Story 3 (P2)**: Phụ thuộc Phase 2 (CSS variables) - Độc lập với stories khác
- **User Story 4 (P2)**: Phụ thuộc Phase 2 (CSS variables) - Độc lập với stories khác

### Trong Mỗi User Story

- **US1**: T007-T011 là pure CSS, có thể parallel. T012 là manual test sau CSS changes.
- **US2**: T013-T018 (CSS) có thể parallel. T019-T026 (JS) phải sequential. T027 test cuối cùng.
- **US3**: T028-T029 (CSS) có thể parallel. T030-T031 (JS + CSS) sequential. T032 test cuối.
- **US4**: T033-T038 (modal CSS) có thể parallel. T039-T042 (subtask CSS) có thể parallel. T043-T046 tests sequential.

### Cơ hội Song song

- **Phase 1**: T001, T002, T003 có thể chạy đồng thời
- **Phase 2**: T004, T005, T006 có thể chạy đồng thời (khác sections trong theme.css)
- **Phase 3-6**: Các user stories có thể được implement song song bởi team members khác nhau
- **Within Phase 3 (US1)**: T007-T011 cùng edit components.css nhưng khác selectors - có thể parallel với care
- **Within Phase 4 (US2)**: T013-T018 (CSS) có thể parallel, T019-T027 (JS) sequential
- **Phase 7**: T047-T049 (review) có thể parallel, T050-T056 (testing) sequential

---

## Chiến lược Triển khai

### Recommended: Incremental by Priority

1. **Phase 1 + 2**: Setup và foundation (30 phút)
2. **Phase 3 (US1)**: Input tối giản → Test độc lập (1 giờ)
3. **Phase 4 (US2)**: Todo items + SVG checkboxes → Test độc lập (2-3 giờ - most complex)
4. **VALIDATE MVP**: US1 + US2 = core TODO functionality với UI minimal
5. **Phase 5 (US3)**: Header và completed section (30 phút)
6. **Phase 6 (US4)**: Modal refinement (1 giờ)
7. **Phase 7**: Polish và final validation (1 giờ)

**Total Estimated Time**: 6-8 giờ cho single developer

### Parallel Team Strategy

Với 2 developers:

1. **Dev A**: Phase 1-2 → Phase 3 (US1) → Phase 5 (US3) → Phase 7 (testing)
2. **Dev B**: Phase 1-2 → Phase 4 (US2) → Phase 6 (US4) → Phase 7 (review)
3. **Total Time**: 3-4 giờ

---

## Lưu ý Quan trọng

- **CSS Conflicts**: Nhiều tasks edit `components.css` - coordinate carefully hoặc làm sequential
- **[P] markers**: Chỉ dùng khi tasks edit KHÁC FILES hoặc KHÁC SECTIONS trong same file
- **Automated Tests**: MUST pass 94/94 sau EVERY phase. If fail, stop và fix trước khi continue.
- **Manual Testing**: Critical vì đây là visual refactor. Checklist trong quickstart.md là bắt buộc.
- **Accessibility**: Custom checkboxes MUST maintain keyboard nav và screen reader support (ARIA)
- **Rollback**: Nếu bất kỳ phase nào fail validation, git reset về phase trước đó

---

## Success Criteria Mapping

Tasks này implement các success criteria từ spec.md:

- **SC-001** (User hoàn thành add todo < 30s): T007-T012 (input tối giản)
- **SC-002** (90% users tìm thấy delete action < 10s): T013-T018, T039-T042 (hover reveals)
- **SC-003** (Giảm 50% visual clutter): T007, T013, T028, T033-T034 (remove borders/buttons)
- **SC-004** (Zero performance regression): T054 (bundle size check)
- **SC-005** (100% existing tests pass): T002, T027, T046, T050 (test validation)
- **SC-006** (Accessibility maintained): T022, T052-T053 (ARIA + keyboard nav)
