import plugin from 'tailwindcss';

/** @type {import('tailwindcss').Config} */
export default {
   content: [
      "./index.html",
      "./pages/*.html",
      "./src/*.html",
      "./src/html/components/*.html",
      "./src/html/pages/*.html"
   ],
   theme: {
      extend: {
         fontFamily: {
            proxima: ['ProximaNova', 'sans-serif'],
         },

         container: {
            center: true,
            padding: '1rem',
         },
         colors: {
            'red': '#FF0000',
            'black': '#333333',
            'white': '#FFFFFF',
            'description': '#888888',
            'tags': '#AAA9A9',
            'background': '#C4C4C4',
            'border': '#E5E5E5',
            'light-gray-1': '#F8F8F8',
            'light-gray-2': '#FCFCFC',
            'yellow': '#FFE600',
            'rate': '#FCAF17',
            'violet': '#8F00FF',
            'dark-blue': '#0047FF',
            'light-blue': '#00D1FF',
            'light-green': '#14FF00',
            'green': '#02B54E'
         },
         screens: {
            'sm': '524.98px',
            'md': '767.98px',
            'lg': '1199.98px',
            'xl': '1699.98px',
         },
      },


   },
   plugins: [],
}

