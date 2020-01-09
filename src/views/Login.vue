<template>
  <div class="login">
    <h1>Smart_route</h1>
    <loginForm msg="login Page" />
  </div>
</template>

<script>
import loginForm from "@/components/loginForm.vue";

export default {
  name: "login",
  components: {
    loginForm
  }
};
</script>
