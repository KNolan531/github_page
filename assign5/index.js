//function to go through and check different values given and their output
function checkValue(value) {
    switch(value){
                case "w":
                    var tom1 = new Audio("sounds/tom-1.mp3");
                    tom1.play();
                    break;

                case "a":
                    var tom2 = new Audio("sounds/tom-2.mp3");
                    tom2.play();
                    break;

                case "s":
                    var tom3 = new Audio("sounds/tom-3.mp3");
                    tom3.play();
                    break;

                case "d":
                    var tom4 = new Audio("sounds/tom-4.mp3");
                    tom4.play();
                    break;

                 case "j":
                    var snare = new Audio("sounds/snare.mp3");
                    snare.play();
                    break;

                  case "k":
                    var crash = new Audio("sounds/crash.mp3");
                    crash.play();
                    break;

                   case "l":
                    var kick = new Audio("sounds/kick-bass.mp3");
                    kick.play();
                    break;

                   default:
                       console.log(buttonInnerHTML);

            } //end of switch

}

//function to give each letter a shadow after click/key press
function buttonAnimation(currentKey) {
    var active = document.querySelector("." + currentKey);
    active.classList.add("pressed");

    setTimeout(function() {
        active.classList.remove("pressed");}, 100);

}

//Click Event
var numOfDrums = document.querySelectorAll(".drum").length;
for(var i =0; i < numOfDrums;i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function(){
    var buttonInnerHTML = this.innerHTML;

    checkValue(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);

    }); //end of function
} //end of For loop

//Keyboard Event
document.addEventListener("keydown",function(event) {
    checkValue(event.key);
    buttonAnimation(event.key);


});
