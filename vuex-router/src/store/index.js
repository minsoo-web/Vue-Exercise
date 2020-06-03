import Vue from "vue";
import Vuex from "vuex";
import router from "@/router/index.js";
import axios from "axios";

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
    // 로그인을 시도 -> 토큰을 반환
    login({ commit, dispatch }, singninObj) {
      axios
        .post("https://reqres.in/api/login", {
          email: singninObj.email,
          password: singninObj.password,
        })
        .then((res) => {
          // 토큰을 로컬 스토리지에 저장
          // 로컬 스토리지에 토큰이 있다면 새로고침시 멤버 정보를 다시 요청
          let token = res.data.token;
          localStorage.setItem("access_token", token); // 저장
          dispatch("getMemberInfo");
        })
        .catch((error) => {
          console.log(error);
          commit("loginError");
        });
    },

    logout({ commit }) {
      commit("logout"); // store에 상태 값들을 바꿔준다.
      localStorage.removeItem("access_token"); // 토큰도 지워준다.
      router.push({ name: "Home" });
    },

    // 새로고침이 될때마다 실행이 되게끔
    getMemberInfo({ commit }) {
      // 로컬 스토리지에 저장되어 있는 토큰을 불러온다.
      let config = {
        headers: {
          "access-toketn": localStorage.getItem("access_token"),
        },
      };
      // 반환된 토큰을 사용해 유저 정보를 받아온다
      // 새로 고침 -> 토큰만 가지고 멤버 정보를 요청
      if (localStorage.getItem("access_token")) {
        axios
          .get("https://reqres.in/api/users/2", config)
          .then((response) => {
            let obj = {
              avatar: response.data.data.avatar,
              email: response.data.data.email,
              first_name: response.data.data.first_name,
              id: response.data.data.id,
              last_name: response.data.data.last_name,
            };
            commit("loginSuccess", obj);
          })
          .catch((err) => {
            console.log(err);
            commit("loginError");
          });
      }
    },
  },
  modules: {},
});
