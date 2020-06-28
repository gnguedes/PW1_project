<template>
  <div class="card mx-xl-5">
    <!-- Card body -->
    <div class="card-body">
      <div>
        <form v-on:submit.prevent="addLocation()">
          <div class="form-row">
            <div class="col-md-6">
              <label>Nome:</label>
              <input type="text" class="form-control" v-model="txtLocationName" placeholder="Nome" />
            </div>
            <div class="col-md-6">
              <label>Descrição</label>
              <input
                type="text"
                class="form-control"
                v-model="txtLocDescription"
                placeholder="Descrição"
              />
            </div>
          </div>
          <div class="form-group">
            <label for="type">Tipo de localização</label>
            <select class="form-control" id="type" v-model="typeLoc">
              <option
                v-for="locationType in locationTypes"
                :value="locationType.id_tipo_localizacao"
                :key="locationType.id_tipo_localizacao"
              >{{ locationType.tipo_localizacao }}</option>
            </select>
          </div>
          <div class="col-md-12">
            <label>Imagem</label>
            <input type="url" class="form-control" v-model="urlImg" placeholder="Link da imagem" />
          </div>
          <div class="form-row">
            <div class="col-md-6">
              <label>Longitude</label>
              <input type="text" class="form-control" v-model="latitude" placeholder="Longitude" />
            </div>
            <div class="col-md-6">
              <label>Latitude</label>
              <input type="text" class="form-control" v-model="longitude" placeholder="Latitude" />
            </div>
          </div>
          <div class="form-group row">
            <div class="col-auto">
              <button type="submit" class="btn btn-primary">Adicionar</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "LocationList",
  data: function() {
    return {
      id: 0,
      txtLocationName: "",
      txtLocDescription: "",
      typeLoc: "",
      urlImg: "",
      longitude: "",
      latitude: "",
      listLocation: [],
      locationTypes: [],
      locationChecked: false
    };
  },
  created() {
    this.listLocation = this.$store.getters.getAllLocations;
    this.loadRouteTypes();
  },
  methods: {
    reset() {
      this.txtLocationName = "";
      this.txtLocDescription = "";
      this.typeLoc = "";
      this.urlImg = "";
    },
    getLastLocationId() {
      if (this.listLocation.length) {
        return this.listLocation[this.listLocation.length - 1].id;
      } else {
        return 0;
      }
    },
    checkLocationName() {
      if (this.listLocation.length) {
        for (const location of this.listLocation) {
          if (location.Name == this.txtLocationName) {
            this.locationChecked = false;
            alert("nome de localização indisponivel");
          } else {
            this.locationChecked = true;
          }
        }
      }
    },
    getCoordenates() {
      let geocoder = new google.maps.Geocoder();
      geocoder.geocode(
        { address: this.txtLocationName },
        (results2, status) => {
          if (status == "OK") {
            return results2[0].geometry.location;
          }
        }
      );
    },
    async addLocation() {
      try {
        await this.$http.post("/location", {
          nome: this.txtLocationName,
          descricao: this.txtLocDescription,
          id_tipo_localizacao: this.typeLoc,
          imagem: this.urlImg,
          latitude: this.latitude,
          longitude: this.longitude
        });
        this.reset();
      } catch (error) {
        alert("Erro em guardar a localização");
      }
    },
    async loadRouteTypes() {
      try {
        const request = await this.$http.get("/locationType/");
        this.locationTypes = request.data.content;
      } catch (error) {
        alert(error);
      }
    }
  }
};
</script>
