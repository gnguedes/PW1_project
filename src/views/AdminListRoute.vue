<template>
  <div>
    <navBar />
    <div class="container" style="margin-top:100px">
      <h1>Área de administrador</h1>
      <manageRoutes />
    </div>
    <footerPP />
  </div>
</template>
<script>
import navBar from "@/components/NavBar.vue";
import manageRoutes from "@/components/adminManageRoutes.vue";
import footerPP from "@/components/footer.vue";

export default {
  name: "adminPageRoute",
  components: {
    navBar,
    manageRoutes,
    footerPP
  }
};
</script>