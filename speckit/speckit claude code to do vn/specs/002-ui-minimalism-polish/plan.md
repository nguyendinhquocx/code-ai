# Kế hoạch Triển khai: Tối ưu Giao diện TODO App theo Triết lý Tối giản

**Branch**: `002-ui-minimalism-polish` | **Ngày**: 2025-10-25 | **Spec**: [spec.md](./spec.md)
**Input**: Đặc tả tính năng từ `/specs/002-ui-minimalism-polish/spec.md`

## Tóm tắt

Refactor giao diện TODO app để đạt triết lý tối giản theo yêu cầu: loại bỏ borders không cần thiết, thêm hover states tinh tế, thay thế native checkboxes bằng custom SVG icons, ẩn delete buttons cho đến khi hover, và đơn giản hóa modal interactions. Đây là pure UI/CSS refinement - không thay đổi business logic hay data model.

**Phương pháp kỹ thuật**: CSS-only refactoring với minimal JavaScript changes (chỉ cho custom checkbox rendering). Maintain 100% functionality hiện tại while improving visual minimalism. Zero new dependencies.

## Ngữ cảnh Kỹ thuật

**Language/Version**: JavaScript ES2022 (no changes from current)
**Primary Dependencies**:
- Vite 5.x (dev server + build tool)
- Vitest 1.x (testing framework)
- @testing-library/dom 10.x (testing utilities)

**Storage**: Browser localStorage (no changes)
**Testing**: Vitest cho unit tests, manual testing cho visual regression
**Target Platform**: Modern browsers (Chrome 90+, Firefox 88+, Safari 14+)
**Project Type**: single (frontend-only web app)
**Performance Goals**:
- Hover transitions < 200ms
- No performance degradation từ hiện tại
- Bundle size không tăng (SVG inline, không add dependencies)

**Constraints**:
- Phải maintain 100% existing functionality
- Phải maintain keyboard accessibility
- Không được break existing tests
- Chỉ modify CSS và rendering logic, không touch business logic

**Scale/Scope**:
- ~10 CSS files to refactor
- ~3-5 UI component rendering functions to modify (cho custom icons)
- No new components, chỉ style existing ones

## Kiểm tra Constitution

*GATE: Phải pass trước Phase 0 research. Kiểm tra lại sau Phase 1 design.*

### ✅ I. Code Clarity (Clean & Readable)

**Tuân thủ**:
- CSS refactoring sẽ follow BEM-like conventions đã có
- Custom SVG rendering functions sẽ có clear names (renderCheckboxIcon, renderUncheckedIcon)
- Comments giải thích "tại sao" hide buttons (UX minimalism), không "cái gì"

**Không vi phạm**: Refactoring giảm complexity (bỏ borders, đơn giản hóa modal) thay vì tăng.

### ✅ II. Test Coverage (Test-First)

**Tuân thủ**:
- Existing 94 unit tests phải continue passing
- Sẽ add visual regression test cases cho hover states (manual checklist)
- Functionality tests không cần thay đổi (behavior giữ nguyên)

**Không vi phạm**: UI changes không ảnh hưởng business logic tests. Chỉ cần verify visual output.

### ✅ III. Simplicity First (YAGNI)

**Tuân thủ - PERFECT FIT**:
- Đây chính là exercise của YAGNI: loại bỏ UI elements không cần thiết
- Bỏ borders → simpler
- Bỏ buttons → simpler
- Bỏ "Chưa có subtask" text → simpler
- Custom SVG thay native checkbox → minimal abstraction, justified bởi design requirement

**Không vi phạm**: Feature này là textbook example của simplification.

### ✅ IV. UI Minimalism (User-Centric Design)

**Tuân thủ - CORE PRINCIPLE**:
- Màu chính: White, Black, Light Gray → EXACT match với constitution
- Không thêm icons mới, chỉ refine existing checkboxes
- Loại bỏ clutter (borders, extra buttons) → align với "mỗi element phải có mục đích"

**Không vi phạm**: Feature này là direct implementation của principle IV.

### ✅ V. Design Philosophy (Dieter Rams Principles)

**Tuân thủ - DIRECT APPLICATION**:
- **Aesthetic**: Form follows function - bỏ decoration vô nghĩa
- **Understandable**: Hover patterns là universal (không cần explain)
- **Unobtrusive**: Ẩn buttons cho đến khi cần → less visual noise
- **As little design as possible**: Core principle của feature này

**Không vi phạm**: Feature này là case study của "Weniger aber besser".

### 📋 Constitution Compliance Summary

