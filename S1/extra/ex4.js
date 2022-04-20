//Usa un bucle para sumar el total de las ventas (`sellCount`) de todos los productos.

const products = [{name: 'Gorra de rodilla', sellCount: 10},
{name: 'Pantalón de pana', sellCount: 302},
{name: 'Reloj de papel albal', sellCount: 23},
{name: 'Inpar de zapatos', sellCount: 6}];

let precioTotal = 0;

for (let product of products) {
    precioTotal = product.sellCount + precioTotal;
    
}


console.log(precioTotal)

//const sellTotalCount = product.reduce((acummulator, product) => acummulator + product.sellCount, 0) // otra manera de hacerlo usando .REDUCE y arrow functions
//const sellTotalCount = product.reduce(function (acummulator, product){
    //acummulator + product.sellCount}
    //, 0)
// .REDUCE con funciones normales