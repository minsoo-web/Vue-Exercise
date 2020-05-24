<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <User></User>        
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import User from "./components/User";
export default {
  name: "App",
  components: {
    User
  },
  data() {
    return {};
  },
};
</script>
