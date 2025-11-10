/**
 * Main Entry Point
 *
 * Initialize the TODO app.
 */

import { initUI } from './modules/ui.js';
import { isStorageAvailable } from './modules/storage.js';

/**
 * Initialize app
 */
function init() {
  // Check if localStorage is available
  if (!isStorageAvailable()) {
    alert('localStorage không khả dụng. App không thể lưu dữ liệu.');
    return;
  }

  // Initialize UI
  initUI();

  console.log('TODO app initialized');
}

// Run when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
