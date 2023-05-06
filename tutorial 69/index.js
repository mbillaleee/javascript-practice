// for...of and for...in


// const names = ["m1", "m2", "m3"];
// for(let name of names){
//   console.log(name);
// }

let students = {
  ID : 101,
  name : 'Masum billal',
  cgpa : 3.05
}
for(let x in students){
  // console.log(students[x]);
  console.log(`${x} : ${students[x]}`);
}
