const rangeForm = document.querySelector(".rangeForm");
const rangeInput = rangeForm.querySelector("input");
const PlayerForm = document.querySelector(".PlayerForm");
const PlayerInput = PlayerForm.querySelector("input");
const paintChose = document.querySelector(".paintChose");
const paintRes = document.querySelector(".paintResult");


function handlerRangeInput() {
    const rangeNum = rangeInput.value;
    PlayerInput.setAttribute("max", rangeNum);
}

rangeForm.addEventListener("input", handlerRangeInput);

function handlerSubmit(event) {
    event.preventDefault();
    const rangeNum = rangeInput.value;
    const playerNum = PlayerInput.value;
    const randomNum = Math.floor(Math.random() * rangeNum + 1);
    paintResult(playerNum, randomNum);
}

PlayerForm.addEventListener("submit", handlerSubmit);


function paintResult(playerNum, randomNum) {
    if (parseInt(playerNum) > randomNum) {
        paintChose.innerHTML = `You chose: ${playerNum}, the machine chose: ${randomNum}`
        paintRes.innerHTML = `You won!`
    } else if (parseInt(playerNum) < randomNum) {
        paintChose.innerHTML = `You chose: ${playerNum}, the machine chose: ${randomNum}`
        paintRes.innerHTML = `You lost!`
    } else if (parseInt(playerNum) === randomNum){
        paintChose.innerHTML = `You chose: ${playerNum}, the machine chose: ${randomNum}`
        paintRes.innerHTML = `oh.. Let's call it a tie. Please try again :)`
    }
}


