
//Sets up the counter so that the pages will go down the line
//of the z-index and appear in the correct order.
let getGame = document.querySelector('#gameButton');
console.log(getGame);
let gameSteps = ['landing-page', 'instruction', 'level1'];
let counter = 0;
 
//FUNCTION to move from page to page and hide the other pages
//in the DOM on the button press. 
function moveToGame() {
  let step = gameSteps[counter];
  let section = document.getElementById(step);
  let zindex = window.getComputedStyle(section, null).getPropertyValue("z-index");
  section.className = 'hide';
  counter += 1;
}

//EVENT LISTENER for moveToGame
getGame.addEventListener('click', moveToGame);

//Sets VAR for the click event to start the game
let ball = document.querySelector('.ball');
let level1 = document.querySelector('#level1');
gameButton.addEventListener('click', startGame);
let clickCounter = 0;

//Starts the game and appends 1 ball to Level 1
//At the same time toggles the instruction and level1 pages on and off
//To make them appear and disappear at the correct moment.
function startGame () {
	instruction.classList.remove('hide');
	if (clickCounter === 1) {
instruction.classList.toggle('hide');
level1.classList.toggle('hide');		
let ball = document.createElement('div')
ball.classList.add('ball')
level1.append(ball)

//Adds the event for the click to run the function winner
ball.addEventListener("click", winner)
//Sets the ball to be removed from the DOM and print the text YOU WIN
function winner() {
    ball.remove();
	level1.textContent = 'YOU WIN!!!!';

}

//Selects the container and gives it an EVENT LISTENER for the click then runs function loser
let container = document.querySelector('.container')
container.addEventListener('click', loser)
//IF the user clicks the background print YOU LOSE
function loser(event) {
	if (event.target !== ball) {
		level1.textContent = 'YOU LOSE :('
			}
		}
	}
clickCounter +=1
}
//hides the level1 and instructions sections
function hidden() {
	instruction.classList.add('hide');
	level1.classList.add('hide');
}
//CALLS hidden function
hidden()

//Resets the page
let button = document.querySelector("#resetButton");
button.addEventListener('click', function(){
 	location.reload();
 })

