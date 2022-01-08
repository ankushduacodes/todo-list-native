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
  },
  {
    path: '/task/:id',
    name: 'Todo Task Details',
    component: () => import(/* webpackChunkName: "important" */ '../views/TodoDetailsPage.vue'),
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
