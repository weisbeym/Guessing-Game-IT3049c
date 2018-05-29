"use strict";

const startScreen = document.getElementById("startScreen");
const gameScreen = document.getElementById("gameScreen");
const startButton = document.getElementById("startButton");

const guessForm = document.getElementById("guessForm");
const higher = document.getElementById("higher").value;
const lower = document.getElementById("lower").value;
const same = document.getElementById("same").value;

let game;

const resetButton= document.getElementById("resetButton");

function generateRandomNumber() {
    return Math.floor(Math.random() * 10);
}

class HigherLowerGuessingGame {
    constructor() {
        this.initialNumber = generateRandomNumber();
        this.secondNumber = generateRandomNumber();
        this.numberOfGuesses = 0;
        document.getElementById("initialNumberHolder").innerHTML = `Starting number: ${ this.initialNumber }`;
    }

    compareValues() {
        this.numberOfGuesses += 1;

        if(this.initialNumber === this.secondNumber) {
            return "same";
        } else if(this.initialNumber < this.secondNumber) {
            return "higher";
        } else if(this.initialNumber > this.secondNumber) {
            return "lower";
        }
    }

}

startButton.addEventListener("click", function (startButtonClickEvent) {

    startButtonClickEvent.preventDefault();

    console.log("User clicked the start button!");

    startScreen.classList.add("hidden");

    gameScreen.classList.remove("hidden");

    game = new HigherLowerGuessingGame();

});

guessForm.addEventListener("submit", function (gameFormSubmitEvent) {
    gameFormSubmitEvent.preventDefault();
    let userInput;

    if(guessForm.value = "higher") {
        userInput = "higher";
    } else if(guessForm.value = "lower") {
        userInput = "lower";
    } else if(guessForm.value = "same") {
        userInput = "same";
    }

    if (userInput !== "higher" || userInput !== "lower" || userInput !== "same") {
        return alert("You can't guess without choosing a value! Try again after choosing one.");
    }

    const answer = game.compareValues();

    if(answer !== userInput) {
        return alert("Incorrect! Please try again.");
    }

    alert(`You won in ${  game.numberOfGuesses } guesses!`);

});

resetButton.addEventListener("click", function (resetButtonClickEvent) {
    resetButtonClickEvent.preventDefault();

    game = new HigherLowerGuessingGame();
});