<template>
  <ion-page>
    <the-header :heading="heading"></the-header>
    <ion-content :fullscreen="true">
      <todo-list-item></todo-list-item>
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
// eslint-disable-next-line import/no-unresolved
import TodoListItem from '@/Components/UI/Todo/TodoListItem.vue';

export default defineComponent({
  name: 'MyDayPage',
  components: {
    TodoListItem,
    TheHeader,
    IonPage,
    IonContent,
  },
  setup() {
    const heading = 'My Day';
    return {
      heading,
    };
  },
});
</script>

<style scoped>

</style>
