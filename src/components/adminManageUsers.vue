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
             <th scope="col">Operações</th> 
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in filteredUser" v-bind:key="user">
            <td>{{user.id_user}}</td>
            <td>{{user.name}}</td>
            <td>{{user.email}}</td>
            <td>
              <v-btn v-on:click="removeUser(user.id_user)">REMOVER</v-btn>
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
    this.loadUsers();
  },
  methods:{
    async removeUser(removeId){
      if (confirm("Deseja mesmo remover o utilizador?")) {
        try {
          await this.$http.delete(`/users/${removeId}`);
          const index = this.listOfUsers.findIndex(user => user.id_user == removeId)
          this.listOfUsers.splice(index, 1)
        } catch (error) {
          alert(error);
        }
      }
    },
    async loadUsers() {
      try {
        const request = await this.$http.get("/users");
        this.listOfUsers = request.data.content;
      } catch (error) {
        alert(error);
      }
    }
  },
  computed:{
      filteredUser(){
        return this.listOfUsers.filter(user => {
        let filteredUserResult = true;
        if (this.filterName !== "") {
          filteredUserResult = user.Name.includes(this.filterName);
        }
        return filteredUserResult;
      });
    }
  }
};
</script>
