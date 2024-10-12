// Exercise 14
// Crie um programa que calcula o fatorial de um número fornecido pelo usuário
// utilizando um loop for ou while.

const prompt = require('prompt-sync')()

let num1 = Number(prompt('Informe o valor: '))
let fator = 0

for(let i = num1-1; i>=1; i --){
    fator = num1 *= i     
}
console.log(`${fator}`)
