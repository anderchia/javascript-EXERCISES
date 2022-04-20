const placesToTravel = [{id: 5, name: 'Japan'}, {id: 11, name: 'Venecia'}, {id: 23, name: 'Murcia'}, {id: 40, name: 'Santander'}, {id: 44, name: 'Filipinas'}, {id: 59, name: 'Madagascar'}]

for (let i = 0; i < placesToTravel.length; i++){ // creamos el bucle
    const place = placesToTravel[i]; // creamos place que recorre placestotravel
    if (place.id === 11 || place.id === 40){ // si el id de cada vuelta(place) es 11 o 40
    placesToTravel.splice(i, 1); // borramos en esa posición un solo elemento
}
}
console.log(placesToTravel);