// Write your solution here!
const cats = ['Milo', 'Otis', 'Garfield'];

console.log(cats);


function destructivelyAppendCat(name) {
    cats.push(name);
}
console.log(cats);

function destructivelyPrependCat(name) {
    cats.unshift(name);
}
console.log(cats);

function destructivelyRemoveLastCat() {
    cats.pop();
}
console.log(cats);

function destructivelyRemoveFirstCat() {
    cats.shift();
}
console.log(cats);

function appendCat(name) {
    return [...cats, name];
}
console.log(appendCat('Broom'));

function prependCat(name) {
    return [name, ...cats];
}
console.log(prependCat('Broom'));

function removeLastCat() {
    return cats.slice(0, -1);
}

console.log(removeLastCat());


function removeFirstCat() {
    return cats.slice(1);
}

console.log ( cats.slice(1)); 

