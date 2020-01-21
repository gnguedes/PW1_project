<template>
  <!-- Renders the navbar with the respective router-links -->
  <nav class="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
    <a class="navbar-brand">smart_route</a>
    <ul class="navbar-nav">
      <li class="nav-item">
        <router-link to="/home">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/">back to login</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/register">back to register</router-link>
      </li>
      <li class="nav-item" v-for="user in filterUsers" :key="user.id">
        <router-link :to="{name: 'users', params: {userId: user.id}}">{{user.Name}}</router-link>
      </li>
      <v-btn color v-on:click="logoutUser()">Logout</v-btn>
    </ul>
  </nav>
</template>
<script>
export default {
  data: function() {
    return {
      loggedUserId: "",
      listUsers: []
    };
  },
  created() {
    this.listUsers = this.$store.getters.getAllUsers;
    this.loggedUserId = this.$store.getters.getLoggedUserId;
  },
  methods: {
    logoutUser() {
      let msg = confirm("Gostaria de terminar a sessão?");
      if (msg == true) {
        (this.$store.state.loggedUserId = ""), this.$router.push({ path: "/" });
      }
    }
  },
  computed: {
    filterUsers() {
      return this.listUsers.filter(user => {
        let filteredUserResult = true;
        if (this.loggedUserId !== "") {
          filteredUserResult = user.id == this.loggedUserId;
        }
        return filteredUserResult;
      });
    }
  }
};
</script>
