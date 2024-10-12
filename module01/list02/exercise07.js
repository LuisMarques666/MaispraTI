// Crie um array de objetos produtos, onde cada objeto tem nome,
// preco, e desconto. Use forEach para aplicar um desconto de 10% em todos
// os produtos e exibir o novo preço.

let products = [
    {
        name: "SmartTV",
        price: 2800,
        discount: 0
    },
    {
        name: "Desktop",
        price: 5500,
        discount: 0
    },
    {
        name: "Smart Watch",
        price: 500,
        discount: 0    
    }
]

products.forEach(product => {
    product.discount = product.price * 0.10;
    product.price = product.price - product.discount;

    console.log(`Produto: ${product.name}, Novo Preço: R$ ${product.price.toFixed(2)}`);
})
