//  JavaScript document 

// create the game score 
var myScore ;

// Setup and change the game score 
init(10000);
changeScore(150);
changeScore(-50);
changeScore(750);
changeScore(-120);

//function to initialize the game score in the game  
function init(newScore){

    console.log("Setting the score to " + newScore);
    myScore = newScore;
    displayScore();
}

// function to change the score of the game 
function changeScore(scoreDelta) {
    console.log("Changing the score by " + scoreDelta);
    myScore = myScore+ scoreDelta;
    displayScore();
    
}

function displayScore() {
   console.log('Player score: '+ myScore);  
}


