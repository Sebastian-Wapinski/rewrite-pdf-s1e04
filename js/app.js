const product = {
    name: 'Podstawy JS',
    type: 'book',
    price: [49, 39],
};

const cart = [
    {...product, price: 99},
    {...product, price: 79},
    {...product},
];

console.log(cart);

cart.forEach(function(p){
    console.log(p.price);
})


