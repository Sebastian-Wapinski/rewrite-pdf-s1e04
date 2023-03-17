const numbers = [1.12, 2.13, 3.12, 4.61, 5.32];
const integers = numbers.map(parseNumbersToInt);
console.log(integers);

function parseNumbersToInt(element, index, array) {
    return parseInt(element);
}


const evenNumbers = integers.map(isEven);
console.log(evenNumbers);

function isEven(element) {
    return element % 2 === 0;
}

