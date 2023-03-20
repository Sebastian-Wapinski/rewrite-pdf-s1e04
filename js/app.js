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

const obj = ['a', 'b', 'c'];

for (const el of obj) {
    console.log(el);
}

for (const key in obj) {
    console.log(key);
}



// for(const key in product) {
//     console.log(key, product[key]);
// }

// console.log(product);