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
    //  mark an x or an o
    function playerMove(square) {
      if (square.innerHTML == "") {
        square.innerHTML = currentPlayer.marker;
      }
    }
    // check to see if there's a winner
    playerMove(this)
    function getId(number) {
      return document.getElementById('s' + number).innerHTML
    }
    function check(a, b, c, move) {
      var result = false;
      if (getId(a) == move && getId(b) == move && getId(c) == move) {
      result = true;
    } return result

      }

    }
    function getWinner() {
      if (currentPlayer.marker == ) {
      }
    }
    switchTurns()
  })
}
