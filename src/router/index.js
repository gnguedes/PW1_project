import Vue from "vue";
import VueRouter from "vue-router";
import CreatingRoute from "../views/Home.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import UserProfile from "../views/UserProfile.vue";
import LandingPage from "../views/LandingPage.vue";
import GettingLost from "../views/notFoundPage.vue";
import adminUser from "../views/AdminListUser.vue";
import adminRoute from "../views/AdminListRoute.vue";
import listingRoute from "../views/ListRoutes.vue";

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
    path: "/creatingRoute",
    name: "creatingRoute",
    component: CreatingRoute
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
    path:"*",
    name:"gettingLost",
    component: GettingLost
  },
  {
    path:"/adminUsers",
    name:"adminManageUsers",
    component: adminUser
  },
  {
    path:"/adminRoutes",
    name:"adminManageRoutes",
    component: adminRoute
  },{
    path:"/listingRoutes",
    name:"listingRoutes",
    component: listingRoute
  }


];

const router = new VueRouter({
  routes
});

export default router;
