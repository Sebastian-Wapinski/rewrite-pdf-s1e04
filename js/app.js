const monthNumber = parseInt(prompt('Podaj numer miesiąca: ', 0));

let monthName;

switch (monthNumber) {
    case 1:
        monthName = 'Styczeń';
        break;

    case 2:
        monthName = 'Luty';
        break;

    case 3:
        monthName = 'Marzec';
        break;

    case 4:
        monthName = 'Kwiecień';
        break;

    default:
        monthName = 'none';
        break;
}

console.log(monthName);
