function measureWidth(elements) {
  return elements.reduce((sum, el) => {
    const style = getComputedStyle(el);
    const ml = parseFloat(style.marginLeft) || 0;
    const mr = parseFloat(style.marginRight) || 0;
    return sum + el.getBoundingClientRect().width + ml + mr;
  }, 0);
}

function setupCarousel(carousel) {
  if (!(carousel instanceof HTMLElement)) return;
  if (carousel.dataset.carouselInit === 'true') return;
  carousel.dataset.carouselInit = 'true';

  const images = Array.from(carousel.querySelectorAll('img.press_logo'));
  if (images.length === 0) return;

  // Build a single track that contains: [original images] + [cloned images]
  const track = document.createElement('div');
  track.className = 'carousel__track';

  images.forEach((img) => track.appendChild(img));
  const originalCount = images.length;
  images.forEach((img) => track.appendChild(img.cloneNode(true)));

  // Clear and mount
  carousel.textContent = '';
  carousel.appendChild(track);

  const applyVars = () => {
    const children = Array.from(track.children);
    const firstHalf = children.slice(0, originalCount);
    const distance = measureWidth(firstHalf);

    // speed in px/s (higher = faster)
    // Tablet breakpoint matches CSS: min-width: 679px
    const isTabletUp = window.matchMedia('(min-width: 679px)').matches;
    const speed = isTabletUp ? 40 : 25;
    const duration = distance > 0 ? distance / speed : 40;

    track.style.setProperty('--marquee-distance', `${distance}px`);
    track.style.setProperty('--marquee-duration', `${duration}s`);
  };

  // Recalculate once images are loaded, then on resize
  let rafId = 0;
  const schedule = () => {
    cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(applyVars);
  };

  images.forEach((img) => {
    if (img.complete) return;
    img.addEventListener('load', schedule, { once: true });
    img.addEventListener('error', schedule, { once: true });
  });

  window.addEventListener('resize', schedule, { passive: true });
  schedule();
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.carousel').forEach(setupCarousel);
});
