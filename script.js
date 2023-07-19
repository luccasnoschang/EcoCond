let nomeCadastroCond = document.getElementById("inptNomeCond")
let cnpjCond = document.getElementById("inptCNPJCond")
let emailCond = document.getElementById("inptEmailCond")
let telefoneCond = document.getElementById("inptPhoneCond")
let enderecoCond = document.getElementById("inptEnderecoCond")
let senhaCond = document.getElementById("inptSenhaCond")

let posicaoExcluir

let todosDadosCond = []

function Cadastrar() {

    let condominio = {
        nomeCond: nomeCadastroCond.value,
        cnpjCond: cnpjCond.value,
        emailCond: emailCond.value,
        telefoneCond: telefoneCond.value,
        enderecoCond: enderecoCond.value,
        senhaCond: senhaCond.value,
    }

    todosDadosCond.push(condominio)

    todosDadosCond = JSON.parse(localStorage.getItem("dados_condominio"));


    if (todosDadosCond == null) {

        todosDadosCond = []

        todosDadosCond.push(condominio)

        localStorage.setItem("dados_condominio", JSON.stringify(todosDadosCond))

    } else {
        todosDadosCond.push(condominio)
        localStorage.setItem("dados_condominio", JSON.stringify(todosDadosCond))

    }
    alert("Condomínio cadastado com sucesso!")

    window.location.href="empresas.html"

    limparDados()
}




function Listar() {

    todosDadosCond = []
    // Pega valores do LocalStorage (se tiver) e armazena
    todosDadosCond = JSON.parse(localStorage.getItem("dados_condominio"))

    let divListCond = document.getElementById("List")

    let dadosListaCond, dadosDivCond

    if (todosDadosCond.length == null) {
        alert("Não possui condomínios cadastradas!")
    } else {

        while (divListCond.firstChild) {

            // Remove todas divs filhas (zera a lista de divs)
            divListCond.removeChild(divListCond.firstChild);

        }

        // Enquanto a lista possuir divs



        for (i = 0; i < todosDadosCond.length; i++) {


            let nomeCondominio = document.createTextNode(`Condomínio: `)
            let cnpjCondominio = document.createTextNode(`CNPJ: `)
            let emailCondominio = document.createTextNode(`Email: `)
            let telefoneCondominio = document.createTextNode(`Telefone: `)
            let enderecoCondominio = document.createTextNode(`Endereço: `)
            let senhaCondominio = document.createTextNode(`Senha: `)

            let inptNomeCondominio = document.createElement('input')
            let inptcnpjCondominio = document.createElement('input')
            let inptemailCondominio = document.createElement('input')
            let inpttelefoneCondominio = document.createElement('input')
            let inptenderecoCondominio = document.createElement('input')
            let inptsenhaCondominio = document.createElement('input')

            let btnEditarCondominio = document.createElement('button')
            let btnSalvarCondominio = document.createElement('button')
            let btnExcluirCondominio = document.createElement('button')


            dadosListaCond = document.createElement('div')

            let addBr = document.createElement('br')

            divListCond.appendChild(dadosListaCond)

            dadosListaCond.classList = ('Condominios')

            dadosListaCond.id = (`Condominio${i}`)


            for (j = 0; j <= 5; j++) {

                dadosDivCond = document.createElement('p')

                dadosListaCond.appendChild(dadosDivCond)

                dadosDivCond.classList = ('Divs')


                switch (j) {

                    case 0:
                        dadosDivCond.appendChild(nomeCondominio)
                        dadosDivCond.appendChild(inptNomeCondominio)
                        inptNomeCondominio.id = (`InptCond${i}${j}`)
                        document.getElementById(`InptCond${i}${j}`).disabled = true
                        document.getElementById(`InptCond${i}${j}`).value = todosDadosCond[i].nomeCond
                        break

                    case 1:
                        dadosDivCond.appendChild(cnpjCondominio)
                        dadosDivCond.appendChild(inptcnpjCondominio)
                        inptcnpjCondominio.id = (`InptCond${i}${j}`)
                        document.getElementById(`InptCond${i}${j}`).disabled = true
                        document.getElementById(`InptCond${i}${j}`).value = todosDadosCond[i].cnpjCond
                        break

                    case 2:
                        dadosDivCond.appendChild(emailCondominio)
                        dadosDivCond.appendChild(inptemailCondominio)
                        inptemailCondominio.id = (`InptCond${i}${j}`)
                        document.getElementById(`InptCond${i}${j}`).disabled = true
                        document.getElementById(`InptCond${i}${j}`).value = todosDadosCond[i].emailCond
                        break

                    case 3:
                        dadosDivCond.appendChild(telefoneCondominio)
                        dadosDivCond.appendChild(inpttelefoneCondominio)
                        inpttelefoneCondominio.id = (`InptCond${i}${j}`)
                        document.getElementById(`InptCond${i}${j}`).disabled = true
                        document.getElementById(`InptCond${i}${j}`).value = todosDadosCond[i].telefoneCond
                        break

                    case 4:
                        dadosDivCond.appendChild(enderecoCondominio)
                        dadosDivCond.appendChild(inptenderecoCondominio)
                        inptenderecoCondominio.id = (`InptCond${i}${j}`)
                        document.getElementById(`InptCond${i}${j}`).disabled = true
                        document.getElementById(`InptCond${i}${j}`).value = todosDadosCond[i].enderecoCond

                        break

                    case 5:
                        dadosDivCond.appendChild(senhaCondominio)
                        dadosDivCond.appendChild(inptsenhaCondominio)
                        inptsenhaCondominio.id = (`InptCond${i}${j}`)
                        document.getElementById(`InptCond${i}${j}`).disabled = true
                        document.getElementById(`InptCond${i}${j}`).value = todosDadosCond[i].senhaCond

                        dadosDivCond.appendChild(addBr)
                        dadosDivCond.appendChild(addBr)
                        break


                }


            }

            dadosDivCond.appendChild(btnEditarCondominio)
            btnEditarCondominio.setAttribute('onclick', `Editar('${todosDadosCond[i].nomeCond}')`)
            btnEditarCondominio.id = (`btnEditar${i}`)
            btnEditarCondominio.innerHTML = (`EDITAR`)

            dadosDivCond.appendChild(btnSalvarCondominio)
            btnSalvarCondominio.setAttribute('onclick', `Salvar('${todosDadosCond[i].nomeCond}')`)
            btnSalvarCondominio.id = (`btnSalvar${i}`)
            document.getElementById(`btnSalvar${i}`).disabled = true
            btnSalvarCondominio.innerHTML = (`SALVAR`)

            dadosDivCond.appendChild(btnExcluirCondominio)
            btnExcluirCondominio.id = (`btnExcluir${i}`)
            btnExcluirCondominio.innerHTML = (`EXCLUIR`)
            btnExcluirCondominio.setAttribute('onclick', `Excluir('${todosDadosCond[i].nomeCond}')`)

        }

    }

}


