/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
  "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      screens:{
        'sm': '410px',
        'md': '950px',
        'lg': '1024px',
        'xl': '1280px',
      },
      
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

