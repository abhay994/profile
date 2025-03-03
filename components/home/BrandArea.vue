



<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  const scrollers = document.querySelectorAll(".scroller");

  // If a user hasn't opted in for reduced motion, then we add the animation
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation(scrollers);
  }

  function addAnimation(scrollers) {
    scrollers.forEach((scroller) => {
      // add data-animated="true" to every `.scroller` on the page
      scroller.setAttribute("data-animated", true);

      // Make an array from the elements within `.scroller-inner`
      const scrollerInner = scroller.querySelector(".scroller__inner");
      const scrollerContent = Array.from(scrollerInner.children);

      // For each item in the array, clone it
      // add aria-hidden to it
      // add it into the `.scroller-inner`
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute("aria-hidden", true);
        scrollerInner.appendChild(duplicatedItem);
      });
    });
  }
});
</script>


<template>
  <div class="company-design-area">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <h2>Company I Worked With</h2>
          <div class="company-list">
            <div class="scroller" data-direction="left" data-speed="slow">
              <div class="scroller__inner">
                <img src="~/assets/images/client-logos/partner1.png" alt="" />
                <img src="~/assets/images/client-logos/partner2.png" alt="" />
                <img src="~/assets/images/client-logos/partner3.png" alt="" />
                <img src="~/assets/images/client-logos/partner4.png" alt="" />
                <img src="~/assets/images/client-logos/partner5.png" alt="" />
                <img src="~/assets/images/client-logos/partner1.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

 