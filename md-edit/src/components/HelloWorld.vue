<template>
  <div class="HelloWorld">
    <textarea :value="input" @input="update"></textarea>
    <div class="result" v-html="compiledMarkdown"></div>
  </div>
</template>

<script src="https://unpkg.com/marked@0.3.6"></script>
<script src="https://unpkg.com/lodash@4.16.0"></script>
<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      input: "# hello"
    };
  },
  computed: {
    compiledMarkdown: function() {
      return marked(this.input, { sanitize: true });
    }
  },
  methods: {
    update: _.debounce(function(e) {
      this.input = e.target.value;
    }, 300)
  }
};
</script>

<style scoped>
.HelloWorld {
  border: 1px solid;
  display: flex;
  height: 100vh;
}

textarea {
  border: none;
  border-right: 1px solid #ccc;
  outline: none;
  resize: none;
  background: #f4f4f4;
  padding: 20px;
  font-size: 14px;
}
.result {
  padding: 20px;
}
</style>
