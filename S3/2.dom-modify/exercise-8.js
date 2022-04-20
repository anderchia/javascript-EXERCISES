const secondDiv$$ = document.querySelectorAll('div')[1]; // cogemos todos los div y con el 1 seleccionamos el segundo div

const p$$ = document.createElement('p');
p$$.textContent = 'Voy en medio!'

document.body.insertBefore(p$$, secondDiv$$);