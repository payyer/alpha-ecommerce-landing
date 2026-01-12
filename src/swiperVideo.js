/**
 * ============================================================================
 * SWIPER VIDEO - Customer Video Stories Section
 * ============================================================================
 * 
 * Creates a horizontal swiper for customer video testimonials.
 * Features:
 * - Responsive slides: 1.295 on mobile, 4 on tablet+
 * - Custom bullet pagination (flat bar segments)
 * - Click-to-play/pause functionality
 * - Only one video plays at a time
 * 
 * ============================================================================
 */

import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

/**
 * Initialize Video Stories Swiper
 * @description Swiper instance for the video testimonials section
 */
const videoSwiper = new Swiper(".video-swiper", {
  modules: [Navigation, Pagination],
  
  // Mobile: Show 1.295 slides for peek effect
  slidesPerView: 1.295,
  spaceBetween: 0,
  loop: false,
  
  // Custom bullet pagination - renders as flat bar segments
  pagination: {
    el: ".video-swiper-pagination",
    type: "bullets",
    clickable: true,
    renderBullet: (index, className) => {
      return `<span class="${className} video-swiper-bullet" aria-label="Go to slide ${index + 1}"></span>`;
    },
  },
  
  // Navigation arrows (hidden by default, can be enabled)
  navigation: {
    nextEl: ".video-swiper-next",
    prevEl: ".video-swiper-prev",
  },
  
  // Responsive breakpoints
  breakpoints: {
    // Tablet and above: Show 4 slides
    679: {
      slidesPerView: 4,
      spaceBetween: 0,
    },
  },
});

/**
 * Video Play/Pause Functionality
 * @description Handles click-to-play and ensures only one video plays at a time
 */
const videoSlides = document.querySelectorAll(".video-slide");

videoSlides.forEach((slide) => {
  const video = slide.querySelector("video");
  const playBtn = slide.querySelector(".video-play-btn");

  // Toggle play/pause on slide click
  slide.addEventListener("click", () => {
    if (video.paused) {
      // Pause all other videos first (only one video at a time)
      document.querySelectorAll(".video-slide video").forEach((v) => {
        if (v !== video) {
          v.pause();
          v.closest(".video-slide").querySelector(".video-play-btn").classList.remove("hidden");
        }
      });
      
      // Play current video and hide play button
      video.play();
      playBtn.classList.add("hidden");
    } else {
      // Pause current video and show play button
      video.pause();
      playBtn.classList.remove("hidden");
    }
  });

  // Show play button when video ends
  video.addEventListener("ended", () => {
    playBtn.classList.remove("hidden");
  });
});

export { videoSwiper };
