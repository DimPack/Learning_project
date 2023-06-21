// function pow(x, n) {
//     let result = 1;

//     for (let i = 0; i < n; i++) {
//         result *= x;    
//     }

//     return result;
// }



//recursion

// function pow(x, n) {
//     if (n === 1) {
//         return x;
//     } else {
//         return x * pow(x, n - 1);
//     }
// }

// // pow(2, 1); //2
// // pow(2, 2); //4
// pow(2, 3); //8


// приклад рекурсії 

let students = {
    js: [{
        name: 'John',
        progress: 100
    }, {
        name: 'Ivan',
        progress: 60
    }],

    html: {
        basic: [{
            name: 'Peter',
            progress: 20
        }, {
            name: 'Ann',
            progress: 18
        }],

        pro: [{
            name: 'Sam',
            progress: 10
        }],

        /*semi: {
            students: [{
                name: 'test',
                progress: 100
            }]
        }*/
    }
};

// приклад без рекурсії

// function getTotalProgressByIteration(data) {
//     let total = 0;
//     let students = 0;

//     for (let course of Object.values(data)) { //Object.values(data) - витягає всі елементи які є в об'єкті та перетворює їх на масив
//         if (Array.isArray(course)) { // Array.isArray(course) - чи являється цей елемент масивом повертає true або false
//             students += course.length;


//             for (let i = 0; i < course.length; i++) { //Витягаємо значення progress з масива об'єктів

//                 total += course[i].progress;
//             }

//         } else {

//             for (let subCourse of Object.values(course)) { // циклом проходим також якщо елемент не являється масивом а на приклад об'єктом зразу

//                 students += subCourse.length; // додаємо значення студентів в переміну 

//                 for (let i = 0; i < subCourse.length; i++) { // і знов витягаємо значення progress із об'єкта та додаємо його в total
                    
//                     total += subCourse[i].progress;
//                 }
//             }
//         }
//     }

//     return total/students; // середній прогрес усіх студентів 
// }

// приклад написання з рекурсією

function getTotalProgressByRecursion(data) {
    if (Array.isArray(data)) { 
        let total = 0;

        for (let i = 0; i < data.length; i++) {
            total += data[i].progress;
        }

        return [total, data.length];
    } else {
        let total = [0, 0];

        for(let subData of Object.values(data)) {
            const subDataArr = getTotalProgressByRecursion(subData);
            total[0] += subDataArr[0];
            total[1] += subDataArr[1];
        }

        return total;
    }
}


const result = getTotalProgressByRecursion(students);
console.log(result[0]/result[1]);

// console.log(getTotalProgressByIteration(students));


//ЗАДАЧА НА РЕКУРСІЮ

function factorial(n) {
    if(n <= 0) {
        return 1;
    }
    else if(isNaN(n) || !Number.isInteger(n)) {
       console.log('Не являється цілим числом.'); 
    } 
    else {
        return (n * factorial(n - 1));
    }
};
console.log(factorial(3));
