// eslint-disable-next-line import/no-unresolved
import allTasksPage from '@/views/AllTasksPage.vue';
// eslint-disable-next-line import/no-unresolved
import ImportantPage from '@/views/ImportantPage.vue';

export default [
  {
    path: '',
    redirect: '/alltasks',
  },
  {
    path: '/important',
    name: 'Important',
    component: ImportantPage,
  },
  {
    path: '/alltasks',
    name: 'All Tasks',
    component: allTasksPage,
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
    path: '/add',
    name: 'Add',
    component: () => import(/* webpackChunkName: "addTodo" */ '../views/AddTodoPage.vue'),
  },
  {
    path: '/trash',
    name: 'Trash',
    component: () => import(/* webpackChunkName: "trash" */ '../views/TrashPage.vue'),
  },
];
