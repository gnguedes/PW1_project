<template>
  <div>
    <br>
    <h1>Área pessoal de {{getUser($route.params.userId).Name}}</h1>
    <br />
    <p>Name: {{getUser($route.params.userId).Name}}</p>
    <p>Email: {{getUser($route.params.userId).Email}}</p>
    <div>
      <v-btn v-if="visible" to="/adminUsers">Gerir Utilizadores</v-btn><br>
      <br>
      <v-btn v-if="visible" to="/adminRoutes">Gerir Itinerários</v-btn>
      <v-row>
        <v-dialog v-model="dialog" persistent max-width="290">
          <template v-slot:activator="{ on }">
            <v-btn color="primary" dark v-on="on">Editar perfil</v-btn>
          </template>
          <v-card>
            <v-card-title class="headline">Edição de perfil</v-card-title>
            <v-card-text>colocar aqui o form de alteração de perfil</v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="green darken-1" text @click="dialog = false">Cancelar</v-btn>
              <v-btn color="green darken-1" text @click="dialog = false">Guardar</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
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
