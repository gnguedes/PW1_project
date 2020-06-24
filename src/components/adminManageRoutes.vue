<template>
  <div>
    <span v-if="this.listRoutes.length===0">SEM ROTAS REGISTADAS</span>
    <div v-else>
      <br />
      <v-row>
        <v-text-field class="px-2" label="Pesquisar Id" v-model="filterRouteId"></v-text-field>
        <v-text-field class="px-2" label="Pesquisar Tipo" v-model="filterRouteType"></v-text-field>
        <v-text-field class="px-2" label="Pesquisar Posição Inicial" v-model="filterRouteLocations"></v-text-field>
      </v-row>
      <br />
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Posição Inicial</th>
            <th scope="col">Modo Transporte</th>
            <th scope="col">Tipo Rota</th>
            <th scope="col">Nº dias</th>
            <th scope="col">Nº Pessoas</th>
            <th scope="col">Operações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="route in filteredRoute" v-bind:key="route">
            <td>{{route.id_rota}}</td>
            <td>{{route.ponto_partida}}</td>
            <td>{{route.modo_transporte}}</td>
            <td>{{route.tipo_rota}}</td>
            <td>{{route.num_dias}}</td>
            <td>{{route.num_pessoas}}</td>
            <td>
              <v-btn v-on:click="removeRoute(route.id_rota)">REMOVER</v-btn>
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
    this.loadRoutes();
  },
  methods: {
    async removeRoute(removeId) {
      if (confirm("Deseja mesmo remover esta rota?")) {
        try {
          await this.$http.delete(`/routes/${removeId}`);
          const index = this.listRoutes.findIndex(route => route.id_rota == removeId)
          this.listRoutes.splice(index, 1)
        } catch (error) {
          alert(error);
        }
      }
    },
    async loadRoutes() {
      try {
        const request = await this.$http.get("/routes/");
        this.listRoutes = request.data.content;
      } catch (error) {
        alert(error);
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
          filteredRouteIdResult = route.id.includes(this.filterRouteId);
        }
        //filtro da rota atraves de localizações
        if (this.filterRouteType !== "") {
          filteredRouteTypeResult = route.Type.includes(this.filterRouteType);
        }
        //filtro da rota atraves da posicao inicial
        if (this.filterRouteLocations !== "") {
          filteredRouteLocationsResult = route.Locations.includes(
            this.filterRouteLocations
          );
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