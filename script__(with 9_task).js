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

/* lesson 35 spred */
/*copy obj */

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


/*task 10 */
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
<<<<<<< HEAD
showProgrammingLangs(personalPlanPeter)
=======
showProgrammingLangs(personalPlanPeter)
>>>>>>> parent of 0828257... complite task 12
