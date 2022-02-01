<template>
  <ion-page>
    <the-header :heading="heading"></the-header>
    <ion-content :fullscreen="true">
      <ion-card>
        <ion-item class="ion-margin">
          <ion-label position="floating">Todo:</ion-label>
          <ion-textarea v-model="todoInput"></ion-textarea>
        </ion-item>
        <span ref="span" class="invis-span">Please enter a valid todo text</span>
        <br>
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
  IonPage, IonContent, IonIcon, IonChip, IonLabel,
  IonCard, IonTextarea, IonItem, IonButton,
} from '@ionic/vue';
// eslint-disable-next-line import/no-extraneous-dependencies
import { bookmark, heart, warning } from 'ionicons/icons';
import { ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
// eslint-disable-next-line import/no-unresolved
import TheHeader from '@/Components/UI/TheHeader.vue';

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
  methods: {},
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
        importantColor.value = 'danger';
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
        bookmarkColor.value = 'warning';
      }
    }

    const todoInput = ref('');

    function resetForm() {
      bookmarkColor.value = '';
      favouriteColor.value = '';
      importantColor.value = '';
      todoInput.value = '';
    }

    const span = ref();

    function checkInput() {
      if ((todoInput.value.length === 0)) {
        span.value.classList.add('show-span');
        span.value.classList.remove('invis-span');
      } else {
        span.value.classList.remove('show-span');
        span.value.classList.add('invis-span');
      }
    }

    const router = useRouter();

    async function addNewTodo() {
      checkInput();
      if (!todoInput.value.length) {
        // TODO show a toast
        return;
      }
      const newTodo = {
        item: todoInput.value,
        isDone: false,
        isBookmark: !!bookmarkColor.value.length,
        isFavourite: !!favouriteColor.value.length,
        isImportant: !!importantColor.value.length,
        isDeleted: false,
        // TODO add date field into todo schema on the backend;
        // date: Date.now(),
      };
      resetForm();
      console.log(newTodo);
      await store.dispatch('todos/addTodo', { newTodo });
      router.push('/');
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
      span,
      todoInput,
    };
  },
};
</script>

<style scoped>
.show-span {
  color: red;
  padding: 0;
  margin-left: 15px;
}

.invis-span {
  visibility: hidden;
}
</style>
