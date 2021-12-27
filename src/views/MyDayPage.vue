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
    <ion-content>
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
