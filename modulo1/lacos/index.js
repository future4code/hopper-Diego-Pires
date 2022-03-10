/* Exercício interpretativo 1 - O código está inicializando um laço com o valor inicial em 0. De maneira resumida, enquanto o valor da variável i
for menor que 5, ele implementa essa variável e soma dentro de outra variável "valor", que posteriormente é exibida na tela.
No fim, o valor a ser exibido será 10.*/

/* Exercício interpretativo 2 
    
    A) 19,21,23,25,27,30
    
    B) Não seria possível pelo for...of... . */

/* Exercício interpretativo 3 

    Resultado - *
                ** 
                ***
                ****    */

//Exercício escrito 1
/*
let pets = Number(prompt("Quantos animais de estimação você tem em casa?"))

const listaPets = []

if(pets === 0){
    console.log("Que pena! Você pode adotar um pet!")
} else{
    for(let i = 0; i < pets; i++){
        listaPets.push(prompt("Nome do pet:")) 
    }

    console.log(listaPets)

} */

//Exercício escrito 2

const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

//A)
   /* for(let numero of array){
        console.log(numero)
    }*/

//B)
   /* for(let numero of array){
        console.log(numero/10)
    }*/

//C)
     /*  const arrayPar = []
       for(let numero of array){
       resto = numero % 2

        if(resto === 0){
            arrayPar.push(numero)
        } 

    }
        console.log(arrayPar) */

//D)  "O elemento do índex ","é: "
     /*   const arrayIndexados = []
        arrayIndexados[0] = "O elemento do índex "
        arrayIndexados[2] = "é: "
        
        for(let i = 0; i < array; i++){
            const num = array[i]
            arrayIndexados[1] = [i]
            arrayIndexados[3] = [num]
            console.log(arrayIndexados)
        }*/


//E)
   /* let maior = 0
    for(let number of array){
        if(number > maior){
            maior = number
        }
    } console.log(`O maior número é ${maior}`)

    let menor = array[0]
    for(let number of array){
        if(number < menor){
            menor = number
        }
    } console.log(`O menor número é ${menor}`) */
    






