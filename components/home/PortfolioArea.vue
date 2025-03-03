


<script setup>
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

// import { ref } from "vue";
// // import ImagePopup from "~/components/common/ImagePopup.vue";
// import "vue-easy-lightbox/external-css/vue-easy-lightbox.css";

// const image_popup = ref(null);

// function handleImagePopup(index) {
//   image_popup.value.showImg(index);
// }

const props = defineProps({

  handleImagePopup: {
    type: Function
  },
  portfolio_data: {
    type: Array
  }
})

</script>


<template>
  <div class="projects-area" id="portfolio">
    <div class="custom-icon">
      <img src="~/assets/images/custom/work-scribble.svg" alt="custom" />
    </div>
    <div class="container-fluid">
      <div class="row g-4 portfolio-grid">
       

        <div 
        v-for="(item , i) in portfolio_data" :key="i"        
        :class="`col-md-6 col-xl-${item.col} portfolio-item category-2`">
          <a 
          style="cursor: pointer"
          @click.prevent="handleImagePopup(i)"
          >
            <div class="portfolio-box">
              <!-- Image -->
              <img :src="item.img" alt="" data-rjs="2" />
              <!-- Category -->
              <span class="portfolio-category">{{ item.category }}</span>
              <!-- Caption -->
              <div class="portfolio-caption">
                <!-- <NuxtLink to="/single-project"> -->
                  <h1>{{ item.title }}</h1>
                   <!-- <h1>Car </h1> -->
                <!-- </NuxtLink> -->
              </div>
            </div>
          </a>
        </div>
 
      </div>
    </div>

     <!-- image popup start -->
     <!-- <ImagePopup
      ref="image_popup"
      :images="portfolio_data.map((item) => item.img)"
    /> -->
    <!-- image popup end -->


  </div>
</template>
 