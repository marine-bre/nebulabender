let boxess = document.querySelectorAll('.box');
let boxes = Array.from(boxess); // need to create an array from the NodeList to be able to apply certain methods
let restart = document.getElementById('restart');
let disableBoard = false; //needed to make sure the player does not click during the computer's turn.
let victory = document.getElementById('victory');
let defeat = document.getElementById('defeat');
let tie = document.getElementById('tie');
let pW = 0;
let cW = 0;
let turns = 0;

//event listeners for each cell and restart button

restart.addEventListener("click", () => {
    resetBoard()
}
)

boxes.forEach(box => box.addEventListener('click', cross));

//what plays out after the player has clicked on a cell
function cross() {
    if (disableBoard) {
        return
    };
    this.classList.add('chosen');
    this.removeEventListener('click', cross);    //player won't be able to click on this cell again
    disableBoard = true;                         //makes the board disabled while the computer is playing
    turns++;
    console.log(turns);
    if (DidPlayerWon() == true) {
        return
    };
    setTimeout(() => {
        compPlay();
        DidCompWon();
        disableBoard = false;
    }
        , 1000)
}

//how the computer chooses its next celland whether he should play at all if there's a tie
function compPlay() {
    if (boxes.every(function (element) {
        return element.classList.contains('comp-chosen') || element.classList.contains('chosen')
    })) {
        tieFunc();
        return;
    }

// function elsePlay() {
    let randBox;
    randBox = Math.floor(Math.random() * 9);
    while (boxes[randBox].classList.contains('chosen') || boxes[randBox].classList.contains('comp-chosen')) {
        randBox = Math.floor(Math.random() * 9);
    }
    boxes[randBox].classList.add('comp-chosen')
    boxes[randBox].removeEventListener('click', cross);
    turns++;
    console.log(turns);
    return;

}

//resetting all the classes and clicked boxes 
function resetBoard() {
    boxes.forEach(box => box.addEventListener('click', cross));
    boxes.forEach(box => box.classList.remove('chosen', 'comp-chosen'));
    disableBoard = false;
    victory.classList.add('hidden');
    victory.classList.remove('victory', 'ending');
    boxes.forEach(box => box.classList.remove('greyed-out'));
    defeat.classList.add('hidden');
    defeat.classList.remove('defeat', 'ending');
    tie.classList.add('hidden');
    tie.classList.remove('tie', 'ending');
    turns = 0;
}

//checking every turn if the player has a winning combo
function DidPlayerWon() {
    for (let n = 0; n < 7; n = n + 3) {
        if (boxes[n].classList.contains('chosen') && boxes[n + 1].classList.contains('chosen') && boxes[n + 2].classList.contains('chosen')) {
            playerVictory();
            return true;
        }
    }
    for (let m = 0; m < 3; m++) {
        if (boxes[m].classList.contains('chosen') && boxes[m + 3].classList.contains('chosen') && boxes[m + 6].classList.contains('chosen')) { playerVictory(); return true; }
    }
    if (boxes[4].classList.contains('chosen') && ((boxes[0].classList.contains('chosen') && boxes[8].classList.contains('chosen')) || (boxes[2].classList.contains('chosen') && boxes[6].classList.contains('chosen')))) { playerVictory(); return true; }
}

//checking every turn if the computer has a winning combo
function DidCompWon() {
    for (let n = 0; n < 7; n = n + 3) {
        if (boxes[n].classList.contains('comp-chosen') && boxes[n + 1].classList.contains('comp-chosen') && boxes[n + 2].classList.contains('comp-chosen')) {
            compVictory()
        }
    }
    for (let m = 0; m < 3; m++) {
        if (boxes[m].classList.contains('comp-chosen') && boxes[m + 3].classList.contains('comp-chosen') && boxes[m + 6].classList.contains('comp-chosen')) { compVictory() }
    }
    if (boxes[4].classList.contains('comp-chosen') && ((boxes[0].classList.contains('comp-chosen') && boxes[8].classList.contains('comp-chosen')) || (boxes[2].classList.contains('comp-chosen') && boxes[6].classList.contains('comp-chosen')))) { compVictory() }
}


//functions that determing the winning/losing animation
function playerVictory() {
    victory.classList.remove('hidden');
    victory.classList.add('victory', 'ending');
    boxes.forEach(box => box.classList.add('greyed-out'));
    pW++;
    document.getElementById('pW').textContent = "Player :" + pW;

}

function compVictory() {
    defeat.classList.remove('hidden');
    defeat.classList.add('defeat', 'ending');
    boxes.forEach(box => box.classList.add('greyed-out'));
    cW++;
    document.getElementById('cW').textContent = "Opponent :" + cW;
}

function tieFunc() {
    tie.classList.remove('hidden');
    tie.classList.add('tie', 'ending');
    boxes.forEach(box => box.classList.add('greyed-out'));
}
