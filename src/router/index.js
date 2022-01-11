import { createRouter, createWebHistory } from '@ionic/vue-router';
// eslint-disable-next-line
import NProgress from 'nprogress';
import routes from './routes';
// eslint-disable-next-line import/extensions,import/no-unresolved
import store from '@/store';

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach((to, from, next) => {
  if (to.name) {
    NProgress.start();
  }
  if (to.meta.requiresAuth && !store.getters['auth/isAuthenticated']) {
    next('/auth');
  } else if (to.meta.requiresUnauth && store.getters['auth/isAuthenticated']) {
    next('/alltasks');
  } else {
    next();
  }
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
