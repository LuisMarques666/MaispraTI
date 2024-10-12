// Crie um objeto carrinho com uma propriedade itens, que é um
// array de objetos. Cada objeto dentro de itens deve representar um
// produto no carrinho, com nome, quantidade, e precoUnitario. Use forEach
// para calcular o valor total do carrinho.

let shoppingCart = {
    itens: [
        {
            name: "Memória",
            amount: 2,
            priceUnit: 299.00
        },
        {
            name: "SSD",
            amount: 2,
            priceUnit: 389.00
        },
        {
            name: "Placa Mãe",
            amount: 1,
            priceUnit: 459.00
        },
        {
            name: "Fonte",
            amount: 1,
            priceUnit: 369.00
        }

    ]
}

let totalValue = 0

shoppingCart.itens.forEach(item => {
    totalValue += item.amount * item.priceUnit
})

console.log(`Valor total do carrinho: R$ ${totalValue.toFixed(2)}`)
