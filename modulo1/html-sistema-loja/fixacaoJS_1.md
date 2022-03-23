function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {

const somaComFixa = 2000 + qtdeCarrosVendidos * 100
const somaComPercentual = valorTotalVendas * 0.05
const salarioFinal = somaComFixa + somaComPercentual

return salarioFinal
}