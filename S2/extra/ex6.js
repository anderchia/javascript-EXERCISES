//Crea una función llamada ``swap`` que reciba un array y dos parametros que sean indices del array. La función deberá 
//intercambiar la posición de los valores de los indices que hayamos enviado como parametro. Retorna el array 
//resultante.


['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño']

function swap (array, index1, index2){
    let pasaPorTodo = array [index1];
    array [index1] = array [index2];
    array [index2] = pasaPorTodo;

    return array;
}

const newArray = swap(['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño'])
console.log(newArray)


//no entiendo