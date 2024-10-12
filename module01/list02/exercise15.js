// Crie um array de objetos transacoes, onde cada transação tem
// tipo (entrada ou saída) e valor. Use forEach para calcular o saldo final,
// somando as entradas e subtraindo as saídas.

let transactions = [
    {
       type: "entrada",
       value: 1500 
    },
    {
        type: "saida",
        value: 350
    },
    {
        type: "entrada",
        value: 2850
    },
    {
        type: "saida",
        value: 750
    }
]

let balance = 0

transactions.forEach(transaction => {
    if (transaction.type === "entrada"){
        balance += transaction.value
    }else if(transaction.type === "saida"){
        balance -= transaction.value
    }
})

console.log(`Saldo final: R$ ${balance.toFixed(2)}`)