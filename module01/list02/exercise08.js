// Crie um array de objetos filmes, onde cada filme tem titulo,
// diretor, e anoLancamento. Use forEach para criar um novo array
// contendo apenas os títulos dos filmes.

let movies = [
    {
        title: "Missão Impossível",
        director: "Brian De Palma",
        releaseYear: 1996
    },
    {
        title: "A identidade Bourne",
        director: "Doug Liman",
        releaseYear: 2002
    },
    {
        title: "The Beekeeper",
        director: "David Ayer",
        releaseYear: 2024
    },
    {
        title: "Dupla Explosiva",
        director: "Patrick Hughes",
        releaseYear: 2017
    }
]

let titleMovies = []

movies.forEach(movie => {
    titleMovies.push(movie.title);
})

console.log(titleMovies)