const product = {
    name: 'Podstawy JS',
    type: 'book',
    price: {
        value: 49,
    }
}

const strObj = new String('Marta');
const numObj = new Number(2);

console.log(strObj, numObj);
console.log(strObj.constructor.name, numObj.constructor.name);

//Przy użyciu takiego konstruktora jestem w stanie pobrać informacje 
//o typie danego obiektu

