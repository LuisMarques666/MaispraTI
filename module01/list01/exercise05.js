// Exercise 5
// Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
// determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
// utilizando if-else.

const prompt = require('prompt-sync')()

let weight = Number(prompt('Informe o peso: '))
let height = Number(prompt('Informe a altura: '))

let bmi = (weight/(height*height))

if(bmi<18.5){
    console.log(`O IMC é ${bmi.toFixed(1)}, Abaixo do Peso`)
}else if(bmi>=18.5 && bmi<=24.9){
    console.log(`O IMC é ${bmi.toFixed(1)}, Peso normal`)
}else if(bmi>=25 && bmi<=29.9){
    console.log(`O IMC é ${bmi.toFixed(1)}, Sobrepeso`)
}else if(bmi>=30 && bmi<=34.9){
    console.log(`O IMC é ${bmi.toFixed(1)}, Obesidade grau I`)
}else if(bmi>=35 && bmi<=39.9){
    console.log(`O IMC é ${bmi.toFixed(1)}, Obesidade grau II`)
}else if(bmi>=40){
    console.log(`O IMC é ${bmi.toFixed(1)}, Obesidade grau III`)
}