<template>
  <li @dblclick="onRemove">
    <span v-if="checked">{{vkey}}</span>
    <input type="checkbox" v-model="itemChecked" />
    {{todo}}
  </li>
</template>

<script>
export default {
  name: "TodoListItem",
  props: {
    todo: {
      type: String,
      required: true
    },
    checked: {
      type: Boolean,
      required: true
    },
    vkey: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      itemChecked: this.checked,
      key: this.vkey
    };
  },
  watch: {
    itemChecked: function(newVal) {
      if (newVal == true) {
        this.onChecked();
      }
    }
  },
  methods: {
    onChecked() {
      this.$emit("onChecked", this.itemChecked, this.key);
    },
    onRemove() {
      this.$emit("onDoubleClick", this.key);
    }
  }
};
</script>

<style>
</style>