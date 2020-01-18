<template>
  <div>
    <navBar />
    <br>
    <br>
    <h1>Área de administrador</h1>
    <manageUsers/>
  </div>
</template>
<script>
import navBar from "@/components/NavBar.vue";
import manageUsers from "@/components/adminManageUsers.vue";

export default {
    name:"adminPage",
    components:{
        navBar,
        manageUsers,
    }
    
};
</script>

