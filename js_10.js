let characters = [
    { name: 'barney', age: 36 },
    { name: 'fred', age: 40 }];
function pluck (arr,f) {
    let arrS = [];
    for (let i=0;i < arr.length;i++){
        arrS.push(arr[i][f])
    }
    return arrS
}
console.log(pluck(characters,'name'));