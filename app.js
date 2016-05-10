var game = {
  player1: {
    marker: "X"
  },
  player2: {
    marker: "O"
  }
}

var currentPlayer = game.player1

function switchTurns(){
  if(currentPlayer == game.player1){
    currentPlayer = game.player2
  } else {
    currentPlayer = game.player1
  }
}

var squares = document.querySelectorAll('.square');

for(var i = 0; i < squares.length; i = i + 1) {
  squares[i].addEventListener('click', function(){
    console.log(this)
    // check if the square has already been marked
    function playerMove(square) {
      if (square.innerHTML == "") {
        square.innerHTML = currentPlayer.marker;
      }
    }
    //  mark an x or an o
    // check to see if there's a winner
    playerMove(this)
    switchTurns()
  })
}
