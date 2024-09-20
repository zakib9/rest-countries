<template>
    <div @click="showCardDetail(country)" :class=" ['rounded-md shadow-md max-w-full min-h-full overflow-hidden flex flex-col gap-4 m-8',{' bg-darkModeElements text-darkModeText': darkMode,
      'bg-white': !darkMode }]">
        <img :src="country.flags.png" class=" min-w-full " alt="">
        <div class=" flex flex-col p-5 text-lg">
          <h4 class=" text-2xl font-bold pb-6"> {{country.name}}</h4>
          <p><span class=" font-semibold">Population:</span> {{(country.population).toLocaleString()}}</p>
          <p><span class=" font-semibold">Region:</span> {{country.region}}</p>
          <p><span class=" font-semibold">Capital:</span> {{country.capital}}</p>
        </div>
    </div>
</template>

<script setup>
  defineProps({
  country: {
    type: Object,
    default: () => {},
  },
  darkMode: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits([
        "cardDetail",
      ])

function showCardDetail(card){
    emit("cardDetail", card)
}
</script>
