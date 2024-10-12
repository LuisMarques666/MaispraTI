// Exercise 7
// As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
// forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra.

const prompt = require('prompt-sync')()

let qtd = Number(prompt('Informe a quantidade de maçãs: '))
let total

if(qtd>=12){
    total = qtd * 0.25
    console.log(`O valor será ${qtd} * 0.25 é ${total.toFixed(2)}`)
}else{
    total = qtd * 0.30
    console.log(`O valor será ${qtd} * 0.30 é ${total.toFixed(2)}`)
}