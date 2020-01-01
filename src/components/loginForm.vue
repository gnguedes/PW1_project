<template>
  <div id="frmLogin">
    <form v-on:submit.prevent="addTask()">
      <label for="txtUsername">Nome de Utilizador:</label>
      <input id="txtUsername" type="text" v-model="name" />
      <br />

      <label for="txtPassword">Palavra-passe:</label>
      <input type="password" id="txtPassword" value="password" v-model="password" />
      <br />

      <br />

      <input type="submit" value="Login" />
      <br />
      <router-link to="/register">Não tem conta? Crie uma aqui</router-link>
    </form>
  </div>
</template>