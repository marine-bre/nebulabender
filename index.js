
//needed to not have confetti
confetti.stop();

// need to choose the new number 
var number = Math.floor(Math.random() * 100);


//need to access the value that the user entered and attribute it to a var
let guess = document.getElementById('guess');
let submit = document.getElementById('submit');
let message = document.getElementById('nb-of-guesses');
let hint = document.getElementById('hint');
let restart = document.getElementById('restart');
let game = document.getElementById('game');

let tries = 7
var userGuess = "";

// event listener for the submit button 

submit.addEventListener('click', (event) => {
    event.preventDefault();
    userGuess = guess.value;
    if (userGuess >= 1 && userGuess <= 100) {
        if (userGuess > number) {
            hint.textContent = "Lower!";
            tries -= 1;
            message.textContent = "You only have " + tries + " guesses left!";
            if (tries == 0) {
                losing();
            }
        }
        else if (userGuess < number) {
            hint.textContent = "Higher!";
            tries -= 1;
            message.textContent = "You only have " + tries + " guesses left!";
            if (tries == 0) {
                losing();
            }
        }
        else if (userGuess == number) {
            won();
        }
    }
    else {
        alert("Please enter a number between 1 and 100")
    }
    guess.value = "";
})


// loosing and winning functions

var losing = () => {
    message.textContent = "You lost :(";
    hint.textContent = "Press Restart to try again";
    guess.classList.add('hidden');
    submit.classList.add('hidden');
    game.classList.add('lost');
};

var won = () =>{
    message.textContent = "You wonnnnnnnn!!!!";
    hint.textContent = "Press Restart to play again";
    guess.classList.add('hidden');
    submit.classList.add('hidden');
    confetti.start(); 
}

//restart the game and reinitialise the messages

restart.addEventListener('click', () => {
    confetti.stop();
    userGuess = "";
    hint.textContent = "";
    message.textContent = "Take your first guess!";
    tries = 10;
    number = Math.floor(Math.random() * 100);
    guess.value="";
    guess.classList.remove('hidden');
    submit.classList.remove('hidden');
    game.classList.remove('lost');
});
