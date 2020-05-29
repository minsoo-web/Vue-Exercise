import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store/index.js";

Vue.use(VueRouter);

const rejectAuthUser = (to, from, next) => {
  if (store.state.isLogin) {
    // 이미 로그인된 유저
    alert("이미 로그인을 하였습니다.");
    next("/");
  } else {
    next();
  }
};

// 로그인한 회원만 접속
const onlyAuthUser = (to, from, next) => {
  if (store.state.isLogin === false) {
    alert("로그인이 필요한 기능입니다.");
    next("/login");
  } else {
    next();
  }
};

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/login",
    name: "Login",
    beforeEnter: rejectAuthUser,
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/mypage",
    name: "Mypage",
    beforeEnter: onlyAuthUser,
    component: () => import("@/views/Mypage.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
