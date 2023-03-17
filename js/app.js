const cart = [
    ['skarpetki', 3, 4.90],
    ['dlugopis', 4, 3.90],
    ['zeszyt', 2, 5.90]
];

const costPerProduct = cart.map(function(product) {
    return (product[1] * product[2]).toFixed(2);
});

console.log(costPerProduct);

