"use strict"

/* ******************** TASK_1 ************************************ */
const numberOfFilms = prompt('Скільки фільмів ви вже подивилися?');


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let nameMovie,
    ratingMovie;

for (let i = 0; i < 2; i++) {
    nameMovie = prompt('Який ваш один з останіх перегляних фільмів?');
    ratingMovie = prompt('На скільки оцінете його?');
    personalMovieDB.movies[nameMovie] = ratingMovie;
};

console.log(personalMovieDB)

/* ******************** TASK_1 ************************************ */

/*-------------TASK_OSTERICS------------------*/

let result = '';
const length = 6;

for (let i = 0; i <= length; i++) {

    for (let j = 0; j < i; j++) {
        result += '*'; 
    }
    result += '\n';
}

console.log(result)

/*-------------TASK_OSTERICS------------------*/

first: for (let i = 0; i <= 3; i++) {
    console.log(`First level: ${i}`);
    for (let j = 0; j < 3; j++) {
        console.log(`Second level: ${j}`);
        for (let k = 0; k < 5; k++) {
            if (k === 2) break first;
            console.log(`Third level: ${k}`);
        }
    }
}
