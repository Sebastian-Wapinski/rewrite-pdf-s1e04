const product = {
    name: 'Podstawy JS',
    type: 'book',
    price: 49,
};

const cart = [
    {...product, price: 99},
    {...product, price: 79},
    {...product},
];

console.log(cart);

let initialValue = 0;
const sum = cart.reduce(function(acc, el) {
    return acc + el.price;
}, initialValue);

console.log(sum);
