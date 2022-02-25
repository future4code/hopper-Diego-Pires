//Exercício de interpretação 1
/* A) O código recebe um número do usuário, e o teste condicional verifica se o resto da divisão por dois deste número é igual a zero.
      Se for zero, exibe a mensagem que passou no teste. Caso contrário, exibe que não passou no teste.
   
   B) Para todos os números pares, ou divisíveis por dois.

   C) Para todos os número ímpares, cujo resto sempre existirá.
*/

// Exercício de interpretação 2
/* 
   A) O código solicita ao usuário que insira uma fruta para que haja a filtragem pelo switch. Se o usuário entrou com laranja, ou maçã,
      ou uva, ou pêra, estes terão seus preços específicos só deles. Caso contrário, a fruta fora desta seleção terá o valor padrão de 5.
      Por fim, o código retorna o valor da fruta especificada.

   B) O preço da fruta maçã é R$ 2.25

   C) A mensagem mostrará o valor do case seguinte que tenha o break corretamente.
      No console log: O preço da fruta Pêra é R$ 5
*/

//Exercício de interpretação 3
/*
   A) Está alocando na variável numero o valor do tipo Number solicitado para o usuário.

   B) Considerando a ideia principal do código:
      No caso do usuário digitar 10: "Esse número passou no teste"
      No caso do usuário digitar -10: "Essa mensagem é secreta!!!"

   C) Haverá. A variável mensagem precisa estar fora da estrutura If-Else, conforme código a seguir:

      const numero = Number(prompt("Digite o primeiro número."))

      if(numero > 0) {
        console.log("Esse número passou no teste")
      }

    let mensagem = "Essa mensagem é secreta!!!"
    console.log(mensagem)

*/

//Exercício de escrita 1

      let age = Number(prompt("Qual a sua idade?"))

      if(age >= 18){
         console.log("Você pode dirigir!")
      } else{
         console.log("Você não pode dirigir!")
      }

//Exercício de escrita 2

      let turma = prompt(`Olá aluno! Por favor, insira a letra referente ao turno que você tem aula:
      M - Matutino(Manhã)
      V - Vespertino(Tarde)
      N - Noturno(Noite)`)

      let periodo = turma.toUpperCase()

      if(periodo === "M"){
         console.log("Bom dia!")
      } else if(periodo === "V"){
         console.log("Boa tarde!")
      } else if(periodo === "N"){
         console.log("Boa noite!")
      } else{
         console.log("Opção incorreta!")
      }


//Exercício de escrita 3

      let turma = prompt(`Olá aluno! Por favor, insira a letra referente ao turno que você tem aula:
      M - Matutino(Manhã)
      V - Vespertino(Tarde)
      N - Noturno(Noite)`)

      let periodo = turma.toUpperCase()

      switch (periodo){
         case 'M':
            console.log("Bom dia!")
            break
         case 'V':
            console.log("Boa tarde!")
            break
         case 'N':
            console.log("Boa noite!")
            break
         default:
            console.log("Opção incorreta!")
            break
      }


//Exercício de escrita 4

      let gender = prompt("Qual o gênero do filme que deseja assistir?")
      let price = Number(prompt("Qual o preço do ingresso?"))

      if (gender.toLowerCase() === "fantasia" && price <= 15){
         console.log("Bom filme!")
      } else{
         console.log("Escolha outro filme :(")
      }


//Desafio 1

      let gender = prompt("Qual o gênero do filme que deseja assistir?")
      let price = Number(prompt("Qual o preço do ingresso?"))

      if (gender.toLowerCase() === "fantasia" && price <= 15){
         refeicao = prompt("Qual sua opção de alimento?")
         console.log("Bom filme!")
         console.log("Aproveite o seu", refeicao.toLowerCase(),"!")
      } else{
          console.log("Escolha outro filme :(")
      }


//Desafio 2

      let nome = prompt(`Nome completo:`)
      let tipoJogo = prompt(`Tipo de jogo: IN - Partida internacional
                        DO - Partida doméstica`)
      let etapaJogo = prompt(`Etapa do jogo:  SF - Semi-final
                           DT - Decisão de terceiro lugar
                           FI - Final`)
      let categoria = Number(prompt("Categoria: 1 a 4"))
      let quantidade = Number(prompt("Quantidade de ingressos:"))
      let valorDolar = 4.10

        if(tipoJogo.toUpperCase() === "IN"){
            tipoJogoExibicao = "Internacional"
        } else{
           tipoJogoExibicao = "Nacional"
        }

        switch(etapaJogo.toUpperCase()){
           case 'SF':
           etapaJogoExibicao = "Semi-final"
           break
         
            case 'DT':
               etapaJogoExibicao = "Decisão de terceiro lugar"
               break

                case 'FI':
                   etapaJogoExibicao = "Grande final"
                   break
        }
      
        if(etapaJogo.toUpperCase() === "SF"){
           switch(categoria){
              case 1:
                 value = 1320.00
                 break

                  case 2:
                     value = 880.00
                     break

                      case 3:
                         value = 550.00
                         break

                          case 4:
                             value = 220.00
                             break

                              default:
                                 console.log("Categoria não encontrada.")
                                 break
           }
               
        } else if(etapaJogo.toUpperCase() === "DT"){
            switch(categoria){
               case 1:
                  value = 660.00
                  break

                   case 2:
                      value = 440.00
                      break

                       case 3:
                          value = 330.00
                          break

                           case 4:
                              value = 170.00
                              break

                               default:
                                  console.log("Categoria não encontrada.")
                                  break
            }
        } else if(etapaJogo.toUpperCase() === "FI"){
         switch(categoria){
            case 1:
               value = 1980.00
               break

                case 2:
                   value = 1320.00
                   break

                    case 3:
                       value = 880.00
                       break

                        case 4:
                           value = 330.00
                           break

                            default:
                               console.log("Categoria não encontrada.")
                               break
           }
        } else{
           console.log("Etapa de jogo não encontrada.")
        }


        if (tipoJogo.toUpperCase() === "IN"){
           valorUnitario = value / valorDolar
           textoUnitario = `U$ ${valorUnitario}`

           valorFinal = valorUnitario * quantidade
           textoFinal = `U$ ${valorFinal}`

        } else{
           valorUnitario = value
           textoUnitario = `R$ ${valorUnitario}`

           valorFinal = valorUnitario * quantidade
           textoFinal = `R$ ${valorFinal}`
        }

        //let valorFinal = valorUnitario * quantidade

        console.log(`         ---- Dados da compra ----
        Nome do cliente: ${nome}
        Tipo do jogo: ${tipoJogoExibicao}
        Etapa do jogo: ${etapaJogoExibicao}
        Categoria: ${categoria}
        Quantidade de ingressos: ${quantidade}
        ---- Valores ----
        Valor do ingresso: ${textoUnitario}
        Valor total: ${textoFinal}`) 
       
        

