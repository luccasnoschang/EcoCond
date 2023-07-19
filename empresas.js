let nomeCadastro = document.getElementById("inptNome")
let cnpj = document.getElementById("inptCNPJ")
let email = document.getElementById("inptEmail")
let telefone = document.getElementById("inptPhone")
let endereco = document.getElementById("inptEndereco")

let selectValor = document.getElementById("slct")
let posicaoExcluir

let todosDados = []

function Cadastrar() {

    let empresa = {
        nome: nomeCadastro.value,
        cnpj: cnpj.value,
        email: email.value,
        telefone: telefone.value,
        endereco: endereco.value,
        selectValor: selectValor.value
    }

    todosDados.push(empresa)

    todosDados = JSON.parse(localStorage.getItem("dados_empresa"));


    if (todosDados == null) {

        todosDados = []

        todosDados.push(empresa)

        localStorage.setItem("dados_empresa", JSON.stringify(todosDados))

    } else {
        todosDados.push(empresa)
        localStorage.setItem("dados_empresa", JSON.stringify(todosDados))

    }
    alert("Empresa cadastrada com sucesso!")

    limparDados()
}




function Listar() {

    todosDados = []
    // Pega valores do LocalStorage (se tiver) e armazena
    todosDados = JSON.parse(localStorage.getItem("dados_empresa"))

    let divList = document.getElementById("List")

    let dadosLista, dadoDiv

    if (todosDados.length == null) {
        alert("Não possui empresas cadastradas!")
    } else {

        while (divList.firstChild) {

            // Remove todas divs filhas (zera a lista de divs)
            divList.removeChild(divList.firstChild);

        }

        // Enquanto a lista possuir divs



        for (i = 0; i < todosDados.length; i++) {


            // let nomeEmpresa = document.createTextNode(`Nome da Empresa: ${todosDados[i].nome}`)
            // let cnpjEmpresa = document.createTextNode(`CNPJ: ${todosDados[i].cnpj}`)
            // let emailEmpresa = document.createTextNode(`Email: ${todosDados[i].email}`)
            // let telefoneEmpresa = document.createTextNode(`Telefone: ${todosDados[i].telefone}`)
            // let enderecoEmpresa = document.createTextNode(`Endereço: ${todosDados[i].endereco}`)
            // let selectValorEmpresa = document.createTextNode(`Tipo da Empresa: ${todosDados[i].selectValor}`)

            let nomeEmpresa = document.createTextNode(`Nome da empresa`)
            let cnpjEmpresa = document.createTextNode(`Cnpj da empresa`)
            let emailEmpresa = document.createTextNode(`Email da empresa`)
            let telefoneEmpresa = document.createTextNode(`Telefone da empresa`)
            let enderecoEmpresa = document.createTextNode(`Endereço da empresa`)
            let selectValorEmpresa = document.createTextNode(`Tipo de empresa`)

            let inptNomeEmpresa = document.createElement('input')
            let inptCNPJEmpresa = document.createElement('input')
            let inptEmailEmpresa = document.createElement('input')
            let inptTelefoneEmpresa = document.createElement('input')
            let inptEnderecoEmpresa = document.createElement('input')
            let inptSelectEmpresa = document.createElement('input')

            let btnEditarEmpresa = document.createElement('button')
            let btnSalvarEmpresa = document.createElement('button')
            let btnExcluirEmpresa = document.createElement('button')


            dadosLista = document.createElement('div')

            let addBr = document.createElement('br')

            divList.appendChild(dadosLista)

            dadosLista.classList = ('Empresas')

            dadosLista.id = (`Empresa${i}`)


            for (j = 0; j <= 5; j++) {

                dadoDiv = document.createElement('p')

                dadosLista.appendChild(dadoDiv)

                dadoDiv.classList = ('Divs')


                switch (j) {

                    case 0:
                        dadoDiv.appendChild(nomeEmpresa)
                        dadoDiv.appendChild(inptNomeEmpresa)
                        inptNomeEmpresa.id = (`InptEmp${i}${j}`)
                        document.getElementById(`InptEmp${i}${j}`).disabled = true
                        document.getElementById(`InptEmp${i}${j}`).value = todosDados[i].nome
                        break

                    case 1:
                        dadoDiv.appendChild(cnpjEmpresa)
                        dadoDiv.appendChild(inptCNPJEmpresa)
                        inptCNPJEmpresa.id = (`InptEmp${i}${j}`)
                        document.getElementById(`InptEmp${i}${j}`).disabled = true
                        document.getElementById(`InptEmp${i}${j}`).value = todosDados[i].cnpj
                        break

                    case 2:
                        dadoDiv.appendChild(emailEmpresa)
                        dadoDiv.appendChild(inptEmailEmpresa)
                        inptEmailEmpresa.id = (`InptEmp${i}${j}`)
                        document.getElementById(`InptEmp${i}${j}`).disabled = true
                        document.getElementById(`InptEmp${i}${j}`).value = todosDados[i].email
                        break

                    case 3:
                        dadoDiv.appendChild(telefoneEmpresa)
                        dadoDiv.appendChild(inptTelefoneEmpresa)
                        inptTelefoneEmpresa.id = (`InptEmp${i}${j}`)
                        document.getElementById(`InptEmp${i}${j}`).disabled = true
                        document.getElementById(`InptEmp${i}${j}`).value = todosDados[i].telefone
                        break

                    case 4:
                        dadoDiv.appendChild(enderecoEmpresa)
                        dadoDiv.appendChild(inptEnderecoEmpresa)
                        inptEnderecoEmpresa.id = (`InptEmp${i}${j}`)
                        document.getElementById(`InptEmp${i}${j}`).disabled = true
                        document.getElementById(`InptEmp${i}${j}`).value = todosDados[i].endereco
                        break

                    case 5:
                        dadoDiv.appendChild(selectValorEmpresa)
                        dadoDiv.appendChild(inptSelectEmpresa)
                        inptSelectEmpresa.id = (`InptEmp${i}${j}`)
                        document.getElementById(`InptEmp${i}${j}`).disabled = true
                        document.getElementById(`InptEmp${i}${j}`).value = todosDados[i].selectValor

                        dadoDiv.appendChild(addBr)
                        dadoDiv.appendChild(addBr)

                        break

                }


            }

            dadoDiv.appendChild(btnEditarEmpresa)
            btnEditarEmpresa.setAttribute('onclick', `Editar('${todosDados[i].nome}')`)
            btnEditarEmpresa.id = (`btnEditar${i}`)
            btnEditarEmpresa.innerHTML = (`EDITAR`)

            dadoDiv.appendChild(btnSalvarEmpresa)
            btnSalvarEmpresa.setAttribute('onclick', `Salvar('${todosDados[i].nome}')`)
            btnSalvarEmpresa.id = (`btnSalvar${i}`)
            document.getElementById(`btnSalvar${i}`).disabled = true
            btnSalvarEmpresa.innerHTML = (`SALVAR`)

            dadoDiv.appendChild(btnExcluirEmpresa)
            btnExcluirEmpresa.id = (`btnExcluir${i}`)
            btnExcluirEmpresa.innerHTML = (`EXCLUIR`)
            btnExcluirEmpresa.setAttribute('onclick', `Excluir('${todosDados[i].nome}')`)

        }

    }

}


