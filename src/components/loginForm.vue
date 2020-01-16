<template>
  <!-- Default form login -->
  <!-- Card -->
  <div class="card mx-xl-5">
    <!-- Card body -->
    <div class="card-body">
      <form v-on:submit.prevent="logUser">
        <p class="h4 text-center mb-4"></p>
        <label for="txtUsername" class="grey-text">Your username</label>
        <input
          type="text"
          id="txtUsername"
          class="form-control"
          v-model="txtName"
        />
        <br />
        <label for="defaultFormLoginPasswordEx" class="grey-text"
          >Your password</label
        >
        <input
          type="password"
          id="defaultFormLoginPasswordEx"
          class="form-control"
          v-model="txtPassword"
        />
        <div class="text-center mt-4">
          <button class="btn btn-indigo" type="submit">Login</button>
          <router-link to="/register">Não tem conta? Clique aqui</router-link>
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
          } else {
            this.checked = false;
            alert("Credenciais incorrectas");
          }
        }
      }
    },
    logUser() {
      this.checkCredentials();
      if (this.checked == true) {
        this.$route.push({ name: "home" });
        this.$store.state.loggedUserId = this.loggedId;
      }
    }
  }
};
</script>

<style></style>
