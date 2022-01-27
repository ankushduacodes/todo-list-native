export default {
  setLoginStatus(state) {
    // eslint-disable-next-line no-param-reassign
    state.isLoggedIn = !state.isLoggedIn;
  },
  setUser(state, payload) {
    // eslint-disable-next-line no-param-reassign
    state.user = payload.user;
  },
};
