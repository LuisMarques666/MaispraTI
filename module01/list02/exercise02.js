// Crie um objeto livro com propriedades titulo, autor,
// anoPublicacao e genero. Verifique se a propriedade editora existe no
// objeto usando for in. Se não existir, adicione essa propriedade ao objeto.

let book = {
    title: "Assassins Creed",
    author: "Oliver Bowden",
    year: 2009,
    gender: "Ficção histórica"
}

let existPublisher = false;

for(let prop in book){
    if(prop === "Publisher"){
        existPublisher = true;
    }
}
if(!existPublisher){
    book.publisher = "Publisher Galera"
}
console.log(book)