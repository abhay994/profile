
<template>
  <div>
    <CommonScrollTop />
    <Header />
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <main class="main-bg o-hidden">
          <SingleBlogBreadcrumb />
          <SingleBlogArea />
          <!-- <ContactBreadcrumb />
          <ContactForm />  -->
          <HomeCtaArea />
          <Footer />
        </main>
      </div>
    </div>
  </div>
</template>
  <script lang="ts" setup>
  // const route = useRoute()
  // console.log(route.path);
  // const { data: page } = await useAsyncData(route.path, () => {
  //   return queryCollection('blog').path(route.path).first();
  // })

  import Footer from "~/layouts/Footer.vue";
import Header from "~/layouts/Header.vue";

useHead({
  title: "Abhay Rastogi",
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
  
  
  </script>