<script setup>
import axios from 'axios';
import { ref } from 'vue';
import countriesData from '../data.json'
import CardView from '@/components/CardView.vue';
import { useRouter } from 'vue-router';

const searchQuery = ref("")
const filteredList = ref([])
const search = ref(null)
const showFilterDropdown = ref(false)
const filterByRegion = ref('Filter by Region')
const router = useRouter()

  function  getSearchResults(){
    
  if (searchQuery.value != '' && filterByRegion.value == 'Filter by Region') {
    search.value = true
    filteredList.value = countriesData.filter((value) => {
      return  value.name.toLocaleLowerCase().match(searchQuery.value)
    })
  }else if (searchQuery.value != '' && filterByRegion.value != 'Filter by Region') {
    search.value = true
    filteredList.value = filteredList.value.filter((value) => {
      return  value.name.toLocaleLowerCase().match(searchQuery.value)
    })
  }else 
  search.value = false
  
}
function FilterByRegion(){
  
  showFilterDropdown.value = !showFilterDropdown.value
  if (filterByRegion.value != 'Filter by Region') {
    search.value = true
    filteredList.value = countriesData.filter((value) => {
      return  value.region.match(filterByRegion.value)
    })
  }else if (searchQuery.value != '' && filterByRegion.value != 'Filter by Region') {
    search.value = true
    filteredList.value = filteredList.value.filter((value) => {
      return  value.name.match(filterByRegion.value)
    })
  }else
  search.value = false 
}
   
   function onCardDetail(card){
    router.push({
    name: "cardDetail",
    query: { card: JSON.stringify(card) }
    
  });
   }
</script>

<template >
 <div class=" w-full h-screen bg-lightModeBackground">

  <div class=" max-w-full px-8 py-6 flex gap-6 rounded-md shadow-lg mt-36 mx-8 bg-white items-center overflow-hidden">
    <i class="fa-solid fa-magnifying-glass fa-xl" style="color: #919191;"></i>
    <input 
    type="text"
     v-model="searchQuery" 
     @input="getSearchResults" 
    placeholder="Search for a country..." 
    class=" placeholder:text-lg">
  </div>
  <div @click="showFilterDropdown = !showFilterDropdown" class=" w-1/2 px-8 py-6 flex justify-between gap-2 rounded-md shadow-lg mt-16 mx-8 bg-white items-center cursor-pointer">
    <p class=" text-lg">{{filterByRegion}}</p>
    <i class="fa-solid fa-chevron-down"></i>
  </div>
  <div v-if="showFilterDropdown"   class=" absolute w-1/2  rounded-md shadow-lg  mx-8 mt-1 bg-white items-start cursor-pointer">
    <ul class=" text-lg py-2" @click="FilterByRegion">
      <li class=" px-8 py-2 hover:bg-lightModeInput hover:bg-opacity-15" @click="filterByRegion = 'Filter by Region'">All</li>
      <li class=" px-8 py-2 hover:bg-lightModeInput hover:bg-opacity-15" @click="filterByRegion = 'Africa'">Africa</li>
      <li class=" px-8 py-2 hover:bg-lightModeInput hover:bg-opacity-15" @click="filterByRegion = 'America'">America</li>
      <li class=" px-8 py-2 hover:bg-lightModeInput hover:bg-opacity-15" @click="filterByRegion = 'Asia'">Asia</li>
      <li class=" px-8 py-2 hover:bg-lightModeInput hover:bg-opacity-15" @click="filterByRegion = 'Europe'">Europe</li>
      <li class=" px-8 py-2 hover:bg-lightModeInput hover:bg-opacity-15" @click="filterByRegion = 'Oceania'">Oceania</li>
    </ul>
   
    
  </div>
  <div v-if="search">
    <div v-for="country in filteredList" :key="country.name" >
      <CardView :country="country" @cardDetail="onCardDetail"/>
    </div>
  </div>
  <div v-else>
    <div v-for="country in countriesData" :key="country.name" >
      <CardView :country="country" @cardDetail="onCardDetail"/>
    </div>
  </div>
 </div>
 
</template>