function Editar(empresaName) {

    for (i = 0; i < todosDados.length; i++) {
        
        // Compara o valor do input de exclusão com o valor da posição atual do vetor
        if(empresaName == todosDados[i].nome){
            posicaoExcluir = i
        }
    }
   
    document.getElementById(`btnSalvar${posicaoExcluir}`).disabled = false
    document.getElementById(`btnEditar${posicaoExcluir}`).disabled = true

    todosDados[posicaoExcluir].nome = document.getElementById(`InptEmp${posicaoExcluir}0`).value
    document.getElementById(`InptEmp${posicaoExcluir}0`).disabled = false

    todosDados[posicaoExcluir].cnpj = document.getElementById(`InptEmp${posicaoExcluir}1`).value
    document.getElementById(`InptEmp${posicaoExcluir}1`).disabled = false

    todosDados[posicaoExcluir].email = document.getElementById(`InptEmp${posicaoExcluir}2`).value
    document.getElementById(`InptEmp${posicaoExcluir}2`).disabled = false

    todosDados[posicaoExcluir].telefone = document.getElementById(`InptEmp${posicaoExcluir}3`).value
    document.getElementById(`InptEmp${posicaoExcluir}3`).disabled = false

    todosDados[posicaoExcluir].endereco = document.getElementById(`InptEmp${posicaoExcluir}4`).value
    document.getElementById(`InptEmp${posicaoExcluir}4`).disabled = false

    todosDados[posicaoExcluir].selectValor = document.getElementById(`InptEmp${posicaoExcluir}5`).value
    document.getElementById(`InptEmp${posicaoExcluir}5`).disabled = false

 

}

