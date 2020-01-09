<template>
  <!-- Renders the navbar with the respective router-links -->
  <nav class="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
    <a class="navbar-brand" href="/">smart_route</a>
    <ul class="navbar-nav">
      <li class="nav-item">
        <router-link to="/">back to login</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/register">back to register</router-link>
      </li>
    </ul>
  </nav>
</template>
