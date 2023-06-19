// console.log(document.body);
// console.log(document.documentElement);
// console.log(document.body.childNodes);

// console.log(document.body.firstChild);
// console.log(document.body.firstElementChild);
// console.log(document.body.lastChild);
// console.log(document.body.lastElementChild);

// console.log(document.querySelector('#current').parentNode.parentNode); // батьківські елементи 
// console.log(document.querySelector('#current').parentNode.parentElement);// батьківські елементи

// console.log(document.querySelector('[data-current="3"]').previousSibling); // попередній або наступний (nextSibling) вузол (не елемент)
// console.log(document.querySelector('[data-current="3"]').nextElementSibling); //попередній (previousElementSibling)або наступний елемент

for (let node of document.body.childNodes) {
    if (node.nodeName == '#text' || node.nodeName == '#comment') {
        continue;
    }
    console.log(node);
}