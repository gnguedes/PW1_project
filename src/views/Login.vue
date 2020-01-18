<template>
  <div class="login">
    <h1>Smart_route</h1>
    <div>
      <loginForm />
    </div>
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
