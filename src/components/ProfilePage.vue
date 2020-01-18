<template>
  <div>
    <h1>Área pessoal de {{getUser($route.params.userId).Name}}</h1>
    <br />
    <p>Name: {{getUser($route.params.userId).Name}}</p>
    <p>Email: {{getUser($route.params.userId).Email}}</p>
    <div>
      <v-btn to="/adminPage">goto Admin</v-btn>
      <v-btn>Editar</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: "listUser",
  data: function() {
    return {
      visible: false,
      loggedUserId: "",
      listUsers: []
    };
  },
  created() {
    this.listUsers = this.$store.getters.getAllUsers;
    this.loggedUserId = this.$store.getters.getLoggedUserId;
    this.checkUserType();
  },
  methods: {
    getUser(id) {
      return this.listUsers.filter(user => user.id === id)[0];
    },
    checkUserType() {
      if (this.loggedUserId == 0) {
        this.visible = true;
      }
    }
  }
};
</script>

<style></style>
