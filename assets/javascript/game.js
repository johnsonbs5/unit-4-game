$(document).ready(function() { //Here we are encompassing our main function 

    // We need to set our loop seen below.
      var winCount = 0; // counter for game wins
      $("#winScore").text("Wins: " + winCount);
      var lossCount = 0; // counter for game losses
      $("#lossScore").text("Losses: " + lossCount);
      var userScore = 0; // counter for user score
      var gameScore = Math.floor(Math.random() * 102) + 19; // Here we are generating a random number between 19 - 120
      var crystalOne = Math.floor(Math.random() * 12) + 1; // Here we are creating crystal value 1 between 1-12
      var crystalTwo = Math.floor(Math.random() * 12) + 1; // Here we are creating crystal value 2 between 1-12
      var crystalThree = Math.floor(Math.random() * 12) + 1; // Here we are creating crystal value 3 between 1-12
      var crystalFour = Math.floor(Math.random() * 12) + 1; // Here we are creating crystal value 4 between 1-12
      $("#gameScore").text("Game Score: " + gameScore);
      $("#userScore").text("User Score: " + userScore);
      console.log(gameScore);
      console.log(crystalOne);
      console.log(crystalTwo);
      console.log(crystalThree);
      console.log(crystalFour);
  

    function resetGame() {  //The code below will reset the value of the game
      userScore = 0;
      gameScore = Math.floor(Math.random() * 102) + 19; // creates game score, a random number between 19-120
      crystalOne = Math.floor(Math.random() * 12) + 1; // creates crystal 1 value, a random number between 1-12
      crystalTwo = Math.floor(Math.random() * 12) + 1; // creates crystal 2 value, a random number between 1-12
      crystalThree = Math.floor(Math.random() * 12) + 1; // creates crystal 3 value, a random number between 1-12
      crystalFour = Math.floor(Math.random() * 12) + 1; // creates crystal 4 value, a random number between 1-12
      $("#gameScore").text("Game Score: " + gameScore);
      $("#userScore").text("User Score: " + userScore);
      console.log(gameScore);
      console.log(crystalOne);
      console.log(crystalTwo);
      console.log(crystalThree);
      console.log(crystalFour);
    }
  
    //The code below creates a function for our game win
    function winGame() {
      alert("You are the Chosen One Neo... Play again!");
      winCount = winCount + 1;
      $("#winScore").text("Wins: " + winCount);
      resetGame();
    }
  
    //The code below creates a function for our game loss
    function loseGame() {
      alert("You lose Neo.....Do it again!");
      lossCount = lossCount + 1;
      $("#lossScore").text("Losses: " + lossCount);
      resetGame();
    }
  
    //on click function for crystalOne
    $("#crystal1").click(function() {
      userScore = userScore + crystalOne; // This will add value to our score
      console.log("User Score: " + userScore);
      $("#userScore").text("User Score: " + userScore);
        if (userScore === gameScore) {
          winGame();
        } else if (userScore > gameScore) {
          loseGame();
        }
    });
  
    //on click function for crystalTwo
    $("#crystal2").click(function() {
      userScore = userScore + crystalTwo; // adds value of crystalTwo to userScore
      console.log("User Score: " + userScore);
        $("#userScore").text("User Score: " + userScore);
        if (userScore === gameScore) {
          winGame();
        } else if (userScore > gameScore) {
          loseGame();
        }
    });
  
    //on click function for crystalThree
    $("#crystal3").click(function() {
      userScore = userScore + crystalThree; // This ads the value of the user score for crystal 3
      console.log("User Score: " + userScore);
        $("#userScore").text("User Score: " + userScore);
        if (userScore === gameScore) {
          winGame();
        } else if (userScore > gameScore) {
          loseGame();
        }
    });
  
    //on click function for crystalFour
    $("#crystal4").click(function() {
      userScore = userScore + crystalFour; // adds value of crystalFour to userScore
      console.log("User Score: " + userScore);
      $("#userScore").text("User Score: " + userScore);
        if (userScore === gameScore) {
          winGame();
        } else if (userScore > gameScore) {
          loseGame();
        }
    });
  
  });