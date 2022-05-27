/* Create Types here */
type PlayerID = 1 | 2;
type Space = 'X' | 'O' | ' ';
type PlayerSymbol = 'X' | 'O';
type Player = {id: PlayerID, symbol: PlayerSymbol}

/* 
Set event listener for the Game Board
*/
const gameBoard = document.querySelector('#gameboard');
gameBoard!.addEventListener('click', function(event: Event) {
    // Determine where the click was based on if statements
    const clicked = (<HTMLElement>event.target);
    let _player = Game.whoseTurn();
    Game.playTurn(_player, parseInt(clicked.id));
    console.log(clicked);
});



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

    const updateBoard = function(player: Player, space: number) {
        // Validate it is the player's turn

        // Update board with player move
        // Inputs are player (X/O) and square (1-9) (index position 0-8)
        // Square value will be updated with player symbol
        // Publish game board update
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

    return {updateBoard, setBoard};
})();

const Game = (function () {
    /* Module for containing game logic */

    let _playing = false; // Switch for game on
    let _playerTurn: Player;

    const startGame = function() {
        // Let player 1 choose a symbol
        // Assign player 2 the other
        // Set the turn to player 1
        // Set up the game board
        // Set _playing variable to true
    }

    const nextTurn = function () {
        // set _playerTurn to next
    }

    const playTurn = function (player: Player, space: number) {

    }

    const whoseTurn = function () {
        //Get whose turn it is
        return _playerTurn;
    }

    return {whoseTurn, playTurn};

})();

const Player = function (id: PlayerID, symbol: PlayerSymbol) {


    return {
        id,
        symbol
    }
}