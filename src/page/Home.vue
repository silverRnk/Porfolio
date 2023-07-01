<script lang="ts">
import { ref} from "vue";
// Component Import
import SkillButton from "../components/SkillButton.vue";
import Carousel from "../components/Carousel.vue"
import CarouselCards from "../components/CarouselCards.vue";
import { faker } from '@faker-js/faker';
import { skillButtons } from "../data";

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
      skillButtons: skillButtons
    }
  },
  
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
        <SkillButton v-for="skill in skillButtons" :skill="skill.name" :color="`bg-[${skill.btnColor}]`" />
        <a class="h-[50px] flex items-start sm:items-end pb-1 text-xl underline cursor-pointer">See more...</a>
      </div>
    </div>
      
    </article>
  </div>
  <div class="Project  px-3 sm:px-5 ">
    <h2 class="mt-3 sm:mt-[1.25em] text-2xl sm:text-3xl font-[Lato]">Latest Project</h2>
    <div>
      <Carousel />
    </div>

  </div>
</template>

<style>
.article-text {
  font-family: Lato;
  letter-spacing: 0.25rem;
}

</style>