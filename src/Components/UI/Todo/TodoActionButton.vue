<template>
  <ion-button @click="presentActionSheet" slot="end" color="primary">
    <ion-icon :ios="menu" :md="menu"></ion-icon>
  </ion-button>
</template>

<script>
import { defineComponent } from 'vue';
import {
  actionSheetController, IonButton, IonIcon, getPlatforms,
} from '@ionic/vue';
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  menu, trash, heart, close, bookmark, warning, arrowBackCircle, heartHalf,
} from 'ionicons/icons';
import { useStore } from 'vuex';

export default defineComponent({
  components: {
    IonIcon,
    IonButton,
  },
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const store = useStore();

    function deleteHandler(todo) {
      const payload = { todo };
      if (todo.deleted) {
        return store.dispatch('todos/unmarkDeleted', payload);
      }
      return store.dispatch('todos/markDeleted', payload);
    }

    function favouriteHandler(todo) {
      const payload = { todo };
      if (todo.favourite) {
        return store.dispatch('todos/unmarkFavourite', payload);
      }
      return store.dispatch('todos/markFavourite', payload);
    }

    function bookmarkHandler(todo) {
      const payload = { todo };
      if (todo.bookmark) {
        return store.dispatch('todos/unmarkBookmark', payload);
      }
      return store.dispatch('todos/markBookmark', payload);
    }

    function importantHandler(todo) {
      const payload = { todo };
      if (todo.important) {
        return store.dispatch('todos/unmarkImportant', payload);
      }
      return store.dispatch('todos/markImportant', payload);
    }

    async function presentActionSheet() {
      const deviceInformation = getPlatforms();
      const deleteBtn = props.todo.deleted ? 'Restore' : 'Delete';
      const deleteIcon = props.todo.deleted ? arrowBackCircle : trash;
      const FavBtn = props.todo.favourite ? 'Unfavourite' : 'Favourite';
      const FavIcon = props.todo.favourite ? heartHalf : heart;
      const ImpBtn = props.todo.important ? 'Unmark as Important' : 'Mark as Important';
      const BookmarkBtn = props.todo.bookmark ? 'Remove Bookmark' : 'Bookmark';
      const buttons = !props.todo.deleted ? [
        {
          text: deleteBtn,
          role: 'delete',
          icon: deviceInformation[0] === 'iphone' ? '' : deleteIcon,
          id: 'delete-button',
          data: {
            type: 'delete',
          },
          handler: () => {
            deleteHandler(props.todo);
          },
        },
        {
          text: FavBtn,
          role: 'favourite',
          icon: deviceInformation[0] === 'iphone' ? '' : FavIcon,
          id: 'favourite-button',
          handler: () => {
            favouriteHandler(props.todo);
          },
        },
        {
          text: ImpBtn,
          icon: deviceInformation[0] === 'iphone' ? '' : warning,
          role: 'important',
          id: 'important-button',
          handler: () => {
            importantHandler(props.todo);
          },
        },
        {
          text: BookmarkBtn,
          icon: deviceInformation[0] === 'iphone' ? '' : bookmark,
          role: 'bookmark',
          id: 'bookmark-button',
          handler: () => {
            bookmarkHandler(props.todo);
          },
        },
        {
          text: 'Cancel',
          icon: deviceInformation[0] === 'iphone' ? '' : close,
          role: 'cancel',
          id: 'cancel-button',
          handler: () => {
            console.log('Cancel clicked');
          },
        },
      ] : [
        {
          text: deleteBtn,
          role: 'delete',
          icon: deviceInformation[0] === 'iphone' ? '' : deleteIcon,
          id: 'delete-button',
          data: {
            type: 'delete',
          },
          handler: () => {
            deleteHandler(props.todo);
          },
        },
        {
          text: 'Cancel',
          icon: deviceInformation[0] === 'iphone' ? '' : close,
          role: 'cancel',
          id: 'cancel-button',
          handler: () => {
          },
        },
      ];
      const actionSheet = await actionSheetController
        .create({
          header: 'Options',
          buttons,
        });
      await actionSheet.present();
    }

    return {
      menu,
      presentActionSheet,
    };
  },
});
</script>

<style>

</style>
