<template>
  <div>
    <navBar />
    <br>
    <profilePage />
  </div>
</template>

<script>
import profilePage from "@/components/ProfilePage.vue";
import navBar from "@/components/NavBar.vue";


export default {
  name: "profile",
  components: {
    navBar,
    profilePage,
  },
};
</script>

<style></style>
