/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Light mode colors
        'light-bg': 'var(--color-light-bg)',
        'light-sidebar': 'var(--color-light-sidebar)',
        'light-border': 'var(--color-light-border)',
        'light-text': 'var(--color-light-text)',
        'light-textMuted': 'var(--color-light-textMuted)',
        'light-accent': 'var(--color-light-accent)',
        'light-hover': 'var(--color-light-hover)',
        'light-card': 'var(--color-light-card)',
        'light-placeholder': 'var(--color-light-placeholder)',
        
        // Dark mode colors
        'dark-bg': 'var(--color-dark-bg)',
        'dark-sidebar': 'var(--color-dark-sidebar)',
        'dark-border': 'var(--color-dark-border)',
        'dark-text': 'var(--color-dark-text)',
        'dark-textMuted': 'var(--color-dark-textMuted)',
        'dark-accent': 'var(--color-dark-accent)',
        'dark-hover': 'var(--color-dark-hover)',
        'dark-card': 'var(--color-dark-card)',
        'dark-placeholder': 'var(--color-dark-placeholder)'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulse: {
          '50%': { opacity: '.5' },
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-out forwards',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    }
  },
  plugins: [],
};