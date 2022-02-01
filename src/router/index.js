import { createRouter, createWebHistory } from '@ionic/vue-router';
// eslint-disable-next-line
import NProgress from 'nprogress';
import routes from './routes';
// eslint-disable-next-line import/extensions,import/no-unresolved,no-unused-vars
import store from '@/store';

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
// eslint-disable-next-line no-unused-vars
router.beforeEach((to, from, next) => {
  if (to.name) {
    NProgress.start();
  }
  const user = localStorage.getItem('user-info');
  if (to.meta.requiresUnauth && store.getters['auth/isAuthenticated']) {
    next('/alltasks');
  } else if (!user && to.meta.requiresAuth) {
    next('/auth');
  } else {
    next();
  }
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
