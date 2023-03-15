function showMessage() {
    console.log('setTimeout');
}

const showName = function() {
    console.log('Michael!');
}

setTimeout(showMessage, 1000);
setTimeout(showName, 2000);

setTimeout(function() {
    console.log('funkcja anonimowa!');
}, 5000)