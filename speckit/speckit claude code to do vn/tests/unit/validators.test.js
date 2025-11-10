import { describe, it, expect } from 'vitest';
import {
  validateTodoTitle,
  validateTodoDescription,
  validateSubtaskTitle,
  validateSubtasksArray,
  isValidTodoId,
  isValidSubtaskId,
  sanitizeInput
} from '../../src/utils/validators.js';

describe('validators.js', () => {
  describe('validateTodoTitle', () => {
    it('should pass for valid title', () => {
      const result = validateTodoTitle('Buy groceries');
      expect(result.valid).toBe(true);
      expect(result.error).toBeNull();
    });

    it('should fail for empty string', () => {
      const result = validateTodoTitle('');
      expect(result.valid).toBe(false);
      expect(result.error).toBeTruthy();
    });

    it('should fail for whitespace-only string', () => {
      const result = validateTodoTitle('   ');
      expect(result.valid).toBe(false);
      expect(result.error).toContain('trống');
    });

    it('should fail for null', () => {
      const result = validateTodoTitle(null);
      expect(result.valid).toBe(false);
      expect(result.error).toContain('bắt buộc');
    });

    it('should fail for undefined', () => {
      const result = validateTodoTitle(undefined);
      expect(result.valid).toBe(false);
      expect(result.error).toContain('bắt buộc');
    });

    it('should fail for non-string', () => {
      const result = validateTodoTitle(123);
      expect(result.valid).toBe(false);
    });

    it('should fail for title longer than 500 characters', () => {
      const longTitle = 'a'.repeat(501);
      const result = validateTodoTitle(longTitle);
      expect(result.valid).toBe(false);
      expect(result.error).toContain('500');
    });

    it('should pass for title with exactly 500 characters', () => {
      const maxTitle = 'a'.repeat(500);
      const result = validateTodoTitle(maxTitle);
      expect(result.valid).toBe(true);
    });

    it('should pass for title with 1 character', () => {
      const result = validateTodoTitle('a');
      expect(result.valid).toBe(true);
    });
  });

  describe('validateTodoDescription', () => {
    it('should pass for valid description', () => {
      const result = validateTodoDescription('This is a description');
      expect(result.valid).toBe(true);
      expect(result.error).toBeNull();
    });

    it('should pass for empty string (optional field)', () => {
      const result = validateTodoDescription('');
      expect(result.valid).toBe(true);
    });

    it('should pass for null (optional field)', () => {
      const result = validateTodoDescription(null);
      expect(result.valid).toBe(true);
    });

    it('should pass for undefined (optional field)', () => {
      const result = validateTodoDescription(undefined);
      expect(result.valid).toBe(true);
    });

    it('should fail for non-string', () => {
      const result = validateTodoDescription(123);
      expect(result.valid).toBe(false);
    });

    it('should fail for description longer than 2000 characters', () => {
      const longDesc = 'a'.repeat(2001);
      const result = validateTodoDescription(longDesc);
      expect(result.valid).toBe(false);
      expect(result.error).toContain('2000');
    });

    it('should pass for description with exactly 2000 characters', () => {
      const maxDesc = 'a'.repeat(2000);
      const result = validateTodoDescription(maxDesc);
      expect(result.valid).toBe(true);
    });
  });

  describe('validateSubtaskTitle', () => {
    it('should pass for valid subtask title', () => {
      const result = validateSubtaskTitle('Subtask 1');
      expect(result.valid).toBe(true);
      expect(result.error).toBeNull();
    });

    it('should fail for empty string', () => {
      const result = validateSubtaskTitle('');
      expect(result.valid).toBe(false);
      expect(result.error).toBeTruthy();
    });

    it('should fail for whitespace-only string', () => {
      const result = validateSubtaskTitle('   ');
      expect(result.valid).toBe(false);
    });

    it('should fail for null', () => {
      const result = validateSubtaskTitle(null);
      expect(result.valid).toBe(false);
    });

    it('should fail for title longer than 300 characters', () => {
      const longTitle = 'a'.repeat(301);
      const result = validateSubtaskTitle(longTitle);
      expect(result.valid).toBe(false);
      expect(result.error).toContain('300');
    });

    it('should pass for title with exactly 300 characters', () => {
      const maxTitle = 'a'.repeat(300);
      const result = validateSubtaskTitle(maxTitle);
      expect(result.valid).toBe(true);
    });
  });

  describe('validateSubtasksArray', () => {
    it('should pass for empty array', () => {
      const result = validateSubtasksArray([]);
      expect(result.valid).toBe(true);
    });

    it('should pass for array with items', () => {
      const result = validateSubtasksArray([{ id: '1' }, { id: '2' }]);
      expect(result.valid).toBe(true);
    });

    it('should fail for non-array', () => {
      const result = validateSubtasksArray('not an array');
      expect(result.valid).toBe(false);
      expect(result.error).toContain('array');
    });

    it('should fail for array with more than 50 items', () => {
      const tooMany = new Array(51).fill({ id: '1' });
      const result = validateSubtasksArray(tooMany);
      expect(result.valid).toBe(false);
      expect(result.error).toContain('50');
    });

    it('should pass for array with exactly 50 items', () => {
      const exactly50 = new Array(50).fill({ id: '1' });
      const result = validateSubtasksArray(exactly50);
      expect(result.valid).toBe(true);
    });
  });

  describe('isValidTodoId', () => {
    it('should pass for valid todo ID', () => {
      expect(isValidTodoId('todo-1234567890-abc123')).toBe(true);
    });

    it('should pass for valid ID with long random part', () => {
      expect(isValidTodoId('todo-9876543210-xyz789abc')).toBe(true);
    });

    it('should fail for missing prefix', () => {
      expect(isValidTodoId('1234567890-abc123')).toBe(false);
    });

    it('should fail for wrong prefix', () => {
      expect(isValidTodoId('task-1234567890-abc123')).toBe(false);
    });

    it('should fail for non-string', () => {
      expect(isValidTodoId(123)).toBe(false);
    });

    it('should fail for empty string', () => {
      expect(isValidTodoId('')).toBe(false);
    });

    it('should fail for invalid format', () => {
      expect(isValidTodoId('todo-abc-123')).toBe(false);
    });
  });

  describe('isValidSubtaskId', () => {
    it('should pass for valid subtask ID', () => {
      expect(isValidSubtaskId('subtask-1234567890-abc123')).toBe(true);
    });

    it('should fail for wrong prefix', () => {
      expect(isValidSubtaskId('task-1234567890-abc123')).toBe(false);
    });

    it('should fail for todo ID', () => {
      expect(isValidSubtaskId('todo-1234567890-abc123')).toBe(false);
    });

    it('should fail for non-string', () => {
      expect(isValidSubtaskId(123)).toBe(false);
    });

    it('should fail for invalid format', () => {
      expect(isValidSubtaskId('subtask-abc-123')).toBe(false);
    });
  });

  describe('sanitizeInput', () => {
    it('should trim whitespace', () => {
      expect(sanitizeInput('  hello  ')).toBe('hello');
    });

    it('should trim leading whitespace', () => {
      expect(sanitizeInput('  hello')).toBe('hello');
    });

    it('should trim trailing whitespace', () => {
      expect(sanitizeInput('hello  ')).toBe('hello');
    });

    it('should handle non-string input', () => {
      expect(sanitizeInput(123)).toBe('');
      expect(sanitizeInput(null)).toBe('');
      expect(sanitizeInput(undefined)).toBe('');
    });

    it('should preserve internal whitespace', () => {
      expect(sanitizeInput('  hello world  ')).toBe('hello world');
    });
  });
});
