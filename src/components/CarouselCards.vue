<template>
<Swiper :effect="'cards'" :grabCursor="true" :modules="modules"
  :centeredSlides="true" :slidesPerView="'auto'" :pagination="true" class="mySwiper">
    <swiper-slide>Slide1</swiper-slide>
    <swiper-slide>Slide2</swiper-slide>
    <swiper-slide>Slide2</swiper-slide>
  </Swiper>
</template>

<script lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCards } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [EffectCards]
    };
  },
};
</script>

<style>

</style>