'use strict'
const config = require('../config')
const store = require('../store')

const indexGame = function (data) {
  return $.ajax({
    url: config.apiUrl + '/indexGame',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}
const readGame = function (data) {
  return $.ajax({
    url: config.apiUrl + '/readGame',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}
const createGame = function (data) {
  return $.ajax({
    url: config.apiUrl + '/createGame',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}
const updateGame = function (data) {
  return $.ajax({
    url: config.apiUrl + '/updateGame',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

module.exports = {
  indexGame,
  createGame,
  readGame,
  updateGame
}
