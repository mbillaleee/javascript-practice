//1+2+3+4+5=
// sum = 0;

// for(var x = 1; x <= 100; x = x + 1){
//     document.write(" ," + x);
// }
var i = 1;
while( i <= 5){
    document.write(" " + i);
    i = i + 1;
}

document.write("<br>");

sum = 0;
var i = 1;
while( i <= 5){
    sum = sum + i;
    i = i + 1;
}
document.write(sum);


//2+4+6+8.......+100

document.write("<br>");

sum = 0;
var i = 2;
while( i <= 100){
    sum = sum + i;
    i = i + 2;
}
document.write(sum);

// var m = parseInt(prompt("Enter the first number"));
// var n = parseInt(prompt("Enter the last number"));
// sum = 0;

// for(var x = m; x <= n; x = x + 1){
//     sum = sum + x;
// }
// document.write(sum);