<template>
  <div>
    <navBar />
    <h5>Seja bem vindo {{}}</h5>
    <profilePage />
  </div>
</template>

<script>
import profilePage from "@/components/ProfilePage.vue";
import navBar from "@/components/NavBar.vue";
//import manageUsers from "@/components/manageUsers.vue";

export default {
  name: "profile",
  components: {
    navBar,
    profilePage,
    //manageUsers,
  },
};
</script>

<style></style>
