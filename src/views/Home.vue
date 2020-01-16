<template>
  <div class="home">
    <!-- Renders the navbar -->
    <NavBar />
    <!-- Renders the welcome message -->
    <div class="container" style="margin-top:80px">
      <routeForm />
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import routeForm from "@/components/newRoute.vue";
//import footer from "@/components/footer.vue";
export default {
  components: {
    NavBar,
    routeForm,
    //footer
  }
};
</script>
