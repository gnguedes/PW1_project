import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loggedUserId: "",
    listUsers: [
      {
        id: 0,
        Name: "admin",
        Email: "admin@gmail.com",
        Password: "admin"
      },
    ],
    listLocations: [],
    listRoutes: []
  },
  getters: {
    getLoggedUserId: state => state.loggedUserId,
    getAllUsers: state => state.listUsers,
    getAllRoutes: state => state.listRoutes,
  },
  mutations: {
    ADD_USER(state, payload) {
      state.listUsers.push(payload);
    },
    ADD_ROUTE(state, payload) {
      state.listRoutes.push(payload);
    }
  }
});
