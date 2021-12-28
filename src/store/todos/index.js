// eslint-disable-next-line import/extensions,import/no-unresolved
import actions from '@/store/todos/actions';
// eslint-disable-next-line import/extensions,import/no-unresolved
import getters from '@/store/todos/getters';
// eslint-disable-next-line import/extensions,import/no-unresolved
import mutations from '@/store/todos/mutations';

export default {
  namespaced: true,
  state() {
    return {
      todoList: [
        {
          item: 'sdmkjnfbhsnjamkl,mknjbhdjnsml isdcndins sdjnjncnxncsn',
          id: 123,
          tags: ['important', 'favorite', 'bookmark'],
        },
        {
          item: 'sdmkjnfbhsnjamkl,mknjbhdjnsml isdcndins sdjnjncnxncsn',
          id: 124,
        },
        {
          item: 'sdmkjnfbhsnjamkl,mknjbhdjnsml isdcndins sdjnjncnxncsn',
          id: 125,
        },
        {
          item: 'sdmkjnfbhsnjamkl,mknjbhdjnsml isdcndins sdjnjncnxncsn',
          id: 126,
        },
        {
          item: 'sdmkjnfbhsnjamkl,mknjbhdjnsml isdcndins sdjnjncnxncsn',
          id: 127,
        },
        {
          item: 'sdmkjnfbhsnjamkl,mknjbhdjnsml isdcndins sdjnjncnxncsn',
          id: 128,
        },
      ],
    };
  },
  getters,
  mutations,
  actions,
};
