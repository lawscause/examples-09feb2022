/*
let arr = new Array('test');
let alsoArr = arr;

console.log(arr);
arr.push('1');
console.log(alsoArr);

let i = 0;
console.log(i);
*/

let logPhrase = function(phrase) {
    console.log('The phrase is ' + phrase);
}

logPhrase('testing');

console.log(logPhrase);

logPhrase = 1;
console.log(logPhrase);