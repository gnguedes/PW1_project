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
      <tr v-for="route in filteredRoute" v-bind:key="route">
        <v-card class="mx-auto" max-width="344" outlined>
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-4">{{route.id}}</div>
              <v-list-item-title class="headline mb-1">Inicio em {{route.startPosition}}</v-list-item-title>
              <v-list-item-subtitle>Locais visitados: {{route.locations}}</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
          </v-list-item>

          <v-card-actions>
            <v-btn text>Ver no mapa</v-btn>
          </v-card-actions>
        </v-card>
      </tr>
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
  }
};
</script>