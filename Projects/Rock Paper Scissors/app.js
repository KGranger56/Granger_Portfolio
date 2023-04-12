const choiceArray=['rock', 'paper', 'scissors'];
let playerChoices = document.getElementsByClassName('playerChoices');
let computerChoice = document.getElementsByClassName('computerChoice');
let score = document.getElementsByClassName('score');
let h3 = document.getElementsByTagName('h3');
let playerScore = document.createTextNode('0');
let computerScore = document.createTextNode('0');

playerScore = Number(playerScore.data);
computerScore = Number(computerScore.data);

function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
};
  
  function playerPick(){
    if(playerScore == 3 || computerScore == 3) {
      alert(`Game Over! Player Score: ${playerScore} Computer Score: ${computerScore}.`)
      window.location.reload();
      }
    else {
      const randomChoice= choiceArray[Math.floor(Math.random()* choiceArray.length)];
      let btnRock = document.createElement('BUTTON');
      let btnPaper = document.createElement('BUTTON');
      let btnScissors = document.createElement('BUTTON');
      let pickRock = document.createTextNode('🪨');
      let pickPaper = document.createTextNode('📄');
      let pickScissors = document.createTextNode('✂️');

      btnRock.classList.add('btnRock');
      btnRock.appendChild(pickRock);
      btnPaper.classList.add('btnPaper');
      btnPaper.appendChild(pickPaper);
      btnScissors.classList.add('btnScissors');
      btnScissors.appendChild(pickScissors);

      playerChoices[0].appendChild(btnRock);
      playerChoices[0].appendChild(btnPaper);
      playerChoices[0].appendChild(btnScissors);


      //Click on Rock, remove Paper Scissors
      btnRock.addEventListener('click', function() {
        playerChoices[0].removeChild(btnPaper);
        playerChoices[0].removeChild(btnScissors);
        computerPicks();

        //if computer chose scissors
        if(computerChoice[0].children[0].className === 'btnScissors'){
          btnScissors.style.backgroundColor='hwb(0 16% 30%)';
          playerScore = playerScore+1;
          score[0].innerHTML=`Player Score: ${playerScore} Computer Score: ${computerScore}`;
          setTimeout(() => {  
            playerChoices[0].removeChild(btnRock),
            computerChoice[0].removeChild(btnScissors) }, 1500);
        };

        //if computer chose rock
        if(computerChoice[0].children[0].className === 'btnRock'){
          btnRock.style.backgroundColor='hwb(0 16% 30%)';
          score[0].innerHTML=`Player Score: ${playerScore} Computer Score: ${computerScore}`;
          setTimeout(() => {  
            computerChoice[0].removeChild(btnRock) }, 1500);
        };

        //if computer chose paper
        if(computerChoice[0].children[0].className === 'btnPaper'){
          btnRock.style.backgroundColor='hwb(0 16% 30%)';;
          computerScore = computerScore+1
          score[0].innerHTML=`Player Score: ${playerScore} Computer Score: ${computerScore}`;
          setTimeout(() => {  
            playerChoices[0].removeChild(btnRock),
            computerChoice[0].removeChild(btnPaper) }, 1500);
        };
      })


      //Click on Paper, remove Rock Scissors
      btnPaper.addEventListener('click', function(){
        playerChoices[0].removeChild(btnRock);
        playerChoices[0].removeChild(btnScissors);
        computerPicks();

        //if computer chose scissors
        if(computerChoice[0].children[0].className === 'btnScissors'){
          btnScissors.style.backgroundColor='hwb(0 16% 30%)'
          setTimeout(function () {
            playerChoices[0].removeChild(btnPaper);
            computerChoice[0].removeChild(btnScissors);
            computerScore = computerScore+1;
            score[0].innerHTML=`Player Score: ${playerScore} Computer Score: ${computerScore}`;
          }, 1500);
        }

          //if computer chose paper
          else if(computerChoice[0].children[0].className === 'btnPaper'){
            btnPaper.style.backgroundColor='hwb(0 16% 30%)'
            score[0].innerHTML=`Player Score: ${playerScore} Computer Score: ${computerScore}`;
          setTimeout(() => {  
            computerChoice[0].removeChild(btnPaper) }, 1500);
          }


          //if computer chose rock
          else if(computerChoice[0].children[0].className === 'btnRock'){
            btnRock.style.backgroundColor='hwb(0 16% 30%)'
            playerScore = playerScore+1
            score[0].innerHTML=`Player Score: ${playerScore} Computer Score: ${computerScore}`;
            setTimeout(function () {
              computerChoice[0].removeChild(btnRock);
              playerChoices[0].removeChild(btnPaper);
            }, 1500);
          };

      })


      //Click on Scissors, remove Rock Paper
      btnScissors.addEventListener('click', function(){
        playerChoices[0].removeChild(btnRock);
        playerChoices[0].removeChild(btnPaper);
        computerPicks();

        //if computer chose paper
        if(computerChoice[0].children[0].className === 'btnPaper'){
          btnPaper.style.backgroundColor='hwb(0 16% 30%)'
          playerScore = playerScore+1;
          score[0].innerHTML=`Player Score: ${playerScore} Computer Score: ${computerScore}`;
          setTimeout(function () {
            computerChoice[0].removeChild(btnPaper);
            playerChoices[0].removeChild(btnScissors);
          }, 1500);
        };

        //if computer chose scissors
        if(computerChoice[0].children[0].className === 'btnScissors'){
          btnScissors.style.backgroundColor='hwb(0 16% 30%)'
          score[0].innerHTML=`Player Score: ${playerScore} Computer Score: ${computerScore}`;
          setTimeout(function () {
            computerChoice[0].removeChild(btnScissors);
          }, 1500);
        };

        //if computer chose rock
        if(computerChoice[0].children[0].className === 'btnRock'){
          btnScissors.style.backgroundColor='hwb(0 16% 30%)'
          computerScore = computerScore+1
          score[0].innerHTML=`Player Score: ${playerScore} Computer Score: ${computerScore}`;
          setTimeout(function () {
            playerChoices[0].removeChild(btnScissors);
            computerChoice[0].removeChild(btnRock);
          }, 1500);
        };

      })

      function computerPicks(){
        if(randomChoice === 'rock'){
          computerChoice[0].appendChild(btnRock);
        }
        else if (randomChoice === 'paper'){
          computerChoice[0].appendChild(btnPaper);
        }
        else if (randomChoice === 'scissors'){
          computerChoice[0].appendChild(btnScissors);
        }
        return computerChoice;
      }
    }
  }
  