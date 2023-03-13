const a = 12;
const b = 55;

const info = a > b ? 'A większe' : 'B większe';
console.log(info);

const diff = a > b ? a - b : b - a;
console.log(diff);

const isEven = a % 2 === 0 ? true : false;
console.log(isEven);

const numsAreEven1 = (a % 2 === 0) && (b % 2 === 0) ? true : false;

const numsAreEven2 = !(a % 2) && !(b % 2) ? true : false;

console.log(numsAreEven1, numsAreEven2);

