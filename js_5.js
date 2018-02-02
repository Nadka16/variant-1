let str = "5 2 1 5 6 2 55.2 1 87 53 77";
let arr = str.split(' ');
let min  =  Math.min.apply(Math, arr);
let max = Math.max.apply(Math, arr);
let reg = RegExp(min + " .*? " + max);
str = str.replace(reg, min + " " + max);
console.log(str);