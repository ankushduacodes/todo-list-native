<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>{{ $route.name }}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      Hello
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent } from 'vue';
import {
  IonPage, IonContent, IonMenuButton, IonHeader, IonButtons, IonToolbar, IonTitle,
} from '@ionic/vue';

export default defineComponent({
  name: 'MyDayPage',
  components: {
    IonPage,
    IonContent,
    IonMenuButton,
    IonButtons,
    IonHeader,
    IonToolbar,
    IonTitle,
  },
  setup() {
    return {

    };
  },
});
</script>

<style scoped>

</style>
