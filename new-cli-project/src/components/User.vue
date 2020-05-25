<template>
  <div class="blue ligten-3 pa-3">
    <h1>User 컴포넌트</h1>
    <p>이름 : {{ name }}</p>
    <p>{{ getDateAndTime(createdAt) }}</p>
    <v-btn @click="changeName">이름 변경</v-btn>
    <hr />
    <v-layout row wrap>
      <v-flex xs12 sm6>
        <UserDetail :name="name" :address="address" :phone="phone" :hasDog="hasDog"></UserDetail>
      </v-flex>
      <v-flex xs12 sm6>
        <UserEdit :name="name" :address="address" :phone="phone" :hasDog="hasDog" @child="parents"></UserEdit>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import UserDetail from "./UserDetail";
import UserEdit from "./UserEdit";
import { dateFormat } from "../mixins/dateFormat";

export default {
  name: "User",
  components: {
    UserDetail,
    UserEdit
  },
  data() {
    return {
      name: "김민수",
      address: "서울시 서초구",
      phone: "123-123-123",
      hasDog: true,
      createdAt: null
    };
  },
  created() {
    this.createdAt = new Date();
  },
  methods: {
    changeName() {
      this.name = "변경";
    },
    parents(nextUser) {
      this.name = nextUser.name;
      this.address = nextUser.address;
      this.phone = nextUser.phone;
      this.hasDog = nextUser.hasDog;
    }
  },
  mixins: [dateFormat]
};
</script>