**PASS - ZERO VIOLATIONS**: Feature này không chỉ tuân thủ constitution mà còn là perfect embodiment của principles III, IV, và V. Không cần complexity tracking table.

## Cấu trúc Project

### Documentation (tính năng này)

```text
specs/002-ui-minimalism-polish/
├── spec.md              # Business requirements (đã có)
├── plan.md              # File này
├── research.md          # KHÔNG CẦN - tech stack đã có, chỉ CSS refactor
├── data-model.md        # KHÔNG CẦN - không thay đổi data
├── quickstart.md        # Update với visual design guidelines
└── contracts/           # KHÔNG CẦN - không thay đổi APIs
```

### Source Code (repository root)

```text
src/
├── styles/
│   ├── theme.css         # Có thể update CSS variables
│   ├── main.css          # Update base styles (input, focus states)
│   └── components.css    # MAJOR REFACTOR - todos, modal, buttons
├── modules/
│   └── ui.js             # Update rendering cho custom checkbox SVGs
└── utils/
    └── dom.js            # Có thể add SVG helper nếu cần

tests/
└── unit/
    └── (existing tests)  # Phải continue passing
```

**Quyết định Cấu trúc**: Single project (frontend-only). Chỉ modify existing CSS và một số rendering functions trong ui.js để output custom SVG icons thay vì native checkboxes.

## Theo dõi Độ phức tạp

> **KHÔNG CẦN**: Constitution Check không có vi phạm.

---

## Design Decisions

### Approach: CSS-First với Minimal JS

**Quyết định**: Ưu tiên CSS changes trước, chỉ modify JavaScript khi absolutely necessary (custom checkbox rendering).

**Lý do**:
- Đơn giản hơn, ít side effects
- Dễ test (visual inspection)
- Better performance (CSS transitions nhanh hơn JS animations)
- Maintain separation of concerns

### Custom Checkboxes: Inline SVG vs CSS Pseudo-elements

**Quyết định**: Dùng inline SVG rendered bởi JavaScript, KHÔNG dùng CSS pseudo-elements.

**Lý do**:
- SVG cho better control (stroke-width 0.5px theo spec)
- Accessibility: có thể add proper ARIA attrs vào SVG
- Cleaner than CSS hacks với Unicode characters
- Theo yêu cầu spec: SVG icons đã được provide

**Trade-off Accepted**: Phải modify rendering logic, nhưng benefit outweighs cost.

### Hover State Strategy: CSS :hover vs JS event listeners

**Quyết định**: Pure CSS :hover với opacity transitions.

**Lý do**:
- Simpler implementation
- Better performance (GPU-accelerated)
- No event listener overhead
- Declarative (easier to reason about)

### Modal Close: Remove Buttons vs Hide with CSS

**Quyết định**: Remove buttons khỏi HTML (display: none), không chỉ hide visually.

**Lý do**:
- Cleaner DOM
- Reduce tab stops (better keyboard nav)
- Theo spec: "bị ẩn hoàn toàn (display: none hoặc removed from DOM)"

---

## Implementation Strategy

### Phase 1: Remove Visual Clutter (P1 - Quick Wins)

1. **Header & Structural Elements**:
   - Remove border-bottom từ header
   - Remove borders từ completed section
   - Move dropdown icon before text

2. **Input Form**:
   - Remove border (set transparent)
   - Add hover/focus background
   - Hide submit button (display: none)

3. **Todo Items**:
   - Remove borders
   - Add hover background
   - Set delete buttons opacity: 0 by default
   - Add .todo-item:hover .todo-actions { opacity: 1 }

### Phase 2: Custom Checkboxes (P1 - Requires JS)

1. **SVG Icons Preparation**:
   - Create renderCheckboxIcon(checked) helper
   - Return SVG string với circle + optional checkmark

2. **Rendering Update**:
   - Modify renderTodoItem() để use custom checkbox
   - Replace `<input type="checkbox">` với clickable SVG
   - Maintain click handler và aria-label

3. **Styling**:
   - Ensure SVG có proper size (20x20px)
   - Add cursor: pointer
   - Add hover effect nếu cần

### Phase 3: Modal Refinement (P2)

1. **Remove Buttons**:
   - Close button (×): display: none
   - Cancel button: display: none

2. **Input Underline**:
   - Modal title input: border-top/left/right: none, keep border-bottom
   - Add hover effect (border-color change)

3. **Subtasks**:
   - Remove "Chưa có subtask" empty state
   - Hide "Thêm" button
   - Apply same hover pattern cho delete buttons

4. **Border Radius**:
   - Increase modal border-radius to 12px+

---

## Testing Strategy

### Automated Tests

