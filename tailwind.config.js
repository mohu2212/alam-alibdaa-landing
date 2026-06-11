/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './app.js'],
  theme: {
    extend: {
      colors: {
        // الهوية مستخلصة من الشعار: أزرق مؤسسي + أخضر ليموني
        brand: {
          blue: '#1A4B9C',
          'blue-dark': '#123567',
          'blue-light': '#2E66C4',
          lime: '#A9CE2E',
          'lime-dark': '#8FB320',
          'lime-light': '#C2E04A',
        },
        whatsapp: '#25D366',
        'whatsapp-dark': '#1DA851',
      },
      fontFamily: {
        sans: ['Tajawal', 'system-ui', 'Segoe UI', 'Tahoma', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        card: '0 4px 20px -4px rgba(18, 53, 103, 0.12)',
        'card-hover': '0 12px 32px -6px rgba(18, 53, 103, 0.22)',
        cta: '0 8px 24px -6px rgba(143, 179, 32, 0.45)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.95)', opacity: '0.7' },
          '70%': { transform: 'scale(1.3)', opacity: '0' },
          '100%': { transform: 'scale(1.3)', opacity: '0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out both',
        'pulse-ring': 'pulse-ring 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};
