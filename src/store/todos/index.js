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
          done: false,
          bookmark: false,
          important: false,
          favourite: false,
        },
        {
          item: 'sdmkjnfbhsnjamkl,mknjbhdjnsml isdcndins sdjnjncnxncsn',
          id: 124,
          done: false,
          bookmark: false,
          important: false,
          favourite: false,
        },
        {
          item: 'sdmkjnfbhsnjamkl,mknjbhdjnsml isdcndins sdjnjncnxncsn',
          id: 125,
          done: false,
          bookmark: false,
          important: false,
          favourite: false,
        },
        {
          item: 'sdmkjnfbhsnjamkl,mknjbhdjnsml isdcndins sdjnjncnxncsn',
          id: 126,
          done: false,
          bookmark: false,
          important: false,
          favourite: false,
        },
        {
          item: 'sdmkjnfbhsnjamkl,mknjbhdjnsml isdcndins sdjnjncnxncsn',
          id: 127,
          done: false,
          bookmark: false,
          important: false,
          favourite: false,
        },
        {
          item: 'sdmkjnfbhsnjamkl,mknjbhdjnsml isdcndins sdjnjncnxncsn',
          id: 128,
          done: false,
          bookmark: false,
          important: false,
          favourite: false,
        },
      ],
    };
  },
  getters,
  mutations,
  actions,
};
