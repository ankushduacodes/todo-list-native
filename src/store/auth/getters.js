export default {
  isAuthenticated(state) {
    return state.isLoggedIn;
  },
  getUserInfo(state) {
    return state.user;
  },
};
