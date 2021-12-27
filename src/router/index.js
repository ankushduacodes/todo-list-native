import { createRouter, createWebHistory } from '@ionic/vue-router';

const routes = [
  {
    path: '',
    redirect: '/myday',
  },
  {
    path: '/myday',
    name: 'My day',
    component: () => import(/* webpackChunkName: "myday" */ '../views/MyDayPage.vue'),
  },
  {
    path: '/important',
    name: 'Important',
    component: () => import(/* webpackChunkName: "important" */ '../views/MyDayPage.vue'),
  },
  {
    path: '/alltasks',
    name: 'All Tasks',
    component: () => import(/* webpackChunkName: "alltasks" */ '../views/MyDayPage.vue'),
  },
  {
    path: '/favourite',
    name: 'Favourite',
    component: () => import(/* webpackChunkName: "favourite" */ '../views/MyDayPage.vue'),
  },
  {
    path: '/bookmarks',
    name: 'Bookmarks',
    component: () => import(/* webpackChunkName: "bookmarks" */ '../views/MyDayPage.vue'),
  },
  {
    path: '/trash',
    name: 'Trash',
    component: () => import(/* webpackChunkName: "trash" */ '../views/MyDayPage.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'selected',
});

export default router;
