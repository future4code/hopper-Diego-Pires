/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
/*
    console.log(`==== BLACKJACK ====
     Bem vindo!`)

    if(confirm("Deseja iniciar uma nova rodada?")){
      
      //Pegando primeira carta do player
      const cartaUmUser = comprarCarta(); 
      
      //Pegando segunda carta do player
      const cartaDoisUser = comprarCarta();

      //Pegando primeira carta da CPU
      const cartaUmCpu = comprarCarta();

      //Pegando segunda carta da CPU
      const cartaDoisCpu = comprarCarta();

      somatoriaCpu = cartaUmCpu.valor + cartaDoisCpu.valor
      somatoriaUser = cartaUmUser.valor + cartaDoisUser.valor

      console.log(`Usuário - cartas: ${cartaUmUser.texto} ${cartaDoisUser.texto} - pontuação: ${somatoriaUser}`)
      console.log(`Computador - cartas: ${cartaUmCpu.texto} ${cartaDoisCpu.texto} - pontuação: ${somatoriaCpu}`)

      if(somatoriaUser > somatoriaCpu){
         console.log(`O usuário ganhou!`)
      } else if(somatoriaCpu > somatoriaUser){
         console.log(`O computador ganhou!`)
      } else{
         console.log(`Empate!`)
      }

    } else{
       console.log("Fim de jogo!")
    }

*/

    