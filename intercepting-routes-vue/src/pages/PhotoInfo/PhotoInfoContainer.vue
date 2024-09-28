<template>
  <div class="PhotoInfoContainer">
    <component :is="InfoCmp" />
  </div>
</template>

<script lang="ts" setup>
import { useLayoutData } from '~/pages/composables/useLayout'
import { computed, defineAsyncComponent } from 'vue'

const { components } = useLayoutData()

const InfoCmp = computed(() => {
  if (components?.value) {
    return defineAsyncComponent(() => import('./PhotoInfoModal.vue'))
  } else {
    return defineAsyncComponent(() => import('./PhotoInfoPage.vue'))
  }
})
</script>
