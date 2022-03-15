// Exercício interpretativo 1
/* 
        nome: Amanda Rangel, apelido: Mandi, 0
        nome: Laís Petra, apelido: Laura, 1
        nome: Letícia Chijo, apelido: Chijo, 2
*/

// Exercício interpretativo 2
/*
        nome: Amanda Rangel
        nome: Laís Petra
        nome: Letícia Chijo
*/

// Exercício interpretativo 3
/*
        apelido: Mandi
        apelido: Laura
*/

//Exercício de escrita 1

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

 //A)  
    /*arrayNomes = pets.map((caes, index, lista) =>{
        return caes.nome
    })

    console.log(arrayNomes)*/

 //B)
    /*arraySalsicha = pets.filter((caes, index, lista) =>{
        return caes.raca === "Salsicha"
    })

    console.log(arraySalsicha)*/

 //C)
    /*arrayPoodle = pets.filter((cao)=>{
       return cao.raca === `Poodle`
    })

    arrayMensagem = arrayPoodle.map((poodle)=>{
        return `Você ganhou um cupom de desconto de 10% para tosar o/a ${poodle.nome}`
    })

    console.log(arrayMensagem)*/
    
 // Exercício de escrita 2

 const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

 //A)
    /*arrayItens = produtos.map((produto) =>{
        return produto.nome
     })   

     console.log(arrayItens)*/

 //B)
    /*arrayPromo = produtos.map((produto) =>{
        const obj = {
            nome: produto.nome,
            preco: produto.preco - (produto.preco * 0.05)
        } 
        return obj
     })

     console.log(arrayPromo)*/

 //C)
    /*arrayBebidas = produtos.filter((produto) =>{
         return produto.categoria === `Bebidas`
     })

     arrayListagem = arrayBebidas.map((categoria)=>{
        return categoria.nome   
     })

     console.log(arrayListagem)*/

 //D)
     /*arrayYpe = produtos.filter((produto)=>{
        return produto.nome.includes(`Ypê`)
     })

     arrayListagem = arrayYpe.map((palavra)=>{
        return palavra.nome 
     })

     console.log(arrayListagem)*/

 //E) 
     /*arrayYpe = produtos.filter((produto) =>{
         return produto.nome.includes(`Ypê`)
     })

     arrayMsg = arrayYpe.map((ypeList)=>{
        return (`Compre ${ypeList.nome} por ${ypeList.preco}`)
     })

     console.log(arrayMsg)*/