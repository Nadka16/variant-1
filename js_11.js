function sq (x) {
    return x*x
}
function map(fn,arr) {
    let arrOut = [];
    for (let i = 0; i < arr.length; i++){
        arrOut[i] = fn(arr[i])
    }
    return arrOut
}
console.log(map(sq,[1,2,3,4,5]));