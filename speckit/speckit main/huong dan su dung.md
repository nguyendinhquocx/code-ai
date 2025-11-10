# Hướng dẫn Spec Kit - Giải thích cho người mới

## Phần 1: Spec Kit là cái quái gì? (Giải thích kiểu Feynman)

### Vấn đề của việc code với AI hiện tại:

Mày nói với AI: "Làm cho tao app todo"
→ AI sinh ra 1 đống code
→ Mày không hiểu nó làm gì
→ Muốn sửa thì không biết sửa chỗ nào
→ Yêu cầu AI sửa → AI sinh ra code khác hoàn toàn
→ Loop vô tận, code càng lúc càng rối

**Vấn đề gốc**: AI "đoán" requirements của mày → mỗi lần đoán khác nhau → inconsistent

---

### Spec Kit giải quyết thế nào?

**Ý tưởng đơn giản**: Thay vì để AI đoán, mày ép AI phải:
1. **Viết rõ ra mày muốn gì** (specification) - không đoán
2. **Lập kế hoạch kỹ thuật** (plan) - dùng công nghệ gì
3. **Chia nhỏ thành từng việc** (tasks) - làm cái này trước, cái kia sau
4. **Rồi mới code** (implement) - theo đúng kế hoạch

**Ví dụ đời thực**:

Cách cũ (vibe coding):
```
Mày: "Làm nhà cho tao"
Thợ xây: *xây lung tung không có bản vẽ*
Mày: "Ủa sao không có cửa sổ?"
Thợ xây: *đập đi xây lại*
```

Cách mới (Spec Kit):
```
Mày: "Làm nhà cho tao"
→ Bước 1: Viết bản vẽ nhà (spec) - 3 phòng ngủ, 2 WC, bếp, phòng khách
→ Bước 2: Chọn vật liệu (plan) - gạch này, xi măng kia
→ Bước 3: Chia công việc (tasks) - đào móng trước, đổ bê tông, xây tường...
→ Bước 4: Thi công (implement) - theo đúng bản vẽ
```

Lợi ích: Có bản vẽ → sửa dễ → không phải đập đi làm lại

---

### 5 bước của Spec Kit:

```
┌─────────────────────────────────────────────────────────────┐
│  /speckit.constitution                                      │
│  ↓                                                           │
│  Tạo "luật lệ" của dự án (giống hiến pháp)                 │
│  VD: "Mọi feature phải có test trước khi code"             │
└─────────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────────┐
│  /speckit.specify [mô tả feature]                           │
│  ↓                                                           │
│  AI viết spec rõ ràng: MUỐN GÌ (what) + TẠI SAO (why)      │
│  Không nói VỀ CÁCH LÀM (how)                                │
│  VD: "User cần thêm todo, sửa todo, xóa todo"              │
└─────────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────────┐
│  /speckit.plan [công nghệ]                                  │
│  ↓                                                           │
│  AI lập kế hoạch kỹ thuật: CÁCH LÀM (how)                  │
│  VD: "Dùng React + Node.js + SQLite"                       │
└─────────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────────┐
│  /speckit.tasks                                             │
│  ↓                                                           │
│  AI chia nhỏ thành tasks cụ thể                            │
│  VD: "Task 1: Tạo database, Task 2: Tạo API..."           │
└─────────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────────┐
│  /speckit.implement                                         │
│  ↓                                                           │
│  AI code theo đúng tasks                                    │
│  Viết test trước → rồi mới code                            │
└─────────────────────────────────────────────────────────────┘
```

---

### Tại sao cách này tốt hơn?

1. **Có "bản vẽ" rõ ràng**: spec.md là tài liệu mày muốn gì
2. **Có lịch sử quyết định**: research.md ghi lại tại sao chọn React chứ không phải Vue
3. **Dễ sửa**: Muốn đổi → sửa spec → AI regenerate code mới
4. **Không quên việc**: tasks.md liệt kê đầy đủ, đánh dấu [X] khi xong
5. **Test trước code**: Đảm bảo code chạy đúng, không phải fix lỗi sau

---

## Phần 2: Thực hành - Tạo ứng dụng TODO từ đầu

