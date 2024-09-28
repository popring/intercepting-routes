<template>
  <div className="flex
        justify-center items-center fixed 
        bottom-0 bg-stone-950/[.9] w-full h-full" @click="handleClick">
    <img className="w-9/12 cursor-pointer" :src="photo.src" @click="handleClickImage" />
  </div>
</template>

<script setup>
import { photos } from '~/data';
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const photo = photos.find((p) => p.id === route.params.id);
const handleClick = () => {
  router.back();
};
const handleClickImage = (e) => {
  e.stopPropagation();
  window.location.reload();
};
</script>

<style scoped></style>
