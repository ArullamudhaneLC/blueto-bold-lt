/** @type {import('tailwindcss').Config} */
// Palette mirrors the FlipRoles app (tryout/app/src/index.css) so site and product never drift.
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#1C1917',
          soft: '#57534E',
          mute: '#78716C', // small text on light backgrounds (meets 4.5:1)
          faint: '#A8A29E', // dark backgrounds only
        },
        paper: '#FBF7F1',
        sand: '#F4EADD',
        line: '#E7E5E4',
        // Theme-driven (see src/index.css → [data-theme]). Primary colour: buttons, big sections.
        brand: Object.fromEntries(
          [50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((n) => [
            n,
            `rgb(var(--brand-${n}) / <alpha-value>)`,
          ]),
        ),
        // Theme-driven highlight colour: underlines, handwritten notes, key words.
        accent: {
          DEFAULT: 'rgb(var(--accent) / <alpha-value>)',
          soft: 'rgb(var(--accent-soft) / <alpha-value>)',
        },
        // Fixed FlipRoles terracotta — logo and role tiles never change with the theme.
        clay: {
          100: '#FAE8E1',
          600: '#B4491F',
          700: '#963C1C',
        },
        moss: {
          100: '#E4EFDD',
          600: '#4E7A41',
          800: '#32502B',
        },
        butter: {
          100: '#FBF0CC',
          700: '#8A6410',
        },
        sky: {
          100: '#DDEBF3',
          700: '#2F5E7A',
        },
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        hand: ['Caveat', 'cursive'],
      },
      maxWidth: {
        page: '76rem',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(var(--r, 0deg))' },
          '50%': { transform: 'translateY(-6px) rotate(var(--r, 0deg))' },
        },
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
        float: 'float 5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
