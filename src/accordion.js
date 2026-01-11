document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.accordion__item');

  const getMirrorPanels = (btn) => {
    const attr = btn.getAttribute('data-mirror-panel');
    if (!attr) return [];

    // allow: "id-one id-two" or "id-one,id-two"
    return attr
      .split(/[\s,]+/)
      .map((id) => id.trim())
      .filter(Boolean)
      .map((id) => document.getElementById(id))
      .filter(Boolean);
  };

  const ensurePanelBaseStyles = (panel) => {
    panel.style.overflow = 'hidden';
  };

  const syncButtonLabel = (btn, isOpen) => {
    const openLabel = btn.getAttribute('data-label-open');
    const closedLabel = btn.getAttribute('data-label-closed');
    if (!openLabel && !closedLabel) return;
    const next = isOpen ? openLabel : closedLabel;
    if (!next) return;
    btn.textContent = next;
  };

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

  const closePanel = (panel) => {
    ensurePanelBaseStyles(panel);
    panel.setAttribute('aria-hidden', 'true');

    if (getComputedStyle(panel).display === 'none') {
      panel.style.height = '0px';
      return;
    }

    panel.style.height = panel.scrollHeight + 'px';
    // Force repaint to make transition work
    // eslint-disable-next-line no-unused-expressions
    panel.offsetHeight;
    panel.style.height = '0px';
  };

  items.forEach((item, index) => {
    const btn = item.querySelector('.accordion__button');
    const panel = item.querySelector('.accordion__panel');

    if (!btn || !panel) return;

    const mirrorPanels = getMirrorPanels(btn);
    const panelsToToggle = [panel, ...mirrorPanels];

    // Init state (also keeps any initially-open accordions open)
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

    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('is-open');

      if (isOpen) {
        // Close (and close mirrored panels if provided)
        panelsToToggle.forEach(closePanel);
        item.classList.remove('is-open');
        btn.setAttribute('aria-expanded', 'false');
        syncButtonLabel(btn, false);
      } else {
        // Open (and open mirrored panels if provided)
        panelsToToggle.forEach(openPanel);
        item.classList.add('is-open');
        btn.setAttribute('aria-expanded', 'true');
        syncButtonLabel(btn, true);
      }
    });
  });

  // Allow internal "Cancel review" buttons to close their accordion item
  const cancelBtns = document.querySelectorAll('[data-accordion-cancel]');
  cancelBtns.forEach((cb) => {
    cb.addEventListener('click', (e) => {
      const triggerSelector = cb.getAttribute('data-accordion-trigger');
      if (triggerSelector) {
        const trigger = document.querySelector(triggerSelector);
        if (trigger) {
          trigger.click();
          return;
        }
      }

      const item = cb.closest('.accordion__item');
      if (!item) return;
      const toggle = item.querySelector('.accordion__button');
      if (toggle) toggle.click();
    });
  });
});
