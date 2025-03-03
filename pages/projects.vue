



<script setup>
import Footer from "~/layouts/Footer.vue";
import Header from "~/layouts/Header.vue";

useHead({
  title: "Projects Wize - Creative Personal Portfolio Nuxt js Template",
});

import { gsap } from 'gsap';
const { $ScrollSmoother,$ScrollTrigger } = useNuxtApp();
gsap.registerPlugin($ScrollTrigger, $ScrollSmoother);

 
onMounted(async () => {
  const wow = await import("wow.js");
  new wow.default().init();
});

onMounted(() => {
  $ScrollSmoother.create({
    wrapper : '#smooth-wrapper',
    content : '#smooth-content',
    smooth: 2,
    effects: true   
  })
 
})

// import portfolio_img_1 from "~/assets/images/projects/work1.jpg";
// import portfolio_img_2 from "~/assets/images/projects/work2.jpg";
// import portfolio_img_3 from "~/assets/images/projects/work3.jpg";
// import portfolio_img_4 from "~/assets/images/projects/work4.jpg";
// import portfolio_img_5 from "~/assets/images/projects/work5.jpg";
 
// const portfolio_data = [
//   {
//     id: 1,
//     col: 6,
//     img: portfolio_img_1,
//     category: "Mockup",
//     title: "A Branch with Flowers",
//   },
//   {
//     id: 2,
//     col: 6,
//     img: portfolio_img_2,
//     category: "Video",
//     title: "Orange Rose Flower",
//   },
//   {
//     id: 3,
//     col: 4,
//     img: portfolio_img_3,
//     category: "Branding",
//     title: "Green Plant on a Desk",
//   },
//   {
//     id: 4,
//     col: 4,
//     img: portfolio_img_4,
//     category: "Game",
//     title: "Mobile Application Design",
//   }, 
//   {
//     id: 5,
//     col: 4,
//     img: portfolio_img_5,
//     category: "Game",
//     title: "Mobile Application Design",
//   } 
// ];

import portfolio_data from "~/data/portfolio_data";
import { ref } from "vue";
import ImagePopup from "~/components/common/ImagePopup.vue";
import "vue-easy-lightbox/external-css/vue-easy-lightbox.css";

const image_popup = ref(null);

function handleImagePopup(index) {
  image_popup.value.showImg(index); 
}
  

</script>


<template>
  <div>
    <CommonScrollTop />
    <Header />
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <main class="main-bg o-hidden">
          <ProjectsBreadcrumb />
          <!-- <HomePortfolioArea /> -->
          <HomePortfolioArea :handleImagePopup="handleImagePopup" :portfolio_data="portfolio_data"  /> 
          <HomeCtaArea />
          <Footer />
        </main>
      </div>
    </div>
    <ImagePopup
      ref="image_popup"
      :images="portfolio_data.map((item) => item.img)"
    />

  </div>
</template>

