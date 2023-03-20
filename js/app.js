const product = {
    name: 'Podstawy JS',
    type: 'book',
    price: 49,
}

product.price = 99;

Object.defineProperty(
    product,
    'info',
    {
        value: 'JS jest super!'
    }
)

console.log(product);