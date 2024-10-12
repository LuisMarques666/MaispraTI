// Exercise 3
// Implemente um programa que recebe uma nota de 0 a 10 e classifica como
// "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

const prompt = require('prompt-sync')()

let note = Number(prompt('Informe a nota: '))

if(note>6){
    console.log('Aprovado')
}else if(note<=6 && note>=4){
    console.log('Recuperação')
}else{
    console.log('Reprovado')
}