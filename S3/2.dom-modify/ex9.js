

const div$$ = document.querySelectorAll(".fn-insert-here"); // const que coja todos los div con esa clase

for (let i = 0; i < div$$.length; i++){
    const p$$ = document.createElement("p"); // creamos la p
    p$$.innerHTML = "Voy dentro!"; // contenido de la p
    div$$[i].appendChild(p$$); // añade la p cada vez que pase por un divss (porque los hemos recogido arriba)
}

document.body.appendChild(div$$);