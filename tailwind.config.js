/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,svelte}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["'Barlow'", "sans-serif"],
        body: ["'Barlow'", "sans-serif"],
      }
    },
  },
  plugins: [],
}