### Chuẩn bị:

**Cài đặt tools cần thiết:**

```bash
# 1. Cài Python 3.11+ (nếu chưa có)
# Windows: Download từ python.org
# macOS: brew install python@3.11
# Linux: sudo apt install python3.11

# 2. Cài uv (package manager)
# Windows (PowerShell):
powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"

# macOS/Linux:
curl -LsSf https://astral.sh/uv/install.sh | sh

# 3. Cài Git (nếu chưa có)
# https://git-scm.com/downloads

# 4. Cài Claude Code (hoặc AI agent khác)
# https://docs.anthropic.com/en/docs/claude-code/setup
```

---

### Bước 1: Cài Spec Kit CLI

```bash
# Cài một lần, dùng mãi mãi
uv tool install specify-cli --from git+https://github.com/github/spec-kit.git

# Kiểm tra đã cài thành công chưa
specify --help
```

Mày sẽ thấy banner như này:
```
███████╗██████╗ ███████╗ ██████╗██╗███████╗██╗   ██╗
██╔════╝██╔══██╗██╔════╝██╔════╝██║██╔════╝╚██╗ ██╔╝
███████╗██████╔╝█████╗  ██║     ██║█████╗   ╚████╔╝
╚════██║██╔═══╝ ██╔══╝  ██║     ██║██╔══╝    ╚██╔╝
███████║██║     ███████╗╚██████╗██║██║        ██║
╚══════╝╚═╝     ╚══════╝ ╚═════╝╚═╝╚═╝        ╚═╝
```

---

### Bước 2: Khởi tạo project TODO

```bash
# Tạo project mới tên "my-todo-app"
specify init my-todo-app --ai claude

# Hoặc nếu mày đang ở trong folder rồi:
specify init . --ai claude
```

Nó sẽ hỏi mày:
- Chọn AI assistant: Chọn `claude` (hoặc copilot, gemini...)
- Chọn script type: Chọn `sh` (Linux/Mac) hoặc `ps` (Windows)

**Chuyện gì xảy ra**:
1. Download template từ GitHub
2. Tạo folder `.specify/` với scripts và templates
3. Tạo folder `.claude/commands/` với các slash commands
4. Init git repo
5. Ready!

---

### Bước 3: Vào project và mở Claude Code

```bash
cd my-todo-app
claude
```

Mày sẽ thấy trong Claude Code có các slash commands:
- `/speckit.constitution`
- `/speckit.specify`
- `/speckit.plan`
- `/speckit.tasks`
- `/speckit.implement`
- `/speckit.clarify`
- `/speckit.analyze`
- `/speckit.checklist`

---

### Bước 4: Tạo "Hiến pháp" dự án

Gõ trong Claude Code:

```
/speckit.constitution Tạo nguyên tắc cho app todo đơn giản:
- Code phải clean và dễ đọc
- Mọi feature phải có test
- Ưu tiên đơn giản, không phức tạp hóa
- UI phải thân thiện với người dùng
```

**AI sẽ tạo file** `.specify/memory/constitution.md` với nguyên tắc như:
- Library-First: Mọi feature là library độc lập
- Test-First: Viết test trước, code sau
- Simplicity: Không over-engineering
- etc.

---

### Bước 5: Viết Specification (Spec) cho TODO app

Gõ trong Claude Code:

```
/speckit.specify Ứng dụng TODO list đơn giản. User có thể:
- Thêm todo mới với tiêu đề và mô tả
- Đánh dấu todo đã hoàn thành
- Sửa todo đã tạo
- Xóa todo
- Lọc todo theo trạng thái (all, active, completed)
- Dữ liệu lưu trong local storage, không cần đăng nhập
```

**AI sẽ làm**:
1. Tạo branch mới: `001-todo-list` (tự động)
2. Tạo file `specs/001-todo-list/spec.md` với nội dung:
   - **User Scenarios**: User thêm todo, user đánh dấu hoàn thành...
   - **Functional Requirements**:
     - FR1: Hệ thống phải cho phép user thêm todo
     - FR2: Todo phải có title (bắt buộc) và description (optional)
     - FR3: User có thể đánh dấu todo completed/uncompleted
     - etc.
   - **Success Criteria** (đo lường được):
     - User có thể thêm todo trong dưới 3 giây
     - UI phản hồi ngay lập tức khi click
     - Dữ liệu persist khi refresh trang
   - **Key Entities**:
     - Todo: { id, title, description, completed, createdAt }
   - **Assumptions**:
     - Browser hỗ trợ localStorage
     - Không cần sync giữa devices
