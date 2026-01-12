/**
 * ============================================================================
 * ACCORDION COMPONENT
 * ============================================================================
 * 
 * A fully accessible accordion component with the following features:
 * - ARIA attributes for screen readers
 * - Smooth height transitions
 * - Support for mirror panels (multiple panels controlled by one button)
 * - Dynamic label switching (open/closed states)
 * - Cancel button support for closing from within panels
 * 
 * HTML Structure:
 * <div class="accordion__item">
 *   <button class="accordion__button" aria-expanded="false">Title</button>
 *   <div class="accordion__panel" aria-hidden="true">Content</div>
 * </div>
 * 
 * Optional attributes:
 * - data-mirror-panel="id1 id2" - IDs of additional panels to toggle
 * - data-label-open="Close" - Button text when open
 * - data-label-closed="Open" - Button text when closed
 * - data-accordion-cancel - Button inside panel to close accordion
 * 
 * ============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.accordion__item');

  /**
   * Get mirror panels that should toggle together with the main panel
   * @param {HTMLElement} btn - The accordion button element
   * @returns {HTMLElement[]} Array of mirror panel elements
   */
  const getMirrorPanels = (btn) => {
    const attr = btn.getAttribute('data-mirror-panel');
    if (!attr) return [];

    // Allow: "id-one id-two" or "id-one,id-two"
    return attr
      .split(/[\s,]+/)
      .map((id) => id.trim())
      .filter(Boolean)
      .map((id) => document.getElementById(id))
      .filter(Boolean);
  };

  /**
   * Ensure panel has required base styles for animation
   * @param {HTMLElement} panel - The panel element
   */
  const ensurePanelBaseStyles = (panel) => {
    panel.style.overflow = 'hidden';
  };

  /**
   * Sync button label based on open/closed state
   * @param {HTMLElement} btn - The button element
   * @param {boolean} isOpen - Whether the accordion is open
   */
  const syncButtonLabel = (btn, isOpen) => {
    const openLabel = btn.getAttribute('data-label-open');
    const closedLabel = btn.getAttribute('data-label-closed');
    if (!openLabel && !closedLabel) return;
    const next = isOpen ? openLabel : closedLabel;
    if (!next) return;
    btn.textContent = next;
  };

  /**
   * Open an accordion panel with smooth height transition
   * @param {HTMLElement} panel - The panel to open
   */
  const openPanel = (panel) => {
    ensurePanelBaseStyles(panel);
    panel.setAttribute('aria-hidden', 'false');

    // If panel is display:none (responsive hidden), scrollHeight is 0.
    // Keep height auto so it will display correctly when it becomes visible.
    if (getComputedStyle(panel).display === 'none') {
      panel.style.height = 'auto';
      return;
    }

    const targetHeight = panel.scrollHeight;
    panel.style.height = targetHeight + 'px';

    const onTransitionEnd = (e) => {
      if (e.propertyName === 'height') {
        panel.style.height = 'auto';
        panel.removeEventListener('transitionend', onTransitionEnd);
      }
    };

    panel.addEventListener('transitionend', onTransitionEnd);
  };

  /**
   * Close an accordion panel with smooth height transition
   * @param {HTMLElement} panel - The panel to close
   */
  const closePanel = (panel) => {
    ensurePanelBaseStyles(panel);
    panel.setAttribute('aria-hidden', 'true');

    if (getComputedStyle(panel).display === 'none') {
      panel.style.height = '0px';
      return;
    }

    // Set explicit height first for transition to work
    panel.style.height = panel.scrollHeight + 'px';
    // Force repaint to make transition work
    // eslint-disable-next-line no-unused-expressions
    panel.offsetHeight;
    panel.style.height = '0px';
  };

  // Initialize each accordion item
  items.forEach((item, index) => {
    const btn = item.querySelector('.accordion__button');
    const panel = item.querySelector('.accordion__panel');

    if (!btn || !panel) return;

    const mirrorPanels = getMirrorPanels(btn);
    const panelsToToggle = [panel, ...mirrorPanels];

    // Initialize state (respect initially-open accordions)
    const shouldStartOpen =
      btn.getAttribute('aria-expanded') === 'true' || item.classList.contains('is-open');

    if (shouldStartOpen) {
      item.classList.add('is-open');
      btn.setAttribute('aria-expanded', 'true');
      syncButtonLabel(btn, true);
      panelsToToggle.forEach((p) => {
        ensurePanelBaseStyles(p);
        p.style.height = 'auto';
        p.setAttribute('aria-hidden', 'false');
      });
    } else {
      item.classList.remove('is-open');
      btn.setAttribute('aria-expanded', 'false');
      syncButtonLabel(btn, false);
      panelsToToggle.forEach((p) => {
        ensurePanelBaseStyles(p);
        p.style.height = '0px';
        p.setAttribute('aria-hidden', 'true');
      });
    }

    // Toggle accordion on button click
    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('is-open');

      if (isOpen) {
        // Close accordion and any mirrored panels
        panelsToToggle.forEach(closePanel);
        item.classList.remove('is-open');
        btn.setAttribute('aria-expanded', 'false');
        syncButtonLabel(btn, false);
      } else {
        // Open accordion and any mirrored panels
        panelsToToggle.forEach(openPanel);
        item.classList.add('is-open');
        btn.setAttribute('aria-expanded', 'true');
        syncButtonLabel(btn, true);
      }
    });
  });

  // Handle cancel buttons inside accordion panels
  const cancelBtns = document.querySelectorAll('[data-accordion-cancel]');
  cancelBtns.forEach((cb) => {
    cb.addEventListener('click', (e) => {
      // Check for specific trigger selector
      const triggerSelector = cb.getAttribute('data-accordion-trigger');
      if (triggerSelector) {
        const trigger = document.querySelector(triggerSelector);
        if (trigger) {
          trigger.click();
          return;
        }
      }

      // Otherwise, close the closest accordion
      const item = cb.closest('.accordion__item');
      if (!item) return;
      const toggle = item.querySelector('.accordion__button');
      if (toggle) toggle.click();
    });
  });
});
