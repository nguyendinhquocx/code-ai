/**
 * Todo Business Logic Module
 *
 * CRUD operations cho todos.
 * Reference: specs/001-todo-list-app/data-model.md
 */

import { loadTodos, saveTodos } from './storage.js';
import {
  validateTodoTitle,
  validateTodoDescription,
  validateSubtaskTitle,
  validateSubtasksArray,
  sanitizeInput
} from '../utils/validators.js';

/**
 * Generate unique todo ID
 * Format: todo-{timestamp}-{random}
 * @returns {string} Unique todo ID
 */
export function generateTodoId() {
  const timestamp = Date.now();
  const random = Math.random().toString(36).substring(2, 11);
  return `todo-${timestamp}-${random}`;
}

/**
 * Generate unique subtask ID
 * Format: subtask-{timestamp}-{random}
 * @returns {string} Unique subtask ID
 */
export function generateSubtaskId() {
  const timestamp = Date.now();
  const random = Math.random().toString(36).substring(2, 11);
  return `subtask-${timestamp}-${random}`;
}

/**
 * Create new todo
 * @param {string} title - Todo title (required)
 * @param {string} description - Todo description (optional)
 * @returns {Object} Created todo object
 * @throws {Error} If validation fails
 */
export function createTodo(title, description = '') {
  // Sanitize inputs
  const sanitizedTitle = sanitizeInput(title);
  const sanitizedDesc = sanitizeInput(description);

  // Validate
  const titleValidation = validateTodoTitle(sanitizedTitle);
  if (!titleValidation.valid) {
    throw new Error(titleValidation.error);
  }

  const descValidation = validateTodoDescription(sanitizedDesc);
  if (!descValidation.valid) {
    throw new Error(descValidation.error);
  }

  // Create todo object
  const now = Date.now();
  const todo = {
    id: generateTodoId(),
    title: sanitizedTitle,
    description: sanitizedDesc,
    completed: false,
    createdAt: now,
    updatedAt: now,
    subtasks: []
  };

  // Load existing todos
  const todos = loadTodos();

  // Add new todo
  todos.push(todo);

  // Save to storage
  saveTodos(todos);

  return todo;
}

/**
 * Update existing todo
 * @param {string} id - Todo ID
 * @param {Object} updates - Fields to update (title, description, completed, subtasks)
 * @returns {Object} Updated todo object
 * @throws {Error} If todo not found or validation fails
 */
export function updateTodo(id, updates) {
  const todos = loadTodos();
  const index = todos.findIndex(t => t.id === id);

  if (index === -1) {
    throw new Error(`Todo với id "${id}" không tồn tại`);
  }

  const todo = todos[index];

  // Validate and sanitize title if provided
  if (updates.title !== undefined) {
    const sanitizedTitle = sanitizeInput(updates.title);
    const validation = validateTodoTitle(sanitizedTitle);
    if (!validation.valid) {
      throw new Error(validation.error);
    }
    todo.title = sanitizedTitle;
  }

  // Validate and sanitize description if provided
  if (updates.description !== undefined) {
    const sanitizedDesc = sanitizeInput(updates.description);
    const validation = validateTodoDescription(sanitizedDesc);
    if (!validation.valid) {
      throw new Error(validation.error);
    }
    todo.description = sanitizedDesc;
  }

  // Update completed status if provided
  if (updates.completed !== undefined) {
    todo.completed = Boolean(updates.completed);
  }

  // Update subtasks if provided
  if (updates.subtasks !== undefined) {
    todo.subtasks = updates.subtasks;
  }

  // Update timestamp
  todo.updatedAt = Date.now();

  // Save to storage
  saveTodos(todos);

  return todo;
}

/**
 * Delete todo by ID
 * @param {string} id - Todo ID
 * @returns {boolean} True if deleted, false if not found
 */
export function deleteTodo(id) {
  const todos = loadTodos();
  const index = todos.findIndex(t => t.id === id);

  if (index === -1) {
    return false;
  }

  // Remove todo
  todos.splice(index, 1);

  // Save to storage
  saveTodos(todos);

  return true;
}

/**
 * Get todo by ID
 * @param {string} id - Todo ID
 * @returns {Object|null} Todo object or null if not found
 */
export function getTodoById(id) {
  const todos = loadTodos();
  const todo = todos.find(t => t.id === id);
  return todo || null;
}

/**
 * Get all todos
 * @returns {Array<Object>} Array of all todos
 */
export function getAllTodos() {
  return loadTodos();
}

/**
 * Add subtask to todo
 * @param {string} todoId - Parent todo ID
 * @param {string} title - Subtask title
 * @returns {Object} Updated todo object
 * @throws {Error} If todo not found or validation fails
 */
export function addSubtask(todoId, title) {
  const todo = getTodoById(todoId);
  if (!todo) {
    throw new Error(`Todo với id "${todoId}" không tồn tại`);
  }

  // Validate subtask title
  const sanitizedTitle = sanitizeInput(title);

  const validation = validateSubtaskTitle(sanitizedTitle);
  if (!validation.valid) {
    throw new Error(validation.error);
  }

  // Check subtasks array limit
  const arrayValidation = validateSubtasksArray([...todo.subtasks, {}]);
  if (!arrayValidation.valid) {
    throw new Error(arrayValidation.error);
  }

  // Create subtask
  const subtask = {
    id: generateSubtaskId(),
    title: sanitizedTitle,
    completed: false
  };

  // Add subtask to todo
  const subtasks = [...todo.subtasks, subtask];

  // Update todo
  return updateTodo(todoId, { subtasks });
}

/**
 * Update subtask
 * @param {string} todoId - Parent todo ID
 * @param {string} subtaskId - Subtask ID
 * @param {Object} updates - Fields to update (title, completed)
 * @returns {Object} Updated todo object
 * @throws {Error} If todo or subtask not found
 */
export function updateSubtask(todoId, subtaskId, updates) {
  const todo = getTodoById(todoId);
  if (!todo) {
    throw new Error(`Todo với id "${todoId}" không tồn tại`);
  }

  const subtaskIndex = todo.subtasks.findIndex(st => st.id === subtaskId);
  if (subtaskIndex === -1) {
    throw new Error(`Subtask với id "${subtaskId}" không tồn tại`);
  }

  const subtask = todo.subtasks[subtaskIndex];

  // Update title if provided
  if (updates.title !== undefined) {
    const sanitizedTitle = sanitizeInput(updates.title);
    const validation = validateSubtaskTitle(sanitizedTitle);
    if (!validation.valid) {
      throw new Error(validation.error);
    }
    subtask.title = sanitizedTitle;
  }

  // Update completed if provided
  if (updates.completed !== undefined) {
    subtask.completed = Boolean(updates.completed);
  }

  // Update todo
  const subtasks = [...todo.subtasks];
  subtasks[subtaskIndex] = subtask;

  return updateTodo(todoId, { subtasks });
}

/**
 * Delete subtask
 * @param {string} todoId - Parent todo ID
 * @param {string} subtaskId - Subtask ID
 * @returns {Object} Updated todo object
 * @throws {Error} If todo not found
 */
export function deleteSubtask(todoId, subtaskId) {
  const todo = getTodoById(todoId);
  if (!todo) {
    throw new Error(`Todo với id "${todoId}" không tồn tại`);
  }

  const subtasks = todo.subtasks.filter(st => st.id !== subtaskId);

  return updateTodo(todoId, { subtasks });
}
