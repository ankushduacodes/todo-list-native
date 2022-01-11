<template>
    <ion-split-pane when="md" content-id="main-content">
      <side-menu></side-menu>
      <ion-router-outlet id="main-content"></ion-router-outlet>
    </ion-split-pane>
</template>

<script>
import {
  IonRouterOutlet,
  IonSplitPane,
} from '@ionic/vue';
import { defineComponent } from 'vue';
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  add,
} from 'ionicons/icons';
// eslint-disable-next-line import/no-unresolved
import SideMenu from '@/Components/UI/SideMenu.vue';

export default defineComponent({
  name: 'App',
  components: {
    SideMenu,
    // eslint-disable-next-line vue/no-unused-components
    IonRouterOutlet,
    IonSplitPane,
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
