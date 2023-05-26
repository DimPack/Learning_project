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