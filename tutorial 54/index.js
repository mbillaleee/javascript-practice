//ClipboardEvent object
//oncopy
//oncut
//onpaste

const input = document.querySelector("input");
const p = document.querySelector("p");

input.addEventListener("copy", function () {
  // console.log("copy");
  p.innerText = "you have coppied";
});
input.addEventListener("cut", function () {
  // console.log("cut");
  p.innerText = "you have cut";
});
input.addEventListener("paste", function () {
  // console.log("paste");
  p.innerText = "you have paste";
});
