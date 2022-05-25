const gameBoard = (function () {
    /* 
    Object for containing the game board itself
    Game board will consist of an array to represent the spaces on the board
    */

    let GBArray = []; // Gameboard Array

    const clearBoard = function () {
       //Clear the game board
    }

    const makeBoard = function () {
        //Create the gameboard
    }

    const updateBoard = function(player, square) {
        // Update board with player move
        // Inputs are player (X/O) and square (1-9) (index position 0-8)
        // Square value will be updated with player symbol
        // Publish game board update
    }

    const checkWinner = function() {
        //Series of if statements to determine
        if ((GBArray[0] === GBArray[1] && GBArray[1] === GBArray[2]) ||
            (GBArray[3] === GBArray[4] && GBArray[4] === GBArray[5]) ||
            (GBArray[6] === GBArray[7] && GBArray[7] === GBArray[8]) || // Rows
            (GBArray[0] === GBArray[3] && GBArray[3] === GBArray[6]) ||
            (GBArray[1] === GBArray[4] && GBArray[4] === GBArray[7]) ||
            (GBArray[2] === GBArray[5] && GBArray[5] === GBArray[8]) || // Columns
            (GBArray[0] === GBArray[4] && GBArray[4] === GBArray[8]) ||
            (GBArray[2] === GBArray[4] && GBArray[4] === GBArray[6]) // Diagonals
        ) {
            // Publish game winner
        }
    }
})();