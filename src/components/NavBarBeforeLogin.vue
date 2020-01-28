<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark" fixed="top">
      <b-navbar-brand to="/">Smart_route</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse type="dark" id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/">Página Inicial</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav>
          <b-nav-item to="/login">Iniciar Sessão</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
      </b-collapse>
    </b-navbar>
  </div>
</template>