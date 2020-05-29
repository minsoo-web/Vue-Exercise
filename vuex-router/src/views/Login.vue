<template>
  <v-container style="max-width: 450px" fill-height>
    <v-layout align-center>
      <v-flex xs12>
        <v-card>
          <v-toolbar flat>
            <v-toolbar-title>Login</v-toolbar-title>
          </v-toolbar>
          <div class="pa-3">
            <v-text-field v-model="email" label="email"> </v-text-field>
            <v-text-field v-model="password" label="password" type="password">
            </v-text-field>
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
    };
  },
};
</script>

<style></style>
