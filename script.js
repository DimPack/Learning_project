"use strict"

/* ******************** TASK_1 ************************************ */
let numberOfFilms;
do {
    numberOfFilms = prompt('Скільки фільмів ви вже подивилися?', '');
    if (isNaN(numberOfFilms)) {
        alert('Відповідь має бути числовою!');
        // continue; 
    }
    if (numberOfFilms === '') {
        alert('Ви нічого не ввели!');
        // continue;
    }
    if (numberOfFilms === null) {
        alert('Ви не дали відповіді!');
        continue;
    }
    if (numberOfFilms.length > 50) {
        alert('Ви ввели більше 50 символів!');
        // continue;
    }
} while (isNaN(numberOfFilms) || numberOfFilms === '' || numberOfFilms === null || numberOfFilms.length > 50);
// console.log(numberOfFilms.length);
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
if (personalMovieDB.count <= 10) {
    alert('Ви переглянули мало фільмів!');
} else if (personalMovieDB.count > 10 && personalMovieDB.count < 30){
    alert('Ви класичний кіноглядач!');
} else if (personalMovieDB.count > 30){
    alert('Ви КІНОМАН!');
} else {
    alert('Щось сталося не так!'); 
}
// let nameMovie,
//     ratingMovie;

// for (let i = 0; i < 2; i++) {
//     nameMovie = prompt('Який ваш один з останіх перегляних фільмів?');
//     ratingMovie = prompt('На скільки оцінете його?');
//     personalMovieDB.movies[nameMovie] = ratingMovie;
// };

console.log(personalMovieDB)