// Dado el siguiente array, utiliza .filter() para generar un nuevo array con los streamers que tengan el gameMorePlayed = 'League of legends'.


const streamers = [{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
 {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
  {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, 
  {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}];

let mejores = streamers.filter(streamer => streamer.gameMorePlayed === "League of Legends");
// creamos mejores; aplicamos el filtro a streamers; creamos streamer como nombre para los objetos; los que más han jugado a LOL los añadimos.
//si quisieramos usarlo en un buscador, tendríamos que usar "League of Legends".toLowerCase, paraque no afecte el cómo se escriba en el buscador y lo encuentre de cualquier manera

console.log(mejores)