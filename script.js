// JavaScript Document

//Define a variable with integer value 

  //var myNumber =5;

//Send the value of the variable to the output console
//console.log(myNumber);
//console.log(typeof myNumber); 

//create the game score
var myScore ;

//set up and chenge the game score 
init();
changeScore();

//function to initalize the game score in the game
function init()
{
myScore = 1000;
}

// function to change the score of the game
function changeScore()
{
    myScore = myScore +100;
    console.log("Players score: " + myScore);
}