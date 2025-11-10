# Research: Quyết định Kỹ thuật cho TODO List App

**Ngày**: 2025-10-25
**Mục đích**: Document các technology choices và rationale cho implementation plan

## Tổng quan

Research này tập trung vào việc chọn tech stack phù hợp cho TODO list app đơn giản, offline-first, với yêu cầu zero backend và UI minimalism theo constitution.

## Quyết định 1: Vanilla JavaScript vs Frontend Framework

### Decision

**Chọn: Vanilla JavaScript (ES2022)**

### Rationale

**Ưu điểm Vanilla JS cho use case này**:
1. **Simplicity**: App có 3 user stories đơn giản, không cần state management phức tạp của React/Vue
2. **Performance**: Zero framework overhead → bundle size nhỏ nhất, load time nhanh nhất
3. **Constitution compliance**: "Simplicity First" - framework là unnecessary complexity cho app đơn giản
4. **Long-lasting**: Web standards thay đổi chậm hơn framework APIs (Dieter Rams principle)
5. **Learning curve**: Code dễ đọc hơn cho người không quen framework

**Alternatives Considered**:

| Option | Pros | Cons | Rejection Reason |
|--------|------|------|------------------|
| React | Declarative UI, large ecosystem | 40KB+ bundle, overkill cho simple app | Violates Simplicity First - unnecessary complexity |
| Vue | Smaller than React (~30KB), progressive | Vẫn adds framework overhead | Không justify được value > cost cho app đơn giản |
| Svelte | Compile-time framework, tiny bundle | Learning curve, tooling setup | Vanilla JS đơn giản hơn, no compilation needed |
| Web Components | Native, reusable | Browser support gaps, verbose | Vanilla JS + modules đơn giản hơn cho single app |

**Best Practices Applied**:
- ES6 modules cho code organization
- DOM manipulation với modern APIs (querySelector, classList, dataset)
- Event delegation cho performance với dynamic lists

### References
- MDN Web Docs: JavaScript Guide
- You Might Not Need jQuery/Framework (project philosophy)
- Constitution: Principle III (Simplicity First), Principle V (Long-lasting design)

---

## Quyết định 2: LocalStorage vs IndexedDB

### Decision

**Chọn: LocalStorage (Web Storage API)**

### Rationale

**Ưu điểm LocalStorage**:
1. **Simplicity**: Synchronous API, đơn giản hơn IndexedDB async API nhiều
2. **Sufficient**: 5-10MB limit đủ cho hàng nghìn todos (mỗi todo ~1KB including subtasks)
3. **Universal support**: 100% browsers support, không cần polyfill
4. **Easy testing**: Synchronous = dễ test hơn async code

**Trade-offs**:
- **Performance**: Synchronous blocking có thể ảnh hưởng nếu data lớn
  - **Mitigate**: Debounce save operations, save chỉ khi có thay đổi
- **Size limit**: 5-10MB có thể không đủ nếu users có hàng vạn todos
  - **Acceptable**: Typical use case 100-500 todos (~100-500KB), xa limit

**Alternatives Considered**:

| Option | Pros | Cons | Rejection Reason |
|--------|------|------|------------------|
| IndexedDB | Large storage, async, indexes | Complex API, overkill cho simple app | Violates Simplicity First |
| Session Storage | Same API as localStorage | Data mất khi đóng tab | Không persistent (violates FR-013) |
| Cookies | Universal | 4KB limit, sent với mọi request | Too small, wrong use case |
| Cache API | Offline-first, service workers | Complex, async, PWA setup | Overkill, không cần trong MVP |

**Implementation Pattern**:
```javascript
// storage.js - Simple abstraction
export function saveTodos(todos) {
  localStorage.setItem('todos', JSON.stringify(todos));
}

export function loadTodos() {
  const data = localStorage.getItem('todos');
  return data ? JSON.parse(data) : [];
}
```

**Future Migration Path**: Nếu cần IndexedDB sau này, chỉ cần swap implementation trong storage.js module. Interface giữ nguyên.

### References
- MDN: Web Storage API
- Can I Use: localStorage (99.9% support)
- Constitution: Built-in solutions first, YAGNI

---

## Quyết định 3: Build Tool (Vite vs Webpack vs Parcel)

### Decision

**Chọn: Vite 5.x**

### Rationale

**Ưu điểm Vite**:
1. **Speed**: Native ESM trong dev, instant HMR
2. **Zero-config**: Works out of box cho simple projects
3. **Modern**: Built cho ES modules, optimized cho modern browsers (target của app)
4. **Bundle size**: Rollup-based production build = optimal tree-shaking
5. **DX**: Fast dev server, instant feedback loop

