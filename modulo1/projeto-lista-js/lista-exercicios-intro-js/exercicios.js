// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  
  let altura = Number(prompt("Entre com a altura do retângulo:"))
  let largura = Number(prompt("Agora, insira a largura do retângulo"))

  let area = altura * largura

  console.log(area)

}

// EXERCÍCIO 02
function imprimeIdade() {

  let anoAtual = Number(prompt("Em qual ano estamos?"))
  let anoNasc = Number(prompt("Qual o ano do seu nascimento?"))

  let idade = anoAtual - anoNasc

  console.log(idade)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  
  let imc = peso / (altura * altura)

  return imc

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  
  let nome = prompt("Insira seu nome:")
  let idade = prompt("Insira sua idade:")
  let email = prompt("Insira seu email:")

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {

  let arrayCores = []

  let cor1 = prompt("Insira sua primeira cor favorita:")
  let cor2 = prompt("Insira sua segunda cor favorita:")
  let cor3 = prompt("Insira sua terceira cor favorita:")

  arrayCores = [cor1, cor2, cor3]

  console.log(arrayCores)  

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  
  maiuscula = string.toUpperCase()

  return maiuscula

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  
  resultado = custo / valorIngresso

  return resultado

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
    
  checagem = string1.length == string2.length

    return checagem

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
    
  return array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  
  lastElement = array[array.length - 1]

  return lastElement

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}