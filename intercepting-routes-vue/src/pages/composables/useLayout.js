import { inject, provide, ref, watchEffect, watch } from 'vue';
import { COMPONENT_CONFIG } from '~/constant.js';
import { useRoute } from 'vue-router';

const LAYOUT_SYMBOL = Symbol('layout');

export function useLayout() {
  const route = useRoute();
  const cmp = ref(COMPONENT_CONFIG[route.name]);
  let mountedList = !!cmp.value;
  provide(LAYOUT_SYMBOL, {
    components: cmp,
  });

  // 防止直接访问图片详情页后返回图片列表不显示内容
  watch(() => route.path, () => {
    if (!mountedList) {
      cmp.value = COMPONENT_CONFIG[route.name];
      mountedList = true
    }
  })
}

export function useLayoutData() {
  const data = inject(LAYOUT_SYMBOL);
  return data;
}
