<template>
  <Swiper :effect="'coverflow'" :grabCursor="true" :modules="modules" :coverflowEffect="{
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  }" :centeredSlides="true" :slidesPerView="'auto'" :pagination="true" class="mySwiper">
    <swiper-slide v-for="item in items">
      <img :src="item.imgURL"/>
      <span>{{ item.title }}</span>
    </swiper-slide>
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
import {slideItems} from '../data.ts'

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [EffectCoverflow, Pagination],
      items: slideItems
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 10px gray;
  background-color: rgb(245, 235, 235);
}

.swiper-slide img {
  height: 175px;
  width: 175px;
  object-fit: cover;box-shadow: 0 0 2px gray;
}

.swiper-slide span {
  margin-top: 10px;
  font-size: 1.5rem;
  font-weight: 500;
}

@media only screen and (min-width: 640px) {
  .swiper-slide {
    width: 600px;
    height: 400px;
  }

  .swiper-slide img {
    width: 400px;
    height: 250px;
  }

  .swiper-slide span {
    margin-top: 15px;
  font-size: 1.75rem;
  font-weight: 500;
  }
}

</style>