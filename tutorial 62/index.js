// Error handling -> try catch, finally, through
// try ... catch handle run time errors
// Error object
//The finally statement ->execute code, after

document.querySelector("#checkButton").addEventListener("click", function () {
  var num = document.querySelector("#numTextfield").value;
  // console.log(num);

  try {
    if (num < 5) {
      throw "Input is too low";
    } else if (num > 10) {
      throw "Input is too high";
    }
  } catch (err) {
    console.log(err);
  }
});
