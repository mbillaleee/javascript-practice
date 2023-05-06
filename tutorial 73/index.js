var students = [
  {
    id:5010,
    name:'Masum Billal',
    gpa: 4.00
  },
  {
    id:5011,
    name:'Rakib Billal',
    gpa: 5.00
  },
  {
    id:5012,
    name:'Bakky Billal',
    gpa: 3.00
  }
]
// console.log(students);


// function studentNames1 (){
//   return  students.filter(function(x){
//         return x.gpa > 3
//       }).map(function(y){
//           return y.name;
//       });
// }
// console.log(studentNames1());


const studentNames2 = () =>{
  return students.filter((x)=>x.gpa>3).map((y)=>y.name);
}
console.log(studentNames2());