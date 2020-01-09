<template>
  <!-- Default form login -->
  <!-- Card -->
  <div class="card mx-xl-5">
    <!-- Card body -->
    <div class="card-body">
      <form>
        <p class="h4 text-center mb-4">Sign in</p>
        <label for="defaultFormLoginEmailEx" class="grey-text">Your email</label>
        <input type="email" id="defaultFormLoginEmailEx" class="form-control" />
        <br />
        <label for="defaultFormLoginPasswordEx" class="grey-text">Your password</label>
        <input type="password" id="defaultFormLoginPasswordEx" class="form-control" />
        <div class="text-center mt-4">
          <button class="btn btn-indigo" type="submit">Login</button>
          <router-link to="/register">Oi</router-link>
        </div>
      </form>
    </div>
  </div>
  <!-- Default form login -->
</template>
<!--
<script>
export default {
  data:{
    loggedUser:"",
    loggedPassword:"",
  }
}
</script>

<style>

</style> -->
