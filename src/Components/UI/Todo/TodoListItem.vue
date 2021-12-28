<template>
  <ion-item>
    <ion-checkbox slot="start" button :checked="checked"></ion-checkbox>
    <p class="ion-text-wrap item-cover" :contenteditable="true">{{ todo.item }}</p>
    <ion-button @click="changeFavBtn" slot="end" color="danger">
      <ion-icon :ios="favBtn" :md="favBtn"></ion-icon>
    </ion-button>
  </ion-item>
</template>

<script>

import { defineComponent, ref } from 'vue';
import {
  IonItem, IonCheckbox, IonIcon, IonButton,
} from '@ionic/vue';
// eslint-disable-next-line import/no-extraneous-dependencies
import { heartOutline, heart } from 'ionicons/icons';

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
    IonItem,
    IonCheckbox,
    IonIcon,
    IonButton,
  },
  setup() {
    const favBtn = ref(heartOutline);

    function changeFavBtn() {
      favBtn.value = favBtn.value === heart ? heartOutline : heart;
    }

    return {
      changeFavBtn,
      favBtn,
    };
  },
});
</script>

<style scoped>
.item {
  border-radius: 5px;
  max-width: 98%;
  margin: 15px auto auto auto;
}
</style>
