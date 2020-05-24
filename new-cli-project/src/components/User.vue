<template>
  <div class="blue ligten-3 pa-3">
    <h1>User 컴포넌트</h1>
    <p>이름 : {{ name }}</p>
    <v-btn @click="changeName">이름 변경</v-btn>
    <hr />
    <v-layout row wrap>
      <v-flex xs12 sm6>
        <UserDetail :prop_name="name"></UserDetail>
      </v-flex>
      <v-flex xs12 sm6>
        <UserEdit></UserEdit>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import UserDetail from "./UserDetail";
import UserEdit from "./UserEdit";
export default {
  name: "User",
  components: {
    UserDetail,
    UserEdit
  },
  data() {
    return {
      name: "뷰제이에스"
    };
  },
  methods: {
    changeName() {
      this.name = "변경";
    }
  }
};
</script>