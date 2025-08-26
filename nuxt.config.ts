// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/content', "@nuxtjs/mdc", "@nuxtjs/tailwindcss", "nuxt-toc"],

  css: [


    "@/assets/fonts/remixicon.css",
    "@/assets/css/animate.min.css",
    "@/assets/css/spacing.css",
    "bootstrap/dist/css/bootstrap.min.css",
    // "vue-easy-lightbox/external-css/vue-easy-lightbox.css",
    "@/assets/css/style.css",
    "@/assets/css/responsive.css",
  ],

  compatibilityDate: "2024-10-01",
  ssr: false,
  content: {

    build: {
      markdown: {
        toc: {
          depth: 3, // include h3 headings
        },
        highlight: {
          // Theme used in all color schemes.
          theme: 'github-dark',
          
          // // OR
          // theme: {
          //   // Default theme (same as single string)
          //   default: 'github-light',
          //   // Theme used if `html.dark`
          //   dark: 'github-dark',
          //   // Theme used if `html.sepia`
          //   sepia: 'monokai'
          // }
        }
      }
    }
  }
  
  
})