// Crie um array de objetos clientes, cada um com propriedades
// nome, idade, e cidade. Use forEach para contar quantos clientes têm mais
// de 30 anos.

let clients = [
    {
        name: "Pedro",
        age: 32,
        city: "Novo Hamburgo"
    },
    {
        name: "João",
        age: 25,
        city: "Luxemburgo"
    },
    {
        name: "Maria",
        age: 37,
        city: "Nova Iorque"
    },
    {
        name: "Louise",
        age: 22,
        city: "Alexandria"
    }
]

let clientsAbove30 = 0;

clients.forEach(client => {
    if(client.age > 30){
        clientsAbove30 ++;
    }
})

console.log(`Número de clientes acima de 30 anos: ${clientsAbove30}`)