Array.prototype.last = function(){
  return this[this.length-1]
}

function Game(){
  this.frames = [new Frame()]
};

Game.prototype.roll = function(number){

  this._checkRollValid(number);

  if (this.frames.last().isComplete() && this.frames.length < 10) {
  	this.frames.push(new Frame())
  };

  this.frames.forEach(function(frame){
    frame.roll(number);
  });

};

Game.prototype.score = function(){

	score = 0

  this.frames.forEach(function(frame){
  	score += frame.score();
  });

  return score
};

Game.prototype.isFinished = function(){
  return ((!this.frames.last().isRollExpected()) && this.frames.length >= 10)
};

Game.prototype._checkRollValid = function(roll){
  console.log(this.frames.last().score() + roll)
  if(this.isFinished()){
    throw(new Error("Game Finished: can't roll"))
  } else if (typeof(roll) != 'number' || roll > 10 || roll < 0){
    throw(new Error("Invalid Roll"))
  } else if (!this.frames.last().isComplete() && (this.frames.last().score() + roll) > 10){
    throw(new Error("Invalid Roll"))
  };
};
