<template>
  <div>
    <navBar />
    <div class="container" style="margin-top:100px">
      <h1>Editar perfil</h1>
      <changeUser />
    </div>
    <footerPP />
  </div>
</template>
<script>
import navBar from "@/components/NavBar.vue";
import changeUser from "@/components/changeUserProfile.vue";
import footerPP from "@/components/footer.vue";


export default {
  name: "changeUserPage",
  components: {
    navBar,
    changeUser,
    footerPP
  }
};
</script>