// Crie um array de objetos estoque, onde cada objeto tem
// produto, quantidade e minimo. Use forEach para atualizar a quantidade
// dos produtos que estão abaixo do mínimo, duplicando suas quantidades.

let stock = [
    {
        product: "Lápis",
        amount: 3,
        minimum: 5
    },
    {
        product: "Borracha",
        amount: 7,
        minimum: 5
    },
    {
        product: "Estojo",
        amount: 2,
        minimum: 5
    },
    {
        product: "Caneta",
        amount: 10,
        minimum: 8
    }
]

stock.forEach(item => {
    if(item.amount < item.minimum) {
        item.amount *= 2
    }
})

console.log(stock)