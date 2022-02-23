//Exercício 1 interpretado
/* 
    A) Primeiro console.log: Matheus Nachtergaele
       Segundo console.log: Virginia Cavendish
       Terceiro console.log: canal: Globo, horário: 14h

//Exercício 2 interpretado

    A) Primeiro console.log: nome: Juca, idade: 3, raca: SRD
       Segundo console.log: nome: Juba, idade 3, raca: SRD
       Terceiro console.log: nome: Jubo, idade 3, raca: SRD
    
    B) Os três pontos fazem o spread(espalhamento). Eles passam a um objeto recém criado chaves(características)
    idênticas ao do objeto pai.

//Exercício 3 interpretado

    //Precisei executar o código.
    A) Primeiro console.log: false
       Segundo console.log: undefined

    B) Ao que entendi, a função é chamada para printar uma possível chave que exista dentro do objeto pessoa(primeiro parâmetro traz o objeto)
    através do segundo parâmetro como referência. Sendo assim, no primeiro console log ele encontra a chave backender dentro do objeto e retorna à tela.
    No segundo console log ele entra com o parâmetro altura, que não existe nas propriedades do objeto, retornando indefinido.
    */
    
//Exercício de código a escrever 1

    //A)
        const pessoa = {
            nome: "Diego",
            apelidos: ["Diggs","Di", "Japonês"]
        }

        let frase = dados => {
            console.log(`Eu sou ${dados.nome}, mas pode me chamar de: ${dados.apelidos[0]}, ${dados.apelidos[1]}, ou ${dados.apelidos[2]}`)
        }

        frase(pessoa)
    
   //B)
        const pessoaReformulada = {
            ...pessoa,
            apelidos: ["Idoso", "Diko", "Rigonilds"]
        }
        
        frase(pessoaReformulada)
    

//Exercício de código a escrever 2

    //A)
        const objUm = {
            nome: "Diego",
            idade: 28,
            profissao: "Assistente de Tecnologia" 
        }

        const objDois = {
            nome: "Reynoldes",
            idade: 30,
            profissao: "Meio de Campo"
        }

    //B)
        let transformaArray = (firstData, secondData) => {
            console.log([firstData.nome , firstData.nome.length , firstData.idade , firstData.profissao , firstData.profissao.length])
            console.log([secondData.nome , secondData.nome.length , secondData.idade , secondData.profissao , secondData.profissao.length])
        }
        
        transformaArray(objUm, objDois)

       

//Exercício de código a escrever 3

    //A)
        let carrinho = []

    //B)
        const frutaUm = {
            nome: "Limão",
            disponibilidade: true
        }

        const frutaDois = {
            nome: "Abacaxi",
            disponibilidade: true
        }

        const frutaTres = {
            nome: "Tomate",
            disponibilidade: true
        }

    //C)
        let listandoItens = ( itemUm, itemDois, itemTres, arrayFrutas) => {
            
            arrayFrutas.push(itemUm)
            arrayFrutas.push(itemDois)
            arrayFrutas.push(itemTres)
            return arrayFrutas

        }

        listandoItens(frutaUm, frutaDois, frutaTres, carrinho)

    //D)
        console.log(carrinho)

 


