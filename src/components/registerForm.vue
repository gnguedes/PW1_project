<template>
  <div id="frmRegister">
    <form v-on:submit.prevent="pushUser">
      <div class="form-row">
        <div class="col-md-6">
          <label>Nome de Utilizador</label>
          <input type="text" class="form-control" v-model="txtName" placeholder="Nome" />
        </div>
        <div class="col-md-6">
          <label>Email:</label>
          <input type="text" class="form-control" v-model="txtEmail" placeholder="Email" />
        </div>
        <div class="col-md-6">
          <label>Palavra-passe</label>
          <input
            type="password"
            class="form-control"
            v-model="txtPassword"
            placeholder="Palavra-passe"
          />
        </div>
        <div class="col-md-6">
          <label>Confirmar Palavra-passe</label>
          <input
            type="password"
            class="form-control"
            v-model="txtCheckPassword"
            placeholder="Confirmar palavra-passe"
          />
        </div>
        <br />
      </div>
      <div class="col-auto">
        <button type="submit" class="btn btn-primary">Registar</button>
      </div>
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
      if (this.txtPassword == this.txtCheckPassword && this.txtPassword != "") {
        this.userChecked = true;
      } else {
        alert("Erro na palavra-passe");
        this.userChecked = false;
      }
    },

    //verificar se o nome de utilizador esta disponivel
    checkUsername() {
      if (this.listUsers.length) {
        for (const user of this.listUsers) {
          if (user.Name == this.txtName) {
            (this.userChecked = false),
              alert("nome de utilizador indisponivel");
          } else {
            this.userChecked = true;
          }
        }
      }
    },
    //enviar o utilizador para a loja se nao houver erros
    pushUser() {
      this.checkPassword();
      this.checkUsername();
      if (this.userChecked == true) {
        this.$store.commit("ADD_USER", {
          id: this.getLastId() + 1,
          Name: this.txtName,
          Email: this.txtEmail,
          Password: this.txtPassword
        });
        this.$router.push({ name: "login" });
      } else {
        alert("erro no registo");
      }
    }
  }
};
</script>
