<template>
  <ion-item>
    <ion-checkbox slot="start" button :checked="checked"></ion-checkbox>
    <p class="ion-text-wrap item-cover" :contenteditable="true">{{ todo.item }}</p>
    <todo-action-button></todo-action-button>
  </ion-item>
</template>

<script>

import { defineComponent } from 'vue';
import {
  IonItem, IonCheckbox,
} from '@ionic/vue';
// eslint-disable-next-line import/no-unresolved
import TodoActionButton from '@/Components/UI/Todo/TodoActionButton.vue';

export default defineComponent({
  name: 'TodoListItem',
  props: {
    todo: {
      type: Object,
      required: true,
    },
    checked: {
      type: Boolean,
      required: true,
    },
  },
  components: {
    TodoActionButton,
    IonItem,
    IonCheckbox,
  },
  setup() {
    return {
    };
  },
});
</script>

<style scoped>
.item {
  margin: 10px auto auto auto;
}
</style>
