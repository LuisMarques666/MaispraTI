// Exercise 13
// Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
// a média aritmética desses números.

const prompt = require('prompt-sync')()

let count = 0
let sum = 0
let num1

while(num1 !== 0){
    num1 = Number(prompt('Informe o valor: '))
    sum += num1 
    count ++
}
console.log(sum/(count-1))