function Editar(condominioName) {

    for (i = 0; i < todosDadosCond.length; i++) {
        
        // Compara o valor do input de exclusão com o valor da posição atual do vetor
        if(condominioName == todosDadosCond[i].nomeCond){
            posicaoExcluir = i
        }
    }
   
    document.getElementById(`btnSalvar${posicaoExcluir}`).disabled = false
    document.getElementById(`btnEditar${posicaoExcluir}`).disabled = true

    todosDadosCond[posicaoExcluir].nomeCond = document.getElementById(`InptCond${posicaoExcluir}0`).value
    document.getElementById(`InptCond${posicaoExcluir}0`).disabled = false

    todosDadosCond[posicaoExcluir].cnpjCond = document.getElementById(`InptCond${posicaoExcluir}1`).value
    document.getElementById(`InptCond${posicaoExcluir}1`).disabled = false

    todosDadosCond[posicaoExcluir].emailCond = document.getElementById(`InptCond${posicaoExcluir}2`).value
    document.getElementById(`InptCond${posicaoExcluir}2`).disabled = false

    todosDadosCond[posicaoExcluir].telefoneCond = document.getElementById(`InptCond${posicaoExcluir}3`).value
    document.getElementById(`InptCond${posicaoExcluir}3`).disabled = false

    todosDadosCond[posicaoExcluir].enderecoCond = document.getElementById(`InptCond${posicaoExcluir}4`).value
    document.getElementById(`InptCond${posicaoExcluir}4`).disabled = false
    
    todosDadosCond[posicaoExcluir].senhaCond = document.getElementById(`InptCond${posicaoExcluir}5`).value
    document.getElementById(`InptCond${posicaoExcluir}5`).disabled = false
 

}

