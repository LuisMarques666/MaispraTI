// Crie um array de objetos alunos, cada um com propriedades
// nome, nota1, e nota2. Use for of para calcular a média das notas de cada
// aluno e exibir o nome do aluno junto com sua média.

let students = [
    {
        name: "Victor",
        note1: 8.5,
        note2: 7  
    },
    {
        name: "Anne",
        note1: 6,
        note2: 7.5
    },
    {
        name: "Carolyn",
        note1: 5.5,
        note2: 8
    }
]

for(let student of students){
    let avg = (student.note1 + student.note2)/2;
    console.log (`Nome: ${student.name}, Média: ${avg.toFixed(2)}`);
}