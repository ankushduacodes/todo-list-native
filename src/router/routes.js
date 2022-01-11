// eslint-disable-next-line import/no-unresolved
import allTasksPage from '../views/AllTasksPage.vue';

export default [
  {
    path: '',
    redirect: '/alltasks',
  },
  {
    path: '/important',
    name: 'Important',
    component: () => import(/* webpackChunkName: "important" */ '../views/ImportantPage.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/alltasks',
    name: 'All Tasks',
    component: allTasksPage,
    meta: { requiresAuth: true },
  },
  {
    path: '/favourite',
    name: 'Favourite',
    component: () => import(/* webpackChunkName: "favourite" */ '../views/FavouritePage.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/bookmarks',
    name: 'Bookmarks',
    component: () => import(/* webpackChunkName: "bookmarks" */ '../views/BookmarksPage.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/add',
    name: 'Add',
    component: () => import(/* webpackChunkName: "addTodo" */ '../views/AddTodoPage.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/trash',
    name: 'Trash',
    component: () => import(/* webpackChunkName: "trash" */ '../views/TrashPage.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/auth',
    name: 'Auth',
    component: () => import(/* webpackChunkName: "trash" */ '../views/AuthPage.vue'),
    meta: { requiresUnauth: true },
  },
];
