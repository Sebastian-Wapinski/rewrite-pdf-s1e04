const car = {
    color: 'red',
    mileage: 1203,
    horsepower: 540,
    seatsNumber: 2,
}

car.color = 'blue';
console.log(car.color, car['color']);

const hp = car.horsepower;
console.log(hp);

