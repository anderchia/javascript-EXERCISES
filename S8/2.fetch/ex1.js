//Utiliza esta url de la api Agify 'https://api.agify.io?name=michael' para hacer 
//un .fetch() y recibir los datos que devuelve. Imprimelo mediante un console.log(). 
//Para ello, es necesario que crees un .html y un .js.

fetch("https://api.agify.io?name=michael")
    .then (res => res.json())  //res es los datos de la petición // res.jason es para transformarlos a algo legible (formato json) //esto es copy-paste siempre es igual
    .then (resValue => {       //hacemos otra promesa porque todavia no tenemos los datos (porque el primer then también es una promesa y tarda tiempo) // al resolver esta segunda promesa nos da los datos   
        console.log(resValue)
    })
