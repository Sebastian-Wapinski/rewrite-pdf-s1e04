const res1 = 2 + 4; // 6
const res2 = res1 / 2; // 3
const res3 = res2 * res2; // 9
const res4 = res3 / 2; // 4.5
const res5 = res4 % 2; // 0.5

let res6 = 1; res6++; // 2
let res7 = 2; res7--; // 1

const res8 = 2 + '1'; // '21'

console.log(res1, res2, res3, res4, res5, res6, res7, res8);

const x = 1;
const y = '2';

const result1 = x + y;
console.log(result1, typeof result1);

const z = parseInt(y);
const result2 = x + z;
console.log(result2, typeof result2);

const x2 = '1';
const y2 = '2';

const result3 = x2 * y2;
console.log(result3, typeof result3);

const z2 = 'abc';
const result4 = x2 * z2;
console.log(result4, typeof result4);

console.log(result4 === NaN);
console.log(result4 === result4);
console.log(Number.isNaN(result4));