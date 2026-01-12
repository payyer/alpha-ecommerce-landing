/**
 * ============================================================================
 * MAIN.JS - Application Entry Point
 * ============================================================================
 * 
 * This is the main entry file for the Sculptique™ landing page.
 * It imports all necessary styles and JavaScript modules.
 * 
 * Project: Sculptique™ E-commerce Landing Page
 * Reference: https://trysculptique.com/products/lymph-cc-select
 * 
 * Tech Stack:
 * - Vite (Build tool)
 * - Tailwind CSS (Styling)
 * - Swiper.js (Carousels/Sliders)
 * - Vanilla JavaScript (Interactions)
 * 
 * ============================================================================
 */

// Core Styles (Tailwind + Custom CSS)
import "./style.css";

// UI Components - Modals
import "./modal.js";

// Product Options - Quantity selector and variant picker
import "./options.js";

// Hero Section - Product image gallery with thumbnails
import { swiperHero, swiperHeroThumbs } from "./swiperHero.js";

// Accordion Component - FAQ and collapsible sections
import "./accordion.js";

// Press Logos Marquee - Infinite scrolling carousel
import './carousel.js';

// Review Form - Write a review form validation
import './reviewForm.js';

// Video Stories Swiper - Customer video testimonials
import './swiperVideo.js';
