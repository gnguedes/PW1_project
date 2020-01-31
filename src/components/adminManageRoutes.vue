<template>
  <div>
    <span v-if="this.listRoutes.length===0">SEM ROTAS REGISTADAS</span>
    <div v-else>
      <br />
      <v-col cols="12" sm="6" md="3">
        <v-text-field label="Pesquisar Id" v-model="filterRouteId"></v-text-field>
        <v-text-field label="Pesquisar Tipo" v-model="filterRouteType"></v-text-field>
        <v-text-field label="Pesquisar Posição Inicial" v-model="filterRouteLocations"></v-text-field>
      </v-col>
      <br />
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Posição Inicial</th>
            <th scope="col">Localizações</th>
            <th scope="col">Operações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="route in filteredRoute" v-bind:key="route">
            <td>{{route.id}}</td>
            <td>{{route.Locations}}</td>
            <td>{{route.Type}}</td>
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
      filterRouteType: "",
      filterRouteLocations: "",
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
    filteredRoute() {
      return this.listRoutes.filter(route => {
        let filteredRouteIdResult = true;
        let filteredRouteTypeResult = true;
        let filteredRouteLocationsResult = true;
        //filtro de rota atraves do id
        if (this.filterRouteId !== "") {
          filteredRouteIdResult = route.id.includes( this.filterRouteId);
        }
        //filtro da rota atraves de localizações
        if (this.filterRouteType !== "") {
          filteredRouteTypeResult =
            route.Type.includes( this.filterRouteType);
        }
        //filtro da rota atraves da posicao inicial
        if (this.filterRouteLocations!== "") {
          filteredRouteLocationsResult = route.Locations.includes(this.filterRouteLocations);
        }
        return (
          filteredRouteIdResult &&
          filteredRouteTypeResult &&
          filteredRouteLocationsResult
        );
      });
    }
  }
};
</script>