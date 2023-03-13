const x = 5;
const y = 6;

console.log(x < y);
console.log(!(x < y));
console.log(x < y && x > y);
console.log(x < y || x > y);

const x2 = 7;
const y2 = 1;
const min = 4;
const max = 10;

console.log(x2 >= min && x2 <= max);
console.log(y2 >= min && y2 <= max);
console.log(x2 < min || x2 > max);
console.log(y2 < min || y2 > max);

console.log(!(x2===y2));
