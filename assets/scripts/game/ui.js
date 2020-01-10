'use strict'
const store = require('./../store')

const indexGame = function (response) {
  $('#indexGame').click('indexGame')
  console.log(response)
}

const playTurn = function (response) {
  $('.game-cell').click('playTurn!')
  console.log(response)
}
