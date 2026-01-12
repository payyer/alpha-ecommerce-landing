# 🛍️ Sculptique™ Landing Page Clone

> Pixel-perfect clone of the Sculptique™ product page for interview submission  
> Reference: [https://trysculptique.com/products/lymph-cc-select](https://trysculptique.com/products/lymph-cc-select)

## 🚢 Deployment

- **Live demo:** https://le-quoc-anh-alpha-ecommerce-landing.vercel.app/


## 🎯 Project Overview

This is a front-end clone of the Sculptique™ Lymphatic Drainage Capsules product page, built as part of a Round 2 interview assessment for **Pati Creative Agency**.

### Requirements Met:
- ✅ **Pixel-accurate layout** - Spacing, typography, colors, and fonts match reference
- ✅ **Responsive design** - Desktop, tablet, and mobile breakpoints
- ✅ **UI interactions** - Hover states, sliders, popups, accordions
- ✅ **Clean code** - Well-structured, readable, and documented

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📂 Project Structure

```
alpha-ecommerce-landing/
├── src/
│   ├── style.css              # Tailwind + Custom CSS with @layer structure
│   ├── main.js                # Application entry point
│   ├── swiperHero.js          # Product image gallery
│   ├── swiperVideo.js         # Video testimonials carousel
│   ├── accordion.js           # FAQ accordion component
│   ├── modal.js               # Modals (Nutritional Info, Clinicians Choice)
│   ├── carousel.js            # Press logos marquee
│   ├── options.js             # Purchase options selector
│   ├── reviewDisplayName.js   # Review display name dropdown
│   └── assets/
│       └── fonts/             # Local fonts (Sofia Pro)
├── public/
│   └── assets/images/         # Static images
├── index.html                 # Main HTML file
├── tailwind.config.js         # Tailwind configuration
├── postcss.config.js          # PostCSS config
└── package.json               # Dependencies
```

## 🎨 Design System

### Typography

| Font | Usage |
|------|-------|
| **Sofia Pro** | Primary headings |
| **Lora** | Serif headings, quotes |
| **Nunito** | Body text |
| **Montserrat** | Alternative sans |
| **Open Sans** | Alternative body |

### Breakpoints

| Name | Range | Usage |
|------|-------|-------|
| **Mobile** | `≤678px` | Phone screens |
| **Tablet** | `≥679px` | Tablets and up |

## 📱 Page Sections

1. **Header** - Logo and navigation
2. **Hero Product Gallery** - Main product images with thumbnail navigation
3. **Product Info** - Title, price, options, CTA
4. **As Seen In** - Press logos marquee carousel
5. **Why Your Symptoms Are Connected** - Symptom explanation section
6. **Hidden Drainage System** - Lymphatic system education
7. **Why Nothing Worked** - Problem/solution comparison
8. **8-Ingredient System** - Ingredients breakdown with accordions
9. **Customer Reviews** - Testimonials with write review form
10. **Video Stories** - Customer video testimonials swiper
11. **FAQs** - 10 frequently asked questions with accordions
12. **Mission Section** - Brand story and values
13. **Final CTA** - Purchase call-to-action

## ✨ Technical Features

### Interactions
- **Swiper.js** - Product gallery and video carousel
- **Accordions** - Smooth height transitions, ARIA accessible
- **Modals** - Fade/scale animations, backdrop click to close
- **Marquee** - Infinite scroll press logos

### Responsive
- Mobile-first approach
- Custom breakpoints matching design
- Flexible grid layouts
- Responsive typography

### Performance
- Lazy loading images
- Optimized font loading (`font-display: swap`)
- Tailwind PurgeCSS in production
- Minimal JavaScript footprint

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **Vite** | 7.2.4 | Build tool |
| **Tailwind CSS** | 3.4.14 | Styling |
| **Swiper** | 12.0.3 | Carousels |
| **PostCSS** | 8.5.3 | CSS processing |


## 📚 Resources

- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Vite Docs](https://vitejs.dev/)
- [TAILWIND_GUIDE.md](./TAILWIND_GUIDE.md) - Guide chi tiết của dự án này


