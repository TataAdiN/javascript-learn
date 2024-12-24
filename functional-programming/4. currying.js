function adjectivfy(adjective) {
  return function (noun) {
    return `${noun} ${adjective}.`;
  }
}

function multipleBy(x) {
  return function (y) {
    return x * y;
  }
}

const coolifier = adjectivfy('keren');
const funnifier = adjectivfy('seru');

const multipleByFive = multipleBy(5);

console.log(coolifier('Dicoding')); // Output: Dicoding keren.
console.log(funnifier('JavaScript')); // Output: JavaScript seru.
console.log(multipleByFive(7)); // Output: 35
console.log(multipleByFive(10)); // Output: 50