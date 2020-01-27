<template>
  <div class="form-group">
    <form>
      <label for="startPosition">Local inicial:</label>
      <select type="radio" id="startPosition" v-model="startPosition">
        <option value="currentPosition">Posição corrente</option>
        <option value="HotelAliados">Hotel Aliados</option>
        <option value="hotelCristalPorto">Hotel Cristal Porto</option>
        <option value="hotelEurostartsHeroismo">Hotel Eurostars Heroismo</option>
      </select>
      <select type="radio" id="travelMode" v-model="travelMode">
        <br />
        <option value="DRIVING">Caroo</option>
        <option value="WALKING">Caminhar</option>
        <option value="BICYCLING">Bicicleta</option>
      </select>
      <br />
      <label for="numPeople">Quantas pessoas:</label>
      <input type="number" id="numPeople" v-model="numPeople" min="1" />
      <br />
      <label for="dateArrival">Dia de chegada:</label>
      <input type="date" id="dateArrival" v-model="dateArrival" />
      <br />
      <label for="dateDepartude">Dia de partida:</label>
      <input type="date" id="dateDeparture" v-model="dateDepartude" />
      <br />
      <label for="typeRoute">Tipo de rota:</label>
      <select type="radio" id="typeRoute" v-model="typeRoute">
        <br />
        <option value="museum">Museus</option>
        <option value="restaurant">Restaurantes</option>
        <option value="tourist_attraction">Monumentos e atrações turísticas</option>
        <option value="art_gallery">Galerias de arte</option>
      </select>
      <br />
      <input type="submit" value="Criar rota" @click="renderMap()" />
    </form>
    <div class="google-map" id="myMap"></div>
  </div>
</template>
<script>
export default {
  name: "newRoute",
  data: function() {
    return {
      numPeople: 0,
      dateArrival: "",
      dateDepartude: "",
      typeRoute: "",
      startPosition: "",
      locationContent: "",
      listLocations: [],
      travelMode: ""
    };
  },
  methods: {
    renderMap() {
      let map = new google.maps.Map(document.querySelector("#myMap"), {
        center: { lat: 41.148481, lng: -8.606893 },
        zoom: 15
      });
      map.setMapTypeId(google.maps.MapTypeId.SATELLITE);
      let infoWindow = new google.maps.InfoWindow();
      let geocoder = new google.maps.Geocoder();
      //let directionsService = new google.maps.DirectionsService();
      //let directionsRenderer = new google.maps.DirectionsRenderer();
      //directionsRenderer.setMap(this.map);

      //pedido das localizações da rota
      let routeRequest = {
        location: map.center,
        radius: "1000",
        type: [this.typeRoute]
      };

      //-------verificar a posição inicial------------------
      if (this.startPosition == "currentPosition") {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(position => {
            const pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
            infoWindow.setPosition(pos);
            infoWindow.setContent("Você está aqui!");
            map.setCenter(pos);
          });
        }
      } else {
        geocoder.geocode(
          { address: this.startPosition },
          (results2, status) => {
            if (status == "OK") {
              map.setCenter(results2[0].geometry.location);
            } else {
              alert("Geocode was not sucessfull" + status);
            }
          }
        );
      }

      //---------------------------------------------//
      //guardar as localizações num array--------------
      function callback(results, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
          let service = new google.maps.places.PlacesService(map);
          for (const result of results) {
            this.listLocations.push(result);
          }
        }
      }
      service.nearbySearch(routeRequest, callback);
      /*
      function createMarker(place) {
        const marker = new google.maps.Marker({
          map:this.map,
          position:place.geometry.location
        });
        google.maps.event.addListener(marker,'click',function(){
          infoWindow.setContent(place.name);
          infoWindow.open(this.map,this);
        })
      }
      //--------------------------------------------------//
      //calcula a melhor rota
      /*function calcRoute(directionsService, directionsRenderer) {
        const request = {
          origin: this.map.center,
          destination: this.map.center,
          waypoints: this.listLocations,
          optimizeWaypoints: true,
          travelMode: google.maps.TravelMode[this.selectedMode]
        };
        directionsService.route(request,
          (result,
          status => {
            if (status === "OK") {
              directionsRenderer.setDirections(result);
            }
          })
        );
      }*/
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
