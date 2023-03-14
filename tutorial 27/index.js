// Array  = is number object; collection variable

var b = [20, 30, 40, 50, 60];

// console.log(b[0]);
// console.log(b[1]);
// console.log(b[2]);
// console.log(b[3]);
// console.log(b[4]);

// var sum = 0;
// for(var i=0; i<=4; i++){
//     console.log(i);
//     sum = sum + i;
// }
// console.log(sum);

var num = new Array();

for(var i=0; i<5; i++){
    num[i] = parseInt(prompt("Enter number :"));
}

var sum = 0;
for(var i=0; i<=4; i++){
    console.log(num[i]);
    sum = sum + i;
}

console.log("Sum = " + sum);