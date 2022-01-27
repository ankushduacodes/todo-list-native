<template>
  <ion-page>
    <the-header :heading="heading"></the-header>
    <ion-content :fullscreen="true">
      <todo-list v-if="getPending.length" header="Pending" :todo-list="getPending"></todo-list>
      <todo-list v-if="getDone.length" header="Done" :todo-list="getDone"></todo-list>
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent } from 'vue';
import { IonPage, IonContent } from '@ionic/vue';
import { mapGetters } from 'vuex';
// eslint-disable-next-line import/no-unresolved
import TheHeader from '@/Components/UI/TheHeader.vue';
// eslint-disable-next-line import/no-unresolved
import TodoList from '@/Components/UI/Todo/TodoList.vue';

export default defineComponent({
  name: 'AllTasksPage',
  components: {
    TheHeader,
    IonPage,
    TodoList,
    IonContent,
  },
  computed: {
    ...mapGetters({
      getAll: 'todos/getAllTodos',
      getDone: 'todos/getDoneAllTodos',
      getPending: 'todos/getPendingAllTodos',
    }),
  },
  mounted() {
    if (!this.$store.getters['todos/getAllTodos'].length) {
      this.$store.dispatch('todos/fetchAllTodo');
    }
  },
  setup() {
    const heading = 'All Tasks';
    return { heading };
  },

});
</script>

<style scoped>

</style>
