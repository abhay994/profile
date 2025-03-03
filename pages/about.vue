


<script setup>
import Footer from "~/layouts/Footer.vue";
import Header from "~/layouts/Header.vue";

useHead({
  title: "About Wize - Creative Personal Portfolio Nuxt js Template",
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


<template>
  <div>
    <CommonScrollTop />
    <Header />
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <main class="main-bg o-hidden">
           <AboutBreadcrumb />
           <AboutArea />
           <AboutResume />
           <AboutServiceArea />
           <HomeCtaArea />
          <Footer />
        </main>
      </div>
    </div>
  </div>
</template>

