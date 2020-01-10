curl "https://tic-tac-toe-wdi.herokuapp.com/showgame" \
--include \
--request GET \
--header "Authorization: Token token :${TOKEN}"
--header "Content-Type: application/json" \
--data '{
  "game": {
   "id": 1,
   "cells": ["o","x","o","x","o","x","o","x","o"],
   "over": true,
   "player_x": {
     "id": 1,
     "email": "'"${EMAIL}"'"
   },
   "player_o": null
 }
}'
echo
