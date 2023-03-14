
// var number = 5;
// var result = number * number;
// document.write(result);

// var number = Number(prompt("Enter a number"));

//create a function
// function square(number1, number2){
//     // var number = 5;
//     var result = number1 * number2;
//     document.write( "Result=" + result + "<br>"); 
// }
// // square(8);
// square(5, 6);

function square(number1, number2){
    var result = number1 * number2;
    return result;
    // document.write( "Result=" + result + "<br>"); 
}

// calling function
// document.write(square(5, 6));
var x = square(5, 6)
document.write(x);