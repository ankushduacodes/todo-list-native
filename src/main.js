import { createApp } from 'vue';
import { IonicVue } from '@ionic/vue';
import Toast, { POSITION } from 'vue-toastification';
import App from './App.vue';
import router from './router';
// eslint-disable-next-line import/no-relative-packages
import '../node_modules/nprogress/nprogress.css';
import 'vue-toastification/dist/index.css';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';

import store from './store';
import './registerServiceWorker';

const toastOptions = {
  position: POSITION.TOP_RIGHT,
  timeout: 4000,
};

const app = createApp(App).use(store)
  .use(IonicVue)
  .use(router)
  .use(Toast, toastOptions);

router.isReady().then(() => {
  app.mount('#app');
});
