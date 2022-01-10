<template>
  <ion-menu content-id="main-content" type="overlay">
    <ion-content>
      <ion-list id="inbox-list">
        <ion-list-header>Todos</ion-list-header>
        <ion-note>hi@ionicframework.com</ion-note>
        <ion-menu-toggle auto-hide="false">
          <template v-for="(p, i) in appPages" :key="i">
            <ion-item router-direction="root"
                      :router-link="p.url" :router-animation="false" lines="none"
                      detail="false" class="hydrated" :class="{selected: selectedIndex === i}">
              <ion-icon slot="start" :ios="p.iosIcon" :md="p.mdIcon"></ion-icon>
              <ion-label>{{ p.title }}</ion-label>
            </ion-item>
          </template>
          <ion-item>
            <ion-button expand="block" class="ion-margin">Logout</ion-button>
          </ion-item>
        </ion-menu-toggle>
      </ion-list>
    </ion-content>
  </ion-menu>
</template>

<script>
import {
  defineComponent, onMounted, ref, watch,
} from 'vue';
import {
  IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonContent, IonMenu,
} from '@ionic/vue';

// eslint-disable-next-line import/no-extraneous-dependencies
import {
  warning,
  codeWorking,
  heart,
  bookmark,
  trash,
  add,
} from 'ionicons/icons';
import { useRoute } from 'vue-router';

export default defineComponent({
  components: {
    IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonContent, IonMenu,
  },
  setup() {
    const appPages = [
      {
        title: 'Add',
        url: '/add',
        id: 'add',
        iosIcon: add,
        mdIcon: add,
      },
      {
        title: 'All Tasks',
        url: '/alltasks',
        id: 'alltasks',
        iosIcon: codeWorking,
        mdIcon: codeWorking,
      },
      {
        title: 'Important',
        url: '/important',
        id: 'important',
        iosIcon: warning,
        mdIcon: warning,
      },
      {
        title: 'Favourite',
        url: '/favourite',
        id: 'favourite',
        iosIcon: heart,
        mdIcon: heart,
      },
      {
        title: 'Bookmarks',
        url: '/bookmarks',
        id: 'bookmarks',
        iosIcon: bookmark,
        mdIcon: bookmark,
      },
      {
        title: 'Trash',
        url: '/trash',
        id: 'trash',
        iosIcon: trash,
        mdIcon: trash,
      },
    ];
    const route = useRoute();
    const selectedIndex = ref(0);

    function selectedRoute(rout) {
      return appPages.findIndex(
        (page) => page?.title?.toLowerCase() === rout?.name?.toLowerCase(),
      );
    }

    watch(route, (oldVal, currVal) => {
      selectedIndex.value = selectedRoute(currVal);
    });
    onMounted(() => {
      selectedIndex.value = selectedRoute(route);
    });

    return {
      appPages,
      selectedIndex,
    };
  },

});
</script>

<style scoped>
ion-menu ion-content {
  --background: var(--ion-item-background, var(--ion-background-color, #fff));
}

ion-button {
  width: 100%;
  height: 80%;
  margin: auto;
}

ion-item ion-button {
  margin-left: 15px
}

ion-menu.md ion-content {
  --padding-start: 8px;
  --padding-end: 8px;
  --padding-top: 20px;
  --padding-bottom: 20px;
}

ion-menu.md ion-list {
  padding: 20px 0;
}

ion-item {
  cursor: pointer;
}

ion-menu.md ion-note {
  margin-bottom: 30px;
}

ion-menu.md ion-list-header,
ion-menu.md ion-note {
  padding-left: 10px;
}

ion-menu.md ion-list#inbox-list {
  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);
}

ion-menu.md ion-list#inbox-list ion-list-header {
  font-size: 22px;
  font-weight: 600;

  min-height: 20px;
}

ion-menu.md ion-list#labels-list ion-list-header {
  font-size: 16px;

  margin-bottom: 18px;

  color: #757575;

  min-height: 26px;
}

ion-menu.md ion-item {
  --padding-start: 10px;
  --padding-end: 10px;
  border-radius: 4px;
}

ion-menu.md ion-item.selected {
  --background: rgba(var(--ion-color-primary-rgb), 0.14);
}

ion-menu.md ion-item.selected ion-icon {
  color: var(--ion-color-primary);
}

ion-menu.md ion-item:hover {
  --background: rgba(var(--ion-color-secondary-rgb), 0.14);
}

ion-menu.md ion-item ion-icon {
  color: #616e7e;
}

ion-menu.md ion-item ion-label {
  font-weight: 500;
}

ion-menu.ios ion-content {
  --padding-bottom: 20px;
}

ion-menu.ios ion-list {
  padding: 20px 0 0 0;
}

ion-menu.ios ion-note {
  line-height: 24px;
  margin-bottom: 20px;
}

ion-menu.ios ion-item {
  --padding-start: 16px;
  --padding-end: 16px;
  --min-height: 50px;
}

ion-menu.ios ion-item.selected ion-icon {
  color: var(--ion-color-primary);
}

ion-menu.ios ion-item ion-icon {
  font-size: 24px;
  color: #73849a;
}

ion-menu.ios ion-list#labels-list ion-list-header {
  margin-bottom: 8px;
}

ion-menu.ios ion-list-header,
ion-menu.ios ion-note {
  padding-left: 16px;
  padding-right: 16px;
}

ion-menu.ios ion-note {
  margin-bottom: 8px;
}

ion-note {
  display: inline-block;
  font-size: 16px;

  color: var(--ion-color-medium-shade);
}

ion-item.selected {
  --color: var(--ion-color-primary);
}
</style>
