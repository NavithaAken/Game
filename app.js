let randomNumber = Math.floor(Math.random() * 10) + 1;
function makeGuess(){
    let userGuess = document.getElementById("txtInput").value;
    let display = document.getElementById("txtDisplay");

    if (userGuess == randomNumber) {
        display.innerHTML = "Congratulations! You guessed the right number.";
        display.className = "alert alert-success";
    } else if (userGuess < randomNumber) {
        display.innerHTML = "Too low! Try again.";
        display.className = "alert alert-warning";
    } else {
        display.innerHTML = "Too high! Try again.";
        display.className = "alert alert-warning";
    }
}

