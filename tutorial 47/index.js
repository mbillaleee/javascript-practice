// <input /> text, number, password, email, color, radio,
//checkbox, search, time, datetime, week, month, url, tel, file
// <select/>, <textarea/>

// const input = document.querySelector("input[name=name]");
// input.addEventListener("change", changeHandeler);

// function changeHandeler(e) {
// console.log("changed");
// console.log(e.type);
//   console.log(e.target);
//   console.log(e.target.className);
//   console.log(e.target.id);
//   console.log(e.target.value);
// }



// var programs = document.querySelectorAll("input[name=program]");
// console.log(programs);
// Array.from(programs).map((program) => {
//   program.addEventListener("change", programHandeler);
// });

// function programHandeler(e) {
//   console.log(e.target.value);
// }


var department = document.querySelector("#department");
// console.log(department);
department.addEventListener("change", handleDepartment);

function handleDepartment(e){
    console.log(e.target.value);
}