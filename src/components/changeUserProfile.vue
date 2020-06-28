<template>
  <!-- Default form login -->
  <!-- Card -->
  <div class="card mx-xl-5">
    <!-- Card body -->
    <div class="card-body">
      <form v-on:submit.prevent="addUser()">
        <p class="h4 text-center mb-4"></p>
        <label for="txtUsername" class="grey-text">Nome de utilizador</label>
        <input type="text" id="txtUsername" class="form-control" v-model="txtName" />
        <br />
        <label for="txtEmail" class="grey-text">Email</label>
        <input type="text" id="txtEmail" class="form-control" v-model="txtEmail" />
        <br />
        <label for="newPassword" class="grey-text">Palavra-passe</label>
        <input type="password" id="newPassword" class="form-control" v-model="txtPassword" />
        <br />
        <label for="checkPassword" class="grey-text">Confirmar a palavra-passe</label>
        <input type="password" id="checkPassword" class="form-control" v-model="txtCheckPassword" />
        <div class="text-center mt-4">
          <v-btn type="submit">Guardar</v-btn>
        </div>
      </form>
    </div>
  </div>
  <!-- Default form login -->
</template>
<script>
export default {
  name: "newUser",
  data: function() {
    return {
      txtName: "",
      txtEmail: "",
      txtPassword: "",
      txtCheckPassword: "",
      userChecked: false,
      loggedUserId: ""
    };
  },
  created() {
    this.loggedUserId = this.$store.getters.getLoggedUserId;
  },
  methods: {
    reset() {
      this.txtName = "";
      this.txtEmail = "";
      this.txtPassword = "";
      this.txtCheckPassword = "";
    },
    checkPassword() {
      if (this.txtPassword == this.txtCheckPassword && this.txtPassword != "") {
        this.userChecked = true;
      } else {
        alert("Palavra-passe tem de ser igual");
        this.userChecked = false;
      }
    },
    async addUser() {
      this.checkPassword();
      if (this.userChecked) {
        try {
          await this.$http.put(`/users/${this.loggedUserId}`, {
            name: this.txtName,
            email: this.txtEmail,
            password: this.txtPassword
          });
          this.reset();
          const request = await this.$http.get("/users");
          const users = request.data.content.map(user => {
            return {
              id: user.id,
              Name: user.name,
              Email: user.email,
              Password: user.password
            };
          });
          this.$store.state.listUsers = users;
          alert(this.$store.state.listUsers);
          alert("Alteração bem sucedida");
        } catch (error) {
          alert("Erro em guardar Utilizador");
        }
      }
    }
  }
};
</script>
