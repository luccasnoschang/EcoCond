//Para pagina de entrada
var btnSignin = document.querySelector("#signin");
var btnSignup = document.querySelector("#signup")
var body = document.querySelector("body");

btnSignin.addEventListener("click", function () {

    body.className = "sign-in-js";

});

btnSignup.addEventListener("click", function () {

    body.className = "sign-up-js";
})

//Para realização do cadastro:

let cadastroNome = document.getElementById("InptCadastroNome")
let cadastroEmail = document.getElementById("InptCadastroEmail")
let cadastroSenha = document.getElementById("InptCadastroSenha")

//para login//
let emailLogin = document.getElementById("logar_Email")
let senhaLogin = document.getElementById("senha_Login")

let usuarios = []



function cadastrar() {

    usuarios = JSON.parse(localStorage.getItem("usuarios"))

    let user = {

        Nomes: cadastroNome.value,
        Email: cadastroEmail.value,
        Senha: cadastroSenha.value,
    }

    usuarios.push(user)

    localStorage.setItem('usuarios', JSON.stringify(usuarios))

    console.log(usuarios)

}


function logar() {

    usuarios = JSON.parse(localStorage.getItem("usuarios"))

    let validar = false


    for (i = 0; i < usuarios.length; i++) {

      

        if (emailLogin.value == usuarios[i].Email && senhaLogin.value == usuarios[i].Senha) {

            validar = true

        }
    }
    if (validar) {

        alert('logou' + validar)

    }
    else {

        alert('E-mail ou senha errado!!')
    }
}