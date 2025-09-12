<script setup lang="ts">
import { computed, ref } from 'vue';
import { useHotelStore } from '@/stores/hotel';
import Hotel from '@/components/Hotel.vue';

type HotelModel = {id: number, name: string, address:string};

const hotelStore = useHotelStore();

const hotels = computed<HotelModel[]>(() => {
  return hotelStore.hotels;
});

</script>

<template>
  <h1 class="green">Vue.js app</h1>
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