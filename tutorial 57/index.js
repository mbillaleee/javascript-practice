//js BOM
//popup boxes --alert, confirm, prompt

// console.log(window);

// alert("alert box");

// confirm("are you sure");

// function deleteSomething() {
//   let value = confirm("Do you want to delete?");
//   if (value) {
//     console.log("delete");
//   } else {
//     console.log("not delete");
//   }
// }
// deleteSomething();

function welcomeMessage() {
  var h1 = document.createElement("h1");
  var name = prompt("Enter your name: ");
  if (name == null || name == "") {
    text = "No name founc";
  } else {
    text = "Welcome :" + name;
  }

  var textNode = document.createTextNode(text);
  h1.appendChild(textNode);
  document.body.appendChild(h1);
}
welcomeMessage();
