const product = {
    name: 'Podstawy JS',
    type: 'book',
    set price(value) {
        this._price = value;
    },
    get price() {
        return this._price /100;
    },
}

product.price = 99;

for(const key in product) {
    console.log(key, product[key]);
}

console.log(product);