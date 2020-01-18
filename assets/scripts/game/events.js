'use strict'

// const players = ['X','O']
let gameBoard = ['', '', '', '', '', '', '', '', '']
let currentPlayer = 'X'
const switchPlayer = function () {
  if (currentPlayer === 'X') {
    currentPlayer = 'O'
  } else {
    currentPlayer = 'X'
  }
}

const playTurn = function (event) {
  console.log(currentPlayer)

  if (!this.innerHTML) {
    this.innerHTML = currentPlayer
    const input = this.id
    gameBoard[input] = this.innerHTML
    checkWinner()
    switchPlayer()
  }
}
//  $(event.target).text(currentPlayer)

const checkWinner = function () {
  if (gameBoard[0] !== '' && gameBoard[0] === gameBoard[1] && gameBoard[0] === gameBoard[2]) {
    console.log('winner')
    $('#message').text('WINNER')
  } else if (gameBoard[3] === gameBoard[4] && gameBoard[3] === gameBoard[5] && gameBoard[3] !== '') {
    console.log('winner')
    $('#message').text('WINNER')
  } else if (gameBoard[6] === gameBoard[7] && gameBoard[6] === gameBoard[8] && gameBoard[6] !== '') {
    console.log('winner')
    $('#message').text('WINNER')
  } else if (gameBoard[0] === gameBoard[3] && gameBoard[0] === gameBoard[6] && gameBoard[0] !== '') {
    console.log('winner')
    $('#message').text('WINNER')
  } else if (gameBoard[1] === gameBoard[4] && gameBoard[1] === gameBoard[7] && gameBoard[1] !== '') {
    console.log('winner')
    $('#message').text('WINNER')
  } else if (gameBoard[2] === gameBoard[5] && gameBoard[2] === gameBoard[8] && gameBoard[2] !== '') {
    console.log('winner')
    $('#message').text('WINNER')
  } else if (gameBoard[0] === gameBoard[4] && gameBoard[0] === gameBoard[8] && gameBoard[0] !== '') {
    console.log('winner')
  }
}
const startGame = function (event) {
  event.preventDefault()
  console.log('next game')

  $(event.target).text(startGame)
}
const restartGame = function (event) {
  event.preventDefault()
  $('.col-4').text('')
  gameBoard = ['', '', '', '', '', '', '', '', '']
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
  $('#start-game').on('click', startGame)
  $('#restart-game').on('click', restartGame)
}

module.exports = {
  addHandlers
}
