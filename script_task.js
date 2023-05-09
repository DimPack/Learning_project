
/* ******************** TASK_1 ************************************ */

/*-------------TASK_OSTERICS------------------*/

let result = '';
const length = 6;

for (let i = 0; i <= length; i++) {

    for (let j = 0; j < i; j++) {
        result += '*'; 
    }
    result += '\n';
}

console.log(result)

/*-------------TASK_OSTERICS------------------*/
first: for (let i = 0; i <= 3; i++) {
    console.log(`First level: ${i}`);
    for (let j = 0; j < 3; j++) {
        console.log(`Second level: ${j}`);
        for (let k = 0; k < 5; k++) {
            if (k === 2) break first;
            console.log(`Third level: ${k}`);
        }
    }
}
/*-------------TASK_OSTERICS------------------*/


/*-----------practical exercise 3 -----------*/

function firstTask() {
    // Пишем решение вот тут
    for(let i = 5; i <= 10; i++) {
        console.log(i);
    }
    
}

function secondTask() {
    // Пишем решение вот тут
    for(let i = 20; i >= 10; i--) {
        if(i === 13) break;
        console.log(i);
    }

}

function thirdTask() {
    // Пишем решение вот тут
    for(let i = 2; i <= 10; i++) {
        if(i % 2 === 0) {
            console.log(i);
        }
    }
}

function fourthTask() {
    // Пишем решение вот тут
    let i = 2;
    while(i <= 16){
     if (i % 2 === 0) {
        i++;
        continue;
        } else {
            console.log(i);
        }
        i++;
    }
}

function fifthTask() {
    const arrayOfNumbers = [];
    let j = 0;
    // Пишем решение вот тут
        for(let i = 5; i <= 10; i++) {
        arrayOfNumbers[j] = i;
        j++;
    }
    // Не трогаем
    return arrayOfNumbers;
}

function fifthTask() {
    const arrayOfNumbers = [];
    let j = 0;
    // Пишем решение вот тут
        for(let i = 5; i <= 10; i++) {
        arrayOfNumbers[j] = i;
        j++;
    }
    console.log(arrayOfNumbers)
    // Не трогаем
    return arrayOfNumbers;
}

function firstTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = [];
    // Пишем решение вот тут
    for(let i = 0; i < arr.length; i++) {
        result[i] = arr[i];
    }
    // Не трогаем
    return result;
}

function secondTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    // Пишем решение вот тут
        for(let i = 0; i < data.length; i++) {
            if (typeof(data[i]) === 'number') {
                data[i] = data[i] * 2;
            } else if (typeof(data[i]) === 'string'){
                data[i] = `${data[i]} - done`;
            }
        }
    // Не трогаем
    return data;
}

function thirdTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];
    let j = 0;
    // Пишем решение вот тут
     for(let i = data.length -1; i >= 0; i--) {
 
        result[j] = data[i];
        j++;
     }
    // Не трогаем
    return result;
}

/*------Christmas tree task-------*/
const lines = 5;
let res = '';
// Проверяется именно переменная result, формируйте строку в ней
for(let i = 0; i <= lines; i++) {
    for(let j = 0; j < lines - i; j++) {
        res += ' ';
    }
    for(let j = 0; j < 2 * i + 1; j++) {
        res += '*';
    }
    res += '\n';
}
console.log(res);

/*------Christmas tree task-------*/



/*task 2 lessons 27*/
function returnNeighboringNumbers(number) {
    if(typeof(number)!= 'number') return
    let arr = [];
    arr[0] = number - 1;
    arr[1] = number;
    arr[2] = number + 1;
   return console.log(arr);   
}
returnNeighboringNumbers(5)



/* task 3 lessons 27*/
function getMathResult(a, b) {
    let resultsNumber = '';

    if (typeof(b)!= 'number' || b <= 0){
        return console.log(a);
    } else {
        for (let i = 1; i <= b; i++) {
        
            if(i === b) {
                resultsNumber += `${a * i}`;
            } else {
                resultsNumber += `${a * i}---`; 
            }
        }

        console.log(resultsNumber);
    }
}
getMathResult(3, 10);

/*task code number 7 */

function calculateVolumeAndArea(num) {
    let Vcube = 0,
        Acube = 0;
    if (typeof(num) != 'number'|| !Number.isInteger(num) || num < 0 ) {
        console.log('При розрахунках сталася помилка!');
    } else {
        Vcube = Math.pow(num, 3);
        Acube = 6 * Math.pow(num, 2);
        console.log(`Об'єм куба: ${Vcube}, площа всієї поверхності: ${Acube}`);
    }
}
calculateVolumeAndArea(5);



function getCoupeNumber(num_place) {
    if (typeof(num_place) != 'number'|| !Number.isInteger(num_place) || num_place < 0 ) {
        return 'Помилка. Перевірьте правильність вашого місця';

    } 
    if (num_place > 36 || num_place === 0) {
        return 'Таких місць в вагоні не існує.';
    } else {
        switch (num_place) {
            case 1:
            case 2:
            case 3:
            case 4:
                return'1';
            case 5:
            case 6:
            case 7:
            case 8:
                return'2';
            case 9:
            case 10:
            case 11:
            case 12:
                return'3';
            case 13:
            case 14:
            case 15:
            case 16:
                return'4';
            case 17:
            case 18:
            case 19:
            case 20:
                return'5';
            case 21:
            case 22:
            case 23:
            case 24:
                return'6';
            case 25:
            case 26:
            case 27:
            case 28:
                return'7';
            case 29:
            case 30:
            case 31:
            case 32:
                return'8';
            case 33:
            case 34:
            case 35:
            case 36:
                return'9';
        }
    }
} 
getCoupeNumber(0);

/*TASKS with number 8 */

function getTimeFromMinutes(minutesTotal) {
    if (typeof(minutesTotal) !== 'number' || minutesTotal < 0 || !Number.isInteger(minutesTotal)) {
        return "Ошибка, проверьте данные";
    }

    const hours = Math.floor(minutesTotal / 60);
    const minutes = minutesTotal % 60;

    let hoursStr = '';

    switch (hours) {
        case 0: 
            hoursStr = 'часов';
            break;
        case 1:
            hoursStr = 'час';
            break;
        case 2:
        case 3:
        case 4:
            hoursStr = 'часа';
            break;
        default:
            hoursStr = 'часов';
    }

    return `Это ${hours} ${hoursStr} и ${minutes} минут`;
}
getTimeFromMinutes(62);



function findMaxNumber(a, b, c, d) {
    if(typeof(a) != 'number' || a < 0 || typeof(b) != 'number' || b < 0 || typeof(c) != 'number' || c < 0 || typeof(d) != 'number' || d < 0) {
        return 0;
    }
    let big_1,
        big_2,
        biggest;
    if(a < b) {
        big_1 = b;
    } else {
        big_1 = a;
    }
    if (c < d) {
        big_2 = d;
    } else {
        big_2 = c;
    }
    if(big_1 < big_2){
        biggest = big_2;
    } else {
        biggest = big_1;
    }
    return biggest;
}
findMaxNumber(2, 11.2, 4, 7);

//can be used Math.max(2, 11.2, 4, 7) - will output the largest number


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