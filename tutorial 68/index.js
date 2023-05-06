//Object Litereals

// function studentInfo1(name, age){
//   return{
//     name,
//     age
//   }
// }
// console.log(studentInfo1("Masum Billal", 27));



// let message = {
//   body: function(){
//     return `Hi, I am object function`
//   }
// }
// console.log(message.body);
let message = {
  // body(){
  'body name'(){  //ES6 e function name e space use kora jabe
    return `Hi, I am object function`
  }
}
// console.log(message.body());
console.log(message['body name']());