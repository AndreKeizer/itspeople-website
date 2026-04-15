/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'its-green': '#78BE20',
        'its-green-dark': '#4A7729',
        'its-green-mid': '#5A8A1A',
        'its-lime': '#8DC63F',
        'its-charcoal': '#3E3E35',
        'its-dark': '#1A1E1A',
        'its-deep': '#222622',
        'its-gray-light': '#C1C6C8',
        'its-gray-mid': '#707372',
        'its-warm': '#f4f5f0',
        'its-offwhite': '#fafafa',
        'its-white': '#ffffff',
      },
      fontFamily: {
        sans: ['Montserrat', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Montserrat', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}