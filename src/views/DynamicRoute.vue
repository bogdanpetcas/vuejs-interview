<script setup lang="ts">
  import { onMounted } from 'vue';
  import { RouterLink, RouterView } from 'vue-router'
  import { useHotelStore } from '@/stores/hotel';

  const hotelStore = useHotelStore();

  const props = defineProps<{
    id: {
      type: string,
      required: true
    },
    slug: string
  }>();

  onMounted(() => {
    console.log(`DynamicRoute mounted with props: ${props.id}, ${props.slug}`)
  })
</script>

<template>
  <h1>Vue app - Dynamic route page</h1>
  <p>Id is {{ props.id }}</p>
  <p>Selected hotel is {{ hotelStore.selectedHotel.name }}</p>
  <RouterLink :to="{name: 'nested.route'}">Go to nested route</RouterLink>
  <RouterView />
</template>