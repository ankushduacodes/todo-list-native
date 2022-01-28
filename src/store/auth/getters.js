export default {
  isAuthenticated(state) {
    return !!state.user;
  },
  getUserInfo(state) {
    return state.user;
  },
};
