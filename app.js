let min = 1, max = 10; 

let wNum = Math.floor(Math.random()*(max-min+1)+min);

let guesses = 3;

const gameUI = document.getElementById("game"),
    minNum = document.querySelector(".min-num"),
    maxNum = document.querySelector(".max-num"), 
    guessBtn = document.querySelector("#guess-num"),
    guessInput = document.querySelector("#guess-input"),
    message = document.querySelector(".message");



minNum.textContent = min;
maxNum.textContent = max;

gameUI.addEventListener('mousedown', restartGame)

guessBtn.addEventListener('click', gameEvent)

function restartGame(e){
    if(e.target.className === 'restart'){
        window.location.reload();
    }
}

function gameEvent(){
    let guess = parseInt(guessInput.value);
    if(guess == NaN || guess < min || guess > max){
        showMessage(`Please choose a number between ${min} and ${max}. ${guess} is not valid`, 'red');
    }
    else if(guess == wNum){

        gameState(true, `Your guess, ${guess}, was right. YOU WIN`, 'blue');
    }
    else {
        guesses -= 1;

        if(guesses == 0){
        gameState(false,`Game Over. The correct guess was ${wNum}`);
        

        } else {
            guessInput.style.borderColor = 'red'
            showMessage(`Sorry, bad guess. ${guesses} guesses left.`, 'red');
            
        }
    }
}

function gameState(won, msg){
    let color;
    won == true? color = 'green': color ='red';

    guessInput.disabled = true;
    guessInput.style.borderColor = color;
    
    showMessage(msg, color);
    
    guessBtn.value = 'Play Again';
    guessBtn.className += 'restart'
    
}

function showMessage(msg, color){
    message.style.color = color;
    message.textContent = msg;
}

function default_state(){
    guessInput.style.borderColor = 'black';
    message.textContent = ''; 
}
