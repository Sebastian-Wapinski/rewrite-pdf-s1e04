const numbers = [1, 2, 3, 4, 5];

const sum = getSum(numbers);
console.log(sum);

const evenNumbers = getEvenNumbers(numbers);
const sum2 = getSum(evenNumbers);
console.log(sum2);

function getEvenNumbers(arr) {
    const evenNumbers = [];
    for (let i = 0; i < arr.length; i++) {
        if (!(arr[i] % 2)) {
            evenNumbers.push(arr[i]);
        }
    }
    return evenNumbers;
}



function getSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}


