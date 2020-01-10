<template>
  <div id="frmRegister">
    <form v-on:submit.prevent="pushUser">
      <label for="txtUsername">Nome de Utilizador:</label>
      <input id="txtUsername" type="text" v-model="txtName" />
      <br />

      <label for="txtEmail">Email:</label>
      <input type="email" id="txtEmail" v-model="txtEmail" />
      <br />

      <label for="txtPassword">Palavra-passe:</label>
      <input type="password" id="txtPassword" v-model="txtPassword" />
      <br />
      <label for="txtCheckPassword">Confirmar palavra-passe:</label>
      <input type="password" id="txtCheckPassword" v-model="txtCheckPassword" />

      <br />

      <input type="submit" value="Registar" />
    </form>
  </div>
</template>
<script>
export default {
  name: "UserList",
  data: function() {
    return {
      id: 0,
      txtName: "",
      txtEmail: "",
      txtPassword: "",
      txtCheckPassword: "",
      listUsers: [],
      userChecked: false
    };
  },
  created() {
    this.listUsers = this.$store.getters.getAllUsers;
  },

  methods: {
    //id do ultimo utilizador
    getLastId() {
      if (this.listUsers.length) {
        return this.listUsers[this.listUsers.length - 1].id;
      } else {
        return 0;
      }
    },
    //verifica se as passwords sao iguais
    checkPassword() {
      if (this.txtPassword == this.txtCheckPassword) {
        alert("passwords match");
        this.userChecked = true;
      } else {
        alert("Passwords têm de ser iguais");
        this.userChecked = false;
      }
    },
    //adicionar o utilizador ao array
    addUser() {
      this.listUsers.push({
        id: this.getLastId() + 1,
        txtName: this.txtName,
        txtEmail: this.txtEmail,
        txtPassword: this.txtPassword
      });
    },
    //verificar se o nome de utilizador esta disponivel
    checkUsername() {
      if (this.listUsers.length) {
        for (const user of this.listUsers) {
          if (user.txtName == this.txtName) {
            (this.userChecked = false),
              alert("nome de utilizador indisponivel");
          } else {
            this.userChecked = true;
          }
        }
      }
    },
    //enviar o utilizador para a loja de nao houver erros
    pushUser() {
      this.checkPassword();
      this.checkUsername();
      if (this.userChecked == true) {
        this.addUser();
        //this.$store.commit("ADD_USER", this.listUsers);
        this.$router.push({ name: "login" });
      } else {
        alert("erro no registo");
      }
    }
  }
};
</script>
