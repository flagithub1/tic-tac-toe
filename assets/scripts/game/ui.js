'use strict'
const store = require('./../store')

const indexGame = function (response) {
  $('#indexGame').click('indexGame')
  console.log(response)
}

const playTurn = function(response) {
 $('.game-cell').click('playTurn')
  console.log(response)
}
const startGame = function (response) {
  $('#start-game').click('startGame')
  console.log(response)
}
const restartGame = function (response) {
  $('#restart-game').click('restartGame')
  console.log(response)
module.exports{
  indexGame,
  playTurn,
  startGame,
  restartGame
}
