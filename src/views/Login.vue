<template>
  <div class="login">
    <navBarBeforeLogin />
    <div class="container" style="margin-top:75px">
      <h1>Smart_route</h1>
      <div>
        <loginForm />
      </div>
    </div>
  </div>
</template>

<script>
import loginForm from "@/components/loginForm.vue";
import navBarBeforeLogin from "@/components/NavBarBeforeLogin.vue";

export default {
  name: "login",
  components: {
    loginForm,
    navBarBeforeLogin
  }
};
</script>
