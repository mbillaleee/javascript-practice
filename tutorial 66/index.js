/*
1. ES6 Syntax
    1.1 ES6 Variables -> var, let, const (scope, readeclearation, value assigning)
    1.2 Template Literals
    1.3 Hosting & srtict mode
    1.4 Default and Rest parameter
    1.5 spread operator
    1.6. for.....of
2. Arrow Functions
3. Descructuring
    3.1 Array and Object Destructureing
*/

// Default  parameter------------------
// "use strict"
// function message(text = "Hellow this is default parameter"){
//     console.log(`${text}`);
// }
// message();
// message("I love js ES6");

//Rest  parameter------------------
function printNumbers(x, y, ...z) {
  console.log(`x= ${x}, y= ${y}, z= ${z}`);
}
printNumbers(10, 20, 30, 40, 50);
