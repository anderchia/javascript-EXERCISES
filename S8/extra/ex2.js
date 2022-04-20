fetch(`http://localhost:3000/diary`)
.then (res => res.json())  //res es los datos de la petición // res.jason es para transformarlos a algo legible (formato json) //esto es copy-paste siempre es igual
.then (myDiary => {       //hacemos otra promesa porque todavia no tenemos los datos (porque el primer then también es una promesa y tarda tiempo) // al resolver esta segunda promesa nos da los datos   
    console.log(myDiary)


  const mySortedDiary = myDiary.sort((a, b) => new Date(a.date) - new Date (b.date));  //a,b son posiciones/objetos del array


for (const diaryNote of mySortedDiary){ //tiene que estar dentro porque el fetch tarda (promesa) y no podríamos acceder a myDiary
    const div$$ = document.createElement("div");
    div$$.innerHTML = 
    `<h3>${diaryNote.title}</h3>
    <h5>${diaryNote.date}</h5>
    <p>${diaryNote.description}</p>`; // $
    document.body.appendChild(div$$);


const btn$$ = document.createElement("button");
btn$$.textContent = "Eliminar";
btn$$.addEventListener("click", function(){ //función anonima y dentro va la ejecución
    div$$.remove();
})
div$$.appendChild(btn$$); //mejor agregar el botón después de crearlo

//for (let i = 0; i < mySortedDiary.length; i++){ // tiene que estar dentro porque sino no podemos acceder a myDiary
//    const diaryNote = mySortedDiary[i]; //diarynote = a cada elemento del array = mydiary
  //  const div$$ = document.createElement("div");
  //  div$$.innerHTML = 
  //  `<h3>${diaryNote.title}</h3>
  //  <h5>${diaryNote.date}</h5>
  //  <p>${diaryNote.description}</p>`; // $
  //  document.body.appendChild(div$$);
}
})

