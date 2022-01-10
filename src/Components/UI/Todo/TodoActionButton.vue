<template>
  <ion-button @click="presentActionSheet" slot="end" color="primary">
    <ion-icon :ios="menu" :md="menu"></ion-icon>
  </ion-button>
</template>

<script>
import { defineComponent } from 'vue';
import { actionSheetController, IonButton, IonIcon } from '@ionic/vue';
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  menu, trash, heart, close, bookmark, warning, pencil, arrowBackCircle, heartHalf,
} from 'ionicons/icons';

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
    async function presentActionSheet() {
      const deleteBtn = props.todo.deleted ? 'Restore' : 'Delete';
      const deleteIcon = props.todo.deleted ? arrowBackCircle : trash;
      const FavBtn = props.todo.favourite ? 'Unfavourite' : 'Favourite';
      const FavIcon = props.todo.favourite ? heartHalf : heart;
      const ImpBtn = props.todo.deleted ? 'Restore' : 'Delete';
      const BookmarkBtn = props.todo.deleted ? 'Restore' : 'Delete';
      const actionSheet = await actionSheetController
        .create({
          header: 'Options',
          buttons: [
            {
              text: 'Edit',
              icon: pencil,
              role: 'edit',
              id: 'edit-button',
              handler: () => {
                console.log('Edit clicked');
              },
            },
            {
              text: deleteBtn,
              role: 'delete',
              icon: deleteIcon,
              id: 'delete-button',
              data: {
                type: 'delete',
              },
              handler: () => {
                console.log('Delete clicked');
              },
            },
            {
              text: FavBtn,
              role: 'favourite',
              icon: FavIcon,
              id: 'favourite-button',
              handler: () => {
                console.log('Favorite clicked');
              },
            },
            {
              text: ImpBtn,
              icon: warning,
              role: 'important',
              id: 'important-button',
              handler: () => {
                console.log('important clicked');
              },
            },
            {
              text: BookmarkBtn,
              icon: bookmark,
              role: 'bookmark',
              id: 'bookmark-button',
              handler: () => {
                console.log('bookmark clicked');
              },
            },
            {
              text: 'Cancel',
              icon: close,
              role: 'cancel',
              id: 'cancel-button',
              handler: () => {
                console.log('Cancel clicked');
              },
            },
          ],
        });
      await actionSheet.present();

      const { role, data } = await actionSheet.onDidDismiss();
      console.log('onDidDismiss resolved with role and data', role, data);
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
