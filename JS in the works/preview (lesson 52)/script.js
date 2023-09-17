'use strict';

const box = document.querySelector('.box');

const newHeight = 100;
const newWidth = 400;

// function changeParams(elem, h, w) {
//     elem.style.height = `${h || 200}px`;
//     elem.style.width = `${w || 200}px`;
// }

// function changeParams(elem, h, w) {
//     elem.style.height = `${h ?? 200}px`;
//     elem.style.width = `${w ?? 200}px`;
// }

function changeParams(elem, h, w) {
    elem.style.height = `${h ?? 200}px`;
    elem.style.width = `${w ?? 200}px`;
    elem.innerHTML = (h ?? 200 ) * (w ?? 200); 
}

changeParams(box, newHeight, newWidth);

// ${h || 200}px метод інтерпуляції поверне перше правильне значення

let userName;
let userKey

console.log(userName ?? userKey ?? 'User');

// якщо не null або undefined виводимо User якщо не то значення яке є
