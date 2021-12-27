<template>
  <ion-page>
    <the-header></the-header>
    <ion-content :fullscreen="true">
      Hello
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent } from 'vue';
import {
  IonPage, IonContent,
} from '@ionic/vue';
// eslint-disable-next-line import/no-unresolved
import TheHeader from '@/Components/UI/TheHeader.vue';

export default defineComponent({
  name: 'MyDayPage',
  components: {
    TheHeader,
    IonPage,
    IonContent,
  },
  setup() {
    return {

    };
  },
});
</script>

<style scoped>

</style>
