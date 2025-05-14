// Utility functions for smooth scrolling

/**
 * Scrolls to a specific element by ID with smooth behavior
 * @param {string} elementId - The ID of the element to scroll to
 */
export const scrollToElement = (elementId) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};
