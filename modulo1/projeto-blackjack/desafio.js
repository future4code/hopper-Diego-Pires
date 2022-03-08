console.log(`Bem vindo a Blackjack!`)

//Verificando se o usuário deseja iniciar a rodada
if(confirm(`Deseja começar a rodada?`)){

   //Tirando as cartas iniciais
   const cartaUmUser = comprarCarta()
   const cartaDoisUser = comprarCarta()
   const cartaUmCpu = comprarCarta()
   const cartaDoisCpu = comprarCarta()

   //Criando array para receber cartas para exibição
   let listaCartasUser = [cartaUmUser.texto , cartaDoisUser.texto]
   let listaCartasCpu = [cartaUmCpu.texto , cartaDoisCpu.texto]

   //Já inicializei as somatórias para as rodadas seguintes
   somatoriaUser = cartaUmUser.valor + cartaDoisUser.valor
   somatoriaCpu = cartaUmCpu.valor + cartaDoisCpu.valor

   //Verificando se houve retirada de ASES por ambas as partes
   if(cartaUmCpu === "A" && cartaDoisCpu === "A"){

      console.log(`O computador tirou dois ases! Será preciso reiniciar a rodada!`)

   }  else if(cartaUmUser === "A" && cartaDoisUser === "A"){

      console.log(`Você tirou dois ases! Será preciso reiniciar a rodada!`)
      
      //Caso não houve retirada de dois ASES, dá-se início ao laço
      } else{

         //Inicializando com boolean verdadeira
         confirmacao = true

         //Enquanto a soma do usuário for menor que 21, ele pergunta por uma resposta booleana se o usuário deseja comprar mais carta
         while(somatoriaUser < 21){

            confirmacao = confirm(`Suas cartas são ${listaCartasUser}. A carta revelada do computador é ${cartaUmCpu.texto}. Deseja comprar mais uma carta?`)   

            //Em caso positivo, ele faz a aquisição, inclui na awway e soma os pontos das cartas
            if(confirmacao === true){
        
                 //Compra da carta
                 const cartaSeguinteUser = comprarCarta()
        
                 //Acrescenta a carta na array que será mostrada posteriormente
                 listaCartasUser.push(cartaSeguinteUser.texto)
              
                 //Soma os pontos das cartas retiradas
                 somatoriaUser = somatoriaUser + cartaSeguinteUser.valor     
           
             //Caso seja negativo, ele sai para fora do loop
           } else{
        
           break
        
           }
           
        }

         //Se a soma de pontos das cartas iniciais da CPU for maior que as do usuário, OU se o usuário estourou os 21 pontos, exibe resultado
         if(somatoriaCpu > somatoriaUser || somatoriaUser > 21){

            alert(`Usuário - cartas: ${listaCartasUser} - pontuação: ${somatoriaUser}\nComputador - cartas: ${listaCartasCpu} - pontuação: ${somatoriaCpu}\nO computador venceu!`)

         } else{

            //Enquanto a soma de pontos da CPU for menor que a soma de pontos do usuário, faça o laço:
            while(somatoriaCpu < somatoriaUser){

               //Compra da carta
               const cartaSeguinteCpu = comprarCarta()

               //Acrescenta a carta na array que será mostrada posteriormente
               listaCartasCpu.push(cartaSeguinteCpu.texto)
      
               //Soma os pontos das cartas retiradas
               somatoriaCpu = somatoriaCpu + cartaSeguinteCpu.valor
   
            }

               if(somatoriaCpu > somatoriaUser && somatoriaCpu <= 21){

                 alert(`Usuário - cartas: ${listaCartasUser} - pontuação: ${somatoriaUser}\nComputador - cartas: ${listaCartasCpu} - pontuação: ${somatoriaCpu}\nO computador venceu!`)

               } else if(somatoriaUser > somatoriaCpu && somatoriaUser <= 21){

                  alert(`Usuário - cartas: ${listaCartasUser} - pontuação: ${somatoriaUser}\nComputador - cartas: ${listaCartasCpu} - pontuação: ${somatoriaCpu}\nVocê venceu!`)

                 } else if(somatoriaCpu === somatoriaUser){

                    alert(`Usuário - cartas: ${listaCartasUser} - pontuação: ${somatoriaUser}\nComputador - cartas: ${listaCartasCpu} - pontuação: ${somatoriaCpu}\nEmpate!`)                  

                   } else if(somatoriaUser > somatoriaCpu && somatoriaCpu > 21){

                     alert(`Usuário - cartas: ${listaCartasUser} - pontuação: ${somatoriaUser}\nComputador - cartas: ${listaCartasCpu} - pontuação: ${somatoriaCpu}\nVocê venceu!`)                     

                     } else if(somatoriaCpu > somatoriaUser && somatoriaUser > 21){

                       alert(`Usuário - cartas: ${listaCartasUser} - pontuação: ${somatoriaUser}\nComputador - cartas: ${listaCartasCpu} - pontuação: ${somatoriaCpu}\nO computador venceu!`)                            

                       } else if(somatoriaUser < somatoriaCpu && somatoriaCpu > 21){

                        alert(`Usuário - cartas: ${listaCartasUser} - pontuação: ${somatoriaUser}\nComputador - cartas: ${listaCartasCpu} - pontuação: ${somatoriaCpu}\nVocê venceu!`)                            

                         } else if(somatoriaCpu < somatoriaUser && somatoriaUser > 21){

                           alert(`Usuário - cartas: ${listaCartasUser} - pontuação: ${somatoriaUser}\nComputador - cartas: ${listaCartasCpu} - pontuação: ${somatoriaCpu}\nO computador venceu!`)    

                           }

           }

   } 

}else{alert(`Fim de jogo.`)}
