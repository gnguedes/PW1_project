<template>
  <div class="card mx-xl-5">
    <!-- Card body -->
    <div class="card-body">
      <div>
        <form v-on:submit.prevent="pushLocation">
          <div class="form-row">
            <div class="col-md-6">
              <label>Nome:</label>
              <input type="text" class="form-control" v-model="txtLocationName" placeholder="Nome"/>
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
              <option value="museum">Museus</option>
              <option value="restaurant">Restaurantes</option>
              <option value="tourist_attraction">Monumentos e atrações turísticas</option>
              <option value="art_gallery">Galerias de arte</option>
            </select>
          </div>
          <div class="col-md-6">
            <label>Imagem</label>
            <input type="url" class="form-control" v-model="urlImg" placeholder="Link da imagem" />
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
      listLocation: [],
      locationChecked: false
    };
  },
  created() {
    this.listLocation = this.$store.getters.getAllLocations;
  },
  methods: {
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
            this.locationChecked = false
            alert("nome de localização indisponivel");
          } else {
            this.locationChecked = true;
          }
        }
      }
    },
    getCoordenates() {
      let geocoder = new google.maps.Geocoder();
      geocoder.geocode({ address: this.txtLocationName }, (results2, status) => {
        if (status == "OK") {
          return results2[0].geometry.location;
        }
      });
    },

    pushLocation() {
      this.checkLocationName();
      alert(this.locationChecked)
      if (this.locationChecked == true) {
        this.$store.commit("ADD_LOCATION", {
          id: this.getLastLocationId() + 1,
          Name: this.txtLocationName,
          Coordenates: this.getCoordenates(),
          Description: this.txtLocDescription,
          Type: this.typeLoc,
          imgLink: this.urlImg
        });
        this.$router.push({ name: "adminLocations" });
      } else {
        alert("erro no registo");
      }
    }
  }
};
</script>
