//Dado el siguiente javascript usa forof y forin para hacer la media del volumen de todos los sonidos favoritos que tienen
// los usuarios.

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

const volumeInfo = { totalVolume: 0, totalCount: 0 }; // creamos una const con la información del volumen
//le damos valor 0 a cada uno (porque después iremos sumendo sobre ellos)


for (const user of users) { //sacamos los usuarios/valores individualmente del array usuarios
    for (const key in user.favoritesSounds) { // cogemos los 'sonidosfavoritos' de cada usuario, sacamos los indices
        const favoriteSound = user.favoritesSounds[key]; // igualamos 'sonidosfavoritos' a cada objeto/caracteristica de los 'sonidosfavoritos' de cada usuario
        volumeInfo.totalVolume += favoriteSound.volume; // sumamos el volumen de 'sonidosfavoritos' a la info del volumentotal
        volumeInfo.totalCount++; // sumamos el resultado a la cuenta total
    }
}

console.log('El volumen medio de los sonidos favoritos es de: ' + volumeInfo.totalVolume / volumeInfo.totalCount) //hacemos la media del volumen total sobre la cuenta total