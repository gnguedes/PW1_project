<template>
  <div>
    <navBar />
    <div class="container" style="margin-top:100px">
      <h1>Área de administrador</h1>
      <manageLoc />
    </div>
    <footerPP />
  </div>
</template>
<script>
import navBar from "@/components/NavBar.vue";
import manageLoc from "@/components/adminManageLocations.vue";
import footerPP from "@/components/footer.vue";

export default {
  name: "adminLocPage",
  components: {
    navBar,
    manageLoc,
    footerPP
  }
};
</script>