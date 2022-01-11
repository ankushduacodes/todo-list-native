<template>
  <ion-app>
    <component :is="'ion-app-page'"></component>
  </ion-app>
</template>

<script>

import { IonApp } from '@ionic/vue';
import { defineComponent } from 'vue';
// eslint-disable-next-line import/no-unresolved
import IonAppPage from '@/Components/layouts/IonAppPage.vue';

export default defineComponent({
  components: {
    IonAppPage,
    IonApp,
  },
});
</script>

<style>

</style>
