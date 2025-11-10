/**
 * Input Validation Functions
 *
 * Validate user input theo data model constraints.
 * Reference: specs/001-todo-list-app/data-model.md
 */

/**
 * Validate todo title
 * @param {string} title - Todo title to validate
 * @returns {{valid: boolean, error: string|null}} Validation result
 */
export function validateTodoTitle(title) {
  // Title is required
  if (!title || typeof title !== 'string') {
    return { valid: false, error: 'Title là bắt buộc' };
  }

  // Trim whitespace
  const trimmed = title.trim();

  // Min length: 1 character
  if (trimmed.length === 0) {
    return { valid: false, error: 'Title không được để trống' };
  }

  // Max length: 500 characters
  if (trimmed.length > 500) {
    return { valid: false, error: 'Title không được quá 500 ký tự' };
  }

  return { valid: true, error: null };
}

/**
 * Validate todo description
 * @param {string} description - Todo description to validate
 * @returns {{valid: boolean, error: string|null}} Validation result
 */
export function validateTodoDescription(description) {
  // Description is optional
  if (!description || description === '') {
    return { valid: true, error: null };
  }

  if (typeof description !== 'string') {
    return { valid: false, error: 'Description phải là string' };
  }

  // Max length: 2000 characters
  if (description.length > 2000) {
    return { valid: false, error: 'Description không được quá 2000 ký tự' };
  }

  return { valid: true, error: null };
}

/**
 * Validate subtask title
 * @param {string} title - Subtask title to validate
 * @returns {{valid: boolean, error: string|null}} Validation result
 */
export function validateSubtaskTitle(title) {
  // Title is required
  if (!title || typeof title !== 'string') {
    return { valid: false, error: 'Subtask title là bắt buộc' };
  }

  // Trim whitespace
  const trimmed = title.trim();

  // Min length: 1 character
  if (trimmed.length === 0) {
    return { valid: false, error: 'Subtask title không được để trống' };
  }

  // Max length: 300 characters
  if (trimmed.length > 300) {
    return { valid: false, error: 'Subtask title không được quá 300 ký tự' };
  }

  return { valid: true, error: null };
}

/**
 * Validate subtasks array
 * @param {Array} subtasks - Array of subtasks to validate
 * @returns {{valid: boolean, error: string|null}} Validation result
 */
export function validateSubtasksArray(subtasks) {
  if (!Array.isArray(subtasks)) {
    return { valid: false, error: 'Subtasks phải là array' };
  }

  // Max 50 subtasks per todo
  if (subtasks.length > 50) {
    return { valid: false, error: 'Không được có quá 50 subtasks' };
  }

  return { valid: true, error: null };
}

/**
 * Validate todo ID format
 * @param {string} id - Todo ID to validate
 * @returns {boolean} True if valid format
 */
export function isValidTodoId(id) {
  if (typeof id !== 'string') return false;
  return /^todo-\d+-[a-z0-9]+$/.test(id);
}

/**
 * Validate subtask ID format
 * @param {string} id - Subtask ID to validate
 * @returns {boolean} True if valid format
 */
export function isValidSubtaskId(id) {
  if (typeof id !== 'string') return false;
  return /^subtask-\d+-[a-z0-9]+$/.test(id);
}

/**
 * Sanitize user input (trim whitespace)
 * @param {string} input - User input
 * @returns {string} Sanitized input
 */
export function sanitizeInput(input) {
  if (typeof input !== 'string') return '';
  return input.trim();
}
