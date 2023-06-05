/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Алігатор",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const addDelete = document.querySelector('.promo__adv').remove(),
        genre = document.querySelector('.promo__genre').innerHTML = "Драма",
        bg = document.querySelector('.promo__bg').style.background = "url(./img/bg.jpg) center center/cover no-repeat",
        list = document.querySelectorAll('.promo__interactive-item');

        movieDB.movies.sort()
        list.forEach((item, i) => {
            item.textContent = `${i + 1}. ${movieDB.movies[i]}`;
        });