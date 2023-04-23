"use strict"

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