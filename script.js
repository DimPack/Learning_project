"use strict"

/* ******************** TASK_1 ************************************ */
let numberOfFilms;
do {
    numberOfFilms = prompt('Скільки фільмів ви вже подивилися?', '');
    if (isNaN(numberOfFilms)) {
        alert('Відповідь має бути числовою!');
    }
    if (numberOfFilms === '') {
        alert('Ви нічого не ввели!');
    }
    if (numberOfFilms === null) {
        alert('Ви не дали відповіді!');
        continue;
    }
    if (numberOfFilms.length > 50) {
        alert('Ви ввели більше 50 символів!');
    }
} while (isNaN(numberOfFilms) || numberOfFilms === '' || numberOfFilms === null || numberOfFilms.length > 50);

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
} else if (personalMovieDB.count >= 30){
    alert('Ви Кіноман!');
} else {
    alert('Щось сталося не так!'); 
}
let nameMovie,
    ratingMovie,
    i = 1;
do {
    nameMovie = prompt(`Який ваш один з останіх перегляних фільмів? ${i} із 2`,'');
    if (nameMovie === '') {
        alert('Ви нічого не ввели!');
    }
    if (nameMovie === null) {
        alert('Ви не дали відповіді!');
        continue;
    }
    if (nameMovie.length > 50) {
        alert('Ви ввели більше 50 символів!');
    }
    do {
        ratingMovie = prompt('На скільки оцінете його від 1 до 10?','');
        if (isNaN(numberOfFilms)) {
            alert('Відповідь має бути числовою!');
        }
        if (ratingMovie === '') {
            alert('Ви нічого не ввели!');
        }
        if (ratingMovie === null) {
            alert('Ви не дали відповіді!');
            continue;
        }
        if (ratingMovie.length > 50) {
            alert('Ви ввели більше 50 символів!');
        }
        if (ratingMovie > 10) {
            alert('Ви оцінили більше чим на 10!');
        }
    } while (ratingMovie === '' || ratingMovie === null || ratingMovie > 10);
    personalMovieDB.movies[nameMovie] = ratingMovie;
    i++;
}while (nameMovie === '' || nameMovie === null || nameMovie.length > 50 || i <= 2);

console.log(personalMovieDB);