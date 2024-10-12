/*console.log(10 > 5)
console.log(10 < 5)
console.log(10 <= 5)
console.log(10 >= 5)
console.log(10 == '10')
console.log(10 === '10')
console.log(10 != '10')
console.log(10 !== '10')*/

/*console.log((10 < 5) && (10 > 2))
console.log((10 > 5) || (10 < 2))
console.log((10 > 5) || !(10 < 2))
console.log (!(10 > 5) || (10 < 2))*/

/*let user = 'luis'
let senha = 12345

let authentication = user ==="luis" && senha === 12345

console.log(authentication)*/

// const grade = 59

// if (grade>=60){
//     console.log("APROVADO")
// }else{
//     console.log("REPROVADO")
// }

// let idade = 15

// if (idade>=18 && idade<=32){
//     console.log('Apto a realizar consurso público')
// } else {
//     console.log("Não está apto")
// }

// let ternaryResult = (10 < 100) ? true : false 



// let number = 9

// if(number%2==0){
//     console.log('par')
// }else {
//     console.log('impar')
// }

// let number1 = 22
// let number2 = 10
// let number3 = 5

// if(number1>number2 && number1> number3){
//     console.log(number1)
// }else if(number2>number1 && number2>number3){
//     console.log(number2)
// }else{
//     console.log(number3)
// }

// let var1 = 2
// let var2 = 4

// let operator = 4 

// if(operator == 1){
//     calc = var1+var2
   
// }else if(operator == 2){
//     calc = var1 - var2
    
// }else if(operator == 3){
//     calc = var1 / var2
    
// }else if(operator == 4){
//     calc = var1 * var2
    
// }
// console.log(calc)

// const prompt = require('prompt-sync')()

// let num1 = Number(prompt("Insira o primeiro valor:"))
// let num2 = Number(prompt("Insira o segundo valor"))
// let operation = prompt("Informe a operação desejada (+,-,/,*):")
// let result = 0

// if(operation ==='+'){
//     result = num1 + num2
// }else if(operation === '-'){
//     result = num1 - num2
// }else if (operation === '/'){
//     if(num2 !== 0){
//         result = num1 / num2    
//     }else{
//         console.log
//     }
// }

// let option = 2

// switch(option){
//     case 1: 
//         console.log('Você selecionou a primeira opção')
//         break
//     case 2:
//         console.log('Você selecionou a segunda opção')
//         break
//     default:
//         console.log('Você não selecionou nenhuma opção')
// }

// const prompt = require('prompt-sync')()
// let num1 = Number(prompt("Insira o primeiro valor:"))
// let num2 = Number(prompt("Insira o segundo valor:"))
// let op = String(prompt("Informe a operação desejada (+,-,/,*):"))
// let calc

// switch(op){
//     case '+':
//         calc = num1+num2
//         break
//     case '-':
//         calc = num1-num2
//         break
//     case '/': 
//         calc = num1/num2
//         break
//     case '*' :
//         calc = num1 * num2
//         break
// } 
// console.log(calc)

// Exercício 1: Verifiquem o dia da semana com a estrutura switch-case

// Exercício 2: Calcular o número de dias em um mês.

// - Sendo que o mês 1, 3, 5, 7, 8, 10 e 12 tem 31 dias
// - Os meses 4, 6, 9 e 11 tem 30 dias 
// - Mês 2 tem 28 dias

// const prompt = require('prompt-sync')()
// let dia = Number(prompt("Insira o dia da semana: 1-segunda 2- terça 3- quarta 4- quinta 5- sexta 6- sábado 7- domingo: "))

// switch(dia){
//     case 1:
//         console.log("Segunda-feira")
//         break
//     case 2:
//         console.log("Terça-feira")
//         break
//     case 3:
//         console.log("Quarta-feira")
//         break
//     case 4:
//         console.log("Quinta-feira")
//         break
//     case 5:
//         console.log("Sexta-feira")
//         break
//     case 6:
//         console.log("Sábado")
//         break
//     case 7:
//         console.log("Domingo")
//         break
// }


console.log('1 - Janeiro')
console.log('2 - Fevereiro')
console.log('3 - Março')
console.log('4 - Abril')
console.log('5 - Maio')
console.log('6 - Junho')
console.log('7 - Julho')
console.log('8 - Agosto')
console.log('9 - Setembro')
console.log('10 - Outubro')
console.log('11 - Novembro')
console.log('12 - Dezembro')

const prompt = require('prompt-sync')()
let mounth = Number(prompt("Informe o mês que deseja saber o número de dias: "))

switch(mounth){
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log("O mês selecionado possui 31 dias")
        break
    case 4:
    case 6:
    case 9:
    case 11:
        console.log("O mês selecionado possui 28 dias")
        break
    case 2:
        console.log("O mês selecionado possui 28 dias")
        break

}











