//Pseudoclassical Break Dancer
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
