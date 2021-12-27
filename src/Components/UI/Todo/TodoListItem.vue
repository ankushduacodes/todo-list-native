<template>
  <ion-item>
    <ion-checkbox slot="start" button></ion-checkbox>
    <ion-label>ion-item in a card, icon left, button right</ion-label>
    <ion-button button @click="changeFavBtn" slot="end" color="danger">
      <ion-icon :ios="favBtn" :md="favBtn"></ion-icon>
    </ion-button>
  </ion-item>
</template>

<script>

import { defineComponent, ref } from 'vue';
import {
  IonItem, IonCheckbox, IonLabel, IonIcon, IonButton,
} from '@ionic/vue';
// eslint-disable-next-line import/no-extraneous-dependencies
import { heartOutline, heart } from 'ionicons/icons';

export default defineComponent({
  name: 'TodoListItem',
  components: {
    IonItem,
    IonCheckbox,
    IonLabel,
    IonIcon,
    IonButton,
  },
  setup() {
    const favBtn = ref(heartOutline);

    function changeFavBtn() {
      favBtn.value = heart;
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

.done-btn, .fav-btn {
  max-width: 30px;
  margin-right: 10px;
}
</style>
