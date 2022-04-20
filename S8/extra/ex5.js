//En base a la api Open Trivia (https://opentdb.com/api_config.php), vamos a desarrollar un trivial con la siguiente
//url 'https://opentdb.com/api.php?amount=10'. Esta api nos devolverá una serie de preguntas con sus respuestas,
//tanto erroneas como correctas.

//La idea es hacer un juego en el que el usuario introduzca en un input las caracteristicas del Trivial y que
// al darle al 'Start Game' le salgan las preguntas de la api para que pueda comenzar el juego. Una vez las
//  responda todas, le mostraremos al usuario el resultado.

// Ten en cuenta que hay dos tipos de preguntas. Aquellas con 3 respuestas erroneas y 1 correcta y aquellas
//  con respuesta verdadero / falso.

const baseUrl = "https://opentdb.com/api.php?amount=2&type=multiple";

const answeredQuestions = [];

fetch(baseUrl)
  .then((res) => res.json())
  .then((questions) => {
    console.log(questions);

    const divQuestions$$ = document.querySelector(
      '[data-function="gameboard"]'
    );
    for (let i = 0; i < questions.results.length; i++) {
      let quest = questions.results[i];
      let div$$ = document.createElement("div");
      let h4$$ = document.createElement("h4");

      divQuestions$$.appendChild(div$$);
      div$$.appendChild(h4$$);
      h4$$.innerHTML = quest.question;

      const allAnswers = [...quest.incorrect_answers, quest.correct_answer];

      for (let answer of allAnswers) {
        let p1$$ = document.createElement("p");
        p1$$.innerHTML = answer;
        p1$$.classList.add("answer");
        divQuestions$$.appendChild(p1$$);

        p1$$.addEventListener("click", () => {
          answeredQuestions[i] = answer === quest.correct_answer;
          p1$$.classList.add("marked");
        
        });
      }
    }
  const buttonFinal$$ = document.querySelector('[data-function="check-game"]');

  buttonFinal$$.addEventListener("click", () => {
        console.log(answeredQuestions);
        let pAnswer$$ = document.createElement ('p');
        console.log(pAnswer$$);
        pAnswer$$.innerHTML= "Puntuación total: "+ answeredQuestions;
        divQuestions$$.appendChild(pAnswer$$);

  });

  
});

//hacer bucle de answered questions para dar puntuacion

// function checkResults(elemento, contenido, correctAnswer){
//     console.log("comprobando resultado", elemento, contenido, correctAnswer)
// }

// let puntuacionTotal=0;

// function checkResults(element, contenido){
//     element.classList.add("marked");

//     for (const quest of questions.results){
//         if(contenido === quest.correct_answer){
//             puntuacionTotal++;
//         }
//     }