<template>
  <!-- Default form login -->
  <!-- Card -->
  <div class="card mx-xl-5">
    <!-- Card body -->
    <div class="card-body">
      <form v-on:submit.prevent="addUser">
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
      listUsers: [],
      userChecked: false,
      loggedUserId: ""
    };
  },
  created() {
    this.listUsers = this.$store.getters.getAllUsers;
    this.loggedUserId = this.$store.getters.getLoggedUserId;
  },
  methods: {
    checkPassword() {
      if (this.txtPassword == this.txtCheckPassword && this.txtPassword != "") {
        this.userChecked = true;
      } else {
        alert("Palavra-passe tem de ser igual");
        this.userChecked = false;
      }
    },
    checkUsername() {
      if (this.listUsers.length) {
        for (const user of this.listUsers) {
          if (user.Name == this.txtName) {
            this.userChecked = false;
            alert("nome de utilizador indisponivel");
          } else {
            this.userChecked = true;
          }
        }
      }
    },
    addUser() {
      this.checkUsername();
      if (this.userChecked == true) {
        for (const user of this.listUsers) {
          if (user.id == this.loggedUserId) {
            if (this.txtName != "") {
              user.Name = this.txtName;
            }
            if (this.txtEmail != "") {
              user.Email = this.txtEmail;
            }
            if (this.txtPassword != "") {
              this.checkPassword();
              if (this.userChecked == true) {
                user.Password = this.txtPassword;
              }
            }
          }
        }
      }
      alert("Alteração bem sucedida")
      this.$store.state.listUsers = this.listUsers;
    }
  }
};
</script>
