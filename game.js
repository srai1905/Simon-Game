var gamepattern =  [];

var level = 0 
var userClickedPattern =[];

function nextsequence(){
    userClickedPattern = [];
    var number = Math.floor(Math.random()*4)
    
    var buttoncolors = ["red","blue","green","yellow"];

    var random_chosen_color = buttoncolors[number];

    console.log(random_chosen_color);

    gamepattern.push(random_chosen_color)

    $("#" + random_chosen_color).fadeIn(100).fadeOut(100).fadeIn(100);
    playsound(random_chosen_color);
    level = level +1;    
    $("h1").text("Level " + level);
}

$(".btn").click( function(){
    
   var userChosenColour = $(this).attr('id')
   userClickedPattern.push(userChosenColour);
   playsound(userChosenColour);
   animatePress(userChosenColour);
   checkAnswer(userClickedPattern.length-1)
   
});

function playsound(chosencolor)
{
    var audio = new Audio("sounds/" + chosencolor + ".mp3");
    audio.play();
    
}
function animatePress(chosencolor)
{
    $("#" +  chosencolor).addClass("pressed");
    setTimeout(function(){ 
        $("#" +  chosencolor).removeClass("pressed");
    },100)
}
$(document).keydown(function(event){
    

    nextsequence();
})

function checkAnswer(currentLevel) {

    
    if (gamepattern[currentLevel] === userClickedPattern[currentLevel]) {

      console.log("success");

      
      if (userClickedPattern.length === gamepattern.length){

        
        setTimeout(function () {
          nextsequence();
        }, 1000);

      }

    } else {

      console.log("wrong");
      var audio = new Audio("sounds/wrong.mp3")
      audio.play();
      $(".bdy").addClass("game-over")
      setTimeout(function(){ 
        $(".bdy").removeClass("game-over");
         },200)
      startover();   

    }

} 

function startover()
{   
    $("h1").text("Press A to start Again");
    level =0;
    gamepattern = [];
}


