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
      <li class="nav-item">
        <router-link to="/User/:userId">Perfil</router-link>
      </li>
      <li class="nav-item" v-for="user in listUsers" :key="user.id">
        <router-link
          :to="{name: 'user', params: {userId: user.id}}"
        >{{user.txtName}}</router-link>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  data: function() {
    return {
      listUsers: [],
    };
  },
  created() {
    this.listUsers = this.$store.getters.getAllUsers
  }
};
</script>
