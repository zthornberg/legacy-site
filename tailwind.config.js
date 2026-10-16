/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Near-black ink. The primary text + dark band color.
        ink: {
          DEFAULT: '#0B0B0C',
          900: '#0B0B0C',
          800: '#141416',
          700: '#1E1E21',
          600: '#2E2E33',
          500: '#45454C',
        },
        // Warm off-white surfaces.
        paper: {
          DEFAULT: '#FAF9F6',
          deep: '#F2F0EA',
          card: '#FFFFFF',
        },
        // Single brass accent. `deep` passes AA for small text on paper,
        // `light` is for use on ink backgrounds.
        brass: {
          DEFAULT: '#A98451',
          deep: '#7D6033',
          light: '#CBAA72',
          soft: '#E7DCC4',
          tint: '#F7F2E8',
        },
        // Warm greys for secondary text.
        mute: {
          DEFAULT: '#6B6860',
          strong: '#45433E',
          soft: '#716D65',
        },
        // Hairlines.
        line: {
          DEFAULT: 'rgba(11,11,12,0.08)',
          strong: 'rgba(11,11,12,0.16)',
          inverse: 'rgba(255,255,255,0.12)',
          'inverse-strong': 'rgba(255,255,255,0.24)',
        },
        // Legacy aliases kept so untouched code still renders on-brand.
        accent: '#A98451',
        accentAlt: '#7D6033',
        surface: '#FFFFFF',
        hairline: 'rgba(11,11,12,0.08)',
      },
      fontFamily: {
        display: ['"Instrument Serif"', 'Georgia', '"Times New Roman"', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', '"Segoe UI"', 'Roboto', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Consolas', 'monospace'],
        // Backwards-compatible aliases.
        'space-grotesk': ['"Instrument Serif"', 'Georgia', 'serif'],
        inter: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-2xl': ['clamp(3rem, 6.5vw, 5.75rem)', { lineHeight: '0.98', letterSpacing: '-0.015em' }],
        'display-xl': ['clamp(2.5rem, 5vw, 4.25rem)', { lineHeight: '1.02', letterSpacing: '-0.015em' }],
        'display-lg': ['clamp(2rem, 3.6vw, 3rem)', { lineHeight: '1.08', letterSpacing: '-0.01em' }],
        'display-md': ['clamp(1.625rem, 2.6vw, 2.25rem)', { lineHeight: '1.14', letterSpacing: '-0.01em' }],
        'display-sm': ['1.5rem', { lineHeight: '1.25', letterSpacing: '-0.005em' }],
        lede: ['1.125rem', { lineHeight: '1.65' }],
        'lede-lg': ['1.25rem', { lineHeight: '1.6' }],
        eyebrow: ['0.6875rem', { lineHeight: '1', letterSpacing: '0.18em' }],
        // Legacy aliases.
        h1: ['clamp(2.5rem, 5vw, 4.25rem)', { lineHeight: '1.02', letterSpacing: '-0.015em' }],
        h2: ['clamp(2rem, 3.6vw, 3rem)', { lineHeight: '1.08', letterSpacing: '-0.01em' }],
      },
      maxWidth: {
        container: '75rem', // 1200px
        wide: '84rem', // 1344px
        prose: '42rem',
        '8xl': '88rem',
        '9xl': '96rem',
      },
      boxShadow: {
        card: '0 1px 2px rgba(11,11,12,0.04), 0 12px 32px -16px rgba(11,11,12,0.14)',
        lift: '0 24px 56px -24px rgba(11,11,12,0.28), 0 2px 6px -2px rgba(11,11,12,0.08)',
        pop: '0 32px 80px -32px rgba(11,11,12,0.35)',
        glass: '0 12px 40px -12px rgba(0,0,0,0.25)',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.45' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s cubic-bezier(0.22, 1, 0.36, 1) both',
        'fade-up': 'fadeUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) both',
        marquee: 'marquee 40s linear infinite',
        'pulse-soft': 'pulseSoft 2.4s ease-in-out infinite',
        'slide-up': 'fadeUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) both',
      },
    },
  },
  plugins: [],
};
