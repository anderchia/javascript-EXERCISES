//Crea una función llamada `findArrayIndex` que reciba como parametros un array de textos y un texto y devuelve la 
//posición del array cuando el valor del array sea igual al valor del texto que enviaste como parametro.

//Haz varios ejemplos y compruebalos.

//Sugerencia de función:

//function findArrayIndex(array, text) {}


//Ej array:


function findArrayIndex(array, text){
    for (let i = 0; i < array.lenght; i++){
        let obj = array[i];
        if (obj === text){
            return i;
        }
    }
}

const index = findArrayIndex(['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'], 'Salamandra');
console.log(index);

