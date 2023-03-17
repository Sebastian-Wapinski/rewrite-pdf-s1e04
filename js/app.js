const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(element, index, array) {
    console.log(element);
});

function showEachElement(item, index) {
    console.log(item + " => " + index);
}

numbers.forEach(showEachElement);


