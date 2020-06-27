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
            <th scope="col">Descrição</th>
            <th scope="col">Tipo Localização</th>
            <th scope="col">Operações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="localizacao in filteredLocation" v-bind:key="localizacao">
            <td>{{localizacao.id_localizacao}}</td>
            <td>{{localizacao.nome}}</td>
            <td>{{localizacao.descricao}}</td>
            <td>{{localizacao.tipo_localizacao}}</td>
            <td>
              <v-btn v-on:click="removeLocation(localizacao.id_localizacao)">REMOVER</v-btn>
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
    this.loadLocations()
  },
  methods: {
    async removeLocation(removeId) {
      if (confirm("Deseja mesmo remover esta localização?")) {
        try {
          await this.$http.delete(`/location/${removeId}`);
          const index = this.listLocations.findIndex(localizacao => localizacao.id_localizacao == removeId)
          this.listLocations.splice(index, 1)
        } catch (error) {
          alert(error);
        }
      }
    },
    async loadLocations() {
      try {
        const request = await this.$http.get("/location");
        this.listLocations = request.data.content;
      } catch (error) {
        alert(error);
      }
    }
  },
  computed: {
    filteredLocation() {
      return this.listLocations.filter(localizacao => {
        let filteredLocationNameResult = true;
        if (this.filterLocation !== "") {
          filteredLocationNameResult = localizacao.nome.includes(this.filterLocation);
        }
        return filteredLocationNameResult;
      });
    }
  }
};
</script>