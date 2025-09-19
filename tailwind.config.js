/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      maxWidth: {
        '8xl': '88rem', // 1408px - optimized for 16" MacBook Pro
        '9xl': '96rem', // 1536px - for larger displays
      },
      colors: {
        ink: '#0B1220',
        surface: '#FFFFFF',
        accent: '#2563EB',
        accentAlt: '#0EA5E9',
        hairline: 'rgba(15,23,42,0.08)',
      },
      fontFamily: {
        'space-grotesk': ['Space Grotesk', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      fontSize: {
        'h1': 'clamp(36px, 5vw, 64px)',
        'h2': 'clamp(28px, 3.5vw, 40px)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'count-up': 'countUp 2s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        countUp: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      boxShadow: {
        'glass': '0 12px 40px -12px rgba(0,0,0,0.25)',
      },
    },
  },
  plugins: [],
};