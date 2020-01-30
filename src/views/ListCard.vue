<template>
  <div>
    <navBar />
    <div class="container" style="margin-top:100px">
      <h1>Lista de Localizações</h1>
      <listOfCard />
    </div>
    <footerPP />
  </div>
</template>
<script>
import navBar from "@/components/NavBar.vue";
import listOfCard from "@/components/listCard.vue";
import footerPP from "@/components/footer.vue";

export default {
  name: "adminPageUser",
  components: {
    navBar,
    listOfCard,
    footerPP
  }
};
</script>