<template>
  <ion-header :translucent="true">
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-menu-button color="primary"></ion-menu-button>
      </ion-buttons>
      <ion-title>{{ heading }}</ion-title>
    </ion-toolbar>
  </ion-header>
</template>

<script>
import { defineComponent } from 'vue';
import {
  IonButtons, IonHeader, IonMenuButton, IonTitle, IonToolbar,
} from '@ionic/vue';

export default defineComponent({
  name: 'TheHeader',
  components: {
    IonMenuButton,
    IonButtons,
    IonHeader,
    IonToolbar,
    IonTitle,
  },
  props: {
    heading: {
      type: String,
      required: true,
    },
  },
});
</script>

<style scoped>

</style>
