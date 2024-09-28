<template>
  <div class="PhotoListContainer">
    <component :is="components" />

    <router-view />
  </div>
</template>

<script setup>
import { useLayoutData } from '../composables/useLayout'
const { components } = useLayoutData()
</script>

<style scoped>

</style>
