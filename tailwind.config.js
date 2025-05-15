/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        backgroundColor : 'rgba(var(--background-primary-color))',
        secondaryBackgroundColor : 'rgba(var(--background-secondary-color))',
        borderColor : 'rgba(var(--border-color))',
        textColor : 'rgba(var(--text-color))',
        textSecondaryColor : 'rgba(var(--text-secondary-color))',
        buttonColor : 'rgba(var(--button-primary-color))'
      }
    },
  },
  plugins: [],
}