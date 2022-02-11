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
      <form @submit.prevent>
        <ion-item lines="full">
          <ion-label position="floating">First name</ion-label>
          <ion-input type="text" @blur="validateFname" v-model="firstName" required></ion-input>
          <span ref="spanFname" class="invis-span">
            Please enter a valid first name of at least 2 characters</span>
        </ion-item>

        <ion-item lines="full">
          <ion-label position="floating">Last name</ion-label>
          <ion-input type="text" @blur="validateLname" v-model="lastName" required></ion-input>
          <span ref="spanLname" class="invis-span">
            Please enter a valid last name of at least 2 character</span>
        </ion-item>

        <ion-item lines="full">
          <ion-label position="floating">Email</ion-label>
          <ion-input type="email" @blur="validateEmail" v-model="email" required></ion-input>
          <span ref="spanEmail" class="invis-span">Please enter a valid email</span>
        </ion-item>

        <ion-item lines="full">
          <ion-label position="floating">Password</ion-label>
          <ion-input type="password" @blur="validatePassword"
                     v-model="password" required></ion-input>
          <span ref="spanPassword" class="invis-span">
            Please enter a valid at least 8 character password with capital letter,
             lowercase letter, a symbol and numbers
          </span>
        </ion-item>

        <ion-item lines="full">
          <ion-label position="floating">Confirm Password</ion-label>
          <ion-input type="password" v-model="confirmPassword" required></ion-input>
          <span ref="spanConfirmPassword" @blur="validateConfirmPassword"
                class="invis-span">Passwords do not match</span>
        </ion-item>

        <ion-row>
          <ion-col>
            <ion-button @click="registerHandler"
                        type="submit" color="danger" expand="block">Sign Up
            </ion-button>
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
  IonInput,
  IonButton,
  IonRow,
  IonCol,
} from '@ionic/vue';
// eslint-disable-next-line import/no-extraneous-dependencies
import { personCircle } from 'ionicons/icons';
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      personCircle,
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      inputErrEmail: false,
      inputErrPassword: false,
      inputErrConfirmPassword: false,
      inputErrFname: false,
      inputErrLname: false,
      getBackButtonText: () => {
        const win = window;
        const mode = win && win.Ionic && win.Ionic.mode;
        return mode === 'ios' ? 'Back' : '';
      },
    };
  },
  methods: {
    validateEmail() {
      if (!this.email.trim().length || !this.email.trim().match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
        this.inputErrEmail = true;
        this.$refs.spanEmail.classList.add('show-span');
        this.$refs.spanEmail.classList.remove('invis-span');
      } else {
        this.inputErrEmail = false;
        this.$refs.spanEmail.classList.remove('show-span');
        this.$refs.spanEmail.classList.add('invis-span');
      }
    },
    validateFname() {
      if (this.firstName.trim().length < 2) {
        this.inputErrFname = true;
        this.$refs.spanFname.classList.add('show-span');
        this.$refs.spanFname.classList.remove('invis-span');
      } else {
        this.inputErrFname = false;
        this.$refs.spanFname.classList.remove('show-span');
        this.$refs.spanFname.classList.add('invis-span');
      }
    },
    validateLname() {
      if (this.lastName.trim().length < 2) {
        this.inputErrLname = true;
        this.$refs.spanLname.classList.add('show-span');
        this.$refs.spanLname.classList.remove('invis-span');
      } else {
        this.inputErrLname = false;
        this.$refs.spanLname.classList.remove('show-span');
        this.$refs.spanLname.classList.add('invis-span');
      }
    },
    validatePassword() {
      if (!this.password.trim().length || !this.password.trim().match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)) {
        this.inputErrPassword = true;
        this.$refs.spanPassword.classList.add('show-span');
        this.$refs.spanPassword.classList.remove('invis-span');
      } else {
        this.inputErrPassword = false;
        this.$refs.spanPassword.classList.remove('show-span');
        this.$refs.spanPassword.classList.add('invis-span');
      }
    },
    validateConfirmPassword() {
      if (this.password.trim() !== this.confirmPassword.trim()) {
        this.inputErrConfirmPassword = true;
        this.$refs.spanConfirmPassword.classList.add('show-span');
        this.$refs.spanConfirmPassword.classList.remove('invis-span');
      } else {
        this.inputErrConfirmPassword = false;
        this.$refs.spanConfirmPassword.classList.remove('show-span');
        this.$refs.spanConfirmPassword.classList.add('invis-span');
      }
    },
    resetInput() {
      this.inputErrEmail = false;
      this.email = '';
      this.password = '';
      this.firstName = '';
      this.confirmPassword = '';
      this.lastName = '';
    },
    async registerHandler() {
      this.validateEmail();
      this.validatePassword();
      this.validateFname();
      this.validateLname();
      this.validateConfirmPassword();
      if (this.inputErrEmail
          || this.inputErrPassword
          || this.inputErrFname
          || this.inputErrLname
          || this.inputErrConfirmPassword) {
        return;
      }
      const payload = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password,
        confirmPassword: this.confirmPassword,
      };
      try {
        await this.$store.dispatch('auth/register', payload);
        this.resetInput();
        await this.$router.push('/login');
      } catch (err) {
        console.log(err);
      }
    },
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
    IonInput,
    IonButton,
    IonRow,
    IonCol,
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

@media screen and (min-width: 1560px) {
  ion-content {
    --padding-start: 600px;
    --padding-end: 600px;
    --margin-top: 50px;
  }
}

.show-span {
  color: red;
  padding: 0;
}

.invis-span {
  display: none;
}
</style>
