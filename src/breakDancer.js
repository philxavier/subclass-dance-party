var MakeBreakDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.$node = $('<img class="break-dancer" src="img/break-left.png"></img>');  
  
  this.setPosition(top, left);
  this.animate();
};
    
MakeBreakDancer.prototype = Object.create(MakeDancer.prototype);
MakeBreakDancer.prototype.constructor = MakeBreakDancer;
  
MakeBreakDancer.prototype.step = function() {
  
  MakeDancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  if (this.$node.attr('src') === 'img/break-left.png') {
    this.$node.attr('src', 'img/break-right.png');
  } else if (this.$node.attr('src') === 'img/break-right.png') {
    this.$node.attr('src', 'img/break-up.png');
  } else {
    this.$node.attr('src', 'img/break-left.png');
  }
    
};
  
MakeBreakDancer.prototype.animate = function() {
  var newPos = this._makeNewPosition();
  var oldPos = this.$node.offset();
  var speed = this._calcSpeed([oldPos.top, oldPos.left], newPos);
  if (this.isLinedUp === false) {
    this.$node.animate({ top: newPos[0], left: newPos[1] }, speed, this.animate.bind(this));
  }
};
  
MakeBreakDancer.prototype._makeNewPosition = function() {
  // Get viewport dimensions (remove the dimension of the div)
  //var h = $(window).height() - this.$node.height();
  var w = $(window).width() - this.$node.width();
  
  var nh = Math.floor(Math.random() * (600 - 300 + 1) + 300);
  var nw = Math.floor(Math.random() * w);
  
  return [nh, nw];    
};
  
MakeBreakDancer.prototype._calcSpeed = function(prev, next) {
    
  var x = Math.abs(prev[1] - next[1]);
  var y = Math.abs(prev[0] - next[0]);
  var greatest = x > y ? x : y;
  var speedModifier = 0.1;
  var speed = Math.ceil(greatest / speedModifier);
  return speed;
};
    
    