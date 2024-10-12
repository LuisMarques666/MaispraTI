// Crie um array de objetos funcionarios, onde cada objeto
// contém informações como nome, cargo, e salario. Use for of para filtrar
// e exibir apenas os funcionários cujo salário seja maior que um valor
// específico.

let employees = [
    {
        name: "Bartolomeu",
        position: "Designer",
        salary: 4000
    },
    {
        name: "Alberta",
        position: "Gerente",
        salary: 7500
    },
    {
        name: "Marcos",
        position: "Analista",
        salary: 3500
    },
    {
        name: "Elisabeth",
        position: "Desenvolvedora",
        salary: 5000
    }
]

let specificValue = 4500;

for(let employee of employees){
    if(employee.salary > specificValue){
        console.log(`Nome: ${employee.name}, Cargo: ${employee.position}, Salário: ${employee.salary}`)
    }
}