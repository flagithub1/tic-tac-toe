curl "https://tic-tac-toe-wdi.herokuapp.com/" \
--include \
--request PATCH \
--header "Authorization: Token token :${TOKEN}" \
--header "Content-Type: application/json" \
--data '{
  "game": {
      "id": 1,
      "cells": ["x","","","","","","","",""],
      "over":false,
      "player_x": {
        "id": 1,
        "email": "'"${EMAIL}"'"
        },
      "player_o": null
    }
}'
echo
