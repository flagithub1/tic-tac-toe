curl "https://sei-library-api.herokuapp.com/sign-out" \
--include \
--request DELETE \
--header "Authorization: Token token :${TOKEN}" \

echo
