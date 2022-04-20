const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const ul$$ = document.createElement ("ul"); // creamos un ul


for (let i = 0; i < apps.length; i++) { // creamos una variable que recorre el bucle
    const li$$ = document.createElement ("li"); // creamos un li en cada vuelta
    li$$.innerHTML = apps[i]; // añadimos el contenido del propio indice en cada li
    ul$$.appendChild(li$$); // añadimos los li dentro de ul
}

document.body.appendChild(ul$$) //añadimos el ul al documento

