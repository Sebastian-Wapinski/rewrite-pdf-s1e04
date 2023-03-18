const user = {
    firstName: 'Alicja',
    lastName: 'Nowak',
    age: 24,
}

console.log(
    user.firstName,
    user['firstName']
);

const propName = 'firstName';
console.log(user[propName]);
