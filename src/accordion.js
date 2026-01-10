document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.accordion__item');

  items.forEach((item, index) => {
    const btn = item.querySelector('.accordion__button');
    const panel = item.querySelector('.accordion__panel');

    if (!btn || !panel) return;

    // Ensure panel has no explicit height so we can animate from 0 to scrollHeight
    panel.style.height = '0px';
    panel.style.overflow = 'hidden';

    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('is-open');

      if (isOpen) {
        // Close
        panel.style.height = panel.scrollHeight + 'px';
        // Force repaint to make transition work
        // eslint-disable-next-line no-unused-expressions
        panel.offsetHeight;
        panel.style.height = '0px';

        item.classList.remove('is-open');
        btn.setAttribute('aria-expanded', 'false');
        panel.setAttribute('aria-hidden', 'true');
      } else {
        // Open
        const startHeight = panel.scrollHeight;
        panel.style.height = startHeight + 'px';

        item.classList.add('is-open');
        btn.setAttribute('aria-expanded', 'true');
        panel.setAttribute('aria-hidden', 'false');

        // After transition, clear height to allow responsive content
        const onTransitionEnd = (e) => {
          if (e.propertyName === 'height') {
            panel.style.height = 'auto';
            panel.removeEventListener('transitionend', onTransitionEnd);
          }
        };

        panel.addEventListener('transitionend', onTransitionEnd);
      }
    });
  });
});
