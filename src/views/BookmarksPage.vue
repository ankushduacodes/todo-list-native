<template>
  <ion-page>
    <the-header :heading="heading"></the-header>
  </ion-page>
</template>

<script>
import { defineComponent } from 'vue';
import { IonPage } from '@ionic/vue';
// eslint-disable-next-line import/no-unresolved
import TheHeader from '@/Components/UI/TheHeader.vue';

export default defineComponent({
  name: 'BookmarksPage',
  components: {
    TheHeader,
    IonPage,
  },
  setup() {
    const heading = 'Bookmarks';
    return {
      heading,
    };
  },
});
</script>

<style scoped>

</style>
