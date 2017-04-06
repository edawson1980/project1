# project1

game to create:  Simon.

User stories:

1.  program will generate a visual pattern for user to follow
2.  user should be able to replicate pattern by clicking corresponding panels
3.  user will be able to track score throughout course of the game.
4.  there will be sound clips to correspond with the game action.
      ex:  reward sound when correct panel clicked.
           error sound when incorrect panel is clicked.
5.  game will be visually appealing and engaging to the user.


Wireframe:

themes:  80s style, 16-bit, NES


DELIVERABLES:
Gold:  Full sound, panels formatted to curve like the panels on the actual game, a way to have either one or two-player modes, track score across time, have a high-score panel to display (like in an arcade game)

Silver:  up to two players, non-curved panels, but very high quality colors (with shading and reflections of light sources).  track score across several games.

Bronze:  title box, score box, alert noises, 4 basic colored panels, one player

TECHNOLOGIES USED:
JavaScript, jquery, html5, css.

APPROACH TAKEN:
I built the basic html and css framework first, and then tackled the JS piece by piece.  First I set my "colors"(lights/buttons/panels) to variables.  Then I created a function to generate a random color from the array that I had created to hold the lights.
Then I set up a click event to fire to fire when New Game is clicked: that will set the randomColor function into motion, and then push that result to the end of the patterns array
Then i wrote a loop, using forEach that will iterate over each element in the patterns array, and will make each element "blink" (by using setTimeout and the toggleClass selector).
This basically takes care of the Computer Moves section.

Then I wrote a function for each of the four colors that will push the value of whichever color is clicked to the end of the user array.  I put that into a for statement that essentially read:
        if the last element in the User array does not match the last element in the Pattern array, alert with the message "GAME OVER".  otherwise, run the "computer moves" function again (selecting a random color and then pushing it to pattern array).

INSTALLATION INSTRUCTIONS:
fork and clone this repo, then open index.html in your browser.
script3.js is the only js file linked to index.html.  the other js files are to be ignored.

UNSOLVED PROBLEMS:
1) the audio clip would not play because the audio variable is undefined.  i was unable to figure out why it was undefined, and so removed the audio reference in my script file because the game functionality would not load at all otherwise
2) after the first interaction between Computer and User, buttons start being fired in multiples
3) comparisons between what the user array and the pattern array do not register as being !=, even when they are.
