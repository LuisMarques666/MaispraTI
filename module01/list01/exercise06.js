// Exercise 6 
// Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
// formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
// Isósceles, escaleno ou eqüilátero.
// Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
// Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
// Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
// Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)

const prompt = require('prompt-sync')()

let side1 = Number(prompt('Informe o primeiro valor: '))
let side2 = Number(prompt('Informe o segundo valor: '))
let side3 = Number(prompt('Informe o terceiro valor: '))

if((side1 < side2 + side3) && (side2 < side1 + side3) && (side3 < side1 + side2)){
    if((side1 == side2) && (side2 == side3)){
        console.log(`Os valores ${side1}, ${side2}, ${side3} formam um triângulo equilátero`)
    }else if((side1 !== side2) && (side2 !== side3)){
        console.log(`Os valores ${side1}, ${side2}, ${side3} formam um triângulo escaleno`)
    }else if((side1 == side2)||(side1 == side3)||(side2 == side3)){
        console.log(`Os valores ${side1}, ${side2}, ${side3} formam um triângulo isósceles`)
    }
}else{
    console.log('Valores informados são inválidos')
}