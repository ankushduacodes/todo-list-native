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
  menu, trash, heart, close,
} from 'ionicons/icons';

export default defineComponent({
  components: {
    IonIcon,
    IonButton,
  },
  setup() {
    async function presentActionSheet() {
      const actionSheet = await actionSheetController
        .create({
          header: 'options',
          cssClass: 'my-custom-class',
          buttons: [
            {
              text: 'Delete',
              role: 'delete',
              icon: trash,
              id: 'delete-button',
              data: {
                type: 'delete',
              },
              handler: () => {
                console.log('Delete clicked');
              },
            },
            {
              text: 'Favorite',
              role: 'favourite',
              icon: heart,
              id: 'favourite-button',
              handler: () => {
                console.log('Favorite clicked');
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
