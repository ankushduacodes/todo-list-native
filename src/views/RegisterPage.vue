<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button :text="getBackButtonText()" default-href="/"></ion-back-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <form>
        <ion-item lines="full">
          <ion-label position="floating">First name</ion-label>
          <ion-input type="text" required></ion-input>
        </ion-item>

        <ion-item lines="full">
          <ion-label position="floating">Last name</ion-label>
          <ion-input type="text" required></ion-input>
        </ion-item>

        <ion-item lines="full">
          <ion-label position="floating">Email</ion-label>
          <ion-input type="email" required></ion-input>
        </ion-item>

        <ion-item lines="full">
          <ion-label position="floating">Password</ion-label>
          <ion-input type="password" required></ion-input>
        </ion-item>

        <ion-row>
          <ion-col>
            <ion-button type="submit" color="danger" expand="block">Sign Up</ion-button>
          </ion-col>
        </ion-row>
      </form>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonPage,
  IonToolbar,
} from '@ionic/vue';
// eslint-disable-next-line import/no-extraneous-dependencies
import { personCircle } from 'ionicons/icons';
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      personCircle,
      getBackButtonText: () => {
        const win = window;
        const mode = win && win.Ionic && win.Ionic.mode;
        return mode === 'ios' ? 'Back' : '';
      },
    };
  },
  setup() {
  },
  components: {
    IonBackButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonItem,
    IonLabel,
    IonPage,
    IonToolbar,
  },
});
</script>

<style scoped>
ion-item {
  --inner-padding-end: 0;
  --background: transparent;
}

ion-label {
  margin-top: 12px;
  margin-bottom: 12px;
}

ion-item h2 {
  font-weight: 600;
}

ion-item .date {
  float: right;
  align-items: center;
  display: flex;
}

ion-item ion-icon {
  font-size: 42px;
  margin-right: 8px;
}

ion-item ion-note {
  font-size: 15px;
  margin-right: 12px;
  font-weight: normal;
}

h1 {
  margin: 0;
  font-weight: bold;
  font-size: 22px;
}

p {
  line-height: 22px;
}
</style>
