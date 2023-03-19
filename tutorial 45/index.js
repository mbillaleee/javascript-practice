
for(var i=0; i<3; i++){
    document.querySelectorAll(".myButton")[i].addEventListener("click", function(){
        var text = this.innerHTML;
        console.log(text);
    
        audioPlay(text);
        playAnimation(text);
    })
    }
    
    function audioPlay(text){
        switch(text){
            case "a":
                var audio = new Audio('sound/a.mp3');
                audio.play();
                break;
            case "b":
                var audio = new Audio('sound/b.mp3');
                audio.play();
                break;
            case "c":
                var audio = new Audio('sound/c.mp3');
                audio.play();
                break;
        }
    }


    function playAnimation(text){
       var selectButton = document.querySelector("."+text);
       selectButton.classList.add("anim");

       setTimeout(function(){
        selectButton.classList.remove("anim");
       }, 3000);
    }