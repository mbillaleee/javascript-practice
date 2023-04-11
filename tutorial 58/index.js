//JS BOM
//JS TIMING EVENT METHODS
// setTimeOut() setInterval();

// setTimeout(()=>{
//   console.log('hi')
// }, 4000);

// setTimeout(display, 5000);
// function display() {
//   console.log("dispalay function");
// }

// const saveButton = document.querySelector(".save-btn");
// const message = document.querySelector(".message");
// saveButton.addEventListener("click", saveUser);
// function saveUser() {
//   message.textContent = "User registation successfully";
//   setTimeout(() => {
//     message.textContent = "";
//   }, 3000);
// }

const saveButton = document.querySelector(".save-btn");
const message = document.querySelector(".message");
saveButton.addEventListener("click", displayCount);
function displayCount() {
  let count = 0;
  message.textContent = count;

  setInterval(()=>{
    count++;
    message.textContent = count;
  }, 2000);
}
