const product = {
    name: 'Podstawy JS',
    type: 'book',
    price: 49,
    q: 1,
};

const cart = [
    {...product, price: 99},
    {...product, price: 79},
    {...product, q: 2},
];

console.log(cart);

let initialValue = 0;
const sum = cart.filter(function(el) {
    return el.q > 1;
}).reduce(function(acc, el) {
    return acc + el.price;
}, initialValue);

console.log(sum);
