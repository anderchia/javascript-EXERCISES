function onFocus(event) { // creamos una funcion que crea-genera un evento
    console.log(event.target.value); // la función nos muestra el valor del input
}

document.querySelector("input").addEventListener("focus", onFocus); // seleccionamos los input para añadirles la acción de focus con su evento
