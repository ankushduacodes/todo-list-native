// eslint-disable-next-line import/no-unresolved
import myDayPage from '@/views/MyDayPage.vue';

export default [
  {
    path: '',
    redirect: '/myday',
  },
  {
    path: '/myday',
    name: 'My day',
    component: myDayPage,
  },
  {
    path: '/important',
    name: 'Important',
    component: () => import(/* webpackChunkName: "important" */ '../views/ImportantPage.vue'),
  },
  {
    path: '/alltasks',
    name: 'All Tasks',
    component: () => import(/* webpackChunkName: "alltasks" */ '../views/AllTasksPage.vue'),
  },
  {
    path: '/favourite',
    name: 'Favourite',
    component: () => import(/* webpackChunkName: "favourite" */ '../views/FavouritePage.vue'),
  },
  {
    path: '/bookmarks',
    name: 'Bookmarks',
    component: () => import(/* webpackChunkName: "bookmarks" */ '../views/BookmarksPage.vue'),
  },
  {
    path: '/trash',
    name: 'Trash',
    component: () => import(/* webpackChunkName: "trash" */ '../views/TrashPage.vue'),
  },
];
