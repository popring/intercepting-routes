<template>
  <div class="layout">
    <router-view />
  </div>
</template>

<script setup>
import { useLayout } from './composables/useLayout'

useLayout()
</script>
