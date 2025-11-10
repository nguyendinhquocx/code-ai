# Quickstart: TODO List App Development

**Ngày**: 2025-10-25
**Mục đích**: Hướng dẫn setup development environment và chạy app

## Prerequisites

**Required**:
- Node.js 18+ (LTS recommended)
- npm 9+ hoặc yarn 1.22+ hoặc pnpm 8+
- Modern browser (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)
- Git (cho version control)

**Recommended**:
- VS Code với extensions:
  - ESLint
  - Prettier
  - Vite (syntax highlighting cho vite.config.js)
- Terminal emulator (Windows Terminal, iTerm2, etc.)

## Quick Setup (< 5 phút)

### 1. Clone Repository (nếu chưa có)

```bash
# Clone project
git clone <repository-url>
cd <project-directory>

# Checkout feature branch
git checkout 001-todo-list-app
```

### 2. Install Dependencies

```bash
# Với npm
npm install

# Hoặc với yarn
yarn install

# Hoặc với pnpm
pnpm install
```

**Dependencies installed**:
- `vite` - Dev server và build tool
- `vitest` - Testing framework
- `@testing-library/dom` - DOM testing utilities
- `@testing-library/user-event` - User interaction simulation
- `happy-dom` - JSDOM alternative cho tests

### 3. Start Development Server

```bash
# Start Vite dev server
npm run dev

# Server sẽ chạy tại http://localhost:5173
# Hot Module Replacement (HMR) enabled - changes reflect instantly
```

Open browser tại `http://localhost:5173` để xem app.

### 4. Run Tests

```bash
# Run all tests once
npm test

# Run tests in watch mode (recommended during development)
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

**Expected output**: Tất cả tests pass (green). Coverage > 80% cho business logic.

## Project Structure

```
.
├── src/                    # Source code
│   ├── index.html          # Entry point HTML
│   ├── main.js             # App initialization
│   ├── modules/            # Business logic modules
│   │   ├── todos.js        # Todo CRUD operations
│   │   ├── storage.js      # LocalStorage abstraction
│   │   └── ui.js           # DOM rendering
│   ├── styles/             # CSS files
│   │   ├── main.css        # Global styles
│   │   ├── components.css  # Component styles
│   │   └── theme.css       # Design tokens
│   └── utils/              # Utility functions
│       ├── dom.js          # DOM helpers
│       └── validators.js   # Input validation
│
├── tests/                  # Test files
│   ├── unit/               # Unit tests
│   │   ├── todos.test.js
│   │   ├── storage.test.js
│   │   └── validators.test.js
│   └── integration/        # Integration tests
│       ├── create-todo.test.js
│       ├── complete-todo.test.js
│       └── subtasks.test.js
│
├── specs/                  # Design documents
│   └── 001-todo-list-app/
│       ├── spec.md         # Feature specification
│       ├── plan.md         # Implementation plan
│       ├── data-model.md   # Data structures
│       ├── research.md     # Tech decisions
│       └── contracts/      # Data contracts
│
├── vite.config.js          # Vite configuration
├── vitest.config.js        # Vitest configuration
├── package.json            # Dependencies & scripts
└── README.md               # Project overview
```

## Development Workflow

### 1. Implement Feature

```bash
# Create new branch for subtask (optional)
git checkout -b feature/add-todo-functionality

# Edit files trong src/
# Example: src/modules/todos.js
```

### 2. Write Tests

```bash
# Create test file
# Example: tests/unit/todos.test.js

# Write test cases
# Run in watch mode để see results instantly
npm run test:watch
```

**TDD Approach** (recommended):
1. Write test first (test fails - red)
2. Implement minimum code để pass test (green)
3. Refactor code (keep tests green)
4. Repeat

### 3. Manual Testing

```bash
# Run dev server
npm run dev

# Test trong browser:
# - Create todo
# - Edit todo
# - Complete todo
# - Add subtasks
# - Delete todo
# - Collapse/expand completed section
```

**Keyboard Testing**:
- Tab through all interactive elements
- Use Enter/Space để activate buttons
- Use Escape để close modals (nếu có)

### 4. Build for Production

```bash
# Build optimized bundle
npm run build

