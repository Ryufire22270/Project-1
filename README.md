# Project Overview for BALL BOUNCER

## Screen Capture Video Link

https://drive.google.com/file/d/1BxlytwQsEYO_fYcVoUpo2otGhr8l9CrP/view

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Wireframe and Priority Matrix | Complete
|Day 2| Base Html and CSS styling | Complete
|Day 3| Basic Functionality for Game | Complete
|Day 4| Working Prototype/ Game Completion (possible adding PMVP tasks)| Complete
|Day 5| Double checking prototype (possibly completing PMVP tasks)  | Incomplete
|Day 6| Project Presentation | Incomplete


## Project Description

My first project is going to be a simple click game.  It has one way to win and one way to lose.  The user Initiates the game with the Start Game button and with an IF statement saying that if the button is clicked run the playGame() function.  My biggest crux at the moment is figuring out how to make collision detection for the walls of the container where the game will be functioning. As well as dealing with the how to set up the ball object so that it is able to move through the container.  Basically how to make the ball object bounce off of the walls of the container and how to make the ball move and appear in the first place.  The only way to win the game is by using another IF statement that says when the ball is clicked the program sends the user to the win page which will print that they have won, ELSE if they click on any other part of the container the program will send them to the losing screen which will print on the screen that the user has lost.  Both winning and losing pages will have a reset button which will send the user back to the init. page to start the game all over again.

## Wireframes

- Level 1 and PMVP ideas
https://res.cloudinary.com/divbx6fna/image/upload/v1537899398/Project%201/20180925_110350.jpg

- Init Page and Functions for game
https://res.cloudinary.com/divbx6fna/image/upload/v1537899396/Project%201/20180925_110339.jpg

- Questions
https://res.cloudinary.com/divbx6fna/image/upload/v1537899395/Project%201/20180925_111424.jpg

- Priority Matrix
https://res.cloudinary.com/divbx6fna/image/upload/v1537899395/Project%201/20180925_110331.jpg

- Wins/Lose Conditions and Reset
https://res.cloudinary.com/divbx6fna/image/upload/v1537899395/Project%201/20180925_110356.jpg

 - Full Picture
https://res.cloudinary.com/divbx6fna/image/upload/v1537899395/Project%201/20180925_110430.jpg

## Priority Matrix

https://res.cloudinary.com/divbx6fna/image/upload/v1537899395/Project%201/20180925_110331.jpg
 
### MVP/PostMVP - 5min

#### MVP:

 - Init Page
 - Create board and collision
 - Game Functionality (First a hardcoded direction, then a random one)
 - Win and Loss Conditions
 - Reset the game

#### PMVP:

 - Create level 2-5
 - Make the balls duplicate by times 2 each level
 - Make the ball go faster for each level
 - Give the balls collision so they can bump into each other without going through
 - Make a timer and use the overall times for the high score.
 - Create a form tool the players name for the high score board
 - 5 lives instead of 1 life
 - Setting a function to randomly place the ball in a different location every time the game is played.

## Functional Components

Based on the initial logic defined in the previous sections try and breakdown the logic further into functional components, and by that we mean functions.  Try and capture what logic would need to be defined if the game was broken down into the following categories.

### Game Initialization
The user will be presented with a page that has a sticky header with the words Ball Bouncer printed in an h1 denoting this as the title.  Below will be a button which will run the game and below that in an h2 and an h3 it will print the instructions as follows.  “Instructions: Click the ball and YOU WIN!  If you mis-click though YOU LOSE!!!”.  Once the button has been clicked the game starts.

### Playing The Game 
When the button has been clicked as stated above then a container appears in the middle of the screen.  This continuer has collision for all of its walls so that the ball can bounce off of them.  Then a ball object is spawned in a location inside of the container and starts to move in a direction at a random speed  between .  The key to the game is to click the ball without missing.

### Winning The Game
As stated above the key to the game is to click the moving ball IF the ball is clicked it will print YOU WIN!!! on the page ELSE it will print YOU LOSE!!! In both situation a reset button will be printed along with the win or loss.

### Resetting The Game
There will be a reset button on each of the win or loss pages in the bottom right corner in order to keep it out of the way.  This reset button will send the user back to the Init. Page.


Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe.

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Wireframing and Priority Matrix  | A | 3hrs | 6hrs | 6hrs |
| Initiation Page | C | 3hrs | 1hr | 7hrs |
| Board and Collision | A | 4hrs | 2.5hrs | 9.5hrs |
| Game Functionality | A | 8hrs | 8hrs | 17.5hrs |
| (For GF Hardcoding Direction) |  | (4hrs) |  | |
| (For GF Random Direction) |  | (4hrs) |  |  |
| Win/Loss Condition | A | 4hrs | 2hr | 19.5 |
| Reset Game | C | 3hrs | 1.5hr | 22hrs |
| PMVP (Only if possible) | D | 8hrs |  |  |
| Total | / | 22hrs(30hrs) | 22hrs | 22hrs |

## Helper Functions
Helper functions should be generic enought that they can be reused in other applications. Use this section to document all helper functions that fall into this category.

| Function | Description | 
| --- | :---: |  
| remove | used to remove objects from the DOM |
| append | used to append objects to the DOM |
| location.reload() | used to reset the page |

## Additional Libraries

Code for Location Reload
https://developer.mozilla.org/en-US/docs/Web/API/Location/reload
https://www.w3schools.com/jsref/met_loc_reload.asp
window getComputedStyle() Method understanding
https://www.w3schools.com/jsref/jsref_getcomputedstyle.asp
remove() method review
https://www.w3schools.com/jsref/met_select_remove.asp

## Code Snippet

@keyframes ballMoveX {
from { left: 0%; } to { left: 90%; }
}

@keyframes ballMoveY {
from { top: 0%; } to { top: 90%; }
}

CSS Transition that will move a ball inside the container it is given by changing it's X and Y coordinates between 0% and 90% of the container it is in.

## Change Log

- Had to chang the functions around a little bit from when I first wireframed it.  The functions still do the things I want them too its just I did not need nearly as many functions. 

## Issues and Resolutions
 
Appending objects to the DOM
	- Issue: I had a bit of trouble when I was trying to get only one ball appending to my DOM for some reason whenever I would press the start game button it would append a ball, so if I pressed it twice I would end up with two balls instead of one.
	- Solution: When I looked through my code it turns out that I was calling the counter that was appending the ball every time I clicked the button so I just set the variable to a hardcode so that when it was set to 1 a ball would appear but not in any other situation.

Setting the Win and Loss Cons.
	- Issue: For some reason when I set up the code for both conditions they were not working no matter what I tried.
	- Solution: Turns out I overcomplicated my code and called a variable twice which cause errors. Also the fact that the function was not running inside of the game. So I move the functions inside of the startGame() and eliminated the redundant code and it was all fixed.
