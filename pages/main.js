function login()
{
    const username_c="Larissa@gmail.com";
    const password_c="senha123";
     let user_inform = document.getElementById("username").value;
     let password_inform = document.getElementById("password").value;

     if (user_inform == username_c && password_inform == password_c)
{
    let continuar_logado = document.getElementById("remember-me");
        
    if(continuar_logado){
            document.cookie="logado=1";
        }

        window.location.href ='compra.html';
    } else{
        alert('algo incorreto');
    }
}
function register(){
   let username = document.getElementById("username").value;
   let password = document.getElementById("password").value;

}
