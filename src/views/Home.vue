<script setup lang="ts">
import { useHotelStore } from '@/stores/hotel';
import Hotel from '@/components/Hotel.vue';
import { ref, type Ref } from 'vue';
import { type IHotel } from '@/models/Hotel';

const hotelStore = useHotelStore();
</script>

<template>
  <h1>Hotels</h1>
  <ul class="hotel-list">
    <li v-for="hotel in hotelStore.hotels" :key="hotel.id">{{ hotel.name }}</li>
    <!-- <Hotel :hotel="" /> -->
  </ul>
</template>

<style scoped>
.hotel-list {
  display: flex;
  flex-direction: column;
  gap: .25rem;
  margin-top: 1rem;
  list-style: none;
  padding: 0;

  li {
    padding: .5rem;
    cursor: pointer;
  }
}

h1 {
  font-weight: 500;
  font-size: 2.6rem;
}
</style>