3. Tạo checklist validation tại `specs/001-todo-list/checklists/requirements.md`
4. Validate spec:
   - Kiểm tra không có implementation details
   - Requirements phải testable
   - Success criteria phải measurable

**Nếu AI hỏi clarification** (max 3 câu):
```
Q1: Giới hạn số lượng todos?
A: Không giới hạn

Q2: Todo có deadline không?
A: Không cần deadline, giữ đơn giản

Q3: Có cần sắp xếp todos không?
A: Hiển thị mới nhất ở trên
```

AI sẽ update spec với các câu trả lời này.

---

### Bước 6: Lập kế hoạch kỹ thuật (Plan)

Gõ trong Claude Code:

```
/speckit.plan Xây dựng bằng React với Vite, không cần backend.
Dùng localStorage để lưu trữ. UI đơn giản với CSS thuần,
không dùng library UI phức tạp. Dùng TypeScript để type-safe.
```

**AI sẽ tạo**:

1. **`specs/001-todo-list/plan.md`**: Implementation plan
   - Tech Stack:
     - Frontend: React 18 + TypeScript
     - Build: Vite
     - Storage: localStorage API
     - Styling: CSS modules
     - Testing: Vitest + React Testing Library
   - Architecture:
     - Components: TodoList, TodoItem, TodoForm, FilterBar
     - Hooks: useTodos (manage state + localStorage sync)
     - Utils: localStorage helpers
   - File Structure:
     ```
     src/
       components/
         TodoList.tsx
         TodoItem.tsx
         TodoForm.tsx
         FilterBar.tsx
       hooks/
         useTodos.ts
       types/
         todo.ts
       utils/
         storage.ts
       App.tsx
       main.tsx
     ```

2. **`specs/001-todo-list/data-model.md`**: Data structures
   ```typescript
   interface Todo {
     id: string;
     title: string;
     description: string;
     completed: boolean;
     createdAt: number;
   }

   type TodoFilter = 'all' | 'active' | 'completed';
   ```

3. **`specs/001-todo-list/contracts/`**: API contracts
   - `storage-contract.ts`: localStorage interface
     ```typescript
     interface TodoStorage {
       getAll(): Todo[];
       save(todos: Todo[]): void;
       clear(): void;
     }
     ```

4. **`specs/001-todo-list/research.md`**: Technical decisions
   - **Decision**: Dùng Vite thay vì Create React App
   - **Rationale**: Faster build, modern tooling
   - **Alternatives**: CRA (deprecated), Next.js (overkill for local-only app)

5. **`specs/001-todo-list/quickstart.md`**: Validation scenarios
   - Test Case 1: Add new todo → verify appears in list
   - Test Case 2: Mark complete → verify checkmark appears
   - Test Case 3: Refresh page → verify todos still there

6. Update `.claude/commands/` với tech stack context

---

### Bước 7: Chia nhỏ thành Tasks

Gõ trong Claude Code:

```
/speckit.tasks
```

**AI sẽ tạo** `specs/001-todo-list/tasks.md`:

