const buttonElements = document.querySelectorAll('button');
let row = 1;
let letter = 1;
const wordsOfGame = 'think';
const wordElements = document.querySelectorAll('.w-row');
let gameOver = false;
let guessCorrect = false;

/*----------------------------------------------------------------------------------------------*/

buttonElements.forEach((element) => {
  element.addEventListener('click', function() {
    keypress(element.attributes["data-key"].value)
  });
});  

/*---------------------------------------------------------------------------------------------*/

function populateWord(key){
  if(letter < 6){
  wordElements[row -1].querySelectorAll('.w')[letter -1].innerText = key;
  letter += 1;
  }
}

/*---------------------------------------------------------------------------------------------*/

function checkWord(){
  const letterElements = wordElements[row -1].querySelectorAll('.w');
  let numOfCorrectAlphabets = 0;

  letterElements.forEach((element, index) => {
    const indexNoOfWordle = wordsOfGame.toLowerCase().indexOf(element.innerText.toLowerCase());
    
    if(indexNoOfWordle === index){
      numOfCorrectAlphabets += 1;
      element.classList.add('w-green');
    }
    else if (indexNoOfWordle > 0){
      element.classList.add('w-yellow');
    }
    else{
      element.classList.add('w-grey');
    }
  });

  if(numOfCorrectAlphabets === 5){
    gameOver = true;
    guessCorrect = true;
    alert('Congratulations You Are Correct......!');
  }
  else if(row === 6){
    gameOver = true;
    alert('Better Luck Next Time.....! the word was:  ' + wordsOfGame);
  }
  else{
    alert('ohh you are wrong !  Try on Next Line.......!')
  }
}

/*---------------------------------------------------------------------------------------------*/

function enterword() {
  if(letter < 6){
    alert('complete the boxex!');
  }
  else{
    checkWord();
    row += 1;
    letter = 1;
  }
}

/*---------------------------------------------------------------------------------------------*/

function deleteword(){
  const letterElements = wordElements[row - 1].querySelectorAll('.w');
  for (let index = letterElements.length - 1; index >= 0; index--){
    const element = letterElements[index];
    if(element.innerText !== ''){
      element.innerText = '';
      letter -=1;
      break;
    }
  }
}


/*---------------------------------------------------------------------------------------------*/

function keypress(key){
  if(!gameOver){
    if (key.toLowerCase() === 'enter'){
      enterword()
    }
    else if (key.toLowerCase() === 'delete'){
      deleteword()
    }
    else{
      populateWord(key);
    }
  }
  else{
    alert('Game Over!! please refresh the page and Play again');
  }
}