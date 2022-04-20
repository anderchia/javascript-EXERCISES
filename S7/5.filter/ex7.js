//Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola los streamers que incluyan la palabra
// introducida en el input. De esta forma, si introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si
// introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'.


const streamers = 
[{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, 
{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, 
{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}];


const handleChange = (event) => { //creo la función handleChange que lee el evento por parámetro
    //console.log(event); opcionalmente leemos el evento que efectivamente se ejecuta cuando hacemos input
    const jugadores = streamers.filter ((streamer)//creo una constante con los streamers filtrados
     => streamer.name.includes(input$$.value))//estos streamers solo van a estar si incluyen el valor que tenga el input, es decir, input.value (lo que yo escribo en input)
    console.log(jugadores)//y aqui muestro por consola solo los streamers que he buscado --- el console log está dentro de la función porque forma parte de ella, cada vez que ejecutamos el bucle queremos que nos devuelva algo
}


const input$$ = document.querySelector('[data-function="toFilterStreamers"]') //aqui capturo en un nodo el elemento de html que tenga el datafunction=tofilterstreamers, es decir el input

input$$.addEventListener("input", handleChange) //aqui le añado un escuchador de eventos al nodo al que realizar el evento input ejecute la función handleCHange

 
