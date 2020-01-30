<template>
  <div>
    <navBar />
    <div class="container" style="margin-top:100px">
      <h1>Adicionar localização</h1>
      <addLoc />
    </div>
    <footerPP />
  </div>
</template>
<script>
import navBar from "@/components/NavBar.vue";
import addLoc from "@/components/adminAddNewLocation.vue";
import footerPP from "@/components/footer.vue";

export default {
  name: "adminLocPage",
  components: {
    navBar,
    addLoc,
    footerPP
  }
};
</script>