**Performance Numbers**:
- Dev server start: <500ms (vs Webpack ~5-10s)
- HMR: <50ms (vs Webpack ~1-2s)
- Production build: Rollup = tiny bundles

**Alternatives Considered**:

| Option | Pros | Cons | Rejection Reason |
|--------|------|------|------------------|
| Webpack | Mature, flexible, huge ecosystem | Slow dev server, complex config | Overkill, slow feedback loop |
| Parcel | Zero-config, fast | Less control, occasional issues | Vite faster, better modern JS support |
| esbuild | Fastest build | No dev server built-in, less mature | Vite uses esbuild internally, better DX |
| No build tool | Simplest | No minification, no module bundling | Need bundling cho production optimization |

**Configuration Minimal**:
```javascript
// vite.config.js
export default {
  build: {
    target: 'es2022',
    minify: 'terser', // Smaller than esbuild
    sourcemap: true,
  },
};
```

### References
- Vite documentation
- Benchmarks: Vite vs Webpack (dev server speed)
- Constitution: Fast development experience, modern tooling

---

## Quyết định 4: Testing Framework (Vitest vs Jest)

### Decision

**Chọn: Vitest 1.x + Testing Library**

### Rationale

**Ưu điểm Vitest**:
1. **Vite integration**: Reuses Vite config, instant test execution
2. **Speed**: 10x faster than Jest cho modern ESM projects
3. **Jest-compatible API**: Drop-in replacement, familiar API
4. **Native ESM**: No transpilation needed, test real code
5. **Watch mode**: Instant feedback, HMR-like experience

**Testing Library**: User-centric testing philosophy
- Test behavior, not implementation
- Queries mirror user actions (getByRole, getByText)
- Promotes accessibility (forces ARIA labels)

**Test Strategy**:
- **Unit tests**: Business logic (todos.js, storage.js, validators.js)
- **Integration tests**: User workflows (create todo, complete todo, subtasks)
- **No E2E needed**: Simple app, integration tests đủ coverage

**Alternatives Considered**:

| Option | Pros | Cons | Rejection Reason |
|--------|------|------|------------------|
| Jest | Industry standard, mature | Slow với ESM, heavy setup | Vitest faster, better Vite integration |
| Mocha + Chai | Flexible, minimal | Manual setup, no snapshot testing | Vitest has better DX, built-in assertions |
| Playwright/Cypress | Full E2E testing | Overkill, slow, complex setup | Integration tests đủ cho simple app |
| No testing | Simplest | Violates constitution Test Coverage | Non-negotiable: tests required |

**Test Example**:
```javascript
// create-todo.test.js
import { screen, waitFor } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';

test('User can create a new todo', async () => {
  const user = userEvent.setup();

  // User types title
  const input = screen.getByLabelText('Todo title');
  await user.type(input, 'Buy milk');

  // User submits
  await user.click(screen.getByRole('button', { name: 'Add Todo' }));

  // Todo appears in list
  expect(screen.getByText('Buy milk')).toBeInTheDocument();
});
```

### References
- Vitest documentation
- Testing Library principles
- Constitution: Test Coverage (Test-First principle)

---

## Quyết định 5: CSS Approach

### Decision

**Chọn: Vanilla CSS với CSS Custom Properties (CSS Variables)**

### Rationale

**Ưu điểm Vanilla CSS**:
1. **Zero dependencies**: Không cần Tailwind, CSS-in-JS, hoặc preprocessor
2. **Simple**: Plain CSS dễ đọc, dễ maintain
3. **Constitution-compliant**: UI minimalism không cần fancy CSS features
4. **Performance**: No runtime, no build step overhead
5. **Custom Properties**: Theming dễ dàng (dark mode future-ready)

**CSS Architecture**:
```css
/* theme.css - Design system tokens */
:root {
  --color-bg: #FFFFFF;
  --color-text: #000000;
  --color-border: #F5F5F5;
  --font-family: Calibri, sans-serif;
  --spacing-unit: 8px;
}

/* components.css - BEM-like naming */
.todo-item { /* Component styles */ }
.todo-item__title { /* Element styles */ }
.todo-item--completed { /* Modifier styles */ }
```

**Alternatives Considered**:

