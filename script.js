"use strict"

let numberOfFilms = prompt('Скільки фільмів ви вже подивилися?');


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let lastMovie = prompt('Який ваш один з останіх перегляних фільмів?');
let ratingMovie = prompt('На скільки оцінете його?');