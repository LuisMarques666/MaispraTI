// Exercise 1
//Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
//utilizando uma estrutura de controle if.
const prompt = require('prompt-sync')()

let number = Number(prompt('Informe um número: '))

if (number % 2 === 0){
    console.log(`O número ${number} é par`)
}else{
    console.log(`O número ${number} é impar`)
}