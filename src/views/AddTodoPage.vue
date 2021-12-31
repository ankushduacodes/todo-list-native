<template>
  <ion-page>
    <the-header :heading="heading"></the-header>
    <ion-content :fullscreen="true">
      <ion-card>
        <ion-item class="ion-margin">
          <ion-label position="floating">Todo:</ion-label>
          <ion-textarea v-model="todoInput"></ion-textarea>
        </ion-item>
        <ion-chip class="ion-margin" @click="changeBookColor" :color="bookmarkColor">
          <ion-icon :md="bookmark" :ios="bookmark"></ion-icon>
          <ion-label>Bookmark</ion-label>
        </ion-chip>
        <ion-chip class="ion-margin" @click="changeImpColor" :color="importantColor">
          <ion-icon :md="warning" :ios="warning"></ion-icon>
          <ion-label>Important</ion-label>
        </ion-chip>
        <ion-chip class="ion-margin" @click="changeFavColor" :color="favouriteColor">
          <ion-icon :md="heart" :ios="heart"></ion-icon>
          <ion-label>Favourite</ion-label>
        </ion-chip>
        <ion-button class="ion-margin" @click="addNewTodo" expand="block">Add new todo</ion-button>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage, IonContent, IonIcon, IonChip, IonLabel, IonCard, IonTextarea, IonItem, IonButton,
} from '@ionic/vue';
// eslint-disable-next-line import/no-extraneous-dependencies
import { bookmark, heart, warning } from 'ionicons/icons';
import { ref } from 'vue';
import { useStore } from 'vuex';
// eslint-disable-next-line import/no-unresolved
import TheHeader from '@/Components/UI/TheHeader.vue';
// eslint-disable-next-line import/extensions,import/no-unresolved
import uuidv4 from '@/helpers/helpers';

export default {
  name: 'AddTodoPage',
  components: {
    IonPage,
    TheHeader,
    IonContent,
    IonIcon,
    IonChip,
    IonLabel,
    IonCard,
    IonTextarea,
    IonItem,
    IonButton,
  },
  setup() {
    const store = useStore();
    const heading = 'Add New Todo';
    const importantColor = ref('');
    const bookmarkColor = ref('');
    const favouriteColor = ref('');

    function changeImpColor() {
      if (importantColor.value.length) {
        importantColor.value = '';
      } else {
        importantColor.value = 'primary';
      }
    }

    function changeFavColor() {
      if (favouriteColor.value.length) {
        favouriteColor.value = '';
      } else {
        favouriteColor.value = 'primary';
      }
    }

    function changeBookColor() {
      if (bookmarkColor.value.length) {
        bookmarkColor.value = '';
      } else {
        bookmarkColor.value = 'primary';
      }
    }

    const todoInput = ref('');

    function resetForm() {
      bookmarkColor.value = '';
      favouriteColor.value = '';
      importantColor.value = '';
      todoInput.value = '';
    }

    function addNewTodo() {
      if (!todoInput.value.length) {
        // TODO show a toast
        return;
      }
      const newTodo = {
        item: todoInput.value,
        id: uuidv4(),
        done: false,
        bookmark: !!bookmarkColor.value.length,
        favourite: !!favouriteColor.value.length,
        important: !!importantColor.value.length,
      };
      console.log(newTodo);
      resetForm();
      store.dispatch('addNewTodo', { newTodo });
      // TODO get confirmation from above action and show a toast
    }

    return {
      heading,
      bookmark,
      heart,
      warning,
      importantColor,
      bookmarkColor,
      favouriteColor,
      changeImpColor,
      changeFavColor,
      changeBookColor,
      addNewTodo,
      todoInput,
    };
  },
};
</script>

<style scoped>

</style>
