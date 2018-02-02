function getDecimal(num) {
    return num - Math.floor(num);
}
let numbers = [4.2, 2.66, 5.006, 1.3, 3.1];
numbers.sort(function(a, b) {
    return getDecimal(a) - getDecimal(b);
});
console.log(numbers);