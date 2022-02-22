/* Exercício de interpretação 1
            a - primeiro console.log vai imprimir "10"
                segundo console.log vai imprimir "50"
            
            b - não apareceria nada no console, visto que faltou o comando console.log, mesmo retornando resultado da function

    
    Exercício de interpretação 2
            a - Essa função pega o texto recebido em parâmetro, e independente do que fora escrito, o devolve por inteiro em letras minúsculas, além de fazer verificação
        se existe a palavra "cenoura" na frase.
            b - I) eu gosto de cenoura, true
               II) cenoura é bom pra vista, true
              III) cenouras crescem na terra, false
*/

    //Exercício em código 1

    function exibeDados(){
        console.log("Eu sou Diego, tenho 28 anos, moro em São José do Rio Preto e sou estudante")
    }


    let mostraFrase = function(nome, idade, cidade, profissao){

        console.log(`Olá! Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}`)

    }

    userName = prompt(`Por favor, insira seu nome:`)
    userAge = Number(prompt(`Insira sua idade:`))
    userCity = prompt(`Qual a cidade que você mora?`)
    userProfession = prompt(`Qual a sua profissão?`)

    mostraFrase(userName, userAge, userCity, userProfession)
    

    //Exercício em código 2

    //A:
    let numberSum = (num1, num2) =>{
        return num1 + num2
    } 

    primeiroNum = Number(prompt("Insira o primeiro número:"))
    segundoNum = Number(prompt("Insira o segundo número:"))

    console.log(numberSum(primeiroNum, segundoNum))


    //B:
    function comparaNumeros(x,y){  
        result = x > y
        return result
    }

    primeiroNum = Number(prompt("Insira o primeiro número:"))
    segundoNum = Number(prompt("Insira o segundo número:"))

    console.log(comparaNumeros(primeiroNum,segundoNum))


    //C:
    let checkPar = function(x){
        resto = x % 2
        return resto === 0
    }

    num = Number(prompt("Insira um número:"))
    console.log(`O número é par?`,checkPar(num))

    //D:
    let configFrase = frase =>{
       
        conversao = frase.toUpperCase()
        return conversao        
    } 

    let countFrase = contagem =>{

        counter = contagem.length
        return counter
    }

    sentenca = prompt("Insira uma frase!")
    console.log(configFrase(sentenca),",", countFrase(sentenca))


    //Exercício em código 3

    let somaNums = (x,y) =>{
        return x + y
    }

    let subNums = (x,y) =>{
        return x - y
    }

    let multNums = (x,y) =>{
        return x * y
    }

    let divNums = (x,y) =>{
        return x / y
    }

    numUm = Number(prompt("Por favor, insira um número!"))
    numDois = Number(prompt("Por favor, insira outro número!"))

    console.log(`Números inseridos: ${numUm} e ${numDois}`)
    console.log(`Soma: ${somaNums(numUm, numDois)}`)
    console.log(`Diferença: ${subNums(numUm, numDois)}`)
    console.log(`Multiplicação: ${multNums(numUm, numDois)}`)
    console.log(`Divisão: ${divNums(numUm, numDois)}`)

   

    //DESAFIO 1

    let printerParameter = parametro =>{
        console.log(parametro)
    }

    let sumParameters = (a,b) =>{
        result = a + b
    }

    number1 = Number(prompt("Primeiro número:"))
    number2 = Number(prompt("Segundo número:"))

    sumParameters(number1, number2)
    console.log(printerParameter(result))
 
    

    //DESAFIO 2
    
    let calcHip = function(cat1, cat2){
        hip = (cat1 * cat1) + (cat2 * cat2)
        return Math.sqrt(hip)
    }

    catetoUm = Number(prompt("Insira o primeiro cateto:"))
    catetoDois = Number(prompt("Insira o segundo cateto:"))

    console.log("Resultado da equação", calcHip(catetoUm, catetoDois))