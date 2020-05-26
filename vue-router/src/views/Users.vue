<template>
  <v-layout row wrap pt-5 text-x5 center style="max-width:500px; margin :0 auto">
    <v-flex xs12>
      <h1>Users</h1>
      <p>유저를 검색해 주세요</p>
    </v-flex>
    <v-flex xs12>
      <v-text-field label="유저 번호를 입력하세요" v-model="userId"></v-text-field>
      <v-btn
        @click="$router.push({
          name : 'users-detail',
          params : {
              id : userId
          }
      })"
      >검색</v-btn>
    </v-flex>
    <v-flex xs12>
      <router-view></router-view>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      userId: null
    };
  }
};
</script>

<style>
</style>