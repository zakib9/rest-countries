<script setup>
import { RouterLink, RouterView } from 'vue-router'



</script>

<template>
  <div class=" flex justify-between py-10 px-8 gap-4 font-Nunito fixed w-full top-0 bg-white shadow-md">
    <h4 class=" font-extrabold text-lg">Where in the world?</h4>
    <div class="flex gap-2 items-center justify-center">
      <i class="fa-regular fa-moon fa-lg"></i>
      <p class=" text-base font-semibold">Dark Mode</p>
    </div>
  </div>
  <RouterView />
</template>


