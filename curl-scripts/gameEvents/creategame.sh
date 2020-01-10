curl "https://tic-tac-toe-wdi.herokuapp.com/creategame" \
--include \
--request GET \
--header "Authorization: Token token :${TOKEN}"
--header "Content-Type: application/json" \
--data '{
  "game": {
      "id": 3,
      "cells": ["","","","","","","","",""],
      "over": false,
      "player_x": {
        "id": 1,
        "email": "'"${EMAIL}"'
      },
      "player_o": null
    }
}'
echo
