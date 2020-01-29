<template>
  <div>
    <navBar />
    <div class="container" style="margin-top:50px">
      <profilePage />
    </div>
  </div>
</template>

<script>
import profilePage from "@/components/ProfilePage.vue";
import navBar from "@/components/NavBar.vue";

export default {
  name: "profile",
  components: {
    navBar,
    profilePage
  }
};
</script>

<style></style>
