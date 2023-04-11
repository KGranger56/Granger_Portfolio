const coinArray=['heads', 'tails'];
let playerChoices = document.getElementsByClassName('playerChoices');
let score = document.getElementsByClassName('score');
let h3 = document.getElementsByTagName('h3');
let playerScore = document.createTextNode('0');
let computerScore = document.createTextNode('0');

playerScore = Number(playerScore.data);
computerScore = Number(computerScore.data);



function personPick(){
  const randomChoice= coinArray[Math.floor(Math.random()* coinArray.length)];
  let btnHeads = document.createElement('BUTTON');
  let btnTails = document.createElement('BUTTON');
  let pickHeads = document.createTextNode('Heads');
  let pickTails = document.createTextNode('Tails');

  console.log(randomChoice);

  btnHeads.classList.add('btnHeads');
  btnHeads.appendChild(pickHeads);
  btnTails.classList.add('btnTails');
  btnTails.appendChild(pickTails);

  playerChoices[0].appendChild(btnHeads);
  playerChoices[0].appendChild(btnTails);


  btnHeads.addEventListener('click', function(){
    if(randomChoice == 'heads'){
      playerChoices[0].removeChild(btnHeads);
      playerChoices[0].removeChild(btnTails);
      playerScore = playerScore+1
      score[0].innerHTML = `Player Score: ${playerScore} Computer Score: ${computerScore}`;
      return playerScore
    }

    else {
      playerChoices[0].removeChild(btnHeads);
      playerChoices[0].removeChild(btnTails);
      computerScore = computerScore+1
      score[0].innerHTML = `Player Score: ${playerScore} Computer Score: ${computerScore}`;
      return playerScore
    }
  });
  
  btnTails.addEventListener('click', function() {
    if(randomChoice == 'tails'){
      playerChoices[0].removeChild(btnHeads);
      playerChoices[0].removeChild(btnTails);
      playerScore = playerScore+1
      score[0].innerHTML = `Player Score: ${playerScore} Computer Score: ${computerScore}`;
      return playerScore
      }

      else {
        playerChoices[0].removeChild(btnHeads);
        playerChoices[0].removeChild(btnTails);
        computerScore = computerScore+1
        score[0].innerHTML = `Player Score: ${playerScore} Computer Score: ${computerScore}`;
        return playerScore
      }
  })
}