```markdown
# Tasks: Todo List App

## Phase 1: Setup
- [P] Task 1.1: Initialize Vite + React + TypeScript project
- [P] Task 1.2: Install dependencies (vitest, @testing-library/react)
- [ ] Task 1.3: Setup folder structure (components, hooks, types, utils)
- [ ] Task 1.4: Create .gitignore (.env, node_modules, dist)

## Phase 2: Data Layer
- [ ] Task 2.1: Define Todo type in types/todo.ts
- [ ] Task 2.2: Implement localStorage utils in utils/storage.ts
- [ ] Task 2.3: Write tests for storage utils
- [ ] Task 2.4: Implement useTodos hook
- [ ] Task 2.5: Write tests for useTodos hook

## Phase 3: Components
- [P] Task 3.1: Create TodoForm component (add new todo)
- [P] Task 3.2: Create TodoItem component (display single todo)
- [P] Task 3.3: Create FilterBar component (all/active/completed)
- [ ] Task 3.4: Create TodoList component (orchestrate everything)
- [ ] Task 3.5: Write component tests

## Phase 4: Integration
- [ ] Task 4.1: Wire up components in App.tsx
- [ ] Task 4.2: Add CSS styling
- [ ] Task 4.3: Test full flow end-to-end
- [ ] Task 4.4: Fix any bugs

## Phase 5: Polish
- [ ] Task 5.1: Add loading states
- [ ] Task 5.2: Add empty state message
- [ ] Task 5.3: Add confirmation for delete
- [ ] Task 5.4: Write README.md
```

**Giải thích**:
- `[P]` = Parallel - có thể làm đồng thời
- `[ ]` = Uncompleted
- `[X]` = Completed (AI sẽ đánh dấu khi xong)

---

### Bước 8: Implement!

Gõ trong Claude Code:

```
/speckit.implement
```

**AI sẽ làm**:

1. **Check checklists**: Nếu có checklist chưa hoàn thành, hỏi mày có muốn tiếp tục không
2. **Tạo ignore files**: `.gitignore`, `.eslintignore` với patterns phù hợp
3. **Execute tasks theo thứ tự**:

   **Phase 1: Setup**
   ```bash
   # AI chạy:
   npm create vite@latest . -- --template react-ts
   npm install
   npm install -D vitest @testing-library/react @testing-library/jest-dom

   # AI tạo folders:
   mkdir -p src/{components,hooks,types,utils}
   ```
   → Đánh dấu `[X]` Tasks 1.1, 1.2, 1.3, 1.4

   **Phase 2: Data Layer**

   AI tạo `src/types/todo.ts`:
   ```typescript
   export interface Todo {
     id: string;
     title: string;
     description: string;
     completed: boolean;
     createdAt: number;
   }

   export type TodoFilter = 'all' | 'active' | 'completed';
   ```

   AI tạo `src/utils/storage.test.ts` (TEST TRƯỚC):
   ```typescript
   import { describe, it, expect, beforeEach } from 'vitest';
   import { saveTodos, loadTodos, clearTodos } from './storage';

   describe('localStorage utils', () => {
     beforeEach(() => {
       localStorage.clear();
     });

     it('should save and load todos', () => {
       const todos = [{ id: '1', title: 'Test', description: '', completed: false, createdAt: Date.now() }];
       saveTodos(todos);
       expect(loadTodos()).toEqual(todos);
     });

     it('should return empty array when no data', () => {
       expect(loadTodos()).toEqual([]);
     });
   });
   ```

   AI tạo `src/utils/storage.ts` (CODE SAU):
   ```typescript
   import { Todo } from '../types/todo';

   const STORAGE_KEY = 'todos';

   export function saveTodos(todos: Todo[]): void {
     localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
   }

   export function loadTodos(): Todo[] {
     const data = localStorage.getItem(STORAGE_KEY);
     return data ? JSON.parse(data) : [];
   }

   export function clearTodos(): void {
     localStorage.removeItem(STORAGE_KEY);
   }
   ```

   AI chạy test: `npm run test`
   → Đánh dấu `[X]` Tasks 2.1, 2.2, 2.3

   Tương tự cho `useTodos` hook, components...

   **Phase 3: Components**

   AI tạo `src/components/TodoForm.tsx`:
   ```typescript
   import { useState } from 'react';

   interface TodoFormProps {
     onAdd: (title: string, description: string) => void;
   }

   export function TodoForm({ onAdd }: TodoFormProps) {
     const [title, setTitle] = useState('');
     const [description, setDescription] = useState('');

     const handleSubmit = (e: React.FormEvent) => {
       e.preventDefault();
       if (!title.trim()) return;
       onAdd(title, description);
       setTitle('');
       setDescription('');
     };

     return (
       <form onSubmit={handleSubmit}>
         <input
           type="text"
           placeholder="Todo title"
           value={title}
           onChange={(e) => setTitle(e.target.value)}
           required
         />
         <input
           type="text"
           placeholder="Description (optional)"
           value={description}
           onChange={(e) => setDescription(e.target.value)}
         />
         <button type="submit">Add Todo</button>
       </form>
     );
   }
   ```

   Tương tự cho TodoItem, FilterBar, TodoList...

   **Phase 4: Integration**

   AI tạo `src/App.tsx`:
   ```typescript
   import { TodoList } from './components/TodoList';
   import './App.css';

   function App() {
     return (
       <div className="app">
         <h1>My Todo App</h1>
         <TodoList />
       </div>
     );
   }

   export default App;
   ```

   AI thêm CSS styling vào `src/App.css`, component CSS modules...

   **Phase 5: Polish**

   AI thêm loading states, empty states, confirmations...

