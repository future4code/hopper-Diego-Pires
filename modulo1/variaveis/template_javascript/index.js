/* EXERCÍCIO 1: Estão sendo declaradas duas variáveis que podem ser redefinidas por conta do let: a e b.
                A cada uma destas foi atribuído o valor 10 EM NÚMEROS(sem aspas).
             -> O primeiro comando console.log(b) printará no console do navegador o valor recebido por B, que no caso é 10.
                Depois, a variável b passa a receber o valor 5(pois está declarada com let acima informado), sobrescrevendo o valor 10 que anteriormente estava alocado.
             -> Por fim, um novo comando de console.log(a,b) exibe o valor recebido inicialmente de a, juntamente com o novo recebido por b, sendo assim respectivamente 10 e 5.
*/

/* EXERCÍCIO 2: Estão sendo declaradas inicialmente duas variáveis que podem ser redefinidas por conta do let: a e b.
                A variável a recebeu o valor numérico 10, enquanto a variável b recebeu o valor numérico 20.
                Uma variável nova declarada com o nome c recebe o valor alocado em a, e passa a ter o valor 10.
                A variável b passa por redefinição e recebe o valor contido em c, e passa a ter o valor 10.
                A variável a que já tinha o valor 10, recebe o novo valor de b, e mantém seus 10.
             -> Por fim, um comando console.log(a,b,c) exibe no console do navegador três valores idênticos em suas variáveis, que é 10.
*/

/* EXERCÍCIO 3: let horasTrabalhadas = prompt("Quantas horas você trabalha por dia?")
                let ganhoDiario = prompt("Quanto você recebe por dia?")
                alert(`Voce recebe ${horasTrabalhadas/ganhoDiario} por hora`)
*/

/////////////////////////////////////////////////////////////     EXERCÍCIO 1     ////////////////////////////////////////////////////////////////////////////////////////

let nome = prompt("Por favor insira seu nome:")
let idade = Number(prompt("Agora, entre com sua idade:"))

console.log(typeof nome)
console.log(typeof idade)


// a variável nome apresentou o tipo undefined, pois não possui um valor atrelado a ela.
// a variável idade, contudo, apesar de ainda não ter recebido um valor, já está preparada para a conversão em número com o método Number(), estando assim como tipo number

///////////// Após solicitar entradas do usuário: /////////////

// a variável nome agora mudou para string, pois recebeu um valor em texto
// a variável idade persistiu com o tipo number


console.log("Olá", nome, ", você tem", idade, "anos.")

/////////////////////////////////////////////////////////////     EXERCÍCIO 2     ////////////////////////////////////////////////////////////////////////////////////////

let firstQuestion = "Você é brasileiro?"
let secondQuestion = "Você tem passaporte?"
let thirdQuestion = "Você já viajou para os Estados Unidos?"

let firstAnswer = prompt(firstQuestion)
let secondAnswer = prompt(secondQuestion)
let thirdAnswer = prompt(thirdQuestion)

console.log(firstQuestion,"-",firstAnswer)
console.log(secondQuestion,"-",secondAnswer)
console.log(thirdQuestion,"-",thirdAnswer)

/////////////////////////////////////////////////////////////     EXERCÍCIO 3     ////////////////////////////////////////////////////////////////////////////////////////

let a = 10
let b = 25
let c = a
a = b
b = c

console.log("O novo valor de a é", a)
console.log("O novo valor de b é",b)

////////////////////////////////////////////////////////////      DESAFIO       //////////////////////////////////////////////////////////////////////////////////////////

let a = Number(prompt("Entre com o primeiro número:"))
let b = Number(prompt("Entre com o segundo número:"))

let soma = a + b
let mult = a * b

console.log("1. O primeiro número somado ao segundo número resulta em",soma)
console.log("2. O primeiro número multiplicado pelo segundo número resulta em", mult)