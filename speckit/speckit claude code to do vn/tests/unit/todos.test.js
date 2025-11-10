import { describe, it, expect, beforeEach, vi } from 'vitest';
import {
  createTodo,
  updateTodo,
  deleteTodo,
  getTodoById,
  getAllTodos,
  generateTodoId,
  generateSubtaskId
} from '../../src/modules/todos.js';

describe('todos.js', () => {
  describe('generateTodoId', () => {
    it('should generate valid todo ID with correct format', () => {
      const id = generateTodoId();
      expect(id).toMatch(/^todo-\d+-[a-z0-9]+$/);
    });

    it('should generate unique IDs', () => {
      const id1 = generateTodoId();
      const id2 = generateTodoId();
      expect(id1).not.toBe(id2);
    });
  });

  describe('generateSubtaskId', () => {
    it('should generate valid subtask ID with correct format', () => {
      const id = generateSubtaskId();
      expect(id).toMatch(/^subtask-\d+-[a-z0-9]+$/);
    });

    it('should generate unique IDs', () => {
      const id1 = generateSubtaskId();
      const id2 = generateSubtaskId();
      expect(id1).not.toBe(id2);
    });
  });

  describe('createTodo', () => {
    beforeEach(() => {
      // Clear localStorage before each test
      localStorage.clear();
    });

    it('should create todo with title only', () => {
      const todo = createTodo('Buy groceries');

      expect(todo).toBeDefined();
      expect(todo.id).toMatch(/^todo-\d+-[a-z0-9]+$/);
      expect(todo.title).toBe('Buy groceries');
      expect(todo.description).toBe('');
      expect(todo.completed).toBe(false);
      expect(todo.subtasks).toEqual([]);
      expect(todo.createdAt).toBeGreaterThan(0);
      expect(todo.updatedAt).toBeGreaterThan(0);
      expect(todo.createdAt).toBe(todo.updatedAt);
    });

    it('should create todo with title and description', () => {
      const todo = createTodo('Buy groceries', 'Milk, eggs, bread');

      expect(todo.title).toBe('Buy groceries');
      expect(todo.description).toBe('Milk, eggs, bread');
    });

    it('should save todo to localStorage', () => {
      createTodo('Test todo');

      const saved = JSON.parse(localStorage.getItem('todos'));
      expect(saved).toHaveLength(1);
      expect(saved[0].title).toBe('Test todo');
    });

    it('should throw error for invalid title', () => {
      expect(() => createTodo('')).toThrow();
      expect(() => createTodo('   ')).toThrow();
    });

    it('should throw error for title longer than 500 chars', () => {
      const longTitle = 'a'.repeat(501);
      expect(() => createTodo(longTitle)).toThrow();
    });

    it('should throw error for invalid description', () => {
      const longDesc = 'a'.repeat(2001);
      expect(() => createTodo('Valid title', longDesc)).toThrow();
    });

    it('should trim whitespace from title and description', () => {
      const todo = createTodo('  Title  ', '  Description  ');
      expect(todo.title).toBe('Title');
      expect(todo.description).toBe('Description');
    });

    it('should append to existing todos', () => {
      createTodo('First todo');
      createTodo('Second todo');

      const saved = JSON.parse(localStorage.getItem('todos'));
      expect(saved).toHaveLength(2);
      expect(saved[0].title).toBe('First todo');
      expect(saved[1].title).toBe('Second todo');
    });
  });

  describe('updateTodo', () => {
    beforeEach(() => {
      localStorage.clear();
    });

    it('should update todo title', () => {
      const todo = createTodo('Original title');
      const updated = updateTodo(todo.id, { title: 'New title' });

      expect(updated.title).toBe('New title');
      expect(updated.updatedAt).toBeGreaterThanOrEqual(todo.updatedAt);
    });

    it('should update todo description', () => {
      const todo = createTodo('Title', 'Original description');
      const updated = updateTodo(todo.id, { description: 'New description' });

      expect(updated.description).toBe('New description');
    });

    it('should update todo completed status', () => {
      const todo = createTodo('Title');
      const updated = updateTodo(todo.id, { completed: true });

      expect(updated.completed).toBe(true);
    });

    it('should update multiple fields', () => {
      const todo = createTodo('Title', 'Description');
      const updated = updateTodo(todo.id, {
        title: 'New title',
        description: 'New description',
        completed: true
      });

      expect(updated.title).toBe('New title');
      expect(updated.description).toBe('New description');
      expect(updated.completed).toBe(true);
    });

    it('should preserve unchanged fields', () => {
      const todo = createTodo('Title', 'Description');
      const updated = updateTodo(todo.id, { title: 'New title' });

      expect(updated.description).toBe('Description');
      expect(updated.completed).toBe(false);
      expect(updated.subtasks).toEqual([]);
    });

    it('should save updated todo to localStorage', () => {
      const todo = createTodo('Original');
      updateTodo(todo.id, { title: 'Updated' });

      const saved = JSON.parse(localStorage.getItem('todos'));
      expect(saved[0].title).toBe('Updated');
    });

    it('should throw error for non-existent todo', () => {
      expect(() => updateTodo('todo-999-invalid', { title: 'New' })).toThrow();
    });

    it('should throw error for invalid title', () => {
      const todo = createTodo('Title');
      expect(() => updateTodo(todo.id, { title: '' })).toThrow();
      expect(() => updateTodo(todo.id, { title: 'a'.repeat(501) })).toThrow();
    });

    it('should throw error for invalid description', () => {
      const todo = createTodo('Title');
      const longDesc = 'a'.repeat(2001);
      expect(() => updateTodo(todo.id, { description: longDesc })).toThrow();
    });

    it('should trim whitespace from updated fields', () => {
      const todo = createTodo('Title');
      const updated = updateTodo(todo.id, {
        title: '  New Title  ',
        description: '  New Description  '
      });

      expect(updated.title).toBe('New Title');
      expect(updated.description).toBe('New Description');
    });
  });

  describe('deleteTodo', () => {
    beforeEach(() => {
      localStorage.clear();
    });

    it('should delete todo by id', () => {
      const todo = createTodo('To delete');
      const result = deleteTodo(todo.id);

      expect(result).toBe(true);

      const saved = JSON.parse(localStorage.getItem('todos'));
      expect(saved).toHaveLength(0);
    });

    it('should only delete specified todo', () => {
      const todo1 = createTodo('First');
      const todo2 = createTodo('Second');
      const todo3 = createTodo('Third');

      deleteTodo(todo2.id);

      const saved = JSON.parse(localStorage.getItem('todos'));
      expect(saved).toHaveLength(2);
      expect(saved[0].id).toBe(todo1.id);
      expect(saved[1].id).toBe(todo3.id);
    });

    it('should return false for non-existent todo', () => {
      const result = deleteTodo('todo-999-invalid');
      expect(result).toBe(false);
    });

    it('should handle empty todos list', () => {
      const result = deleteTodo('todo-999-invalid');
      expect(result).toBe(false);
    });
  });

  describe('getTodoById', () => {
    beforeEach(() => {
      localStorage.clear();
    });

    it('should get todo by id', () => {
      const created = createTodo('Test todo');
      const retrieved = getTodoById(created.id);

      expect(retrieved).toBeDefined();
      expect(retrieved.id).toBe(created.id);
      expect(retrieved.title).toBe('Test todo');
    });

    it('should return null for non-existent todo', () => {
      const result = getTodoById('todo-999-invalid');
      expect(result).toBeNull();
    });

    it('should return correct todo from multiple todos', () => {
      const todo1 = createTodo('First');
      const todo2 = createTodo('Second');
      const todo3 = createTodo('Third');

      const retrieved = getTodoById(todo2.id);
      expect(retrieved.title).toBe('Second');
    });
  });

  describe('getAllTodos', () => {
    beforeEach(() => {
      localStorage.clear();
    });

    it('should return empty array when no todos', () => {
      const todos = getAllTodos();
      expect(todos).toEqual([]);
    });

    it('should return all todos', () => {
      createTodo('First');
      createTodo('Second');
      createTodo('Third');

      const todos = getAllTodos();
      expect(todos).toHaveLength(3);
    });

    it('should return todos in order of creation', () => {
      createTodo('First');
      createTodo('Second');
      createTodo('Third');

      const todos = getAllTodos();
      expect(todos[0].title).toBe('First');
      expect(todos[1].title).toBe('Second');
      expect(todos[2].title).toBe('Third');
    });
  });
});
