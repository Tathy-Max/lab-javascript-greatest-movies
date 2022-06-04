// The `movies` array from the file `src/data.js`.
//console.log('movies: ', movies);

const movies = require("./data.js")


// ---> Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

// tentativa com sintaxe antiga 
// function getAllDirectors(currentElement) {return currentElement.director}

// const onlyDirectors = movies.map(getAllDirectors)
// console.log(onlyDirectors);

// tentativa com sintaxe nova 
function getAllDirectors(movies) {
const allDirectors = movies.map((currentElement) => {return currentElement.director});

return allDirectors
}


// ---> Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {

const arrStevDra = movies.filter((currentElement) => {
  if (currentElement.director === 'Steven Spielberg' && currentElement.genre.includes('Drama')) {return currentElement};
})
return arrStevDra.length
}
 

// ---> Iteration 3: All scores average - Get the average of all scores with 2 decimals

// Tentativa 1
// let avg = 0
//         let sum = 0
//         for (let i = 0; i < movies.length; i++) {
//           sum += movies[i].score;
//           avg = sum / movies.length;
//         }
// console.log(avg)

// // Tentativa 2
// let avg = 0
// let sum = 0
// function scoresAverage(movies) {
//   const scores = movies.map((currentAvgScore) => {
//     return currentAvgScore.score;
//     });
//     //for (let i = 0; i < movies.length; i++) {
//       sum += movies[i].score;
//       avg = sum / movies.length;
//     }   
//   }
// scoresAverage(movies)        
// console.log(avg)

// Tentativa 3

function scoresAverage(movies) {
  if (movies.length === 0) {
    return 0;
  }
  const scores = movies.map((currentAvgScore) => {return currentAvgScore.score;});
  
  let initialScore = 0;
  let sumScore = scores.reduce((previousValue, currentValue) => previousValue + currentValue,initialScore);
  
  let scoreAvg = sumScore / movies.length;
  
  return Number(scoreAvg.toFixed(2)); 
}


// ---> Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  
const genreDrama = movies.filter((currentElement) => {return currentElement.genre.includes('Drama');}) // QUEM E A FUNCAO AQUI?

const dramaScore = genreDrama.map((currentElement) => {return currentElement.score;})

let initialScore = 0;
let sumScore = dramaScore.reduce((previousValue, currentValue) => previousValue + currentValue,initialScore);
let dramaAvg = sumScore / dramaScore.length

return Number(dramaAvg.toFixed(2)); 
}



    




// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear() {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically() {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
