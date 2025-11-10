# Contracts: TODO List App

## Overview

Folder này chứa data contracts cho TODO app. Vì app không có REST API (chỉ localStorage), contracts ở đây là **data schemas** thay vì API contracts.

## Files

### storage-schema.json

JSON Schema validates cấu trúc dữ liệu trong localStorage.

**Purpose**:
- Document data structure
- Validate data integrity (optional runtime validation)
- Reference cho developers

**Usage** (optional validation):
```javascript
import Ajv from 'ajv'; // Dev dependency only
import schema from '../specs/001-todo-list-app/contracts/storage-schema.json';

const ajv = new Ajv();
const validate = ajv.compile(schema);

function validateTodos(todos) {
  const valid = validate(todos);
  if (!valid) {
    console.error('Invalid todos data:', validate.errors);
    return false;
  }
  return true;
}
```

**Note**: JSON Schema validation là **optional** và chỉ dùng trong development/testing. Production code không cần runtime validation (performance overhead).

## Data Contracts Summary

### Todo Object

```json
{
  "id": "string (pattern: todo-{timestamp}-{random})",
  "title": "string (1-500 chars, required)",
  "description": "string (0-2000 chars, optional)",
  "completed": "boolean (required)",
  "createdAt": "number (timestamp, required)",
  "updatedAt": "number (timestamp, required)",
  "subtasks": "Array<Subtask> (max 50, required)"
}
```

### Subtask Object

```json
{
  "id": "string (pattern: subtask-{timestamp}-{random})",
  "title": "string (1-300 chars, required)",
  "completed": "boolean (required)"
}
```

### Storage Format

**LocalStorage Key**: `"todos"`
**Value**: JSON string của `Array<Todo>`

## Validation Rules

**Todo**:
- `id`: Must match pattern `todo-{timestamp}-{random}`
- `title`: Required, 1-500 characters
- `description`: Optional, max 2000 characters
- `completed`: Required boolean
- `createdAt`: Required timestamp (number >= 0)
- `updatedAt`: Required timestamp (number >= 0)
- `subtasks`: Required array, max 50 items

**Subtask**:
- `id`: Must match pattern `subtask-{timestamp}-{random}`
- `title`: Required, 1-300 characters
- `completed`: Required boolean

## Future Extensions

Nếu cần API sau này (ví dụ: sync feature), có thể add:
- `api-endpoints.yaml`: OpenAPI spec cho REST API
- `websocket-events.md`: WebSocket event contracts cho real-time sync
- `graphql-schema.graphql`: GraphQL schema nếu dùng GraphQL

Nhưng trong MVP (localStorage only), chỉ cần `storage-schema.json`.
