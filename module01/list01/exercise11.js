// Exercise 11
// Escreva um programa que solicita ao usuário 5 números e calcula a soma total
// utilizando um loop for.

const prompt = require('prompt-sync')()

let sum = 0

for(let i=0; i<5; i++){
    let num1 = Number(prompt('Informe o valor: '))
    sum += num1
}
console.log(`A soma é ${sum}`)