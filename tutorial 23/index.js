var number = Number(prompt("Enter a number"));
// if (number > 0) {
//   document.write("Positive");
// } else {
//   document.write("Negative");
// }

// var number1 = number > 0 ? "Positive" : "Negative";
// document.write(number1);

// if (number > 0) {
//   document.write("Positive");
// } else if(number < 0){
//   document.write("Negative");
// }else{
//     document.write("Zero");
// }

var result = number > 0 ? "Positive" : number < 0 ? "Negative" : "Zero";
document.write(result);
