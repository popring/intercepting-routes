<template>
  <main className="flex flex-row flex-wrap">
    <router-link v-for="item of photos" :key="item.id" :to="`/photo/${item.id}`">
      <img width="200" :src="item.src" className="m-1" />
    </router-link>
  </main>
</template>

<script setup>
import { photos } from '~/data.js'
</script>

