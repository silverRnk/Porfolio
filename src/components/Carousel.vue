<template>
  <Swiper :effect="'coverflow'" :grabCursor="true" :modules="modules" :coverflowEffect="{
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  }" :centeredSlides="true" :slidesPerView="'auto'" :pagination="true" class="mySwiper">
    <swiper-slide>Slide1</swiper-slide>
    <swiper-slide>Slide2</swiper-slide>
    <swiper-slide>Slide2</swiper-slide>
  </Swiper>
</template>

<script lang="js">
import { ref } from "vue"
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination, EffectCards } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [EffectCoverflow, Pagination]
    };
  },
};
</script>



<style>
.swiper {
  width: 100%;
  padding-top: 10px;
  padding-bottom: 50px;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 275px;
  height: 275px;
}

@media only screen and (min-width: 640px) {
  .swiper-slide {
    width: 500px;
    height: 300px;
  }
}

.swiper-slide:nth-child(1n) {
  background-color: rgb(206, 17, 17);
}

.swiper-slide:nth-child(2n) {
  background-color: rgb(0, 140, 255);
}

.swiper-slide:nth-child(3n) {
  background-color: rgb(10, 184, 111);
}

.swiper-slide:nth-child(4n) {
  background-color: rgb(211, 122, 7);
}

.swiper-slide:nth-child(5n) {
  background-color: rgb(118, 163, 12);
}

.swiper-slide:nth-child(6n) {
  background-color: rgb(180, 10, 47);
}

.swiper-slide:nth-child(7n) {
  background-color: rgb(35, 99, 19);
}

.swiper-slide:nth-child(8n) {
  background-color: rgb(0, 68, 255);
}

.swiper-slide:nth-child(9n) {
  background-color: rgb(218, 12, 218);
}

.swiper-slide:nth-child(10n) {
  background-color: rgb(54, 94, 77);
}
</style>