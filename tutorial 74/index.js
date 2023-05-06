function display1(){
  console.log("I am display1");
}
function display1(){ console.log("I am display1") }   //{} tule nile kaj korbe na
display1();

const display2 = () => console.log("I am display2"); //{} single statement tule nile kaj korbe , but double takle kaj korbe na
display2();




function message1(){
  return "Hi I am message 1"
}
console.log(message1());

const message2 = () => "Hi I am message 2"  //return korbe print korbe na----- return tule nilew kaj korbe
console.log(message2());