

<script setup lang="ts">
const { data: posts } = await useAsyncData('blog', () => queryCollection('blog').order('date', 'DESC').all())
import Footer from "~/layouts/Footer.vue";
import Header from "~/layouts/Header.vue";

useHead({
  title: "Single Blog Wize - Creative Personal Portfolio Nuxt js Template",
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
    <h1>Blog</h1>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <NuxtLink :to="post.path">{{ post.title }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>

  