4. **Report completion**:
   ```
   ✓ All tasks completed (20/20)
   ✓ Tests passing (15 tests)
   ✓ Implementation matches spec
   ✓ Ready for testing
   ```

---

### Bước 9: Chạy app

```bash
npm run dev
```

Mở browser: `http://localhost:5173`

Test các tính năng:
- ✓ Thêm todo
- ✓ Đánh dấu complete
- ✓ Sửa todo
- ✓ Xóa todo
- ✓ Filter all/active/completed
- ✓ Refresh page → data vẫn còn

---

## Phần 3: Nâng cấp và Fix lỗi

### Case 1: Muốn thêm tính năng mới (ví dụ: Add due date cho todo)

**Quy trình**:

```bash
# 1. Tạo feature mới
cd my-todo-app
claude
```

Trong Claude Code:
```
/speckit.specify Thêm tính năng due date cho todos. User có thể:
- Chọn due date khi tạo todo (optional)
- Sửa due date của todo đã tạo
- Xóa due date
- Todos được sắp xếp theo due date (sắp đến hạn ở trên)
- Todo quá hạn sẽ highlight màu đỏ
```

AI sẽ:
1. Tạo branch mới: `002-add-due-date`
2. Tạo spec: `specs/002-add-due-date/spec.md`
3. Hỏi clarifications nếu cần

Tiếp tục:
```
/speckit.plan Mở rộng Todo type với dueDate field.
Dùng date picker component từ HTML5 input type="date".
Update localStorage schema. Thêm sort logic trong useTodos hook.
```

```
/speckit.tasks
```

```
/speckit.implement
```

**Kết quả**:
- AI sẽ update `types/todo.ts` thêm `dueDate?: number`
- Update `TodoForm` với date picker
- Update `TodoItem` với due date display + highlight logic
- Update `useTodos` với sort by due date
- Migration script cho localStorage (transform old todos)
- Tests cho tất cả thay đổi

---

### Case 2: Fix lỗi (ví dụ: Todo không persist sau refresh)

**Cách 1: Fix nhanh trong conversation**

Trong Claude Code:
```
Tao thấy todos bị mất sau khi refresh. Fix lỗi này đi.
```

AI sẽ:
1. Debug: Check `useTodos` hook
2. Tìm ra lỗi: `useEffect` không save vào localStorage khi todos change
3. Fix:
   ```typescript
   useEffect(() => {
     saveTodos(todos); // Thêm dòng này
   }, [todos]);
   ```
4. Test lại

**Cách 2: Fix theo quy trình Spec Kit (cho bug phức tạp)**

```
/speckit.specify Fix bug: Todos không persist sau refresh.
Root cause: useTodos hook không sync với localStorage khi state changes.
Expected: Mọi thay đổi todos phải tự động save vào localStorage.
```

AI tạo spec cho bugfix → plan → tasks → implement

---

### Case 3: Refactor code (ví dụ: Extract localStorage logic thành service)

```
/speckit.specify Refactor localStorage logic thành TodoService class
để dễ test và mở rộng. TodoService sẽ:
- Encapsulate tất cả localStorage operations
- Provide methods: getAll(), save(), delete(), update()
- Support migration khi schema thay đổi
- Có error handling cho quota exceeded
```

