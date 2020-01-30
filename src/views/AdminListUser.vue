<template>
  <div>
    <navBar />
    <div class="container" style="margin-top:100px">
      <h1>Área de administrador</h1>
      <manageUsers />
    </div>
  </div>
</template>
<script>
import navBar from "@/components/NavBar.vue";
import manageUsers from "@/components/adminManageUsers.vue";

export default {
  name: "adminPageUser",
  components: {
    navBar,
    manageUsers
  }
};
</script>