// Crie um array de objetos pedidos, onde cada pedido tem
// cliente, produto, e quantidade. Use forEach para criar um objeto que
// agrupa a quantidade total de produtos por cliente.

let orders = [
    {
        client: "Alan",
        product: "Mouse",
        amount: 5
    },
    {
        client: "Bete",
        product: "Headset",
        amount: 2
    },
    {
        client: "Alan",
        product: "Teclado",
        amount: 5
    },
    {
        client: "Patricia",
        product: "Cartucho HP",
        amount: 3
    },
    {
        client: "Bete",
        product: "Alexa EchoDot",
        amount: 2
    }
]

let amountClient = {}

orders.forEach(order => {
    if(!amountClient[order.client]){
        amountClient[order.client] = 0;
    }
    amountClient[order.client] += order.amount
})

console.log(amountClient)