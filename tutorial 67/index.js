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

// function addNumbers(x, y, z){
//   return x + y + z;
// }
// let numbers = [1,2,3];
//  // console.log(addNumbers(numbers[0], numbers[1], numbers[2]));
// console.log(addNumbers(...numbers));

// let number1 = [5,6, ...numbers];  //spread operater je kno jaygay use kora jabe
// console.log(number1);

// let number2 = [1, 2, 3];
// let number3 = [4, 5, 6];
// // let number4 = number2.concat(number3);
// let number4 = [...number2, ...number3];
// console.log(number4);


let p1 = {
  name : "Masum Billal",
  age : 27
}
let p2 = {
  nationality : "bangladeshi",
  occupation: 'student'
}
let p = {...p1, ...p2};
console.log(p);





