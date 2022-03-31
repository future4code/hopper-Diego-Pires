function calculaNota(ex, p1, p2) {
  const soma = (ex + p1 + p2) / 3 
  if (soma >= 9){
    return "A"
  }else if(soma < 9 && soma >= 7.5){
    return "B"
  }else if(soma < 7.5 && soma >= 6){
    return "C"
  }else{
    return "D"
  }
}