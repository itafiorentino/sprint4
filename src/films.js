// * LEVEL 1 *

// Exercise 1: Get the array of all directors.
let directors;

function getAllDirectors(movies) {
  let directors = movies.map(function (item) {
    return item.director;
  })
  return directors; 
}

/*function getAllDirectors(movies) {
  let result = movies.map(element => element.director);
  console.log("EXERCICE 1 ->", result);
  return result; 
} */


// Exercise 2: Get the films of a certain director
// provided director (by parameter) has to match exact spelling and case than written in movies array
function getMoviesFromDirector(movies, director) {
  let result =  movies.filter(element => element.director == director);
  return result; 
 
}

// Exercise 3: Calculate the average of the films of a given director.

function moviesAverageOfDirector(movies, director) {
  const moviesOfDirector = movies.filter(movie => movie.director == director);

  const totalScoreByDirector = moviesOfDirector.reduce((total, movie) => total + movie.score, 0); //USING REDUCE()
  const averageScore = totalScoreByDirector / moviesOfDirector.length;
  const formattedAverageScore = parseFloat(averageScore.toFixed(2));

  return formattedAverageScore;
}


// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(movies) {
  const movieTitles = movies.map(movie => movie.title); // is it isolating the title and adding it into new array?

  const sortedMovieTitles = movieTitles.sort();

  const orderAlphabeticallyTitles = sortedMovieTitles.splice(0, 20);

  return orderAlphabeticallyTitles;
}

// Exercise 5: Order by year, ascending, when years repeated, must show sorted by title alphabetically
function orderByYear(movies) {

  function sortByYear(a, b) {
    return a.year - b.year;
  }
  const sortedByYear = movies.slice().sort(sortByYear); //NEW ARRAY

  function sortByTitle(a, b) {
    if (a.title < b.title) {
      return -1; // a should come before b
    } else if (a.title > b.title) {
      return 1; // a should come after b
    } else {
      return 0; // a and b have the same title
    }
  }
  const sortedYearTitle = sortedByYear.sort(sortByTitle);
  //console.log("-->sortedYearTitle!!!", sortedYearTitle)
  return sortedYearTitle;


}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(movies, genre) {
  const movieGenres = movies.filter(movie => movie.genre == genre);

  const totalScoreByGenre = movieGenres.reduce((total, movie) => total + movie.score, 0); //USING REDUCE()
  const averageScoreGenre = totalScoreByGenre / movieGenres.length;
  const formattedAverageScoreGenre = parseFloat(averageScoreGenre.toFixed(2));

  return formattedAverageScoreGenre;
  //console.log("moviesAverageByCategory::: ", formattedAverageScoreGenre);

}

// ---------------- * LEVEL 2 * ------------------

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}


// * LEVEL 3 *


// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
