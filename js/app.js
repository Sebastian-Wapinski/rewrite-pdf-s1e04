const product = {
    name: 'Podstawy JS',
    type: 'book',
    price: {
        value: 49,
    }
}

const nameObj = new String('Marta');
console.log(nameObj);
console.log(nameObj.valueOf());
const namePr = 'Marta';
console.log(namePr);

if (nameObj == namePr) {
    console.log(true);
} else {
    console.log(false);
}
// Porównanie ścisłe === wypluwa false bo są porównywane różne typy obiektów 
// Porównanie luźne == wypluwa true bo dochodzi do konwersji i tak naprawdę porównuje
// nameObj.valueOf();

// Dlatego warto używać porównania ścisłego bo mamy pewność że nic nam się pod spodem nie dzieje

