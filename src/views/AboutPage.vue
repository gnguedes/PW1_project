<template>
  <div>
    <navBar />
    <div class="container" style="margin-top:100px">
      <h1>Sobre Nós</h1>
      <aboutUs />
    </div>
    <footerPP />
  </div>
</template>
<script>
import navBar from "@/components/NavBar.vue";
import aboutUs from "@/components/about.vue";
import footerPP from "@/components/footer.vue";

export default {
  name: "AboutS",
  components: {
    navBar,
    aboutUs,
    footerPP
  }
};
</script>