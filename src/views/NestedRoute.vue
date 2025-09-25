<script setup lang="ts">

</script>

<template>
  <h1>Nested route example</h1>
  <RouterLink :to="{name: 'nested.inside'}">Go to nested route</RouterLink>
  <RouterView />
</template>