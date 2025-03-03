

<script setup>

const isSticky = ref(false);

const handleSticky = () => {
  if (window.scrollY > 200) {
    isSticky.value = true;
  } else {
    isSticky.value = false;
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleSticky);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleSticky);
});

const scrollTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

 

</script>


<template>
  <!-- back to top start --> 
  <div :class="`progress-wrap cursor-pointer ${isSticky ? 'active-progress' : ''}`" @click="scrollTop">
    <i class="ri-arrow-up-double-line"></i>
    <svg class="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102"><path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"  ></path></svg>
  </div>


  <!-- back to top end -->
</template>
 