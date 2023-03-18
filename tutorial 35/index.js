// DOM = Document Object Model


// use querySelector collection condition (ID"#---"), (Class".---")
document.querySelector("#lorem").innerHTML = "Change";
document.querySelector("h1").innerHTML = "Query selector";


// use querySelector child
document.querySelector("a").innerHTML = "new Text";

document.querySelector("li a").innerHTML = "new Text";

document.querySelector(".my_div a").innerHTML = "new Text Contact";


// use querySelectorAll collection
document.querySelectorAll("p")[2].innerHTML = "This is a text";;

