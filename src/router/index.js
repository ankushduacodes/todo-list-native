import { createRouter } from '@ionic/vue-router';
// eslint-disable-next-line
import NProgress from 'nprogress';
import { createWebHashHistory, createWebHistory } from 'vue-router';
import routes from './routes';
// eslint-disable-next-line import/extensions,import/no-unresolved,no-unused-vars
import store from '@/store';

const router = createRouter({
  history: process.env.IS_ELECTRON
    ? createWebHashHistory(process.env.BASE_URL)
    : createWebHistory(process.env.BASE_URL),
  routes,
});
// eslint-disable-next-line no-unused-vars
router.beforeEach((to, from, next) => {
  if (to.name) {
    NProgress.start();
  }
  const user = localStorage.getItem('user-info');
  if (!user && to.meta.requiresAuth) {
    next('/auth');
  } else if (to.meta.requiresUnauth && user) {
    next('/alltasks');
  } else {
    next();
  }
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
