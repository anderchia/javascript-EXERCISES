// Usa un bucle para crear 3 arrays de peliculas filtrados por categorias. Pelicula pequeña, menos de 100 minutos, pelicula mediana, 
// mas de 100 minutos y menos de 200 y pelicula grande, mas de 200 minutos. Imprime cada array en por consola.

const movies = [{name: "Your Name", durationInMinutes: 130},
{name: "Pesadilla antes de navidad", durationInMinutes: 225},
{name: "Origen", durationInMinutes: 165},
{name: "El señor de los anillos", durationInMinutes: 967},
{name: "Solo en casa", durationInMinutes: 214},
{name: "El jardin de las palabras", durationInMinutes: 40}];

peliculasPequeñas = [];
peliculasMedianas = [];
peliculasGrandes = [];

for (let movie of movies){
    if (movie.durationInMinutes > 200){
    peliculasGrandes.push(movie)}
    else if (movie.durationInMinutes > 100){
    peliculasMedianas.push(movie)}
        else {peliculasPequeñas.push(movie)}
    }

console.log(peliculasGrandes)
console.log(peliculasMedianas)
console.log(peliculasPequeñas)
