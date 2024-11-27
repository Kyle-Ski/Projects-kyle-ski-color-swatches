<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
/* Global wrapper for the app */
main {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  min-height: 100vh;
  background-color: #f9f9f9;
}

/* Responsive padding for larger screens */
@media (min-width: 1024px) {
  main {
    padding: 2rem;
  }
}
</style>
