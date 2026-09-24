/** @type {import('tailwindcss').Config} */
// Colours come from CSS variables in src/index.css so whole themes can be switched in one place.
// The FlipRoles values mirror the app (tryout/app/src/index.css); Blueto values follow
// marketing/brand-guidelines.pdf.
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Neutrals are theme-driven too (src/index.css → [data-theme]).
        ink: {
          DEFAULT: 'rgb(var(--ink) / <alpha-value>)',
          soft: 'rgb(var(--ink-soft) / <alpha-value>)',
          mute: 'rgb(var(--ink-mute) / <alpha-value>)', // small text on light backgrounds (4.5:1+)
          faint: 'rgb(var(--ink-faint) / <alpha-value>)', // dark backgrounds only
        },
        paper: 'rgb(var(--paper) / <alpha-value>)',
        sand: 'rgb(var(--sand) / <alpha-value>)',
        line: 'rgb(var(--line) / <alpha-value>)',
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
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
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
        // Megaphone "shout": a quick punch forward, then rest.
        shout: {
          '0%, 55%, 100%': { transform: 'rotate(-10deg) scale(1)' },
          '62%': { transform: 'rotate(-4deg) scale(1.08)' },
          '70%': { transform: 'rotate(-12deg) scale(0.98)' },
          '78%': { transform: 'rotate(-7deg) scale(1.04)' },
        },
        // Sound waves ripple outward from the megaphone's mouth.
        wave: {
          '0%': { opacity: '0', transform: 'scale(0.6)' },
          '30%': { opacity: '1' },
          '100%': { opacity: '0', transform: 'scale(1.25)' },
        },
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
        float: 'float 5s ease-in-out infinite',
        shout: 'shout 2.8s ease-in-out infinite',
        wave: 'wave 2.8s ease-out infinite',
      },
    },
  },
  plugins: [],
};
