const baseUrl = "http://localhost:3000/characters";
const characters$$ = document.querySelector('[data-function="characters"]');
let firstCharacter;
let secondCharacter;

const getCharacters = async () => {
    const rawCards = await fetch(baseUrl); //De manera asíncrona recupero la información cruda
    const formattedCards = await rawCards.json(); //Transfo  rmo la información cruda a JSON
    console.log("ROLE CARDS", formattedCards);

printCharacters(formattedCards)

}
getCharacters();

const printCharacters =(characters) => {
  //  cards.forEach((card) => {             otro manera de hacerlo (forEach o for of)
for (let character of characters){
    const div$$ = document.createElement("div");
    const h2$$ = document.createElement("h2");
    const image$$ = document.createElement("img");

    h2$$.innerHTML=character.name;
    image$$.src=character.avatar;
    
    div$$.addEventListener("click", () => {
    selectCharacter(character)}, 
    {one:true} //cuando clickamos en el character, llama a la funcion seleccion de personaje
)
    div$$.appendChild(h2$$);
    div$$.appendChild(image$$)
    characters$$.appendChild(div$$)
}
}

const selectCharacter = (character) => { //creamos la función select character
  if (firstCharacter) {
    secondCharacter = character; //si ya tiene el 1er character, seleccionamos el 2º y generamos readyBattle
    readyBattle()
  }else{
    firstCharacter = character; //si no, la selección es el 1o
  }
  }


  const readyBattle = () => { //creamos el botón fight
    const button$$ = document.createElement("button");
    button$$.innerHTML = "Fight!";
    button$$.className = "b-fight";
    characters$$.appendChild(button$$)
  }

  
  const battle = () => {

  }
//tenemos las cartas pintadas, ahora tenemos que crear una funcion
//donde al clickar a un personaje y clickar un segundo, aparezca botón de luchar

