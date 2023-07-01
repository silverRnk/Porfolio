<script setup lang="ts">

</script>

<template>
    <nav class="flex flex-col items-center justify-center pt-5 bg-slate-100">
        <ul class="list-none flex gap-10 md:gap-20 pb-6 px-[50px] text-base font-bold md:text-lg rounded-md">
            <li class="text-shadow cursor-pointer">Home</li>
            <li class="text-shadow cursor-pointer">Portfolio</li>
            <li class="text-shadow cursor-pointer">Resume</li>
        </ul>
        <div class="min-h-[3px] min-w-[90%] sm:min-w-[500px] bg-[#C1C1C1] rounded-full drop-shadow"
        ></div>
    </nav>
</template>

<style>
.container{
    list-style-type: none;
    /* display: flex;
    gap: 10px;
    justify-content: center; */
}



.text-shadow:hover{
    text-shadow: 0 0 3px gray;
}


</style>