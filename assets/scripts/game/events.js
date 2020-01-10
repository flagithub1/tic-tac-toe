'use strict'

// const players = ['X','O']
const gameBoard = ['', '', '', '', '', '', '', '', '']
let currentPlayer = 'X'
// const validSpace = []  // unoccupied spaces

const playTurn = function (event) {
  console.log(currentPlayer)
  if (currentPlayer === 'X') {
    currentPlayer = 'O'
  } else {
    currentPlayer = 'X'
  }
  $(event.target).text(currentPlayer)
  checkWinner()
}

const checkWinner = function () {
  if (gameBoard[0] === gameBoard[1] && gameBoard[0] === gameBoard[2] && gameBoard[0] !== '') {
    console.log('winner')
  } else if (gameBoard[3] === gameBoard[4] && gameBoard[3] === gameBoard[5] && gameBoard[3] !== '') {
    console.log('winner')
  } else if (gameBoard[6] === gameBoard[7] && gameBoard[6] === gameBoard[8] && gameBoard[6] !== '') {
    console.log('winner')
  } else if (gameBoard[0] === gameBoard[3] && gameBoard[0] === gameBoard[6] && gameBoard[0] !== '') {
    console.log('winner')
  } else if (gameBoard[1] === gameBoard[4] && gameBoard[1] === gameBoard[7] && gameBoard[1] !== '') {
    console.log('winner')
  } else if (gameBoard[2] === gameBoard[5] && gameBoard[2] === gameBoard[8] && gameBoard[2] !== '') {
    console.log('winner')
  } else if (gameBoard[0] === gameBoard[4] && gameBoard[0] === gameBoard[8] && gameBoard[0] !== '') {
    console.log('winner')
  } else if (gameBoard[2] === gameBoard[4] && gameBoard[2] === gameBoard[6] && gameBoard[2] !== '') {
    console.log('winner')
  } else {
    console.log('draw')
  }
}
const restartGame = function (event) {
  console.log('next round')
}

const addHandlers = function () {
  $('#0').on('click', playTurn)
  $('#1').on('click', playTurn)
  $('#2').on('click', playTurn)
  $('#3').on('click', playTurn)
  $('#4').on('click', playTurn)
  $('#5').on('click', playTurn)
  $('#6').on('click', playTurn)
  $('#7').on('click', playTurn)
  $('#8').on('click', playTurn)
  $('#restart-game').on('click', restartGame)
}

module.exports = {
  addHandlers
}
