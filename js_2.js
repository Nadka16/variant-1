let a,b,c;
a=0.2;
b=2;
if((0.5<(a*b))&&((a*b)<10)){
    c=Math.exp((Math.abs(a))-(Math.abs(b)));
} else if ((0.1 < (a * b)) && ((a * b) < 0.5)) {
    c = Math.sqrt(Math.abs(a + b));
}
else c = (b * b) * 2;
console.log(c);