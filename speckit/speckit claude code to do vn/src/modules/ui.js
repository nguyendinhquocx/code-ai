/**
 * UI Rendering Module
 *
 * Quản lý việc render todos lên DOM.
 * Reference: specs/001-todo-list-app/spec.md
 */

import { createElement, qs, qsa, on, toggleClass, setText, clearChildren } from '../utils/dom.js';
import {
  getAllTodos,
  createTodo,
  updateTodo,
  deleteTodo,
  addSubtask,
  updateSubtask,
  deleteSubtask
} from './todos.js';

// State
let currentEditingTodoId = null;

/**
 * Initialize UI và event listeners
 */
export function initUI() {
  // Render initial todos
  renderTodos();

  // Setup event listeners
  setupEventListeners();
}

/**
 * Setup all event listeners
 */
function setupEventListeners() {
  // Add todo form
  const addForm = qs('#add-todo-form');
  if (addForm) {
    on(addForm, 'submit', handleAddTodo);
  }

  // Completed toggle
  const completedToggle = qs('#completed-toggle');
  if (completedToggle) {
    on(completedToggle, 'click', handleCompletedToggle);
  }

  // Modal close
  const modalClose = qs('.modal-close');
  const modalCancel = qs('.modal-cancel');
  if (modalClose) on(modalClose, 'click', closeModal);
  if (modalCancel) on(modalCancel, 'click', closeModal);

  // Modal save
  const modalSave = qs('.modal-save');
  if (modalSave) on(modalSave, 'click', handleModalSave);

  // Add subtask button
  const addSubtaskBtn = qs('#modal-add-subtask-btn');
  if (addSubtaskBtn) on(addSubtaskBtn, 'click', handleAddSubtask);

  // Add subtask on Enter key
  const subtaskInput = qs('#modal-subtask-input');
  if (subtaskInput) {
    on(subtaskInput, 'keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        handleAddSubtask();
      }
    });
  }

  // Close modal on backdrop click
  const modal = qs('#todo-modal');
  if (modal) {
    on(modal, 'click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });
  }

  // Escape key to close modal
  on(document, 'keydown', (e) => {
    if (e.key === 'Escape') {
      const modal = qs('#todo-modal');
      if (modal && modal.getAttribute('aria-hidden') === 'false') {
        closeModal();
      }
    }
  });
}

/**
 * Handle add todo form submission
 */
function handleAddTodo(e) {
  e.preventDefault();

  const titleInput = qs('#todo-title-input');
  const title = titleInput.value.trim();

  if (!title) return;

  try {
    createTodo(title);
    titleInput.value = '';
    renderTodos();
  } catch (error) {
    alert(`Lỗi: ${error.message}`);
  }
}

/**
 * Handle completed section toggle
 */
function handleCompletedToggle() {
  const toggle = qs('#completed-toggle');
  const list = qs('#completed-todos-list');

  if (!toggle || !list) return;

  const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', !isExpanded);
  toggleClass(list, 'todos-list--hidden', isExpanded);
}

/**
 * Handle todo checkbox change
 */
function handleTodoCheckboxChange(todoId) {
  const todo = getAllTodos().find(t => t.id === todoId);
  if (!todo) return;

  try {
    updateTodo(todoId, { completed: !todo.completed });
    renderTodos();
  } catch (error) {
    alert(`Lỗi: ${error.message}`);
  }
}

/**
 * Handle todo content click (open edit modal)
 */
function handleTodoClick(todoId) {
  const todo = getAllTodos().find(t => t.id === todoId);
  if (!todo) return;

  openEditModal(todo);
}

/**
 * Handle todo delete
 */
function handleTodoDelete(todoId) {
  // Xóa trực tiếp - không cần confirm (minimal design)
  try {
    deleteTodo(todoId);
    renderTodos();
  } catch (error) {
    alert(`Lỗi: ${error.message}`);
  }
}

/**
 * Open edit modal for todo
 */
function openEditModal(todo) {
  currentEditingTodoId = todo.id;

  const modal = qs('#todo-modal');
  const titleInput = qs('#modal-todo-title');
  const descInput = qs('#modal-todo-description');

  if (!modal || !titleInput || !descInput) return;

  titleInput.value = todo.title;
  descInput.value = todo.description || '';

  // Render subtasks
  renderModalSubtasks(todo);

  modal.setAttribute('aria-hidden', 'false');
  titleInput.focus();
}

