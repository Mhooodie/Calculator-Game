// CALCULATOR PROGRAM

const display = document.getElementById("display")
const bg = document.getElementById("background-history");
let hintStatus = false;
let solvedI = false;
let solvedII = false;
let solvedIII = false;

function closeRulesPopup() {
    document.getElementById("rulesPopup").style.display = "none";
}

window.onload = function() {
    document.getElementById("rulesPopup").style.display = "flex";
}

function appendToDisplay(input){
    const lastChar = display.value.slice(-1);
    const operators = ['+', '-', '*', '/', '.'];

    if (operators.includes(input) && operators.includes(lastChar)){
        return;
    }

    if (display.value == "Error" || hintStatus == true){
        display.value = "";
        hintStatus = false;
    }

    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate() {
    try {
        const result = eval(display.value);
        display.value = result;

        const bg = document.getElementById("background-history");
        bg.textContent += result;

    } catch (error) {
        display.value = "Error";
    }
    if(display.value == '10') {
        document.getElementById("achievementI").style.background = "green";
        solvedI = true;
    }
    if(display.value == '67') {
        document.getElementById("achievementII").style.background = "green";
        solvedII = true;
    }
    if(display.value == '21') {
        document.getElementById("achievementIII").style.background = "green";
        solvedIII = true;
    }
    if (solvedI && solvedII && solvedIII) {
        showWinPopup();
        launchConfetti();
    }
}

function unlockAchievement(input) {
    if(input == "I"){
        display.value = "Messi";
        hintStatus = true;
    } else if(input == "II"){
        display.value = "Brainrot";
        hintStatus = true;
    } else if(input == "III"){
        display.value = "9+10=?";
        hintStatus = true;
    } else {
        display.value = "Error";
        hintStatus = false;
    }
}

function showWinPopup() {
    document.getElementById("winPopup").style.display = "flex";
}

function closeWinPopup() {
    document.getElementById("winPopup").style.display = "none";
}

function launchConfetti() {
    var duration = 3000;
    var end = Date.now() + duration;

    (function frame() {
        confetti({
            particleCount: 7,
            angle: 60,
            spread: 55,
            origin: { x: 0 }
        });
        confetti({
            particleCount: 7,
            angle: 120,
            spread: 55,
            origin: { x: 1 }
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    })();
}