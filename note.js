// ----------------------- String -----------------------
// 1)
console.log(typeof(String(1)));

// 2)
console.log(typeof(2 + ''));

// 3)
console.log(typeof(2 + ''));
const FontSize = 26 + 'px';



// ----------------------- Numbers -----------------------
// 1)
console.log(typeof(Number('1')));

// 2)
console.log(typeof(+'2'));

// 3)
console.log(typeof(parseInt('15px', 10)));



// ----------------------- Boolean -----------------------
// 1)
// 0, '', null, undefined, NaN; - FALSE

let switcher = null;

if (switcher) {
    console.log('Working ...');
}

switcher = 1;

if (switcher) {
    console.log('Working ...');
}

// 2)
console.log(typeof(Boolean('1')));

// 3)
console.log(typeof(!!'2223'));



// ----------------------- closing -----------------------

function createCounter() {
    let counter = 0;

    const myFunction = function() {
        counter = counter + 1;
        return counter;
    }

    return myFunction;
}

const increment = createCounter();
const c1 = increment();
const c2 = increment();
const c3 = increment();

console.log(c1, c2, c3);




// ----------------------- interview tasks -----------------------

// 1. Какое будет выведено значение: let x = 5; alert( x++ ); ?

// 2. Чему равно такое выражение: [ ] + false - null + true ?

// 3. Что выведет этот код: let y = 1; let x = y = 2; alert(x); ?

// 4. Чему равна сумма [ ] + 1 + 2?

// 5. Что выведет этот код: alert( "1"[0] )?

// 6. Чему равно 2 && 1 && null && 0 && undefined ?

// 7. Есть ли разница между выражениями? !!( a && b ) и (a && b)?

// 8. Что выведет этот код: alert( null || 2 && 3 || 4 ); ?

// 9. a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ?

// 10. Что выведет этот код: alert( +"Infinity" ); ?

// 11. Верно ли сравнение: "Ёжик" > "яблоко"?

// 12. Чему равно 0 || "" || 2 || undefined || true || falsе ?

let x = 5; /*alert( x++ );*/ //5


let res = [ ] + false - null + true; //NaN
console.log(res);


let y = 1; let a = y = 2; /*alert(a)*/; //2


let resalt = [ ] + 1 + 2;
console.log(resalt); // 12
console.log(typeof(resalt)); // якщо до масива додавати число він стає строкою


alert( "1e2"[1] )// e


let r = 2 && 1 && null && 0 && undefined //null && - повертає першу false (null === false) воно запинається на брехні
console.log(r); 


!!( a && b ) /*и*/ (a && b) // є різниця false (!! перетворює  в булінове значення)


/*alert( null || 2 && 3 || 4 );*/ // || - запинається на правді і переше виконується && потім ||. Відповідь 3 


a = [1, 2, 3]; b = [1, 2, 3]; //Правда ли что a == b? не правда! це різні хранилища а значення в них однакові але ми їх не порівнюємо


alert( +"Infinity" ); //Infinity


/* "Ёжик" > "яблоко" */ // не вірно, бо йде посимвольне порівняння 


console.log(0 || "" || 2 || undefined || true || falsе); //2 , || - запиняється на правді 2 це true