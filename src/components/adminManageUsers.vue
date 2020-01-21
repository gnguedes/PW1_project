<template>
  <div>
    <span v-if="this.listOfUsers.length===0">SEM PESSOAS REGISTADAS</span>
    <div v-else>
      <br>
      <v-col cols="12" sm="6" md="3">
          <v-text-field
            label="Pesquisar utilizador"
            v-model="filterName"
          ></v-text-field>
        </v-col>
      <br>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Nome</th>
            <th scope="col">E-mail</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in filteredUser" v-bind:key="user">
            <td>{{user.id}}</td>
            <td>{{user.Name}}</td>
            <td>{{user.Email}}</td>
            <td>
              <v-btn v-on:click="removeUser(user.Name)">REMOVER</v-btn>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  name: "listOfUser",
  data: function() {
    return {
      filterName: "",
      listOfUsers:[],
    };
  },
  created() {
    this.listOfUsers = this.$store.getters.getAllUsers;
  },
  methods:{
    removeUser(name){
      if (confirm("Deseja mesmo remover o utilizador?")) {
        this.listOfUsers = this.listOfUsers.filter(
         user => user.Name !== name,
         this.$store.state.listUsers = this.listOfUsers
        );
      }
    }
  },
  computed:{
      filteredUser(){
        return this.listOfUsers.filter(user => {
        let filteredUserResult = true;
        if (this.filterName !== "") {
          filteredUserResult = user.Name == this.filterName;
        }
        return filteredUserResult;
      });
    }
  }
};
</script>
