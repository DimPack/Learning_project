const btn_1 = document.querySelector('.btn_1'),
      btn_2 = document.querySelector('.btn_2'),
      btns = document.querySelectorAll('.btn_0');

//є такий метод але він не зовсін правильний
// btn.onclick = function() {
//     alert('click in js');
// }

btn_2.addEventListener('click', (e) => {
     alert('click in JS')
});

btn_2.addEventListener('click', (e) => {
    alert('click second')
});

btn_2.addEventListener('mouseenter', (e) => {
    console.log('hover');
});

let i = 0;
const deleteElement = (e) => {
    e.target.style.opacity = '0';
    i++;
    console.log(e.target);
    console.log(e.type);
    if (i == 1) {
        btn_1.removeEventListener('click', deleteElement); 
    }
};

btn_1.addEventListener('click', deleteElement);

const link = document.querySelector('a');
link.addEventListener('click', (e) => {
    e.preventDefault(); // ОТМІНИЛИ СТАНДАРТНЕ відношення браузера
    console.log(e.target);
});

btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        console.log('click array');
    });
});