/**
 * ============================================================================
 * CAROUSEL / MARQUEE - Press Logos Section
 * ============================================================================
 * 
 * Creates an infinite scrolling marquee effect for the "As Seen In" press logos.
 * Features:
 * - Smooth infinite loop animation
 * - Responsive speed (slower on mobile, faster on tablet+)
 * - Automatic cloning for seamless loop
 * - Pauses on hover
 * - Respects prefers-reduced-motion
 * 
 * HTML Structure:
 * <div class="carousel">
 *   <img class="press_logo" src="..." alt="...">
 *   <!-- more logos -->
 * </div>
 * 
 * CSS Variables set by JS:
 * --marquee-distance: Total width to animate
 * --marquee-duration: Animation duration based on speed
 * 
 * ============================================================================
 */

/**
 * Calculate total width of elements including margins
 * @param {HTMLElement[]} elements - Array of elements to measure
 * @returns {number} Total width in pixels
 */
function measureWidth(elements) {
  return elements.reduce((sum, el) => {
    const style = getComputedStyle(el);
    const ml = parseFloat(style.marginLeft) || 0;
    const mr = parseFloat(style.marginRight) || 0;
    return sum + el.getBoundingClientRect().width + ml + mr;
  }, 0);
}

/**
 * Initialize a single carousel instance
 * @param {HTMLElement} carousel - The carousel container element
 */
function setupCarousel(carousel) {
  if (!(carousel instanceof HTMLElement)) return;
  
  // Prevent double initialization
  if (carousel.dataset.carouselInit === 'true') return;
  carousel.dataset.carouselInit = 'true';

  const images = Array.from(carousel.querySelectorAll('img.press_logo'));
  if (images.length === 0) return;

  // Build track: [original images] + [cloned images] for seamless loop
  const track = document.createElement('div');
  track.className = 'carousel__track';

  // Add original images
  images.forEach((img) => track.appendChild(img));
  const originalCount = images.length;
  
  // Clone images for infinite loop effect
  images.forEach((img) => track.appendChild(img.cloneNode(true)));

  // Mount track to carousel
  carousel.textContent = '';
  carousel.appendChild(track);

  /**
   * Calculate and apply CSS variables for animation
   */
  const applyVars = () => {
    const children = Array.from(track.children);
    const firstHalf = children.slice(0, originalCount);
    const distance = measureWidth(firstHalf);

    // Speed in px/s (higher = faster)
    // Tablet breakpoint matches CSS: min-width: 679px
    const isTabletUp = window.matchMedia('(min-width: 679px)').matches;
    const speed = isTabletUp ? 40 : 25;
    const duration = distance > 0 ? distance / speed : 40;

    track.style.setProperty('--marquee-distance', `${distance}px`);
    track.style.setProperty('--marquee-duration', `${duration}s`);
  };

  // Throttle resize recalculation with RAF
  let rafId = 0;
  const schedule = () => {
    cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(applyVars);
  };

  // Recalculate when images load
  images.forEach((img) => {
    if (img.complete) return;
    img.addEventListener('load', schedule, { once: true });
    img.addEventListener('error', schedule, { once: true });
  });

  // Recalculate on window resize
  window.addEventListener('resize', schedule, { passive: true });
  
  // Initial calculation
  schedule();
}

// Initialize all carousels on page load
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.carousel').forEach(setupCarousel);
});
