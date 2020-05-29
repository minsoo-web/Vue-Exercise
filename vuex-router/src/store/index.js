import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    allUsers: [
      {
        id: 1,
        name: "minsoo",
        email: "123@123.com",
        password: "1234",
      },
      {
        id: 2,
        name: "minsoo2",
        email: "456@456.com",
        password: "1234",
      },
    ],
    isLogin: false,
    isLoginError: false,
  },
  mutations: {
    // state를 변화시킴
    // 로그인이 성공
    loginSuccess(state) {
      state.isLogin = true;
      state.isLoginError = false;
    },
    // 로그인이 실패
    loginError(state) {
      state.isLogin = false;
      state.isLoginError = true;
    },
  },
  actions: {
    // 비지니스 로직
    // 로그인을 시도
    login({ state, commit }, singninObj) {
      let selectedUser = null;
      state.allUsers.forEach((user) => {
        user.email == singninObj.email ? (selectedUser = user) : null;
      });
      selectedUser == null
        ? commit("loginError")
        : selectedUser.password !== singninObj.password
        ? commit("loginError")
        : commit("loginSuccess");
    },
  },
  modules: {},
});
