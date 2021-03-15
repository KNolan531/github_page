/* Simon Game Javascript
* by: Kevin Nolan
*
*  A simple simon game created using JQuery as an assignment for
*  Internet Programming course at KSU. Sounds and css designs were provided
*  and functions were created to manipulate objects using given criteria of
*  the Simon matching game. 


 */

var buttonColours = ["red","blue","green","yellow"];

var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;


//event handler used to start game on keypress
$(document).keypress( function() {

    if(started != true) {
        nextSequence();
        $("h1").text("Level 0");
        }
    started = true;

})

//event handler when squares are pressed to activate game functions
$(".btn").click(function() {
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length - 1);

})


//function uses random number generator to create a pattern for game
function nextSequence()  {
    userClickedPattern = [];
    $("h1").text("Level " + level++);
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);

}

//a simple function just used for playing sounds
function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();

}

//function creates flash when square is pushed
function animatePress(currentColour) {

    $("#" + currentColour).addClass("pressed");

    setTimeout( function() {
        $("#" + currentColour).removeClass("pressed");
    }, 100);

}

//function to check the most recent click value by user against game value
function checkAnswer(currentLevel) {

    if(userClickedPattern[currentLevel] === gamePattern[currentLevel] ) {
        console.log("success");

        if (userClickedPattern.length === gamePattern.length){
        setTimeout(function () {
                    nextSequence();
                }, 1000);
      }

    }
    else {
        playSound("wrong");

        $("body").addClass("game-over");
        setTimeout( function() {
            $("body").removeClass("game-over");
        }, 200);

        $("h1").text("You lost! Press a key to restart!!! ");
        startOver();
    }
}

//Restarting the game, resettting variables.
function startOver() {
    level = 0;
    started = false;
    gamePattern = [];

}