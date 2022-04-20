// Dado el siguiente javascript y html. Añade la funcionalidad necesaria usando fetch() 
// para hacer una consulta a la api cuando se haga click en el botón, pasando como parametro de 
// la api, el valor del input. (e.tarjet.value)


const baseUrl = "https://api.agify.io?name=";


const input$$ = document.querySelector("input");

const button$$ = document.querySelector("button");


const buscar = () => {
    fetch(baseUrl + input$$.value)
    .then(res => res.json())
    .then(res =>{
        console.log(res)
    })
}

button$$.addEventListener("click", buscar);
