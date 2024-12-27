/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./main.js", "./style.css", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        inconsolata: ['Inconsolata', 'monospace' , 'serif'],
      },
      fontWeight: {
        400: '400',
        500: '500',
        700: '700',
        800: '800',
      },
      colors: {
        neutral: {
          0: 'hsl(0, 0%, 100%)',
          300: 'hsl(252, 6%, 83%)',
          500: 'hsl(245, 15%, 58%)',
          700: 'hsl(245, 19%, 35%)',
          900: 'hsl(248, 70%, 10%)',
        },
        orange: {
          500: 'hsl(7, 88%, 67%)',
          700: 'hsl(7, 71%, 60%)',
        },
        gradientText: {
          from: 'hsl(7, 86%, 67%)',
          to: 'hsl(0, 0%, 100%)',
        },
      
      },
    },
  },
  plugins: [],
}