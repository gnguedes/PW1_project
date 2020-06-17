<template>
  <div>
    <span v-if="this.listLocations.length===0">SEM LOCALIZAÇÔES ADICIONADAS</span>
    <div v-else>
      <br />
      <v-col cols="12" sm="6" md="3">
        <v-text-field label="Pesquisar nome" v-model="filterLocationName"></v-text-field>
      </v-col>
      <br />
      <v-row>
        <v-col v-for="location in filteredLocation" v-bind:key="location" cols="12" sm="6" md="3">
          <v-card >
            <v-img class="white--text align-end" :src="location.imgLink"></v-img>
            <v-list-item three-line>
              <v-list-item-content>
                <div class="overline mb-4">{{location.Name}}</div>
                <v-list-item-title class="headline mb-1">Tipo de localização: {{location.Type}}</v-list-item-title>
                <v-list-item-subtitle>Descrição: {{location.Description}}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-card-actions>
              <v-btn text>Ver no mapa</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>
<script>
export default {
  name: "routeList",
  data: function() {
    return {
      filterLocationName: "",
      listRoutes: [],
      listLocations: []
    };
  },
  created() {
    this.listLocations = this.$store.getters.getAllLocations;
  },
  methods:{
    async loadLocations(){
      
    }
  },
  computed: {
    filteredLocation() {
      return this.listLocations.filter(location => {
        let filteredLocationNameResult = true;
        if (this.filterLocationName !== "") {
          filteredLocationNameResult = location.Name.includes(
            this.filterLocationName
          );
        }
        return filteredLocationNameResult;
      });
    }
  }
};
</script>