let player, winner = null;
let selectedPlayer = document.getElementById('selected-player');
let selectedWinner = document.getElementById('selected-winner');
let squares = document.getElementsByClassName("square")
console.log(squares)

switchPlayer('X');

function chooseSquare(id) {
    if (winner !== null) {
        return;
    }

    let square = document.getElementById(id);
    if (square.innerHTML !== '-') {
        return;
    }

    square.innerHTML = player;
    square.style.color = '#000';

    if (player === 'X') {
        player = 'O';
    } else {
        player = 'X';
    }

    switchPlayer(player);
    checkWinner();
}

function switchPlayer(valor) {
    player = valor;
    selectedPlayer.innerHTML = player;
}


// CONDITIONS
function checkWinner(){
    let square1 = document.getElementById(1);
    let square2 = document.getElementById(2);
    let square3 = document.getElementById(3);
    let square4 = document.getElementById(4);
    let square5 = document.getElementById(5);
    let square6 = document.getElementById(6);
    let square7 = document.getElementById(7);
    let square8 = document.getElementById(8);
    let square9 = document.getElementById(9);

    if (sequenceCheck(square1, square2, square3)) {
        switchSquareColor(square1, square2, square3);
        switchWinner(square1);
        return;
    }

    if (sequenceCheck(square4, square5, square6)) {
        switchSquareColor(square4, square5, square6);
        switchWinner(square4);
        return;
    }

    if (sequenceCheck(square7, square8, square9)) {
        switchSquareColor(square7, square8, square9);
        switchWinner(square7);
        return;
    }

    if (sequenceCheck(square1, square4, square7)) {
        switchSquareColor(square1, square4, square7);
        switchWinner(square1);
        return;
    }

    if (sequenceCheck(square2, square5, square8)) {
        switchSquareColor(square2, square5, square8);
        switchWinner(square2);
        return;
    }

    if (sequenceCheck(square3, square6, square9)) {
        switchSquareColor(square3, square6, square9);
        switchWinner(square3);
        return;
    }

    if (sequenceCheck(square1, square5, square9)) {
        switchSquareColor(square1, square5, square9);
        switchWinner(square1);
        return;
    }

    if (sequenceCheck(square3, square5, square7)) {
        switchSquareColor(square3, square5, square7);
        switchWinner(square3);
    }
}

function switchWinner(square) {
    winner = square.innerHTML;
    selectedWinner.innerHTML = winner;
}

function switchSquareColor(square1, square2, square3) {
    square1.style.background = '#0f0';
    square2.style.background = '#0f0';
    square3.style.background = '#0f0';
}

function sequenceCheck(square1, square2, square3) {
    let isEquals = false;

    if (square1.innerHTML !== '-' && square1.innerHTML === square2.innerHTML && square2.innerHTML === square3.innerHTML) {
        isEquals = true;
    }

    return isEquals;
}

function restart() {
    winner = null;
    selectedWinner.innerHTML = '';

    for (let square of squares) {
        square.style.backgroundColor = '#eee';
        square.style.color = '#eee';
        square.innerHTML = '-';
    }

    switchPlayer('X');
}