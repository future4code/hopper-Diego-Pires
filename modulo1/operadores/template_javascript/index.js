/* Exercício 1: Primeiro console log: a. falso
                Segundo console log: b. falso
                Terceiro console log: c. verdadeiro
                Quarto console log: d. booleano

------------------------------------------------------------- 
    Exercício 2: O tipo do valor que ele recebe para as variáveis vem em forma de String. Provavelmente na hora de somar ele simplesmente concatena os caracteres.

-------------------------------------------------------------  

    Exercício 3:  Preparar a conversão do valor recebido em String para número.

                  let primeiroNumero = Number(prompt("Digite um numero!"))
                  let segundoNumero = Number(prompt("Digite outro numero!"))

                  const soma = primeiroNumero + segundoNumero

                  console.log(soma)

*/

//Exercício 1 escrito:

let firstAge = Number(prompt("Qual a sua idade?"))
let secondAge = Number(prompt("Qual a idade do seu amigo?"))

let ageComp = firstAge > secondAge
let subAges = firstAge - secondAge

console.log("Sua idade é maior que a do seu amigo?",ageComp)
console.log("A diferença de idades é de",subAges,"anos.")

//Exercício 2 escrito:

let par = Number(prompt("Por favor insira um número par:"))

let resto = par % 2

console.log("O resto da divisão é",resto)

//Todos os números pares são divisíveis por 2, tendo zero como resto
//No caso de números ímpares, sempre haverá resto na divisão por 2

//Exercício 3 escrito:

let age = Number(prompt("Por favor insira sua idade:"))

let months = age * 12
let days = months * 30
let hours = days * 24

console.log("sua idade de",age,"anos, equivale a",months,"meses, ou a",days,"dias,ou a",hours,"horas de existência.")

//Exercício 4 escrito:

let numberOne = Number(prompt("Por favor, insira um número qualquer:"))
let numberTwo = Number(prompt("Agora, mais um número:"))

let maior = numberOne > numberTwo
let igual = numberOne === numberTwo
let restoUm = numberOne % numberTwo
let divisivelUm = restoUm === 0
let restoDois = numberTwo % numberOne
let divisivelDois = restoDois === 0

console.log("O primeiro número é maior que o segundo?",maior)
console.log("O primeiro número é igual ao segundo?",igual)
console.log("O primeiro número é divisível pelo segundo?",divisivelUm)
console.log("O segundo número é divisível pelo primeiro?",divisivelDois)

//Desafio 2

f = 77
c = 80
cDois = 30

k = (f - 32)*(5/9) + 273.15
f = (c) * (9/5) + 32
fDois = (cDois) * (9/5) + 32
kDois = (fDois - 32)*(5/9) + 273.15

console.log("Temperatura de 77 graus Fahrenheit convertida para",k,"Kelvin")
console.log("Temperatura de 80 graus Celsius convertida para",f,"graus Fahrenheit")
console.log("Temperatura de 30 graus Celsius convertida para",fDois,"graus Fahrenheit e",kDois,"Kelvin")

grausCelsius = Number(prompt("Insira a temperatura em graus Celsius que deseja converter:"))

fUser = (grausCelsius) * (9/5) + 32
kUser = (fUser - 32)*(5/9) + 273.15

console.log("Temperatura de",grausCelsius,"graus Celsius convertida para",fUser,"graus Fahrenheit e",kUser,"Kelvin")

// Desafio 2

let consumoEnergia = Number(prompt("Insira quantos quilowatts consumidos por hora:"))

let valorPagar = consumoEnergia * 0.05

console.log("Valor a pagar sem desconto: R$",valorPagar)

valorDescontar = Number(prompt("Qual o desconto a ser dado(em decimal)?"))

let resultadoDesconto = valorPagar - (valorPagar * valorDescontar)

console.log("Valor a ser pago com desconto: R$",resultadoDesconto)

//Desafio 3

vlrlibra = Number(prompt("Quantidade de libras para conversão em kilos:"))
vlronca = Number(prompt("Quantidade de onças para conversão em kilos:"))
vlrmilha = Number(prompt("Quantidade de milhas para conversão em metros:"))
vlrft = Number(prompt("Quantidade de pés para conversão em metros:"))
vlrgalao = Number(prompt("Quantidade de galões para conversão em litros:"))
vlrxic = Number(prompt("Quantidade de xícaras para conversão em litros:"))

let lbConv = vlrlibra * 0.453592
let onConv = vlronca * 0.0283495
let miConv = vlrmilha * 1609.34
let ftConv = vlrft * 0.3048
let glConv = vlrgalao * 3.78541
let xicConv = vlrxic * 0.24

console.log(vlrlibra,"libras equivalem a",lbConv,"kilos")
console.log(vlronca,"onças equivalem a",onConv,"kilos")
console.log(vlrmilha,"milhas equivalem a",miConv,"metros")
console.log(vlrft,"pés equivalem a",ftConv,"metros")
console.log(vlrgalao,"galões equivalem a",glConv,"litros")
console.log(vlrxic,"xícaras equivalem a",xicConv,"litros")