```
/speckit.plan Tạo TodoService class trong services/TodoService.ts.
Implement Singleton pattern. Update useTodos hook để dùng TodoService.
Viết unit tests cho TodoService trước khi refactor.
```

```
/speckit.tasks
```

```
/speckit.implement
```

AI sẽ:
1. Tạo tests cho TodoService trước
2. Implement TodoService
3. Refactor useTodos để dùng TodoService
4. Run tests đảm bảo không break existing functionality

---

### Case 4: Nâng cấp tech stack (ví dụ: Migrate từ localStorage sang IndexedDB)

```
/speckit.specify Migrate storage từ localStorage sang IndexedDB
để support offline-first và lưu được dữ liệu lớn hơn.
Requirements:
- Tương thích ngược với localStorage data
- Migration tự động khi user mở app lần đầu
- Fallback về localStorage nếu browser không support IndexedDB
```

```
/speckit.plan Dùng idb library (wrapper cho IndexedDB API).
Tạo IndexedDBService implement TodoStorage interface.
Tạo migration script detect localStorage data và migrate sang IndexedDB.
Update useTodos hook với storage abstraction.
```

```
/speckit.tasks
```

```
/speckit.implement
```

AI sẽ tạo:
- `services/IndexedDBService.ts`
- `services/migrations/localStorageToIndexedDB.ts`
- Tests cho migration
- Update useTodos với storage adapter pattern

---

## Workflow tổng hợp:

```
┌──────────────────────────────────────────────┐
│  FIRST TIME: Tạo app mới                     │
├──────────────────────────────────────────────┤
│  1. specify init my-app --ai claude          │
│  2. /speckit.constitution                    │
│  3. /speckit.specify [mô tả]                 │
│  4. /speckit.plan [tech stack]               │
│  5. /speckit.tasks                           │
│  6. /speckit.implement                       │
│  7. Test app                                 │
└──────────────────────────────────────────────┘
                    ↓
┌──────────────────────────────────────────────┐
│  ADD FEATURE: Thêm tính năng mới             │
├──────────────────────────────────────────────┤
│  1. /speckit.specify [feature mới]           │
│     → Tạo branch mới (002-feature-name)      │
│  2. /speckit.plan [tech approach]            │
│  3. /speckit.tasks                           │
│  4. /speckit.implement                       │
│  5. Test feature mới                         │
│  6. Merge branch về main                     │
└──────────────────────────────────────────────┘
                    ↓
┌──────────────────────────────────────────────┐
│  FIX BUG: Sửa lỗi                            │
├──────────────────────────────────────────────┤
│  Quick fix:                                  │
│  → Nói trực tiếp với AI: "Fix lỗi này"      │
│                                              │
│  Complex fix:                                │
│  1. /speckit.specify Fix bug: [mô tả]       │
│  2. /speckit.plan [approach]                 │
│  3. /speckit.tasks                           │
│  4. /speckit.implement                       │
└──────────────────────────────────────────────┘
                    ↓
┌──────────────────────────────────────────────┐
│  REFACTOR: Cải thiện code                   │
├──────────────────────────────────────────────┤
│  1. /speckit.specify Refactor [mô tả]       │
│  2. /speckit.plan [approach]                 │
│  3. /speckit.tasks                           │
│  4. /speckit.implement                       │
│  5. Run tests đảm bảo không break           │
└──────────────────────────────────────────────┘
```

---

## Tips & Tricks:

### 1. Spec càng rõ ràng, code càng tốt
❌ Tệ:
```
/speckit.specify Làm app todo
```

✅ Tốt:
```
/speckit.specify Ứng dụng TODO list cho sinh viên quản lý deadline.
Features:
- Thêm/sửa/xóa todos
- Due date cho mỗi todo
- Priority levels (high/medium/low)
- Filter theo date range
- Export todos ra CSV
- Dark mode
Constraints:
- Chỉ local storage, không cloud
- Phải hoạt động offline
- Mobile responsive
```

### 2. Dùng /speckit.clarify khi spec chưa rõ

