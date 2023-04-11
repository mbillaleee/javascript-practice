//JS BOM
//JS TIMING EVENT METHODS
// setTimeOut() setInterval();

const message = document.querySelector(".message");
const saveButton = document.querySelector(".save-btn");
saveButton.addEventListener("click", startClock);
function startClock() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let second = date.getSeconds();

  minutes = formatTime(minutes);
  second = formatTime(second);
  let time = hours + ":" + minutes + ":" + second;
  console.log(time);

  message.textContent = time;

  setInterval(startClock, 1000);
}
function formatTime(value) {
  if (value < 10) {
    value = "0" + value;
  }
  return value;
}
