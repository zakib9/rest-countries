<template>
    <div  class="  max-w-full max-h-full flex flex-col gap-6 p-8">
        <RouterLink to="/">
            <div  :class=" ['mb-10 p-2 px-6 flex gap-4 items-center justify-center rounded shadow max-w-min',{' bg-darkModeElements text-darkModeText': darkMode,
      'bg-white': !darkMode }]">
            <i class="fa-solid fa-arrow-left"></i>
            <p>Back</p>
        </div>
        </RouterLink>
        
        <img :src="card.flags.png" class=" min-w-full" alt="">
        <div class=" flex flex-col pt-10 gap-14 text-lg">
          <h4 class=" text-4xl font-bold pb-6"> {{card.name}}</h4>
          <div class="flex flex-col gap-4">
              <p><span class=" font-semibold">Native Name:</span> {{card.nativeName}}</p>
              <p><span class=" font-semibold">Population:</span> {{(card.population).toLocaleString()}}</p>
              <p><span class=" font-semibold">Region:</span> {{card.region}}</p>
              <p><span class=" font-semibold">Subregion:</span> {{card.subregion}}</p>
          </div>
          
          <div class="flex flex-col gap-4">
              <p><span class=" font-semibold">Capital:</span> {{card.capital}}</p>
              <p><span class=" font-semibold">Top Level Domain:</span> {{card.topLevelDomain[0]}}</p>
              <p><span class=" font-semibold">Currencies:</span> {{card.currencies[0].name}}</p>
              <div class="flex gap-1">
                <span class=" font-semibold">Languages:</span>
                  <div v-for="lang in card.languages" :key="lang.name">
                    <p>{{ lang.name }}, </p>
                  </div>
              </div>
          </div>
          <div class="flex flex-col gap-4">
              <span class=" font-semibold text-2xl">Border Countries:</span>
              <div class="flex gap-4 flex-wrap" >
              
                  <div :class="['flex gap-4 shadow-md rounded-md px-8 p-4 max-w-max',{' bg-darkModeElements text-darkModeText': darkMode,
      'bg-white': !darkMode }]" v-for="border in borders" :key="border">
                    <p>{{ border }} </p>
                  </div>
              </div>
          </div>
        </div>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import countriesData from '../data.json'
import { ref } from 'vue';

 defineProps({
  darkMode: {
    type: Boolean,
    default: false,
  },
});


const route = useRoute()
 // Parse the card from the query parameter
const card = JSON.parse(route.query.card);
const borders = ref([])

function getborders(){
    if (card.borders) {
        card.borders.forEach(element => {
        countriesData.forEach(value => {
            if (value.alpha3Code == element) {
                borders.value.push(
                    value.name
                )
            }
        })
        
    });
    }
   
    
}
getborders()

function goHome(){

}

</script>
