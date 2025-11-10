# Data Model: TODO List App

**Ngày**: 2025-10-25
**Mục đích**: Định nghĩa cấu trúc dữ liệu cho todos và subtasks

## Overview

App sử dụng localStorage để lưu trữ todos dưới dạng JSON array. Mỗi todo là một object với các fields cụ thể. Subtasks được lưu như nested array trong todo parent.

## Entity: Todo

### Description

Đại diện cho một công việc cần làm. Todo có thể có subtasks (mục con) và có 2 states: active hoặc completed.

### Fields

| Field | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| id | string (UUID) | Yes | auto-generated | Unique identifier cho todo. Format: `todo-{timestamp}-{random}` |
| title | string | Yes | - | Tiêu đề của todo. Max 500 characters. |
| description | string | No | "" | Mô tả chi tiết của todo. Max 2000 characters. |
| completed | boolean | Yes | false | Trạng thái hoàn thành. true = completed, false = active. |
| createdAt | number (timestamp) | Yes | Date.now() | Unix timestamp (milliseconds) khi todo được tạo. |
| updatedAt | number (timestamp) | Yes | Date.now() | Unix timestamp (milliseconds) khi todo được update lần cuối. |
| subtasks | Array<Subtask> | Yes | [] | Danh sách subtasks. Empty array nếu không có subtasks. |

### Validation Rules

**Title**:
- Required: Must not be empty or whitespace-only
- Max length: 500 characters
- Trimmed: Leading/trailing whitespace removed

**Description**:
- Optional: Can be empty string
- Max length: 2000 characters
- Trimmed: Leading/trailing whitespace removed

**Completed**:
- Must be boolean (true/false)
- Cannot be null or undefined

**Subtasks**:
- Must be array
- Max subtasks per todo: 50 (reasonable limit)
- Each subtask must be valid Subtask object

### State Transitions

```
[Create] → Active (completed: false)
Active → Completed (user toggles checkbox)
Completed → Active (user untogglescompleted checkbox)
[Delete] → (todo removed from array)
```

### Example

```json
{
  "id": "todo-1729857600000-abc123",
  "title": "Mua sữa",
  "description": "Mua 2 hộp sữa tươi ở siêu thị",
  "completed": false,
  "createdAt": 1729857600000,
  "updatedAt": 1729857600000,
  "subtasks": [
    {
      "id": "subtask-1729857610000-xyz789",
      "title": "Kiểm tra giá",
      "completed": true
    },
    {
      "id": "subtask-1729857620000-def456",
      "title": "Mua loại ít đường",
      "completed": false
    }
  ]
}
```

---

## Entity: Subtask

### Description

Đại diện cho một mục con trong todo. Subtask đơn giản hơn todo, chỉ có title và completion status.

### Fields

| Field | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| id | string (UUID) | Yes | auto-generated | Unique identifier cho subtask. Format: `subtask-{timestamp}-{random}` |
| title | string | Yes | - | Tiêu đề của subtask. Max 300 characters. |
| completed | boolean | Yes | false | Trạng thái hoàn thành. true = completed, false = active. |

### Validation Rules

**Title**:
- Required: Must not be empty or whitespace-only
- Max length: 300 characters
- Trimmed: Leading/trailing whitespace removed

**Completed**:
- Must be boolean (true/false)
- Cannot be null or undefined

### Relationships

- **Parent**: Mỗi subtask thuộc về một todo duy nhất (identified by todo.id)
- **Deletion**: Khi todo parent bị xóa, tất cả subtasks cũng bị xóa (cascade delete)
- **Independence**: Subtask completion status độc lập với todo parent completion status

### Example

```json
{
  "id": "subtask-1729857610000-xyz789",
  "title": "Kiểm tra giá",
  "completed": true
}
```

---

## Storage Schema

### LocalStorage Key

**Key**: `"todos"`
**Value**: JSON string của array todos

### Full Storage Example

```json
[
  {
    "id": "todo-1729857600000-abc123",
    "title": "Mua sữa",
    "description": "Mua 2 hộp sữa tươi ở siêu thị",
    "completed": false,
    "createdAt": 1729857600000,
    "updatedAt": 1729857600000,
    "subtasks": [
      {
        "id": "subtask-1729857610000-xyz789",
        "title": "Kiểm tra giá",
        "completed": true
      }
    ]
  },
  {
    "id": "todo-1729857700000-ghi789",
    "title": "Viết báo cáo",
    "description": "",
    "completed": true,
    "createdAt": 1729857700000,
    "updatedAt": 1729858000000,
    "subtasks": []
  }
]
```

