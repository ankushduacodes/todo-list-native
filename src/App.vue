<template>
  <ion-app>
    <ion-split-pane when="md" content-id="main-content">
    <side-menu></side-menu>
      <ion-router-outlet id="main-content"></ion-router-outlet>
    </ion-split-pane>
  </ion-app>
</template>

<script>
import {
  IonApp,
  IonRouterOutlet,
  IonSplitPane,
} from '@ionic/vue';
import { defineComponent } from 'vue';
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  archiveOutline,
  archiveSharp,
  bookmarkOutline,
  heartOutline,
  heartSharp,
  mailOutline,
  mailSharp,
  paperPlaneOutline,
  paperPlaneSharp,
  trashOutline,
  trashSharp,
  warningOutline,
  warningSharp,
} from 'ionicons/icons';
// eslint-disable-next-line import/no-unresolved
import SideMenu from '@/Components/UI/SideMenu.vue';

export default defineComponent({
  name: 'App',
  components: {
    SideMenu,
    IonApp,

    // eslint-disable-next-line vue/no-unused-components
    IonRouterOutlet,
    IonSplitPane,
  },
  setup() {
    return {
      archiveOutline,
      archiveSharp,
      bookmarkOutline,
      heartOutline,
      heartSharp,
      mailOutline,
      mailSharp,
      paperPlaneOutline,
      paperPlaneSharp,
      trashOutline,
      trashSharp,
      warningOutline,
      warningSharp,
    };
  },
});
</script>

<style scoped>
</style>
