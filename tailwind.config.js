/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // Cette ligne dit : "Regarde TOUT dans src"
  ],
  theme: {
    extend: {
      fontFamily: {
        // On place Inter en premier, puis les polices de secours (fallbacks)
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        en_tete: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],

      },
    },
  },
  plugins: [],
};
