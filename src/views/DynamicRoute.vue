<script setup lang="ts">
  import { onMounted } from 'vue';
  import { RouterLink, RouterView } from 'vue-router'
  import { useHotelStore } from '@/stores/hotel';

  const hotelStore = useHotelStore();

  const props = defineProps<{
    id: {
      type: string,
      required: true
    }
  }>();

  onMounted(() => {
    console.log(`DynamicRoute mounted with props: id = ${props.id}`)
  })
</script>

<template>
  <h1>Dynamic route example</h1>
  <p>Id is {{ props.id }}</p>
  <p>Selected hotel is {{ hotelStore.hotels.find(hotel => hotel.id === Number(props.id)).name }}</p>
</template>