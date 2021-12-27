import { createRouter, createWebHistory } from '@ionic/vue-router';
import routes from './routes';

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'selected',
});

export default router;
