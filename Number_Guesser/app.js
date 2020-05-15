/*
GAME FUNCTION
- Player must guess a number between the min and the max
- player gets a certain amount of guesses 
- Notify player of guesses remaining 
- Notify the player of the correct answer if loose
- Let player chose to play again 
*/

// Game values 
let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;


    // UI elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num')  ,
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message =  document.querySelector('.message');

// Assign UI min and max 
minNum.textContent = min;
maxNum.textContent = max;

// Play Again event listener 
game.addEventListener('mousedown', function(e){
    if(e.target.className === 'play-again'){
        window.location.reload();
    }
});

// Listen for Guess 
guessBtn.addEventListener('click', function() {
    let guess = parseInt(guessInput.value);
    // Validate 
    if(isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    }

    // Check if won 
    if(guess === winningNum){
       // Game over - the player won 
       gameOver(true, `${winningNum} is correct, YOU WIN!`)
    } else {
        // Wrong Number 
        guessesLeft -= 1;

        if(guessesLeft === 0){
            // Game Over - Lost 

            gameOver(false, `Game over you lost. The correct number was ${winningNum}`, 'red');
        } else {
            // Game continues - answer wrong

            // Change border color 
            guessInput.style.borderColor = 'red';

            // Clear Input 
            guessInput.value = '';

            // Tell user its the wrong number 
            setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red');
        }
    }
});



function gameOver(won, msg){
    let color; 
    won === true ? color = 'green' : color === 'red';

    // Disable the input 
    guessInput.disabled = true;
    // Change border color 
    guessInput.style.borderColor = 'color';
    // Set text color 
    message.style.color = color;
    // Let the user know that they won 
    setMessage(msg);

    // Play Again
    guessBtn.value = 'Play Again';
    guessBtn.className += 'play-again';
}

// Get Winning Num 
function getRandomNum(min, max){
    console.log(Math.floor(Math.random()*(max-min+1)+min));
}


// Set message 
function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}