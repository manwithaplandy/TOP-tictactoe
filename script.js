"use strict";
/*
Set event listener for the Game Board
*/
const gameBoard = document.querySelector('#gameboard');
gameBoard.addEventListener('click', function (event) {
    // Determine where the click was based on if statements
    // Check game is active before firing
    if (Game.isPlaying()) {
        const clicked = event.target;
        let _player = Game.whoseTurn();
        Game.playTurn(_player, parseInt(clicked.id));
        // console.log(clicked);
    }
});
/*
Set event listener for StartGame function
*/
const startButton = document.querySelector('#start-game');
startButton.addEventListener('click', function () {
    if (!Game.isPlaying()) {
        Game.startGame();
        startButton === null || startButton === void 0 ? void 0 : startButton.classList.add('hidden');
    }
});
const GameBoard = (function () {
    /*
    Object for containing the game board itself
    Game board will consist of an array to represent the spaces on the board
    */
    let _GBArray = []; // Gameboard Array
    const setBoard = function () {
        const gameBoard = document.getElementById('gameboard');
        //Create the gameboard
        for (let i = 0; i < 8; i++) {
            _GBArray[i] = '-';
        }
        displayController.refresh();
    };
    const checkSpace = function (space) {
        // Return true if space has not been played yet
        return (_GBArray[space] != "X" && _GBArray[space] != "O");
    };
    const updateBoard = function (player, space) {
        console.log(`Player ${player.symbol} plays in space ${space}`);
        // Update board with player move
        // Inputs are player (X/O) and square (1-9) (index position 0-8)
        // Square value will be updated with player symbol
        // Refresh the board
        _GBArray[space] = player.symbol;
        displayController.refresh();
    };
    const checkWinner = function () {
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
    };
    const getSpace = function (space) {
        return _GBArray[space];
    };
    return { updateBoard, setBoard, checkSpace, getSpace };
})();
const Game = (function () {
    /* Module for containing game logic */
    let _playing = false; // Switch for game on
    let _playerTurn;
    const startGame = function () {
        // Player 1 is X, player 2 is O
        // Set the turn to player 1
        _playerTurn = player1;
        // Set up the game board
        GameBoard.setBoard();
        // Set _playing variable to true
        _playing = true;
        console.log(`startGame() / _playing: ${_playing} / playerTurn: ${_playerTurn.id}`);
    };
    const nextTurn = function () {
        // set _playerTurn to next
        if (_playerTurn === player1) {
            _playerTurn = player2;
        }
        else {
            _playerTurn = player1;
        }
    };
    const playTurn = function (player, space) {
        if (GameBoard.checkSpace(space)) {
            GameBoard.updateBoard(player, space);
        }
        nextTurn();
    };
    const whoseTurn = function () {
        //Get whose turn it is
        return _playerTurn;
    };
    const isPlaying = function () {
        return _playing;
    };
    return { whoseTurn, playTurn, startGame, isPlaying };
})();
const displayController = (function () {
    const refresh = function () {
        for (let i = 0; i < 8; i++) {
            const _square = document.querySelector(`.S${i}`);
            console.log(_square);
            _square.textContent = GameBoard.getSpace(i);
            console.log(_square.textContent);
        }
        console.log('Refreshed');
    };
    return { refresh };
})();
const Player = function (id, symbol) {
    return {
        id,
        symbol
    };
};
// Initialize player1 and player2
let player1 = Player(1, "X");
let player2 = Player(2, "O");
