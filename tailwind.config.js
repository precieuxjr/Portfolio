/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Kanit', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        en_tete: ['Rokkitt', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        Maitree: ['Maitree', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },

      colors: {
        texte: '#dee7f1',
        arrière_plan: '#03070a',
        primaire: '#8cb5e3',
        secondaire: '#195293',
        accent: '#1a7ae7',
      },
      
    },
  },
  plugins: [],
};
