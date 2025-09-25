<script setup lang="ts">
import { useHotelStore } from '@/stores/hotel';
import Hotel from '@/components/Hotel.vue';

const hotelStore = useHotelStore();
</script>

<template>
  <h1>Hotels</h1>
  <div class="hotel-list">
    <a v-for="hotel in hotelStore.hotels" :key="hotel.id" href="javascript:void(0)">{{ hotel.name }} (see more)</a>
    <!-- <Hotel :hotel="" /> -->
  </div>
</template>

<style scoped>
.hotel-list {
  display: flex;
  flex-direction: column;
  gap: .25rem;
  margin-top: 1rem;

  a {
    padding: .5rem;
  }
}

h1 {
  font-weight: 500;
  font-size: 2.6rem;
}
</style>