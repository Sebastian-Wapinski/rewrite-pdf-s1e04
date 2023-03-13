var num = 222;
console.log(typeof num);

const str = 'jakiś ciąg znaków';
console.log(typeof str);

let arr = [];
const arrType = typeof arr;
console.log(arrType);

const fn = function() {

}

const fnType = typeof fn;
console.log(fnType);

let myVar = null;
let myObj = {};

console.log(typeof myVar, typeof myObj);

console.log(myVar === null, myObj === null);

console.log( typeof myVar === 'object',typeof myObj === 'object');

if(typeof myVar === 'object') {
    myVar.prop = 'value';
}

