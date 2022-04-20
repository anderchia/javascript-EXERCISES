//Dado el siguiente javascript usa forof y forin para saber cuantas veces ha sido cada sonido agregado por los usuarios a
//favorito. Para ello recorre la lista de usuarios y usa forin para recoger el nombre de los sonidos que el usuario tenga como favoritos.
//Una vez accedas a ellos piensa en la mejor forma de hacer un conteo de cada vez que ese sonido se repita como favorito en cada usuario.

//Este ejercicio es un poco complicado con los conocimientos actuales pero...a la vez un buen reto y oportunidad para
//comprender que hay muchas formas de hacer las cosas en javascript.

//explicación de esto en los primeros 10 min de clase del 03/03 teams


const users = [
    {name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
]

const favoritesSounds = [] //creamos la variable vacia

for (let user of users) //cogemos cada objeto
    for (let key in user.favoritesSounds) //por cada usuario hacemos un for de sus sonidos favoritos
    if (favoritesSounds.lenght){ 
        let favoritesSoundsIsInside = false; //creamos una variable que es false
        for (let favoritesSound of favoritesSounds){ //recorremos el array global favoritesSounds para comrpobar si hay algo ahí
            if (favoritesSound.name === true){ //si el nombre del sonido es igual al contenido de cada vuelta del bucle(key : waves, rain, firecamp)
                favoritesSoundsIsInside = true; //se convierte en true
                favoritesSound.count++; //y sumamos 1 al contador
                break; // palabra reservada para romper el for, para que salga del bucle
            }
        }

        if (!favoritesSoundsIsInside){
            favoritesSounds.push({name:key, count: 1}) //si el sonido no está en favoritesounds, lo añadimos
        }
    else {
         favoritesSounds.push({name:key, count:1})
        }
    }

console.log(favoritesSounds)

//ABEL SE TE FUE LA OLLA CON ESTE EJERCICIO LOL