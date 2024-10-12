// Crie um array de objetos vendas, onde cada objeto tem produto,
// quantidade e valor. Use forEach para calcular o valor total de vendas de
// todos os produtos.

let sales = [
    {
        product: "SmartTV",
        amount: 3,
        value: 2000
    },
    {
        product: "Smart Watch",
        amount: 5,
        value: 400
    },
    {
        product: "Teclado Mecânico",
        amount: 3,
        value: 270
    }
]

let valueTotal = 0

sales.forEach(sell => {
    valueTotal += sell.amount * sell.value
})

console.log(`Valor total de vendas: R$ ${valueTotal.toFixed(2)}`)