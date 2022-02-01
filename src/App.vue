<template>
  <ion-app >
    <ion-router-outlet v-if="!loggedIn"></ion-router-outlet>
    <ion-split-pane v-else when="md" content-id="main-content">
      <side-menu></side-menu>
      <ion-router-outlet id="main-content"></ion-router-outlet>
    </ion-split-pane>
  </ion-app>
</template>

<script>
import {
  IonRouterOutlet,
  IonSplitPane,
  IonApp,
} from '@ionic/vue';
import { defineComponent } from 'vue';
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  add,
} from 'ionicons/icons';
import { mapGetters } from 'vuex';
// eslint-disable-next-line import/no-unresolved
import SideMenu from '@/Components/UI/SideMenu.vue';

export default defineComponent({
  name: 'App',
  components: {
    SideMenu,
    IonRouterOutlet,
    IonSplitPane,
    IonApp,
  },
  computed: {
    ...mapGetters({
      loggedIn: 'auth/isAuthenticated',
    }),
  },
  created() {
    this.$store.dispatch('auth/tryLogin');
  },
  setup() {
    return {
      add,
    };
  },
});
</script>

<style>
:root {
  --ion-safe-area-top: 20px;
  --ion-safe-area-bottom: 22px;
}
</style>