function Salvar(empresaName) {

     // Pega valores do LocalStorage (se tiver) e armazena
    todosDados = JSON.parse(localStorage.getItem("dados_empresa"))
  
    // Realiza um loop do tamanho dos vetores
    for (i = 0; i < todosDados.length; i++) {
        
        // Compara o valor do input de exclusão com o valor da posição atual do vetor
        if(empresaName == todosDados[i].nome){
            posicaoExcluir = i
      
        }
    }
    
    
    
    document.getElementById(`btnSalvar${posicaoExcluir}`).disabled = true
    document.getElementById(`btnEditar${posicaoExcluir}`).disabled = false
    
    todosDados[posicaoExcluir].nome = document.getElementById(`InptEmp${posicaoExcluir}0`).value
    document.getElementById(`InptEmp${posicaoExcluir}0`).disabled = true

    todosDados[posicaoExcluir].cnpj = document.getElementById(`InptEmp${posicaoExcluir}1`).value
    document.getElementById(`InptEmp${posicaoExcluir}1`).disabled = true
    
    todosDados[posicaoExcluir].email = document.getElementById(`InptEmp${posicaoExcluir}2`).value
    document.getElementById(`InptEmp${posicaoExcluir}2`).disabled = true
    
    todosDados[posicaoExcluir].telefone = document.getElementById(`InptEmp${posicaoExcluir}3`).value
    document.getElementById(`InptEmp${posicaoExcluir}3`).disabled = true
    
    todosDados[posicaoExcluir].endereco = document.getElementById(`InptEmp${posicaoExcluir}4`).value
    document.getElementById(`InptEmp${posicaoExcluir}4`).disabled = true
    
    todosDados[posicaoExcluir].selectValor = document.getElementById(`InptEmp${posicaoExcluir}5`).value
    document.getElementById(`InptEmp${posicaoExcluir}5`).disabled = true
    
    // Joga para o LocalStorage novamente
    localStorage.setItem("dados_empresa", JSON.stringify(todosDados))

    Listar()
    
}



function Pesquisar() {

    // Pega valores do LocalStorage (se tiver) e armazena
    dadosLista = JSON.parse(localStorage.getItem("dados_empresa"))

    // Cria uma variável ou flag para indicar que encontrou
    let encontrou = 0
    let nomePesquisar = document.getElementById("pesquisarEmpresa")

    // Realiza um loop do tamanho dos vetores
    for (i = 0; i < dadosLista.length; i++) {

        // Compara o valor do input de exclusão com o valor da posição atual do vetor
        if (nomePesquisar.value == dadosLista[i].nome) {

            encontrou = 1
            posicaoPesquisar = i

        }

    }

    if (encontrou == 1) {

        alert("Empresa encontrada!")


    } else {

        // Mostra mensagem de usuário inexistente
        alert("Empresa não encontrada!")


    }

    Limpar()

}





function Excluir(empresaName) {

    // Pega valores do LocalStorage (se tiver) e armazena
    todosDados = JSON.parse(localStorage.getItem("dados_empresa"))
  
    // Realiza um loop do tamanho dos vetores
    for (i = 0; i < todosDados.length; i++) {
        
        // Compara o valor do input de exclusão com o valor da posição atual do vetor
        if(empresaName == todosDados[i].nome){
            posicaoExcluir = i
    
            // Utiliza a posição armazenada para excluir os dados
            todosDados.splice(posicaoExcluir, 1)
    
            // Mostra mensagem de dados excluídos
            alert("Empresa excluída!")
    
            // Joga para o LocalStorage novamente
            localStorage.setItem("dados_empresa", JSON.stringify(todosDados))
            
    
        }
    }
    Listar()
}



function limparDados() {
    document.getElementById("inptNome").value = ''
    document.getElementById("inptCNPJ").value = ''
    document.getElementById("inptEmail").value = ''
    document.getElementById("inptPhone").value = ''
    document.getElementById("inptEndereco").value = ''
    document.getElementById("slct").value = ''
    document.getElementById("inptNome").focus()
}


function Limpar() {
    document.getElementById("pesquisarEmpresa").value = ''
    document.getElementById("pesquisarEmpresa").focus()
}

// let gi = "Texto do objeto da Gi"
// let texto = document.createTextNode(gi)
// let valorNome = document.createElement('div')
// valorNome.appendChild(texto)
// let divNome = document.getElementById('divNomeEmpresa')
// divNome.appendChild(valorNome)


// let divNome = document.getElementById('divNomeEmpresa')

// divNome.innerHTML += "Tenho vergonha de terminar"







