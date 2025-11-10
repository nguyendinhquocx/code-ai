import { describe, it, expect, beforeEach, vi } from 'vitest';
import {
  loadTodos,
  saveTodos,
  clearTodos,
  getStorageSize,
  isStorageAvailable
} from '../../src/modules/storage.js';

describe('storage.js', () => {
  // Mock localStorage before each test
  beforeEach(() => {
    localStorage.clear();
  });

  describe('loadTodos', () => {
    it('should return empty array when localStorage is empty', () => {
      const todos = loadTodos();
      expect(todos).toEqual([]);
    });

    it('should return todos array from localStorage', () => {
      const mockTodos = [
        { id: 'todo-1', title: 'Test', completed: false, subtasks: [] }
      ];
      localStorage.setItem('todos', JSON.stringify(mockTodos));

      const todos = loadTodos();
      expect(todos).toEqual(mockTodos);
    });

    it('should return empty array if data is not valid JSON', () => {
      localStorage.setItem('todos', 'invalid json{');

      const todos = loadTodos();
      expect(todos).toEqual([]);
    });

    it('should return empty array if data is not an array', () => {
      localStorage.setItem('todos', JSON.stringify({ not: 'array' }));

      const todos = loadTodos();
      expect(todos).toEqual([]);
    });

    it('should handle localStorage errors gracefully', () => {
      // Mock getItem to throw error
      const originalGetItem = localStorage.getItem;
      localStorage.getItem = vi.fn(() => {
        throw new Error('Storage error');
      });

      const todos = loadTodos();
      expect(todos).toEqual([]);

      // Restore
      localStorage.getItem = originalGetItem;
    });
  });

  describe('saveTodos', () => {
    it('should save todos array to localStorage', () => {
      const mockTodos = [
        { id: 'todo-1', title: 'Test', completed: false, subtasks: [] }
      ];

      const result = saveTodos(mockTodos);
      expect(result).toBe(true);

      const saved = JSON.parse(localStorage.getItem('todos'));
      expect(saved).toEqual(mockTodos);
    });

    it('should return false for non-array input', () => {
      const result = saveTodos('not an array');
      expect(result).toBe(false);
    });

    it('should save empty array', () => {
      const result = saveTodos([]);
      expect(result).toBe(true);

      const saved = JSON.parse(localStorage.getItem('todos'));
      expect(saved).toEqual([]);
    });

    it('should handle localStorage errors gracefully', () => {
      // Mock setItem to throw error (e.g., QuotaExceededError)
      const originalSetItem = localStorage.setItem;
      localStorage.setItem = vi.fn(() => {
        throw new Error('QuotaExceededError');
      });

      const result = saveTodos([{ id: 'todo-1' }]);
      expect(result).toBe(false);

      // Restore
      localStorage.setItem = originalSetItem;
    });
  });

  describe('clearTodos', () => {
    it('should remove todos from localStorage', () => {
      localStorage.setItem('todos', JSON.stringify([{ id: 'todo-1' }]));

      const result = clearTodos();
      expect(result).toBe(true);

      const data = localStorage.getItem('todos');
      expect(data).toBeNull();
    });

    it('should return true even if key does not exist', () => {
      const result = clearTodos();
      expect(result).toBe(true);
    });

    it('should handle localStorage errors gracefully', () => {
      const originalRemoveItem = localStorage.removeItem;
      localStorage.removeItem = vi.fn(() => {
        throw new Error('Storage error');
      });

      const result = clearTodos();
      expect(result).toBe(false);

      // Restore
      localStorage.removeItem = originalRemoveItem;
    });
  });

  describe('getStorageSize', () => {
    it('should return 0 for empty storage', () => {
      const size = getStorageSize();
      expect(size).toBe(0);
    });

    it('should estimate storage size correctly', () => {
      const mockTodos = [{ id: 'todo-1' }];
      const jsonString = JSON.stringify(mockTodos);
      localStorage.setItem('todos', jsonString);

      const size = getStorageSize();
      // Each character is ~2 bytes in UTF-16
      expect(size).toBe(jsonString.length * 2);
    });

    it('should handle localStorage errors gracefully', () => {
      const originalGetItem = localStorage.getItem;
      localStorage.getItem = vi.fn(() => {
        throw new Error('Storage error');
      });

      const size = getStorageSize();
      expect(size).toBe(0);

      // Restore
      localStorage.getItem = originalGetItem;
    });
  });

  describe('isStorageAvailable', () => {
    it('should return true when localStorage is available', () => {
      const available = isStorageAvailable();
      expect(available).toBe(true);
    });

    it('should return false when localStorage throws error', () => {
      const originalSetItem = localStorage.setItem;
      localStorage.setItem = vi.fn(() => {
        throw new Error('Storage not available');
      });

      const available = isStorageAvailable();
      expect(available).toBe(false);

      // Restore
      localStorage.setItem = originalSetItem;
    });

    it('should clean up test key after check', () => {
      isStorageAvailable();
      const testKey = localStorage.getItem('__storage_test__');
      expect(testKey).toBeNull();
    });
  });
});
