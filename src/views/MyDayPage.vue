<template>
  <ion-page>
    <the-header :heading="heading"></the-header>
    <ion-content :fullscreen="true">
      <todo-list header="Pending" :todo-list="todoList"></todo-list>
      <todo-list header="Done" :todo-list="todoList"></todo-list>
    </ion-content>
  </ion-page>
</template>

<script>
import { computed, defineComponent } from 'vue';
import {
  IonPage, IonContent,
} from '@ionic/vue';
// eslint-disable-next-line import/no-unresolved
import { useStore } from 'vuex';
// eslint-disable-next-line import/no-unresolved
import TheHeader from '@/Components/UI/TheHeader.vue';
// eslint-disable-next-line import/no-unresolved
import TodoList from '@/Components/UI/Todo/TodoList.vue';

export default defineComponent({
  name: 'MyDayPage',
  components: {
    TodoList,
    TheHeader,
    IonPage,
    IonContent,
  },
  setup() {
    const heading = 'My Day';
    const store = useStore();
    const todoList = computed(() => store.getters['todos/getAllTodos']);
    return {
      heading,
      todoList,
    };
  },
});
</script>

<style scoped>

</style>
