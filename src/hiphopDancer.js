var MakeHipHopDancer = function(top, left, timeBetweenSteps) {
    MakeDancer.call(this, top, left, timeBetweenSteps);
    // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
    // so we must keep a copy of the old version of this function
    this.$node = $('<img class="hiphop-dancer" src="img/hiphop-left.png"></img>');  
    this.setPosition(top, left);
    this.animate();
  };
  
  MakeHipHopDancer.prototype = Object.create(MakeDancer.prototype);
  MakeHipHopDancer.prototype.constructor = MakeHipHopDancer;
  
  MakeHipHopDancer.prototype.step = function() {
  
    MakeDancer.prototype.step.call(this);
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    if (this.$node.attr("src") === 'img/hiphop-left.png') {
      this.$node.attr("src", "img/hiphop-right.png");
    } else if (this.$node.attr("src") === 'img/hiphop-right.png') {
      this.$node.attr("src", "img/hiphop-left.png");
    }
    
  };

  MakeHipHopDancer.prototype.animate = function() {
    var newPos = this._makeNewPosition();
    var oldPos = this.$node.offset();
    var speed = this._calcSpeed([oldPos.top, oldPos.left], newPos);
    
    this.$node.animate({ top: newPos[0], left: newPos[1] }, speed, this.animate.bind(this));
  };

  MakeHipHopDancer.prototype._makeNewPosition = function() {
        // Get viewport dimensions (remove the dimension of the div)
        var h = $(window).height() - this.$node.height();
        var w = $(window).width() - this.$node.width();
        
        var nh = Math.floor(Math.random() * h);
        var nw = Math.floor(Math.random() * w);
        
        return [nh,nw];    
  }

  MakeHipHopDancer.prototype._calcSpeed = function(prev, next) {
    
    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);
    
    var greatest = x > y ? x : y;
    
    var speedModifier = 0.1;

    var speed = Math.ceil(greatest/speedModifier);

    return speed;

}
  
  