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
          item: '1',
          id: 123,
          done: false,
          bookmark: false,
          important: false,
          favourite: false,
          deleted: true,
        },
        {
          item: '2',
          id: 124,
          done: false,
          bookmark: false,
          important: false,
          favourite: false,
          deleted: false,
        },
        {
          item: '3',
          id: 125,
          done: false,
          bookmark: false,
          important: false,
          favourite: false,
          deleted: false,
        },
        {
          item: '4',
          id: 126,
          done: false,
          bookmark: false,
          important: false,
          favourite: false,
          deleted: false,
        },
        {
          item: '5',
          id: 127,
          done: true,
          bookmark: false,
          important: false,
          favourite: false,
          deleted: true,
        },
        {
          item: '6',
          id: 128,
          done: true,
          bookmark: false,
          important: false,
          favourite: false,
          deleted: false,
        },
      ],
    };
  },
  getters,
  mutations,
  actions,
};
