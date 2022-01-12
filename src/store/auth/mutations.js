export default {
  setLoginStatus(state) {
    // eslint-disable-next-line no-param-reassign
    state.isLoggedIn = !state.isLoggedIn;
  },
};
