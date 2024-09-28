<template>
  <div>
    <router-link to="/" className="ml-10 text-orange-500">
      返回
    </router-link>
    <img className="block w-9/12 mx-auto mt-10" :src="photo.src" />
  </div>
</template>

<script setup>
import { photos } from '~/data';
import { useRoute } from 'vue-router'
const route = useRoute()
const photo = photos.find((p) => p.id === route.params.id);

</script>

<style scoped></style>
