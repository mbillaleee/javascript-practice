var link = document.getElementsByTagName('a')[0];
console.log(link);


var linkDomChn = link.innerHTML = "Visit Google";
console.log(linkDomChn);

var linkSryle = link.style.textDecoration = "none";
console.log(linkSryle);

var linkSryle = link.style.color = "green";
console.log(linkSryle);

var linkSryle = link.style.fontSize = "1.5rem";
console.log(linkSryle);

var linkHref = link.href
console.log(linkHref);

var linkHrefCng = link.href ="https://google.com"
console.log(linkHrefCng);




//create html element

var heading3 = document.createElement("h1");
var text = document.createTextNode("This is heading 3");
heading3.appendChild(text);
var mydiv = document.getElementById("myDiv");
// mydiv.appendChild(heading3);



// //remove html element
// var heading2 = document.getElementsByTagName('h1')[1];
// mydiv.appendChild(heading2);


var heading0 = document.createElement("h1");
var text0 = document.createTextNode("This is heading 0");
heading0.appendChild(text0);
var heading1 = document.getElementsByTagName('h1')[0];
mydiv.insertBefore(heading0, heading1);


var clslst = document.getElementById('myDiv').classList;

console.log(clslst);




// replace child practice google