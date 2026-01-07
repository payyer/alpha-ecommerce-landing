# 🛍️ Alpha E-commerce Landing Page

> Landing page cho nền tảng e-commerce sử dụng Tailwind CSS + Vite

## 🚀 Quick Start

```bash
# Cài đặt dependencies
npm install

# Chạy development server
npm run dev

# Build cho production
npm run build

# Preview production build
npm run preview
```

## 📂 Cấu Trúc Dự Án

```
alpha-ecommerce-landing/
├── src/
│   ├── style.css              # ⭐ CSS với @layer structure
│   ├── main.js                # JavaScript entry point
│   └── counter.js             # Example component
├── public/                    # Static assets
├── index.html                 # ⭐ HTML với examples
├── tailwind.config.js         # ⭐ Tailwind configuration
├── postcss.config.js          # PostCSS config
├── TAILWIND_GUIDE.md          # 📖 Hướng dẫn chi tiết
└── package.json               # Dependencies
```

## 📖 Documentation

Xem file [TAILWIND_GUIDE.md](./TAILWIND_GUIDE.md) để có hướng dẫn chi tiết về:

- ✅ Best practices sử dụng Tailwind CSS
- ✅ Cấu trúc code rõ ràng, dễ mở rộng
- ✅ Custom components và utilities
- ✅ Responsive design patterns
- ✅ Performance optimization tips
- ✅ Ví dụ code thực tế

## 🎨 Design System

### Colors

- **primary**: `#039869` - Màu chính
- **secondary**: `#0c7c00` - Màu phụ
- **night**: `#0f172a` - Màu tối
- **mist**: `#e2e8f0` - Màu sáng
- **accent**: `#7c3aed` - Màu nhấn

### Fonts

- **Nunito** - Default sans-serif
- **Lora** - Serif font
- **Montserrat** - Alternative sans
- **Open Sans** - Alternative sans

### Breakpoints

- **mobile**: `max-width: 678px`
- **tablet**: `679px - 991px`
- **pc**: `min-width: 992px`

## 📱 Responsive Usage

```html
<!-- Mobile-first approach -->
<div class="text-sm tablet:text-base pc:text-lg">Responsive text</div>

<!-- Grid responsive -->
<div class="grid grid-cols-1 tablet:grid-cols-2 pc:grid-cols-4 gap-6">
  <!-- Items -->
</div>

<!-- Show/Hide -->
<div class="hidden pc:block">Desktop only</div>
<div class="block mobile:hidden">Hide on mobile</div>
```

## ✨ Features

- ✅ **Tailwind CSS v3.4** - Utility-first CSS framework
- ✅ **Vite** - Lightning fast build tool
- ✅ **Custom Design System** - Predefined colors, fonts, breakpoints
- ✅ **Responsive Design** - Mobile-first approach
- ✅ **Performance Optimized** - PurgeCSS, minification
- ✅ **Well Documented** - Comments và guide chi tiết

## 🎯 Best Practices Đã Apply

1. **@layer structure** - Tổ chức CSS theo base, components, utilities
2. **Naming conventions** - Đặt tên rõ ràng, có quy chuẩn
3. **Mobile-first** - Responsive design approach
4. **Performance** - PurgeCSS để optimize bundle size
5. **Accessibility** - Focus states, semantic HTML
6. **Comments** - Comment rõ ràng cho maintainability

## 🔧 Development Tips

1. **Check [TAILWIND_GUIDE.md](./TAILWIND_GUIDE.md)** trước khi code
2. **Sử dụng colors từ config** thay vì arbitrary values
3. **Tạo component class** khi dùng lại ≥ 3 lần
4. **Test responsive** trên mobile/tablet/desktop
5. **Run `npm run build`** để check production bundle

## 📚 Resources

- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Vite Docs](https://vitejs.dev/)
- [TAILWIND_GUIDE.md](./TAILWIND_GUIDE.md) - Guide chi tiết của dự án này
