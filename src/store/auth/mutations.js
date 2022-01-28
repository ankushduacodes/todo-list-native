export default {
  setUser(state, payload) {
    // eslint-disable-next-line no-param-reassign
    state.user = payload;
  },
  unsetUser(state) {
    // eslint-disable-next-line no-param-reassign
    state.user = null;
  },
};
