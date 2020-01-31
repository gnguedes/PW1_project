<template>
  <div>
    <br />
    <h1>Área pessoal de {{getUser($route.params.userId).Name}}</h1>
    <br />
    <p>Name: {{getUser($route.params.userId).Name}}</p>
    <p>Email: {{getUser($route.params.userId).Email}}</p>
    <div>
      <v-btn to="/changeUser">Editar Perfil</v-btn>
      <br>
      <br />
      <v-btn v-if="visible" to="/adminUsers">Gerir Utilizadores</v-btn>
      <br />
      <br />
      <v-btn v-if="visible" to="/adminRoutes">Gerir Itinerários</v-btn>
      <br />
      <br />
      <v-btn v-if="visible" to="/adminLocations">Gerir Localizações</v-btn>
      <br />
      <br />
      <v-btn v-if="visible" to="/adminAddLoc">Adicionar Localizações</v-btn>
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
      listUsers: [],
      dialog: false
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
    //verifica se o user e o admin ou nao
    checkUserType() {
      if (this.loggedUserId == 0) {
        this.visible = true;
      }
    }
  }
};
</script>

<style></style>
