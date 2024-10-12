const prompt = require('prompt-sync')()
// ** Exercicio 01
// let number = Number(prompt('Informe um número: '))

// if(number>0){
//     console.log('Positivo')
// }else if(number<0){
//     console.log('Negativo')
// }else if(number==0){
//     console.log('Zero')
// }else {
//     console.log('Digite um número')
// }

// ** Exercicio 02
// let year = Number(prompt('Informe um ano: '))

// if((year % 4 === 0 && year % 400 === 0) || (year % 100 !== 0)){
//     console.log('Ano é bissexto')
// }else{
//     console.log('Não é ano bissexto') 
// }

// ** Exercicio 03
// let note1 = Number(prompt('Informe a primeira nota: '))
// let note2 = Number(prompt('Informe a segunda nota: '))
// let note3 = Number(prompt('Informe a terceira nota: '))

// let media = (note1+note2+note3)/3

// if(media>=9){
//     console.log(`A média é ${media.toFixed(2)}`)
//     concept = 'A'
// }else if (media>=8){
//     console.log(`A média é ${media.toFixed(2)}`)
//     concept = 'B'
// }else if (media>=7){
//     console.log(`A média é ${media.toFixed(2)}`)
//     concept = 'C'
// }else if (media>=6){
//     console.log(`A média é ${media.toFixed(2)}`)
//     concept = 'D'
// }else if (media>=5){
//     console.log(`A média é ${media.toFixed(2)}`)
//     concept = 'E'
// }else if (media>=4){
//     console.log(`A média é ${media.toFixed(2)}`)
//     concept = 'F'
// }
// console.log(`Conceito: ${concept}`)

// ** Exercicio 04
// let num1 = Number(prompt('Informe um número: '))

// if(num1 !== 0 && num1 % 2 === 0){
//     console.log(`O número ${num1} é par`)
// }else if (num1 % 2 !== 0){
//     console.log(`O número ${num1} é impar`)
// }else {
//     console.log("O número é nulo")
// }

// ** Exercicio 05
// let age = Number(prompt('Informe a idade: '))

// if(age>=5 && age<=7){
//     console.log(`Categoria: Infantil A`)
// }else if(age>=8 && age<=10){
//     console.log(`Categoria: Infantil B`)
// }else if(age>=11 && age<=13){
//     console.log(`Categoria: Juvenil A`)
// }else if(age>=14 && age<=17){
//     console.log(`Categoria: Juvenil B`)
// }else if(age>=18){
//     console.log(`Categoria: Adulto`)
// }else{
//     console.log('Digite uma idade válida!')
// }

// ** Exercicio 06
// let dayWeek = Number(prompt('Informe o dia da semana: '))

// switch(dayWeek){
//     case 1:
//         console.log('Domingo')
//         break
//     case 2:
//         console.log('Segunda')
//         break
//     case 3:
//         console.log('Terça')
//         break    
//     case 4:
//         console.log('Quarta')
//         break  
//     case 5:
//         console.log('Quinta')
//         break  
//     case 6:
//         console.log('Sexta')
//         break        
//     case 7:
//         console.log("Sábado")
//         break    
// }

// ** Exercicio 07
// let num1 = Number(prompt('Informe o primeiro número: '))
// let num2 = Number(prompt('Informe o Segundo número: '))
// let op = String(prompt('Informe a operação (+,-,*,/): '))
// let result

// switch(op){
//     case '+':
//         result = num1 + num2
//         break
//     case '-':
//         result = num1 - num2
//         break
//     case '*':
//         result = num1 * num2
//         break
//     case '/':
//         result = num1 / num2
//         break
// }
// console.log(`${result}`)

// ** Exercicio 08
// let station = Number(prompt('Informe um número de 1 a 4: '))

// switch(station){
//     case 1 :
//         console.log('Primavera')
//         break
//     case 2 :
//         console.log('Verão')
//         break
//     case 3 :
//         console.log('Outono')
//         break
//     case 4 :
//         console.log('Inverno')
//         break
// }

// ** Exercicio 09
// let age = Number(prompt('Informe uma idade: '))
// let ageGroup

// if(age>=0 && age<=12){
//     ageGroup = 1
// }else if(age>=13 && age<=17){
//     ageGroup = 2 
// }else if(age>=18 && age<=59){
//     ageGroup = 3
// }else if(age>=60){
//     ageGroup = 4
// }else{
//     console.log('Digite uma idade válida')
// }

// switch(ageGroup){
//     case 1:
//         console.log(`A idade ${age}, corresponde a Criança`)
//         break
//     case 2:
//         console.log(`A idade ${age}, corresponde a Adolescente`)
//         break
//     case 3:
//         console.log(`A idade ${age}, corresponde a Adulto`)
//         break
//     case 4:
//         console.log(`A idade ${age}, corresponde a Idoso`)
//         break    
// }

// ** Exercicio 10
// let weight = Number(prompt('Informe o peso: '))
// let height = Number(prompt('Informe a altura: '))

// let bmi = (weight/(height*height))

// if(bmi<18.5){
//     console.log(`O IMC é ${bmi.toFixed(1)}, Abaixo do Peso`)
// }else if(bmi>=18.5 && bmi<=24.9){
//     console.log(`O IMC é ${bmi.toFixed(1)}, Peso normal`)
// }else if(bmi>=25 && bmi<=29.9){
//     console.log(`O IMC é ${bmi.toFixed(1)}, Sobrepeso`)
// }else if(bmi>=30 && bmi<=34.9){
//     console.log(`O IMC é ${bmi.toFixed(1)}, Obesidade grau I`)
// }else if(bmi>=35 && bmi<=39.9){
//     console.log(`O IMC é ${bmi.toFixed(1)}, Obesidade grau II`)
// }else if(bmi>=40){
//     console.log(`O IMC é ${bmi.toFixed(1)}, Obesidade grau III`)
// }








