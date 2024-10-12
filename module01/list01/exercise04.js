// Exercise 4
// Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
// Utilize switch-case para implementar a lógica de cada opção selecionada.

const prompt = require('prompt-sync')()

console.log('1-Warrior')
console.log('2-Elf')
console.log('3-Orc')
let option = Number(prompt('Choose one option:'))

switch(option){
    case 1:
        console.log(`Warrior uses a sword and shield`)
        break
    case 2:
        console.log(`Elf uses a bow`)
        break
    case 3:
        console.log(`Orc uses a axe`)
        break
}
