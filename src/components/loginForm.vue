<template>
  <!-- Default form login -->
  <!-- Card -->
  <div class="card mx-xl-5">
    <!-- Card body -->
    <div class="card-body" >
      <form v-on:submit.prevent="logUser">
        <p class="h4 text-center mb-4"></p>
        <label for="txtUsername" class="grey-text">Nome de utilizador</label>
        <input type="text" id="txtUsername" class="form-control" v-model="txtName" />
        <br />
        <label for="defaultFormLoginPasswordEx" class="grey-text">Palavra-passe</label>
        <input
          type="password"
          id="defaultFormLoginPasswordEx"
          class="form-control"
          v-model="txtPassword"
        />
        <div class="text-center mt-4">
          <v-btn type="submit">Login</v-btn>
          <br>
          <br>
          <v-btn to="/register">Não tem conta? Clique aqui</v-btn>
        </div>
      </form>
    </div>
  </div>
  <!-- Default form login -->
</template>

<script>
export default {
  name: "loggedUser",
  data: function() {
    return {
      loggedId: "",
      txtName: "",
      txtPassword: "",
      listUsers: [],
      checked: false
    };
  },
  created() {
    this.listUsers = this.$store.getters.getAllUsers;
  },
  methods: {
    checkCredentials() {
      if (this.listUsers.length) {
        for (const user of this.listUsers) {
          if (user.Name == this.txtName && user.Password == this.txtPassword) {
            this.checked = true;
            this.loggedId = user.id;
            break;
          } else {
            this.checked = false;
          }
        }
      }
    },
    logUser() {
      this.checkCredentials();
      if (this.checked == true) {
        this.$router.push({ name: "creatingRoute" });
        this.$store.state.loggedUserId = this.loggedId;
      } else {
        alert("Credenciais incorrectas");
      }
    },
  }
};
</script>