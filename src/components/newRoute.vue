<template>
  <div class="card mx-xl-5">
    <!-- Card body -->
    <div class="card-body">
      <div>
        <form>
          <div class="form-group">
            <label for="Start">Seleccione o ponto de partida</label>
            <select class="form-control" id="Start" v-model="startPosition">
              <option value="currentPosition">Posição corrente</option>
              <option value="Hotel Aliados">Hotel Aliados</option>
              <option value="Hotel Cristal Porto">Hotel Cristal Porto</option>
              <option value="Hotel Eurostarts Heroismo">Hotel Eurostars Heroismo</option>
            </select>
          </div>

          <div class="form-group">
            <label for="travel">Modo de transporte</label>
            <select class="form-control" id="travel" v-model="travelMode">
              <option value="DRIVING">Carro</option>
              <option value="WALKING">Caminhar</option>
              <option value="BICYCLING">Bicicleta</option>
            </select>
          </div>
          <div class="form-row">
            <div class="col-md-6">
              <label>Número de pessoas</label>
              <input
                type="number"
                class="form-control"
                v-model="numPeople"
                placeholder="Número de pessoas"
                min="1"
              />
            </div>
            <div class="col-md-6">
              <label>Número de dias</label>
              <input
                type="number"
                class="form-control"
                v-model="numDays"
                placeholder="Número de dias"
                min="1"
              />
            </div>
          </div>
          <div class="form-group">
            <label for="type">Tipo de Rota</label>
            <select class="form-control" id="type" v-model="typeRoute">
              <option value="museum">Museus</option>
              <option value="restaurant">Restaurantes</option>
              <option value="tourist_attraction">Monumentos e atrações turísticas</option>
              <option value="art_gallery">Galerias de arte</option>
            </select>
          </div>
          <div class="form-group row">
            <div class="col-auto">
              <button type="submit" class="btn btn-primary" @click="initMap()">Criar rota</button>
            </div>
            <div class="col-auto">
              <button type="submit" class="btn btn-secondary" @click="reset()">Reiniciar mapa</button>
            </div>
          </div>
        </form>
        <div class="google-map" id="myMap"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "newRoute",
  data: function() {
    return {
      numPeople: 0,
      numDays: 0,
      typeRoute: "",
      startPosition: "",
      locationContent: "",
      listLocations: [],
      filteredlistLocations: [],
      filteredlistLocationsExtra: [],
      travelMode: "",
      routeChecked: false,
      listRoutes: []
    };
  },
  created() {
    this.listRoutes = this.$store.getters.getAllRoutes;
    this.listLocations = this.$store.getters.getAllLocations;
  },
  methods: {
    reset() {
      this.filteredlistLocations = [];
      this.startPosition = "";
      this.travelMode = "";
      this.numPeople = 0;
      this.numDays = 0;
    },
    //adicionar a rota a loja
    addRoute() {
      if (this.routeChecked == true) {
        this.$store.commit("ADD_ROUTE", {
          id: this.getLastRouteId() + 1,
          StartPosition: this.startPosition,
          Locations: this.filteredlistLocationsExtra,
          Type: this.typeRoute
        });
      } else {
        alert("Erro em guardar a rota");
      }
    },

    //verificar o id da ultima rota adicionada a loja
    getLastRouteId() {
      if (this.listRoutes.length) {
        return this.listRoutes[this.listRoutes.length - 1].id;
      } else {
        return 0;
      }
    },
    //verifica que localizaçoes correspondem a categoria pretendida
    filterLocations() {
      if (this.listLocations.length) {
        for (const locale of this.listLocations) {
          if (locale.Type == this.typeRoute) {
            this.filteredlistLocations.push({
              location: locale.Coordenates,
              stopover: true
            });
            this.filteredlistLocationsExtra.push({
              name: locale.Name
            });
          }
        }
      } else {
        alert("Não existem localizações na base de dados");
      }
    },
    /*--------------------------------------------------*/
    //criar o mapa com a rota traçada
    initMap() {
      let map = new google.maps.Map(document.querySelector("#myMap"), {
        center: { lat: 41.148481, lng: -8.606893 },
        zoom: 15
      });
      map.setMapTypeId(google.maps.MapTypeId.SATELLITE);
      //let service;
      //let infoWindow = new google.maps.InfoWindow();
      let geocoder = new google.maps.Geocoder();
      let directionsService = new google.maps.DirectionsService();
      let directionsRenderer = new google.maps.DirectionsRenderer();
      directionsRenderer.setMap(map);

      /*----------------------------------------------*/
      //posicao inicial
      if (this.startPosition == "currentPosition") {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(position => {
            const pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
            map.setCenter(pos);
            //placesOnMap(map, map.center, this.typeRoute);
            this.filterLocations();
            calcRoute(
              directionsService,
              directionsRenderer,
              this.filteredlistLocations,
              this.travelMode
            );
            this.routeChecked = true;
            this.addRoute();
          });
        }
      } else {
        geocoder.geocode(
          { address: this.startPosition },
          (results2, status) => {
            if (status == "OK") {
              map.setCenter(results2[0].geometry.location);
              //placesOnMap(map, map.center, this.typeRoute);
              this.filterLocations();
              calcRoute(
                directionsService,
                directionsRenderer,
                this.filteredlistLocations,
                this.travelMode
              );
              this.routeChecked = true;
              this.addRoute();
            } else {
              alert("Geocode was not sucessfull" + status);
            }
          }
        );
      }

      //-----------------------------------------------//
      /*function placesOnMap(map, center, typeofRoute) {

        let routeRequest = {
          location: center,
          radius: "1000",
          type: [typeofRoute]
        };
        alert("estou no places");
        service = new google.maps.places.PlacesService(map);

        service.nearbySearch(routeRequest, function(results, status) {
          if (status == google.maps.places.PlacesServiceStatus.OK) {
            for (const result of results) {
              const marker = new google.maps.Marker({
                map: map,
                position: result.geometry.location

              });
              google.maps.event.addListener(marker, "click", function() {
                infoWindow.setContent(result.name);
                infoWindow.open(map, this);
              });
            }
          }
        });
      }*/

      //--------------------------------------------------//
      //calcula a melhor rota
      function calcRoute(
        directionsService,
        directionsRenderer,
        waypts,
        travelWay
      ) {
        directionsService.route(
          {
            origin: map.center,
            destination: map.center,
            waypoints: waypts,
            optimizeWaypoints: true,
            travelMode: google.maps.TravelMode[travelWay]
          },
          function(response, status) {
            if (status === "OK") {
              directionsRenderer.setDirections(response);
              this.routeChecked = true;
            }
          }
        );
      }
    }
  }
};
</script>
<style scoped>
.google-map {
  width: 800px;
  height: 600px;
  margin: 0 auto;
}
</style>
