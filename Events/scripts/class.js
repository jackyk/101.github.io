
      // Your JavaScript goes here
      var randomNumber = Math.floor(Math.random() * 100) + 1;
      var guesses = document.querySelector('.guesses');
      var lastResult = document.querySelector('.lastResult');
      var lowOrHi = document.querySelector('.lowOrHi');

      var guessSubmit = document.querySelector('.guessSubmit');
      var guessField = document.querySelector('.guessField');

      var guessCount = 1;
      var resetButton;

      function checkGuess() {
// checks to ensure that users input is a number
        var userGuess = Number(guessField.value);
        if (guessCount === 1) {
          guesses.textContent = 'Previous guesses: ';
        }
// Sometimes you do not need an else statement
        guesses.textContent += userGuess + ' ';
// appends your answer to "Previous guesses"

        if (userGuess === randomNumber) {
          lastResult.textContent = 'Congratulations! You got it right!';
          lastResult.style.backgroundColor = 'green';
          lowOrHi.textContent = '';
// set this to an empty string coz you got it right
        setGameOver();
        }

        else if (guessCount === 10) {
          lastResult.textContent = '!!!GAME OVER!!!';
          setGameOver();
        }
        else {
// This else checks all the other things including when the form is empty
          lastResult.textContent = 'Wrong!';
          lastResult.style.backgroundColor = 'red';
          if (userGuess < randomNumber) {
            lowOrHi.textContent = 'Last guess was too low!';
            }
          else if (userGuess > randomNumber) {
            lowOrHi.textContent = 'Last guess was too high!';
          }
        }

        guessCount++;
        guessField.value = '';
// clean up the form value to an empty string
        guessField.focus();
// Ensures that user has a clean space to write the next guess
  }

// checkGuess();
guessSubmit.addEventListener('click', checkGuess);
// checkGuess();
// if check has an argument how do you call it(/passing it in the function)

function setGameOver() {
//Disables tje field
guessField.disabled = true;
// Disables the button
guessSubmit.disabled = true;
resetButton = document.createElement('button');
resetButton.textContent = 'Start new game';
// In the body element add something else into ti. Add it to the last element
document.body.appendChild(resetButton);
resetButton.addEventListener('click', resetGame);
}
function resetGame() {
guessCount = 1;

var resetParas = document.querySelectorAll('.resultParas p');
for (var i = 0 ; i < resetParas.length ; i++) {
resetParas[i].textContent = '';
}

resetButton.parentNode.removeChild(resetButton);

guessField.disabled = false;
guessSubmit.disabled = false;
guessField.value = '';
guessField.focus();

lastResult.style.backgroundColor = 'white';

randomNumber = Math.floor(Math.random() * 100) + 1;
}
