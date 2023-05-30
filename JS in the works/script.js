"use strict"

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circle = document.getElementsByClassName('circle'),
      heart = document.querySelectorAll('.heart'),
      oneHeart = document.querySelector('.heart');

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
    item.style.cssText = 'background-color: brown; width: 100px; height: 100px' 
});