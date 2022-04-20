//Dado el siguiente array, devuelve una lista que contenga los valores de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que empiece por 'A'.


const users = [{id: 1, name: 'Abel'}, {id:2, name: 'Julia'},{id:3, name: 'Pedro'}, {id:4, name: 'Amanda'}];

const usersName = users.map (user => user.name[0] === 'A' ? 'Anacleto' : user.name); // mapeamos users, user.name[0] (es la posición 0, primera letra)
// si esa posición es igual a A, añadimos Anacleto. Si no, dejamos el user.name.




console.log(usersName)


//const name = "Antonio"
//console.log(name[3])




