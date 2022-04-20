const secondDiv$$ = document.querySelectorAll('div')[1]; // cogemos todos los div y con el 1 seleccionamos el segundo div

const p$$ = document.createElement("p"); // creamos la p
p$$.innerHTML = "Voy en medio!"; // creamos el texto de la p

document.body.insertBefore(p$$, secondDiv$$); // lo introducimos en el documento (lo que añadimos, ANTES de donde lo añadimos)