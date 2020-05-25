<template>
  <div>
    <TodoInput @onSubmit="onSubmit"></TodoInput>
    <TodoList :todos="todos" @AppOnChecked="onChecked" @AppOnRemove="onRemove"></TodoList>
  </div>
</template>

<script>
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
export default {
  name: "App",
  data() {
    return {
      todos: [],
      key: 0
    };
  },
  components: {
    TodoInput,
    TodoList
  },
  methods: {
    onSubmit(nextTodo) {
      const nextTodos = [
        ...this.todos,
        {
          key: this.key,
          todo: nextTodo,
          checked: false
        }
      ];
      this.todos = nextTodos;
      this.key++;
    },
    onChecked(checked, key) {
      this.todos.forEach(todo =>
        todo.key === key ? (todo.checked = checked) : null
      );
    },
    onRemove(key) {
      this.todos = this.todos.filter(todo => todo.key !== key);
    }
  }
};
</script>
