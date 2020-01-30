<template>
  <div>
    <span v-if="this.listRoutes.length===0">SEM ROTAS REGISTADAS</span>
    <div v-else>
      <br />
      <v-col cols="12" sm="6" md="3">
        <v-text-field label="Pesquisar Id" v-model="filterRouteId"></v-text-field>
        <v-text-field label="Pesquisar Locatização" v-model="filterRouteLocation"></v-text-field>
        <v-text-field label="Pesquisar Nome" v-model="filterRouteName"></v-text-field>
      </v-col>
      <br />
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Nome</th>
            <th scope="col">Localizações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="route in filteredRoute" v-bind:key="route">
            <td>{{route.id}}</td>
            <td>{{route.StartLocation}}</td>
            <td>{{route.Locations}}</td>
            <td>
              <v-btn v-on:click="removeRoute(route.id)">REMOVER</v-btn>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  name: "routeList",
  data: function() {
    return {
      filterRouteId: "",
      filterRouteLocation: "",
      filterRouteName: "",
      listRoutes: []
    };
  },
  created() {
    this.listRoutes = this.$store.getters.getAllRoutes;
  },
  methods: {
    removeRoute(removedId) {
      if (confirm("Deseja mesmo remover esta rota?")) {
        this.listRoutes = this.listRoutes.filter(
          route => route.id != removedId,
          (this.$store.state.listRoutes = this.listRoutes)
        );
      }
    }
  },
  computed: {
    fitleredRoutes() {
      return this.listRoutes.filter(route => {
        let filteredRouteIdResult = true;
        let filteredRouteLocationResult = true;
        let filteredRouteNameResult = true;
        //filtro de rota atraves do id
        if (this.filterRouteId !== "") {
          filteredRouteIdResult = route.id == this.filterRouteId;
        }
        //filtro da rota atraves de localizações
        if (this.filterRouteLocation !== "") {
          filteredRouteLocationResult =
            route.location == this.filterRouteLocation;
        }
        //filtro da rota atraves do nome
        if (this.filteredRouteNameResult !== "") {
          filteredRouteNameResult = route.name == this.filterRouteName;
        }
        return (
          filteredRouteIdResult &&
          filteredRouteLocationResult &&
          filteredRouteNameResult
        );
      });
    }
  }
};
</script>