"use strict"

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circle = document.getElementsByClassName('circle'),
      wrapper = document.querySelector('.wrapper'), // він є родителем і в середині нього буде шукати
      heart = wrapper.querySelectorAll('.heart'),
      oneHeart = wrapper.querySelector('.heart');
      
console.dir(box);

// box.style.backgroundColor = 'pink';
// box.style.width = '500px';

//якщо треба декілька стилів краще використати cssText
box.style.cssText = 'background-color: blue; width: 400px';

btns[2].style.borderRadius = '50%';


// heart використано як псевдомасив в якому є метод циклу
// for (let i = 0; i < heart.length; i++) {
//     heart[i].style.cssText = 'background-color: brown; width: 200px; height: 200px' 
// }
heart.forEach(item => {
    item.style.backgroundColor =  'pink'
    // item.style.cssText = 'background-color: brown; width: 100px; height: 100px' 
});

const div = document.createElement('div');
// const text = document.createTextNode('Тут був я!'); //устарівший метод

div.classList.add('black');

document.body.append(div); //в кінець body добавляємо елемент

// wrapper.append(div); // wrapper він 1 елемент тому просто знаходим гово і добаляєм його вкінець
// wrapper.prepend(div); // wrapper в початок данного родителя
// heart[1].before(div); // спереді певного елементу
// heart[1].after(div); // сзаді певного елементу

// circle[0].remove(); // удалити елемент із DOM

heart[0].replaceWith(circle[0]); // заміняєм один елемент другим спочатку який елемент потім на який змінюємо

div.innerHTML = "<p>Hello World</p>"; // html сойства добив
// div.textContent = "hello"; // html тільки текст без html структури

div.insertAdjacentHTML('afterend',' <h2>Hey!</h2>'); // 1 аршумент вказує позицію елементу що вставляємо
