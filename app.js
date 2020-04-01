let board;
document.getElementById('board').addEventListener('click',handleTurn);
 {
   let idx = squares.findIndex(function(square) {
return square === event.target;
    });
};
function handleTurn(event) {
    let idx = squares.findIndex(function(square) {
        return square === event.target;
    });
    board [idx] = turn;
    console.log(board)
};

function render() {
        board.forEach(function(mark, index) {
        console.log(mark, index);
        });
        };
        function init() {
            board = [
            '', '', '',
            '', '', '',
            '', '', ''
            ];
            render();
            };
            const squares = Array.from
            (document.querySelectorAll('#board div'));
            function render() {
                board.forEach(function(mark, index) {
                    squares[index].textContent = mark;
                });
            };

function handleTurn() {
    let idx = squares.findIndex(function(square) {
        return square === event.target;
    });
    board[idx] = turn;

    if (turn === 'X') {
   turn = 'O' 
   } else {
   turn = 'X' 
   };
 
const squares = Array.from(document.querySelectorAll('#board div'));
const messages = document.querySelector('h2');
function render () {
    board.forEach(function(val, idx) {
        squares[idx].textContent = val;
    });
    messages. textContent = `${turn} turn!`;
};

let win;
win = board[0] && board[0] === board[1] && board [0] 
=== board[2] ?
board[0] : null;
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];


function handleTurn() {
    let idx = squares.findIndex(function(square) {
        return square === event.target;
    });
    board[idx] = turn;
    win = getWinner();
    render();
};
function getWinner() {
    let winner = null;
    winningCombos.forEach(function(combo, index) {
        if (board[combo[0]] && board [combo[0]] === board[combo[1]]
             && board[combo[0]] === board[combo[2]]) winner = board[combo[0]];
           });
           return winner;
        };
        messages.textContent = win ? `${win} 
        wins the game!` : ` ${turn} turn!`; 
        function getWinner() {
            let winner = null;
            winningCombos.forEach((combo, index) => {
             if (board[combo[0]] && board[combo[0]] === board[combo[1]] && board[combo[0]] === board[combo[2]]) {
           winner = board[combo[0]];
         }
             });           return winner ? winner : board.includes('') ? null : 'T';
 }; 

 messages.textContent = win === 'T' ? `That's a tie!` :/  win ? `${win} wins the game!` : ` ${turn} turn!`;/  document.getElementById('board').addEventListener
  ('click', handleMove);

  document.getElementById('reset-button').addEventListener
 ('click', init);
