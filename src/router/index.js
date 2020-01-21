import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import UserProfile from "../views/UserProfile.vue";
import AdminPage from "../views/AdminPage.vue";
import LandingPage from "../views/LandingPage.vue";
import GettingLost from "../views/notFoundPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/register",
    name: "register",
    component: Register
  },
  {
    path: "/home",
    name: "home",
    component: Home
  },
  {
    path: "/user/:userId",
    name: "users",
    component: UserProfile
  },
  {
    path: "/",
    name: "landingPage",
    component: LandingPage
  },

  {
    path: "/adminPage",
    name: "adminPage",
    component: AdminPage
  },
  {
    path:"*",
    name:"gettingLost",
    component: GettingLost
  },

];

const router = new VueRouter({
  routes
});

export default router;
