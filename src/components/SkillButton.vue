<script setup lang="ts">

defineProps<{skill:string, color:string}>()

</script>

<template>

<button :class="color" class="button-font items-center justify-center h-[50px] rounded-xl px-[1em] hover:brightness-[0.85]">
    {{ skill }}
</button>

</template>

<style>
.button-unset{
    all:unset
}

.button-font{
    font-family: Lato;
    font-size: 1rem;
    letter-spacing: 0.15rem;
}
</style>