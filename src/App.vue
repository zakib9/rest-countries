<script setup>
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
const darkMode = ref(false)
function triggerDarkMode(){
  darkMode.value = !darkMode.value
  
}


</script>

<template>
  <div :class="[' flex justify-between py-10 px-8 gap-4 font-Nunito fixed w-full top-0  shadow-md',{' bg-darkModeElements text-darkModeText': darkMode,
      'bg-white': !darkMode }]">
    <h4 class=" font-extrabold text-lg">Where in the world?</h4>
    <div @click="triggerDarkMode" class=" cursor-pointer flex gap-2 items-center justify-center">
      <i v-if="!darkMode" class="fa-regular fa-moon fa-lg"></i>
      <i v-else class="fa-solid fa-moon fa-lg"></i>
      <p class=" text-base font-semibold">Dark Mode</p>
    </div>
  </div>
  <div :class=" ['w-full h-full pt-36 ',{' bg-darkModeBackground text-darkModeText': darkMode,
      ' bg-lightModeBackground': !darkMode }]">
    <router-view :darkMode="darkMode" ></router-view>
  </div>
</template>

