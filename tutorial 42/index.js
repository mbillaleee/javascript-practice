// document.querySelector("button").addEventListener("click", myFunction);

// function myFunction(){
//     alert("Hellow");
// }


document.querySelector("button").addEventListener("click", function(){
    alert("Hellow");    //anonimus function
});


var myVar =  document.querySelector("h1");
myVar.addEventListener("mouseover", function(){  //click, mouseover
    myVar.classList.add("head_style");
})
myVar.addEventListener("mouseout", function(){  //click, mouseover
    myVar.classList.remove("head_style");
})