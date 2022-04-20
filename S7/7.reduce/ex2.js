//Dado el siguiente array, haz una suma de todos las notas de los examenes de los alumnos que esten 
//aprobados usando la función .reduce().

//El resultado sería 42.

const exams = [
    {name: 'Abel Cabeza Román', score: 5}, 
    {name: 'Maria Aranda Jimenez', score: 1}, 
    {name: 'Cristóbal Martínez Lorenzo', score: 6}, 
    {name: 'Mercedez Regrera Brito', score: 7},
    {name: 'Pamela Anderson', score: 3},
    {name: 'Enrique Perez Lijó', score: 6},
    {name: 'Pedro Benitez Pacheco', score: 8},
    {name: 'Ayumi Hamasaki', score: 4},
    {name: 'Robert Kiyosaki', score: 2},
    {name: 'Keanu Reeves', score: 10}
];

var totalScore = exams.reduce (function(acummulator,exam){
if (exam.score >=5){
return acummulator + exam.score;
} else {
    return acummulator //siempre hay que retornar el acumulador, si no perdemos los datos previamente acumulados y da undefined
}
}   , 0);

console.log(totalScore)

//const totalApprovedScore = exams.reduce((accumulator, exam) => exam.score < 5 ? accumulator + exam.score : accumulator, 0); OTRA MANERA