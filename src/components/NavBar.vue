<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark" fixed="top">
      <b-navbar-brand href="#">Smart_route</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse type="dark" id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/Home">Home</b-nav-item>
          <b-nav-item >Disabled</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <em v-for="user in filterUsers" :key="user.id">
                <v-btn :to="{name: 'users', params: {userId: user.id}}">{{user.Name}}</v-btn>
              </em>
            </template>
            <b-dropdown-item v-on:click="logoutUser()">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
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

