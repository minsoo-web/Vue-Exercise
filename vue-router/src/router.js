import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

const About = () => {
  return import("./views/About");
};

const Users = () => import("./views/Users");
const UsersDetail = () => import("./views/UsersDetail");
const UsersEdit = () => import("./views/UsersEdit");

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
    {
      path: "/users",
      name: "users",
      beforeEnter: (to, from, next) => {
        next();
      },
      component: Users,
      children: [
        {
          path: ":id",
          name: "users-detail",
          component: UsersDetail,
        },
        {
          path: ":id/edit",
          name: "users-edit",
          component: UsersEdit,
        },
      ],
    },
    {
      path: "/redirect-me",
      redirect: {
        name: "users",
      },
    },
  ],
});
