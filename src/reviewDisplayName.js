document.addEventListener('DOMContentLoaded', () => {
  const roots = document.querySelectorAll('[data-display-name-dropdown]');
  if (!roots.length) return;

  roots.forEach((root) => {
    const trigger = root.querySelector('[data-display-name-trigger]');
    const menu = root.querySelector('[data-display-name-menu]');
    const selectedText = root.querySelector('[data-display-name-selected]');

    if (!trigger || !menu || !selectedText) return;

    const items = Array.from(menu.querySelectorAll('[data-value]'));

    const openMenu = () => {
      menu.classList.remove('hidden');
      trigger.setAttribute('aria-expanded', 'true');
    };

    const closeMenu = () => {
      menu.classList.add('hidden');
      trigger.setAttribute('aria-expanded', 'false');
    };

    const setActive = (value) => {
      items.forEach((el) => {
        if (el.getAttribute('data-value') === value) {
          el.classList.add('is-active');
        } else {
          el.classList.remove('is-active');
        }
      });
    };

    const setValue = (value) => {
      selectedText.textContent = value;
      setActive(value);
    };

    // default (do NOT fill into input)
    setValue(selectedText.textContent.trim() || 'John Smith');

    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();

      const isOpen = trigger.getAttribute('aria-expanded') === 'true';
      if (isOpen) closeMenu();
      else openMenu();
    });

    items.forEach((el) => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const value = el.getAttribute('data-value') || '';
        setValue(value);
        closeMenu();
      });
    });

    document.addEventListener('click', (e) => {
      if (menu.classList.contains('hidden')) return;
      const target = e.target;
      if (!(target instanceof Node)) return;
      if (root.contains(target)) return;
      closeMenu();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeMenu();
    });
  });
});
