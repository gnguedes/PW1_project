<template>
  <div class="home">
    <!-- Renders the navbar -->
    <NavBar />
    <!-- Renders the welcome message -->
    <div class="container" style="margin-top:50px">
      <routeForm />
    </div>
    <footerPP />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import routeForm from "@/components/newRoute.vue";
import footerPP from "@/components/footer.vue";

export default {
  components: {
    NavBar,
    routeForm,
    footerPP
  }
};
</script>
