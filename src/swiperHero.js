/**
 * ============================================================================
 * SWIPER HERO - Product Image Gallery
 * ============================================================================
 * 
 * Creates a synchronized main image + thumbnails gallery for product images.
 * Features:
 * - Main swiper with large product images
 * - Thumbnail swiper for navigation
 * - Infinite loop mode
 * - Click thumbnail to change main image
 * - Swipe thumbnails to navigate
 * 
 * ============================================================================
 */

import Swiper from "swiper";
import {
  Navigation,
  Pagination,
  Autoplay,
  Scrollbar,
  Thumbs,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/thumbs";

/**
 * Thumbnail Swiper
 * @description Small thumbnail navigation below main gallery
 */
const swiperHeroThumbs = new Swiper(".swiper-thumbs", {
  modules: [Navigation],
  spaceBetween: 8,
  slidesPerView: 4,
  longSwipes: false,
  loop: true,
});

/**
 * Main Hero Swiper
 * @description Large product image display with navigation
 */
const swiperHero = new Swiper(".swiper-hero", {
  modules: [Navigation, Pagination, Autoplay, Scrollbar, Thumbs],
  direction: "horizontal",
  loop: true,
  speed: 500,
  longSwipes: false,
  loopedSlides: 13,
  
  // Connect to thumbnail swiper
  thumbs: {
    swiper: swiperHeroThumbs,
  },
  
  // Arrow navigation
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/**
 * Sync main swiper slide change to thumbnails
 */
swiperHero.on("slideChange", () => {
  const realIndex = swiperHero.realIndex;
  swiperHeroThumbs.slideToLoop(realIndex);
});

/**
 * Handle thumbnail swipe to navigate main swiper
 */
swiperHeroThumbs.on("touchEnd", () => {
  const diff = swiperHeroThumbs.touches.diff;
  if (diff < 0) {
    swiperHero.slideNext();
  } else if (diff > 0) {
    swiperHero.slidePrev();
  }
});

export { swiperHero, swiperHeroThumbs };
