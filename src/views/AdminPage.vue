<template>
  <div>
    <navBar />
    <div class="container" style="margin-top:50px">
      <h1>Área de administrador</h1>
      <manageUsers />
    </div>
  </div>
</template>
<script>
import navBar from "@/components/NavBar.vue";
import manageUsers from "@/components/adminManageUsers.vue";

export default {
  name: "adminPage",
  components: {
    navBar,
    manageUsers
  }
};
</script>

