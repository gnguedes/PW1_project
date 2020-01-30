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
    listLocations: [
      {
        id: 0,
        Name: "Igreja dos Clérigos",
        Coordenates: { lat: 41.145806, lng: -8.614084 },
        Description: "Igreja barroca com um altar em mármore e um campanário de 75 metros de altura, um símbolo do Porto.",
        Type: "tourist_attraction",
        imgLink: "https://www.google.com/maps/place/Igreja+dos+Cl%C3%A9rigos/@41.1458213,-8.6139845,3a,75y,90t/data=!3m8!1e2!3m6!1sAF1QipNhWFC5tRFonvAE53kN69iXkVuUdZGTu-4WqMWa!2e10!3e12!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipNhWFC5tRFonvAE53kN69iXkVuUdZGTu-4WqMWa%3Dw86-h114-k-no!7i3024!8i4032!4m13!1m7!3m6!1s0xd2465abc4e153c1:0xa648d95640b114bc!2sPorto!3b1!8m2!3d41.1579438!4d-8.6291053!3m4!1s0xd2464e251ced649:0x70c16361c3de59f0!8m2!3d41.1458212!4d-8.6139847#"
      },
      {
        id: 1,
        Name: "Igreja de Santo Ildefonso",
        Coordenates: { lat: 41.146174, lng: -8.606655 },
        Description: "Igreja elegante do séc. XVIII com fachada coberta de azulejos azuis e brancos adicionados na década de 1930.",
        Type: "tourist_attraction",
        imgLink: "https://lh5.googleusercontent.com/proxy/tYaU3ZDgQOUPXtHVg3B65gmNLWqUO1YNy-8LJwgig8JeiYQt5ormH8ciJMynamf1bUXD2j1ZzUeSTwunKkEgM_ySaZvO12BJSvX1qEJAoTCeoDShTIV3bbv1gVgvjtYYdGt_5v0kAu42TP4unH69JJmTU_ooymw=w408-h272-k-no",

      },
      {
        id: 2,
        Name: "Sé do Porto",
        Coordenates: { lat: 41.142831, lng: -8.611199 },
        Description: "Catedral românica na colina com interior tipo fortaleza, uma janela rosa e claustros góticos.",
        Type: "tourist_attraction",
        imgLink: "https://lh5.googleusercontent.com/p/AF1QipPI7M-BCnMlYZzV3I6GSp3ogfOKz3SysOu_ypuu=w408-h306-k-no"
      },
      {
        id: 3,
        Name: "Museu do Vinho do Porto",
        Description: "Inaugurado em 2004, este museu num armazém do séc. XVIII tem exposições sobre a história do vinho do Porto.",
        Coordenates: { lat: 41.140061, lng: -8.615360 },
        Type: "museum",
        imgLink: "https://lh5.googleusercontent.com/p/AF1QipPKrPgMUee2l-bS3DosJiWqsmpY1ib-PcCxMnfS=w408-h306-k-no"
      },
      {
        id: 4,
        Name: "Palácio da Bolsa",
        Description: "Enorme edifício de referência do séc. XIX com salas para eventos privados, um restaurante e visitas guiadas.",
        Coordenates: { lat: 41.141636, lng: -8.615639 },
        Type: "museum",
        imgLink: "https://lh6.googleusercontent.com/proxy/ytfMfrYVpXoVWEFwMTHPh0fpmOl8nOIC4dMKHqz8OOk7YATpLRwjr4iZTEdLLFHsvFa-2pyW5a-2deW5Lo13569yvJhXuR5d64bsS_1T0Jh2_gja8322Vf2B07msncsYtis_cX979_15Pz_J5muqyBtZjMx5CTc=w408-h272-k-no"

      },
      {
        id: 5,
        Name: "World of Discoveries",
        Description: "Museu com restaurante, viagem temática e exposições sobre a história dos primeiros navegadores portugueses.",
        Coordenates: { lat: 41.143393, lng: -8.620942 },
        Type: "museum",
        imgLink: "https://lh5.googleusercontent.com/p/AF1QipMStOwmHe5Codeu--p5E3jMbXTbg57fVoBkiwaK=w408-h306-k-no"

      },
      {
        id: 6,
        Name: "Jardins do Palácio de Cristal",
        Description: "Jardins paisagísticos desenhados no séc. XIX com fontes, caminhos e vistas do rio Douro.",
        Coordenates: {lat:41.148387, lng:-8.625578},
        Type: "tourist_attraction",
        imgLink: "https://lh5.googleusercontent.com/p/AF1QipNFiVEn_uKJNqW6if00_tbz86t4z1qYyTkKZIpY=w408-h306-k-no"

      },
      {
        id: 7,
        Name: "Centro Português de Fotografia",
        Description: "Museu com programa de exposição de fotografia portuguesa histórica, documental e contemporânea.",
        Coordenates: { lat:41.144733, lng:-8.615991 },
        Type: "tourist_attraction",
        imgLink: "https://lh5.googleusercontent.com/p/AF1QipP8nQ6Qjl3hNN7cdS2rsn7J1udwcG8lhjxMVNAt=w408-h265-k-no"

      },
      {
        id: 8,
        Name: "Francesinha Café",
        Description: "Restaurante de Cozinha Tradicional Portuguesa",
        Coordenates: {lat:41.160195, lng:-8.600740},
        Type: "restaurant",
        imgLink: "https://lh5.googleusercontent.com/p/AF1QipPeGGgy8OkdXToEHru0JGhtuxExFk8T4mdR_td1=w426-h240-k-no"

      },
      {
        id: 9,
        Name: "McDonald's Porto Aliados",
        Description: "Comida rápida",
        Coordenates: { lat:41.146700, lng: -8.610922 },
        Type: "restaurant",
        imgLink: "https://lh5.googleusercontent.com/p/AF1QipP3nOaH_MFoDLzLLmhi00ZVnaqbiUFrtD_Y4KeA=w408-h306-k-no"

      },
      {
        id: 10,
        Name: " Ap'arte Galeria de Arte",
        Description: "O trabalho de artistas emergentes é exposto junto a peças de criadores famosos nesta galeria de dois níveis.",
        Coordenates: { lat :41.149791, lng:-8.619625 },
        Type: "art_gallery",
        imgLink: "https://lh5.googleusercontent.com/p/AF1QipPjle_7gvD6dBPctO_8e-3qbADuDueXAsq_607R=w408-h306-k-no"
      },
      {
        id: 11,
        Name: " Galeria Artes Solar Sto António",
        Description: "Galeria de arte",
        Coordenates: { lat:41.149023, lng:-8.620664 },
        Type: "art_gallery",
        imgLink: "https://lh5.googleusercontent.com/p/AF1QipOO66SAN3Ei0kOeHZGZ_l1beb0UCoxGPgGS5f6E=w408-h306-k-no"
      }

    ],
    listRoutes: []
  },
  getters: {
    getLoggedUserId: state => state.loggedUserId,
    getAllUsers: state => state.listUsers,
    getAllRoutes: state => state.listRoutes,
    getAllLocations: state => state.listLocations,
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
