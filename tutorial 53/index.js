//KeybourdEvent object
//1. keyup
//2 keypress
//3. keyup

const textarea = document.querySelector("textarea");

// textarea.addEventListener("keydown", function () {
//   console.log("keydown");
// });

// textarea.addEventListener("keypress", function () {
//   console.log("keypress");
// });

textarea.addEventListener("keyup", function (e) {
  // console.log("keyup");
  // console.log(e.key);
  // console.log(e.keyCode);
  console.log(e.code);
});
