<template>
  <div class="form-group">
    <form>
      <label for="numPeople">Quantas pessoas</label>
      <input type="number" id="numPeople" v-model="numPeople" min="1" />
      <br />
      <label for="dateArrival">Dia de chegada</label>
      <input type="date" id="dateArrival" v-model="dateArrival" />
      <br />
      <label for="dateDepartude">Dia de partida</label>
      <input type="date" id="dateDeparture" v-model="dateDepartude" />
      <br />
      <label for="typeRoute">Tipo de rota</label>
      <select type="radio" id="typeRoute" v-model="typeRoute">
        <br />
        <option>Monumentos</option>
        <option>Restaurantes</option>
        <option>Museus</option>
      </select>
      <br />
      <input type="submit" value="Criar rota" />
    </form>
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
      typeRoute: ""
    };
  },
  methods: {}
};
</script>
