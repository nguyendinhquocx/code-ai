/**
 * DOM Utility Functions
 *
 * Helper functions để thao tác với DOM elements.
 * Theo constitution: clean, readable, single responsibility.
 */

/**
 * Tạo DOM element với attributes và children
 * @param {string} tag - HTML tag name
 * @param {Object} attrs - Object chứa attributes (className, id, etc.)
 * @param {Array<Node|string>} children - Array các child elements hoặc text
 * @returns {HTMLElement} DOM element đã tạo
 */
export function createElement(tag, attrs = {}, children = []) {
  const element = document.createElement(tag);

  // Set attributes
  Object.entries(attrs).forEach(([key, value]) => {
    if (key === 'className') {
      element.className = value;
    } else if (key === 'dataset') {
      Object.entries(value).forEach(([dataKey, dataValue]) => {
        element.dataset[dataKey] = dataValue;
      });
    } else if (key.startsWith('on') && typeof value === 'function') {
      // Event listeners (onClick, onChange, etc.)
      const eventName = key.slice(2).toLowerCase();
      element.addEventListener(eventName, value);
    } else {
      element.setAttribute(key, value);
    }
  });

  // Append children
  children.forEach(child => {
    if (typeof child === 'string') {
      element.appendChild(document.createTextNode(child));
    } else if (child instanceof Node) {
      element.appendChild(child);
    }
  });

  return element;
}

/**
 * Query selector wrapper với error handling
 * @param {string} selector - CSS selector
 * @param {HTMLElement} context - Context element (default: document)
 * @returns {HTMLElement|null} Element tìm được hoặc null
 */
export function qs(selector, context = document) {
  return context.querySelector(selector);
}

/**
 * Query selector all wrapper
 * @param {string} selector - CSS selector
 * @param {HTMLElement} context - Context element (default: document)
 * @returns {Array<HTMLElement>} Array các elements tìm được
 */
export function qsa(selector, context = document) {
  return Array.from(context.querySelectorAll(selector));
}

/**
 * Add event listener với automatic cleanup
 * @param {HTMLElement} element - Element để attach listener
 * @param {string} eventName - Event name (click, change, etc.)
 * @param {Function} handler - Event handler function
 * @param {Object} options - Event listener options
 * @returns {Function} Cleanup function để remove listener
 */
export function on(element, eventName, handler, options = {}) {
  element.addEventListener(eventName, handler, options);

  // Return cleanup function
  return () => {
    element.removeEventListener(eventName, handler, options);
  };
}

/**
 * Toggle class on element
 * @param {HTMLElement} element - Target element
 * @param {string} className - Class name to toggle
 * @param {boolean} force - Force add (true) or remove (false)
 */
export function toggleClass(element, className, force) {
  if (force === undefined) {
    element.classList.toggle(className);
  } else {
    element.classList.toggle(className, force);
  }
}

/**
 * Set text content an toàn (prevent XSS)
 * @param {HTMLElement} element - Target element
 * @param {string} text - Text content
 */
export function setText(element, text) {
  element.textContent = text;
}

/**
 * Clear tất cả children của element
 * @param {HTMLElement} element - Element to clear
 */
export function clearChildren(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}
