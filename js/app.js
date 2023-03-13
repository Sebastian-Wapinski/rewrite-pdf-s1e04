const randomNumber = Math.round(Math.random() * 5);

let userNumber;

let counter = 0;

while (userNumber !== randomNumber) {
    userNumber = parseInt(prompt('Zgadnij liczbę 0-5!'));
    counter+=1;
}

alert('Zgadłeś za: ' + counter + ' razem!');
