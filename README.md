# Application Title: Tic Tac Toe

This application is built for entertainment purpose only,nothing serious.It allows  users, after they sign-up/sign-in, to play the game of Tic tac Toe , where players take alternate turn,the users can see when they make a wrong move,it will show which player wins or if it's a draw, how many games played(statistics) ,and after a win or a draw the board should be clear for another game ,if you think the reason why you keep losing is your password choice,you can change your pw as well:) at that point players can decide to keep playing or sign-out when they finish playing.

## Important Links

- [Other Repo](http://localhost:7165/?passwords%5Bold%5D=2&passwords%5Bnew%5D=1)
- [Deployed API](https://github.com/flagithub1/tic-tac-toe)
- [Deployed Client](https://github.com/flagithub1/tic-tac-toe)



## Planning Story
I found out the hard way that, it really helps  to stick to the schedule,work on a piece of the puzzle, then another ,don't rush or precipitate things,always try to add and commit after each section, usually ,I tend to ignore the the instructions and try to attack it all at once,but as i learned that's a recipe for disaster,it's in your best interest take the step by step approach, from now on and future projects,break it down in small pieces to better complete the task.



### User Stories

Logged out user:
As a logged out user i have to sign-up with email, password and password-confirmation

if email already taken, then show message(error)
-if password and password confirmation don't match, then show error message and clear form
-if email is unique and password and pwc match, then show success message and clear form
As a logged out user i should be able to sign-in with email and password
-if email is incorrect , then show error message and clear form
-if password is incorrect, then show error message and clear form
-if email and password are correct , then show success message and sign them in
As a logged in user
-i should be able to start the game

i should know whose turn it is.
i should know illegal moves, so i can avoid them.
i should know all possible ways of winning.
i should know the rules, so that i know who wins or it's a draw.
-should be able to change my old pw to a new pw
i should be able to sign-out after playing the game
### Technologies Used

- jQuery
- HTML/CSS
- Bootstrap
- Javascript
- Ajax
- Node.js
- API

### Unsolved Problems

- Still need to determine when 'X' or 'O  wins or draw (checkWinner), alternate turn
   (playerXTurn,playerOTurn)
- define occupiedCell,wrongMove. Make move in only emptyCell,when clicking on occupiedCell it should display(alert) wrongMove ,show how many games played,(gameCount)
- still need to add functionality to the  buttons (clearBoard,startGame)
- Would like to eventually finish and submit the project.

## Images

https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/p720x720/81772604_850181638765808_5067977425489494016_o.jpg?_nc_cat=107&_nc_ohc=ibtHA2vIp1QAX_wBBMs&_nc_ht=scontent-lga3-1.xx&_nc_tp=1&oh=b6621858ae72a6a33172fb00dc089a21&oe=5E8DE1F7
#### Wireframe:
