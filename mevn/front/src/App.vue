<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <NavBar></NavBar>
    <b-container>
      <router-view />
    </b-container>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
export default {
  components: {
    NavBar,
  },
};
</script>

<style lang="scss"></style>
