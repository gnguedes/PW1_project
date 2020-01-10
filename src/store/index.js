import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loggedUser: "",
    listUsers: [],
    listLocations: [],
    listRoutes:[],
  },
  getters: {
    getLoggedUser: state => state.loggedUser,
    getAllUsers: state =>state.listUsers,
  },
  mutations: {

    ADD_USER(state, payload) {
      state.listUsers.push(payload)
      //localStorage.setItem("users",JSON.stringify(payload))
    },
    ADD_ROUTE(state,payload){
      state.listRoutes.push(payload)
    }

  },
});
