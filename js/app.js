const numbers = [];

while (numbers.length < 5) {
    
    const num = Math.round(Math.random() * 10);

    if (numbers.includes(num)) {
        
    } else {
        numbers.push(num);
    }
}

console.log(numbers);

