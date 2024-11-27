<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  min-height: 100vh;
  background-color: #f9f9f9;
}

@media (min-width: 1024px) {
  main {
    padding: 2rem;
  }
}
</style>
