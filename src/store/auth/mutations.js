export default {
  setLoginStatus(state) {
    // eslint-disable-next-line no-param-reassign
    state.isLoggedIn = true;
    console.log(state.isLoggedIn);
  },
};
