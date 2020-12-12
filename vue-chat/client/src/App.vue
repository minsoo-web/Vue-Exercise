<template>
  <div id="app">
    <h1>Chatroom</h1>
    <p class="username">Username: {{ username }}</p>
    <p class="online">Online: {{ users.length }}</p>

    <chat-room v-on:sendMessage="this.sendMessage" :messages="this.messages" />
  </div>
</template>

<script>
import io from "socket.io-client";
import ChatRoom from "@/components/ChatRoom.vue";
// import ChatRoom from './components/ChatRoom.vue';

export default {
  name: "App",
  components: {
    ChatRoom
  },
  data() {
    return {
      username: "",
      socket: io("http://127.0.0.1:3000"),
      messages: [],
      users: []
    };
  },
  methods: {
    joinServer() {
      this.socket.on("loggedIn", data => {
        this.messages = data.messages;
        this.users = data.users;
        this.socket.emit("newuser", this.username);
      });

      this.listen();
    },

    listen() {
      this.socket.on("msg", message => {
        this.messages.push(message);
      });

      this.socket.on("userOnline", user => {
        this.users.push(user);
      });

      this.socket.on("userLeft", user => {
        this.users.splic(this.users.indexOf(user), 1);
      });
    },
    sendMessage(message) {
      this.socket.emit("msg", message);
    }
  },
  mounted() {
    console.log(this.users);
    this.username = prompt("What is your username", "Anonymous");

    if (!this.username) {
      this.username = "Anonymous";
    }

    this.joinServer();
  }
};
</script>

<style lang="scss">
body {
  font-family: "Avendir", Arial, Helvetica, sans-serif;
  color: #2c3e50;
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  height: 100vh;
}
</style>
