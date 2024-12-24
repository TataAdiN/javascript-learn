function addOne(x) {
    return x + 1;
}

function square(x) {
    return x * x;
}

function compose(f, g) {
    return (x) => {
        return f(g(x));
    }
}

const addOneAndSquare = compose(square, addOne);
console.log(addOneAndSquare(2)); // output: 9

// js Map is buildin function that implement high order function
const numbers = [1, 2, 3, 4];

const doubled = numbers.map((num) => num * 2);

console.log(doubled); // [2, 4, 6, 8]