<template>
  <ul>
    <TodoListItem
      v-for="todo in todos"
      :key="todo.key"
      :vkey="todo.key"
      :todo="todo.todo"
      :checked="todo.checked"
      @onChecked="onChecked"
      @onDoubleClick="onRemove"
    ></TodoListItem>
  </ul>
</template>

<script>
import TodoListItem from "./TodoListItem";
export default {
  name: "TodoList",
  components: {
    TodoListItem
  },
  props: {
    todos: {
      type: Array
    }
  },
  methods: {
    onChecked(checked, key) {
      this.$emit("AppOnChecked", checked, key);
    },
    onRemove(key) {
      this.$emit("AppOnRemove", key);
    }
  }
};
</script>

<style>
</style>