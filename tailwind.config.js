module.exports = {
  darkMode: "class", // Use class-based dark mode for better control
  mode: "jit", // Just-In-Time mode for faster builds
  attributify: false,
  extract: {
    include: [
      "./components/**/*.{vue,js}",
      "./composables/**/*.{js,ts}",
      "./content/**/*.md",
      "./layouts/**/*.vue",
      "./pages/**/*.vue",
      "./plugins/**/*.{js,ts}",
      "./utils/**/*.{js,ts}",
      "./app.vue",
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      fontWeight: {
        hairline: 100,
        thin: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900,
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem", // Use responsive padding
          sm: "2rem",
          lg: "3rem",
          xl: "4rem",
        },
      },
      colors: {
        ultramarine: {
          50: '#e3e1f9',    // Very light ultramarine
          100: '#c7c2f3',    // Light ultramarine
          200: '#8f8be8',    // Lighter mid-tone ultramarine
          300: '#5754dd',    // Mid-tone, balanced for accents
          400: '#120A8F',    // Rich and vibrant ultramarine
          500: '#120A8F',    // Main ultramarine standard
          600: '#10087f',    // Slightly darker ultramarine
          700: '#0d066b',    // Dark ultramarine, for strong contrast
          800: '#0a0557',    // Very dark ultramarine, for deep contrast
          900: '#070341',    // Darkest shade, close to black
          950: '#040220'     // Near black, slight ultramarine tint
        }


      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  safelist: [],
  shortcuts: {},
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/container-queries"),
    require("@tailwindcss/aspect-ratio"),
    require("tailgrids/plugin"),
    require("tailwindcss-animate"),
  ],
};
