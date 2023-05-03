"use strict"

/* ******************** TASK_1 ************************************ */
const personalMovieDB = {
    count: '',
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let numberMovies = 'Скільки фільмів Ви вже подивилися?';
let lastMovies = 'Який ваш один з останіх перегляних фільмів?';
let raitingLastMovies = 'На скільки оцінете його від 1 до 10?';

personalMovieDB.count = checkupQuetion(numberMovies);
ratingClient();
movieTitlesAndTheirRating(lastMovies, raitingLastMovies);


function checkupQuetion(quetion) {
    let answer;
    do {
        answer = prompt(`${quetion}`, '');
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
            do {
                ratingMovie = prompt(`${raitingLastMovies}`,'');
                if (isNaN(ratingMovie)) {
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
            } while (isNaN(ratingMovie) || ratingMovie === '' || ratingMovie === null || ratingMovie > 10 || ratingMovie.length > 50);
        }
        personalMovieDB.movies[nameMovie] = ratingMovie;
        i++;
    }while ((nameMovie === '' || nameMovie === null || nameMovie.length > 50) || i <= 2);
}

console.log(personalMovieDB);