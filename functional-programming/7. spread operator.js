// original implementation
function ori_max(arrayOfNumbers) {
    return arrayOfNumbers
        .sort((a, b) => a - b)
        .pop();
}

const ori_numbers = [10, 23, 24, 7, 42, 18];
const ori_largest = ori_max(ori_numbers);

console.log(ori_largest);
console.log(ori_numbers);

//spread operator
function max(arrayOfNumber) {
    return [...arrayOfNumber]
        .sort((a, b) => a - b)
        .pop();
}

function registerEmail(person, email) {
    return { ...person, email };
}

const numbers = [10, 23, 24, 7, 42, 18];
const largest = max(numbers);

console.log(largest);
console.log(numbers);

const person = {
    name: 'John',
    username: 'johndoe',
};

const personWithEmail = registerEmail(person, 'john@dicoding.com');

console.log(person);
console.log(personWithEmail);