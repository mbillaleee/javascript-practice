//load, unload
// scroll
// resize
//toggle

// window.addEventListener('load',function(){
//     console.log('load');
// });

// window.addEventListener('unload',function(){
//     console.log('unload');
// });

// window.addEventListener("scroll", function () {
//   console.log("scroll");
// });

// window.addEventListener("resize", function () {
//   console.log("resize");
// const width = this.window.outerHeight;
// const height = this.window.outerHeight;
// console.log(`height: ${height}, width: ${width}`);
// });

const details = document.querySelector("details");

details.addEventListener("toggle", function (e) {
  console.log(e.target.open);
});
