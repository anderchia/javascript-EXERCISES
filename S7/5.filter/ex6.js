// Dado el siguiente array, utiliza .filter() para generar un nuevo array con los streamers que incluyan el caracter
// 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion .includes() para la comprobación.

// Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando .age sea mayor que 35.


const streamers = 
[{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, 
{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, 
{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}];
 
const lolPlayers = streamers.filter (streamer => {
    const isLolero = streamer.gameMorePlayed.includes("Legends");

    if (isLolero && streamer.age > 35){
    streamer.gameMorePlayed.toUpperCase();
}
return isLolero
})

console.log(lolPlayers)


//let isLolero = streamers.filter(streamer => streamer.gameMorePlayed.includes("Legends") && streamer.age > 35 ? 
//streamer.gameMorePlayed = streamer.gameMorePlayed.toUpperCase() : streamer.gameMorePlayed)
// está bien escrito pero aparecen todos los streamers, no estamos aislando
