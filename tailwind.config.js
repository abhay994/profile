import ProseH1 from '@nuxtjs/mdc/runtime/components/prose/ProseH1.vue';

/** @type {import('tailwindcss').Config} */
export default {
  content: [],
   theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: '#fff',
            a: {
              color: '#fff',
              // '&:hover': {
              //   color: '#2c5282',
              // },
            },
            Headers:{
              color:'#fff'
            }
          },
        },
      },
    },
  },

  plugins: [require('@tailwindcss/typography')],
}

