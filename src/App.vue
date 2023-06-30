<script setup lang="ts">
import Navbar from './components/Navbar.vue';
import Home from './page/Home.vue';
import Carousel from './components/Carousel.vue'
import './style.css'
</script>

<template>
  <div class="container min-h-[100vh] bg-background1">
    <Navbar/>
    <main class="md:p-10">
      <Home/>
    </main>
  </div>
  

</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
