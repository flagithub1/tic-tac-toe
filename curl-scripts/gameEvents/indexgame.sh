curl "https://tic-tac-toe-wdi.herokuapp.com/indexgame" \
--include \
--request POST \
--header "Authorization: Token token :${TOKEN}"
--header "Content-Type: application/json" \
--data'{
  "games": [
    {
      "id": 1,
      "cells": ["o","x","o","x","o","x","o","x","o"],
      "over": true,
      "player_x": {
        "id": 1,
        "email": "and@and.com"
      },
      "player_o": null
    },
    {
      "id": 2,
      "cells": ["","","","","","","","",""],
      "over": false,
      "player_x": {
        "id": 3,
        "email": "dna@dna.com"
      },
      "player_o": null
    }
  ]
}'
echo
