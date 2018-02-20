## BOWLING! ##

A bowling scorecard and calculator for one person.

#### Setup ####

Clone this repo either by clicking the clone button, or open the terminal and type: 
```
git clone git@github.com/Le5tes/bowling-challenge.git 
```

#### Usage ####

Open 'Bowling.html' in your favourite browser

- Enter scores by clicking the numbered buttons
-- (X for strikes)
- Start a new game by clicking the 'New Game' button
- It adds up your score for you as you go along.

### Context ###
This was a weekend challenge from Maker's Academy.
The models for this project are [here](https://github.com/Le5tes/bowling-challenge/tree/master/jasmine-standalone-2/src).
Jasmine is the testing framework.

#### Approach ####
Much of the complexity of the scoring logic for bowling can be made much simpler by spacing it across the frame and game classes accroding to their respective responsabilities. There is no fundamental difference between the last frame and the others in that all frames expect either two or three rolls depending on whether the ten pins have been knocked down. The game class can therefore give rolls to all previous frames to use as they will. The game class is responsable for making sure there are the right number of frames, and starting new frames at the right time.

Once this basic logic was implemented, the interface and validation could be easily buit on top of it.

#### Next Steps ####
This could be quite easily extended to allow multiplayer scoring.

Currently there is little styling on the web page. Some CSS could be used to make this a bit nicer looking.
