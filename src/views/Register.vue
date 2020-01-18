<template>
  <div class="signUp">
    <h3>Registo</h3>
    <registerForm />
  </div>
</template>

<script>
import registerForm from "@/components/registerForm.vue";

export default {
  name: "register",
  components: {
    registerForm
  }
};
</script>
