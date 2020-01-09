<template>
  <div id="frmRegister">
    <form v-on:submit="pushUser">
      <label for="txtUsername">Nome de Utilizador:</label>
      <input id="txtUsername" type="text" v-model="txtName" />
      <br />

      <label for="txtEmail">Email:</label>
      <input type="text" id="txtEmail" v-model="txtEmail" />
      <br />

      <label for="txtPassword">Palavra-passe:</label>
      <input type="password" id="txtPassword" v-model="txtPassword" />
      <br />
      <label for="txtCheckPassword">Confirmar palavra-passe:</label>
      <input type="password" id="txtCheckPassword" v-model="txtCheckPassword" />

      <br />
      <!--inserir tabela-->
      <input type="submit" value="Registar" />
    </form>
  </div>
</template>
<script>

 
export default {
    name: "UserList",
    data:{
        id: 0,
        username: "",
        email: "",
        password: "",
        listUsers: [],
        userChecked: false,
    },
    created(){
        //importar a lista de utilizadores da loja para o array listUsers
    },

    methods:{
        //id do ultimo utilizador
        getLastId(){
             if(this.listUsers.length) {
                return this.listUsers[this.listUsers.length - 1].id
            } else {
                return 0
            }          
        },
        //verifica se as passwords sao iguais
        checkPassword(){
            if(this.txtPassword == this.txtCheckPassword){
                console.log("passwords match")
                this.userChecked = true
            }else{
                alert("Passwords têm de ser iguais")
                this.userChecked = false
            }
            
        },
        addUser(){
            this.listUsers.push({
                id= this.getLastId() +  1,
                username = this.txtName,
                email = this.txtEmail,
                password = this.txtPassword
            })
        },
        checkUsername(){
            if(this.listUsers.length){
                for (const user of listUsers) {
                    if( user.username == this.txtName){
                        userChecked = false,
                        console.log("nome de utilizador indisponivel")
                    }else{
                        userChecked = true
                    }
                }
            }
        },
        pushUser(){
            checkPassword();checkUsername();
            if(userChecked == true){
                addUser()
                //adicionar array à loja a lista de utilizadores
            }
        }

        
    }
}
</script>