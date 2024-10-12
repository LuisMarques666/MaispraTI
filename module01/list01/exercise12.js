// Exercise 12
// Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a
// 10) utilizando um loop for.

const prompt = require('prompt-sync')()

let num1 = Number(prompt('Informe o valor: '))

console.log(`A tabuada do ${num1} é: `)
for(let i= 1; i<=10; i++){
    console.log(`${num1}*${i} = ${num1*i}`)
}