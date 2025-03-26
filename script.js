//Random computer choice
function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3); 
    if (choice === 0) {
      return 'Rock';
    } else if (choice === 1) {
      return 'Paper';
    } else {
      return 'Scissor'; 
    }
  }

  //selecting each button used for scissor, paper and rock
  const scissor = document.querySelector('#scissor');
  const paper = document.querySelector('#paper');
  const rock = document.querySelector('#rock');  

  //For computer
  const box = document.querySelector('#box');
  const computer = document.querySelector('#computer');

  //Tracking Scores
  const computerResult = document.querySelector('#computerResult');
  const playerResult = document.querySelector('#playerResult');
  const totalScore = document.querySelector('#totalScore');

  //<Global Variables 
  let playerSelection = "";
  let computerSelection = "";
  let computerScore = 0;
  let playerScore = 0;



  //Reset button
  const reset = document.querySelector('#reset');

  clear = 0;


  scissor.addEventListener("click", function(){
    computerSelection = getComputerChoice();
    computer.textContent = "Computer: " + computerSelection;
    playerSelection = 'Scissor'; 

    if(computerSelection === playerSelection){
      box.textContent = "Result: Draw";
    } else if(computerSelection === "Paper" && playerSelection === "Scissor"){
      playerScore ++;
      playerResult.textContent = "PlayerScore: " + playerScore;
      box.textContent = "Result: Player Wins\n";
    } else {
      computerScore ++;
      computerResult.textContent = "Computer Score: " + computerScore;
      box.textContent = "Result: Computer Wins";
    }

    if(playerScore === 5){
    totalScore.textContent = "Player wins";
   } else if (computerScore === 5){
     totalScore.textContent = "Computer wins";
   } else {
    return "ERROR";
   }
  });


  paper.addEventListener("click", function(){
    computerSelection = getComputerChoice();
    computer.textContent = "Computer: " + computerSelection;
    playerSelection = 'Paper'; 

    if(computerSelection === playerSelection){
      box.textContent = "Result: Draw";
    } else if(computerSelection === "Rock" && playerSelection === "Paper"){
      playerScore ++;
      playerResult.textContent = "PlayerScore: " + playerScore;
      box.textContent = "Result: Player Wins\n";
    } else {
      computerScore ++;
      computerResult.textContent = "Computer Score: " + computerScore;
      box.textContent = "Result: Computer Wins";
    }

    if(playerScore === 5){
    totalScore.textContent = "Player wins";
   } else if (computerScore === 5){
     totalScore.textContent = "Computer wins";
   } else {
    return "ERROR";
   }
  });

  rock.addEventListener("click", function(){
    computerSelection = getComputerChoice();
    computer.textContent = "Computer: " + computerSelection;
    playerSelection = 'Rock'; 

    if(computerSelection === playerSelection){
      box.textContent = "Result: Draw";
    } else if(computerSelection === "Scissor" && playerSelection === "Rock"){
      playerScore ++;
      playerResult.textContent = "PlayerScore: " + playerScore;
      box.textContent = "Result: Player Wins\n";
    } else {
      computerScore ++;
      computerResult.textContent = "Computer Score: " + computerScore;
      box.textContent = "Result: Computer Wins";
    }

    if(playerScore === 5){
    totalScore.textContent = "Player wins";
   } else if (computerScore === 5){
     totalScore.textContent = "Computer wins";
   } else {
    return "ERROR";
   }
  });

  reset.addEventListener("click", function(){
    playerScore = 0;  // Reset the actual score variables
    computerScore = 0;
    
    totalScore.textContent = "Total Score: 0";
    computerResult.textContent = "Computer Score: 0";
    playerResult.textContent = "Player Score: 0";
    box.textContent = "Result: "; // Clear result box
    computer.textContent = "Computer: "; // Clear computer choice display
});

    /*
  function disableButtons() {
  scissor.disabled = true;
  paper.disabled = true;
  rock.disabled = true;
  }

  if (playerScore === 5 || computerScore === 5) {
  totalScore.textContent = (playerScore === 5) ? "Player wins!" : "Computer wins!";
  disableButtons();
  }
  */
