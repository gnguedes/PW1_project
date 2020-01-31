<template>
  <div>
    <span v-if="this.listLocations.length===0">SEM LOCALIZAÇÔES</span>
    <div v-else>
      <br />
      <v-col cols="12" sm="6" md="3">
        <v-text-field label="Pesquisar Localização" v-model="filterLocation"></v-text-field>
      </v-col>
      <br />
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Nome</th>
            <th scope="col">Coordenadas</th>
            <th scope="col">Operações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="location in filteredLocation" v-bind:key="location">
            <td>{{location.id}}</td>
            <td>{{location.Name}}</td>
            <td>{{location.Coordenates}}</td>
            <td>
              <v-btn v-on:click="removeUser(location.Name)">REMOVER</v-btn>
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
      filterLocation: "",
      listLocations: []
    };
  },
  created() {
    this.listLocations = this.$store.getters.getAllLocations;
  },
  methods: {
    removeUser(name) {
      if (confirm("Deseja mesmo remover esta localização?")) {
        this.listLocations = this.listLocations.filter(
          location => location.Name !== name,
          (this.$store.state.listLocations = this.listLocations)
        );
      }
    }
  },
  computed: {
    filteredLocation() {
      return this.listLocations.filter(location => {
        let filteredLocationNameResult = true;
        if (this.filterLocation !== "") {
          filteredLocationNameResult = location.Name.includes(this.filterLocation);
        }
        return filteredLocationNameResult;
      });
    }
  }
};
</script>