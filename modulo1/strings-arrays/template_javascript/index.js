/* Exercício 1 - a. undefined 
                 b. null
                 c. 11
                 d. 3
                 e. 3,19,5,6,7,8,9,10,11,12,13
                 f. 9

   Exercício 2 - SUBI NUM ÔNIBUS EM MIRROCOS          

   const nome = prompt("Qual o seu nome?")
   const email = prompt("Qual o seu email?")

  */

//EXERCÍCIO ESCRITO 1

console.log(`O e-mail ${email} foi cadastrado com sucesso. Seja bem-vindo(a),${nome}`)
   
             
//EXERCÍCIO ESCRITO 2

let arrayList = ["Churrasco", "Estrogonofe", "Kibe", "Temaki", "Pizza"]

console.log(arrayList)
console.log(`Estas são as minhas comidas preferidas:`)
console.log(arrayList[0])
console.log(arrayList[1])
console.log(arrayList[2])
console.log(arrayList[3])
console.log(arrayList[4])

let escolha = prompt("Qual sua comida preferida?")

arrayList[1] = escolha

console.log("Lista atualizada!")

console.log(arrayList[0])
console.log(arrayList[1])
console.log(arrayList[2])
console.log(arrayList[3])
console.log(arrayList[4])
 
//EXERCÍCIO ESCRITO 3

let listaDeTarefas = [];

tarefaUm = prompt("Cite uma primeira tarefa que você precisa realizar no seu dia:")
tarefaDois = prompt("Agora, uma segunda tarefa:")
tarefaTres = prompt("Por fim, uma última tarefa:")

listaDeTarefas = [tarefaUm, tarefaDois, tarefaTres]

console.log("Tarefas lembradas:")
console.log(listaDeTarefas[0])
console.log(listaDeTarefas[1])
console.log(listaDeTarefas[2])

let resp = Number(prompt(`Qual das tarefas citadas você já concluiu?
               1 - ${tarefaUm}
               2 - ${tarefaDois}
               3 - ${tarefaTres}`))

    i = resp - 1

listaDeTarefas.splice(i,1)

console.log(`Lista de tarefas atualizada!${listaDeTarefas}`)


//DESAFIO 1

let lista = []

frase = prompt("Insira uma frase aleatória:")

lista = frase.split(" ")

console.log(lista)

 
//DESAFIO 2

arrayFrutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]

console.log("Index localizada:", arrayFrutas.findIndex((fruta) => fruta == 'Abacaxi'))
console.log("Tamanho do array:", arrayFrutas.length)
