<template>
  <div>
    <navBar />
    <div class="container" style="margin-top:100px">
      <h1>Lista de Itinerários</h1>
      <listOfCardRoutes />
    </div>
    <footerPP />
  </div>
</template>
<script>
import navBar from "@/components/NavBar.vue";
import listOfCardRoutes from "@/components/listCardRoutes.vue";
import footerPP from "@/components/footer.vue";

export default {
  name: "adminPageUser",
  components: {
    navBar,
    listOfCardRoutes,
    footerPP
  }
};
</script>