# Output: dist/ directory
# Files: index.html, assets/main-[hash].js, assets/main-[hash].css
```

**Preview production build**:
```bash
npm run preview
# Server at http://localhost:4173
```

## Common Tasks

### Clear LocalStorage (Reset App State)

**Browser DevTools**:
1. Open DevTools (F12)
2. Go to Application tab
3. Storage → LocalStorage → http://localhost:5173
4. Right-click → Clear
5. Refresh page

**Programmatically** (trong browser console):
```javascript
localStorage.clear();
location.reload();
```

### Debug Tests

```bash
# Run specific test file
npm test -- todos.test.js

# Run tests matching pattern
npm test -- --grep="create todo"

# Run with verbose output
npm test -- --reporter=verbose
```

### Lint Code (nếu có ESLint setup)

```bash
# Check code style
npm run lint

# Auto-fix issues
npm run lint:fix
```

### Format Code (nếu có Prettier setup)

```bash
# Format all files
npm run format

# Check formatting
npm run format:check
```

## Troubleshooting

### Port 5173 Already in Use

```bash
# Option 1: Kill process using port
# Windows
netstat -ano | findstr :5173
taskkill /PID <PID> /F

# Linux/Mac
lsof -ti:5173 | xargs kill -9

# Option 2: Use different port
npm run dev -- --port 3000
```

### Tests Failing

**Common issues**:
1. **Stale state**: Clear `node_modules/.vitest` cache
   ```bash
   rm -rf node_modules/.vitest
   npm test
   ```

2. **LocalStorage mock**: Ensure tests mock localStorage
   ```javascript
   beforeEach(() => {
     localStorage.clear();
   });
   ```

3. **DOM not available**: Check Vitest config has `happy-dom` environment
   ```javascript
   // vitest.config.js
   export default {
     test: {
       environment: 'happy-dom',
     },
   };
   ```

### Build Errors

**Common issues**:
1. **Module not found**: Check import paths (case-sensitive)
2. **Syntax error**: Check modern JS syntax support (ES2022)
3. **Bundle size too large**: Check for unused dependencies

```bash
# Analyze bundle size
npm run build -- --analyze
```

## Testing Scenarios

### User Story 1: CRUD Operations

**Manual test checklist**:
- [ ] Create todo với title only
- [ ] Create todo với title + description
- [ ] Edit todo title
- [ ] Edit todo description
- [ ] Delete todo
- [ ] Verify persistence (refresh page, todos still there)

### User Story 2: Completion Tracking

**Manual test checklist**:
- [ ] Mark todo as completed (checkbox check)
- [ ] Todo moves to "Completed" section
- [ ] Text has strikethrough style
- [ ] Unmark completed todo (checkbox uncheck)
- [ ] Todo moves back to active list
- [ ] Collapse/expand "Completed" section

### User Story 3: Subtasks

**Manual test checklist**:
- [ ] Add subtask to todo
- [ ] Add multiple subtasks (test progress: "3/5 hoàn thành")
- [ ] Complete subtask (independent of parent)
- [ ] Delete subtask
- [ ] Verify subtask progress updates correctly
- [ ] Delete todo with subtasks (cascade delete)

## Performance Benchmarks

**Target Metrics** (Lighthouse)

:
- Performance: > 95
- Accessibility: 100
- Best Practices: > 90
- SEO: > 80

**Load Time Targets**:
- Initial load: < 1 second
- Time to Interactive (TTI): < 2 seconds
- First Contentful Paint (FCP): < 0.5 seconds

**Measure Performance**:
```bash
# Build production bundle
npm run build

# Serve and measure
npm run preview
# Open DevTools → Lighthouse → Run audit
```

## Next Steps

Sau khi setup xong:

1. **Read documentation**:
   - `spec.md` - Feature requirements
   - `data-model.md` - Data structures
   - `plan.md` - Implementation strategy

2. **Run `/speckit.tasks`** để generate task breakdown

3. **Start implementing** theo task order (P1 → P2 → P3)

4. **Run tests frequently** - maintain test coverage > 80%

5. **Manual test** mỗi user story sau khi hoàn thành

## Resources

- [Vite Documentation](https://vitejs.dev/)
- [Vitest Documentation](https://vitest.dev/)
- [Testing Library](https://testing-library.com/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [Constitution](../../.specify/memory/constitution.md) - Project principles

## Support

**Questions?**
- Check `specs/001-todo-list-app/` documentation
- Review `research.md` cho tech decisions rationale
- Read constitution cho coding standards

**Issues?**
- Check Troubleshooting section above
- Review test failures cho error messages
- Check browser console cho runtime errors