| Option | Pros | Cons | Rejection Reason |
|--------|------|------|------------------|
| Tailwind CSS | Utility-first, fast prototyping | Large bundle, utility soup in HTML | Overkill, violates minimalism |
| CSS-in-JS | Scoped styles, dynamic | Runtime overhead, complexity | Unnecessary, adds dependency |
| Sass/LESS | Variables, nesting, mixins | Build step, CSS variables đủ | Modern CSS has variables, not needed |
| CSS Modules | Scoped, no conflicts | Build config, overkill cho small app | Vanilla CSS + BEM naming đủ |

**Best Practices**:
- BEM naming convention cho clarity
- Mobile-first responsive (desktop = default, mobile adjustments)
- Minimal media queries (simple layout không cần nhiều breakpoints)

### References
- MDN: CSS Custom Properties
- Constitution: UI Minimalism, Simplicity First
- BEM methodology (naming only, not full methodology)

---

## Quyết định 6: Accessibility Implementation

### Decision

**Approach: Semantic HTML + ARIA + Keyboard Navigation**

### Key Requirements

**From Constitution**:
1. Keyboard navigation đầy đủ
2. ARIA labels cho screen readers
3. Color contrast WCAG AA minimum (target AAA)

**Implementation Strategy**:

**1. Semantic HTML**:
```html
<main role="main">
  <form role="form" aria-label="Add new todo">
    <label for="todo-title">Todo title</label>
    <input id="todo-title" type="text" required>
    <button type="submit">Add Todo</button>
  </form>

  <ul role="list" aria-label="Active todos">
    <li role="listitem">
      <input type="checkbox" id="todo-1" aria-label="Mark todo as complete">
      <label for="todo-1">Buy milk</label>
    </li>
  </ul>

  <section aria-labelledby="completed-heading">
    <button
      aria-expanded="false"
      aria-controls="completed-list"
      onclick="toggleCompleted()"
    >
      <h2 id="completed-heading">Completed</h2>
    </button>
    <ul id="completed-list" role="list" hidden>
      <!-- Completed todos -->
    </ul>
  </section>
</main>
```

**2. Keyboard Navigation**:
- Tab: Navigate between interactive elements
- Enter/Space: Activate buttons, toggle checkboxes
- Escape: Close modals/dialogs (nếu có edit modal)
- Arrow keys: Navigate within lists (nice-to-have, không required MVP)

**3. Screen Reader Support**:
- ARIA labels cho tất cả interactive elements
- ARIA live regions cho dynamic updates (todo added/removed)
- ARIA expanded/collapsed cho "Completed" section

**4. Color Contrast**:
- Black on White = 21:1 ratio (WCAG AAA - maximum)
- Gray borders: #F5F5F5 vẫn đủ visible với context

**Testing Accessibility**:
- Manual keyboard navigation test
- Screen reader test (NVDA/JAWS free versions)
- Lighthouse accessibility audit (target 100 score)

### References
- WCAG 2.1 Guidelines
- MDN: ARIA
- WebAIM: Keyboard Accessibility
- Constitution: Accessibility requirements

---

## Summary Table: All Technology Decisions

| Decision Area | Choice | Alternative(s) Rejected | Key Rationale |
|--------------|--------|------------------------|---------------|
| Language | Vanilla JS (ES2022) | React, Vue, Svelte | Simplicity, zero overhead, long-lasting |
| Storage | LocalStorage | IndexedDB, SessionStorage | Simple API, sufficient capacity, universal support |
| Build Tool | Vite 5.x | Webpack, Parcel, esbuild | Speed, zero-config, modern ESM support |
| Testing | Vitest + Testing Library | Jest, Mocha, Playwright | Vite integration, speed, user-centric |
| CSS | Vanilla CSS + Variables | Tailwind, CSS-in-JS, Sass | Zero deps, simple, constitution-compliant |
| Accessibility | Semantic HTML + ARIA | Framework-specific solutions | Web standards, universal, testable |

---

## Constitution Compliance Verification

✅ **I. Code Clarity**: Vanilla JS + modules = readable, self-documenting code
✅ **II. Test Coverage**: Vitest + Testing Library = comprehensive test strategy
✅ **III. Simplicity First**: Zero production dependencies, minimal tooling
✅ **IV. UI Minimalism**: Vanilla CSS, system fonts, minimalist design tokens
✅ **V. Design Philosophy**: Web standards = timeless, long-lasting solutions

**No violations.** Tất cả quyết định align với constitution principles.

---

## Next Steps (Phase 1)

1. Generate data-model.md: Define Todo và Subtask data structures
2. Generate contracts/: Data contracts cho localStorage schema
3. Generate quickstart.md: Development setup guide
4. Update agent context với tech stack mới
