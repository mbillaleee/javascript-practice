//1+2+3+4+5=
// sum = 0;

// for(var x = 1; x <= 10; x = x + 1){
//     sum = sum + x;
// }

var m = parseInt(prompt("Enter the first number"));
var n = parseInt(prompt("Enter the last number"));
sum = 0;

for(var x = m; x <= n; x = x + 1){
    sum = sum + x;
}
document.write(sum);