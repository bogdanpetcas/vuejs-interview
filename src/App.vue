<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink :to="{ name: 'dynamic', params: { id: '2'} }">Dynamic route</RouterLink>
    <RouterLink :to="{ name: 'nested' }">Nested route</RouterLink>
  </nav>
  <section class="vue-app">
    <RouterView :key="$route.path" />
  </section>
</template>
