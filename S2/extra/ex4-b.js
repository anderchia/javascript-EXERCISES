//Usando la función anterior beneficiate de poder conocer el indice del array para crear una función llamada 
//`removeItem` que pasandole un array y un texto como parametros (los mismos parametros que en el anterior ejercicio) 
//llame a la función anteriormente creada ``findArrayIndex`` y obten el indice para posteriormente usar la función de 
//javascript ``.splice()`` para eliminar el elemento del array. Finalmente retorna el array.

//De nuevo haz varios ejemplos para practicar y comprueba que funcionan correctamente.




function findArrayIndex(array, text){
    for (let i=0; i = array.lenght; i++){
        let obj = array[i];
        if (obj === text){
            return i;
        }
    }
}



function removeItem (array, text){
    let index = findArrayIndex(array, text);
    array.splice(index, 1);
    return array;
}

const arrayRemovedItem = removeItem(['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'], 'Salamandra');
console.log(arrayRemovedItem);