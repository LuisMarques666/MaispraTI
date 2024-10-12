// Crie um objeto carro com propriedades como marca, modelo,
// ano, e cor. Use for in para iterar sobre as propriedades e exibir seus
// valores no console.

let car = {
    marca: "Renault",
    modelo: "Logan",
    ano: 2019,
    cor: "Vermelho"
}

for(let prop in car){
    console.log(prop + ": " + car[prop])
}