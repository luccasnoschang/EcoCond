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

//para login//
let emailCond = document.getElementById("logar_Email")
let senhaCond = document.getElementById("senha_Login")
let condominios = []

let loginAdmin = document.getElementById("InptloginAdmin")
let senhaAdmin = document.getElementById("InptsenhaAdmin")
let administradores = []


// Ao realizar o login, o administrador vai ser direcionado para a página com todos os condominios

function Logar() {

    administradores = JSON.parse(localStorage.getItem("dados_condominio"))

    localStorage.setItem("dados_condominio", JSON.stringify(administradores))

    let validar = false


    for (i = 0; i < administradores.length; i++)

        if (loginAdmin.value == administradores[i].emailCond && senhaAdmin.value == administradores[i].senhaCond) {

            validar = true

        }
        if (validar) {
        
            alert('Administrador Logado com sucesso!')
          window.location.href="condominioCadastrado.html"
        
        }
        else {
        
            alert('E-mail ou senha incorreto!')
        }
}



// Ao realizar o login, o condominio vai ser direcionado para a página com todas as empresas cadastradas

function Usuarios() {

    condominios = JSON.parse(localStorage.getItem("dados_condominio"))

    let validar = false

    for (i = 0; i < condominios.length; i++) {


        if (emailCond.value == condominios[i].emailCond
            && senhaCond.value == condominios[i].senhaCond) {

            validar = true

        }
    }
    if (validar) {

        window.location.href="empresas.html"
        alert('Condomínio Logado com sucesso!')

    }
    else {

        alert('E-mail ou senha errado!')
    }



}