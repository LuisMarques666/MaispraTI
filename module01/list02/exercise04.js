// Crie um array de objetos pessoas, onde cada objeto representa
// uma pessoa com nome, idade, e cidade. Use for of para exibir as
// informações de cada pessoa no console.

let people = [
    {
        name: "João",
        age: 35,
        city: "Porto Alegre"
    },
    {
        name: "Sérgio",
        age: 38,
        city: "Canoas"
    },
    {
        name: "Maria",
        age: 45,
        city: "Curitiba"
    },
    {
        name: "Ana",
        age: 25,
        city: "Bento Gonçalves"
    }
]

for(let person of people){
    console.log(`Nome: ${person.name}, Idade: ${person.age}, Cidade: ${person.city}`)
}