**Unit Tests (Existing 94 tests)**:
- Should continue passing
- Business logic unchanged → no test modifications needed

**Potential New Tests**:
- Test renderCheckboxIcon() returns correct SVG strings
- Test SVG click handlers trigger completion toggle

### Manual Testing Checklist

**Visual Regression**:
- [ ] Header không có border
- [ ] Input không có border khi idle
- [ ] Input có background khi hover/focus
- [ ] Nút "Thêm" không visible
- [ ] Todo items không có borders
- [ ] Delete buttons ẩn khi không hover
- [ ] Delete buttons visible khi hover
- [ ] Checkboxes render custom SVG (không phải native)
- [ ] Completed todos có checkmark icon
- [ ] Modal không có close button
- [ ] Modal không có cancel button
- [ ] Modal title input chỉ có underline
- [ ] Subtasks không có "Chưa có..." text
- [ ] Subtask "Thêm" button không visible

**Functionality**:
- [ ] Enter vẫn submit form
- [ ] Checkbox clicks vẫn toggle completion
- [ ] Delete buttons vẫn xóa todos
- [ ] ESC vẫn close modal
- [ ] Backdrop click vẫn close modal

**Accessibility**:
- [ ] Keyboard navigation vẫn hoạt động
- [ ] Tab order hợp lý (no hidden buttons trong tab flow)
- [ ] Screen reader có thể đọc checkbox states

---

## Rollout Plan

### Step 1: Branch và Setup
- ✅ Branch `002-ui-minimalism-polish` đã created
- ✅ Spec đã validated

### Step 2: Implementation (Theo tasks.md - sẽ được generate bởi /speckit.tasks)
- CSS refactoring trước
- JavaScript modifications sau
- Test sau mỗi phase

### Step 3: Validation
- Run automated tests (npm test)
- Manual visual testing theo checklist
- Get user feedback (compare before/after screenshots)

### Step 4: Merge
- Code review focusing on constitution compliance
- Ensure no regression
- Merge vào main branch

---

## Performance Impact Assessment

**Expected Impact**: NEUTRAL hoặc POSITIVE

**Positive**:
- Ít DOM nodes (remove buttons)
- Ít paint operations (ít borders)
- CSS transitions có GPU acceleration

**Neutral**:
- Custom SVG rendering: negligible cost (chỉ khi create/update todos)
- No new dependencies → no bundle size increase

**Monitoring**:
- Lighthouse score trước/sau
- Manual testing interaction response time
- Bundle size comparison

---

## Risk Assessment

### Low Risk ✅

**CSS Changes**:
- Isolated to styles, không ảnh hưởng logic
- Easy to revert nếu issues
- Can be incrementally rolled out

**Custom Checkboxes**:
- Scoped to renderTodoItem()
- Existing click handlers reuse
- Fallback: keep native checkboxes nếu SVG fails

### Mitigation Strategies

**Testing**:
- Comprehensive manual checklist
- Visual comparison screenshots
- User acceptance testing

**Rollback Plan**:
- Git revert easy vì chỉ CSS + minimal JS
- Feature flag possible: `USE_CUSTOM_CHECKBOXES = true`

---

## Dependencies & Assumptions

### Dependencies

**ZERO NEW DEPENDENCIES**:
- SVG inline (không cần icon library)
- CSS only (không cần CSS-in-JS library)
- Dùng existing Vite build tool

### Assumptions

- User browsers support CSS :hover (universal support)
- User browsers support inline SVG (universal support 2015+)
- Current codebase có solid foundation cho CSS refactoring
- Existing tests cover business logic sufficiently (verified: 94 tests passing)

---

## Out of Scope

Theo spec.md Out of Scope section:
- ❌ Complex animations (chỉ simple hover transitions)
- ❌ Layout redesign
- ❌ Dark mode
- ❌ Themes/customization
- ❌ Performance optimization ngoài UI
- ❌ Mobile responsive changes

---

## Success Metrics

Từ spec.md Success Criteria:

- **SC-001**: User feedback survey → cleaner UI perception
- **SC-002**: Count UI elements → giảm 30%+ (borders, buttons)
- **SC-003**: Task completion time → không tăng
- **SC-004**: Hover transitions → < 200ms (measure với DevTools)
- **SC-005**: Overall performance → không regress
- **SC-006**: User preference → 90%+ prefer new UI

---

## Next Steps

1. ✅ Plan complete và validated
2. 🔜 Generate tasks.md via `/speckit.tasks`
3. 🔜 Implement theo task priorities
4. 🔜 Test và validate
5. 🔜 Merge và deploy
