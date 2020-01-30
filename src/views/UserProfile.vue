<template>
  <div>
    <navBar />
    <div class="container" style="margin-top:50px">
      <profilePage />
    </div>
    <footerPP/>
  </div>
</template>

<script>
import profilePage from "@/components/ProfilePage.vue";
import navBar from "@/components/NavBar.vue";
import footerPP from "@/components/footer.vue";


export default {
  name: "profile",
  components: {
    navBar,
    profilePage,
    footerPP
  }
};
</script>

<style></style>
