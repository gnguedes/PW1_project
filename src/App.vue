<template>
  <div id="app">
    <div id="nav">
      <router-view />
    </div>
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 0px;
  width:100%;
  height:100%;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
