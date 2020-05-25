<template>
  <form @submit="onSubmit">
    <input type="text" v-model="nextTodo" placeholder="What are you going todo?" />
    <input type="submit" value="추가" />
  </form>
</template>

<script>
export default {
  name: "TodoInput",
  data() {
    return {
      nextTodo: ""
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      this.$emit("onSubmit", this.nextTodo);
      this.nextTodo = "";
    }
  }
};
</script>

<style>
</style>