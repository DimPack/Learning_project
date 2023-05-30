/*task 9  */

function fib(number) {
    if (typeof(number) !== 'number' || number <= 0 || !Number.isInteger(number)) {
        return '';
    }
    let result = '';
    let first = 0;
    let second = 1;
    for (let i = 0; i < number; i++) {
        if (i + 1 === number) {
            result += `${first}`;
        } else {
            result += `${first} `;
        }

        let third = first + second;
        first = second;
        second = third;
    }
    console.log(result);
}
fib(7);

const arr = [2, 13, 26, 8, 18];
// arr.sort();
// console.log(arr); // the sort method is used for strings, but it can also be used for numbers

arr.sort(compareNum); // the sort method is used for numbers when sort takes in function
console.log(arr);

function compareNum(a, b) {
    return a - b;
}

// /* lesson 35 spred */
// /*copy obj */

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 5
    }
}
 const add = {
    d: 17,
    e: 20
 };
console.log(Object.assign(numbers, add)); //connects objects to each other
const clone = Object.assign({}, add);
clone.d = 88;
console.log(clone);


const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'ddsss'
console.log(newArray);
console.log(oldArray)

const video = ['youtube', 'tiktok', 'instagram'],
      messegers = ['telegam', 'whatsup', 'viber'],
      intenet = [...video, ...messegers, 'google', 'webdev'];
      console.log(intenet); 

function log (a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = ['силка на відео', 'силка на заглушку', 'силка на автора'];
log(...num);


const array = ['a', 'b'];

const newArrays = [...array];
console.log(newArrays);

const testObj = {
    one: 1,
    two: 2
};

const newObjTest = {...testObj};
console.log(testObj);
console.log(newObjTest);


// /*task 10 */
const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%',
            ruby: '30%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function(obj) {
        const {age} = obj;
        const{languages} = obj.skills;
        let str = `Мне ${age} и я владею языками: `;

        languages.forEach(lang => {
            str += `${lang.toUpperCase()}`;
        });
        return str;
    }
    
};

// function showExperience(plan) {
//     const {exp} = plan.skills;
//     console.log(exp);
// }
// showExperience(personalPlanPeter)

function showProgrammingLangs(plan) {
    const {programmingLangs} = plan.skills;
    for(let key in programmingLangs) {
        console.log(`${key}: ${programmingLangs[key]}\n`);
    }
        
}
showProgrammingLangs(personalPlanPeter);

// /* task 12  */
// /*REVERS */

const someString = 'This is some strange string';

function reverse(str) {

    if(typeof(str) !== 'string') {
        console.log('Ошибка!');
    } else {
        console.log(str.split('').reverse().join(''));
    }
}

reverse(someString)

// /*task with currency */
const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
let currency = baseCurrencies.concat(additionalCurrencies);

function availableCurr(arr, missingCurr) {
    let infoCurrency = `Доступные валюты:\n`;
    if(arr.length != 0) {
        
        for (let item in arr) {

            if(arr[item] === missingCurr){
                continue;
            }
            infoCurrency += `${arr[item]}\n`
        };
        
    } else {
        console.log('Нет доступных валют');
    }
    console.log(infoCurrency);
}

availableCurr(currency, 'CNY');

// /*Lesson 36 OOP */

const solder = {
    health: 400,
    armmo: 100,
    SetHelloy: function() {
        console.log('Eeeeehyyy!')
    }
};

const Jon = Object.create(solder); // crate prototype from JonH to solder

//  const JonH = {
//     health: 100,
//  };

//  Object.setPrototypeOf(JonH, solder); // crate prototype from JonH to solder

// JonH.SetHelloy();


/* Task 13 */

const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
}

function isBudgetEnough(data) {
    let sumS = 0,
        sumB = 0;
    data.shops.forEach(item => {

        sumS += item.width * item.length;
    });
    sumB = (sumS * data.height) * data.moneyPer1m3;

    if (sumB > data.budget) {
        console.log('Бюджета недостаточно');
    } else {
        console.log('Бюджета достаточно'); 
    }
    console.log(sumB);
}
isBudgetEnough(shoppingMallData);


// /*task 14 */

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi'];

function sortStudentsByGroups(arr) {
    let game = [],
        size = 3,
        rest = [];
    arr.sort();
    for(let i = 0; i < arr.length; i += size) {
        if (game.length < size) {
            game.push(arr.slice(i, i + size));
        } else {
            for(let j = i; j < arr.length; j++) {
                rest.push(arr[j]);
            }  
        }
    }
    game.push(`Оставшиеся студенты: ${rest.length === 0 ? '-' : rest.join(', ')}`);
    return game;
}
sortStudentsByGroups(students)

/*task 15 */

const restorantData = {
    menu: [
        {
            name: 'Salad Caesar',
            price: '14$'
        },
        {
            name: 'Pizza Diavola',
            price: '25$'
        },
        {
            name: 'Beefsteak',
            price: '17$'
        },
        {
            name: 'Napoleon',
            price: '7$'
        }
    ],
    waitors: [
        {name: 'Alice', age: 22}, {name: 'John', age: 24}
    ],
    averageLunchPrice: '20$',
    openNow: true
};

function isOpen(prop) {
    let answer = '';
    (prop !== true) ? answer = 'Закрыто' : answer = 'Открыто';

    return answer;
}

console.log(isOpen(restorantData.openNow))

function isAverageLunchPriceTrue(fDish, sDish, average) {
    if (parseInt(fDish.price) + parseInt(sDish.price) < parseInt(average)) {
        return 'Цена ниже средней';
    } else {
        return 'Цена выше средней';
    }
}

console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice));
function transferWaitors(data) {
    const copy = Object.assign({}, data);

    copy.waitors[0] = [{name: 'Mike', age: 32}];

    console.log(copy.waitors);
    return copy;
}

transferWaitors(restorantData);
console.log(restorantData.waitors);