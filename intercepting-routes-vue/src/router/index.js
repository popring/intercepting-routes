import { createRouter, createWebHistory } from 'vue-router';
import { PAGE } from '../constant';

/** @type {(import('vue-router').RouteRecordRaw)[]} */
const routes = [
  {
    path: '/',
    component: () => import('../pages/Layout.vue'),
    children: [
      {
        // 图片列表
        path: '/',
        name: PAGE.PHOTO_LIST,
        component: () => import('../pages/PhotoList/PhotoListContainer.vue'),
        children: [
          // 图片详情
          {
            name: PAGE.PHOTO_INFO,
            path: '/photo/:id',
            component: () =>
              import('../pages/PhotoInfo/PhotoInfoContainer.vue'),
          },
        ],
      },
    ],
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
