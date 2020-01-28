<template>
  <div class="signUp">
    <navBarBeforeLogin />
    <div class="container" style="margin-top:50px">
      <h3>Registo</h3>
      <registerForm />
    </div>
  </div>
</template>

<script>
import registerForm from "@/components/registerForm.vue";
import navBarBeforeLogin from "@/components/NavBarBeforeLogin.vue";

export default {
  name: "register",
  components: {
    registerForm,
    navBarBeforeLogin
  }
};
</script>
