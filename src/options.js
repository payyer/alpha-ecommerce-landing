/**
 * ============================================================================
 * OPTIONS - Product Purchase Options
 * ============================================================================
 * 
 * Manages the visual state of product purchase option selectors.
 * Adds 'active' class to the selected option label for styling.
 * 
 * Used for:
 * - Subscribe & Save vs One-time purchase radio buttons
 * - Quantity selectors (1-pack, 2-pack, etc.)
 * 
 * ============================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  const radios = document.querySelectorAll('input[name="purchase-opt"]');
  
  /**
   * Sync 'active' class with checked state
   */
  function syncActive() {
    radios.forEach((r) => {
      const label = document.querySelector(`label[for="${r.id}"]`);
      if (!label) return;
      
      if (r.checked) {
        label.classList.add("active");
      } else {
        label.classList.remove("active");
      }
    });
  }
  
  // Listen for changes
  radios.forEach((r) => r.addEventListener("change", syncActive));
  
  // Set initial state
  syncActive();
});
