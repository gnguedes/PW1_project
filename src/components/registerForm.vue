<template>
    <div id="frmRegister">
            <form>
           
            <label for="txtUsername">Nome de Utilizador:</label>
            <input id=txtUsername type="text" v-model="name">
            <br>
           
            <label for="txtEmail">Email:</label>
            <input type="text" id="txtEmail" value="pessoal" v-model="email">
            <br>

            <label for="txtPassword">Palavra-passe:</label>
            <input type="password" id="txtPassword" value="password" v-model="password">
            <br>
            <label for="txtCheckPassword">Confirmar palavra-passe:</label>
            <input type="password" id="txtCheckPassword" value="password" v-model="password">
            
            <br>
            <!--inserir tabela-->
            <input type="submit" value="Registar">
        </form>
    </div>
</template>