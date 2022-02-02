<template>
  <ion-page>
    <the-header :heading="heading"></the-header>
    <ion-content :fullscreen="true">
      <todo-list v-if="getAll.length" header="Deleted" :todo-list="getAll"></todo-list>
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
  name: 'TrashPage',
  components: {
    TheHeader,
    IonPage,
    TodoList,
    IonContent,
  },
  computed: {
    ...mapGetters({
      getAll: 'todos/getDeletedTodo',
    }),
  },
  setup() {
    const heading = 'Trash';
    return { heading };
  },

});
</script>

<style scoped>

</style>
