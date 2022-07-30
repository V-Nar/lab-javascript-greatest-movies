// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {
    let directorsArr = [];
    moviesArray.map(movie => directorsArr.push(movie.director));
    return directorsArr;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let spielbergDramaArr =
       moviesArray.filter(movie => (movie.director === 'Steven Spielberg') && (movie.genre.includes('Drama')));
    return spielbergDramaArr.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    let scoresArr = [];
    moviesArray.map(movie => movie.score ? scoresArr.push(movie.score) : scoresArr.push(0));
    if (scoresArr.length === 0) {
        return 0;
    } else {
        let scoresSum = scoresArr.reduce((score2, score1) => score2 + score1);
        return parseFloat((scoresSum / scoresArr.length).toFixed(2));
    }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let dramaArr = moviesArray.filter(movie => movie.genre.includes('Drama'));
    return scoresAverage(dramaArr);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let moviesArrCopy = moviesArray.map((movie) => movie);
    let orderedMoviesArr = moviesArrCopy.sort(function(a, b) {
        if (a.year === b.year) {
           if (a.title < b.title) {
            return -1;
           } else {
            return 1;
           }
        } else {
            return a.year - b.year;
        }
    });
    
    return orderedMoviesArr;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let moviesArrCopy = moviesArray.map((movie) => movie);
    let titlesArr = [];
    moviesArrCopy.map(movie => titlesArr.push(movie.title));
    return titlesArr.sort().slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
