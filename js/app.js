const userAge = prompt('Ile masz lat?', 0);
const userAgeInt = parseInt(userAge);

if(userAgeInt >= 18) {
    alert('Jesteś pełnoletni!')
} else {
    const leftAge = 18 - userAge;
    alert('Do pełnoletności brakuje Ci: ' + leftAge);
}