/**
 * Close modal
 */
function closeModal() {
  const modal = qs('#todo-modal');
  if (!modal) return;

  modal.setAttribute('aria-hidden', 'true');
  currentEditingTodoId = null;
}

/**
 * Handle modal save
 */
function handleModalSave() {
  if (!currentEditingTodoId) return;

  const titleInput = qs('#modal-todo-title');
  const descInput = qs('#modal-todo-description');

  if (!titleInput || !descInput) return;

  const title = titleInput.value.trim();
  const description = descInput.value.trim();

  if (!title) {
    alert('Tiêu đề không được để trống');
    return;
  }

  try {
    updateTodo(currentEditingTodoId, { title, description });
    closeModal();
    renderTodos();
  } catch (error) {
    alert(`Lỗi: ${error.message}`);
  }
}

/**
 * Render all todos (active + completed)
 */
export function renderTodos() {
  const todos = getAllTodos();

  const activeTodos = todos.filter(t => !t.completed);
  const completedTodos = todos.filter(t => t.completed);

  // Render active todos
  renderTodosList('active-todos-list', activeTodos);

  // Render completed todos
  renderTodosList('completed-todos-list', completedTodos);

  // Update completed count
  updateCompletedCount(completedTodos.length);
}

/**
 * Render todos list
 */
function renderTodosList(listId, todos) {
  const list = qs(`#${listId}`);
  if (!list) return;

  clearChildren(list);

  // Không hiển thị empty state - minimal design
  if (todos.length === 0) {
    return;
  }

  todos.forEach(todo => {
    const todoItem = renderTodoItem(todo);
    list.appendChild(todoItem);
  });
}

/**
 * T019: Render custom SVG checkbox icon
 * @param {boolean} checked - Whether checkbox is checked
 * @returns {string} SVG string
 */
function renderCheckboxIcon(checked) {
  if (checked) {
    // Circle với checkmark - size nhỏ hơn
    return `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M9 12l2 2l4 -4" />
    </svg>`;
  }
  // Empty circle - size nhỏ hơn
  return `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round">
    <circle cx="12" cy="12" r="10" />
  </svg>`;
}

/**
 * Render single todo item
 */
function renderTodoItem(todo) {
  const isCompleted = todo.completed;

  // T020-T022: Custom SVG checkbox thay vì native checkbox
  const checkboxWrapper = createElement('div', {
    className: 'custom-checkbox',
    role: 'checkbox',
    'aria-checked': isCompleted.toString(),
    'aria-label': `Đánh dấu "${todo.title}" là ${isCompleted ? 'chưa hoàn thành' : 'hoàn thành'}`,
    tabindex: '0'
  });
  checkboxWrapper.innerHTML = renderCheckboxIcon(isCompleted);
  checkboxWrapper.addEventListener('click', () => handleTodoCheckboxChange(todo.id));

  // Keyboard support (Space/Enter)
  checkboxWrapper.addEventListener('keydown', (e) => {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      handleTodoCheckboxChange(todo.id);
    }
  });

  const titleEl = createElement('div', { className: 'todo-title' }, [todo.title]);

  const contentChildren = [titleEl];

  if (todo.description) {
    const descEl = createElement('div', { className: 'todo-description' }, [todo.description]);
    contentChildren.push(descEl);
  }

  // Render subtasks progress if any
  if (todo.subtasks && todo.subtasks.length > 0) {
    const completedCount = todo.subtasks.filter(st => st.completed).length;
    const totalCount = todo.subtasks.length;
    const progressText = `${completedCount}/${totalCount} subtasks hoàn thành`;

    const progressEl = createElement('div', { className: 'subtask-progress' }, [progressText]);
    contentChildren.push(progressEl);
  }

  const content = createElement('div', { className: 'todo-content' }, contentChildren);
  content.addEventListener('click', () => handleTodoClick(todo.id));

  const deleteBtn = createElement('button', {
    className: 'btn-icon',
    'aria-label': `Xóa "${todo.title}"`
  }, ['×']);
  deleteBtn.addEventListener('click', () => handleTodoDelete(todo.id));

  const actions = createElement('div', { className: 'todo-actions' }, [deleteBtn]);

  const todoItem = createElement('li', {
    className: `todo-item ${isCompleted ? 'todo-item--completed' : ''}`,
    dataset: { todoId: todo.id }
  }, [checkboxWrapper, content, actions]);

  return todoItem;
}

