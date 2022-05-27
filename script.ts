/* Create Types here */
type PlayerID = 1 | 2;
type Space = 'X' | 'O' | ' ';
type PlayerSymbol = 'X' | 'O';
interface Player {
    id: PlayerID, 
    symbol: PlayerSymbol
}

/* 
Set event listener for the Game Board
*/
const gameBoard = document.querySelector('#gameboard');
gameBoard!.addEventListener('click', function(event: Event) {
    // Determine where the click was based on if statements
    const clicked = event.target as HTMLElement;
    let _player = Game.whoseTurn();
    Game.playTurn(_player, parseInt(clicked.id));
    console.log(clicked);
});


/*
Set event listener for StartGame function
*/
const startButton = document.querySelector('#start-game');
startButton!.addEventListener('click', function() {
    if (!Game.isPlaying()) {
        Game.startGame();
        startButton?.classList.add('hidden');
    }
})



const GameBoard = (function () {
    /* 
    Object for containing the game board itself
    Game board will consist of an array to represent the spaces on the board
    */

    let _GBArray: Space[] = []; // Gameboard Array

    const setBoard = function () {
        const gameBoard = document.getElementById('gameboard');

        //Create the gameboard
        for (let i = 0; i > 8; i++) {
            _GBArray[i] = ' ';
        }
        // displayController.refresh();
    }

    const checkSpace = function(space: number) {
        // Return true if space has not been played yet
        return (_GBArray[space] != "X" && _GBArray[space] != "O");

    }

    const updateBoard = function(player: Player, space: number) {
        console.log(`Player ${player.symbol} plays in space ${space}`)
        // Update board with player move
        // Inputs are player (X/O) and square (1-9) (index position 0-8)
        // Square value will be updated with player symbol
        // Refresh the board
    }

    const checkWinner = function() {
        //Series of if statements to determine
        if ((_GBArray[0] === _GBArray[1] && _GBArray[1] === _GBArray[2]) ||
            (_GBArray[3] === _GBArray[4] && _GBArray[4] === _GBArray[5]) ||
            (_GBArray[6] === _GBArray[7] && _GBArray[7] === _GBArray[8]) || // Rows
            (_GBArray[0] === _GBArray[3] && _GBArray[3] === _GBArray[6]) ||
            (_GBArray[1] === _GBArray[4] && _GBArray[4] === _GBArray[7]) ||
            (_GBArray[2] === _GBArray[5] && _GBArray[5] === _GBArray[8]) || // Columns
            (_GBArray[0] === _GBArray[4] && _GBArray[4] === _GBArray[8]) ||
            (_GBArray[2] === _GBArray[4] && _GBArray[4] === _GBArray[6]) // Diagonals
        ) {
            // Publish game winner
        }
    }

    return {updateBoard, setBoard, checkSpace};
})();

const Game = (function () {
    /* Module for containing game logic */

    let _playing: boolean = false; // Switch for game on
    let _playerTurn: Player;

    const startGame = function() {
        // Player 1 is X, player 2 is O
        // Set the turn to player 1
        _playerTurn = player1;
        // Set up the game board
        GameBoard.setBoard();
        // Set _playing variable to true
        _playing = true;

        console.log(`startGame() / _playing: ${_playing} / playerTurn: ${_playerTurn.id}`)
    }

    const nextTurn = function () {
        // set _playerTurn to next
        if (_playerTurn === player1) {
            _playerTurn = player2;
            console.log('Switched to 2')
        } else {
            _playerTurn = player1;
            console.log('Switched to 1')
        }
    }

    const playTurn = function (player: Player, space: number) {
        if (GameBoard.checkSpace(space)) {
            GameBoard.updateBoard(player, space);
        }
        nextTurn();
    }

    const whoseTurn = function () {
        //Get whose turn it is
        return _playerTurn;
    }

    const isPlaying = function () {
        return _playing;
    }

    return {whoseTurn, playTurn, startGame, isPlaying};

})();

const displayController = (function() {

})();

const Player = function (id: PlayerID, symbol: PlayerSymbol) {
    return {
        id,
        symbol
    }
}

// Initialize player1 and player2
let player1 = Player(1, "X");
let player2 = Player(2, "O");