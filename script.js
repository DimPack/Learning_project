"use strict"

const personalMovieDB = {
    count: '',
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let numberMovies = 'Скільки фільмів Ви вже подивилися?',
    lastMovies = 'Який ваш один з останіх перегляних фільмів?',
    raitingLastMovies = 'На скільки оцінете його від 1 до 10?';

personalMovieDB.count = checkupQuetion(numberMovies);
ratingClient();
movieTitlesAndTheirRating(lastMovies, raitingLastMovies);
writeYourGenres();
showMyDB(personalMovieDB.privat);

function checkupQuetion(quetion) {
    let answer;
    do {
        answer = prompt(`${quetion}`, '').trim(); //trim() removing spaces.
        if (isNaN(answer)) {
            alert('Відповідь має бути числовою!');
        }
        if (answer === '') {
            alert('Ви нічого не ввели!');
        }
        if (answer === null) {
            alert('Ви не дали відповіді!');
            continue;
        }
        if (answer.length > 50) {
            alert('Ви ввели більше 50 символів!');
        }
    } while (isNaN(answer) || answer === '' || answer === null || answer.length > 50);
    return answer;
}

function ratingClient() {
    if (personalMovieDB.count <= 10) {
        alert('Ви переглянули мало фільмів!');
    } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30){
        alert('Ви класичний кіноглядач!');
    } else if (personalMovieDB.count >= 30){
        alert('Ви Кіноман!');
    } else {
        alert('Щось сталося не так!'); 
    };
}

function movieTitlesAndTheirRating(lastMovies, raitingLastMovies) {
    let nameMovie,
        ratingMovie,
        i = 1;
    do {
        nameMovie = prompt(`${lastMovies} ${i} із 2`,'');
        if (nameMovie === '') {
            alert('Ви нічого не ввели!');
            continue;
        }
        if (nameMovie === null) {
            alert('Ви не дали відповіді!');
            continue;
        }
        if (nameMovie.length > 50) {
            alert('Ви ввели більше 50 символів!');
            continue;
        }
        if (isNaN(nameMovie) ||  nameMovie > 10 || nameMovie.length > 50 || nameMovie === '' || nameMovie === null) {

            ratingMovie = checkupQuetion(raitingLastMovies)
            while (ratingMovie > 10) {
                alert('Ви оцінили більше чим на 10!');
                ratingMovie = checkupQuetion(raitingLastMovies)
            }
            personalMovieDB.movies[nameMovie] = ratingMovie;
        }
        
        i++;
    }while ((nameMovie === '' || nameMovie === null || nameMovie.length > 50) || i <= 2);
}

function showMyDB(hidden) {
    if (!hidden) {
        alert('Privat is false!');
        console.log(personalMovieDB);
    } else {
        alert('Privat is true!');
    }
}

function writeYourGenres() {
    let i = 1,
        j = 0,
        genres;
    do {
        genres = prompt(`Який ваш улюблений жанр ? вкажіть по одному ${i} із 3`, '');

        if (!isNaN(genres)) {
            alert('Жанр не може бути числовим!');
            continue
        }
        if (genres === '') {
            alert('Ви нічого не ввели!');
            continue
        }
        if (genres === null) {
            alert('Ви не дали відповіді!');
            continue;
        }
        if (genres.length > 50) {
            alert('Ви ввели більше 50 символів!');
            continue
        }
        i++;
        personalMovieDB.genres[j]= genres;
        j++;
    } while (genres === '' || genres === null || genres.length > 50 || genres === 'number' || i <= 3);
}