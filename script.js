"use strict"

const personalMovieDB = {
    count: '',
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    checkupQuetion: function() {
        do {
            personalMovieDB.count = prompt('Скільки фільмів Ви вже подивилися?', ''); //trim() removing spaces.
            if (personalMovieDB.count !== null) {
                if (isNaN(personalMovieDB.count) || personalMovieDB.count.includes(' ')) {
                    alert('Відповідь має бути числовою!');
                }
                if (personalMovieDB.count === '') {
                    alert('Ви нічого не ввели!');
                }
                if (personalMovieDB.count.length > 50) {
                    alert('Ви ввели більше 50 символів!');
                }

            } else {
                alert('Ви не дали відповіді!');
                continue;
            }
           
        } while (isNaN(personalMovieDB.count) || personalMovieDB.count === '' || personalMovieDB.count === null || personalMovieDB.count.length > 50 || personalMovieDB.count.includes(' '));
    },


    movieTitlesAndTheirRating: function() {
        let nameMovie,
        ratingMovie,
        i = 1;
        do {
            nameMovie = prompt(`Який ваш один з останіх перегляних фільмів? ${i} із 2`,'');
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
                    ratingMovie = prompt('На скільки оцінете його від 1 до 10?', ''); //trim() removing spaces.
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
                } while (isNaN(ratingMovie) || ratingMovie === '' || ratingMovie === null || ratingMovie.length > 50 || ratingMovie > 10);
                personalMovieDB.movies[nameMovie] = ratingMovie;
            }
            
            i++;
        }while ((nameMovie === '' || nameMovie === null || nameMovie.length > 50) || i <= 2);
    },


    ratingClient: function() {
        if (personalMovieDB.count <= 10) {
            alert('Ви переглянули мало фільмів!');
        } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30){
            alert('Ви класичний кіноглядач!');
        } else if (personalMovieDB.count >= 30){
            alert('Ви Кіноман!');
        } else {
            alert('Щось сталося не так!'); 
        };
    },


    showMyDB: function() {
        if (!personalMovieDB.privat) {
            alert('Privat is false!');
            console.log(personalMovieDB);
        } else {
            alert('Privat is true!');
        }
    },


    toggleVisibleMyDB: function() {
        if(personalMovieDB.privat){
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },

    writeYourGenres: function() {
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
};

personalMovieDB.checkupQuetion();

// function checkupQuetion() {
//     let answer;
//     do {
//         answer = prompt('Скільки фільмів Ви вже подивилися?', '').trim(); //trim() removing spaces.
//         if (isNaN(answer)) {
//             alert('Відповідь має бути числовою!');
//         }
//         if (answer === '') {
//             alert('Ви нічого не ввели!');
//         }
//         if (answer === null) {
//             alert('Ви не дали відповіді!');
//             continue;
//         }
//         if (answer.length > 50) {
//             alert('Ви ввели більше 50 символів!');
//         }
//     } while (isNaN(answer) || answer === '' || answer === null || answer.length > 50);
//     return answer;
// }

