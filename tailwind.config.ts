import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx,mdx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.mdx',
  ],
  darkMode: 'class',
  theme: {
    // Strip default radii — the design is sharp-edged.
    borderRadius: {
      none: '0',
      DEFAULT: '0',
    },
    extend: {
      colors: {
        bg: 'var(--bg)',
        'bg-warm': 'var(--bg-warm)',
        'bg-deep': 'var(--bg-deep)',
        ink: 'var(--ink)',
        'ink-soft': 'var(--ink-soft)',
        muted: 'var(--muted)',
        rule: 'var(--rule)',
        sun: 'var(--sun)',
        'sun-soft': 'var(--sun-soft)',
        hot: 'var(--hot)',
        leaf: 'var(--leaf)',
        cream: 'var(--cream)',
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        display: '-0.05em',
        h2: '-0.045em',
        h3: '-0.04em',
        h4: '-0.025em',
        meta: '0.16em',
      },
      transitionTimingFunction: {
        base: 'cubic-bezier(0.2, 0.6, 0.2, 1)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        revealUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.3' },
        },
      },
      animation: {
        marquee: 'marquee 60s linear infinite',
        'reveal-up': 'revealUp 700ms cubic-bezier(0.2,0.6,0.2,1) both',
        pulse: 'pulse 1.4s infinite',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
    },
  },
  plugins: [],
};

export default config;