Thay vì đoán, để AI hỏi:
```
/speckit.specify [mô tả sơ bộ]
→ AI tạo spec với [NEEDS CLARIFICATION] markers
/speckit.clarify
→ AI hỏi max 5 câu hỏi cụ thể
→ Mày trả lời
→ AI update spec
```

### 3. Review artifacts trước khi implement

Sau `/speckit.plan`, check:
- `plan.md`: Tech stack có hợp lý không?
- `data-model.md`: Data structure có thiếu field nào không?
- `contracts/`: API có đầy đủ không?

Nếu thấy sai, sửa trực tiếp hoặc yêu cầu AI sửa.

### 4. Commit sau mỗi phase

```bash
git add .
git commit -m "Complete spec for todo app"

# Sau /speckit.plan
git commit -m "Complete implementation plan"

# Sau /speckit.implement
git commit -m "Implement todo app - all tests passing"
```

→ Dễ rollback nếu có vấn đề

### 5. Sử dụng branches cho từng feature

Spec Kit tự động tạo branch cho mỗi feature:
- `001-todo-list` (feature chính)
- `002-add-due-date` (feature phụ)
- `003-export-csv` (feature phụ)

Sau khi xong, merge về `main`:
```bash
git checkout main
git merge 002-add-due-date
```

### 6. Keep constitution updated

Khi dự án phát triển, update constitution:
```
/speckit.constitution Update: Thêm nguyên tắc về performance.
Mọi operation phải hoàn thành dưới 100ms.
Không dùng libraries quá 100KB nếu không thực sự cần thiết.
```

---

## Troubleshooting:

### Vấn đề 1: AI không chạy scripts

**Triệu chứng**: AI báo lỗi khi run `{SCRIPT}`

**Nguyên nhân**: Scripts không có quyền execute (Linux/Mac)

**Fix**:
```bash
# Linux/Mac
chmod +x .specify/scripts/bash/*.sh

# Hoặc dùng Spec Kit fix tự động:
specify init . --here
```

### Vấn đề 2: Tasks quá nhiều, AI bị quá tải

**Triệu chứng**: AI generate tasks.md với 100+ tasks

**Fix**:
```
Chia nhỏ feature thành nhiều features nhỏ hơn.
Thay vì "Build complete e-commerce site", chia thành:
- Feature 1: Product listing
- Feature 2: Shopping cart
- Feature 3: Checkout
...
```

### Vấn đề 3: AI vi phạm constitution

**Triệu chứng**: AI tạo code không follow nguyên tắc (vd: không có tests)

**Fix**:
```
Nhắc AI:
"Mày vi phạm constitution Article III - Test-First.
Viết lại, test trước, code sau."
```

### Vấn đề 4: Spec và implementation không khớp

**Nguyên nhân**: Spec thay đổi giữa chừng nhưng không update plan

**Fix**:
```bash
# 1. Update spec
vim specs/001-todo-list/spec.md

# 2. Regenerate plan
/speckit.plan [update với thông tin mới]

# 3. Regenerate tasks
/speckit.tasks

# 4. Re-implement
/speckit.implement
```

---

## Summary:

**Spec Kit = Framework ép AI làm việc có kỷ luật**

Quy trình 5 bước:
1. **Constitution**: Luật lệ dự án
2. **Specify**: WHAT + WHY (không có HOW)
3. **Plan**: HOW (tech stack, architecture)
4. **Tasks**: Chia nhỏ có thứ tự
5. **Implement**: Code theo plan, test-first

**Lợi ích**:
- Có "bản vẽ" rõ ràng (spec)
- Dễ maintain (docs luôn sync với code)
- Dễ nâng cấp (sửa spec → regenerate)
- Quality cao (test-first, checklist validation)
- Traceable (biết tại sao làm thế này)

**Khi nào dùng**:
- ✅ Dự án mới từ đầu
- ✅ Thêm feature lớn
- ✅ Refactor code
- ✅ Migration tech stack
- ❌ Fix typo đơn giản (overkill)
- ❌ Prototype nhanh để demo (quá chậm)

**Nhớ**: Spec Kit không phải "magic", nó chỉ là framework ép AI follow process. Garbage in → garbage out. Spec càng rõ, code càng tốt.
