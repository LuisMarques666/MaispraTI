// Exercise 2
// Crie um programa que classifica a idade de uma pessoa em categorias (criança,
// adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
// controle if-else.

const prompt = require('prompt-sync')()

let age = Number(prompt('Informe uma idade: '))

if(age>=0 && age<=12){
    console.log('Criança')
}else if(age>=13 && age<=17){
    console.log('Adolescente') 
}else if(age>=18 && age<=59){
    console.log('Adulto')
}else if(age>=60){
    console.log('Idoso')
}else{
    console.log('Digite uma idade válida')
}