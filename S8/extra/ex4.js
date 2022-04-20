//Vamos a usar de nuevo JSON SERVER para crear un listado de personajes de la serie Dragon Ball.

//Para ello, ejecutemos ``json-server --watch exercise-4.json``. En este caso el endpoint con los personajes
// es `http://localhost:3000/characters`.

//La idea es crear una galería con los planetas, que podemos obtener del endpoint
 //`http://localhost:3000/planets` y, que si el usuario hace click en alguno de los
  //planetas, salga debajo los personajes que están asociados por el .idPlanet a ese
   //planeta en cuestión, mostrando tanto sus imágenes .avatar como sus nombres .name.
    //Para poder obtener la información de los personajes podemos hacer un filtro de 
    //los personajes llamando a la url, por ejemplo ``http://localhost:3000/characters?idPlanet=1`` 
    //y, teniendo en cuenta que el idPlanet variará dependiendo del planeta seleccionado.
 
//Además de esto, agrega un buscador para poder filtrar los personajes una vez que has 
//seleccionado el planeta. Por lo tanto, deberemos incluir el input debajo del planeta y
 //encima de los personajes listados.

 fetch(`http://localhost:3000/planets`)
.then (res => res.json())                //res es los datos de la petición // res.jason es para transformarlos a algo legible (formato json) //esto es copy-paste siempre es igual
.then (planets => {                     //hacemos otra promesa porque todavia no tenemos los datos (porque el primer then también es una promesa y tarda tiempo) // al resolver esta segunda promesa nos da los datos   
    console.log(planets)

    const divPlanets$$ = document.querySelector('[data-function="planets"]');   //creamos un div para seleccionar los planetas
    for (const planet of planets) {                                             //separamos cada planeta
        let div$$ = document.createElement("div")                               //creamos divs
        div$$.innerHTML = 
        `<img src="${planet.image}"/>                    
        <h2>${planet.name}</h2>`;                                                  //metemos imagen, texto,...                     
        divPlanets$$.appendChild(div$$);                                        //metemos estos divs con las imagenes dentro de el div general de los planetas
        div$$.addEventListener("click", () => {                                 //añadimos el click a los planetas
            createCharacter(planet.id)                                          //creamos los personajes al darle click
        }
        )
    }
})

const createCharacter = (planetId) => {                                         //creamos la funcion createcharacter, sumamos la info según url + planeta
    fetch("http://localhost:3000/characters?idPlanet="+ planetId)
    .then (res => res.json())
    .then (function (characters){
        const divAvatars$$ = document.querySelector('[data-function="characters"]');
        console.log(characters)
        divAvatars$$.innerHTML = ("");                                              //limpiamos el contenido antes del bucle, así cuando entramos en el bucle de crear personajes, ya no hay nada previamente
    for (const character of characters) {                                             //separamos cada personaje
        let div$$ = document.createElement("div")                               //creamos divs
        div$$.innerHTML = 
        `<img src="${character.avatar}"/>                    
        <h2>${character.name}</h2>`;                                                  //metemos imagen, texto,...                     
        divAvatars$$.appendChild(div$$);
    }
    })   
}

