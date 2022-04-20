const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta']

for (let i = 0; i < products.length; i++) { // creamos el bucle que recorra products
    const valores = products[i]; // acción que equipara valores a cada producto(posición)

    if(valores.toLowerCase().includes('Camiseta.toLowerCase'())){ //si en cada producto en minusculas se incluye camiseta en minúscula, se muestra
    console.log(valores);                                           // otra manera: if(valores.includes("Camiseta"))
}
}