function Salvar(condominioName) {

     // Pega valores do LocalStorage (se tiver) e armazena
    todosDadosCond = JSON.parse(localStorage.getItem("dados_condominio"))
  
    // Realiza um loop do tamanho dos vetores
    for (i = 0; i < todosDadosCond.length; i++) {
        
        // Compara o valor do input de exclusão com o valor da posição atual do vetor
        if(condominioName == todosDadosCond[i].nomeCond){
            posicaoExcluir = i
      
        }
    }
    
    
    
    document.getElementById(`btnSalvar${posicaoExcluir}`).disabled = true
    document.getElementById(`btnEditar${posicaoExcluir}`).disabled = false
    
    todosDadosCond[posicaoExcluir].nomeCond = document.getElementById(`InptCond${posicaoExcluir}0`).value
    document.getElementById(`InptCond${posicaoExcluir}0`).disabled = true

    todosDadosCond[posicaoExcluir].cnpjCond = document.getElementById(`InptCond${posicaoExcluir}1`).value
    document.getElementById(`InptCond${posicaoExcluir}1`).disabled = true
    
    todosDadosCond[posicaoExcluir].emailCond = document.getElementById(`InptCond${posicaoExcluir}2`).value
    document.getElementById(`InptCond${posicaoExcluir}2`).disabled = true
    
    todosDadosCond[posicaoExcluir].telefoneCond = document.getElementById(`InptCond${posicaoExcluir}3`).value
    document.getElementById(`InptCond${posicaoExcluir}3`).disabled = true
    
    todosDadosCond[posicaoExcluir].enderecoCond = document.getElementById(`InptCond${posicaoExcluir}4`).value
    document.getElementById(`InptCond${posicaoExcluir}4`).disabled = true
    
    todosDadosCond[posicaoExcluir].senhaCond = document.getElementById(`InptCond${posicaoExcluir}5`).value
    document.getElementById(`InptCond${posicaoExcluir}5`).disabled = true
    // Joga para o LocalStorage novamente
    localStorage.setItem("dados_condominio", JSON.stringify(todosDadosCond))

    Listar()
    
}



function Pesquisar() {

    // Pega valores do LocalStorage (se tiver) e armazena
    dadosListaCond = JSON.parse(localStorage.getItem("dados_condominio"))

    // Cria uma variável ou flag para indicar que encontrou
    let encontrou = 0
    let nomePesquisar = document.getElementById("pesquisarCondominio")

    // Realiza um loop do tamanho dos vetores
    for (i = 0; i < dadosListaCond.length; i++) {

        // Compara o valor do input de exclusão com o valor da posição atual do vetor
        if (nomePesquisar.value == dadosListaCond[i].nomeCond) {

            encontrou = 1
            posicaoPesquisar = i

        }

    }

    if (encontrou == 1) {

        alert("Condomínio Encontrado!")


    } else {

        // Mostra mensagem de usuário inexistente
        alert("Condomínio não encontrado!")


    }

    Limpar()

}

function Excluir(condominioName) {

    // Pega valores do LocalStorage (se tiver) e armazena
    todosDadosCond = JSON.parse(localStorage.getItem("dados_condominio"))
  
    // Realiza um loop do tamanho dos vetores
    for (i = 0; i < todosDadosCond.length; i++) {
        
        // Compara o valor do input de exclusão com o valor da posição atual do vetor
        if(condominioName == todosDadosCond[i].nomeCond){
            posicaoExcluir = i
    
            // Utiliza a posição armazenada para excluir os dados
            todosDadosCond.splice(posicaoExcluir, 1)
    
            // Mostra mensagem de dados excluídos
            alert("Condomínio excluído!")
    
            // Joga para o LocalStorage novamente
            localStorage.setItem("dados_condominio", JSON.stringify(todosDadosCond))
            
    
        }
    }
    Listar()
}



function limparDados() {
    document.getElementById("inptNomeCond").value = ''
    document.getElementById("inptCNPJCond").value = ''
    document.getElementById("inptEmailCond").value = ''
    document.getElementById("inptPhoneCond").value = ''
    document.getElementById("inptEnderecoCond").value = ''
    document.getElementById("inptSenhaCond").value = ''
    document.getElementById("inptNomeCond").focus()
}


function Limpar() {
    document.getElementById("pesquisarCondominio").value = ''
    document.getElementById("pesquisarCondominio").focus()
}


