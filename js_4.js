let input = "Test, str,,, jhjh . !!! 6 jjg j ?";
let output = input.split(/[.,!:;?\s]+/).join(' ');
console.log(output);
