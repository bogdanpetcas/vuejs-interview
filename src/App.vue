<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <section class="vue-app">
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink :to="{name: 'dynamic', params: {id: '12', slug: 'dyn'}}">Dynamic 12</RouterLink>
    </nav>
    <RouterView :key="$route.path"/>
  </section>
</template>

<style scoped>
.vue-app {
  padding: 1rem;
}
.vue-app nav {
  padding: 1rem;
  background-color: gainsboro;

  a {
    font-weight: bold;
    padding: .25rem .5rem;
  }
}
</style>
