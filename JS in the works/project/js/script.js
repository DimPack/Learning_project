/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';
document.addEventListener('DOMContentLoaded', () => { // document.addEventListener('DOMContentLoaded', () => для того щоб запуск скріптів був після того як прогрузяться основні елементи верстки (DOM) замість document може бути window
    
    const movieDB = {
        movies: [
            "Алігатор",
            "Авіатор",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против...",
            "Я легенда!"
        ]
    };

    const adv = document.querySelectorAll('.promo__adv img'),
          genre = document.querySelector('.promo__genre'),
          bg = document.querySelector('.promo__bg'),
          list = document.querySelector('.promo__interactive-list'), //querySelectorAll
          addForm = document.querySelector('form.add'),
          addInput = addForm.querySelector('.adding__input'),
          checkbox = addForm.querySelector('[type="checkbox"]');

    addForm.addEventListener('submit', (e) => { //відсліжуємо форму в які ввели данні submit - відслідковує при відправці даних
        e.preventDefault();

        let newFilm = addInput.value; // value це значення яке зберігається те що вівв в форму користувач
        const favorite = checkbox.checked; // checked знаходиться в чекбоксі яке повертає true або false в залежності що нажато

        if(newFilm) { // перевірка чи newFilm не пуста то проводимо добалення якщо ні то не добавляємо данні

            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 21)}...`; // якщо наша назва більше 21 символа тоді ми вирізаємо перні 21 символ newFilm.substring(0, 22) вказуємо від 0 до 22
            }
            if (favorite) {
                console.log('Добавлено улюблений фільм!');
            }
            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);
            creatMoviesList(movieDB.movies, list);
            e.target.reset(); // з івенту видаляємо з форми все що ввели
        }

    });

    const deleteAdd = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };

    const makeChangers = () => {
        genre.textContent = "Драма",
        bg.style.background = "url(./img/bg.jpg) no-repeat";
    };

    const sortArr = (arr) => { // переводимо цей метод в окрему функцію для розширення в майбутньому
        arr.sort();
    };

    function creatMoviesList(films, parent) {
        parent.innerHTML = "";
        sortArr(films); //сортуруєм на початку визову весь список фільмів
        films.forEach((film, i) =>{
            parent.innerHTML += `
            <li class="promo__interactive-item">
                ${i+1}. ${film}
                <div class="delete"></div>
            </li>
            `;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', (e) => {
                btn.parentElement.remove(); // удаляємо елемент з html 
                movieDB.movies.splice(i, 1); // удаляємо з бази данних той фільм на який натиснули на удаління

                creatMoviesList(films, parent); // після удаління заново будуємо список щоб не збивалась номерація виходить це рекурсія 
            });
        })
    };

    deleteAdd(adv);
    makeChangers();
    creatMoviesList(movieDB.movies, list);
});

