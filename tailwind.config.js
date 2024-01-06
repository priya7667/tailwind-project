//How to install tailwind in the existing vite project
//Step1-npm install -D tailwindcss postcss autoprefixer
//Step2-npx tailwindcss init -p


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

