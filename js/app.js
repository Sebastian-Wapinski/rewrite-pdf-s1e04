const product = {
    name: 'Podstawy JS',
    type: 'book',
    price: 49,
}

product.info = 'text';
product.price = 99;

delete product.price;

console.log(product);