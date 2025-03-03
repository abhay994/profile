

<script setup>
 
import CountUp from 'vue-countup-v3'

const counter_data = [
  { id: 1, symble: "plus", count: 8, title: "Years Of Experience" },
  { id: 2, symble: "k-plus", count: 10, title: "Complete Projects" },
  { id: 3, symble: "plus", count: 20, title: "Client Satisfactions" },
  { id: 4, symble: "plus", count: 6, title: "Cup of coffe" },
];

</script>


<template>
  <ClientOnly>
  <section  class="single-page-hero-area">
    <div class="container">

      <div class="row align-items-center">
        <div class="col-lg-12">
          <h2>About me</h2>
          <p>
            With over 12 years of dedicated focus on designing products that
            achieve business goals, I have established myself as a trusted
            professional in the industry.
          </p>
        </div>
      </div>
      <div class="row"> 
        <div v-for="(item, i) in counter_data" :key="i" class="col-6 col-lg-3">
          <div class="hero-counter-area wow fadeInUp delay-0-4s">
            <div class="counter-item counter-text-wrap">
              <count-up
                :end-val="item.count"
                :class="`d-inline count-text ${item.symble}`"
              ></count-up> 
              <!-- {{ item.symble }} -->
              <span class="counter-title">{{ item.title }}</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</ClientOnly>
</template>

 