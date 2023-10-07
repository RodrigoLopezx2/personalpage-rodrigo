/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Mono', 'mono'],
      },
    },
    colors: {
      'Azul_1': '#04364A',
      'Azul_2': '#176B87',
      'Azul_3': '#64CCC5',
      'Azul_4': '#DAFFFB',
      'Blanco': '#F5F5F5',
    }
  },
  plugins: [],
}

