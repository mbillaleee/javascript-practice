// Array destructure
// swap variables
//object destructure
//nested object destructure
//destructure function parameters


// let numbers = [10, 20, 30, 40, 50];
// console.log(numbers[0])
// console.log(numbers[1])


// Array destructure
// let numbers = [10, 20, 30, 40, 50];
// // let [num1, num2, num3, num4, num5] = numbers;
// let [num1, num2, ...des] = numbers;
// // console.log(num1);
// // console.log(num2);
// console.log(des);



// swap variables
// let a=10, b=30;
// [a,b]=[b,a]
// console.log(`A = ${a}`);
// console.log(`B = ${b}`);




// //object destructure----------------
// const studentInfo = {
//   id:101,
//   fullName: 'Masum Billal',
//   gpa: 3.05
// }

// // console.log(studentInfo.id)
// // console.log(studentInfo.fullName)
// // console.log(studentInfo.gpa)

// // ES6
// const {id, fullName, gpa} = studentInfo;
// console.log(id)
// console.log(fullName)
// console.log(gpa)


// //Nested object destructure----------------
// const teacherInfo = {
//   id:102,
//   fullName: 'Anisul Hasque',
//   gpa: 3.05,
//   language : {
//     native : 'bangla',
//     beginner: 'english'
//   }
// }

// const {id, fullName, gpa, language} = teacherInfo;
// console.log(id)
// console.log(fullName)
// console.log(gpa)
// console.log(language.native)
// console.log(language.beginner)


//destructure function parameters-----------
const studentInfo = ({id, fullName}) =>{  //object destructure {}  
  console.log(`${id}, ${fullName}`);  //object destructure [] 
}

const student = {
  id : 103,
  fullName: 'Elias Uddin'
}

studentInfo(student);