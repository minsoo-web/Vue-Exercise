<template>
  <v-container style="max-width: 450px" fill-height>
    <v-layout align-center>
      <v-flex xs12>
        <v-alert type="success" :value="isLogin">
          I'm a success alert.
        </v-alert>
        <v-alert type="error" :value="isError">
          아이디와 비밀번호를 확인해주세요
        </v-alert>
        <v-card>
          <v-toolbar flat>
            <v-toolbar-title>Login</v-toolbar-title>
          </v-toolbar>
          <div class="pa-3">
            <v-text-field v-model="email" label="email"> </v-text-field>
            <v-text-field v-model="password" label="password" type="password">
            </v-text-field>
            <v-btn block large depressed color="teal" @click="login"
              >로그인</v-btn
            >
          </div>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
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
      isError: false,
      isLogin: false,
    };
  },
  methods: {
    login() {
      let selectedUser = null;
      this.allUsers.forEach((user) => {
        user.email == this.email ? (selectedUser = user) : null;
      });
      selectedUser == null
        ? (this.isError = true)
        : selectedUser.password !== this.password
        ? (this.isError = true)
        : (this.isLogin = true);
    },
  },
};
</script>

<style></style>
