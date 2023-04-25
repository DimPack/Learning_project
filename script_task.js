
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