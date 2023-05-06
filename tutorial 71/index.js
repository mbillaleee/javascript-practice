 // var numbers = [10, 20, 30, 40];
  // var squareNumbers = [];
  // numbers.forEach(function(x){
  //   squareNumbers.push(x*x);
  // });
  // console.log(squareNumbers);

 var numbers1 = [10, 20, 30, 40];
  var squareNumbers = numbers1.map(function(x){
    return x*x;
  });
  console.log(squareNumbers);



 var numbers = [10, 20, 30, 40, 4, 6, 99, 1];
  var newNumbers = numbers.filter(function(x){
    return x<10;
  });
  console.log(newNumbers);