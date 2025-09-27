<script setup lang="ts">
  import { useHotelStore } from '@/stores/hotel';

  const hotelStore = useHotelStore();

  const props = defineProps<{
    id: {
      type: string,
      required: true
    }
  }>();
</script>

<template>
  <h1>Dynamic route example</h1>
  <p>Id is {{ props.id }}</p>
  <p>Selected hotel is {{ hotelStore.hotels.find(hotel => hotel.id === Number(props.id))?.name ?? 'not found' }}</p>
</template>