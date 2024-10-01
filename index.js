// Game logic
const maxAttempts = 5;
let randomNumber;
let attemptsLeft;

// Function to start the game
function startGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1; // Random number between 1-100
    attemptsLeft = maxAttempts;
    
    // Reset UI
    document.getElementById('resultMessage').textContent = '';
    document.getElementById('attemptsLeft').textContent = `Attempts left: ${attemptsLeft}`;

    // Start the guessing process
    guessNumber();
}

// Function to handle the user's guess
function guessNumber() {
    if (attemptsLeft > 0) {
        // Prompt user to guess a number
        const userGuess = parseInt(window.prompt('Enter your guess (1-100):'), 10);
        
        // Validate the guess
        if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
            alert('Please enter a valid number between 1 and 100.');
            guessNumber(); // Retry if invalid
            return;
        }

        // Decrease the number of attempts
        attemptsLeft--;
        document.getElementById('attemptsLeft').textContent = `Attempts left: ${attemptsLeft}`;

        // Give feedback based on the guess
        if (userGuess === randomNumber) {
            document.getElementById('resultMessage').textContent = 'Congratulations! You guessed the correct number!';
        } else if (userGuess < randomNumber) {
            document.getElementById('resultMessage').textContent = 'Too low! Try again.';
            guessAgain();
        } else {
            document.getElementById('resultMessage').textContent = 'Too high! Try again.';
            guessAgain();
        }
    } else {
        document.getElementById('resultMessage').textContent = `Sorry, you've run out of attempts. The correct number was ${randomNumber}.`;
    }
}

// Function to give another chance to the user
function guessAgain() {
    if (attemptsLeft > 0) {
        guessNumber();
    }
}

// Add event listener to start the game when the button is clicked
document.getElementById('startGameBtn').addEventListener('click', startGame);
