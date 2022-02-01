<template>
  <ion-item>
    <ion-checkbox v-if="!todo.isDeleted" @click="todoDoneStateChange(todo)"
                  :checked="todo.isDone"
                  slot="start">
    </ion-checkbox>
    <!-- TODO set content editable properly with update action-->
    <p :style="(todo.isDeleted || todo.isDone) ? {textDecoration: 'line-through'} : {}"
       class="ion-text-wrap item-cover">
      {{ todo.item }}
    </p>
    <todo-action-button :todo="todo"></todo-action-button>
  </ion-item>
</template>

<script>

import { defineComponent } from 'vue';
import {
  IonItem, IonCheckbox,
} from '@ionic/vue';
import { useStore } from 'vuex';
// eslint-disable-next-line import/no-unresolved
import TodoActionButton from '@/Components/UI/Todo/TodoActionButton.vue';

export default defineComponent({
  name: 'TodoListItem',
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
  components: {
    TodoActionButton,
    IonItem,
    IonCheckbox,
  },
  setup() {
    const store = useStore();

    async function todoDoneStateChange(todo) {
      if (!todo.isDone) {
        await store.dispatch('todos/markDone', { todo });
      } else {
        await store.dispatch('todos/markUndone', { todo });
      }
    }

    return {
      todoDoneStateChange,
    };
  },
});
</script>

<style scoped>
.item {
  margin: 10px auto auto auto;
}
</style>
