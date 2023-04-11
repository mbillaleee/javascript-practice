// Error handling -> try catch, finally, through
// try ... catch handle run time errors
// Error object
//The finally statement ->execute code, after

// alert("Hi Everyone");
// alert(x);
// alert("Bye Everyone");
try {
  alert("Hi Everyone");
  alert(x);
  // alert("Bye Everyone");
} catch (err) {
  // alert("Inside catch block");
  console.log(err);
  // console.log(err.name);
  // console.log(err.message);
} finally {
  alert("Bye Everyone");
}
