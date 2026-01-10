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

const swiperHeroThumbs = new Swiper(".swiper-thumbs", {
  modules: [Navigation],
  spaceBetween: 8,
  slidesPerView: 4,
  longSwipes: false,
  loop: true,
});

const swiperHero = new Swiper(".swiper-hero", {
  modules: [Navigation, Pagination, Autoplay, Scrollbar, Thumbs],
  direction: "horizontal",
  loop: true,
  speed: 500,
  longSwipes: false,
  loopedSlides: 13,
  thumbs: {
    swiper: swiperHeroThumbs,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

swiperHero.on("slideChange", () => {
  const realIndex = swiperHero.realIndex;
  swiperHeroThumbs.slideToLoop(realIndex);
});

swiperHeroThumbs.on("touchEnd", () => {
  const diff = swiperHeroThumbs.touches.diff;
  if (diff < 0) {
    swiperHero.slideNext();
  } else if (diff > 0) {
    swiperHero.slidePrev();
  }
});

export { swiperHero, swiperHeroThumbs };
