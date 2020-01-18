<template>
  <v-card>
    <v-card-title>
      Lista de Utilizadores
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="users"
      :search="search"
    ></v-data-table>
  </v-card>
</template>
<script>
  export default {
    data () {
      return {
        search: '',
        headers: [
          {
            text: 'Nome de Utilizador',
            align: 'left',
            sortable: false,
            value: 'Name',
          },
          { text: 'Id', value: 'id' },
          { text: 'Nome', value: 'Name' },
          { text: 'Email', value: 'Email' },
        ],
        users: [
        ]
      }
    },
    created(){
        this.users=this.$store.getters.getAllUsers
    }
  }
</script>