### Storage Size Estimation

**Per Todo** (average):
- Basic fields: ~200 bytes
- Title (avg 30 chars): ~30 bytes
- Description (avg 100 chars): ~100 bytes
- Subtasks (avg 3, each ~100 bytes): ~300 bytes
- **Total**: ~630 bytes per todo

**Scale**:
- 100 todos: ~63KB
- 500 todos: ~315KB
- 1000 todos: ~630KB

**LocalStorage Limit**: Typically 5-10MB
**Maximum Capacity**: ~8,000-16,000 todos (far exceeds typical use case)

---

## Data Access Patterns

### Common Operations

**1. Load all todos**:
```javascript
const todos = JSON.parse(localStorage.getItem('todos') || '[]');
```

**2. Save all todos**:
```javascript
localStorage.setItem('todos', JSON.stringify(todos));
```

**3. Get active todos** (completed: false):
```javascript
const active = todos.filter(todo => !todo.completed);
```

**4. Get completed todos** (completed: true):
```javascript
const completed = todos.filter(todo => todo.completed);
```

**5. Find todo by ID**:
```javascript
const todo = todos.find(t => t.id === todoId);
```

**6. Update todo**:
```javascript
const index = todos.findIndex(t => t.id === todoId);
if (index !== -1) {
  todos[index] = { ...todos[index], ...updates, updatedAt: Date.now() };
  localStorage.setItem('todos', JSON.stringify(todos));
}
```

**7. Delete todo**:
```javascript
const filtered = todos.filter(t => t.id !== todoId);
localStorage.setItem('todos', JSON.stringify(filtered));
```

**8. Add subtask**:
```javascript
const todo = todos.find(t => t.id === todoId);
if (todo) {
  todo.subtasks.push(newSubtask);
  todo.updatedAt = Date.now();
  localStorage.setItem('todos', JSON.stringify(todos));
}
```

---

## Data Integrity

### Constraints

1. **Unique IDs**: Mỗi todo và subtask phải có ID unique
2. **No orphan subtasks**: Subtasks chỉ tồn tại trong context của todo parent
3. **Timestamps**: createdAt không thay đổi, updatedAt update mỗi lần modify

### Error Handling

**LocalStorage Full**:
- Catch QuotaExceededError
- Show user-friendly message: "Storage limit reached. Please delete old todos."
- Graceful degradation: Keep app functional, warn before operations

**Data Corruption**:
- JSON.parse error → Reset to empty array `[]`
- Invalid todo structure → Filter out invalid todos, log warning
- Missing required fields → Provide defaults where possible

**Migration Strategy** (future):
- Version field trong storage schema (hiện tại: implicit v1)
- Migration functions khi schema changes
- Backward compatibility cho old data

---

## Computed Values

### Subtask Progress

**Formula**: `completedCount / totalCount`

```javascript
function getSubtaskProgress(todo) {
  if (todo.subtasks.length === 0) return null;
  const completed = todo.subtasks.filter(s => s.completed).length;
  return {
    completed,
    total: todo.subtasks.length,
    percentage: Math.round((completed / todo.subtasks.length) * 100)
  };
}
// Example: "3/5 hoàn thành" (60%)
```

### Todo Statistics

```javascript
function getTodoStats(todos) {
  return {
    total: todos.length,
    active: todos.filter(t => !t.completed).length,
    completed: todos.filter(t => t.completed).length,
    withSubtasks: todos.filter(t => t.subtasks.length > 0).length,
  };
}
```

---

## TypeScript Types (Reference)

Mặc dù app dùng vanilla JavaScript, đây là types cho reference/documentation:

```typescript
interface Subtask {
  id: string;
  title: string;
  completed: boolean;
}

interface Todo {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
  updatedAt: number;
  subtasks: Subtask[];
}

type TodoList = Todo[];

interface SubtaskProgress {
  completed: number;
  total: number;
  percentage: number;
}

interface TodoStats {
  total: number;
  active: number;
  completed: number;
  withSubtasks: number;
}
```

---

## Notes

- **No server-side validation**: Tất cả validation happens client-side
- **No database**: localStorage là single source of truth
- **No sync**: Data chỉ local, không sync across devices
- **No versioning**: Không có todo version history (future enhancement)
- **No soft delete**: Delete là permanent (no trash/restore trong MVP)
