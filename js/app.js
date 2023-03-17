const cart = [
    ['skarpetki', 3, 4.90],
    ['dlugopis', 4, 3.90],
    ['zeszyt', 2, 5.90]
];

const newCart = cart.filter(function(product) {
    return product[0] !== 'dlugopis';
});

console.log(newCart);

