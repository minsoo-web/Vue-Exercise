import Vue from "vue";
import Vuex from "vuex";
import router from "@/router/index.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userInfo: null, // 로그인한 유저정보
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
    loginSuccess(state, payload) {
      state.isLogin = true;
      state.isLoginError = false;
      state.userInfo = payload;
    },
    // 로그인이 실패
    loginError(state) {
      state.isLogin = false;
      state.isLoginError = true;
      state.userInfo = null;
    },
    logout(state) {
      state.isLogin = false;
      state.isLoginError = false;
      state.userInfo = null;
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
      if (
        selectedUser === null ||
        selectedUser.password !== singninObj.password
      ) {
        commit("loginError", selectedUser);
      } else {
        commit("loginSuccess", selectedUser);
        router.push({ name: "Mypage" });
      }
    },
    logout({ commit }) {
      commit("logout");
      router.push({ name: "Home" });
    },
  },
  modules: {},
});
