<script setup lang="ts">
import { ref } from 'vue';
import { useHotelStore } from '@/stores/hotel';
import Hotel from '@/components/Hotel.vue';

const hotels = ref([
  { id: 1, name: "Hotel 1", address: "Park Avenue 34" },
  { id: 2, name: "Hotel 2", address: "Rounded square 5" },
  { id: 3, name: "Hotel 3", address: "Independence day 99" }
]);
const hotelStore = useHotelStore();
console.log(hotelStore.selectedHotel);
</script>

<template>
  <h1 class="green">Vue.js app</h1>
  <h3>Uses pinia, has a store called "hotel" and 1 prop: selectedHotel.</h3>
  <p>"hotel" store selectedHotel.name: {{ hotelStore.selectedHotel.name }}</p>
  <p>"hotel" store selectedHotel.address: {{ hotelStore.selectedHotel.address }}</p>
  <div class="hotel-list">
    <a v-for="hotel in hotels" :key="hotel.id" href="javascript:void(0)" >See details for {{hotel.name}}</a>
    <!-- <Hotel :hotel="" /> -->
  </div>
</template>

<style scoped>
.hotel-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
}

h1 {
  font-weight: 500;
  font-size: 2.6rem;
}

h3 {
  font-size: 1.2rem;
}
</style>