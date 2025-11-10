/**
 * LocalStorage Abstraction Module
 *
 * Quản lý persistence của todos trong localStorage.
 * Reference: specs/001-todo-list-app/data-model.md
 */

const STORAGE_KEY = 'todos';

/**
 * Load todos từ localStorage
 * @returns {Array<Object>} Array of todos, hoặc empty array nếu không có data
 */
export function loadTodos() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) {
      return [];
    }

    const todos = JSON.parse(data);

    // Validate data structure
    if (!Array.isArray(todos)) {
      console.error('Invalid todos data in localStorage, resetting to empty array');
      return [];
    }

    return todos;
  } catch (error) {
    console.error('Error loading todos from localStorage:', error);
    return [];
  }
}

/**
 * Save todos vào localStorage
 * @param {Array<Object>} todos - Array of todos to save
 * @returns {boolean} True if save successful, false otherwise
 */
export function saveTodos(todos) {
  try {
    // Validate input
    if (!Array.isArray(todos)) {
      console.error('saveTodos: todos must be an array');
      return false;
    }

    const data = JSON.stringify(todos);
    localStorage.setItem(STORAGE_KEY, data);
    return true;
  } catch (error) {
    // Catch QuotaExceededError hoặc other localStorage errors
    console.error('Error saving todos to localStorage:', error);
    return false;
  }
}

/**
 * Clear tất cả todos từ localStorage
 * @returns {boolean} True if clear successful
 */
export function clearTodos() {
  try {
    localStorage.removeItem(STORAGE_KEY);
    return true;
  } catch (error) {
    console.error('Error clearing todos from localStorage:', error);
    return false;
  }
}

/**
 * Get localStorage size estimate (in bytes)
 * @returns {number} Estimated size in bytes
 */
export function getStorageSize() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) return 0;

    // Each character is ~2 bytes in UTF-16 (JavaScript default encoding)
    return data.length * 2;
  } catch (error) {
    console.error('Error getting storage size:', error);
    return 0;
  }
}

/**
 * Check if localStorage is available
 * @returns {boolean} True if localStorage is supported and accessible
 */
export function isStorageAvailable() {
  try {
    const testKey = '__storage_test__';
    localStorage.setItem(testKey, 'test');
    localStorage.removeItem(testKey);
    return true;
  } catch (error) {
    return false;
  }
}
