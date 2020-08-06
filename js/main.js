/*------Constants------*/


//randomize a player to start first 
//make an X and an O to appear on the board once a square is clicked on 
//give X and O an animation when clicked on an emoty square
//cut off function for a square that has been clicked on 

//cycle thru turns once a move is made
//make a way for the game to register what combinations of squares win the game 
//check for a winner
//make game end once the proper combination of moves have been met
//make a functions to reset game once a button is clicked (reset)
//render the game to display its current state after a command 

const victory = new Audio('audio/victory.wav');

const winCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6], 
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

/*------Variables (state)------*/

// Variables might include (board/turn/winner)
let board;
let turn = 'X'
let winner;
/*------Cached Element References------*/
const message = document.getElementById("next")
const box = document.getElementById("board")
const restart = document.getElementById("reset")
const squares = document.querySelectorAll('.board div');
// You might choose to put your game status here

/*------Event Listeners------*/

// This is where you should put the event listener
// for a mouse-click
restart.addEventListener('click', function () {
  init();
});

document.getElementById('board').addEventListener('click', makeMove);
/*------Functions------*/
init();

function init() {
  board = [
  '', '', '',
  '', '', '',
  '', '', ''
  ];
  winner = null;
  render();
  };

function makeMove(event) {
  const idx = parseInt(event.target.id.replace('sq', ''));
    if (board[idx] || winner) return;
    
    board[idx] = turn;
    turn = turn === 'X' ? 'O' : 'X';
    
    win = getWinner();
    render();
}

function getWinner() {
    winCombos.forEach(function(combo, index) {
      if (board[combo[0]] && board[combo[0]] === board[combo[1]] && board[combo[0]] === board[combo[2]]) {
        
    winner = board[combo[0]];
    isWinner = true
    confetti.start(5000);
    setTimeout(function(){victory.play();},1000);
    }
  });

  };
  

  function render() {
    board.forEach(function(input, index) {
      squares[index].textContent = input;
    });
    if (winner === 'Draw') {
      message.textContent = 'To the Shadow Realm! The both of you!';
    } else if(winner) {
      message.textContent = `It looks like ${winner} has avoided a trip to the Shadow Realm!`;  
    } else { 
      message.textContent = `${turn}'s turn...`
    }
  };


// Some functions you might choose to use:

// Initialization function:
// Where you set your initial state, setting up 
// what the board will look like upon loading

// On-Click function:
// Set up what happens when one of the elements
// is clicked


// Check winner function:
// Checks the current state of the board for
// a winner and changes the state of the winner
// variable if so


// Render function:
// Displays the current state of the board
// on the page, updating the elements to reflect
// either X or O depending on whose turn i
