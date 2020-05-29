<template>
  <v-app id="inspire">
    <v-navigation-drawer app v-model="drawer">
      <v-list dense>
        <v-list-item router :to="{ name: 'Home' }" exact>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item v-if="isLogin" router :to="{ name: 'Mypage' }">
          <v-list-item-action>
            <v-icon>mdi-account</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Mypage</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item v-else router :to="{ name: 'Login' }">
          <v-list-item-action>
            <v-icon>mdi-widgets</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Login</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="teal" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Application</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-menu offset-y v-if="isLogin" open-on-hover>
          <template v-slot:activator="{ on }">
            <v-btn depressed color="teal darken-1" dark v-on="on">
              Dropdown
            </v-btn>
          </template>
          <v-list>
            <v-list-item router :to="{ name: 'Mypage' }">
              <v-list-item-title>마이페이지</v-list-item-title>
            </v-list-item>
            <v-list-item @click="logout">
              <v-list-item-title>로그아웃</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-btn
          depressed
          color="teal darken-1"
          v-else
          router
          :to="{ name: 'Login' }"
          >로그인</v-btn
        >
      </v-toolbar-items>
    </v-app-bar>

    <v-content>
      <router-view> </router-view>
    </v-content>
    <v-footer color="teal" app>
      <span class="white--text">&copy; 2020</span>
    </v-footer>
  </v-app>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "App",
  data() {
    return {
      drawer: null,
    };
  },
  computed: {
    ...mapState(["isLogin", "userInfo"]),
  },
  methods: {
    ...mapActions(["logout"]),
  },
};
</script>
