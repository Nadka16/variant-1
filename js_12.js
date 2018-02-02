let input = [1,2,3,4,5,6,7,8,9];
function isEven(x) { return x % 2 === 0; }
function filter(fn,arr) {
    let arrOut = [];
    for (let i = 0; i < arr.length; i++){
        if (fn(arr[i]) === true)
        arrOut.push(arr[i])
    }
    return arrOut
}
console.log(filter(isEven,input));