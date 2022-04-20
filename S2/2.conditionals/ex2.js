//Comprueba en cada uno de los usuarios que tenga almenos dos trimestres aprobados y añade la propiedad isApproved
// a true o false en consecuencia. Una vez lo tengas compruebalo con un console.log. 


const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
    {name: 'Lucia Aranda', T1: true, T2: false, T3: true}, 
    {name: 'Abel Cabeza', T1: false, T2: true, T3: true}, 
    {name: 'Alfredo Blanco', T1: false, T2: false, T3: false}, 
    {name: 'Raquel Benito', T1: true, T2: true, T3: true}
]

for (let i = 0; i < alumns.length; i++){
    let alumno = alumns[i]; // cada vuelta es un alumno

    let cuentaAprobados = 0; // creamos variable de la cuenta que empieza en 0
    cuentaAprobados = alumno.T1 ? cuentaAprobados + 1 : cuentaAprobados; //si el t1 fuera true le haría +1, si no se quedaria en 0
    cuentaAprobados = alumno.T2 ? cuentaAprobados + 1 : cuentaAprobados;
    cuentaAprobados = alumno.T3 ? cuentaAprobados + 1 : cuentaAprobados;
}

console.log (alumns);




// let cuentaAprobados = 0;

// if (alumns [i].T1 == true) cuentaAprobados +=1;
// if (alumns [i].T1 == true) cuentaAprobados +=1;
// if (alumns [i].T1 == true) cuentaAprobados +=1;
//alumns[i].isAproved = (cuentaAprobados >=2);
//console.log(alumns)


//otra manera

    //if(alumns.t1){
      //  cuentaAprobados++
    //}
    //if(alumns.t2){
       //cuentaAprobados++
    //}
    //if(alumns.t3){
     //  cuentaAprobados++
    //}
    //  alumno.isApproved = cuentaAprobados >= 2 ? true : false; // le sumamos la propiedad aprobado, si es mayor de 2 true, sino false
    //}


