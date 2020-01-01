<template>
  <div class="login">
    <loginForm msg="login Page" />
  </div>
</template>

<script>
import loginForm from "@/components/loginForm.vue";

export default {
    name: "login",
    components:{
        loginForm
    }

};
</script>