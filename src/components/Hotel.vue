<script setup lang="ts">
defineProps<{
  hotel: any
}>()
</script>

<template>
  <div class="hotel-card">
    <h2>{{ hotel.name }}</h2>
    <p>{{ hotel.address }}</p>
    <form>
      <div>
        <!-- input for credit card number -->
        <!-- submit button -->
      </div>
    </form>
  </div>
</template>

<style scoped>
.hotel-card {
  padding: 1rem;
  background-color: #cccccc;
  cursor: pointer;
}
</style>