// Crie um objeto empresa com uma propriedade departamentos,
// que é um array de objetos. Cada departamento tem um nome e uma lista
// de funcionarios. Use for in e for of para iterar sobre os departamentos
// e seus funcionários, exibindo o nome de cada funcionário junto com o
// departamento ao qual pertence.

let enterprise = {
    departaments: [
        {
            name: "Compras",
            employees: ["Paulo", "Amanda", "Lisa"]
        },
        {
            name: "Vendas",
            employees: ["Sara", "Antônio", "Miguel"]
        },
        {
            name: "Suporte",
            employees: ["Wesley", "Lucas", "Luis"]
        }
    ]
}

for (let i in enterprise.departaments){
    let departament = enterprise.departaments[i]
    console.log(`Departamento: ${departament.name}`)

    for (let employee of departament.employees){
        console.log(`* Funcionário: ${employee}`)
    }
}
