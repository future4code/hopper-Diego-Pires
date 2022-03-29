function calculaPrecoTotal(quantidade) {
  let valorFinal
  if(quantidade < 12){
    valorFinal = quantidade * 1.3
  }else{
    valorFinal = quantidade * 1
  }
  return valorFinal
}