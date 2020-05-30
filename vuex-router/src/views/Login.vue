<template>
  <v-container style="max-width: 450px" fill-height>
    <v-layout align-center>
      <v-flex xs12>
        <v-alert type="success" :value="isLogin">I'm a success alert.</v-alert>
        <v-alert type="error" :value="isLoginError">아이디와 비밀번호를 확인해주세요</v-alert>
        <v-card>
          <v-toolbar flat>
            <v-toolbar-title>Login</v-toolbar-title>
          </v-toolbar>
          <div class="pa-3">
            <v-text-field v-model="email" label="email"></v-text-field>
            <v-text-field v-model="password" label="password" type="password"></v-text-field>
            <v-btn
              block
              large
              depressed
              color="teal"
              @click="
                login({
                  email: email,
                  password: password,
                })
              "
            >로그인</v-btn>
          </div>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  computed: {
    ...mapState(["isLogin", "isLoginError"])
  },
  methods: {
    ...mapActions(["login"])
  }
};
</script>

<style></style>
