/** @type {import('tailwindcss').Config} */
export default {
  // ==========================================
  // CONTENT PATHS
  // ==========================================
  // Định nghĩa các file cần scan để tìm class Tailwind
  // Tailwind sẽ chỉ generate CSS cho các class được sử dụng trong những file này
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Scan tất cả file JS/TS/JSX/TSX trong thư mục src
  ],

  theme: {
    // ==========================================
    // CUSTOM BREAKPOINTS
    // ==========================================
    // Định nghĩa responsive breakpoints cho dự án
    // Sử dụng: mobile:hidden, tablet:flex, pc:grid, etc.
    screens: {
      // Mobile-first: Áp dụng cho màn hình <= 678px
      mobile: { max: "678px" },

      // Tablet: Áp dụng cho màn hình từ 679px đến 991px
      // tablet: { min: "679px", max: "991px" },
      tablet: "679px",
      "tablet-sm": { min: "679px", max: "759px" },
      // PC: Áp dụng cho màn hình >= 992px
      // pc: "992px",
      

      // Tip: Bạn có thể thêm thêm breakpoints tùy chỉnh
      // 'xl': '1280px',
      // '2xl': '1536px',
    },

    // ==========================================
    // FONT FAMILIES
    // ==========================================
    // Định nghĩa các font chữ cho dự án
    // Sử dụng: font-sans, font-nunito, font-lora, etc.
    fontFamily: {
      // Default sans-serif font
      sans: ['"Nunito"', "system-ui", "sans-serif"],

      // Custom fonts - sử dụng qua font-{name}
      nunito: ['"Nunito"', "system-ui", "sans-serif"],
      lora: ['"Lora"', "serif"],
      montserrat: ['"Montserrat"', "system-ui", "sans-serif"],
      "open-sans": ['"Open Sans"', "system-ui", "sans-serif"],
      "sofia-pro": ['"Sofia Pro"', "system-ui", "sans-serif"],
    },

    // ==========================================
    // THEME EXTENSIONS
    // ==========================================
    // Mở rộng theme mặc định của Tailwind
    // Các giá trị ở đây sẽ được MERGE với config mặc định
    extend: {
      // ========================================
      // CUSTOM COLORS
      // ========================================
      // Định nghĩa bảng màu cho dự án
      // Sử dụng: text-primary, bg-secondary, border-accent, etc.
      colors: {
        // Màu chính của brand
        primary: "#039869",

        // Màu phụ
        secondary: "#0c7c00",

        // Màu tối cho text/background
        night: "#0f172a",

        // Màu sáng cho background/borders
        mist: "#e2e8f0",

        // Màu nhấn mạnh (accent)
        accent: "#7c3aed",

        "light" : "#000000bf",

        input: "#e4e4e4",
        // Best Practice: Có thể mở rộng thành palette với shades
        // primary: {
        //   50: '#f0fdf4',
        //   100: '#dcfce7',
        //   500: '#039869', // main
        //   900: '#014d34',
        // },
      },

      // ========================================
      // SPACING (TÙY CHỌN)
      // ========================================
      // Mở rộng spacing scale mặc định
      spacing: {
        // '128': '32rem',
        // '144': '36rem',
      },

      // ========================================
      // TYPOGRAPHY (TÙY CHỌN)
      // ========================================
      // Kích thước font tùy chỉnh
      fontSize: {
        // 'xs': ['0.75rem', { lineHeight: '1rem' }],
        // 'sm': ['0.875rem', { lineHeight: '1.25rem' }],
      },

      // ========================================
      // ANIMATIONS (TÙY CHỌN)
      // ========================================
      // Thêm animations tùy chỉnh
      animation: {
        "fade-in": "fadeIn 0.3s ease-out",
        "fade-out": "fadeOut 0.3s ease-in",
        "scale-in": "scaleIn 0.3s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
    },
  },

  // ==========================================
  // PLUGINS
  // ==========================================
  // Thêm các plugin Tailwind để mở rộng chức năng
  // Ví dụ: @tailwindcss/forms, @tailwindcss/typography, @tailwindcss/aspect-ratio
  plugins: [],
};
