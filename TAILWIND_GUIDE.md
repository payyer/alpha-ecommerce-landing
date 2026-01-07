# 📘 Hướng Dẫn Sử Dụng Tailwind CSS - Alpha E-commerce Landing

## 📚 Mục Lục

1. [Giới Thiệu](#giới-thiệu)
2. [Cấu Trúc Dự Án](#cấu-trúc-dự-án)
3. [Best Practices](#best-practices)
4. [Quy Tắc Đặt Tên](#quy-tắc-đặt-tên)
5. [Custom Components](#custom-components)
6. [Custom Utilities](#custom-utilities)
7. [Responsive Design](#responsive-design)
8. [Performance Tips](#performance-tips)
9. [Ví Dụ Thực Tế](#ví-dụ-thực-tế)

---

## 🎯 Giới Thiệu

Dự án này sử dụng **Tailwind CSS v3.4** với Vite để xây dựng landing page e-commerce. Tất cả đã được config sẵn và tối ưu cho production.

### Tech Stack

- ⚡ **Vite** - Build tool
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 📦 **PostCSS** - CSS processing
- 🔧 **Autoprefixer** - Vendor prefixes

---

## 📁 Cấu Trúc Dự Án

```
alpha-ecommerce-landing/
├── src/
│   ├── style.css           # ⭐ Main CSS file với @layer structure
│   ├── main.js             # Entry point
│   └── counter.js          # Example JS
├── public/                 # Static assets
├── index.html             # HTML entry point
├── tailwind.config.js     # ⭐ Tailwind configuration
├── postcss.config.js      # PostCSS config
└── package.json           # Dependencies
```

### Files Quan Trọng

#### 1️⃣ `tailwind.config.js`

File config chính của Tailwind, chứa:

- ✅ Custom breakpoints (mobile, tablet, pc)
- ✅ Custom colors (primary, secondary, night, mist, accent)
- ✅ Custom fonts (nunito, lora, montserrat, open-sans)
- ✅ Theme extensions

#### 2️⃣ `src/style.css`

File CSS chính, được tổ chức theo layers:

- ✅ `@layer base` - Base styles cho HTML elements
- ✅ `@layer components` - Reusable components (buttons, cards, inputs)
- ✅ `@layer utilities` - Custom utilities (animations, effects)

---

## ⭐ Best Practices

### 1. Sử Dụng @apply Đúng Cách

#### ✅ ĐÚNG - Dùng @apply trong @layer components

```css
@layer components {
  .btn-primary {
    @apply px-6 py-3 bg-primary text-white rounded-lg hover:bg-secondary;
  }
}
```

#### ❌ SAI - Không dùng @apply trong HTML (trừ trường hợp đặc biệt)

```html
<!-- Tránh -->
<div class="[&>p]:text-red-500"></div>
```

### 2. Ưu Tiên Utility Classes Trong HTML

#### ✅ ĐÚNG - Dùng utility classes trực tiếp

```html
<button
  class="px-6 py-3 bg-primary text-white rounded-lg hover:bg-secondary transition-colors"
>
  Click me
</button>
```

#### 🤔 CÂN NHẮC - Tạo component khi dùng lại nhiều lần

```html
<!-- Nếu button này xuất hiện nhiều nơi, tạo .btn-primary trong style.css -->
<button class="btn-primary">Click me</button>
```

### 3. Component-First Approach

**Khi nào tạo component class?**

- ✅ Component được dùng ≥ 3 lần trong dự án
- ✅ Component có logic phức tạp (nhiều states: hover, focus, disabled)
- ✅ Cần đồng nhất style trong toàn dự án

**Khi nào dùng utilities?**

- ✅ Styling một lần, không reuse
- ✅ Layout và spacing
- ✅ Responsive adjustments

### 4. Tổ Chức Code Rõ Ràng

#### Trong HTML - Nhóm classes theo chức năng

```html
<!-- Layout | Spacing | Typography | Colors | States -->
<div
  class="flex items-center justify-between 
            px-4 py-3 
            text-lg font-semibold 
            bg-white text-night 
            hover:bg-gray-50 transition-colors"
>
  Content
</div>
```

#### Trong CSS - Comment rõ ràng

```css
@layer components {
  /* ----------------------------------------
     BUTTONS - Các variant của button
     ---------------------------------------- */

  .btn-primary {
    /* Base styles */
    @apply inline-flex items-center justify-center;

    /* Spacing */
    @apply px-6 py-3;

    /* Typography */
    @apply font-semibold text-white;

    /* Colors */
    @apply bg-primary;

    /* Effects */
    @apply rounded-lg transition-all duration-300;

    /* States */
    @apply hover:bg-secondary hover:shadow-lg;
    @apply focus:outline-none focus:ring-2 focus:ring-primary;
    @apply disabled:opacity-50 disabled:cursor-not-allowed;
  }
}
```

---

## 🏷️ Quy Tắc Đặt Tên

### Components

```
.{component}-{variant}-{size}
```

**Ví dụ:**

- `.btn-primary` - Primary button
- `.btn-secondary-lg` - Large secondary button
- `.card-bordered` - Card with border
- `.input-error` - Input with error state

### Utilities

```
.{property}-{value}
```

**Ví dụ:**

- `.text-gradient` - Text with gradient
- `.glass` - Glassmorphism effect
- `.scrollbar-thin` - Thin scrollbar

### States

Sử dụng pseudo-classes của Tailwind:

- `hover:` - Hover state
- `focus:` - Focus state
- `active:` - Active state
- `disabled:` - Disabled state
- `group-hover:` - Group hover
- `peer-focus:` - Peer focus

---

## 🎨 Custom Components

Dự án đã có sẵn các component sau trong `src/style.css`:

### Buttons

#### `.btn-primary`

Button chính của website

```html
<button class="btn-primary">Primary Button</button>
```

#### `.btn-secondary`

Button phụ, outline style

```html
<button class="btn-secondary">Secondary Button</button>
```

#### `.btn-outline`

Button outline với border mist

```html
<button class="btn-outline">Outline Button</button>
```

### Cards

#### `.card`

Card cơ bản với shadow

```html
<div class="card">
  <h3>Card Title</h3>
  <p>Card content goes here...</p>
</div>
```

#### `.card-bordered`

Card với border, hover effect

```html
<div class="card-bordered">
  <h3>Bordered Card</h3>
  <p>Card with border...</p>
</div>
```

### Form Inputs

#### `.input`

Text input tiêu chuẩn

```html
<input type="text" class="input" placeholder="Enter your name" />
```

#### `.textarea`

Textarea với min-height

```html
<textarea class="textarea" placeholder="Your message"></textarea>
```

### Containers

#### `.container-custom`

Container với max-width và responsive padding

```html
<div class="container-custom">
  <!-- Content -->
</div>
```

#### `.section`

Section với vertical spacing

```html
<section class="section">
  <!-- Content -->
</section>
```

### Typography

#### Headings

```html
<h1 class="heading-1">Main Heading</h1>
<h2 class="heading-2">Sub Heading</h2>
<h3 class="heading-3">Section Heading</h3>
```

#### Body Text

```html
<p class="text-body">Regular paragraph text</p>
<p class="text-muted">Muted, smaller text</p>
```

---

## ⚡ Custom Utilities

### Animations

#### `.animate-fade-in`

Fade in animation

```html
<div class="animate-fade-in">This fades in</div>
```

#### `.animate-slide-up`

Slide up from bottom

```html
<div class="animate-slide-up">This slides up</div>
```

### Special Effects

#### `.text-gradient`

Gradient text effect

```html
<h1 class="text-gradient">Gradient Text</h1>
```

#### `.glass`

Glassmorphism effect

```html
<div class="glass p-6 rounded-lg">Glass effect content</div>
```

#### `.scrollbar-thin`

Custom thin scrollbar

```html
<div class="h-96 overflow-y-auto scrollbar-thin">
  <!-- Scrollable content -->
</div>
```

---

## 📱 Responsive Design

### Breakpoints Đã Config

```javascript
// tailwind.config.js
screens: {
  mobile: { max: '678px' },      // <= 678px
  tablet: { min: '679px', max: '991px' },  // 679px - 991px
  pc: '992px',                   // >= 992px
}
```

### Cách Sử Dụng

#### Mobile-First Approach (Recommended)

```html
<!-- Base styles cho mobile, override cho tablet và pc -->
<div class="text-sm tablet:text-base pc:text-lg">Responsive text</div>

<div class="grid grid-cols-1 tablet:grid-cols-2 pc:grid-cols-4">
  <!-- Responsive grid -->
</div>
```

#### Desktop-First Approach

```html
<!-- Base styles cho desktop, override cho mobile -->
<div class="text-lg mobile:text-sm">Responsive text</div>
```

### Best Practices cho Responsive

1. **Layout**

```html
<!-- Container với responsive padding -->
<div class="container-custom">
  <!-- mx-auto + responsive px -->
</div>
```

2. **Typography**

```html
<!-- Responsive font sizes -->
<h1 class="text-5xl mobile:text-3xl tablet:text-4xl">Responsive Heading</h1>
```

3. **Spacing**

```html
<!-- Responsive padding/margin -->
<section class="py-16 mobile:py-8 tablet:py-12">
  <!-- Content -->
</section>
```

4. **Grid & Flex**

```html
<!-- Responsive columns -->
<div class="grid grid-cols-4 tablet:grid-cols-2 mobile:grid-cols-1 gap-6">
  <!-- Items -->
</div>

<!-- Responsive flex direction -->
<div class="flex flex-row mobile:flex-col gap-4">
  <!-- Items -->
</div>
```

5. **Show/Hide Elements**

```html
<!-- Hide on mobile -->
<div class="block mobile:hidden">Desktop only content</div>

<!-- Show only on mobile -->
<div class="hidden mobile:block">Mobile only content</div>
```

---

## 🚀 Performance Tips

### 1. Purge Unused CSS

Tailwind tự động purge unused CSS khi build. Đảm bảo config đúng trong `tailwind.config.js`:

```javascript
content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}',
],
```

### 2. Sử Dụng @layer

✅ **ĐÚNG** - CSS được optimize

```css
@layer components {
  .btn-primary {
    @apply px-6 py-3 bg-primary;
  }
}
```

❌ **SAI** - CSS không được optimize

```css
.btn-primary {
  @apply px-6 py-3 bg-primary;
}
```

### 3. Avoid Arbitrary Values (nếu có thể)

✅ **ĐÚNG** - Dùng values từ config

```html
<div class="text-primary bg-mist p-6"></div>
```

❌ **CÂN NHẮC** - Arbitrary values

```html
<div class="text-[#039869] bg-[#e2e8f0] p-[24px]"></div>
```

> **Lưu ý:** Arbitrary values không được purge, làm tăng bundle size.

### 4. Build Commands

```bash
# Development - không purge CSS
npm run dev

# Production - purge unused CSS, minify
npm run build

# Preview production build
npm run preview
```

---

## 💡 Ví Dụ Thực Tế

### 1. Hero Section

```html
<section class="section bg-gradient-to-br from-primary to-secondary">
  <div class="container-custom">
    <div class="grid grid-cols-2 mobile:grid-cols-1 gap-12 items-center">
      <!-- Text Content -->
      <div class="animate-slide-up">
        <h1 class="heading-1 text-white mb-6">Welcome to Alpha E-commerce</h1>
        <p class="text-body text-white/90 mb-8">
          Discover amazing products at unbeatable prices
        </p>
        <div class="flex gap-4 mobile:flex-col">
          <button class="btn-primary">Shop Now</button>
          <button
            class="btn-secondary bg-white text-primary border-white hover:bg-transparent hover:text-white"
          >
            Learn More
          </button>
        </div>
      </div>

      <!-- Hero Image -->
      <div class="animate-fade-in">
        <img src="/hero-image.jpg" alt="Hero" class="rounded-lg shadow-2xl" />
      </div>
    </div>
  </div>
</section>
```

### 2. Product Card

```html
<div class="card group cursor-pointer">
  <!-- Image -->
  <div class="relative overflow-hidden rounded-lg mb-4">
    <img
      src="/product.jpg"
      alt="Product"
      class="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
    />
    <!-- Badge -->
    <span
      class="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold"
    >
      New
    </span>
  </div>

  <!-- Content -->
  <h3 class="heading-3 mb-2 group-hover:text-primary transition-colors">
    Product Name
  </h3>
  <p class="text-muted mb-4">Product description goes here</p>

  <!-- Price & Button -->
  <div class="flex items-center justify-between">
    <span class="text-2xl font-bold text-primary"> $99.99 </span>
    <button class="btn-primary">Add to Cart</button>
  </div>
</div>
```

### 3. Contact Form

```html
<form class="card-bordered max-w-2xl mx-auto">
  <h2 class="heading-2 mb-6">Contact Us</h2>

  <!-- Name Input -->
  <div class="mb-4">
    <label class="block text-sm font-semibold text-night mb-2">
      Your Name
    </label>
    <input type="text" class="input" placeholder="John Doe" required />
  </div>

  <!-- Email Input -->
  <div class="mb-4">
    <label class="block text-sm font-semibold text-night mb-2">
      Email Address
    </label>
    <input type="email" class="input" placeholder="john@example.com" required />
  </div>

  <!-- Message Textarea -->
  <div class="mb-6">
    <label class="block text-sm font-semibold text-night mb-2"> Message </label>
    <textarea
      class="textarea"
      placeholder="Your message..."
      required
    ></textarea>
  </div>

  <!-- Submit Button -->
  <button type="submit" class="btn-primary w-full">Send Message</button>
</form>
```

### 4. Navigation Bar

```html
<nav class="glass sticky top-0 z-50 border-b border-mist">
  <div class="container-custom">
    <div class="flex items-center justify-between h-20">
      <!-- Logo -->
      <a href="/" class="text-2xl font-bold text-primary"> Alpha </a>

      <!-- Desktop Menu -->
      <ul class="hidden pc:flex items-center gap-8">
        <li>
          <a href="#" class="text-night hover:text-primary transition-colors"
            >Home</a
          >
        </li>
        <li>
          <a href="#" class="text-night hover:text-primary transition-colors"
            >Products</a
          >
        </li>
        <li>
          <a href="#" class="text-night hover:text-primary transition-colors"
            >About</a
          >
        </li>
        <li>
          <a href="#" class="text-night hover:text-primary transition-colors"
            >Contact</a
          >
        </li>
      </ul>

      <!-- CTA Button -->
      <button class="btn-primary mobile:hidden">Get Started</button>

      <!-- Mobile Menu Button -->
      <button class="pc:hidden p-2">
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>
    </div>
  </div>
</nav>
```

### 5. Feature Grid

```html
<section class="section">
  <div class="container-custom">
    <h2 class="heading-2 text-center mb-12">Our Features</h2>

    <div class="grid grid-cols-3 tablet:grid-cols-2 mobile:grid-cols-1 gap-8">
      <!-- Feature 1 -->
      <div class="card text-center animate-slide-up">
        <div
          class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4"
        >
          <svg
            class="w-8 h-8 text-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
        </div>
        <h3 class="heading-3 mb-3">Quality Products</h3>
        <p class="text-body">High-quality products at affordable prices</p>
      </div>

      <!-- Feature 2 -->
      <div
        class="card text-center animate-slide-up"
        style="animation-delay: 0.1s"
      >
        <div
          class="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4"
        >
          <svg
            class="w-8 h-8 text-secondary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
        </div>
        <h3 class="heading-3 mb-3">Fast Delivery</h3>
        <p class="text-body">Quick and reliable shipping worldwide</p>
      </div>

      <!-- Feature 3 -->
      <div
        class="card text-center animate-slide-up"
        style="animation-delay: 0.2s"
      >
        <div
          class="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4"
        >
          <svg
            class="w-8 h-8 text-accent"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            ></path>
          </svg>
        </div>
        <h3 class="heading-3 mb-3">Secure Payment</h3>
        <p class="text-body">Safe and secure payment options</p>
      </div>
    </div>
  </div>
</section>
```

---

## 📖 Tài Liệu Tham Khảo

### Official Docs

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Tailwind CSS Best Practices](https://tailwindcss.com/docs/reusing-styles)
- [Vite Documentation](https://vitejs.dev/)

### Useful Resources

- [Tailwind UI Components](https://tailwindui.com/components)
- [Headless UI](https://headlessui.com/) - Unstyled components
- [Heroicons](https://heroicons.com/) - SVG icons

---

## 🎓 Tips cho Bài Test

### 1. Code Organization

- ✅ Giữ code clean và có tổ chức
- ✅ Comment rõ ràng cho các phần quan trọng
- ✅ Tuân thủ naming conventions

### 2. Responsive Design

- ✅ Test trên nhiều breakpoints
- ✅ Sử dụng breakpoints đã config
- ✅ Mobile-first approach

### 3. Performance

- ✅ Sử dụng @layer để optimize CSS
- ✅ Tránh inline styles khi có thể
- ✅ Reuse components thay vì duplicate code

### 4. Consistency

- ✅ Sử dụng colors từ config
- ✅ Consistent spacing scale
- ✅ Consistent typography

### 5. Accessibility

- ✅ Semantic HTML
- ✅ Proper focus states
- ✅ Alt text cho images
- ✅ ARIA labels khi cần

---

## ✅ Checklist Trước Khi Submit

- [ ] Code được format đúng chuẩn
- [ ] Tất cả components đều responsive
- [ ] Đã test trên mobile/tablet/desktop
- [ ] Colors sử dụng từ config
- [ ] Có comments cho code phức tạp
- [ ] Build production thành công (`npm run build`)
- [ ] Không có console errors
- [ ] Accessibility basics đã được implement

---

**Good luck với bài test! 🚀**

_File này được tạo để hướng dẫn sử dụng Tailwind CSS một cách chuyên nghiệp và dễ maintain._
