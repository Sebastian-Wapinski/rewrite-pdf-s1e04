const numbers = [5, 10, 20, 8, 1];

while (numbers.length < 5) {
    
    const num = Math.round(Math.random() * 10);

    if (numbers.includes(num)) {
        
    } else {
        numbers.push(num);
    }
}

console.log(numbers);

numbers.sort(function(a, b) {
     return a - b;
});

console.log(numbers);



