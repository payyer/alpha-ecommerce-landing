import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const videoSwiper = new Swiper(".video-swiper", {
  modules: [Navigation, Pagination],
  slidesPerView: 1.295,
  spaceBetween: 0,
  loop: false,
  pagination: {
    el: ".video-swiper-pagination",
    type: "bullets",
    clickable: true,
    renderBullet: (index, className) => {
      return `<span class="${className} video-swiper-bullet" aria-label="Go to slide ${index + 1}"></span>`;
    },
  },
  navigation: {
    nextEl: ".video-swiper-next",
    prevEl: ".video-swiper-prev",
  },
  breakpoints: {
    679: {
      slidesPerView: 4,
      spaceBetween: 0,
    },
  },
});

// Video play/pause functionality
const videoSlides = document.querySelectorAll(".video-slide");

videoSlides.forEach((slide) => {
  const video = slide.querySelector("video");
  const playBtn = slide.querySelector(".video-play-btn");

  slide.addEventListener("click", () => {
    if (video.paused) {
      // Pause all other videos first
      document.querySelectorAll(".video-slide video").forEach((v) => {
        if (v !== video) {
          v.pause();
          v.closest(".video-slide").querySelector(".video-play-btn").classList.remove("hidden");
        }
      });
      video.play();
      playBtn.classList.add("hidden");
    } else {
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
