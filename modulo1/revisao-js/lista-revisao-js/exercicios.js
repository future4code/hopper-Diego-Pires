// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  return array.sort((a,b) => a - b)
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    let arrayPares = []
    for(let numero of array){
        resto = numero % 2
        if(resto === 0){
           arrayPares.push(numero)
        }
    }
    return arrayPares
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let arrayElevados = []
    for(let numero of array){
        resto = numero % 2
        if(resto === 0){
            numero = numero * numero
           arrayElevados.push(numero)
        }
    }
    return arrayElevados
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  let maior = 0
  for (let numero of array){
      if(numero > maior){
          maior = numero
      }
  }
  return maior
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
  let maior
  let menor
  let booleano

  if(num1 > num2){
      maior = num1
      menor = num2
  }else{
      maior = num2
      menor = num1
  }

  let div = maior % menor

  if(div === 0){
      booleano = true
  }else{
      booleano = false
  }

  let dif = maior - menor

  const obj = {
      maiorNumero: maior,
      maiorDivisivelPorMenor: booleano,
      diferenca: dif      
  }

  return obj

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    const arrayPar = []
    let i = 0
    let num = 0
    while (i < n) {
        if(num % 2 === 0){
            arrayPar.push(num)   
            i++        
        } 
        num++
    }
    return arrayPar
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    let result
 if(ladoA === ladoB && ladoA === ladoC && ladoB === ladoC){
    result = `Equilátero`
 } else if(ladoA !== ladoB && ladoA !== ladoC && ladoB !== ladoC){
    result = `Escaleno`
 } else{
    result = `Isósceles`
 }
 return result
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
 
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
 const frase = `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
 return frase
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   const objAnonimo = {
       ...pessoa,
       nome: `ANÔNIMO`
   }
   return objAnonimo
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
 
const liberarPessoas = (individuo) =>{
    if(individuo.altura >= 1.5 && individuo.idade > 14 && individuo.idade < 60 ){
        return individuo
    }
}

const filtrarAutorizados = pessoas.filter(liberarPessoas)

return filtrarAutorizados

}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
const negarPessoas = (ind) =>{
    if(ind.altura < 1.5 || ind.idade <= 14 || ind.idade >= 60 ){
        return ind
    }
}

const filtrarNegados = pessoas.filter(negarPessoas)

return filtrarNegados

}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
for (let i = 0; i < array.length; i++) {
  contas.compras
    
}

}

// EXERCÍCIO15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    return consultas.sort((a,b) => a.nome.localeCompare(b.nome))
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}