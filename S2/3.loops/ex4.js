1


const toys = [{id: 5, name: 'Buzz MyYear'}, {id: 11, name: 'Action Woman'}, {id: 23, name: 'Barbie Man'}, {id: 40, name: 'El gato con Guantes'},{id: 40, name: 'El gato felix'}]
const newArray = []

for (let i = 0; i < toys.length; i++) {
const toy = toys[i];

if (!toy.name.includes ('gato')){
    newArray.push(toy);
}

}

console.log(newArray)







2

for (let toy of toys) { // por cada juguete de los juguetes
    if (!toy.name.includes("gato")) { //si NO incluye gato
        newArray.push(toy); //metelo en el nuevo array
    }
}

console.log(newArray);