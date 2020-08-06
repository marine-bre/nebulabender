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
//

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
//need to make the AI smart here
function compPlay() {
    if (boxes.every(function (element) {
        return element.classList.contains('comp-chosen') || element.classList.contains('chosen')
    })) {
        tieFunc();
        return;
    }
//     //second turn situation
//     if (turns === 1) {
//         if (boxes[4].classList.contains('chosen')) {
//             let list = [0, 2, 6, 8];
//             let i = list[Math.floor(Math.random() * list.length)];
//             boxes[i].classList.add('comp-chosen');
//             turns++;
//             console.log(turns);
//             return;
//         }
//         else {
//             boxes[4].classList.add('comp-chosen');
//             turns++;
//             console.log(turns);
//             return;
//         }
//     }

//     if (turns === 3) {
//         if ((boxes[0].classList.contains('comp-chosen') && boxes[4].classList.contains('chosen') && boxes[8].classList.contains('chosen')) || (boxes[8].classList.contains('comp-chosen') && boxes[4].classList.contains('chosen') && boxes[0].classList.contains('chosen'))) {
//             let list = [2, 6];
//             let i = list[Math.floor(Math.random() * list.length)];
//             boxes[i].classList.add('comp-chosen');;
//             turns++;
//             console.log(turns);
//             return;
//         }
//         if ((boxes[2].classList.contains('comp-chosen') && boxes[4].classList.contains('chosen') && boxes[6].classList.contains('chosen')) || (boxes[6].classList.contains('comp-chosen') && boxes[4].classList.contains('chosen') && boxes[2].classList.contains('chosen'))) {
//             let list = [0, 8];
//             let i = list[Math.floor(Math.random() * list.length)];
//             boxes[i].classList.add('comp-chosen');
//             turns++;
//             console.log(turns);
//             return;
//         }
//         else { elsePlay() };
//     }

//     if (turns === 5) {
//         //by that point, the player will have stopped the attempt at making a line by the comp - so the comp should just block
//         if (boxes[2].classList.contains('comp-chosen') && boxes[4].classList.contains('chosen') && boxes[6].classList.contains('chosen') && boxes[0].classList.contains('comp-chosen') && boxes[1].classList.contains('chosen')) {
//             boxes[7].classList.add('comp-chosen');
//             turns++;
//             console.log(turns);
//             return;
//         }
//         if (boxes[2].classList.contains('comp-chosen') && boxes[4].classList.contains('chosen') && boxes[6].classList.contains('chosen') && boxes[0].classList.contains('comp-chosen') && boxes[3].classList.contains('chosen')) {
//             boxes[5].classList.add('comp-chosen');
//             turns++;
//             console.log(turns);
//             return;
//         }
//         if (boxes[2].classList.contains('comp-chosen') && boxes[4].classList.contains('chosen') && boxes[6].classList.contains('chosen') && boxes[8].classList.contains('comp-chosen') && boxes[5].classList.contains('chosen')) {
//             boxes[3].classList.add('comp-chosen');
//             turns++;
//             console.log(turns);
//             return;
//         }
//         if (boxes[2].classList.contains('comp-chosen') && boxes[4].classList.contains('chosen') && boxes[6].classList.contains('chosen') && boxes[8].classList.contains('comp-chosen') && boxes[7].classList.contains('chosen')) {
//             boxes[1].classList.add('comp-chosen');
//             turns++;
//             console.log(turns);
//             return;
//         }

//         if (boxes[8].classList.contains('comp-chosen') && boxes[0].classList.contains('chosen') && boxes[4].classList.contains('chosen') && boxes[6].classList.contains('comp-chosen') && boxes[7].classList.contains('chosen')) {
//             boxes[1].classList.add('comp-chosen');
//             turns++;
//             console.log(turns);
//             return;
//         }
//         if (boxes[8].classList.contains('comp-chosen') && boxes[0].classList.contains('chosen') && boxes[4].classList.contains('chosen') && boxes[2].classList.contains('comp-chosen') && boxes[5].classList.contains('chosen')) {
//             boxes[3].classList.add('comp-chosen');
//             turns++;
//             console.log(turns);
//             return;
//         }
//         if (boxes[0].classList.contains('comp-chosen') && boxes[4].classList.contains('chosen') && boxes[8].classList.contains('chosen') && boxes[6].classList.contains('comp-chosen') && boxes[3].classList.contains('chosen')) {
//             boxes[5].classList.add('comp-chosen');
//             turns++;
//             console.log(turns);
//             return;
//         }
//         if (boxes[0].classList.contains('comp-chosen') && boxes[4].classList.contains('chosen') && boxes[8].classList.contains('chosen') && boxes[2].classList.contains('comp-chosen') && boxes[1].classList.contains('chosen')) {
//             boxes[7].classList.add('comp-chosen');
//             turns++;
//             console.log(turns);
//             return;
//         }

//         else{elsePlay()}
        
//     }


//     else {
//         elsePlay();

//     }
// }


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
    boxes.forEach(box => box.classList.remove('chosen'));
    boxes.forEach(box => box.classList.remove('comp-chosen'))
    disableBoard = false;
    victory.classList.add('hidden');
    victory.classList.remove('victory');
    boxes.forEach(box => box.classList.remove('greyed-out'));
    defeat.classList.add('hidden');
    defeat.classList.remove('defeat');
    tie.classList.add('hidden');
    tie.classList.remove('tie');
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
    victory.classList.add('victory');
    boxes.forEach(box => box.classList.add('greyed-out'));
    pW++;
    document.getElementById('pW').textContent = "Player :" + pW;

}

function compVictory() {
    defeat.classList.remove('hidden');
    defeat.classList.add('defeat');
    boxes.forEach(box => box.classList.add('greyed-out'));
    cW++;
    document.getElementById('cW').textContent = "Opponent :" + cW;
}

function tieFunc() {
    tie.classList.remove('hidden');
    tie.classList.add('tie');
    boxes.forEach(box => box.classList.add('greyed-out'));
}
