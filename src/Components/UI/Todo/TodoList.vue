<template>
  <ion-list>
    <ion-list-header>
      <h4>{{ header }}</h4>
    </ion-list-header>
    <template v-for="todo in todoList" :key="todo.id">
      <todo-list-item :todo="todo" :checked="header.toLowerCase() === 'done'"></todo-list-item>
    </template>
  </ion-list>
</template>

<script>
import { defineComponent } from 'vue';
// eslint-disable-next-line import/no-unresolved
import { IonListHeader, IonList } from '@ionic/vue';
// eslint-disable-next-line import/no-unresolved
import TodoListItem from '@/Components/UI/Todo/TodoListItem.vue';

export default defineComponent({
  name: 'TodoList',
  components: { TodoListItem, IonListHeader, IonList },
  props: {
    header: {
      type: String,
      required: true,
    },
    todoList: {
      type: Array,
      required: true,
    },
  },
});
</script>

<style scoped>

</style>
