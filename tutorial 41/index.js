// function addStyle(){
//     var para = document.querySelector("#paraId");
//     para.style.color = "red";
//     para.style.fontSize = "3rem";
//     para.style.fontWeight = "bold";
//     para.style.fontStyle = "italic";
// }

var para = document.querySelector("#paraId");
function addStyle(){
    // var para = document.querySelector("#paraId");
    para.classList.add("para_style");  //class add
}

function removeStyle(){
    // var para = document.querySelector("#paraId");
    para.classList.remove("para_style");  //class remove
}