<script lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from "vue";
// Component Import
import SkillButton from "../components/SkillButton.vue";
import Navbar from "../components/Navbar.vue";
import Carousel from "../components/Carousel.vue"
import CarouselCards from "../components/CarouselCards.vue";
import { faker } from '@faker-js/faker';


const lorem = ref(faker.lorem.paragraph());

export default {
  components: {
    SkillButton,
    Carousel,
    CarouselCards
  },
  data() {
    return {
      lorem: faker.lorem.paragraph(),
      isWindowScreen: screen.width > 600
    }
  },
  created() {
    document.addEventListener("resize", this.handleScreenSizeChange)
  },
  
  methods: {
    handleScreenSizeChange(e) {
      console.log(e)
      this.isWindowScreen = screen.width > 600
      console.log(this.isWindowScreen)
    }
  }
}

</script>

<template>
  <div class="flex h-fit flex-col sm:flex-row">
    <article class="sm:h-full flex-1 bg-gray-200 flex flex-col justify-center items-center">
      <img src="" class="h-[200px] w-[200px] sm:h-[300px] sm:w-[300px] mt-9 sm:mt-[3.25rem] rounded-[50%] bg-zinc-300 object-cover" />
      <span class="article-text w-[80%] sm:w-[400px] mt-[3em] text-xl text-center ">
        {{ lorem }}
      </span>
    </article>
    <article class="flex-1 flex flex-col items-center justify-center mb-4 sm:pl-8">
      <div class="button-container flex flex-col items-center sm:items-start justify-center sm:mr-[50px] lg:mr-[200px]"
      >
      <a
        class="flex items-center justify-center w-[175px] h-[60px] mt-7 bg-[#CB101C] p-5 rounded-[75px] font-bold text-[#ffffff] text-center text-xl tracking-wide
        hover:brightness-[85%] cursor-pointer">
        Hire Me</a>
      <div id="skill-list" class="max-w-[250px] sm:max-w-[400px] flex flex-wrap mt-10 content-start gap-4 ">
        <SkillButton skill="Javascript" color="bg-[#9A5454]" />
        <SkillButton skill="PHP" color="bg-[#B5BC5E]" />
        <SkillButton skill="CSS" color="bg-[#8C4F4F]" />
        <SkillButton skill="HTML" color="bg-[#8C4F4F]" />
        <SkillButton skill="Python" color="bg-[#8C4F4F]" />
        <a class="h-[50px] flex items-start sm:items-end pb-1 text-xl underline cursor-pointer">See more...</a>
      </div>
    </div>
      
    </article>
  </div>
  <div class="Project  px-3 sm:px-5 ">
    <h2 class="sm:mt-[1.25em] text-2xl sm:text-3xl font-[Lato]">Latest Project</h2>
    <div v-if="isWindowScreen">
      <Carousel />
    </div>
    <div v-else>
      <CarouselCards />
    </div>
  </div>
</template>

<style>
.article-text {
  font-family: Lato;
  letter-spacing: 0.25rem;
}

</style>