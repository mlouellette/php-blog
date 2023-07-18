/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./resources/views/layouts/app.blade.php",
    "./resources/views/auth/register.blade.php",
    "./resources/views/posts/index.blade.php",
    "./resources/js/app.js",
    "./resources/css/app.css"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}