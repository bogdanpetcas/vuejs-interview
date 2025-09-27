<script setup lang="ts">
import { type IHotel } from '@/models/Hotel';

defineProps<{
  hotel: IHotel
}>()
</script>

<template>
  <div class="hotel-card">
    <img :src="hotel.imgUrl" :alt="hotel.name" />
    <div>
      <h2>{{ hotel.name }}</h2>
      <p>{{ hotel.address }}</p>
      <form>
        <div>
          <!-- input for credit card number -->
          <!-- submit button -->
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.hotel-card {
  padding: 1rem;
  background-color: var(--color-background-mute);
  display: flex;
  gap: 1rem;

  img {
    width: 250px;
    height: 250px;
    object-fit: cover;
  }
}
</style>