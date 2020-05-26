<template>
  <div>
    <h1>UsersDetail</h1>
    유저 번호 : {{ userId }}
    <v-btn @click="edit">수정</v-btn>
  </div>
</template>

<script>
export default {
  computed: {
    userId() {}
  },
  methods: {
    edit() {
      this.$router.push({
        name: "users-edit"
      });
    }
  }
};
</script>

<style>
</style>