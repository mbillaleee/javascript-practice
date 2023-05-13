//find(callback, value) return the value of the first element that pass certain conle

// let numbers = [5, 55, 14, 5, 78, 22];
// let firstEventNumber = numbers.find(x => x%2===0);
// console.log(firstEventNumber);

// let numbers = [5, 55, 14, 5, 78, 22];
// const evenNumber =(value, index, array) =>{
//   if(value%2 === 0){
//     return value;
//   }
// }
// let firstEventNumber = numbers.find(evenNumber);
// let firstEventNumberIndex = numbers.findIndex(evenNumber);
// console.log(firstEventNumber);
// console.log(firstEventNumberIndex);



//findIndex(callback, value) return the index of the first element that pass certain condition
const students = [
  {
    id: 101,
    gpa: 2.5
  },
  {
    id: 102,
    gpa: 3.5
  },
  {
    id: 103,
    gpa: 4.5
  },
  {
    id: 104,
    gpa: 5.00
  }
]
console.log(students.find(x=>x.gpa>4));