/**
 * Update completed count
 */
function updateCompletedCount(count) {
  const countEl = qs('#completed-count');
  if (!countEl) return;

  setText(countEl, `Đã hoàn thành (${count})`);
}

/**
 * Handle add subtask
 */
function handleAddSubtask() {
  if (!currentEditingTodoId) return;

  const subtaskInput = qs('#modal-subtask-input');
  if (!subtaskInput) return;

  const title = subtaskInput.value.trim();
  if (!title) return;

  try {
    addSubtask(currentEditingTodoId, title);
    subtaskInput.value = '';

    // Re-render subtasks
    const todo = getAllTodos().find(t => t.id === currentEditingTodoId);
    if (todo) {
      renderModalSubtasks(todo);
    }
  } catch (error) {
    alert(`Lỗi: ${error.message}`);
  }
}

/**
 * Handle subtask checkbox change
 */
function handleSubtaskCheckboxChange(todoId, subtaskId) {
  const todo = getAllTodos().find(t => t.id === todoId);
  if (!todo) return;

  const subtask = todo.subtasks.find(st => st.id === subtaskId);
  if (!subtask) return;

  try {
    updateSubtask(todoId, subtaskId, { completed: !subtask.completed });

    // Re-render subtasks
    const updatedTodo = getAllTodos().find(t => t.id === todoId);
    if (updatedTodo) {
      renderModalSubtasks(updatedTodo);
    }

    // Re-render todos list to update progress
    renderTodos();
  } catch (error) {
    alert(`Lỗi: ${error.message}`);
  }
}

/**
 * Handle delete subtask
 */
function handleDeleteSubtask(todoId, subtaskId) {
  try {
    deleteSubtask(todoId, subtaskId);

    // Re-render subtasks
    const todo = getAllTodos().find(t => t.id === todoId);
    if (todo) {
      renderModalSubtasks(todo);
    }

    // Re-render todos list to update progress
    renderTodos();
  } catch (error) {
    alert(`Lỗi: ${error.message}`);
  }
}

/**
 * Render subtasks in modal
 */
function renderModalSubtasks(todo) {
  const subtasksList = qs('#modal-subtasks-list');
  if (!subtasksList) return;

  clearChildren(subtasksList);

  // T039: Remove "Chưa có subtask" empty state text
  if (!todo.subtasks || todo.subtasks.length === 0) {
    // Không hiển thị empty state - minimal design
    return;
  }

  todo.subtasks.forEach(subtask => {
    // Custom SVG checkbox như ở ngoài
    const checkboxWrapper = createElement('div', {
      className: 'custom-checkbox',
      role: 'checkbox',
      'aria-checked': subtask.completed.toString(),
      'aria-label': `Đánh dấu subtask "${subtask.title}"`,
      tabindex: '0'
    });
    checkboxWrapper.innerHTML = renderCheckboxIcon(subtask.completed);
    checkboxWrapper.addEventListener('click', () => handleSubtaskCheckboxChange(todo.id, subtask.id));

    // Keyboard support
    checkboxWrapper.addEventListener('keydown', (e) => {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        handleSubtaskCheckboxChange(todo.id, subtask.id);
      }
    });

    const title = createElement('span', {
      className: 'subtask-title'
    }, [subtask.title]);

    const deleteBtn = createElement('button', {
      className: 'btn-icon',
      type: 'button',
      'aria-label': `Xóa subtask "${subtask.title}"`
    }, ['×']);
    deleteBtn.addEventListener('click', () => handleDeleteSubtask(todo.id, subtask.id));

    const subtaskItem = createElement('div', {
      className: `subtask-item ${subtask.completed ? 'subtask-item--completed' : ''}`
    }, [checkboxWrapper, title, deleteBtn]);

    subtasksList.appendChild(subtaskItem);
  });
}
