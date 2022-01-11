<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>
        Todo List
      </ion-title>
    </ion-toolbar>
  </ion-header>

  <ion-content class="ion-padding-end ion-padding-start">
    <form>
      <ion-item class="ion-padding-top">
        <ion-button @click="registerHandler"
                    expand="block" color="primary">Register
        </ion-button>
      </ion-item>
      <ion-item>
        <span class="divider line one-line">or</span>
      </ion-item>
      <ion-item class="ion-padding-bottom">
        <ion-button @click="loginHandler"
                    expand="block" color="danger">Login
        </ion-button>
      </ion-item>
    </form>
  </ion-content>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
  name: 'AuthPage',
  setup() {
    const router = useRouter();

    function loginHandler() {
      router.push('/login');
    }

    function registerHandler() {
      router.push('/register');
    }

    return {
      loginHandler,
      registerHandler,
    };
  },
};
</script>

<style scoped>
ion-item ion-button {
  margin: auto;
  min-width: 80%;
  min-height: 100%;
}

ion-item span {
  margin: auto;
}

</style>
