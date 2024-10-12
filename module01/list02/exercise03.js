// Dado um objeto produto com várias propriedades, crie uma
// função que retorna um novo objeto contendo apenas as propriedades cujo
// valor seja maior que um valor específico. Use for in para filtrar as
// propriedades.

let product = {
    name: "Monitor",
    price: 1600,
    stock: 2,
    weight: 0.6,
    inches: 32,
    curvedScreen: true
}

function filterPropValue(obj, minimumValue){
    let newObject = {}

    for(let prop in obj){
        if(typeof obj[prop] === "number" && obj[prop]> minimumValue){
            newObject[prop] = obj[prop];
        }
    }

    return newObject;
}

let result = filterPropValue(product, 2);

console.log(result);

