/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      //   screens: {
      //   'xsm':'414',
      //   'sm': '640px',
      //   // => @media (min-width: 640px) { ... }
      //   'md': '768px',
      //   // => @media (min-width: 768px) { ... }
      //   'lg': '1024px',
      //   // => @media (min-width: 1024px) { ... }
      //   'xl': '1280px',
      //   // => @media (min-width: 1280px) { ... }
      //   '2xl': '1536px',
      //   // => @media (min-width: 1536px) { ... }
      // },
      colors: {
        c1: '#eee8aa',
        'gray-dark': '#273444',
        gray: '#8492a6',
        'gray-light': '#d3dce6',
        'gray-100': '#939597',
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      spacing: {
        128: '32rem',
        144: '36rem',
      },
      borderRadius: {
        none: '0',
        sm: '.125rem',
        DEFAULT: '.25rem',
        lg: '.5rem',
        full: '9999px',
      },
      opacity: {},
      lineHeight: {
        'extra-loose': '2.5',
        12: '4rem',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}
