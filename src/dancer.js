
// Creates and returns a new dancer object that can step and animate
class MakeDancer {
  constructor(top, left, timeBetweenSteps) {
    // use jQuery to create an HTML <span> tag
    this.$node = $('<span class="dancer"></span>');
    this.timeBetweenSteps = timeBetweenSteps;
    this.step();
    this.isLinedUp = false;


    // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
    // this one sets the position to some random default point within the body
    this.setPosition(top, left);
  }

  meet(dancer) {
    var top =0;
    var left =0;
    var thisPos = this.$node.offset();
    var oDancerPos = dancer.$node.offset();
    if (thisPos.top > oDancerPos.top) {
      top = thisPos.top - (( thisPos.top - oDancerPos.top)/2);
    } else {
      top = ((oDancerPos.top - thisPos.top)/2) + thisPos.top;
    }

    if (thisPos.left > oDancerPos.left) {
      left = thisPos.left - (( thisPos.left - oDancerPos.left)/2) + ((this.$node.width())/4);
    } else {
      left = (oDancerPos.left - thisPos.left)/2 + thisPos.left - ((this.$node.width())/4);
    }

    var newPos = [top, left];
    var speed = this._calcSpeed([thisPos.top, thisPos.left], newPos);
    this.$node.animate({ top: newPos[0], left: newPos[1] }, speed);
  }

  animate() {
    var newPos = this._makeNewPosition();
    var oldPos = this.$node.offset();
    var speed = this._calcSpeed([oldPos.top, oldPos.left], newPos);
    if (this.isLinedUp === false) {
      this.$node.animate({ top: newPos[0], left: newPos[1] }, speed, this.animate.bind(this));
    }
  }

  _makeNewPosition() {
    // Get viewport dimensions (remove the dimension of the div)
    //var h = $(window).height() - this.$node.height();
    var w = $(window).width() - this.$node.width();


    var nh = Math.floor(Math.random() * (600 - 300 + 1) + 300);

    var nw = Math.floor(Math.random() * w);


    return [nh, nw];
  }

  _calcSpeed (prev, next) {
    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);
    var greatest = x > y ? x : y;
    var speedModifier = 0.1;
    var speed = Math.ceil(greatest / speedModifier);
    return speed;
  }

  step() {
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
    setTimeout(this.step.bind(this), this.timeBetweenSteps);
  }

  setPosition(top, left) {
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    //
    var styleSettings = {
      top: top,
      left: left
    };
    this.$node.css(styleSettings);
  }

  lineUp(pos1, pos2) {
    this.$node.stop();
    this.isLinedUp = true;
    this.setPosition(pos1, pos2);
  }

}

window.MakeDancer = MakeDancer;
